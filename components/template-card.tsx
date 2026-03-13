"use client"

import Link from "next/link"
import { Star, Download, Eye, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Template } from "@/lib/templates"

interface TemplateCardProps {
  template: Template
  className?: string
}

export function TemplateCard({ template, className }: TemplateCardProps) {
  return (
    <Link href={`/templates/${template.id}`}>
      <article
        className={cn(
          "group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
          className
        )}
      >
        {/* Preview Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-110",
              template.previewColor
            )}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
            <Button variant="secondary" size="sm" className="gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </Button>
          </div>

          {/* Pro Badge */}
          {template.isPro && (
            <Badge variant="pro" className="absolute right-3 top-3">
              Pro
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {template.category}
            </Badge>
          </div>
          
          <h3 className="font-semibold leading-tight text-foreground line-clamp-1">
            {template.title}
          </h3>
          
          <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{template.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>{template.downloads.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
