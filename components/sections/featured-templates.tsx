import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TemplateCard } from "@/components/template-card"
import { templates } from "@/lib/templates"

export function FeaturedTemplates() {
  const featured = templates.slice(0, 6)

  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Templates
            </h2>
            <p className="mt-3 text-muted-foreground">
              Hand-picked templates loved by our community
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/templates">
              View All Templates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  )
}
