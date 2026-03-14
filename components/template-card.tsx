"use client"

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

/** Realistic document mockup — no price shown at gallery level */
function DocumentPreview({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      {/* Slide chrome */}
      <div className="absolute inset-4 flex flex-col gap-2 rounded-lg bg-white/[0.13] p-3.5 shadow-inner backdrop-blur-[1px]">
        {/* Top bar */}
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-white/50" />
          <div className="h-1.5 flex-1 rounded-full bg-white/40" />
        </div>
        {/* Hero area */}
        <div className="flex flex-1 gap-2">
          <div className="flex-1 flex flex-col gap-1.5 justify-center">
            <div className="h-2.5 w-3/4 rounded-full bg-white/70" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/45" />
            <div className="mt-1 h-1.5 w-full rounded-full bg-white/30" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/25" />
          </div>
          <div className="w-1/3 rounded-md bg-white/20" />
        </div>
        {/* Bottom row */}
        <div className="flex gap-1.5">
          <div className="h-5 flex-1 rounded-md bg-white/25" />
          <div className="h-5 w-8 rounded-md bg-white/15" />
        </div>
      </div>
    </div>
  )
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
          <DocumentPreview color={template.previewColor} />

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
