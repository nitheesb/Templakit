import Link from "next/link"
import { Sparkles } from "lucide-react"

const toolLinks = [
  { label: "Free PowerPoint Templates",    href: "/templates?category=PowerPoint" },
  { label: "Free Google Slides Templates", href: "/templates?category=Google+Slides" },
  { label: "Free Canva Templates",         href: "/templates?category=Canva" },
  { label: "Free Excel Templates",         href: "/templates?category=Excel" },
  { label: "Free Figma Templates",         href: "/templates?category=Figma" },
  { label: "Free Word Templates",          href: "/templates?category=Word" },
  { label: "Free Notion Templates",        href: "/templates?category=Notion" },
  { label: "Free Google Docs Templates",   href: "/templates?category=Google+Docs" },
]

const popularLinks = [
  { label: "Free Pitch Deck Templates",         href: "/templates?category=PowerPoint" },
  { label: "Free Resume Templates",              href: "/templates?category=Word" },
  { label: "Free Instagram Templates Canva",     href: "/templates?category=Canva" },
  { label: "Free Financial Model Excel",         href: "/templates?category=Excel" },
  { label: "Free UI Kit Figma",                  href: "/templates?category=Figma" },
  { label: "Free YouTube Thumbnail Templates",   href: "/templates?category=Canva" },
  { label: "Free Startup Templates",             href: "/templates" },
  { label: "Free Business Plan Templates",       href: "/templates" },
]

const companyLinks = [
  { label: "All Templates",  href: "/templates" },
  { label: "Pricing",        href: "/pricing" },
  { label: "Blog",           href: "#" },
  { label: "About",          href: "#" },
  { label: "Contact",        href: "mailto:nitheesbalaji@gmail.com" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use",   href: "#" },
  { label: "License",        href: "#" },
  { label: "Refund Policy",  href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/10">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-violet-500 shadow-md">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight">Templakit</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              500+ free professionally designed templates for every tool you use. Premium templates just $1.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Contact:{" "}
              <a href="mailto:nitheesbalaji@gmail.com" className="text-primary hover:underline">
                nitheesbalaji@gmail.com
              </a>
            </p>
          </div>

          {/* Templates by tool — SEO keyword links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Templates by Tool</h3>
            <ul className="space-y-2.5">
              {toolLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular searches — SEO keyword links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Popular Downloads</h3>
            <ul className="space-y-2.5">
              {popularLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Legal</h3>
            <ul className="space-y-2.5">
              {legalLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Templakit. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Free PowerPoint templates · Free Canva templates · Free Figma templates · Free Google Slides templates
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://twitter.com/templakit" aria-label="Templakit on Twitter" className="text-muted-foreground transition-colors hover:text-foreground">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
