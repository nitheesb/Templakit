"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { TemplatePreview } from "@/components/template-preview"

interface ImageGalleryProps {
  slideImages: string[]
  title: string
  tool: string
  style: string
  previewColor: string
  variant?: number
}

export function ImageGallery({ slideImages, title, tool, style, previewColor, variant = 0 }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const hasRealPreview = slideImages.length > 0

  return (
    <div>
      {/* Main preview */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/50 shadow-lg bg-secondary/10">
        {hasRealPreview ? (
          <Image
            key={slideImages[activeIndex]}
            src={slideImages[activeIndex]}
            alt={`${title} — slide ${activeIndex + 1}`}
            fill
            unoptimized
            className="object-cover object-top transition-opacity duration-200"
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        ) : (
          <TemplatePreview
            tool={tool}
            style={style}
            color={previewColor}
            variant={variant}
            className="h-full w-full rounded-none shadow-none border-none"
          />
        )}
      </div>

      {/* Thumbnail strip */}
      {slideImages.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {slideImages.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative aspect-[16/10] w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200",
                i === activeIndex
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border/50 opacity-60 hover:border-primary/50 hover:opacity-100"
              )}
              aria-label={`View slide ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                unoptimized
                className="object-cover object-top"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
