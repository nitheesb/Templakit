const stats = [
  { value: "1,200+", label: "Templates", emoji: "📦" },
  { value: "50K+",   label: "Downloads",  emoji: "⬇️" },
  { value: "8",      label: "Tools Covered", emoji: "🛠️" },
  { value: "4.9★",   label: "Avg Rating",  emoji: "⭐" },
]

export function StatsBanner() {
  return (
    <section className="border-y border-border/40 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-4 text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-border/50" : ""
              }`}
            >
              <div className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
