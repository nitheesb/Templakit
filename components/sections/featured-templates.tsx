"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Flame, Sparkles, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TemplateCard } from "@/components/template-card"
import { templates } from "@/lib/templates"
import { cn } from "@/lib/utils"

const tabs = [
  { key: "trending", label: "Trending",  icon: Flame },
  { key: "new",      label: "New",       icon: Sparkles },
  { key: "free",     label: "Free",      icon: Gift },
  { key: "all",      label: "All",       icon: null },
] as const

type TabKey = typeof tabs[number]["key"]

function getFiltered(tab: TabKey) {
  switch (tab) {
    case "trending": return templates.filter(t => t.isTrending).slice(0, 6)
    case "new":      return templates.filter(t => t.isNew).slice(0, 6)
    case "free":     return templates.filter(t => t.price === 0).slice(0, 6)
    default:         return templates.slice(0, 6)
  }
}

export function FeaturedTemplates() {
  const [activeTab, setActiveTab] = useState<TabKey>("trending")
  const filtered = getFiltered(activeTab)

  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Featured Templates
            </h2>
            <p className="mt-2 text-muted-foreground">
              Hand-picked templates loved by our community
            </p>
          </div>
          <Button variant="outline" className="shrink-0 rounded-xl" asChild>
            <Link href="/templates">
              View All Templates
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 flex gap-1 w-fit rounded-xl border border-border bg-secondary/30 p-1">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200",
                activeTab === key
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {Icon && (
                <Icon className={cn(
                  "h-3.5 w-3.5",
                  key === "trending" && activeTab === key && "text-orange-500",
                  key === "new"      && activeTab === key && "text-emerald-500",
                  key === "free"     && activeTab === key && "text-violet-500",
                )} />
              )}
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(template => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  )
}
