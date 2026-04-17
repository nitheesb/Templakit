const stats = [
  { value: "405",    label: "Total Templates",          sub: "Across 8 tools",             color: "text-emerald-500" },
  { value: "180+",   label: "Free Templates",            sub: "No sign-up required",        color: "text-violet-500"  },
  { value: "5",      label: "Tools Covered",             sub: "PowerPoint to Google Docs",  color: "text-blue-500"    },
  { value: "4.9★",   label: "Average User Rating",       sub: "From 2,400+ reviews",        color: "text-amber-500"   },
]

export function StatsBanner() {
  return (
    <section className="border-y border-border/40 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-0 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-6 text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-border/50" : ""
              }`}
            >
              <span className={`text-3xl font-black sm:text-4xl ${stat.color}`}>
                {stat.value}
              </span>
              <span className="mt-1 text-sm font-semibold text-foreground">
                {stat.label}
              </span>
              <span className="mt-0.5 text-xs text-muted-foreground">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
