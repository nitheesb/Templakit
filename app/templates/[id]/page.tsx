import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Download, Star, Tag, CheckCircle2, Shield } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { TemplateCard } from "@/components/template-card"
import { DownloadButton } from "@/components/download-button"
import { BitcoinPayment } from "@/components/bitcoin-payment"
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
                  "relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl",
                  template.previewColor, "bg-gradient-to-br"
                )}
              >
                {/* Tool-specific mockup rendered via TemplateCard's ToolPreview — use inline version */}
                {template.tool === "Excel" || template.tool === "Google Docs" ? (
                  // Spreadsheet / doc: white page
                  <div className="absolute inset-6 flex flex-col rounded-xl bg-white/95 shadow-inner overflow-hidden">
                    <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2">
                      <div className="h-2.5 w-20 rounded-full bg-gray-400" />
                      <div className="h-2.5 w-14 rounded-full bg-gray-300" />
                      <div className="h-2.5 w-16 rounded-full bg-gray-300" />
                    </div>
                    <div className="flex-1 p-5 space-y-3">
                      <div className="h-4 w-1/3 rounded bg-gray-700" />
                      <div className="h-2 w-1/4 rounded-full bg-gray-400" />
                      <div className="mt-3 space-y-2">
                        {[1,.9,.95,.8,.85,.7,.9,.75].map((w,i) => (
                          <div key={i} className="h-2 rounded-full bg-gray-200" style={{width:`${w*100}%`}} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : template.tool === "Word" ? (
                  <div className="absolute inset-6 flex flex-col rounded-xl bg-white/95 shadow-xl overflow-hidden border border-gray-200">
                    <div className="bg-blue-700 px-4 py-1.5 flex items-center gap-2">
                      <div className="h-2 w-8 rounded-full bg-white/60" />
                      <div className="h-2 w-10 rounded-full bg-white/40" />
                    </div>
                    <div className="flex-1 p-5 space-y-2">
                      <div className="border-b border-gray-200 pb-3">
                        <div className="h-5 w-2/3 rounded bg-gray-800 mb-1.5" />
                        <div className="h-2 w-1/3 rounded-full bg-gray-400" />
                      </div>
                      {[1,.9,.85,.95,.75,.88,.7,.9].map((w,i) => (
                        <div key={i} className="h-2 rounded-full bg-gray-200" style={{width:`${w*100}%`}} />
                      ))}
                    </div>
                  </div>
                ) : template.tool === "Notion" ? (
                  <div className="absolute inset-0 flex overflow-hidden rounded-2xl">
                    <div className="w-24 shrink-0 bg-black/25 p-3 flex flex-col gap-2">
                      <div className="h-2.5 w-full rounded-full bg-white/70" />
                      <div className="h-px bg-white/20 my-1" />
                      {["full","4/5","3/4","full","4/5","2/3"].map((w,i) => (
                        <div key={i} className={`h-2 w-${w} rounded-full bg-white/30`} />
                      ))}
                    </div>
                    <div className="flex-1 bg-white/10 p-5 flex flex-col gap-3">
                      <div className="h-6 w-2/3 rounded bg-white/80" />
                      <div className="h-px bg-white/20" />
                      <div className="space-y-2">
                        {[1,.85,.9,.7,.8].map((w,i) => (
                          <div key={i} className="h-2.5 rounded-full bg-white/40" style={{width:`${w*100}%`}} />
                        ))}
                      </div>
                      <div className="mt-2 rounded border border-white/25 overflow-hidden">
                        {[0,1,2,3].map(r => (
                          <div key={r} className={cn("flex border-b border-white/10", r===0 && "bg-white/15")}>
                            {[1,2,3].map(c => (
                              <div key={c} className="flex-1 px-2 py-1.5 border-r border-white/10">
                                <div className="h-2 rounded-full bg-white/40" style={{width: r===0 ? "80%" : `${60+Math.random()*30}%`}} />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : template.tool === "Figma" ? (
                  <div className="absolute inset-0 flex overflow-hidden rounded-2xl bg-[#1e1e1e]/50">
                    <div className="w-20 shrink-0 bg-black/30 p-2 flex flex-col gap-1.5">
                      <div className="h-2 w-full rounded-full bg-white/50" />
                      {[90,70,80,65,75,55,80].map((w,i) => (
                        <div key={i} className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-white/25 shrink-0" />
                          <div className="h-1.5 rounded-full bg-white/25" style={{width:`${w}%`}} />
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4">
                      <div className="h-full w-4/5 rounded-xl border border-white/20 bg-white/10 flex flex-col overflow-hidden">
                        <div className="flex items-center gap-2 bg-white/15 px-3 py-2 border-b border-white/10">
                          <div className="h-2.5 w-2.5 rounded-full bg-white/60" />
                          <div className="h-1.5 w-16 rounded-full bg-white/40" />
                          <div className="flex-1" />
                          <div className="h-5 w-12 rounded-full bg-white/25" />
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center gap-3 p-4">
                          <div className="h-4 w-3/4 rounded-full bg-white/70" />
                          <div className="h-2.5 w-1/2 rounded-full bg-white/45" />
                          <div className="flex gap-3 mt-2">
                            <div className="h-8 w-20 rounded-full bg-white/25" />
                            <div className="h-8 w-20 rounded-full bg-white/15 border border-white/30" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-20 shrink-0 bg-black/30 p-2 flex flex-col gap-2">
                      <div className="h-2 w-full rounded-full bg-white/50" />
                      <div className="h-6 w-full rounded bg-white/20" />
                      <div className="h-6 w-full rounded bg-white/15" />
                      <div className="flex gap-1">
                        {[1,2,3].map(i => <div key={i} className="flex-1 h-6 rounded bg-white/20" />)}
                      </div>
                    </div>
                  </div>
                ) : template.tool === "Canva" ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                    <div className="relative z-10 h-16 w-16 rounded-full bg-white/30 shadow-xl flex items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/80 to-white/20" />
                    </div>
                    <div className="relative z-10 text-center space-y-2">
                      <div className="h-4 w-48 rounded-full bg-white/80 mx-auto" />
                      <div className="h-2.5 w-32 rounded-full bg-white/55 mx-auto" />
                    </div>
                    <div className="relative z-10 flex gap-3">
                      <div className="h-8 w-24 rounded-full bg-white/30 shadow-md" />
                      <div className="h-8 w-20 rounded-full bg-white/15 border border-white/40" />
                    </div>
                    {/* Decorative blobs */}
                    <div className="absolute top-4 right-6 h-12 w-12 rounded-full bg-white/15 blur-sm" />
                    <div className="absolute bottom-6 left-8 h-8 w-8 rotate-45 rounded-lg bg-white/10 blur-[2px]" />
                  </div>
                ) : (
                  // Default: slide / presentation
                  <div className="absolute inset-6 flex flex-col rounded-xl bg-white/12 p-5 backdrop-blur-sm gap-4">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-8 rounded-full bg-white/50" />
                      <div className="flex gap-1">
                        <div className="h-1.5 w-4 rounded-full bg-white/30" />
                        <div className="h-1.5 w-4 rounded-full bg-white/30" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-6 w-3/4 rounded bg-white/80" />
                      <div className="h-2.5 w-1/2 rounded-full bg-white/50" />
                    </div>
                    <div className="flex flex-1 gap-4">
                      <div className="flex-1 space-y-2 bg-white/10 rounded-lg p-3">
                        {[1,.9,.85,.7,.8].map((w,i) => (
                          <div key={i} className="h-2 rounded-full bg-white/45" style={{width:`${w*100}%`}} />
                        ))}
                      </div>
                      <div className="flex-1 rounded-lg bg-white/20 flex items-end justify-around p-3 gap-1">
                        {[65,45,80,55,70].map((h,i) => (
                          <div key={i} className="w-4 rounded-t bg-white/60" style={{height:`${h}%`}} />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center gap-1.5">
                      {[0,1,2,3,4].map(i => (
                        <div key={i} className={cn("h-1.5 rounded-full", i === 0 ? "w-4 bg-white/80" : "w-1.5 bg-white/30")} />
                      ))}
                    </div>
                  </div>
                )}
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

                {/* Bitcoin alternative — only for paid templates */}
                {!isFree && (
                  <div>
                    <div className="my-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="h-px flex-1 bg-border" />
                      or pay with crypto
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <BitcoinPayment />
                  </div>
                )}
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
