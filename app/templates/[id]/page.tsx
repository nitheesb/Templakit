import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Download, Star, Tag, Sparkles } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TemplateCard } from "@/components/template-card"
import { getTemplateById, getRelatedTemplates } from "@/lib/templates"
import { cn } from "@/lib/utils"

interface TemplatePageProps {
  params: Promise<{ id: string }>
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { id } = await params
  const template = getTemplateById(id)

  if (!template) {
    notFound()
  }

  const relatedTemplates = getRelatedTemplates(template, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border/40 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Templates
            </Link>
          </div>
        </div>

        {/* Template Content */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Preview */}
            <div className="lg:col-span-3">
              <div
                className={cn(
                  "relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br shadow-2xl",
                  template.previewColor
                )}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                    <Sparkles className="h-16 w-16 text-white" />
                  </div>
                </div>
                {template.isPro && (
                  <Badge variant="pro" className="absolute right-4 top-4 px-3 py-1">
                    Pro Template
                  </Badge>
                )}
              </div>

              {/* Thumbnail Gallery (placeholder for multiple views) */}
              <div className="mt-4 flex gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    className={cn(
                      "aspect-[16/10] w-20 overflow-hidden rounded-lg border-2 transition-colors",
                      i === 1 ? "border-primary" : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className={cn("h-full w-full bg-gradient-to-br opacity-75", template.previewColor)} />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                {/* Category Badge */}
                <Badge variant="secondary" className="mb-3">
                  {template.category}
                </Badge>

                {/* Title */}
                <h1 className="text-3xl font-bold tracking-tight">{template.title}</h1>

                {/* Rating & Downloads */}
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{template.rating}</span>
                    <span className="text-muted-foreground">(128 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span>{template.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {template.description}
                </p>

                {/* Tags */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Tag className="h-4 w-4" />
                    <span>Tags:</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Style Badge */}
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Style:</span>
                  <Badge variant="secondary">{template.style}</Badge>
                </div>

                {/* CTA */}
                <div className="mt-8 space-y-3">
                  <Button size="lg" className="w-full gap-2">
                    <Download className="h-5 w-5" />
                    {template.isPro ? "Download with Pro" : "Download Free"}
                  </Button>
                  {template.isPro && (
                    <p className="text-center text-sm text-muted-foreground">
                      This is a Pro template.{" "}
                      <Link href="/pricing" className="text-primary hover:underline">
                        Upgrade your plan
                      </Link>{" "}
                      to download.
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mt-8 rounded-xl border border-border bg-card p-4">
                  <h3 className="font-semibold">What's Included</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Fully editable source files
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Multiple export formats
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Free updates included
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Commercial use license
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Related Templates */}
          {relatedTemplates.length > 0 && (
            <section className="mt-16 border-t border-border/40 pt-16">
              <h2 className="text-2xl font-bold tracking-tight">Related Templates</h2>
              <p className="mt-2 text-muted-foreground">
                You might also like these templates
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedTemplates.map((related) => (
                  <TemplateCard key={related.id} template={related} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
