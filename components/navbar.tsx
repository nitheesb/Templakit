"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useTheme } from "next-themes"
import {
  Menu, X, Moon, Sun, Sparkles,
  Presentation, Monitor, Palette, Table2,
  FileText, BookOpen, FileEdit, Figma,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Suspense } from "react"

const toolNav = [
  { name: "PowerPoint",    slug: "PowerPoint",    icon: Presentation, color: "text-orange-500", activeColor: "bg-orange-500/10 text-orange-600 border-orange-500/30" },
  { name: "Google Slides", slug: "Google Slides", icon: Monitor,      color: "text-yellow-500", activeColor: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30" },
  { name: "Canva",         slug: "Canva",         icon: Palette,      color: "text-violet-500", activeColor: "bg-violet-500/10 text-violet-600 border-violet-500/30" },
  { name: "Excel",         slug: "Excel",         icon: Table2,       color: "text-green-600",  activeColor: "bg-green-500/10 text-green-700 border-green-500/30" },
  { name: "Figma",         slug: "Figma",         icon: Figma,        color: "text-pink-500",   activeColor: "bg-pink-500/10 text-pink-600 border-pink-500/30" },
  { name: "Word",          slug: "Word",          icon: FileText,     color: "text-blue-500",   activeColor: "bg-blue-500/10 text-blue-600 border-blue-500/30" },
  { name: "Notion",        slug: "Notion",        icon: BookOpen,     color: "text-slate-400",  activeColor: "bg-slate-500/10 text-slate-500 border-slate-500/30" },
  { name: "Google Docs",   slug: "Google Docs",   icon: FileEdit,     color: "text-cyan-500",   activeColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30" },
]

function ToolStrip() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const activeCategory = pathname === "/templates" ? searchParams.get("category") : null

  return (
    <div className="hidden border-b border-border/40 bg-secondary/10 md:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center gap-0.5 overflow-x-auto px-4 sm:px-6 lg:px-8 scrollbar-none">
        <Link
          href="/templates"
          className={cn(
            "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-150 whitespace-nowrap",
            !activeCategory && pathname === "/templates"
              ? "border-primary/30 bg-primary/10 text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}
        >
          All Templates
        </Link>

        <div className="mx-2 h-4 w-px bg-border/60 shrink-0" />

        {toolNav.map((tool) => {
          const Icon = tool.icon
          const isActive = activeCategory === tool.slug
          return (
            <Link
              key={tool.slug}
              href={`/templates?category=${encodeURIComponent(tool.slug)}`}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-150 whitespace-nowrap",
                isActive
                  ? tool.activeColor
                  : "border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon className={cn("h-3 w-3 shrink-0", isActive ? "" : tool.color)} />
              {tool.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-xl"
        : "border-b border-transparent bg-background/60 backdrop-blur-md"
    )}>
      {/* ── Main bar ───────────────────────────────────────── */}
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-violet-500 shadow-lg shadow-primary/20 transition-transform duration-200 group-hover:scale-110">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">Templakit</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/templates"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive("/templates")
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            Templates
          </Link>
          <Link
            href="/pricing"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive("/pricing")
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Blog
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-secondary"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
          <Button variant="ghost" size="sm" className="text-sm">Sign In</Button>
          <Button size="sm" className="shadow-lg shadow-primary/20">Get Started</Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Tool strip (desktop) — always visible ───────────── */}
      <Suspense>
        <ToolStrip />
      </Suspense>

      {/* ── Mobile Menu ────────────────────────────────────── */}
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
        isOpen ? "max-h-[90vh]" : "max-h-0"
      )}>
        <nav className="flex flex-col gap-1 border-t border-border/40 bg-background/98 p-4 backdrop-blur-xl">
          <p className="px-2 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Templates by Tool
          </p>
          <div className="grid grid-cols-2 gap-1">
            {toolNav.map((tool) => {
              const Icon = tool.icon
              return (
                <Link
                  key={tool.slug}
                  href={`/templates?category=${encodeURIComponent(tool.slug)}`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary"
                >
                  <Icon className={cn("h-4 w-4 shrink-0", tool.color)} />
                  <span className="font-medium">{tool.name}</span>
                </Link>
              )
            })}
          </div>

          <div className="my-2 border-t border-border/50" />

          <Link href="/templates" className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary">
            All Templates
          </Link>
          <Link href="/pricing" className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
            Pricing
          </Link>
          <Link href="#" className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
            Blog
          </Link>

          <div className="mt-3 flex flex-col gap-2 border-t border-border/50 pt-3">
            <Button variant="outline" className="w-full">Sign In</Button>
            <Button className="w-full shadow-lg shadow-primary/20">Get Started Free</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
