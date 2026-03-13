import Link from "next/link"
import { 
  Presentation, 
  FileText, 
  TrendingUp, 
  Share2, 
  Mail, 
  Briefcase,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { 
    name: "Presentations", 
    icon: Presentation, 
    count: 245,
    color: "from-blue-500 to-indigo-500",
    description: "Stunning slides for any occasion"
  },
  { 
    name: "Resumes", 
    icon: FileText, 
    count: 189,
    color: "from-emerald-500 to-teal-500",
    description: "Stand out from the crowd"
  },
  { 
    name: "Pitch Decks", 
    icon: TrendingUp, 
    count: 156,
    color: "from-violet-500 to-purple-500",
    description: "Win over investors"
  },
  { 
    name: "Social Media", 
    icon: Share2, 
    count: 312,
    color: "from-pink-500 to-rose-500",
    description: "Engage your audience"
  },
  { 
    name: "Newsletters", 
    icon: Mail, 
    count: 98,
    color: "from-amber-500 to-orange-500",
    description: "Beautiful email templates"
  },
  { 
    name: "Business Plans", 
    icon: Briefcase, 
    count: 127,
    color: "from-slate-500 to-zinc-500",
    description: "Professional documentation"
  },
]

export function CategoriesSection() {
  return (
    <section className="border-t border-border/40 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-3 text-muted-foreground">
            Find the perfect template for your specific needs
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.name}
                href={`/templates?category=${encodeURIComponent(category.name)}`}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br",
                      category.color
                    )}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100" />
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  {category.count} templates
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
