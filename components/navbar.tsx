"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import {
  Menu, X, Moon, Sun, Sparkles, ChevronDown,
  Presentation, Monitor, Palette, Table2,
  FileText, BookOpen, FileEdit, Figma,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const toolNav = [
  { name: "PowerPoint",    slug: "PowerPoint",    icon: Presentation, color: "text-orange-500", desc: "Slides & presentations" },
  { name: "Google Slides", slug: "Google Slides", icon: Monitor,      color: "text-yellow-500", desc: "Shareable presentations" },
  { name: "Canva",         slug: "Canva",         icon: Palette,      color: "text-violet-500", desc: "Designs & social media" },
  { name: "Excel",         slug: "Excel",         icon: Table2,       color: "text-green-500",  desc: "Spreadsheets & models" },
  { name: "Figma",         slug: "Figma",         icon: Figma,        color: "text-pink-500",   desc: "UI kits & design files" },
  { name: "Word",          slug: "Word",          icon: FileText,     color: "text-blue-500",   desc: "Documents & resumes" },
  { name: "Notion",        slug: "Notion",        icon: BookOpen,     color: "text-slate-400",  desc: "Pages & databases" },
  { name: "Google Docs",   slug: "Google Docs",   icon: FileEdit,     color: "text-cyan-500",   desc: "Docs & proposals" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => { setIsOpen(false); setMegaOpen(false) }, [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-background/60 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-violet-500 shadow-lg shadow-primary/20 transition-transform duration-200 group-hover:scale-110">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">Templakit</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {/* Templates mega-menu trigger */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive("/templates")
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              Templates
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", megaOpen && "rotate-180")} />
            </button>

            {/* Mega Menu */}
            <div
              className={cn(
                "absolute left-1/2 top-full mt-2 w-[560px] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/20 transition-all duration-200",
                megaOpen ? "animate-slide-down opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              )}
            >
              <div className="p-4">
                <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Browse by Tool
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {toolNav.map((tool) => {
                    const Icon = tool.icon
                    return (
                      <Link
                        key={tool.slug}
                        href={`/templates?category=${encodeURIComponent(tool.slug)}`}
                        className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary group-hover:border-primary/30 group-hover:bg-primary/5">
                          <Icon className={cn("h-4 w-4", tool.color)} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{tool.name}</p>
                          <p className="text-xs text-muted-foreground">{tool.desc}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
                <div className="mt-3 border-t border-border pt-3 px-2">
                  <Link
                    href="/templates"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Browse all 1,200+ templates →
                  </Link>
                </div>
              </div>
            </div>
          </div>

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

        {/* Mobile Controls */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary"
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

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "max-h-[90vh]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 border-t border-border/40 bg-background/98 p-4 backdrop-blur-xl">
          {/* Tools grid */}
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
