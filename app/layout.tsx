import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://templakit.vercel.app"),
  title: {
    default: "Templakit — Professional Templates for PowerPoint, Canva, Figma & More",
    template: "%s | Templakit",
  },
  description:
    "Browse 1,200+ professionally designed templates for PowerPoint, Google Slides, Canva, Excel, Figma, Word, Notion, and Google Docs. Download free and pro templates instantly.",
  keywords: [
    "PowerPoint templates",
    "Canva templates",
    "Google Slides templates",
    "Figma templates",
    "Excel templates",
    "Word templates",
    "Notion templates",
    "free templates download",
    "pitch deck templates",
    "resume templates",
    "presentation templates",
  ],
  authors: [{ name: "Templakit" }],
  creator: "Templakit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://templakit.vercel.app",
    siteName: "Templakit",
    title: "Templakit — Professional Templates for PowerPoint, Canva, Figma & More",
    description:
      "Browse 1,200+ professionally designed templates for PowerPoint, Google Slides, Canva, Excel, Figma, Word, Notion, and Google Docs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Templakit — Professional Template Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Templakit — Professional Templates for Every Tool",
    description:
      "1,200+ professionally designed templates for PowerPoint, Canva, Figma, Excel, Notion & more. Free and Pro plans.",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
