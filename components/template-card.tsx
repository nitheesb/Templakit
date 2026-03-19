"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Download, Eye, Flame, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Template } from "@/lib/templates"
import { formatDownloads } from "@/lib/templates"
import { TemplatePreview } from "@/components/template-preview"

interface TemplateCardProps {
  template: Template
  className?: string
}

function TemplateThumb({ template }: { template: Template }) {
  const [imgError, setImgError] = useState(false)
  if (!imgError) {
    return (
      <Image
        src={`/previews/${template.id}.webp`}
        alt={template.title}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={() => setImgError(true)}
      />
    )
  }
  return (
    <TemplatePreview
      tool={template.tool}
      style={template.style}
      color={template.previewColor}
      variant={parseInt(template.id) % 5}
      className="h-full w-full rounded-none shadow-none border-none"
    />
  )
}

export function TemplateCard({ template, className }: TemplateCardProps) {
  return (
    <Link href={`/templates/${template.id}`} className="block">
      <article className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}>
        {/* Preview thumbnail */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-secondary/20">
          <TemplateThumb template={template} />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-black/40 backdrop-blur-[2px]">
            <div className="flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-gray-900 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <Eye className="h-4 w-4" />
              Preview Template
            </div>
          </div>

          {/* Badges */}
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

          {/* Price badge — top right */}
          <div className="absolute right-2.5 top-2.5">
            {template.price === 0 ? (
              <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-lg">
                FREE
              </span>
            ) : (
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-white shadow-lg">
                $1
              </span>
            )}
          </div>
        </div>

        {/* Card body */}
        <div className="p-4">
          <div className="mb-2 flex items-center gap-1.5">
            <Badge variant="secondary" className="text-[11px] font-semibold">{template.tool}</Badge>
            <span className="text-[11px] text-muted-foreground">{template.style}</span>
          </div>

          <h3 className="line-clamp-1 text-sm font-semibold leading-snug text-foreground transition-colors duration-150 group-hover:text-primary">
            {template.title}
          </h3>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold">{template.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Download className="h-3 w-3" />
              {formatDownloads(template.downloads)}
            </div>
          </div>

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
