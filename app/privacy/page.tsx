import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy — Templakit",
  description: "Templakit privacy policy. Learn how we collect, use, and protect your data.",
  alternates: { canonical: "https://templakit.vercel.app/privacy" },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = "March 19, 2026"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          {/* Header */}
          <div className="mb-10 border-b border-border/40 pb-8">
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Privacy Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          </div>

          <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-muted-foreground [&_h2]:text-foreground [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-3 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline">

            <p>
              This Privacy Policy describes how Templakit (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
              collects, uses, and shares information about you when you use our website at{" "}
              <a href="https://templakit.vercel.app">templakit.vercel.app</a> (the &ldquo;Service&rdquo;).
            </p>

            <h2>1. Information we collect</h2>
            <p>
              <strong>Information you provide to us:</strong> When you purchase a premium template ($1),
              your payment is processed by <strong>Stripe</strong>. We receive a confirmation of your payment
              along with your email address (provided to Stripe), but we do not store your credit card details.
              If you contact us by email, we retain that correspondence.
            </p>
            <p>
              <strong>Information collected automatically:</strong> We use <strong>Vercel Analytics</strong>{" "}
              to collect anonymised, aggregated usage data (page views, device type, country). No personally
              identifiable information is collected in this process. We do not use cookies for tracking or
              advertising. We do not use Google Analytics or any third-party advertising networks.
            </p>

            <h2>2. How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Process and fulfil your template purchase</li>
              <li>Send you a purchase receipt (via Stripe)</li>
              <li>Respond to your support or enquiry emails</li>
              <li>Understand how our site is used so we can improve it</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do <strong>not</strong> sell your personal data. We do not use your data for advertising.</p>

            <h2>3. Third-party services</h2>
            <p>We use the following third-party services:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <strong>Stripe</strong> — payment processing. View their privacy policy at{" "}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
                  stripe.com/privacy
                </a>
              </li>
              <li>
                <strong>Vercel</strong> — hosting and analytics. View their privacy policy at{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                  vercel.com/legal/privacy-policy
                </a>
              </li>
              <li>
                <strong>GitHub</strong> — template file hosting (GitHub Releases). View their privacy policy at{" "}
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">
                  github.com/privacy
                </a>
              </li>
            </ul>

            <h2>4. Cookies</h2>
            <p>
              Templakit does not use tracking cookies or advertising cookies. We store a minimal session
              preference (dark/light theme) in your browser&apos;s local storage. This data never leaves your device.
            </p>

            <h2>5. Data retention</h2>
            <p>
              We retain purchase-related data for as long as required by applicable tax and accounting laws
              (typically 7 years). Email correspondence is retained until you request deletion.
            </p>

            <h2>6. Your rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or delete your personal
              data. To exercise these rights, please email us at{" "}
              <a href="mailto:nitheesbalaji@gmail.com">nitheesbalaji@gmail.com</a>. We will respond within
              30 days.
            </p>

            <h2>7. Children&apos;s privacy</h2>
            <p>
              Our Service is not directed to children under 13 years of age. We do not knowingly collect
              personal information from children under 13.
            </p>

            <h2>8. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this policy
              periodically.
            </p>

            <h2>9. Contact us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:nitheesbalaji@gmail.com">nitheesbalaji@gmail.com</a>.
            </p>
          </div>

          <div className="mt-12 flex gap-4 border-t border-border/40 pt-8 text-sm">
            <Link href="/terms" className="text-primary hover:underline">Terms of Use</Link>
            <span className="text-border">·</span>
            <Link href="/" className="text-muted-foreground hover:text-foreground">← Back to Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
