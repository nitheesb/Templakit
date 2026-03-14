import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { FeatureComparison } from "@/components/pricing/feature-comparison"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

export const metadata: Metadata = {
  title: "Pricing — Download Premium Templates from $1",
  description:
    "Browse 500+ free templates at no cost. Premium templates are just $1 flat — the most generous pricing anywhere. No subscription required.",
  alternates: { canonical: "https://templakit.vercel.app/pricing" },
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/40">
          <div className="dot-grid absolute inset-0 -z-10 opacity-40" />
          <div className="mesh-gradient absolute inset-0 -z-10" />
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              ✓ Always free to browse
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Transparent,{" "}
              <span className="gradient-text">Fair Pricing</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              500+ templates are completely free. Every premium template is just{" "}
              <strong className="text-foreground">$1 flat</strong> — the most generous pricing anywhere.
              No subscription, no tricks, just $1.
            </p>
          </div>
        </section>

        <PricingCards />
        <FeatureComparison />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  )
}
