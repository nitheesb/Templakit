import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://templakit.vercel.app"),
  title: {
    default: "Free PowerPoint, Canva & Google Slides Templates | Templakit",
    template: "%s | Templakit — Free Templates",
  },
  description:
    "Download 500+ free professionally designed templates for PowerPoint, Google Slides, Canva, Excel, Figma, Word, Notion, and Google Docs. Free to browse, free to download.",
  keywords: [
    "free PowerPoint templates",
    "free Canva templates",
    "free Google Slides templates",
    "free Figma templates",
    "free Excel templates",
    "free Word templates",
    "free Notion templates",
    "free presentation templates download",
    "free pitch deck templates",
    "free resume templates",
    "free business plan templates",
    "free social media templates",
  ],
  authors: [{ name: "Templakit", url: "https://templakit.vercel.app" }],
  creator: "Templakit",
  publisher: "Templakit",
  category: "Design Tools",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://templakit.vercel.app",
    siteName: "Templakit",
    title: "Free PowerPoint, Canva & Google Slides Templates | Templakit",
    description:
      "Download 500+ free professionally designed templates for PowerPoint, Google Slides, Canva, Excel, Figma, Word, Notion, and Google Docs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Templakit — Free Professional Templates Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PowerPoint, Canva & Google Slides Templates | Templakit",
    description:
      "500+ free professionally designed templates. PowerPoint, Canva, Figma, Excel, Notion & more. Download instantly.",
    images: ["/og-image.png"],
    creator: "@templakit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://templakit.vercel.app",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://templakit.vercel.app/#website",
      url: "https://templakit.vercel.app",
      name: "Templakit",
      description: "Free professional templates for PowerPoint, Canva, Google Slides, Excel, Figma, Word, Notion, and Google Docs.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://templakit.vercel.app/templates?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://templakit.vercel.app/#organization",
      name: "Templakit",
      url: "https://templakit.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://templakit.vercel.app/logo.png",
      },
      sameAs: ["https://twitter.com/templakit"],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
