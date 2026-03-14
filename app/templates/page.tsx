"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X, ChevronDown, Flame, Sparkles } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TemplateCard } from "@/components/template-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { templates, tools, styles } from "@/lib/templates"
import { cn } from "@/lib/utils"
import { Suspense } from "react"

const SORT_OPTIONS = [
  { value: "popular",  label: "Most Popular" },
  { value: "rating",   label: "Highest Rated" },
  { value: "newest",   label: "Newest" },
  { value: "free",     label: "Free First" },
]

const PAGE_SIZE = 12

function TemplatesContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") ?? null

  const [search, setSearch]                 = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory)
  const [selectedStyle, setSelectedStyle]   = useState<string | null>(null)
  const [selectedTier, setSelectedTier]     = useState<"all" | "free" | "pro">("all")
  const [sortBy, setSortBy]                 = useState("popular")
  const [showFilters, setShowFilters]       = useState(false)
  const [showSortMenu, setShowSortMenu]     = useState(false)
  const [page, setPage]                     = useState(1)

  const filteredTemplates = useMemo(() => {
    let result = templates.filter((t) => {
      if (selectedCategory && t.category !== selectedCategory) return false
      if (selectedStyle   && t.style    !== selectedStyle)     return false
      if (selectedTier === "free" && t.isPro)   return false
      if (selectedTier === "pro"  && !t.isPro)  return false
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
      case "rating":  result = [...result].sort((a, b) => b.rating - a.rating);    break
      case "newest":  result = [...result].filter(t => t.isNew).concat(result.filter(t => !t.isNew)); break
      case "free":    result = [...result].sort((a, b) => Number(a.isPro) - Number(b.isPro)); break
      default:        result = [...result].sort((a, b) => b.downloads - a.downloads)
    }
    return result
  }, [search, selectedCategory, selectedStyle, selectedTier, sortBy])

  const visibleTemplates = filteredTemplates.slice(0, page * PAGE_SIZE)
  const hasMore = visibleTemplates.length < filteredTemplates.length

  const clearFilters = () => {
    setSelectedCategory(null); setSelectedStyle(null)
    setSelectedTier("all");    setSearch(""); setPage(1)
  }
  const hasActiveFilters = selectedCategory || selectedStyle || selectedTier !== "all" || search
  const activeSort = SORT_OPTIONS.find(o => o.value === sortBy)!

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <div className="border-b border-border/40 bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {selectedCategory ? `${selectedCategory} Templates` : "All Templates"}
            </h1>
            <p className="mt-1.5 text-muted-foreground">
              {selectedCategory
                ? `Professionally designed ${selectedCategory} templates ready to download`
                : "Browse 1,200+ professionally designed templates for every tool"}
            </p>

            {/* Search + controls row */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search templates, tools, styles…"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                {/* Sort dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowSortMenu(!showSortMenu)}
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm transition-colors hover:bg-secondary"
                  >
                    {activeSort.label}
                    <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", showSortMenu && "rotate-180")} />
                  </button>
                  {showSortMenu && (
                    <div className="animate-slide-down absolute right-0 top-full z-20 mt-1 w-44 overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                      {SORT_OPTIONS.map(opt => (
                        <button
                          key={opt.value}
                          onClick={() => { setSortBy(opt.value); setShowSortMenu(false); setPage(1) }}
                          className={cn(
                            "flex w-full items-center px-4 py-2.5 text-sm transition-colors hover:bg-secondary",
                            sortBy === opt.value && "font-medium text-primary"
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {/* Mobile filter toggle */}
                <button
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm transition-colors hover:bg-secondary lg:hidden"
                  onClick={() => setShowFilters(true)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {hasActiveFilters && (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">!</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Sidebar */}
            <>
              {/* Mobile overlay */}
              {showFilters && (
                <div
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                  onClick={() => setShowFilters(false)}
                />
              )}
              <aside
                className={cn(
                  "fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto border-r border-border bg-background p-6 transition-transform duration-300 lg:static lg:z-0 lg:block lg:w-60 lg:translate-x-0 lg:border-r-0 lg:bg-transparent lg:p-0",
                  showFilters ? "translate-x-0" : "-translate-x-full"
                )}
              >
                <div className="mb-5 flex items-center justify-between lg:hidden">
                  <span className="text-lg font-semibold">Filters</span>
                  <button onClick={() => setShowFilters(false)} className="rounded-lg p-1.5 hover:bg-secondary">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Tool / Category */}
                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tool</h3>
                    <div className="space-y-1">
                      {tools.map((tool) => (
                        <button
                          key={tool.name}
                          onClick={() => { setSelectedCategory(selectedCategory === tool.name ? null : tool.name); setPage(1) }}
                          className={cn(
                            "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                            selectedCategory === tool.name
                              ? "bg-primary/10 font-medium text-primary"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                          )}
                        >
                          <span>{tool.name}</span>
                          <span className="text-xs opacity-60">{tool.count}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tier */}
                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Access</h3>
                    <div className="flex flex-wrap gap-2">
                      {(["all", "free", "pro"] as const).map(tier => (
                        <button
                          key={tier}
                          onClick={() => { setSelectedTier(tier); setPage(1) }}
                          className={cn(
                            "rounded-full border px-3 py-1 text-xs font-medium capitalize transition-colors",
                            selectedTier === tier
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          )}
                        >
                          {tier === "all" ? "All" : tier === "free" ? "Free" : "Pro"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Style */}
                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Style</h3>
                    <div className="flex flex-wrap gap-2">
                      {styles.map(style => (
                        <button
                          key={style}
                          onClick={() => { setSelectedStyle(selectedStyle === style ? null : style); setPage(1) }}
                          className={cn(
                            "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                            selectedStyle === style
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          )}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special */}
                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Special</h3>
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

                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="w-full rounded-lg border border-border py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                      Clear all filters
                    </button>
                  )}
                </div>
              </aside>
            </>

            {/* Main content */}
            <div className="min-w-0 flex-1">
              {/* Active filter chips */}
              {hasActiveFilters && (
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  {selectedCategory && (
                    <Badge variant="secondary" className="gap-1 pr-1">
                      {selectedCategory}
                      <button onClick={() => setSelectedCategory(null)} className="ml-0.5 rounded hover:bg-muted"><X className="h-3 w-3" /></button>
                    </Badge>
                  )}
                  {selectedStyle && (
                    <Badge variant="secondary" className="gap-1 pr-1">
                      {selectedStyle}
                      <button onClick={() => setSelectedStyle(null)} className="ml-0.5 rounded hover:bg-muted"><X className="h-3 w-3" /></button>
                    </Badge>
                  )}
                  {selectedTier !== "all" && (
                    <Badge variant="secondary" className="gap-1 pr-1 capitalize">
                      {selectedTier}
                      <button onClick={() => setSelectedTier("all")} className="ml-0.5 rounded hover:bg-muted"><X className="h-3 w-3" /></button>
                    </Badge>
                  )}
                </div>
              )}

              {/* Results count */}
              <p className="mb-5 text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{visibleTemplates.length}</span> of{" "}
                <span className="font-medium text-foreground">{filteredTemplates.length}</span> templates
              </p>

              {filteredTemplates.length > 0 ? (
                <>
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {visibleTemplates.map((template) => (
                      <TemplateCard key={template.id} template={template} />
                    ))}
                  </div>

                  {hasMore && (
                    <div className="mt-10 text-center">
                      <Button variant="outline" size="lg" onClick={() => setPage(p => p + 1)}>
                        Load More Templates
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="rounded-full bg-secondary p-5">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">No templates found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters or search terms</p>
                  <Button variant="outline" className="mt-5" onClick={clearFilters}>Clear Filters</Button>
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
  return (
    <Suspense>
      <TemplatesContent />
    </Suspense>
  )
}
