export interface Template {
  id: string
  title: string
  description: string
  category: string
  style: string
  isPro: boolean
  downloads: number
  rating: number
  tags: string[]
  previewColor: string
}

export const categories = [
  { name: "Presentations", icon: "Presentation", count: 245 },
  { name: "Resumes", icon: "FileText", count: 189 },
  { name: "Pitch Decks", icon: "TrendingUp", count: 156 },
  { name: "Social Media", icon: "Share2", count: 312 },
  { name: "Newsletters", icon: "Mail", count: 98 },
  { name: "Business Plans", icon: "Briefcase", count: 127 },
]

export const styles = ["Minimal", "Modern", "Corporate", "Creative"]

export const templates: Template[] = [
  {
    id: "1",
    title: "Modern Startup Pitch Deck",
    description: "A clean, modern pitch deck template perfect for startups looking to impress investors. Features 20+ slides with beautiful data visualizations and charts.",
    category: "Pitch Decks",
    style: "Modern",
    isPro: true,
    downloads: 12453,
    rating: 4.9,
    tags: ["startup", "pitch", "investors", "modern"],
    previewColor: "from-violet-600 to-indigo-600"
  },
  {
    id: "2",
    title: "Minimalist Resume",
    description: "Clean and professional resume template with a focus on readability. Perfect for developers, designers, and creative professionals.",
    category: "Resumes",
    style: "Minimal",
    isPro: false,
    downloads: 28945,
    rating: 4.8,
    tags: ["resume", "cv", "professional", "minimal"],
    previewColor: "from-slate-600 to-slate-800"
  },
  {
    id: "3",
    title: "Corporate Annual Report",
    description: "Professional annual report template with modern charts, infographics, and a clean corporate aesthetic.",
    category: "Business Plans",
    style: "Corporate",
    isPro: true,
    downloads: 8732,
    rating: 4.7,
    tags: ["corporate", "report", "annual", "professional"],
    previewColor: "from-blue-600 to-blue-800"
  },
  {
    id: "4",
    title: "Instagram Story Pack",
    description: "50+ Instagram story templates designed for maximum engagement. Perfect for brands, influencers, and creators.",
    category: "Social Media",
    style: "Creative",
    isPro: true,
    downloads: 45231,
    rating: 4.9,
    tags: ["instagram", "social", "stories", "creative"],
    previewColor: "from-pink-500 to-orange-500"
  },
  {
    id: "5",
    title: "Tech Conference Slides",
    description: "Bold presentation template designed for tech conferences and product launches. Features dark mode and code snippets.",
    category: "Presentations",
    style: "Modern",
    isPro: false,
    downloads: 15678,
    rating: 4.6,
    tags: ["tech", "conference", "presentation", "dark"],
    previewColor: "from-emerald-600 to-teal-600"
  },
  {
    id: "6",
    title: "Weekly Newsletter",
    description: "Clean email newsletter template optimized for all email clients. Includes sections for featured content, news, and CTAs.",
    category: "Newsletters",
    style: "Minimal",
    isPro: false,
    downloads: 9823,
    rating: 4.5,
    tags: ["email", "newsletter", "marketing", "clean"],
    previewColor: "from-amber-500 to-orange-600"
  },
  {
    id: "7",
    title: "Creative Portfolio Resume",
    description: "Stand out from the crowd with this creative resume template featuring unique layouts and visual elements.",
    category: "Resumes",
    style: "Creative",
    isPro: true,
    downloads: 19234,
    rating: 4.8,
    tags: ["resume", "creative", "portfolio", "design"],
    previewColor: "from-purple-600 to-pink-600"
  },
  {
    id: "8",
    title: "Business Model Canvas",
    description: "Strategic planning template with business model canvas, SWOT analysis, and financial projections.",
    category: "Business Plans",
    style: "Corporate",
    isPro: true,
    downloads: 7654,
    rating: 4.7,
    tags: ["business", "strategy", "canvas", "planning"],
    previewColor: "from-cyan-600 to-blue-600"
  },
  {
    id: "9",
    title: "Social Media Bundle",
    description: "Complete social media kit with templates for Instagram, Twitter, Facebook, and LinkedIn posts.",
    category: "Social Media",
    style: "Modern",
    isPro: true,
    downloads: 34567,
    rating: 4.9,
    tags: ["social", "bundle", "instagram", "facebook"],
    previewColor: "from-rose-500 to-violet-600"
  },
  {
    id: "10",
    title: "Sales Presentation",
    description: "High-converting sales presentation template with proven layouts for product demos and client pitches.",
    category: "Presentations",
    style: "Corporate",
    isPro: false,
    downloads: 22341,
    rating: 4.6,
    tags: ["sales", "presentation", "pitch", "corporate"],
    previewColor: "from-indigo-600 to-purple-600"
  },
  {
    id: "11",
    title: "Product Launch Email",
    description: "Attention-grabbing email template for product launches with animated elements and clear CTAs.",
    category: "Newsletters",
    style: "Modern",
    isPro: true,
    downloads: 11234,
    rating: 4.8,
    tags: ["email", "product", "launch", "marketing"],
    previewColor: "from-green-500 to-emerald-600"
  },
  {
    id: "12",
    title: "Investor Update Deck",
    description: "Professional investor update template with KPI dashboards, milestones, and financial metrics.",
    category: "Pitch Decks",
    style: "Corporate",
    isPro: true,
    downloads: 6789,
    rating: 4.7,
    tags: ["investor", "update", "deck", "metrics"],
    previewColor: "from-slate-700 to-zinc-800"
  },
]

export function getTemplateById(id: string): Template | undefined {
  return templates.find(t => t.id === id)
}

export function getRelatedTemplates(template: Template, limit = 4): Template[] {
  return templates
    .filter(t => t.id !== template.id && (t.category === template.category || t.style === template.style))
    .slice(0, limit)
}

export function filterTemplates(
  category?: string,
  style?: string,
  isPro?: boolean,
  search?: string
): Template[] {
  return templates.filter(t => {
    if (category && t.category !== category) return false
    if (style && t.style !== style) return false
    if (isPro !== undefined && t.isPro !== isPro) return false
    if (search) {
      const searchLower = search.toLowerCase()
      return (
        t.title.toLowerCase().includes(searchLower) ||
        t.description.toLowerCase().includes(searchLower) ||
        t.tags.some(tag => tag.includes(searchLower))
      )
    }
    return true
  })
}
