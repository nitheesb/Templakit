import { Search, Palette, Download, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Browse 400+ Templates",
    description: "Search by tool (PowerPoint, Canva, Figma…), category, or style. Filter by free vs premium. Every template has a full preview so you know exactly what you're getting before you click.",
    icon: Search,
    color: "from-blue-500 to-indigo-600",
    detail: "500+ free templates · 8 tools covered",
  },
  {
    number: "02",
    title: "Customise in Your Tool",
    description: "Open directly in PowerPoint, Canva, Figma, Excel, Word, Notion, or Google Docs. Change colours, fonts, and content in the tool you already know — no new software to learn.",
    icon: Palette,
    color: "from-violet-500 to-purple-600",
    detail: "Works with tools you already use",
  },
  {
    number: "03",
    title: "Download & Use Instantly",
    description: "Free templates download immediately — no sign-up, no waiting. Premium templates ($1) go through a 30-second Stripe checkout. Your files are yours forever, including all future updates.",
    icon: Download,
    color: "from-emerald-500 to-teal-600",
    detail: "Instant download · Yours forever",
  },
]

export function HowItWorks() {
  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Zap className="h-3.5 w-3.5" /> Simple Process
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            From browsing to done in under 5 minutes
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            No tutorials, no learning curve. Find a template you love, open it in your tool, customise, and use it — that&apos;s it.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
          {/* Connector lines */}
          <div className="absolute left-0 right-0 top-8 hidden h-px lg:block">
            <div className="mx-auto max-w-3xl px-32">
              <div className="h-px bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-emerald-500/30" />
            </div>
          </div>

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className={cn(
                  "relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-xl shadow-black/10",
                  step.color
                )}>
                  <Icon className="h-7 w-7 text-white" />
                  <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-background text-xs font-black ring-2 ring-border">
                    {step.number}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-black">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  {step.detail}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
