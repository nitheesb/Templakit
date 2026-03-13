import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { CategoriesSection } from "@/components/sections/categories"
import { FeaturedTemplates } from "@/components/sections/featured-templates"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Testimonials } from "@/components/sections/testimonials"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <FeaturedTemplates />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
