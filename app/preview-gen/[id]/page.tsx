import { getTemplateById } from "@/lib/templates"
import { notFound } from "next/navigation"
import { TemplatePreview } from "@/components/template-preview"

export default async function PreviewGenPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ slide?: string }>
}) {
  const { id } = await params
  const { slide } = await searchParams
  const template = getTemplateById(id)
  if (!template) notFound()

  // slide=1 (default) uses the template's canonical variant.
  // slide=2,3,4 offset the variant so each looks different.
  const base = parseInt(template.id) % 5
  const offset = slide ? parseInt(slide) - 1 : 0
  const variant = (base + offset) % 5

  return (
    <div style={{ width: 1200, height: 800, overflow: "hidden", display: "block" }}>
      <TemplatePreview
        tool={template.tool}
        style={template.style}
        color={template.previewColor}
        variant={variant}
        className="w-full h-full rounded-none border-none shadow-none"
      />
    </div>
  )
}
