import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { FeatureComparison } from "@/components/pricing/feature-comparison"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="relative overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 to-violet-500/20 blur-3xl" />
          </div>
          
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Choose the plan that works best for you. All plans include access to our entire template library.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <PricingCards />

        {/* Feature Comparison */}
        <FeatureComparison />

        {/* FAQ */}
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  )
}
