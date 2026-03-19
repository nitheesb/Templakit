import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Use, License & Refund Policy — Templakit",
  description:
    "Templakit terms of use, template license, and refund policy. Free templates for personal use; $1 premium templates include a commercial license.",
  alternates: { canonical: "https://templakit.vercel.app/terms" },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = "March 19, 2026"

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-bold text-foreground mt-10 mb-3">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          {/* Header */}
          <div className="mb-10 border-b border-border/40 pb-8">
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              Terms of Use, License &amp; Refund Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

            {/* Quick nav */}
            <nav className="mt-6 flex flex-wrap gap-3 text-sm">
              {[
                ["#terms", "Terms of Use"],
                ["#license", "License"],
                ["#refund", "Refund Policy"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="text-primary hover:underline">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="text-muted-foreground [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline">

            {/* Terms */}
            <Section id="terms" title="Terms of Use">
              <p>
                By accessing or using Templakit (&ldquo;Service&rdquo;) at{" "}
                <a href="https://templakit.vercel.app">templakit.vercel.app</a>, you agree to be bound by
                these Terms. If you do not agree, please do not use the Service.
              </p>

              <p>
                <strong>Acceptable use.</strong> You may use Templakit to browse, download, and use templates
                for personal or commercial purposes subject to the license terms below. You may not:
              </p>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Redistribute, resell, or sublicense any templates as standalone template products</li>
                <li>Claim ownership of any template or pass it off as your own original design</li>
                <li>Use the templates in any way that violates applicable laws or regulations</li>
                <li>Attempt to reverse-engineer, scrape, or systematically download the entire template library</li>
              </ul>

              <p>
                <strong>Intellectual property.</strong> All templates on Templakit are owned by Templakit or
                its licensors. Nothing in these Terms transfers ownership of any template to you; you receive
                only the license described below.
              </p>

              <p>
                <strong>Disclaimers.</strong> The Service is provided &ldquo;as is&rdquo; without warranties of any kind.
                We do not guarantee that the Service will be uninterrupted, error-free, or that templates
                will meet your specific requirements.
              </p>

              <p>
                <strong>Limitation of liability.</strong> To the fullest extent permitted by law, Templakit
                will not be liable for any indirect, incidental, or consequential damages arising from your
                use of the Service.
              </p>

              <p>
                <strong>Governing law.</strong> These Terms are governed by the laws of Thailand. Any disputes
                shall be resolved in the courts of Bangkok, Thailand.
              </p>

              <p>
                <strong>Changes.</strong> We may update these Terms at any time. Continued use of the Service
                after changes constitutes acceptance of the revised Terms.
              </p>
            </Section>

            {/* License */}
            <Section id="license" title="Template License">
              <p>
                The license you receive depends on whether the template is free or premium:
              </p>

              <div className="my-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-3 inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
                    FREE Templates
                  </div>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Personal use",
                      "Educational use",
                      "Internal business use",
                      "No attribution required",
                      "No redistribution as a template",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 text-emerald-500">✓</span>
                        {f}
                      </li>
                    ))}
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">✗</span>
                      Client/commercial deliverables
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                  <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    PREMIUM Templates ($1)
                  </div>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Personal use",
                      "Educational use",
                      "Internal business use",
                      "Client & commercial deliverables",
                      "No attribution required",
                      "Unlimited end-use projects",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 text-primary">✓</span>
                        {f}
                      </li>
                    ))}
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">✗</span>
                      Redistribution as a template product
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                In both cases, you may <strong>not</strong> package or sell any template (modified or
                unmodified) as a standalone template, template pack, or theme product.
              </p>
            </Section>

            {/* Refund */}
            <Section id="refund" title="Refund Policy">
              <p>
                We want you to be completely happy with your purchase. If you&apos;re not satisfied for any
                reason, here&apos;s our policy:
              </p>

              <p>
                <strong>30-day money-back guarantee.</strong> If you purchase a premium template ($1) and
                are not satisfied, email us at{" "}
                <a href="mailto:nitheesbalaji@gmail.com">nitheesbalaji@gmail.com</a> within{" "}
                <strong>30 days</strong> of purchase with your Stripe receipt / order ID. We will issue a
                full refund via the original payment method, no questions asked.
              </p>

              <p>
                <strong>How to request a refund.</strong> Email us at{" "}
                <a href="mailto:nitheesbalaji@gmail.com">nitheesbalaji@gmail.com</a> with:
              </p>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Your Stripe receipt / order ID (from your purchase confirmation email)</li>
                <li>The name of the template purchased</li>
                <li>Optional: reason for the refund (helps us improve)</li>
              </ul>

              <p>
                We process refunds within <strong>2–3 business days</strong>. Stripe typically takes
                5–10 business days to return funds to your bank or card.
              </p>

              <p>
                <strong>Exclusions.</strong> Refunds are not available for free templates (there is nothing
                to refund). Bitcoin payments are generally non-reversible; please contact us before paying
                with Bitcoin if you have any doubts.
              </p>
            </Section>

            {/* Contact */}
            <section className="mt-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
              <p>
                For any questions about these Terms, the license, or a refund, contact us at:{" "}
                <a href="mailto:nitheesbalaji@gmail.com">nitheesbalaji@gmail.com</a>
              </p>
            </section>
          </div>

          <div className="mt-12 flex gap-4 border-t border-border/40 pt-8 text-sm">
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
            <span className="text-border">·</span>
            <Link href="/" className="text-muted-foreground hover:text-foreground">← Back to Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
