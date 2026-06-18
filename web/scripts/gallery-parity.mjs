#!/usr/bin/env node
/**
 * Gallery parity dev loop — functional smoke test of our local gallery vs the
 * live site (https://www.arohan.dev) across a fixed set of route pairs.
 *
 * Philosophy: parity = "functionally the same when an agent inspects both",
 * NOT pixel-perfect or count-equal. We assert the things that genuinely must
 * match (same set of tags, both routes actually render gallery content, the
 * expected affordances are present) and dump side-by-side screenshots for
 * eyeball comparison of everything else.
 *
 *   yarn workspace web parity         # headless
 *   HEADFUL=1 yarn workspace web parity   # visible window for debugging
 */
import { firefox } from "playwright"
import { mkdirSync, writeFileSync } from "node:fs"
import { join, resolve } from "node:path"

const ROUTES = [
  { name: "all", prod: "/gallery", local: "/photography" },
  { name: "landscapes", prod: "/gallery/landscapes", local: "/photography/landscapes" },
  { name: "best", prod: "/gallery/best", local: "/photography/best" },
  { name: "macro", prod: "/gallery/macro", local: "/photography/macro" },
]

const PROD_BASE = "https://www.arohan.dev"
const LOCAL_BASE = "http://localhost:8000"
const OUT_DIR = "__playwright-out__"
const HEADFUL = process.env.HEADFUL === "1"
const TIMEOUT_NAV = 30_000
const TIMEOUT_READY = 15_000

async function measure(page, url, kind /* 'prod' | 'local' */) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: TIMEOUT_NAV })
  // Site-specific readiness signal.
  const readySelector = kind === "local" ? '[data-gallery-ready="true"]' : "img"
  try {
    await page.waitForSelector(readySelector, { timeout: TIMEOUT_READY })
  } catch {
    /* timed out — still measure what we can */
  }
  // Let the masonry settle so screenshots/image counts are stable.
  await page.waitForTimeout(800)

  return await page.evaluate(kind => {
    const tagSelector =
      kind === "prod"
        ? "a.tag-list__gallery__link"
        : 'nav[aria-label="Gallery tags"] a'
    const tags = Array.from(document.querySelectorAll(tagSelector))
      .map(a => (a.textContent || "").trim())
      .filter(t => t && t !== "all")
    const galleryImgs = Array.from(document.querySelectorAll("img")).filter(img => {
      const src = img.currentSrc || img.src || ""
      return src.includes("cdn.sanity.io/images/")
    })
    const sample = galleryImgs[0]
    const sampleTile = sample?.closest("picture")?.parentElement || null
    const sampleTileBg = sampleTile ? getComputedStyle(sampleTile).backgroundImage : ""
    // LQIP signal — base64 jpeg placeholder set as background of the tile
    const lqipOnSample =
      typeof sampleTileBg === "string" &&
      sampleTileBg.includes("data:image/jpeg;base64")
    // Recent-photo dot: little red square/circle absolutely positioned in a
    // tile. Detect by inline background-color (React serialises #E20612 as
    // rgb(226, 6, 18)). Existence-only check — not count-matching.
    const recentDots = Array.from(document.querySelectorAll("div")).filter(d => {
      const bg = (d.style.backgroundColor || "").replace(/\s/g, "")
      return bg === "rgb(226,6,18)"
    })
    return {
      tagCount: tags.length,
      tagLabels: [...new Set(tags)].sort(),
      imageCount: galleryImgs.length,
      hasPicture: !!document.querySelector("picture"),
      hasGalleryReady: !!document.querySelector('[data-gallery-ready="true"]'),
      pageHasError:
        (document.body.textContent || "").includes("Couldn't load") ||
        (document.body.textContent || "").includes("Cross-Origin"),
      sampleSrc: sample?.currentSrc || sample?.src || null,
      lqipOnSample,
      recentDotCount: recentDots.length,
    }
  }, kind)
}

function check(name, ok, detail = "") {
  return { name, ok, detail }
}

