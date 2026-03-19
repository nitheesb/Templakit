import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "GrowthLab",
    avatar: "SC",
    avatarColor: "from-pink-500 to-rose-500",
    quote: "Templakit completely transformed how we create marketing materials. The PowerPoint and Canva templates are stunning — we save 10+ hours every week.",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    role: "Startup Founder",
    company: "Nexus AI",
    avatar: "MR",
    avatarColor: "from-blue-500 to-indigo-500",
    quote: "We used a Templakit pitch deck to raise our seed round. The investor-grade design quality helped us stand out immediately. Worth every penny.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Freelance Designer",
    company: "Studio EW",
    avatar: "EW",
    avatarColor: "from-violet-500 to-purple-500",
    quote: "As a designer I'm extremely picky about templates. Templakit's Figma kits are genuinely world-class. My clients always ask who designed their decks.",
    rating: 5,
  },
  {
    name: "James Park",
    role: "Product Manager",
    company: "Notion",
    avatar: "JP",
    avatarColor: "from-slate-500 to-zinc-600",
    quote: "The resume and Google Docs templates helped me land my dream PM role. Clear, professional, and ATS-friendly. Highly recommend for job seekers.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Content Creator",
    company: "1.2M followers",
    avatar: "PS",
    avatarColor: "from-amber-500 to-orange-500",
    quote: "I use Templakit for all my social media content — Instagram, YouTube thumbnails, Pinterest pins. My engagement literally tripled since I started.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Agency Owner",
    company: "Kreative Co.",
    avatar: "DK",
    avatarColor: "from-emerald-500 to-teal-500",
    quote: "We manage 20+ clients and Templakit saves us thousands of hours monthly. The Excel financial models alone are worth it ten times over. Best $1 per template anywhere.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-border/40 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by 10,000+ Creators
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real results from real people across every industry
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Decorative quote */}
              <Quote className="absolute right-5 top-5 h-10 w-10 text-primary/8" />

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-5">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white shadow-md ${t.avatarColor}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}
                    {t.company && <span className="text-muted-foreground/60"> · {t.company}</span>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
