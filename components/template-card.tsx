"use client"

import Link from "next/link"
import { Star, Download, Eye, Flame, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Template } from "@/lib/templates"
import { formatDownloads } from "@/lib/templates"

interface TemplateCardProps {
  template: Template
  className?: string
}

/** Inline SVG that looks like a real document/slide preview */
function DocumentMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex flex-col gap-2 rounded-lg bg-white/12 p-3 backdrop-blur-[2px]">
        {/* Title bar */}
        <div className="h-2.5 w-2/3 rounded-full bg-white/60" />
        {/* Sub-title */}
        <div className="h-1.5 w-2/5 rounded-full bg-white/35" />
        {/* Image placeholder */}
        <div className="mt-1 flex-1 rounded-md bg-white/20" />
        {/* Body lines */}
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-white/30" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/25" />
          <div className="h-1.5 w-3/5 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  )
}

export function TemplateCard({ template, className }: TemplateCardProps) {
  return (
    <Link href={`/templates/${template.id}`}>
      <article
        className={cn(
          "group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-0.5",
          className
        )}
      >
        {/* Preview */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <DocumentMockup color={template.previewColor} />

          {/* Scale on hover */}
          <div className={cn("absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105 opacity-0", template.previewColor)} />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/35 group-hover:opacity-100">
            <Button variant="secondary" size="sm" className="gap-1.5 shadow-lg">
              <Eye className="h-3.5 w-3.5" />
              Preview
            </Button>
          </div>

          {/* Badges top-left */}
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {template.isNew && (
              <Badge className="gap-1 border-0 bg-emerald-500 text-white shadow-md text-[10px] px-2 py-0.5">
                <Sparkles className="h-2.5 w-2.5" /> New
              </Badge>
            )}
            {template.isTrending && (
              <Badge className="gap-1 border-0 bg-orange-500 text-white shadow-md text-[10px] px-2 py-0.5">
                <Flame className="h-2.5 w-2.5" /> Trending
              </Badge>
            )}
          </div>

          {/* Pro badge top-right */}
          {template.isPro && (
            <Badge variant="pro" className="absolute right-3 top-3 shadow-md">
              Pro
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-2 flex items-center gap-1.5 flex-wrap">
            <Badge variant="secondary" className="text-[11px] font-medium">
              {template.tool}
            </Badge>
            <Badge variant="outline" className="text-[11px] text-muted-foreground">
              {template.style}
            </Badge>
          </div>

          <h3 className="font-semibold leading-snug text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
            {template.title}
          </h3>

          {/* Stats row */}
          <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="font-medium text-foreground">{template.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-3.5 w-3.5" />
              <span>{formatDownloads(template.downloads)}</span>
            </div>
          </div>

          {/* Format chips */}
          {template.formats && template.formats.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {template.formats.slice(0, 3).map((fmt) => (
                <span
                  key={fmt}
                  className="rounded-md border border-border bg-secondary/50 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                >
                  {fmt}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
