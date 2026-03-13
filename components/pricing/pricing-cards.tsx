"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out Templakit",
    price: "$0",
    period: "forever",
    features: [
      "5 downloads per month",
      "Access to free templates",
      "Basic file formats",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For individuals and freelancers",
    price: "$9",
    period: "per month",
    features: [
      "Unlimited downloads",
      "Access to all templates",
      "All file formats",
      "Priority support",
      "Early access to new templates",
      "No watermarks",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Team",
    description: "For teams and organizations",
    price: "$29",
    period: "per month",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team collaboration tools",
      "Shared template library",
      "Brand kit uploads",
      "Dedicated account manager",
      "Custom templates on request",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-2xl border bg-card p-8 transition-all duration-300",
              plan.popular
                ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                : "border-border hover:border-primary/50"
            )}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                Most Popular
              </Badge>
            )}

            {/* Plan Header */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              size="lg"
              variant={plan.popular ? "default" : "outline"}
              className="w-full"
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
