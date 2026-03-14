import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Download, ArrowRight, Home, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getTemplateById } from "@/lib/templates"

export const metadata: Metadata = {
  title: "Payment Successful — Your Download is Ready",
  description: "Thank you for your purchase. Your template is ready to download.",
  robots: { index: false, follow: false },
}

interface SuccessPageProps {
  searchParams: Promise<{ template_id?: string; session_id?: string }>
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { template_id, session_id } = await searchParams
  const template = template_id ? getTemplateById(template_id) : null

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="mx-auto w-full max-w-md text-center">
          {/* Success icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
            <CheckCircle2 className="h-10 w-10 text-emerald-500" />
          </div>

          <h1 className="text-3xl font-black tracking-tight">Payment Successful!</h1>
          <p className="mt-3 text-muted-foreground">
            Thank you for your purchase.{" "}
            {template ? (
              <>
                <span className="font-semibold text-foreground">{template.title}</span> is ready.
              </>
            ) : (
              "Your template is ready to download."
            )}
          </p>

          {/* Download box */}
          <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            {template && (
              <div className="mb-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Your purchase
                </p>
                <p className="mt-1 font-semibold">{template.title}</p>
                <p className="text-sm text-muted-foreground">
                  Formats: {template.formats.join(", ")}
                </p>
              </div>
            )}

            {/* Real download — from GitHub Releases or external platform */}
            {template ? (
              template.downloadType === "external" ? (
                <a
                  href={template.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-emerald-600 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  Open Template in {template.tool}
                </a>
              ) : (
                <a
                  href={template.downloadUrl}
                  download
                  className="flex w-full items-center justify-center gap-2 rounded-xl btn-gradient px-6 py-3 text-base font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
                >
                  <Download className="h-5 w-5" />
                  Download {template.title.split("—")[0].trim()} (.zip)
                </a>
              )
            ) : (
              <Button className="w-full btn-gradient text-white gap-2 rounded-xl font-semibold border-0" size="lg">
                <Download className="h-5 w-5" />
                Download Your Template
              </Button>
            )}

            <p className="mt-3 text-xs text-muted-foreground">
              A receipt has been sent to your email by Stripe.
            </p>
          </div>

          {/* What&apos;s included */}
          {template && (
            <div className="mt-6 rounded-xl border border-border bg-card p-4 text-left text-sm">
              <p className="font-semibold mb-2">What&apos;s included:</p>
              <ul className="space-y-1 text-muted-foreground">
                {template.formats.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    {f} file
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  Commercial use license
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  Free updates
                </li>
              </ul>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button variant="outline" className="rounded-xl gap-2" asChild>
              <Link href="/">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" className="rounded-xl gap-2" asChild>
              <Link href="/templates">
                Browse More Templates
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
