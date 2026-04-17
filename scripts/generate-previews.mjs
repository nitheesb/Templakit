#!/usr/bin/env node
/**
 * Generate preview images for all templates using Playwright.
 *
 * Usage:
 *   node scripts/generate-previews.mjs [--start N] [--end N] [--concurrency N]
 *
 * Requires: dev server running on http://localhost:3000
 */

import { chromium } from "playwright"
import { mkdir } from "fs/promises"
import { join } from "path"
import sharp from "sharp"

const args = process.argv.slice(2)
function getArg(name, fallback) {
  const idx = args.indexOf(`--${name}`)
  return idx !== -1 && args[idx + 1] ? parseInt(args[idx + 1]) : fallback
}

const START = getArg("start", 1)
const END = getArg("end", 405)
const CONCURRENCY = getArg("concurrency", 4)
const BASE_URL = "http://localhost:3000"
const OUT_DIR = join(import.meta.dirname, "..", "public", "previews")

await mkdir(OUT_DIR, { recursive: true })

const browser = await chromium.launch()
let completed = 0
const total = (END - START + 1) * 4

async function captureTemplate(context, id) {
  const page = await context.newPage()
  try {
    for (let slide = 1; slide <= 4; slide++) {
      const url = `${BASE_URL}/preview-gen/${id}?slide=${slide}`
      await page.goto(url, { waitUntil: "networkidle", timeout: 15000 })

      // Screenshot as PNG buffer, then convert to WebP with sharp
      const pngBuffer = await page.screenshot({ type: "png" })
      const suffix = slide === 1 ? "" : `-${slide}`
      const filePath = join(OUT_DIR, `${id}${suffix}.webp`)

      await sharp(pngBuffer).webp({ quality: 82 }).toFile(filePath)

      completed++
      if (completed % 40 === 0 || completed === total) {
        console.log(`Progress: ${completed}/${total} (${Math.round(completed / total * 100)}%)`)
      }
    }
  } catch (err) {
    console.error(`Error on template ${id}: ${err.message}`)
  } finally {
    await page.close()
  }
}

console.log(`Generating previews for templates ${START}-${END} (${total} images)`)
console.log(`Concurrency: ${CONCURRENCY}`)

const context = await browser.newContext({
  viewport: { width: 1200, height: 800 },
  deviceScaleFactor: 1,
})

// Process in batches
const ids = Array.from({ length: END - START + 1 }, (_, i) => START + i)
for (let i = 0; i < ids.length; i += CONCURRENCY) {
  const batch = ids.slice(i, i + CONCURRENCY)
  await Promise.all(batch.map(id => captureTemplate(context, id)))
}

await browser.close()
console.log(`Done! Generated ${completed} preview images.`)
