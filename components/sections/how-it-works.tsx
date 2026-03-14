import { Search, Palette, Download } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Browse",
    description: "Explore our curated collection of professionally designed templates across multiple categories.",
    icon: Search,
    color: "from-blue-500 to-indigo-500",
  },
  {
    number: "02",
    title: "Customize",
    description: "Make it yours by customizing colors, fonts, and content to match your brand perfectly.",
    icon: Palette,
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "03",
    title: "Download",
    description: "Download your template in your preferred format and start using it immediately.",
    icon: Download,
    color: "from-emerald-500 to-teal-500",
  },
]

export function HowItWorks() {
  return (
    <section className="border-t border-border/40 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Get started in three simple steps
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 hidden h-px w-full bg-gradient-to-r from-border via-primary/50 to-border lg:block" />
                )}
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={cn(
                    "relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                    step.color
                  )}>
                    <Icon className="h-8 w-8 text-white" />
                    <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-background text-xs font-bold shadow-sm ring-1 ring-border">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
