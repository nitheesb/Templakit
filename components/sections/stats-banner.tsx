const stats = [
  { value: "500+",  label: "Free Templates",   color: "text-emerald-500" },
  { value: "50K+",  label: "Total Downloads",   color: "text-violet-500"  },
  { value: "8",     label: "Tools Supported",   color: "text-blue-500"    },
  { value: "4.9★",  label: "Average Rating",    color: "text-amber-500"   },
]

export function StatsBanner() {
  return (
    <section className="border-y border-border/40">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-0 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-5 text-center ${i < stats.length - 1 ? "lg:border-r lg:border-border/50" : ""}`}
            >
              <span className={`text-3xl font-black sm:text-4xl ${stat.color}`}>
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
