"use client"

import type { ReactElement } from "react"
import Link from "next/link"
import { Star, Download, Eye, Flame, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Template } from "@/lib/templates"
import { formatDownloads } from "@/lib/templates"

interface TemplateCardProps {
  template: Template
  className?: string
}

/** Slide / presentation mockup (PowerPoint, Google Slides) */
function SlideMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-lg bg-white/10 p-3 backdrop-blur-sm">
        {/* Slide header with logo placeholder */}
        <div className="mb-2 flex items-center justify-between">
          <div className="h-2 w-12 rounded-full bg-white/60" />
          <div className="flex gap-1">
            <div className="h-1.5 w-6 rounded-full bg-white/30" />
            <div className="h-1.5 w-6 rounded-full bg-white/30" />
          </div>
        </div>
        {/* Title block */}
        <div className="mb-3 space-y-1.5">
          <div className="h-4 w-3/4 rounded bg-white/80" />
          <div className="h-2 w-1/2 rounded-full bg-white/50" />
        </div>
        {/* Content area: 2-col */}
        <div className="flex flex-1 gap-2">
          <div className="flex-1 space-y-1.5 rounded-md bg-white/10 p-2">
            <div className="h-1.5 w-full rounded-full bg-white/50" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/40" />
            <div className="h-1.5 w-3/5 rounded-full bg-white/35" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/30" />
          </div>
          <div className="flex-1 rounded-md bg-white/20 flex items-center justify-center">
            {/* Chart bars */}
            <div className="flex items-end gap-1 px-2">
              <div className="w-3 rounded-t bg-white/70" style={{height:"28px"}} />
              <div className="w-3 rounded-t bg-white/50" style={{height:"18px"}} />
              <div className="w-3 rounded-t bg-white/80" style={{height:"36px"}} />
              <div className="w-3 rounded-t bg-white/60" style={{height:"24px"}} />
            </div>
          </div>
        </div>
        {/* Page indicator */}
        <div className="mt-2 flex justify-center gap-1">
          {[0,1,2,3,4].map(i => (
            <div key={i} className={cn("h-1 rounded-full", i === 0 ? "w-3 bg-white/80" : "w-1 bg-white/30")} />
          ))}
        </div>
      </div>
    </div>
  )
}

