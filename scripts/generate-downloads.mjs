#!/usr/bin/env node
/**
 * Generate downloadable zip files for all templates.
 *
 * Usage:
 *   node --loader tsx scripts/generate-downloads.mjs [--start N] [--end N] [--concurrency N]
 *
 * Produces: public/downloads/template-{id}.zip
 */

import { mkdir, writeFile } from "fs/promises"
import { join } from "path"
import { createRequire } from "module"
import archiver from "archiver"
import { Writable } from "stream"

const require = createRequire(import.meta.url)

// Dynamic imports for generators
const { generateSlide } = await import("./generators/slide-generator.mjs")
const { generateExcel } = await import("./generators/excel-generator.mjs")
const { generateDocument } = await import("./generators/document-generator.mjs")

// Import templates - read and parse from the TS file
import { readFileSync } from "fs"
const templatesFile = join(import.meta.dirname, "..", "lib", "templates.ts")
const tsContent = readFileSync(templatesFile, "utf8")

// Simple extraction of template data
function extractTemplates() {
  const templates = []
  const re = /\{\s*id: "(\d+)",\s*title: "([^"]*)"[\s\S]*?tool: "([^"]*)"[\s\S]*?previewColor: "([^"]*)"[\s\S]*?\}/g
  let m
  while ((m = re.exec(tsContent)) !== null) {
    templates.push({ id: m[1], title: m[2], tool: m[3], previewColor: m[4] })
  }
  return templates
}

const allTemplates = extractTemplates()

const args = process.argv.slice(2)
function getArg(name, fallback) {
  const idx = args.indexOf(`--${name}`)
  return idx !== -1 && args[idx + 1] ? parseInt(args[idx + 1]) : fallback
}

const START = getArg("start", 1)
const END = getArg("end", 405)
const CONCURRENCY = getArg("concurrency", 8)
const OUT_DIR = join(import.meta.dirname, "..", "public", "downloads")

await mkdir(OUT_DIR, { recursive: true })

const toolToGenerator = {
  "PowerPoint": generateSlide,
  "Google Slides": generateSlide,
  "Excel": generateExcel,
  "Word": generateDocument,
  "Google Docs": generateDocument,
}

const toolToExt = {
  "PowerPoint": "pptx",
  "Google Slides": "pptx",
  "Excel": "xlsx",
  "Word": "docx",
  "Google Docs": "docx",
}

let completed = 0
const templates = allTemplates.filter(t => {
  const id = parseInt(t.id)
  return id >= START && id <= END
})
const total = templates.length

async function createZip(fileBuffer, fileName) {
  return new Promise((resolve, reject) => {
    const chunks = []
    const writable = new Writable({
      write(chunk, encoding, callback) {
        chunks.push(chunk)
        callback()
      },
    })

    const archive = archiver("zip", { zlib: { level: 6 } })
    archive.pipe(writable)
    archive.append(fileBuffer, { name: fileName })
    archive.on("error", reject)
    writable.on("finish", () => resolve(Buffer.concat(chunks)))
    archive.finalize()
  })
}

async function processTemplate(template) {
  const variant = parseInt(template.id) % 5
  const generator = toolToGenerator[template.tool]
  const ext = toolToExt[template.tool]

  if (!generator) {
    console.error(`No generator for tool "${template.tool}" (template ${template.id})`)
    return
  }

  try {
    const fileBuffer = await generator(template.id, variant, template.title, template.previewColor)
    const fileName = `${template.title.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-")}.${ext}`
    const zipBuffer = await createZip(fileBuffer, fileName)
    const zipPath = join(OUT_DIR, `template-${template.id}.zip`)
    await writeFile(zipPath, zipBuffer)

    completed++
    if (completed % 20 === 0 || completed === total) {
      console.log(`Progress: ${completed}/${total} (${Math.round(completed / total * 100)}%)`)
    }
  } catch (err) {
    console.error(`Error on template ${template.id} (${template.tool}): ${err.message}`)
    completed++
  }
}

console.log(`Generating downloads for ${total} templates (IDs ${START}-${END})`)
console.log(`Concurrency: ${CONCURRENCY}`)

for (let i = 0; i < templates.length; i += CONCURRENCY) {
  const batch = templates.slice(i, i + CONCURRENCY)
  await Promise.all(batch.map(t => processTemplate(t)))
}

console.log(`Done! Generated ${completed} download files.`)
