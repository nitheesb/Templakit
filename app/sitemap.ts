import { MetadataRoute } from "next"
import { templates } from "@/lib/templates"

const BASE_URL = "https://templakit.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const templatePages = templates.map(t => ({
    url: `${BASE_URL}/templates/${t.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/templates`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...templatePages,
  ]
}