/** Spreadsheet mockup (Excel, Google Sheets) */
function SpreadsheetMockup({ color }: { color: string }) {
  const rows = 5
  const cols = 4
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-lg bg-white/10 p-2 backdrop-blur-sm">
        {/* Toolbar */}
        <div className="mb-2 flex items-center gap-1.5">
          <div className="h-2 w-6 rounded-full bg-white/60" />
          <div className="h-2 w-10 rounded-full bg-white/40" />
          <div className="h-2 w-8 rounded-full bg-white/40" />
          <div className="flex-1" />
          <div className="h-4 w-16 rounded bg-white/20" />
        </div>
        {/* Sheet grid */}
        <div className="flex-1 overflow-hidden rounded border border-white/20">
          {/* Header row */}
          <div className="flex border-b border-white/20 bg-white/15">
            <div className="w-5 shrink-0 border-r border-white/20" />
            {Array.from({length: cols}).map((_,c) => (
              <div key={c} className="flex-1 flex items-center justify-center border-r border-white/20 py-0.5">
                <div className="h-1.5 w-3 rounded-full bg-white/60" />
              </div>
            ))}
          </div>
          {/* Data rows */}
          {Array.from({length: rows}).map((_,r) => (
            <div key={r} className="flex border-b border-white/10">
              <div className="w-5 shrink-0 flex items-center justify-center border-r border-white/20">
                <div className="h-1.5 w-2 rounded-full bg-white/40" />
              </div>
              {Array.from({length: cols}).map((_,c) => (
                <div key={c} className={cn("flex-1 flex items-center px-1 border-r border-white/10 py-1", r === 0 && "bg-white/10")}>
                  <div className={cn("h-1.5 rounded-full bg-white/50", c === 0 ? "w-4/5" : c === cols-1 ? "w-2/3" : "w-full")} />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Sheet tabs */}
        <div className="mt-1.5 flex gap-1">
          <div className="rounded-t bg-white/25 px-2 py-0.5 text-[8px] text-white/70">Sheet1</div>
          <div className="rounded-t px-2 py-0.5 text-[8px] text-white/40">Sheet2</div>
        </div>
      </div>
    </div>
  )
}

/** Design canvas mockup (Canva) */
function CanvaMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-lg bg-white/10 p-2 backdrop-blur-sm">
        {/* Top toolbar */}
        <div className="mb-2 flex items-center gap-1.5">
          <div className="h-4 w-4 rounded-full bg-white/50" />
          <div className="h-2 flex-1 rounded-full bg-white/25" />
          <div className="flex gap-1">
            {["bg-red-300/60","bg-yellow-300/60","bg-green-300/60"].map(c => (
              <div key={c} className={cn("h-3 w-3 rounded-full", c)} />
            ))}
          </div>
        </div>
        {/* Canvas area with design elements */}
        <div className="flex-1 rounded-lg bg-white/15 p-3 flex flex-col items-center justify-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white/60 to-white/20" />
          <div className="h-2.5 w-2/3 rounded-full bg-white/70" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/45" />
          <div className="mt-1 flex gap-1.5">
            <div className="h-6 w-6 rounded bg-white/30" />
            <div className="h-6 w-6 rounded bg-white/20" />
            <div className="h-6 w-6 rounded bg-white/30" />
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-8 right-8 h-6 w-6 rotate-12 rounded bg-white/20" />
          <div className="absolute bottom-10 left-6 h-4 w-4 rounded-full bg-white/15" />
        </div>
        {/* Bottom layer panel */}
        <div className="mt-1.5 flex gap-1">
          {[1,2,3].map(i => (
            <div key={i} className="flex-1 h-4 rounded bg-white/20" />
          ))}
        </div>
      </div>
    </div>
  )
}

/** Figma UI mockup */
function FigmaMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-0 flex rounded-lg overflow-hidden">
        {/* Left panel — layers */}
        <div className="w-12 shrink-0 bg-black/20 p-1.5 flex flex-col gap-1">
          <div className="h-1.5 w-full rounded-full bg-white/50" />
          {[80,65,90,75,55].map((w,i) => (
            <div key={i} className="flex items-center gap-0.5">
              <div className="h-1 w-1 rounded-full bg-white/30 shrink-0" />
              <div className="h-1 rounded-full bg-white/25" style={{width:`${w}%`}} />
            </div>
          ))}
        </div>
        {/* Canvas */}
        <div className="flex-1 bg-[#1e1e1e]/40 flex items-center justify-center p-2">
          <div className="h-full w-4/5 rounded-lg border border-white/20 bg-white/10 flex flex-col overflow-hidden">
            {/* Navbar */}
            <div className="flex items-center gap-1.5 bg-white/15 px-2 py-1.5">
              <div className="h-2 w-2 rounded-full bg-white/60" />
              <div className="h-1.5 w-12 rounded-full bg-white/40" />
              <div className="flex-1" />
              <div className="h-4 w-8 rounded bg-white/30" />
            </div>
            {/* Hero */}
            <div className="flex flex-1 flex-col items-center justify-center gap-1.5 p-2">
              <div className="h-2.5 w-2/3 rounded-full bg-white/70" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/45" />
              <div className="h-5 w-16 rounded-full bg-white/30 mt-1" />
            </div>
          </div>
        </div>
        {/* Right panel — properties */}
        <div className="w-14 shrink-0 bg-black/20 p-1.5 flex flex-col gap-1.5">
          <div className="h-1.5 w-full rounded-full bg-white/50" />
          <div className="h-3 w-full rounded bg-white/20" />
          <div className="h-3 w-full rounded bg-white/15" />
          <div className="h-1.5 w-3/4 rounded-full bg-white/30" />
          <div className="flex gap-0.5">
            {[1,2,3].map(i => <div key={i} className="flex-1 h-5 rounded bg-white/20" />)}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Document mockup (Word, Google Docs) */
function DocumentMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-lg bg-white/10 p-2 backdrop-blur-sm">
        {/* Toolbar */}
        <div className="mb-2 flex items-center gap-1">
          {["w-4","w-6","w-4","w-5","w-3"].map((w,i) => (
            <div key={i} className={cn("h-2 rounded-full bg-white/40", w)} />
          ))}
          <div className="flex-1" />
          <div className="h-4 w-12 rounded bg-white/20" />
        </div>
        {/* Document page */}
        <div className="flex-1 rounded bg-white/90 p-3 shadow-inner flex flex-col gap-2">
          {/* Letterhead / title */}
          <div className="border-b border-gray-200 pb-2 mb-1">
            <div className="h-3 w-1/3 rounded-full bg-gray-700/70 mb-1" />
            <div className="h-1.5 w-1/4 rounded-full bg-gray-400/60" />
          </div>
          {/* Body text lines */}
          {[1,.9,.95,.7,.85,.9,.8,.75,.9,.6].map((w,i) => (
            <div key={i} className="h-1.5 rounded-full bg-gray-300/80" style={{width:`${w*100}%`}} />
          ))}
          {/* Section break */}
          <div className="border-b border-gray-200 my-1" />
          {[.8,.9,.7,.85].map((w,i) => (
            <div key={i} className="h-1.5 rounded-full bg-gray-300/80" style={{width:`${w*100}%`}} />
          ))}
        </div>
      </div>
    </div>
  )
}

