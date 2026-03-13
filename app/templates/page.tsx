"use client"

import { useState, useMemo } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TemplateCard } from "@/components/template-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { templates, categories, styles } from "@/lib/templates"
import { cn } from "@/lib/utils"

export default function TemplatesPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [selectedTier, setSelectedTier] = useState<"all" | "free" | "pro">("all")
  const [showFilters, setShowFilters] = useState(false)

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      if (selectedCategory && template.category !== selectedCategory) return false
      if (selectedStyle && template.style !== selectedStyle) return false
      if (selectedTier === "free" && template.isPro) return false
      if (selectedTier === "pro" && !template.isPro) return false
      if (search) {
        const searchLower = search.toLowerCase()
        return (
          template.title.toLowerCase().includes(searchLower) ||
          template.description.toLowerCase().includes(searchLower) ||
          template.tags.some((tag) => tag.includes(searchLower))
        )
      }
      return true
    })
  }, [search, selectedCategory, selectedStyle, selectedTier])

  const clearFilters = () => {
    setSelectedCategory(null)
    setSelectedStyle(null)
    setSelectedTier("all")
    setSearch("")
  }

  const hasActiveFilters = selectedCategory || selectedStyle || selectedTier !== "all" || search

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border/40 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Find your Template
            </h1>
            <p className="mt-2 text-muted-foreground">
              Discover professionally designed templates for every need
            </p>

            {/* Search Bar */}
            <div className="mt-6 flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search templates..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                className="gap-2 lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside
              className={cn(
                "fixed inset-y-0 left-0 z-50 w-72 transform border-r border-border bg-background p-6 transition-transform duration-300 lg:static lg:z-0 lg:block lg:w-64 lg:translate-x-0 lg:border-r-0 lg:bg-transparent lg:p-0",
                showFilters ? "translate-x-0" : "-translate-x-full"
              )}
            >
              {/* Mobile close button */}
              <div className="mb-6 flex items-center justify-between lg:hidden">
                <span className="text-lg font-semibold">Filters</span>
                <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold">Category</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(
                          selectedCategory === cat.name ? null : cat.name
                        )}
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                          selectedCategory === cat.name
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        )}
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs">{cat.count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tier Filter */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold">Access</h3>
                  <div className="flex flex-wrap gap-2">
                    {(["all", "free", "pro"] as const).map((tier) => (
                      <button
                        key={tier}
                        onClick={() => setSelectedTier(tier)}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                          selectedTier === tier
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        )}
                      >
                        {tier === "all" ? "All" : tier === "free" ? "Free" : "Pro"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style Filter */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold">Style</h3>
                  <div className="flex flex-wrap gap-2">
                    {styles.map((style) => (
                      <button
                        key={style}
                        onClick={() => setSelectedStyle(
                          selectedStyle === style ? null : style
                        )}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                          selectedStyle === style
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        )}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
                    Clear Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Mobile overlay */}
            {showFilters && (
              <div
                className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                onClick={() => setShowFilters(false)}
              />
            )}

            {/* Templates Grid */}
            <div className="flex-1">
              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {selectedCategory && (
                    <Badge variant="secondary" className="gap-1">
                      {selectedCategory}
                      <button onClick={() => setSelectedCategory(null)}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {selectedStyle && (
                    <Badge variant="secondary" className="gap-1">
                      {selectedStyle}
                      <button onClick={() => setSelectedStyle(null)}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {selectedTier !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      {selectedTier === "free" ? "Free" : "Pro"}
                      <button onClick={() => setSelectedTier("all")}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                </div>
              )}

              {/* Results count */}
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">
                  Showing {filteredTemplates.length} templates
                </span>
              </div>

              {/* Grid */}
              {filteredTemplates.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredTemplates.map((template) => (
                    <TemplateCard key={template.id} template={template} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="rounded-full bg-secondary p-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">No templates found</h3>
                  <p className="mt-2 text-muted-foreground">
                    Try adjusting your filters or search terms
                  </p>
                  <Button variant="outline" className="mt-4" onClick={clearFilters}>
                    Clear Filters
                  </Button>
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
