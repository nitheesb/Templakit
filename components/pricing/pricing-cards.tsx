"use client"

import { useState } from "react"
import { Check, Zap, Download, Infinity, Gift, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    tagline: "Browse & download hundreds of free templates",
    monthlyPrice: 0,
    annualPrice: 0,
    highlight: false,
    ctaText: "Start for Free",
    icon: Gift,
    features: [
      "Unlimited browsing of all templates",
      "Download all free templates (500+)",
      "PNG & PDF formats",
      "Personal use license",
      "No account required",
    ],
  },
  {
    name: "Unlimited",
    tagline: "Every template, every tool, every format",
    monthlyPrice: 9,
    annualPrice: 7,
    highlight: true,
    ctaText: "Start 7-Day Free Trial",
    badge: "Most Popular",
    icon: Infinity,
    features: [
      "Unlimited downloads (free + premium)",
      "All 1,200+ templates",
      "All file formats (PPTX, Figma, DOCX…)",
      "Commercial use license",
      "No watermarks",
      "Priority support",
      "Early access to new templates",
      "7-day free trial included",
    ],
  },
  {
    name: "Team",
    tagline: "For agencies and growing teams",
    monthlyPrice: 19,
    annualPrice: 15,
    highlight: false,
    ctaText: "Contact Sales",
    icon: Sparkles,
    features: [
      "Everything in Unlimited",
      "Up to 10 team members",
      "Shared template library",
      "Brand kit uploads",
      "Team collaboration tools",
      "Dedicated account manager",
    ],
  },
]

export function PricingCards() {
  const [annual, setAnnual] = useState(false)

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

      {/* Pay-per-download hero callout */}
      <div className="mb-16 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-violet-500/5 to-pink-500/5 p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-lg">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <Download className="h-3.5 w-3.5" /> No subscription needed
            </div>
            <h3 className="text-2xl font-black tracking-tight">
              Just want one template?<br />
              Pay <span className="gradient-text">just $1</span>
            </h3>
            <p className="mt-2 text-muted-foreground">
              Every premium template is only <strong className="text-foreground">$1 one-time</strong>.
              No subscription, no account, no hassle. The fairest pricing on the internet.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-6xl font-black text-primary">$1</div>
              <div className="mt-1 text-sm font-semibold text-muted-foreground">per premium template</div>
              <div className="mt-0.5 text-xs text-muted-foreground">one-time · yours forever</div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              {["Instant download", "All formats included", "Commercial license", "Free updates"].map(f => (
                <div key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Billing toggle */}
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <p className="text-sm text-muted-foreground">Or save more with a plan:</p>
        <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 p-1">
          <button
            onClick={() => setAnnual(false)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              !annual ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={cn(
              "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all",
              annual ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Annual
            <Badge className="border-0 bg-emerald-500/15 text-emerald-500 text-[10px] px-1.5 py-0">Save 20%</Badge>
          </button>
        </div>
      </div>

      {/* Plan cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map(plan => {
          const price = annual ? plan.annualPrice : plan.monthlyPrice

          return (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 transition-all duration-300",
                plan.highlight
                  ? "border-primary/50 bg-card glow-sm scale-[1.02] ring-1 ring-primary/20"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-lg"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="gap-1 border-0 bg-gradient-to-r from-primary to-violet-500 text-white shadow-lg px-3 py-1">
                    <Zap className="h-3 w-3" /> {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-black">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
              </div>

              <div className="mb-2 flex items-end gap-1.5">
                {price === 0 ? (
                  <span className="text-5xl font-black text-emerald-500">Free</span>
                ) : (
                  <>
                    <span className="text-5xl font-black">${price}</span>
                    <span className="mb-1.5 text-muted-foreground">/mo</span>
                  </>
                )}
              </div>
              {annual && price > 0 && (
                <p className="mb-4 text-xs font-semibold text-emerald-500">
                  Billed annually · Save ${(plan.monthlyPrice - price) * 12}/yr
                </p>
              )}

              <ul className="mb-8 mt-4 flex-1 space-y-3">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={cn("mt-0.5 h-4 w-4 shrink-0", plan.highlight ? "text-primary" : "text-emerald-500")} />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.highlight ? "default" : "outline"}
                className={cn("w-full rounded-xl font-semibold", plan.highlight && "btn-gradient text-white border-0")}
              >
                {plan.ctaText}
              </Button>
            </div>
          )
        })}
      </div>

      {/* Trust row */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-500" /> 30-day money-back guarantee</span>
        <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-500" /> Cancel anytime</span>
        <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-500" /> No hidden fees</span>
        <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-500" /> Free forever plan</span>
      </div>
    </div>
  )
}
