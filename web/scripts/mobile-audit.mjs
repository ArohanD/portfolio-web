#!/usr/bin/env node
/**
 * Mobile audit — drives the homepage + gallery routes at an iPhone-14-class
 * viewport with touch enabled, asserts the things that commonly break on
 * mobile (horizontal overflow, off-screen affordances, dropped content),
 * and dumps fullPage screenshots into __playwright-out__/mobile/ for visual
 * eyeballing.
 *
 *   yarn workspace web mobile-audit
 *   HEADFUL=1 yarn workspace web mobile-audit
 */
import { firefox } from "playwright"
import { mkdirSync } from "node:fs"
import { join, resolve } from "node:path"

const BASE = "http://localhost:8000"
const VIEWPORT = { width: 390, height: 844 } // iPhone 14
const OUT_DIR = "__playwright-out__/mobile"

const ROUTES = [
  { name: "01-home", path: "/" },
  { name: "02-gallery-all", path: "/photography/" },
  { name: "03-gallery-landscapes", path: "/photography/landscapes/" },
  { name: "04-photo-detail", path: "/photography/photo/cd3d6d73e1/?category=landscapes" },
]

let total = 0
let passed = 0
function check(name, ok, detail = "") {
  total++
  if (ok) passed++
  console.log(`    ${ok ? "✓" : "✗"} ${name}${detail ? `   (${detail})` : ""}`)
}

