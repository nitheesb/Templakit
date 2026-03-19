import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  { name: "Browse all templates",            free: true,             premium: true },
  { name: "Download instantly",              free: true,             premium: true },
  { name: "Account required",               free: false,            premium: false },
  { name: "Template quality",               free: "Standard",       premium: "Advanced" },
  { name: "Slide / page count",             free: "Standard set",   premium: "Extended set" },
  { name: "File formats",                   free: "Core formats",   premium: "All formats" },
  { name: "Watermarks",                     free: false,            premium: false },
  { name: "Personal use license",           free: true,             premium: true },
  { name: "Commercial use license",         free: false,            premium: true },
  { name: "Client project use",             free: false,            premium: true },
  { name: "Free lifetime updates",          free: false,            premium: true },
  { name: "30-day money-back guarantee",    free: "N/A",            premium: true },
]

function Val({ value }: { value: boolean | string }) {
  if (value === "N/A") return <span className="text-xs text-muted-foreground/50">—</span>
  if (typeof value === "boolean") {
    return value
      ? <Check className="mx-auto h-5 w-5 text-primary" />
      : <X className="mx-auto h-5 w-5 text-muted-foreground/40" />
  }
  return <span className="text-sm">{value}</span>
}

export function FeatureComparison() {
  return (
    <section className="border-t border-border/40 bg-secondary/20">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Free vs Premium — at a glance</h2>
          <p className="mt-3 text-muted-foreground">
            Every premium template is just <strong className="text-foreground">$1 one-time</strong>. No subscription.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/40">
                <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">Free</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                  Premium <span className="ml-1 text-xs font-normal text-muted-foreground">($1)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={feature.name}
                  className={cn(
                    "border-b border-border/50 last:border-0",
                    i % 2 === 0 ? "bg-transparent" : "bg-secondary/10"
                  )}
                >
                  <td className="px-6 py-3.5 text-sm text-foreground">{feature.name}</td>
                  <td className="px-6 py-3.5 text-center"><Val value={feature.free} /></td>
                  <td className="px-6 py-3.5 text-center"><Val value={feature.premium} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
