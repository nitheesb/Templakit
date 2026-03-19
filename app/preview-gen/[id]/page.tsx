import { getTemplateById } from "@/lib/templates"
import { notFound } from "next/navigation"
import { TemplatePreview } from "@/components/template-preview"

export default async function PreviewGenPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const template = getTemplateById(id)
  if (!template) notFound()

  return (
    <div style={{ width: 1200, height: 800, overflow: "hidden", display: "block" }}>
      <TemplatePreview
        tool={template.tool}
        style={template.style}
        color={template.previewColor}
        variant={parseInt(template.id) % 5}
        className="w-full h-full rounded-none border-none shadow-none"
      />
    </div>
  )
}
