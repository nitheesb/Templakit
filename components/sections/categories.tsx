import Link from "next/link"
import {
  Presentation, Monitor, Palette, Table2,
  FileText, BookOpen, FileEdit, Figma, ArrowRight,
} from "lucide-react"
import { templates } from "@/lib/templates"

// Compute counts from actual template data at build time
const toolCounts: Record<string, number> = {}
templates.forEach(t => { toolCounts[t.tool] = (toolCounts[t.tool] ?? 0) + 1 })

const tools = [
  { name: "PowerPoint",    icon: Presentation, count: toolCounts["PowerPoint"]    ?? 0, iconColor: "text-orange-500",  bgColor: "bg-orange-500/10 hover:bg-orange-500/15",  desc: "Slides & presentations" },
  { name: "Google Slides", icon: Monitor,      count: toolCounts["Google Slides"] ?? 0, iconColor: "text-yellow-500",  bgColor: "bg-yellow-500/10 hover:bg-yellow-500/15",  desc: "Shareable slide decks" },
  { name: "Canva",         icon: Palette,      count: toolCounts["Canva"]         ?? 0, iconColor: "text-violet-500",  bgColor: "bg-violet-500/10 hover:bg-violet-500/15",  desc: "Designs & social media" },
  { name: "Excel",         icon: Table2,       count: toolCounts["Excel"]         ?? 0, iconColor: "text-green-500",   bgColor: "bg-green-500/10  hover:bg-green-500/15",   desc: "Spreadsheets & models" },
  { name: "Figma",         icon: Figma,        count: toolCounts["Figma"]         ?? 0, iconColor: "text-pink-500",    bgColor: "bg-pink-500/10  hover:bg-pink-500/15",    desc: "UI kits & design files" },
  { name: "Word",          icon: FileText,     count: toolCounts["Word"]          ?? 0, iconColor: "text-blue-500",    bgColor: "bg-blue-500/10  hover:bg-blue-500/15",    desc: "Documents & resumes" },
  { name: "Notion",        icon: BookOpen,     count: toolCounts["Notion"]        ?? 0, iconColor: "text-slate-400",   bgColor: "bg-slate-500/10 hover:bg-slate-500/15",   desc: "Pages & databases" },
  { name: "Google Docs",   icon: FileEdit,     count: toolCounts["Google Docs"]   ?? 0, iconColor: "text-cyan-500",    bgColor: "bg-cyan-500/10  hover:bg-cyan-500/15",    desc: "Docs & proposals" },
]

export function CategoriesSection() {
  return (
    <section className="border-t border-border/40 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Browse by Tool</h2>
            <p className="mt-2 text-muted-foreground">
              Templates made specifically for the tools you already use
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.name}
                href={`/templates?category=${encodeURIComponent(tool.name)}`}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200 ${tool.bgColor}`}>
                    <Icon className={`h-5 w-5 ${tool.iconColor}`} />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary/70" />
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold">{tool.name}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{tool.desc}</p>
                </div>
                <p className="mt-3 text-xs text-muted-foreground/70">
                  {tool.count} templates
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
