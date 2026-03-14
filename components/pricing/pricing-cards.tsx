"use client"

import { useState } from "react"
import { Check, Zap, Download, Infinity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const payAsYouGo = [
  { label: "Basic template", price: "$1", example: "e.g. Resume, Blog Post, Basic Slides" },
  { label: "Standard template", price: "$2", example: "e.g. Pitch Deck, Brand Kit, UI Kit" },
  { label: "Premium template", price: "$3", example: "e.g. Full Design System, Financial Model" },
]

const plans = [
  {
    name: "Free",
    tagline: "Browse everything, download free templates",
    monthlyPrice: 0,
    annualPrice: 0,
    highlight: false,
    ctaText: "Start Browsing Free",
    features: [
      "Unlimited browsing of all templates",
      "Download all free templates (500+)",
      "PNG & PDF formats",
      "Personal use license",
      "No credit card required",
    ],
  },
  {
    name: "Credits Pack",
    tagline: "Best value for premium downloads",
    monthlyPrice: 5,
    annualPrice: null,
    highlight: true,
    ctaText: "Get 10 Credits",
    badge: "Best Value",
    features: [
      "10 premium download credits",
      "Use on any premium templates",
      "All file formats",
      "Commercial use license",
      "Credits never expire",
      "50% cheaper than per-download",
    ],
    perCredit: "$0.50 per premium download",
  },
  {
    name: "Unlimited",
    tagline: "Everything, forever, no counting",
    monthlyPrice: 9,
    annualPrice: 7,
    highlight: false,
    ctaText: "Start Free Trial",
    features: [
      "Unlimited premium downloads",
      "All 1,200+ templates",
      "All file formats",
      "Commercial use license",
      "Priority support",
      "Early access to new templates",
      "7-day free trial",
    ],
  },
]

export function PricingCards() {
  const [annual, setAnnual] = useState(false)

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

      {/* Pay-as-you-go callout */}
      <div className="mb-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold">Pay per download — no subscription needed</h3>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Just want one template? Pay a tiny one-time fee. No account required.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {payAsYouGo.map(tier => (
              <div key={tier.label} className="rounded-xl border border-border bg-card px-4 py-3 text-center min-w-[110px]">
                <div className="text-2xl font-black text-primary">{tier.price}</div>
                <div className="text-xs font-semibold text-foreground">{tier.label}</div>
                <div className="mt-0.5 text-[10px] text-muted-foreground leading-tight">{tier.example}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Billing toggle — only for Unlimited */}
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <h3 className="text-xl font-bold">Or choose a plan for regular downloads</h3>
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
          const price = annual && plan.annualPrice !== null ? plan.annualPrice : plan.monthlyPrice
          const showPerMonth = plan.name === "Unlimited"

          return (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 transition-all duration-300",
                plan.highlight
                  ? "border-primary/50 bg-card glow-sm scale-[1.02] ring-1 ring-primary/20"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
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

              <div className="mb-1 flex items-end gap-1.5">
                {price === 0 ? (
                  <span className="text-5xl font-black text-emerald-500">Free</span>
                ) : plan.name === "Credits Pack" ? (
                  <>
                    <span className="text-5xl font-black">${price}</span>
                    <span className="mb-1.5 text-muted-foreground text-sm">/ 10 credits</span>
                  </>
                ) : (
                  <>
                    <span className="text-5xl font-black">${price}</span>
                    <span className="mb-1.5 text-muted-foreground">/mo</span>
                  </>
                )}
              </div>

              {plan.perCredit && (
                <p className="mb-4 text-xs font-semibold text-emerald-500">{plan.perCredit}</p>
              )}
              {annual && showPerMonth && price > 0 && (
                <p className="mb-4 -mt-1 text-xs text-emerald-500 font-semibold">
                  Billed annually · Save ${(plan.monthlyPrice - price) * 12}/yr
                </p>
              )}

              <ul className="mb-8 flex-1 space-y-3 mt-4">
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

      {/* Money-back */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-500" /> 30-day money-back guarantee</span>
        <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-500" /> Cancel anytime</span>
        <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-500" /> No hidden fees</span>
        <span className="flex items-center gap-1.5"><Infinity className="h-4 w-4 text-emerald-500" /> Credits never expire</span>
      </div>
    </div>
  )
}
