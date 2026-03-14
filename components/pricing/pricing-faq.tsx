"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. When you cancel, you'll continue to have access to your plan until the end of your current billing period. After that, your account will be downgraded to the Free plan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal. For Team plans, we also offer invoice-based billing for annual subscriptions.",
  },
  {
    question: "Can I switch between plans?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time. When you upgrade, you'll be charged the prorated difference. When you downgrade, the credit will be applied to your next billing cycle.",
  },
  {
    question: "What file formats are included?",
    answer:
      "Free users get access to basic formats like PNG and PDF. Pro and Team users get access to all formats including PSD, AI, Figma, Sketch, PowerPoint, Google Slides, and more depending on the template.",
  },
  {
    question: "Do templates come with a commercial license?",
    answer:
      "Pro and Team plans include a commercial license that allows you to use templates for client work and commercial projects. Free templates are for personal use only unless otherwise specified.",
  },
  {
    question: "How does team collaboration work?",
    answer:
      "With the Team plan, you can invite up to 10 team members to your workspace. Team members can share templates, create shared collections, upload brand assets, and collaborate on projects together.",
  },
  {
    question: "Is there a free trial for Pro plans?",
    answer:
      "Yes! We offer a 7-day free trial for the Pro plan. You can try all Pro features risk-free. If you decide it's not for you, simply cancel before the trial ends and you won't be charged.",
  },
  {
    question: "What happens to my downloads if I cancel?",
    answer:
      "Any templates you've downloaded while on a paid plan are yours to keep forever. However, you won't be able to download new Pro templates after your subscription ends.",
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
            Got questions? We've got answers.
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
      </div>
    </section>
  )
}
