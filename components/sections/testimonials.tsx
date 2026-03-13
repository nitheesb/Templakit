import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    avatar: "SC",
    avatarColor: "from-pink-500 to-rose-500",
    quote: "Templakit has completely transformed how we create marketing materials. The templates are beautiful and save us hours every week.",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    role: "Startup Founder",
    avatar: "MR",
    avatarColor: "from-blue-500 to-indigo-500",
    quote: "We used a Templakit pitch deck to raise our seed round. The design quality helped us stand out to investors immediately.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Freelance Designer",
    avatar: "EW",
    avatarColor: "from-violet-500 to-purple-500",
    quote: "As a designer, I'm picky about templates. Templakit delivers consistently high-quality designs that I can customize for my clients.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by Creators
          </h2>
          <p className="mt-3 text-muted-foreground">
            See what our community has to say
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-6"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground">
                {`"${testimonial.quote}"`}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white ${testimonial.avatarColor}`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
