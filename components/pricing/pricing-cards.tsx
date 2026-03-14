"use client"

import { useState } from "react"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out Templakit",
    monthly: 0, annual: 0,
    features: [
      "5 downloads per month",
      "Access to all free templates",
      "PNG & PDF formats",
      "Email support",
      "Personal use license",
    ],
    cta: "Get Started Free",
    popular: false,
    highlight: false,
  },
  {
    name: "Pro",
    description: "For individuals and freelancers",
    monthly: 9, annual: 7,
    features: [
      "Unlimited downloads",
      "Access to all 1,200+ templates",
      "All file formats (PPTX, Figma, DOCX…)",
      "No watermarks",
      "Commercial use license",
      "Priority support",
      "Early access to new templates",
    ],
    cta: "Start 7-Day Free Trial",
    popular: true,
    highlight: true,
  },
  {
    name: "Team",
    description: "For teams and agencies",
    monthly: 29, annual: 23,
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Shared template library",
      "Team collaboration tools",
      "Brand kit uploads",
      "Dedicated account manager",
      "Custom templates on request",
    ],
    cta: "Contact Sales",
    popular: false,
    highlight: false,
  },
]

export function PricingCards() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Billing toggle */}
      <div className="mb-12 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 rounded-full border border-border bg-secondary/40 p-1">
          <button
            onClick={() => setAnnual(false)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
              !annual ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={cn(
              "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
              annual ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Annual
            <Badge className="border-0 bg-emerald-500/15 text-emerald-500 text-[10px] px-1.5 py-0">
              Save 20%
            </Badge>
          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          🔒 30-day money-back guarantee on all paid plans
        </p>
      </div>

      {/* Plan cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = annual ? plan.annual : plan.monthly
          return (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 transition-all duration-300",
                plan.highlight
                  ? "border-primary/60 bg-card shadow-2xl shadow-primary/10 scale-[1.02] ring-1 ring-primary/20"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-lg"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="gap-1 border-0 bg-gradient-to-r from-primary to-violet-500 text-white shadow-lg px-3 py-1">
                    <Zap className="h-3 w-3" /> Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6 flex items-end gap-1">
                {price === 0 ? (
                  <span className="text-5xl font-bold">Free</span>
                ) : (
                  <>
                    <span className="text-5xl font-bold">${price}</span>
                    <span className="mb-1 text-muted-foreground">/mo</span>
                  </>
                )}
              </div>
              {annual && price > 0 && (
                <p className="mb-6 -mt-4 text-xs text-emerald-500 font-medium">
                  Billed annually · Save ${(plan.monthly - price) * 12}/yr
                </p>
              )}

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={cn("mt-0.5 h-4 w-4 shrink-0", plan.highlight ? "text-primary" : "text-muted-foreground")} />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.highlight ? "default" : "outline"}
                className={cn("w-full", plan.highlight && "shadow-lg shadow-primary/25")}
              >
                {plan.cta}
              </Button>
            </div>
          )
        })}
      </div>

      {/* Trust row */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <span>✓ Cancel anytime</span>
        <span>✓ No credit card for free plan</span>
        <span>✓ 7-day free trial on Pro</span>
        <span>✓ 30-day money-back guarantee</span>
      </div>
    </section>
  )
}
