"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Are the templates really 100% free?",
    a: "Yes — the majority of Templakit templates are completely free to download with no account required. Simply find a template you like and click Download. Premium templates with advanced features (extra slides, commercial licence, editable source files) are available for a one-time fee of just $1 each.",
  },
  {
    q: "What tools do the templates support?",
    a: "We cover the 5 most popular productivity tools: Microsoft PowerPoint (PPTX), Google Slides, Microsoft Excel (XLSX), Microsoft Word (DOCX), and Google Docs. Every template opens natively in its respective tool — no conversion needed.",
  },
  {
    q: "Can I use these templates for client or commercial projects?",
    a: "Free templates are licensed for personal, educational, and internal business use. If you're delivering work for a paying client or using a template in a commercial product, grab the premium version ($1) which includes a full commercial licence.",
  },
  {
    q: "Do I need to create an account to download?",
    a: "No account is needed for free downloads. For the $1 premium templates, you complete a quick Stripe checkout (card, Apple Pay, Google Pay) or pay with Bitcoin — and your file is yours immediately.",
  },
  {
    q: "What file formats are included?",
    a: "It depends on the tool: PowerPoint templates come as .PPTX + PDF; Excel templates as .XLSX (Google Sheets compatible); Word templates as .DOCX + PDF; Google Slides and Google Docs as shareable links you can make a copy of.",
  },
  {
    q: "Are the templates editable?",
    a: "Absolutely. Every template is fully editable — change colours, fonts, images, text, and layout to match your brand. No locked layers, no watermarks. What you see in the preview is exactly what you get.",
  },
  {
    q: "How do I request a refund?",
    a: "We offer a no-questions-asked refund within 7 days of purchase. Just email nitheesbalaji@gmail.com with your order ID and we'll process a full refund via the original payment method.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <HelpCircle className="h-3.5 w-3.5" /> FAQ
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know about free templates on Templakit.
          </p>
        </div>

        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:border-primary/30"
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold leading-snug sm:text-base">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                    open === i && "rotate-180 text-primary"
                  )}
                />
              </button>
              {open === i && (
                <div className="border-t border-border/40 px-6 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </dl>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <a href="mailto:nitheesbalaji@gmail.com" className="font-semibold text-primary hover:underline">
            Email us — we reply within 24 hours.
          </a>
        </p>
      </div>
    </section>
  )
}