/** Notion page mockup */
function NotionMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex rounded-lg bg-white/10 overflow-hidden backdrop-blur-sm">
        {/* Sidebar */}
        <div className="w-14 shrink-0 bg-black/15 p-2 flex flex-col gap-1.5">
          <div className="h-2 w-full rounded-full bg-white/60" />
          <div className="h-px bg-white/20 my-0.5" />
          {["w-full","w-4/5","w-3/4","w-full","w-4/5"].map((w,i) => (
            <div key={i} className={cn("h-1.5 rounded-full bg-white/30", w)} />
          ))}
          <div className="mt-auto h-px bg-white/20" />
          <div className="h-4 w-full rounded bg-white/20" />
        </div>
        {/* Page content */}
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
          {/* Page title */}
          <div className="h-4 w-2/3 rounded bg-white/70" />
          <div className="h-px bg-white/20" />
          {/* Blocks */}
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-white/20 shrink-0" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-full rounded-full bg-white/50" />
              <div className="h-1.5 w-4/5 rounded-full bg-white/35" />
            </div>
          </div>
          {/* Database table */}
          <div className="mt-1 rounded border border-white/20 overflow-hidden">
            <div className="flex bg-white/15 border-b border-white/20">
              {["flex-1","w-12","w-12"].map((w,i) => (
                <div key={i} className={cn("py-1 px-1.5 border-r border-white/10", w)}>
                  <div className="h-1.5 w-full rounded-full bg-white/60" />
                </div>
              ))}
            </div>
            {[1,2,3].map(r => (
              <div key={r} className="flex border-b border-white/10">
                {["flex-1","w-12","w-12"].map((w,c) => (
                  <div key={c} className={cn("py-1.5 px-1.5 border-r border-white/10", w)}>
                    <div className="h-1.5 w-3/4 rounded-full bg-white/30" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const toolMockups: Record<string, (props: { color: string }) => ReactElement> = {
  "PowerPoint":    SlideMockup,
  "Google Slides": SlideMockup,
  "Excel":         SpreadsheetMockup,
  "Google Docs":   DocumentMockup,
  "Word":          DocumentMockup,
  "Canva":         CanvaMockup,
  "Figma":         FigmaMockup,
  "Notion":        NotionMockup,
}

function ToolPreview({ tool, color }: { tool: string; color: string }) {
  const Mockup = toolMockups[tool] ?? SlideMockup
  return <Mockup color={color} />
}

export function TemplateCard({ template, className }: TemplateCardProps) {
  return (
    <Link href={`/templates/${template.id}`} className="block">
      <article
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-border bg-card card-hover",
          className
        )}
      >
        {/* Preview thumbnail */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
          <ToolPreview tool={template.tool} color={template.previewColor} />

          {/* Zoom on hover */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 scale-110",
            template.previewColor
          )} />

          {/* Hover CTA */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:bg-black/30">
            <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-900 shadow-xl backdrop-blur-sm">
              <Eye className="h-3.5 w-3.5" />
              Preview
            </div>
          </div>

          {/* Badges — only isNew and isTrending, NO price/Pro badge */}
          <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5">
            {template.isNew && (
              <span className="flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-lg">
                <Sparkles className="h-2.5 w-2.5" /> NEW
              </span>
            )}
            {template.isTrending && !template.isNew && (
              <span className="flex items-center gap-1 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-lg">
                <Flame className="h-2.5 w-2.5" /> HOT
              </span>
            )}
          </div>
        </div>

        {/* Card body */}
        <div className="p-4">
          {/* Tool badge */}
          <div className="mb-2.5 flex items-center gap-1.5">
            <Badge variant="secondary" className="text-[11px] font-semibold">
              {template.tool}
            </Badge>
            <span className="text-[11px] text-muted-foreground">{template.style}</span>
          </div>

          {/* Title */}
          <h3 className="line-clamp-1 text-sm font-semibold leading-snug text-foreground transition-colors duration-150 group-hover:text-primary">
            {template.title}
          </h3>

          {/* Stats */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-foreground">{template.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Download className="h-3 w-3" />
              {formatDownloads(template.downloads)}
            </div>
          </div>

          {/* Format chips — subtle, informational */}
          <div className="mt-3 flex flex-wrap gap-1">
            {template.formats.slice(0, 3).map(fmt => (
              <span key={fmt} className="rounded-md border border-border/70 bg-secondary/60 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                {fmt}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
