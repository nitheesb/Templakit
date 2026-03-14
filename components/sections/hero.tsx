import Link from "next/link"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const avatarColors = [
  "from-violet-500 to-purple-600",
  "from-pink-500 to-rose-500",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background layers */}
      <div className="dot-grid absolute inset-0 -z-10 opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/8 via-transparent to-transparent" />
      <div className="absolute -z-10 left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 to-violet-500/10 blur-[100px]" />
      <div className="absolute -z-10 right-1/4 top-20 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 blur-[80px]" />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-36">
        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium text-primary">1,200+ Professional Templates</span>
            <span className="text-muted-foreground">— Free & Pro</span>
          </div>

          {/* Main headline */}
          <h1 className="animate-slide-up text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            The Best Templates for{" "}
            <span className="gradient-text animate-gradient">
              Every Tool
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-slide-up delay-100 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Download professionally designed templates for PowerPoint, Google Slides, Canva, Excel,
            Figma, Word, Notion, and Google Docs. Save hours. Look incredible.
          </p>

          {/* CTA row */}
          <div className="animate-slide-up delay-200 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full shadow-xl shadow-primary/25 sm:w-auto">
              <Link href="/templates">
                Browse Templates
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="animate-slide-up delay-300 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            {/* Avatar stack */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {avatarColors.map((color, i) => (
                  <div
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${color} ring-2 ring-background text-xs font-semibold text-white`}
                  >
                    {["J", "S", "A", "M"][i]}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-medium">4.9</span>
                <span className="text-muted-foreground">from 2,400+ reviews</span>
              </div>
            </div>
            <span className="hidden text-muted-foreground/40 sm:block">·</span>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">10,000+</span> creators & teams
            </p>
          </div>

          <p className="animate-fade-in delay-400 mt-3 text-xs text-muted-foreground/60">
            No credit card required · 5 free downloads monthly
          </p>
        </div>

        {/* Tool pills row */}
        <div className="animate-fade-in delay-500 mt-16 flex flex-wrap items-center justify-center gap-3">
          {[
            { name: "PowerPoint", emoji: "📊" },
            { name: "Google Slides", emoji: "🖥️" },
            { name: "Canva", emoji: "🎨" },
            { name: "Excel", emoji: "📈" },
            { name: "Figma", emoji: "✏️" },
            { name: "Word", emoji: "📄" },
            { name: "Notion", emoji: "📓" },
            { name: "Google Docs", emoji: "📝" },
          ].map((tool) => (
            <Link
              key={tool.name}
              href={`/templates?category=${encodeURIComponent(tool.name)}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5"
            >
              <span>{tool.emoji}</span>
              {tool.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
