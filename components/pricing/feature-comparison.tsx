import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    name: "Monthly downloads",
    free: "5",
    pro: "Unlimited",
    team: "Unlimited",
  },
  {
    name: "Access to free templates",
    free: true,
    pro: true,
    team: true,
  },
  {
    name: "Access to Pro templates",
    free: false,
    pro: true,
    team: true,
  },
  {
    name: "File formats",
    free: "Basic (PNG, PDF)",
    pro: "All formats",
    team: "All formats",
  },
  {
    name: "Remove watermarks",
    free: false,
    pro: true,
    team: true,
  },
  {
    name: "Commercial license",
    free: false,
    pro: true,
    team: true,
  },
  {
    name: "Priority support",
    free: false,
    pro: true,
    team: true,
  },
  {
    name: "Early access to new templates",
    free: false,
    pro: true,
    team: true,
  },
  {
    name: "Team members",
    free: "1",
    pro: "1",
    team: "Up to 10",
  },
  {
    name: "Team collaboration",
    free: false,
    pro: false,
    team: true,
  },
  {
    name: "Shared library",
    free: false,
    pro: false,
    team: true,
  },
  {
    name: "Brand kit uploads",
    free: false,
    pro: false,
    team: true,
  },
  {
    name: "Custom templates",
    free: false,
    pro: false,
    team: true,
  },
  {
    name: "Dedicated account manager",
    free: false,
    pro: false,
    team: true,
  },
]

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-primary" />
    ) : (
      <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
    )
  }
  return <span className="text-sm">{value}</span>
}

export function FeatureComparison() {
  return (
    <section className="border-t border-border/40 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Compare Plans</h2>
          <p className="mt-3 text-muted-foreground">
            See what's included in each plan
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 text-left font-medium">Feature</th>
                <th className="pb-4 text-center font-medium">Free</th>
                <th className="pb-4 text-center font-medium">
                  <span className="inline-flex items-center gap-2">
                    Pro
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                      Popular
                    </span>
                  </span>
                </th>
                <th className="pb-4 text-center font-medium">Team</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={cn(
                    "border-b border-border/50",
                    index % 2 === 0 ? "bg-transparent" : "bg-secondary/20"
                  )}
                >
                  <td className="py-4 text-sm">{feature.name}</td>
                  <td className="py-4 text-center">
                    <FeatureValue value={feature.free} />
                  </td>
                  <td className="py-4 text-center">
                    <FeatureValue value={feature.pro} />
                  </td>
                  <td className="py-4 text-center">
                    <FeatureValue value={feature.team} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
