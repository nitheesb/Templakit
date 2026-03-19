import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { StatsBanner } from "@/components/sections/stats-banner"
import { CategoriesSection } from "@/components/sections/categories"
import { FeaturedTemplates } from "@/components/sections/featured-templates"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"

export const metadata: Metadata = {
  title: "Free PowerPoint, Canva, Google Slides & Figma Templates | Templakit",
  description:
    "Download 400+ professionally designed templates for PowerPoint, Google Slides, Canva, Excel, Figma, Word, Notion, and Google Docs. Free to browse, instant download. Premium downloads just $1.",
  alternates: {
    canonical: "https://templakit.vercel.app",
  },
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsBanner />
        <CategoriesSection />
        <FeaturedTemplates />
        <HowItWorks />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
