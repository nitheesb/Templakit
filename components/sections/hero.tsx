import Link from "next/link"
import { ArrowRight, CheckCircle2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const avatarGradients = [
  "from-violet-500 to-purple-600",
  "from-pink-500 to-rose-500",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-blue-500 to-indigo-500",
]
const avatarInitials = ["J", "S", "A", "M", "R"]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Layered backgrounds */}
      <div className="dot-grid absolute inset-0 -z-10 opacity-50" />
      <div className="mesh-gradient absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-36 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            100% Free to browse — No sign-up required
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Free Templates for{" "}
            <span className="gradient-text animate-gradient">
              Every Tool
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-slide-up delay-100 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Browse 400+ professionally designed templates for{" "}
            <span className="font-semibold text-foreground">PowerPoint, Google Slides, Canva, Excel, Figma, Word, Notion</span>{" "}
            and more. 180+ completely free, rest just $1.
          </p>

          {/* CTAs */}
          <div className="animate-slide-up delay-200 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/templates"
              className="btn-gradient inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white sm:w-auto"
            >
              Browse Free Templates
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-xl">
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="animate-slide-up delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            {/* Avatar stack */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {avatarGradients.map((g, i) => (
                  <div
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${g} text-[11px] font-bold text-white ring-2 ring-background`}
                  >
                    {avatarInitials[i]}
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-sm font-bold">4.9</span>
                </div>
                <span className="text-xs text-muted-foreground">from 2,400+ reviews</span>
              </div>
            </div>

            <span className="hidden text-border sm:block">|</span>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span><span className="font-bold text-foreground">400+</span> templates</span>
              <span><span className="font-bold text-foreground">180+</span> free</span>
              <span><span className="font-bold text-foreground">8</span> tools covered</span>
            </div>
          </div>

          {/* Trust line */}
          <p className="animate-fade-in delay-500 mt-4 text-xs text-muted-foreground/60">
            Free to browse · 180+ templates free forever · Premium templates just $1
          </p>
        </div>

        {/* Tool pill links */}
        <div className="animate-fade-in delay-700 mt-16 flex flex-wrap items-center justify-center gap-2.5">
          {[
            { name: "PowerPoint",    emoji: "📊", color: "hover:border-orange-500/40 hover:bg-orange-500/5 hover:text-orange-600" },
            { name: "Google Slides", emoji: "🖥️", color: "hover:border-yellow-500/40 hover:bg-yellow-500/5 hover:text-yellow-600" },
            { name: "Canva",         emoji: "🎨", color: "hover:border-violet-500/40 hover:bg-violet-500/5 hover:text-violet-600" },
            { name: "Excel",         emoji: "📈", color: "hover:border-green-500/40 hover:bg-green-500/5 hover:text-green-600" },
            { name: "Figma",         emoji: "✏️", color: "hover:border-pink-500/40 hover:bg-pink-500/5 hover:text-pink-600" },
            { name: "Word",          emoji: "📄", color: "hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-blue-600" },
            { name: "Notion",        emoji: "📓", color: "hover:border-slate-500/40 hover:bg-slate-500/5" },
            { name: "Google Docs",   emoji: "📝", color: "hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:text-cyan-600" },
          ].map(tool => (
            <Link
              key={tool.name}
              href={`/templates?category=${encodeURIComponent(tool.name)}`}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-200 hover:shadow-md",
                tool.color
              )}
            >
              <span role="img" aria-label={tool.name}>{tool.emoji}</span>
              {tool.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