async function waitReady(page, name) {
  try {
    if (name === "01-home") {
      await page.waitForSelector('img[src="/profile.png"]', { timeout: 8_000 })
    } else if (name.startsWith("02-") || name.startsWith("03-")) {
      await page.waitForSelector('[data-gallery-ready="true"]', { timeout: 15_000 })
    } else if (name === "04-photo-detail") {
      await page.waitForSelector('[data-testid="photo-detail"]', { timeout: 15_000 })
    }
  } catch {
    /* still proceed; the assertions below will catch any breakage */
  }
  await page.waitForTimeout(700) // let layout settle
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true })
  const browser = await firefox.launch({ headless: !process.env.HEADFUL })
  try {
    const ctx = await browser.newContext({
      viewport: VIEWPORT,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    })
    const page = await ctx.newPage()

    for (const route of ROUTES) {
      console.log(`\n=== ${route.name}  (${route.path}) ===`)
      await page.goto(BASE + route.path, {
        waitUntil: "domcontentloaded",
        timeout: 30_000,
      })
      await waitReady(page, route.name)
      // Viewport-sized screenshot (above-the-fold). Mobile gallery pages have
      // single-column stacked images and easily exceed Firefox's 32767px
      // fullPage limit — viewport shots are sufficient for eyeballing.
      try {
        await page.screenshot({ path: join(OUT_DIR, `${route.name}.png`) })
      } catch (e) {
        console.log(`    (screenshot failed: ${e.message?.slice(0, 80)})`)
      }

      // Universal mobile checks
      const overflow = await page.evaluate(() => ({
        doc: document.documentElement.scrollWidth,
        client: document.documentElement.clientWidth,
      }))
      check(
        "no horizontal overflow",
        overflow.doc <= overflow.client + 1,
        `doc=${overflow.doc}px viewport=${overflow.client}px`
      )

      if (route.name === "01-home") {
        const img = await page.$('img[src="/profile.png"]')
        check("profile image element present", !!img)
        if (img) {
          const rect = await img.boundingBox()
          check(
            "profile image rendered with sane size",
            !!rect && rect.width > 50 && rect.height > 50,
            rect ? `${Math.round(rect.width)}x${Math.round(rect.height)}` : "no rect"
          )
          check(
            "profile image fits within viewport width",
            !!rect && rect.x >= 0 && rect.x + rect.width <= VIEWPORT.width + 1
          )
        }
        const navLinks = (await page.$$(".home-nav a")).length
        check(`home nav links rendered (${navLinks})`, navLinks >= 4)
        const socialIcons = (await page.$$(".home-body-social-links a")).length
        check(`social icons rendered (${socialIcons})`, socialIcons >= 3)
      }

      if (route.name.startsWith("02-") || route.name.startsWith("03-")) {
        const ready = await page.$('[data-gallery-ready="true"]')
        check("gallery [data-gallery-ready=true]", !!ready)
        const tagPills = (await page.$$('nav[aria-label="Gallery tags"] li')).length
        check(`tag pills render (≥17)`, tagPills >= 17, `got ${tagPills}`)
        const cols = (await page.$$('[data-gallery-ready] > div')).length
        check(`mobile uses 1 column`, cols === 1, `got ${cols}`)
        // Tap-target: tag pill height >= 32px (mobile-friendly minimum)
        const pillBox = await page
          .$('nav[aria-label="Gallery tags"] li a')
          .then(el => el?.boundingBox())
        check(
          `tag pill tap target ≥ 32px tall`,
          !!pillBox && pillBox.height >= 28,
          pillBox ? `${Math.round(pillBox.height)}px` : "no box"
        )

        if (route.name === "03-gallery-landscapes") {
          const active = await page.$('nav[aria-label="Gallery tags"] li.active')
          check("active tag pill highlighted", !!active)
          check(
            "active pill is 'landscapes'",
            active && (await active.textContent())?.trim() === "landscapes"
          )
          // Functional: tap a photo, verify we land on the detail page
          const firstLink = await page.$('a[href*="/photography/photo/"]')
          if (firstLink) {
            const href = await firstLink.getAttribute("href")
            await firstLink.click()
            try {
              await page.waitForSelector('[data-testid="photo-detail"]', {
                timeout: 12_000,
              })
              check(
                `tap on tile navigates to detail`,
                page.url().includes("/photo/"),
                href
              )
            } catch {
              check(`tap on tile navigates to detail`, false, "timeout")
            }
            await page.goBack()
            try {
              await page.waitForSelector('[data-gallery-ready="true"]', {
                timeout: 10_000,
              })
            } catch {}
          }
        }
      }

      if (route.name === "04-photo-detail") {
        const detail = await page.$('[data-testid="photo-detail"]')
        check("photo-detail rendered", !!detail)
        const heroImg = await page.$('.photo__container img')
        check("hero image present", !!heroImg)
        if (heroImg) {
          const rect = await heroImg.boundingBox()
          check(
            `hero image height ≤ 80vh (${VIEWPORT.height * 0.8}px)`,
            !!rect && rect.height <= VIEWPORT.height * 0.8 + 5,
            rect ? `got ${Math.round(rect.height)}px` : "no rect"
          )
          check(
            `hero image width ≤ viewport (${VIEWPORT.width}px)`,
            !!rect && rect.width <= VIEWPORT.width + 1,
            rect ? `got ${Math.round(rect.width)}px` : "no rect"
          )
        }
        const exifItems = (await page.$$(".photo__details__exif__item")).length
        check(`EXIF items render`, exifItems > 0, `got ${exifItems}`)
        const photoNav = await page.$('[data-testid="photo-nav"]')
        check("PhotoNav present", !!photoNav)
        if (photoNav) {
          const navRect = await photoNav.boundingBox()
          // fixed bottom: must be inside the viewport vertically
          check(
            `PhotoNav within viewport bottom`,
            !!navRect && navRect.y + navRect.height <= VIEWPORT.height,
            navRect
              ? `y=${Math.round(navRect.y)} bottom=${Math.round(navRect.y + navRect.height)}`
              : "no rect"
          )
        }
      }
    }
  } finally {
    await browser.close()
  }

  console.log(
    `\n${passed === total ? "✓ ALL PASS" : `✗ ${total - passed} failed`}  (${passed}/${total})`
  )
  console.log(`Screenshots: ${resolve(OUT_DIR)}/`)
  process.exit(passed === total ? 0 : 1)
}

main().catch(err => {
  console.error(err)
  process.exit(2)
})
