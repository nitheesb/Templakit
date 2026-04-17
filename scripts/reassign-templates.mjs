#!/usr/bin/env node
/**
 * Reassign Canva/Figma/Notion templates to file-based tools.
 * Target: 81 templates per tool (PowerPoint, Google Slides, Excel, Word, Google Docs).
 */

import { readFileSync, writeFileSync } from "fs"
import { join } from "path"

const FILE = join(import.meta.dirname, "..", "lib", "templates.ts")
let content = readFileSync(FILE, "utf8")

// Current counts: PP=55, GS=55, Canva=55, Excel=48, Figma=48, Word=48, Notion=48, GDocs=48
// Target: 81 each across 5 tools = 405

// Canva IDs (55 total)
const canva = [16,17,18,19,20,21,22,23,76,77,78,79,80,81,82,83,84,85,86,87,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255]
// Figma IDs (48 total)
const figma = [30,31,32,33,34,35,100,101,102,103,104,105,106,107,108,109,110,111,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315]
// Notion IDs (48 total)
const notion = [42,43,44,45,46,124,125,126,127,128,129,130,131,132,133,134,135,136,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375]

// Assignments: Canva 26→PP, 26→GS, 3→Excel; Figma 7→Excel, 20→Word, 21→GDocs; Notion 23→Excel, 13→Word, 12→GDocs
const assignments = {}
canva.slice(0, 26).forEach(id => assignments[id] = "PowerPoint")
canva.slice(26, 52).forEach(id => assignments[id] = "Google Slides")
canva.slice(52).forEach(id => assignments[id] = "Excel")
figma.slice(0, 7).forEach(id => assignments[id] = "Excel")
figma.slice(7, 27).forEach(id => assignments[id] = "Word")
figma.slice(27).forEach(id => assignments[id] = "Google Docs")
notion.slice(0, 23).forEach(id => assignments[id] = "Excel")
notion.slice(23, 36).forEach(id => assignments[id] = "Word")
notion.slice(36).forEach(id => assignments[id] = "Google Docs")

const toolFormats = {
  "PowerPoint": ["PPTX", "PDF"],
  "Google Slides": ["PPTX", "PDF"],
  "Excel": ["XLSX", "CSV"],
  "Word": ["DOCX", "PDF"],
  "Google Docs": ["DOCX", "PDF"],
}

const toolDescPhrases = {
  "PowerPoint": "Fully editable in Microsoft PowerPoint. Compatible with PowerPoint 2016 and later.",
  "Google Slides": "Fully editable in Google Slides. Open directly from Google Drive.",
  "Excel": "Fully editable in Microsoft Excel. Compatible with Excel 2016 and later, and Google Sheets.",
  "Word": "Fully editable in Microsoft Word. Compatible with Word 2016 and later.",
  "Google Docs": "Fully editable in Google Docs. Open directly from Google Drive.",
}

// Tool-specific tags
const toolTags = {
  "PowerPoint": ["powerpoint", "pptx", "presentation"],
  "Google Slides": ["google slides", "presentation", "google workspace"],
  "Excel": ["excel", "xlsx", "spreadsheet"],
  "Word": ["word", "docx", "document"],
  "Google Docs": ["google docs", "document", "google workspace"],
}

const oldToolNames = ["Canva", "Figma", "Notion"]
const oldTagsToRemove = ["canva", "figma", "notion", "design", "ui kit", "database", "notion template", "figma design", "canva template"]

let changeCount = 0

for (const [idStr, newTool] of Object.entries(assignments)) {
  const id = idStr

  // Find the template block for this ID
  // Match: id: "N", and then the subsequent fields up to the closing }
  const blockRe = new RegExp(`(\\{[\\s\\S]*?id: "${id}"[\\s\\S]*?\\})`, "g")

  content = content.replace(blockRe, (block) => {
    // Only match if this is the exact ID (not id: "16" matching id: "160")
    if (!block.match(new RegExp(`id: "${id}",`))) return block

    let updated = block

    // Replace tool
    for (const old of oldToolNames) {
      updated = updated.replace(new RegExp(`tool: "${old}"`, "g"), `tool: "${newTool}"`)
      updated = updated.replace(new RegExp(`category: "${old}"`, "g"), `category: "${newTool}"`)
    }

    // Replace title suffix
    for (const old of oldToolNames) {
      updated = updated.replace(new RegExp(`— ${old}`, "g"), `— ${newTool}`)
    }

    // Replace formats
    updated = updated.replace(/formats: \[.*?\]/, `formats: ${JSON.stringify(toolFormats[newTool])}`)

    // Update description - replace tool-specific phrases
    for (const old of oldToolNames) {
      updated = updated.replace(new RegExp(`editable in ${old}`, "gi"), `editable in ${newTool}`)
      updated = updated.replace(new RegExp(`${old} design`, "gi"), `${newTool} template`)
      updated = updated.replace(new RegExp(`${old} template`, "gi"), `${newTool} template`)
      updated = updated.replace(new RegExp(`in ${old}`, "gi"), `in ${newTool}`)
    }

    // Update tags - replace tool-specific tags
    const tagsMatch = updated.match(/tags: \[(.*?)\]/)
    if (tagsMatch) {
      let tags = tagsMatch[1].split(",").map(t => t.trim().replace(/"/g, "")).filter(t => !oldTagsToRemove.includes(t.toLowerCase()))
      // Add new tool tags
      const newTags = toolTags[newTool].filter(t => !tags.includes(t))
      tags = [...tags.slice(0, 3), ...newTags.slice(0, 2), ...tags.slice(3)].slice(0, 6)
      updated = updated.replace(/tags: \[.*?\]/, `tags: [${tags.map(t => `"${t}"`).join(", ")}]`)
    }

    changeCount++
    return updated
  })
}

// Update tools array - remove Canva, Figma, Notion and update counts
content = content.replace(
  /export const tools = \[[\s\S]*?\]/,
  `export const tools = [
  { name: "PowerPoint",    slug: "PowerPoint",    icon: "Presentation", count: 81, color: "from-orange-500 to-red-500",    description: "Microsoft PowerPoint templates" },
  { name: "Google Slides", slug: "Google Slides", icon: "Monitor",      count: 81, color: "from-yellow-500 to-amber-500",  description: "Google Slides presentations" },
  { name: "Excel",         slug: "Excel",         icon: "Table2",       count: 81, color: "from-green-600 to-emerald-600", description: "Microsoft Excel spreadsheets" },
  { name: "Word",          slug: "Word",          icon: "FileText",     count: 81, color: "from-blue-600 to-indigo-600",   description: "Microsoft Word documents" },
  { name: "Google Docs",   slug: "Google Docs",   icon: "FileEdit",     count: 81, color: "from-cyan-500 to-teal-500",     description: "Google Docs templates" },
]`
)

// Update section comment headers for reassigned tools
content = content.replace(/\/\/ ── Canva ─+/g, "// ── (reassigned from Canva) ────────────────────────")
content = content.replace(/\/\/ ── Figma ─+/g, "// ── (reassigned from Figma) ────────────────────────")
content = content.replace(/\/\/ ── Notion ─+/g, "// ── (reassigned from Notion) ───────────────────────")

writeFileSync(FILE, content)

// Verify
const verify = readFileSync(FILE, "utf8")
const toolCounts = {}
const toolRe = /tool: "([^"]+)"/g
let m
while ((m = toolRe.exec(verify)) !== null) {
  toolCounts[m[1]] = (toolCounts[m[1]] || 0) + 1
}
console.log(`Reassigned ${changeCount} templates`)
console.log("New distribution:", toolCounts)
