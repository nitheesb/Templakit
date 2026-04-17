import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, Mail, Twitter, Heart, Zap, Shield, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Templakit — Free Professional Templates",
  description:
    "Learn about Templakit — why we built it, our mission to make great design accessible to everyone, and what makes us different.",
  alternates: { canonical: "https://templakit.vercel.app/about" },
}

const values = [
  {
    icon: Heart,
    title: "Free First",
    description:
      "Over 400 templates on Templakit — 180+ completely free, the rest just $1 each. No account, no watermarks, no tricks. We believe great design should be accessible to everyone, not just those who can afford expensive subscriptions.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Instant & Friction-Free",
    description:
      "No sign-up required for free downloads. No forced newsletter subscriptions. Click, download, create. We respect your time.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Fair Pricing",
    description:
      "Premium templates cost exactly $1. One-time. Yours forever. No subscription treadmill, no feature gating, no bait-and-switch.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Built for Real Work",
    description:
      "Every template is designed for practical, professional use — pitch decks that close deals, resumes that get interviews, dashboards that tell stories.",
    color: "from-blue-500 to-indigo-500",
  },
]

const stats = [
  { value: "405",  label: "Total Templates" },
  { value: "180+", label: "Free Templates" },
  { value: "8",    label: "Tools Covered" },
  { value: "$1",   label: "Max Price" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/40">
          <div className="dot-grid absolute inset-0 -z-10 opacity-40" />
          <div className="mesh-gradient absolute inset-0 -z-10" />
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet-500 shadow-xl shadow-primary/20">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Design should be{" "}
              <span className="gradient-text">free for everyone</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Templakit was built on a simple belief: professional-quality templates shouldn&apos;t cost a subscription.
              They should be free — or at worst, one dollar.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Our story</h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Templakit started out of frustration. Every time we needed a professional presentation, resume,
              or spreadsheet template, we&apos;d end up on sites that required sign-ups, had watermarks on the
              free tier, or charged monthly subscriptions just to download a single file.
            </p>
            <p>
              We built Templakit to be the antidote. 400+ templates (180+ completely free), zero sign-up friction, zero watermarks,
              and a simple pricing model: if a template has advanced premium features, it costs exactly $1.
              Not $9/month. Not $19/month. One dollar, one time.
            </p>
            <p>
              We cover every major productivity tool — PowerPoint, Google Slides, Excel,
              Word, and Google Docs — so no matter what you&apos;re building, we have a template
              that works in the tool you already know.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-border/40 bg-secondary/10">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="text-center text-2xl font-black tracking-tight sm:text-3xl">What we stand for</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.color} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-border/40">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl font-black text-primary sm:text-5xl">{s.value}</div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-border/40 bg-secondary/10">
          <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Get in touch</h2>
            <p className="mt-4 text-muted-foreground">
              Questions, feedback, template requests, or press enquiries? We&apos;d love to hear from you.
              We reply to every email within 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="btn-gradient gap-2 rounded-xl text-white border-0 shadow-lg shadow-primary/20">
                <a href="mailto:nitheesbalaji@gmail.com">
                  <Mail className="h-4 w-4" />
                  nitheesbalaji@gmail.com
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl">
                <a href="https://twitter.com/templakit" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  @templakit
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Browse CTA */}
        <section className="border-t border-border/40">
          <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8">
            <p className="text-muted-foreground">Ready to find your next favourite template?</p>
            <Button asChild size="lg" className="mt-4 btn-gradient gap-2 rounded-xl text-white border-0">
              <Link href="/templates">Browse 400+ Templates →</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
