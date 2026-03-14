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
    default: "Free PowerPoint, Canva, Google Slides & Figma Templates | Templakit",
    template: "%s | Templakit — Free Templates",
  },
  description:
    "Download 500+ free professionally designed templates for PowerPoint, Google Slides, Canva, Excel, Figma, Word, Notion, and Google Docs. Free to browse, instant download. Premium templates just $1.",
  keywords: [
    "free PowerPoint templates download",
    "free Canva templates",
    "free Google Slides templates",
    "free Figma UI kit",
    "free Excel templates",
    "free Word templates",
    "free Notion templates",
    "free Google Docs templates",
    "free presentation templates",
    "free pitch deck template",
    "free resume template Word",
    "free business plan template",
    "free social media templates Canva",
    "free YouTube thumbnail template",
    "free financial model Excel",
    "startup pitch deck template free",
    "free dashboard UI kit Figma",
    "free invoice template",
    "free marketing presentation template",
    "professional templates free download",
  ],
  authors: [{ name: "Templakit", url: "https://templakit.vercel.app" }],
  creator: "Templakit",
  publisher: "Templakit",
  category: "Design & Productivity",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://templakit.vercel.app",
    siteName: "Templakit",
    title: "Free PowerPoint, Canva, Google Slides & Figma Templates | Templakit",
    description:
      "Download 500+ free professionally designed templates for PowerPoint, Google Slides, Canva, Excel, Figma, Word, Notion, and Google Docs. Premium templates just $1.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Templakit — Free Professional Templates for PowerPoint, Canva, Figma & more",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PowerPoint, Canva & Google Slides Templates | Templakit",
    description:
      "500+ free templates for PowerPoint, Canva, Figma, Excel, Notion & more. Premium downloads just $1.",
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://templakit.vercel.app/#website",
      url: "https://templakit.vercel.app",
      name: "Templakit",
      description:
        "Free professional templates for PowerPoint, Google Slides, Canva, Excel, Figma, Word, Notion, and Google Docs.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://templakit.vercel.app/templates?q={search_term_string}",
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
        width: 512,
        height: 512,
      },
      sameAs: ["https://twitter.com/templakit"],
      contactPoint: {
        "@type": "ContactPoint",
        email: "nitheesbalaji@gmail.com",
        contactType: "customer support",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are the templates really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Over 500 templates on Templakit are completely free to download with no sign-up required. Premium templates with advanced features are available for just $1 each, one-time payment.",
          },
        },
        {
          "@type": "Question",
          name: "What tools do the templates work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Templakit offers templates for Microsoft PowerPoint, Google Slides, Canva, Microsoft Excel, Figma, Microsoft Word, Notion, and Google Docs.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use the templates for commercial projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Free templates are licensed for personal use. Premium templates ($1) include a full commercial use license, allowing you to use them for client work, business presentations, and commercial projects.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to create an account to download templates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No account is required for free template downloads. For premium $1 templates, you complete a simple checkout via Stripe or pay with Bitcoin.",
          },
        },
        {
          "@type": "Question",
          name: "What file formats are included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Formats vary by template type: PowerPoint templates come as PPTX and PDF; Canva templates open directly in Canva; Excel templates are XLSX and Google Sheets compatible; Figma templates are .fig files; Word templates are DOCX and PDF; Notion templates are shared via duplicate link.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
