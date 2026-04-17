import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Templakit — Free Professional Templates",
    short_name: "Templakit",
    description:
      "400+ professionally designed templates for PowerPoint, Google Slides, Excel, Word, and Google Docs. 180+ free, premium templates just $1.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["productivity", "design", "education"],
    lang: "en",
  }
}
