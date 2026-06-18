#!/usr/bin/env node
/**
 * Photo-detail navigation flow test — clicks through the prev/next/grid
 * transitions on a sub-gallery and asserts each lands where expected.
 *
 *   yarn workspace web nav-flow
 *   HEADFUL=1 yarn workspace web nav-flow
 *
 * Self-contained: launches its own Firefox, hard-times-out each step, never
 * leaves zombie processes (try/finally browser.close()).
 */
import { firefox } from "playwright"

const LOCAL_BASE = "http://localhost:8000"
const TAG = "landscapes" // pick a route with enough photos to chain through
const HEADFUL = process.env.HEADFUL === "1"

let total = 0
let passed = 0
function check(name, ok, detail = "") {
  total++
  if (ok) passed++
  console.log(`  ${ok ? "✓" : "✗"} ${name}${detail ? `   (${detail})` : ""}`)
}

const PHOTO_HASH_RE = /\/photography\/photo\/([a-f0-9]{10})(?:\?|$|\/)/

function hashFromUrl(url) {
  const m = url.match(PHOTO_HASH_RE)
  return m?.[1] || null
}

async function main() {
  const browser = await firefox.launch({ headless: !HEADFUL })
  try {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()

    console.log(`\n→ open /photography/${TAG}/`)
    await page.goto(`${LOCAL_BASE}/photography/${TAG}/`, {
      waitUntil: "domcontentloaded",
      timeout: 30_000,
    })
    await page.waitForSelector('[data-gallery-ready="true"]', { timeout: 15_000 })

    const photoLinks = await page.$$eval('a[href*="/photography/photo/"]', as =>
      as.map(a => a.getAttribute("href"))
    )
    check(
      `gallery has photo links (${photoLinks.length})`,
      photoLinks.length >= 3,
      `first=${photoLinks[0]}`
    )
    const firstHref = photoLinks[0]

    console.log(`\n→ navigate to first photo  ${firstHref}`)
    await page.click(`a[href="${firstHref}"]`)
    await page.waitForSelector('[data-testid="photo-detail"]', { timeout: 15_000 })
    await page.waitForTimeout(400)

    const url1 = page.url()
    const hash1 = hashFromUrl(url1)
    check("photo-detail URL has /photo/<hash>", !!hash1, url1)
    check(`?category=${TAG} preserved on detail URL`, url1.includes(`category=${TAG}`), url1)
    check("EXIF panel rendered", (await page.$$(".photo__details__exif__item")).length > 0)
    check("PhotoNav fixed-position bar visible", !!(await page.$('[data-testid="photo-nav"]')))
    check("PhotoNav has a 'next' button", !!(await page.$('[data-testid="photo-nav-next"]')))
    check("PhotoNav has a 'grid' button", !!(await page.$('[data-testid="photo-nav-grid"]')))

    console.log(`\n→ click NEXT`)
    await page.click('[data-testid="photo-nav-next"]')
    await page.waitForFunction(prev => location.href !== prev, { timeout: 10_000 }, url1)
    await page.waitForSelector('[data-testid="photo-detail"]', { timeout: 15_000 })
    await page.waitForTimeout(400)
    const url2 = page.url()
    const hash2 = hashFromUrl(url2)
    check("URL changed to a new hash", !!hash2 && hash2 !== hash1, `${hash1} → ${hash2}`)
    check(`?category=${TAG} preserved across NEXT`, url2.includes(`category=${TAG}`))
    check("EXIF still renders after NEXT", (await page.$$(".photo__details__exif__item")).length > 0)

    console.log(`\n→ click PREV (should return to first photo)`)
    await page.click('[data-testid="photo-nav-prev"]')
    await page.waitForFunction(prev => location.href !== prev, { timeout: 10_000 }, url2)
    await page.waitForSelector('[data-testid="photo-detail"]', { timeout: 15_000 })
    await page.waitForTimeout(400)
    const url3 = page.url()
    const hash3 = hashFromUrl(url3)
    check(
      "PREV returns to original hash",
      hash3 === hash1,
      `expected=${hash1} got=${hash3}`
    )
    check(`?category=${TAG} still preserved`, url3.includes(`category=${TAG}`))

    console.log(`\n→ click GRID (should return to /photography/${TAG}/)`)
    await page.click('[data-testid="photo-nav-grid"]')
    await page.waitForURL(`**/photography/${TAG}/**`, { timeout: 10_000 })
    await page.waitForSelector('[data-gallery-ready="true"]', { timeout: 15_000 })
    const url4 = page.url()
    check(
      `GRID lands on /photography/${TAG}/ (not legacy ?category=)`,
      url4.endsWith(`/photography/${TAG}/`),
      url4
    )
    check(
      "active tag highlighted on the sub-gallery",
      !!(await page.$(`nav[aria-label="Gallery tags"] li.active`))
    )
  } finally {
    await browser.close()
  }

  console.log(`\n${passed === total ? "✓ ALL PASS" : `✗ ${total - passed} failed`}  (${passed}/${total})\n`)
  process.exit(passed === total ? 0 : 1)
}

main().catch(err => {
  console.error(err)
  process.exit(2)
})