function compareRoute(prod, local) {
  const checks = []
  checks.push(check("local page has no fetch/CORS error", !local.pageHasError))
  checks.push(
    check(
      "local renders gallery images",
      local.imageCount > 0,
      `local=${local.imageCount}`
    )
  )
  checks.push(
    check(
      "prod renders gallery images (sanity)",
      prod.imageCount > 0,
      `prod=${prod.imageCount}`
    )
  )
  // The full tag-set is shared data and genuinely must agree.
  checks.push(
    check(
      "same set of tags",
      JSON.stringify(prod.tagLabels) === JSON.stringify(local.tagLabels),
      `prod=${prod.tagLabels.length} local=${local.tagLabels.length}` +
        (JSON.stringify(prod.tagLabels) !== JSON.stringify(local.tagLabels)
          ? ` | diff: prod-only=${prod.tagLabels.filter(t => !local.tagLabels.includes(t))}; local-only=${local.tagLabels.filter(t => !prod.tagLabels.includes(t))}`
          : "")
    )
  )
  // Functional affordance: WebP <picture> on both implies responsive image loading.
  checks.push(
    check(
      "both render <picture> elements (responsive images)",
      prod.hasPicture && local.hasPicture
    )
  )
  // Local-only: our perf rework should have set the ready flag.
  checks.push(
    check(
      "local: data-gallery-ready=\"true\" present (metadata-driven init)",
      local.hasGalleryReady
    )
  )
  // Local-only: LQIP blur placeholder must be in place on the first tile so
  // the user sees something before the real image streams in.
  checks.push(
    check(
      "local: LQIP placeholder on sample tile",
      local.lqipOnSample
    )
  )
  // Functional parity: both sides show a recent-photo dot if any image in this
  // route is <30d old. We don't require equal counts (data drift between
  // builds), just consistent presence/absence.
  checks.push(
    check(
      "recent-photo dot presence matches (both have one or neither does)",
      (prod.recentDotCount > 0) === (local.recentDotCount > 0),
      `prod=${prod.recentDotCount} local=${local.recentDotCount}`
    )
  )
  return checks
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true })
  const browser = await firefox.launch({ headless: !HEADFUL })
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()

  const summary = []
  let totalFailed = 0

  for (const route of ROUTES) {
    const dir = join(OUT_DIR, route.name)
    mkdirSync(dir, { recursive: true })
    console.log(`\n=== ${route.name}  (${route.local} ↔ ${route.prod}) ===`)

    console.log(`  → measuring prod ${route.prod}`)
    const prod = await measure(page, PROD_BASE + route.prod, "prod")
    await page.screenshot({ path: join(dir, "prod.png"), fullPage: true })

    console.log(`  → measuring local ${route.local}`)
    const local = await measure(page, LOCAL_BASE + route.local, "local")
    await page.screenshot({ path: join(dir, "local.png"), fullPage: true })

    // Hover-scale functional check (local only). Use a real mouse move so
    // React's synthetic onMouseEnter fires, then read back the inline
    // transform we set on the image.
    let hoverScale = null
    try {
      const firstImg = await page.$('[data-gallery-ready] picture img')
      if (firstImg) {
        await firstImg.scrollIntoViewIfNeeded()
        await firstImg.hover({ force: true })
        await page.waitForTimeout(250)
        hoverScale = await firstImg.evaluate(el => el.style.transform || null)
        // Park the mouse off-element so we don't leak hover state to screenshot.
        await page.mouse.move(0, 0)
      }
    } catch {
      /* ignore — hover is a soft check */
    }
    local.hoverScale = hoverScale

    const checks = compareRoute(prod, local)
    checks.push(
      check(
        "local: hover triggers scale transform on tile",
        typeof local.hoverScale === "string" && local.hoverScale.includes("scale("),
        `transform=${local.hoverScale || "(none)"}`
      )
    )
    for (const c of checks) {
      console.log(`    ${c.ok ? "✓" : "✗"} ${c.name}` + (c.detail ? `   (${c.detail})` : ""))
      if (!c.ok) totalFailed++
    }
    summary.push({ route: route.name, prod, local, checks })
  }

  writeFileSync(join(OUT_DIR, "results.json"), JSON.stringify(summary, null, 2))
  await browser.close()

  console.log(
    `\n${totalFailed === 0 ? "✓ ALL PASS" : "✗ " + totalFailed + " assertion(s) FAILED"}`
  )
  console.log(`Screenshots: ${resolve(OUT_DIR)}/<route>/{prod,local}.png`)
  console.log(`Full metrics: ${resolve(OUT_DIR)}/results.json\n`)
  process.exit(totalFailed === 0 ? 0 : 1)
}

main().catch(err => {
  console.error(err)
  process.exit(2)
})
