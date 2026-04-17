"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What's the difference between free and premium templates?",
    answer:
      "Free templates are fully functional, fully editable, and yours to download instantly — no account required. Premium templates ($1 each) include more advanced slide layouts, extra design variants, all source file formats, and a full commercial use license that covers client and commercial work.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, Amex), Apple Pay, and Google Pay — all powered by Stripe. For crypto, you can also pay with Bitcoin and email us your transaction ID to receive your download link.",
  },
  {
    question: "Is there a subscription or recurring charge?",
    answer:
      "No — there are absolutely no subscriptions or recurring charges. Every premium template is a single $1 one-time payment. You pay once, you own the file forever, including all future updates.",
  },
  {
    question: "Do I need an account to download?",
    answer:
      "No account is ever required. Free templates download instantly with one click. For premium templates ($1), you complete a quick Stripe checkout — no account needed, just your payment details.",
  },
  {
    question: "Can I use templates for client or commercial work?",
    answer:
      "Free templates are licensed for personal, educational, and internal business use. For client deliverables and commercial projects, grab the premium version ($1) which includes a full commercial use license.",
  },
  {
    question: "What file formats do I get?",
    answer:
      "It depends on the tool: PowerPoint templates come as .PPTX + PDF; Excel as .XLSX; Word as .DOCX + PDF; Google Slides and Google Docs as shareable copy links.",
  },
  {
    question: "What if I'm not satisfied with my purchase?",
    answer:
      "We offer a no-questions-asked 30-day refund policy. Email nitheesbalaji@gmail.com with your Stripe receipt and we'll process a full refund within 2–3 business days.",
  },
  {
    question: "Are the templates fully editable?",
    answer:
      "Yes — every template is 100% editable. Change colours, fonts, images, text, and layout to match your brand. No locked layers, no watermarks on downloaded files.",
  },
]

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know about Templakit pricing.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-secondary/50"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="border-t border-border/50 px-6 py-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

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
