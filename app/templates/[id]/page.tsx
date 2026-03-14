import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Download, Star, Tag, CheckCircle2, Shield } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { TemplateCard } from "@/components/template-card"
import { DownloadButton } from "@/components/download-button"
import { getTemplateById, getRelatedTemplates, templates } from "@/lib/templates"
import { cn } from "@/lib/utils"

interface TemplatePageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return templates.map(t => ({ id: t.id }))
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const { id } = await params
  const t = getTemplateById(id)
  if (!t) return {}

  const isFree = t.price === 0
  const title = isFree
    ? `${t.title} — Free Download`
    : `${t.title} — Download for $${t.price}`

  return {
    title,
    description: t.description,
    keywords: [...t.tags, t.tool, t.style, "template", "free template", "download"],
    openGraph: {
      title,
      description: t.description,
      type: "article",
      url: `https://templakit.vercel.app/templates/${t.id}`,
    },
    alternates: {
      canonical: `https://templakit.vercel.app/templates/${t.id}`,
    },
  }
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { id } = await params
  const template = getTemplateById(id)
  if (!template) notFound()

  const relatedTemplates = getRelatedTemplates(template, 4)
  const isFree = template.price === 0

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: template.title,
    description: template.description,
    keywords: template.tags.join(", "),
    offers: {
      "@type": "Offer",
      price: template.price.toString(),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: template.rating.toString(),
      bestRating: "5",
      ratingCount: Math.floor(template.downloads * 0.06).toString(),
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border/40 bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/templates" className="hover:text-foreground transition-colors">Templates</Link>
              <span>/</span>
              <Link
                href={`/templates?category=${encodeURIComponent(template.tool)}`}
                className="hover:text-foreground transition-colors"
              >
                {template.tool}
              </Link>
              <span>/</span>
              <span className="truncate text-foreground font-medium max-w-48">{template.title}</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <Link
            href="/templates"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Templates
          </Link>

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            {/* Preview */}
            <div className="lg:col-span-3">
              <div
                className={cn(
                  "relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br shadow-2xl",
                  template.previewColor
                )}
              >
                {/* Document mockup */}
                <div className="absolute inset-6 flex flex-col gap-4 rounded-xl bg-white/12 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-white/60" />
                    <div className="h-2 w-1/3 rounded-full bg-white/50" />
                  </div>
                  <div className="flex flex-1 gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-3/4 rounded-full bg-white/70" />
                      <div className="h-2 w-1/2 rounded-full bg-white/50" />
                      <div className="mt-3 space-y-1.5">
                        <div className="h-2 w-full rounded-full bg-white/35" />
                        <div className="h-2 w-4/5 rounded-full bg-white/30" />
                        <div className="h-2 w-3/5 rounded-full bg-white/25" />
                      </div>
                    </div>
                    <div className="w-2/5 rounded-lg bg-white/20" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-7 flex-1 rounded-lg bg-white/25" />
                    <div className="h-7 w-16 rounded-lg bg-white/15" />
                  </div>
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="mt-3 flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    aria-label={`View slide ${i}`}
                    className={cn(
                      "aspect-[16/10] w-20 overflow-hidden rounded-lg border-2 transition-all duration-150",
                      i === 1 ? "border-primary shadow-sm shadow-primary/20" : "border-border/50 hover:border-primary/40"
                    )}
                  >
                    <div className={cn("h-full w-full bg-gradient-to-br opacity-80", template.previewColor)} />
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                {/* Tool + style */}
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="font-semibold">{template.tool}</Badge>
                  <Badge variant="outline">{template.style}</Badge>
                </div>

                {/* Title */}
                <h1 className="text-2xl font-black tracking-tight leading-tight sm:text-3xl">
                  {template.title}
                </h1>

                {/* Rating row */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < Math.round(template.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "fill-muted text-muted"
                          )}
                        />
                      ))}
                    </div>
                    <span className="font-bold">{template.rating}</span>
                    <span className="text-muted-foreground">
                      ({Math.floor(template.downloads * 0.06).toLocaleString()} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span>{template.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>

                {/* Description */}
                <p className="leading-relaxed text-muted-foreground">{template.description}</p>

                {/* Tags */}
                <div>
                  <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                    <Tag className="h-3.5 w-3.5" /> Tags
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {template.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs capitalize">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA — price revealed here only */}
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-4">
                  {isFree ? (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-emerald-500">Free</span>
                        <Badge className="border-0 bg-emerald-500/10 text-emerald-600">No cost</Badge>
                      </div>
                      <DownloadButton templateId={template.id} isFree={true} />
                      <p className="text-center text-xs text-muted-foreground">
                        Instant download · No sign-up required
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="flex items-end gap-1.5">
                          <span className="text-3xl font-black">$1</span>
                          <span className="mb-0.5 text-sm text-muted-foreground">one-time · flat price</span>
                        </div>
                        <Badge className="border-0 bg-violet-500/10 text-violet-600 text-xs">No subscription</Badge>
                      </div>
                      <DownloadButton templateId={template.id} isFree={false} />
                      <p className="text-center text-xs text-muted-foreground">
                        Just $1 one-time · Instant download · Yours forever
                      </p>
                    </>
                  )}

                  {/* Trust signals */}
                  <div className="border-t border-border/50 pt-4 space-y-2">
                    {[
                      "Fully editable source files",
                      `${template.formats.join(", ")} formats included`,
                      "Commercial use license",
                      "Free updates",
                    ].map(f => (
                      <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security badge */}
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5 text-primary" />
                  Secure checkout · 30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          {relatedTemplates.length > 0 && (
            <section className="mt-20 border-t border-border/40 pt-16">
              <h2 className="text-2xl font-bold tracking-tight">
                More {template.tool} Templates
              </h2>
              <p className="mt-1.5 text-muted-foreground">You might also like these</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {relatedTemplates.map(r => (
                  <TemplateCard key={r.id} template={r} />
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
