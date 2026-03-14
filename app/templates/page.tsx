"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X, ChevronDown, Flame, Sparkles, Gift } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TemplateCard } from "@/components/template-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { templates, styles } from "@/lib/templates"

// Compute counts dynamically from actual template data
const toolCounts: Record<string, number> = {}
templates.forEach(t => { toolCounts[t.tool] = (toolCounts[t.tool] ?? 0) + 1 })

const tools = [
  { name: "PowerPoint",    count: toolCounts["PowerPoint"]    ?? 0 },
  { name: "Google Slides", count: toolCounts["Google Slides"] ?? 0 },
  { name: "Canva",         count: toolCounts["Canva"]         ?? 0 },
  { name: "Excel",         count: toolCounts["Excel"]         ?? 0 },
  { name: "Figma",         count: toolCounts["Figma"]         ?? 0 },
  { name: "Word",          count: toolCounts["Word"]          ?? 0 },
  { name: "Notion",        count: toolCounts["Notion"]        ?? 0 },
  { name: "Google Docs",   count: toolCounts["Google Docs"]   ?? 0 },
]
import { cn } from "@/lib/utils"

const SORT_OPTIONS = [
  { value: "popular", label: "Most Popular" },
  { value: "rating",  label: "Highest Rated" },
  { value: "newest",  label: "Newest" },
  { value: "free",    label: "Free First" },
]
const PAGE_SIZE = 12

function TemplatesContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") ?? null

  const [search, setSearch]                     = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory)
  const [selectedStyle, setSelectedStyle]       = useState<string | null>(null)
  const [freeOnly, setFreeOnly]                 = useState(false)
  const [sortBy, setSortBy]                     = useState("popular")
  const [showFilters, setShowFilters]           = useState(false)
  const [showSortMenu, setShowSortMenu]         = useState(false)
  const [page, setPage]                         = useState(1)

  const filtered = useMemo(() => {
    let r = templates.filter(t => {
      if (selectedCategory && t.category !== selectedCategory) return false
      if (selectedStyle   && t.style    !== selectedStyle)     return false
      if (freeOnly        && t.price    !== 0)                 return false
      if (search) {
        const s = search.toLowerCase()
        return (
          t.title.toLowerCase().includes(s) ||
          t.description.toLowerCase().includes(s) ||
          t.tags.some(tag => tag.includes(s)) ||
          t.tool.toLowerCase().includes(s)
        )
      }
      return true
    })
    switch (sortBy) {
      case "rating":  r = [...r].sort((a, b) => b.rating - a.rating); break
      case "newest":  r = [...r].filter(t => t.isNew).concat([...r].filter(t => !t.isNew)); break
      case "free":    r = [...r].sort((a, b) => a.price - b.price); break
      default:        r = [...r].sort((a, b) => b.downloads - a.downloads)
    }
    return r
  }, [search, selectedCategory, selectedStyle, freeOnly, sortBy])

  const visible   = filtered.slice(0, page * PAGE_SIZE)
  const hasMore   = visible.length < filtered.length
  const hasFilter = selectedCategory || selectedStyle || freeOnly || search

  const clearFilters = () => {
    setSelectedCategory(null); setSelectedStyle(null)
    setFreeOnly(false); setSearch(""); setPage(1)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border/40 bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              {selectedCategory ? `Free ${selectedCategory} Templates` : "Browse Free Templates"}
            </h1>
            <p className="mt-1.5 text-muted-foreground">
              {selectedCategory
                ? `Professionally designed ${selectedCategory} templates — free to browse, instant download`
                : "1,200+ professionally designed templates for PowerPoint, Canva, Google Slides & more"}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search templates, tools, styles…"
                  value={search}
                  onChange={e => { setSearch(e.target.value); setPage(1) }}
                  className="pl-10 rounded-xl"
                />
              </div>
              <div className="flex gap-2">
                {/* Sort */}
                <div className="relative">
                  <button
                    onClick={() => setShowSortMenu(!showSortMenu)}
                    className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    {SORT_OPTIONS.find(o => o.value === sortBy)?.label}
                    <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", showSortMenu && "rotate-180")} />
                  </button>
                  {showSortMenu && (
                    <div className="animate-slide-down absolute right-0 top-full z-20 mt-1 w-44 overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                      {SORT_OPTIONS.map(opt => (
                        <button
                          key={opt.value}
                          onClick={() => { setSortBy(opt.value); setShowSortMenu(false); setPage(1) }}
                          className={cn(
                            "flex w-full items-center px-4 py-2.5 text-sm hover:bg-secondary transition-colors",
                            sortBy === opt.value && "font-semibold text-primary"
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {/* Mobile filter */}
                <button
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors lg:hidden"
                  onClick={() => setShowFilters(true)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {hasFilter && <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">!</span>}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Mobile overlay */}
            {showFilters && <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" onClick={() => setShowFilters(false)} />}

            {/* Sidebar */}
            <aside className={cn(
              "fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto border-r border-border bg-background p-6 transition-transform duration-300 lg:static lg:z-0 lg:block lg:w-60 lg:translate-x-0 lg:border-0 lg:bg-transparent lg:p-0",
              showFilters ? "translate-x-0" : "-translate-x-full"
            )}>
              <div className="mb-5 flex items-center justify-between lg:hidden">
                <span className="text-lg font-bold">Filters</span>
                <button onClick={() => setShowFilters(false)} className="rounded-lg p-1.5 hover:bg-secondary"><X className="h-5 w-5" /></button>
              </div>

              <div className="space-y-6">
                {/* Free only toggle */}
                <div>
                  <button
                    onClick={() => { setFreeOnly(!freeOnly); setPage(1) }}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all",
                      freeOnly
                        ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-600"
                        : "border-border text-muted-foreground hover:border-emerald-500/30 hover:bg-emerald-500/5"
                    )}
                  >
                    <Gift className="h-4 w-4" />
                    Free downloads only
                  </button>
                </div>

                {/* Tool */}
                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Tool</h3>
                  <div className="space-y-1">
                    {tools.map(tool => (
                      <button
                        key={tool.name}
                        onClick={() => { setSelectedCategory(selectedCategory === tool.name ? null : tool.name); setPage(1) }}
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                          selectedCategory === tool.name
                            ? "bg-primary/10 font-semibold text-primary"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        )}
                      >
                        <span>{tool.name}</span>
                        <span className="text-xs opacity-50">{tool.count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style */}
                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Style</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {styles.map(style => (
                      <button
                        key={style}
                        onClick={() => { setSelectedStyle(selectedStyle === style ? null : style); setPage(1) }}
                        className={cn(
                          "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                          selectedStyle === style
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                        )}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick filters */}
                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Quick</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => { setSortBy("newest"); setPage(1) }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-emerald-500" /> New Arrivals
                    </button>
                    <button
                      onClick={() => { setSortBy("popular"); setPage(1) }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <Flame className="h-3.5 w-3.5 text-orange-500" /> Trending Now
                    </button>
                  </div>
                </div>

                {hasFilter && (
                  <button
                    onClick={clearFilters}
                    className="w-full rounded-xl border border-border py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </aside>

            {/* Grid */}
            <div className="min-w-0 flex-1">
              {hasFilter && (
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  {selectedCategory && (
                    <Badge variant="secondary" className="gap-1 pr-1 rounded-lg">
                      {selectedCategory}
                      <button onClick={() => setSelectedCategory(null)}><X className="h-3 w-3" /></button>
                    </Badge>
                  )}
                  {selectedStyle && (
                    <Badge variant="secondary" className="gap-1 pr-1 rounded-lg">
                      {selectedStyle}
                      <button onClick={() => setSelectedStyle(null)}><X className="h-3 w-3" /></button>
                    </Badge>
                  )}
                  {freeOnly && (
                    <Badge className="gap-1 pr-1 rounded-lg border-0 bg-emerald-500/10 text-emerald-600">
                      Free only
                      <button onClick={() => setFreeOnly(false)}><X className="h-3 w-3" /></button>
                    </Badge>
                  )}
                </div>
              )}

              <p className="mb-5 text-sm text-muted-foreground">
                Showing <span className="font-bold text-foreground">{visible.length}</span> of{" "}
                <span className="font-bold text-foreground">{filtered.length}</span> templates
              </p>

              {filtered.length > 0 ? (
                <>
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {visible.map(t => <TemplateCard key={t.id} template={t} />)}
                  </div>
                  {hasMore && (
                    <div className="mt-12 text-center">
                      <Button variant="outline" size="lg" className="rounded-xl" onClick={() => setPage(p => p + 1)}>
                        Load More Templates
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="rounded-full bg-secondary p-6">
                    <Search className="h-9 w-9 text-muted-foreground" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">No templates found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters or search terms</p>
                  <Button variant="outline" className="mt-5 rounded-xl" onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function TemplatesPage() {
  return <Suspense><TemplatesContent /></Suspense>
}
