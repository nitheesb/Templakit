import Link from "next/link"
import { Check, Download, Gift, ArrowRight, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const freeIncludes = [
  "400+ templates across 5 tools — no account needed",
  "PowerPoint, Google Slides, Excel, Word, Google Docs",
  "Instant download — no waiting",
  "PPTX, DOCX, XLSX, PDF formats",
  "Personal & internal business use license",
  "Mobile-friendly browsing",
]

const premiumIncludes = [
  "Everything in Free",
  "Full commercial use license",
  "Advanced slide designs & layouts",
  "All source file formats included",
  "Free updates to the template forever",
  "30-day money-back guarantee",
]

const examples = [
  { name: "Startup Pitch Deck", tool: "PowerPoint", downloads: "24.5K", rating: 4.9 },
  { name: "Investor Pitch", tool: "Google Slides", downloads: "19.8K", rating: 4.9 },
  { name: "Financial Model", tool: "Excel", downloads: "16.3K", rating: 4.8 },
  { name: "UI Design Kit", tool: "Google Slides", downloads: "21.7K", rating: 4.9 },
  { name: "Resume Pro", tool: "Word", downloads: "30.1K", rating: 4.8 },
  { name: "Brand Identity Deck", tool: "PowerPoint", downloads: "9.3K", rating: 4.9 },
]

export function PricingCards() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

      {/* Two-tier side-by-side */}
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

        {/* Free tier */}
        <div className="relative flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <Gift className="h-5 w-5 text-emerald-500" />
            </div>
            <h3 className="text-xl font-black">Free Forever</h3>
          </div>
          <p className="text-sm text-muted-foreground">Browse and download 180+ free templates — zero cost, zero sign-up.</p>

          <div className="my-6 flex items-end gap-1">
            <span className="text-5xl font-black text-emerald-500">$0</span>
            <span className="mb-1.5 text-muted-foreground">/ forever</span>
          </div>

          <ul className="mb-8 flex-1 space-y-3">
            {freeIncludes.map(f => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" variant="outline" className="w-full rounded-xl font-semibold">
            <Link href="/templates">
              Browse Free Templates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">No account required · Instant download</p>
        </div>

        {/* Premium $1 tier */}
        <div className="relative flex flex-col rounded-2xl border border-primary/40 bg-card p-6 ring-1 ring-primary/20 shadow-xl shadow-primary/5 sm:p-8">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <Badge className="gap-1.5 border-0 bg-gradient-to-r from-primary to-violet-500 px-3 py-1 text-white shadow-lg">
              <Zap className="h-3 w-3" /> Most Popular
            </Badge>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Download className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-black">Premium Template</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Advanced templates with commercial license. Pay once per template, own it forever.
          </p>

          <div className="my-6">
            <div className="flex items-end gap-1">
              <span className="text-5xl font-black">$1</span>
              <span className="mb-1.5 text-muted-foreground">/ template</span>
            </div>
            <p className="mt-1 text-xs font-semibold text-emerald-500">
              One-time payment · No subscription · Yours forever
            </p>
          </div>

          <ul className="mb-8 flex-1 space-y-3">
            {premiumIncludes.map(f => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="btn-gradient w-full rounded-xl border-0 font-semibold text-white shadow-lg shadow-primary/20">
            <Link href="/templates">
              Browse Premium Templates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Checkout via Stripe · Card, Apple Pay, Google Pay
          </p>
        </div>
      </div>

      {/* Trust row */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        {[
          "30-day money-back guarantee",
          "No hidden fees",
          "No subscription required",
          "Free templates free forever",
        ].map(t => (
          <span key={t} className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-500" />
            {t}
          </span>
        ))}
      </div>

      {/* Example premium templates */}
      <div className="mt-16">
        <h3 className="text-center text-lg font-bold">Popular premium templates — each just $1</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map(ex => (
            <div key={ex.name} className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
              <div>
                <p className="text-sm font-semibold">{ex.name}</p>
                <p className="text-xs text-muted-foreground">{ex.tool} · {ex.downloads} downloads</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-xs">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{ex.rating}</span>
                </div>
                <span className="font-black text-primary">$1</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/templates">
              See all templates
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
