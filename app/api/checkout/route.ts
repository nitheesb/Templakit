import { NextRequest, NextResponse } from "next/server"
import { getStripe } from "@/lib/stripe"
import { getTemplateById } from "@/lib/templates"

export async function POST(req: NextRequest) {
  try {
    const { templateId } = await req.json()

    if (!templateId) {
      return NextResponse.json({ error: "Missing templateId" }, { status: 400 })
    }

    const template = getTemplateById(templateId)

    if (!template) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 })
    }

    if (template.price === 0) {
      return NextResponse.json({ error: "Template is free" }, { status: 400 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://templakit.vercel.app"

    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: template.title,
              description: `${template.tool} template · ${template.formats.join(", ")}`,
              metadata: {
                templateId: template.id,
                tool: template.tool,
              },
            },
            unit_amount: 100, // $1.00 in cents — always $1
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&template_id=${templateId}`,
      cancel_url: `${baseUrl}/templates/${templateId}`,
      metadata: {
        templateId: template.id,
        templateTitle: template.title,
      },
      // Allow customers from Thailand & worldwide
      billing_address_collection: "auto",
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error("Stripe checkout error:", err)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}
