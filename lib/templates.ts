export interface Template {
  id: string
  title: string
  description: string
  category: string
  tool: string
  style: string
  isPro: boolean
  downloads: number
  rating: number
  tags: string[]
  previewColor: string
  formats: string[]
  isNew?: boolean
  isTrending?: boolean
  slideCount?: number
  pages?: number
}

export const tools = [
  { name: "PowerPoint", slug: "powerpoint", icon: "Presentation", count: 8, color: "from-orange-500 to-red-500", description: "Microsoft PowerPoint templates" },
  { name: "Google Slides", slug: "google-slides", icon: "Monitor", count: 7, color: "from-yellow-500 to-amber-500", description: "Google Slides presentations" },
  { name: "Canva", slug: "canva", icon: "Palette", count: 8, color: "from-violet-500 to-purple-600", description: "Canva design templates" },
  { name: "Excel", slug: "excel", icon: "Table2", count: 6, color: "from-green-600 to-emerald-600", description: "Microsoft Excel spreadsheets" },
  { name: "Figma", slug: "figma", icon: "Figma", count: 6, color: "from-pink-500 to-rose-500", description: "Figma design files & UI kits" },
  { name: "Word", slug: "word", icon: "FileText", count: 6, color: "from-blue-600 to-indigo-600", description: "Microsoft Word documents" },
  { name: "Notion", slug: "notion", icon: "BookOpen", count: 5, color: "from-slate-600 to-zinc-600", description: "Notion pages & databases" },
  { name: "Google Docs", slug: "google-docs", icon: "FileEdit", count: 4, color: "from-cyan-500 to-teal-500", description: "Google Docs templates" },
]

export const categories = tools
export const styles = ["Minimal", "Modern", "Corporate", "Creative", "Bold", "Elegant"]

export const templates: Template[] = [
  // ── PowerPoint (8) ─────────────────────────────────────────────
  {
    id: "1",
    title: "Startup Pitch Deck — PowerPoint",
    description: "Investor-ready PowerPoint with 30 slides covering problem, solution, market size, traction, team, and funding ask. Includes animated chart placeholders and professional dark/light variants.",
    category: "PowerPoint", tool: "PowerPoint", style: "Modern",
    isPro: true, downloads: 24530, rating: 4.9,
    tags: ["startup", "pitch deck", "investors", "fundraising"],
    previewColor: "from-violet-600 to-indigo-600",
    formats: ["PPTX", "PDF"], isTrending: true, slideCount: 30,
  },
  {
    id: "2",
    title: "Corporate Annual Report — PowerPoint",
    description: "Professional annual report with clean charts, infographic slides, and data visualization layouts. Built for Fortune-500-style corporate communications.",
    category: "PowerPoint", tool: "PowerPoint", style: "Corporate",
    isPro: true, downloads: 11240, rating: 4.8,
    tags: ["corporate", "annual report", "finance", "data"],
    previewColor: "from-blue-700 to-blue-900",
    formats: ["PPTX", "PDF"], slideCount: 40,
  },
  {
    id: "3",
    title: "Marketing Campaign Deck — PowerPoint",
    description: "Vibrant marketing campaign presentation with audience personas, KPI dashboards, creative brief layouts, and campaign strategy slides.",
    category: "PowerPoint", tool: "PowerPoint", style: "Creative",
    isPro: false, downloads: 18760, rating: 4.7,
    tags: ["marketing", "campaign", "strategy", "kpi"],
    previewColor: "from-pink-500 to-rose-600",
    formats: ["PPTX", "PDF"], isNew: true, slideCount: 25,
  },
  {
    id: "4",
    title: "Tech Product Launch — PowerPoint",
    description: "Dark-themed product launch PowerPoint with feature showcase slides, roadmap timelines, and demo screens. Designed for SaaS and tech product teams.",
    category: "PowerPoint", tool: "PowerPoint", style: "Modern",
    isPro: true, downloads: 15890, rating: 4.8,
    tags: ["tech", "product launch", "saas", "roadmap"],
    previewColor: "from-emerald-600 to-teal-700",
    formats: ["PPTX", "PDF"], isTrending: true, slideCount: 28,
  },
  {
    id: "5",
    title: "Sales Quarterly Review — PowerPoint",
    description: "Clean corporate PowerPoint for QBR presentations. Includes revenue charts, team performance metrics, pipeline summaries, and goal-setting slides.",
    category: "PowerPoint", tool: "PowerPoint", style: "Corporate",
    isPro: false, downloads: 22410, rating: 4.6,
    tags: ["sales", "quarterly review", "metrics", "qbr"],
    previewColor: "from-indigo-600 to-purple-700",
    formats: ["PPTX", "PDF"], slideCount: 20,
  },
  {
    id: "6",
    title: "University Thesis Presentation — PowerPoint",
    description: "Academic PowerPoint for thesis and dissertation presentations. Clean layout with table of contents, methodology, findings, and Q&A slides.",
    category: "PowerPoint", tool: "PowerPoint", style: "Minimal",
    isPro: false, downloads: 31200, rating: 4.7,
    tags: ["academic", "thesis", "university", "research"],
    previewColor: "from-slate-600 to-slate-800",
    formats: ["PPTX", "PDF"], slideCount: 22,
  },
  {
    id: "7",
    title: "Brand Identity Deck — PowerPoint",
    description: "Showcase your brand identity with logo guidelines, color palette, typography rules, brand voice sections, and usage examples. Elegant and award-winning design.",
    category: "PowerPoint", tool: "PowerPoint", style: "Elegant",
    isPro: true, downloads: 9340, rating: 4.9,
    tags: ["branding", "identity", "guidelines", "logo"],
    previewColor: "from-amber-500 to-orange-600",
    formats: ["PPTX", "PDF"], isNew: true, slideCount: 35,
  },
  {
    id: "8",
    title: "Workshop & Training Slides — PowerPoint",
    description: "Interactive workshop presentation with activity slides, breakout sections, progress trackers, and participant engagement layouts. Fully animated.",
    category: "PowerPoint", tool: "PowerPoint", style: "Bold",
    isPro: false, downloads: 14560, rating: 4.5,
    tags: ["workshop", "training", "education", "interactive"],
    previewColor: "from-cyan-500 to-blue-600",
    formats: ["PPTX", "PDF"], slideCount: 30,
  },

  // ── Google Slides (7) ──────────────────────────────────────────
  {
    id: "9",
    title: "Investor Pitch — Google Slides",
    description: "Modern, shareable Google Slides pitch deck with 25 slides covering problem, solution, market, traction, team, and ask. One-click share for remote pitches.",
    category: "Google Slides", tool: "Google Slides", style: "Modern",
    isPro: true, downloads: 19870, rating: 4.9,
    tags: ["pitch deck", "investor", "startup", "fundraising"],
    previewColor: "from-yellow-500 to-amber-600",
    formats: ["Google Slides", "PPTX", "PDF"], isTrending: true, slideCount: 25,
  },
  {
    id: "10",
    title: "Business Proposal — Google Slides",
    description: "Professional Google Slides template for business proposals. Includes market research, competitor analysis, financial forecast, and executive summary slides.",
    category: "Google Slides", tool: "Google Slides", style: "Corporate",
    isPro: false, downloads: 12300, rating: 4.6,
    tags: ["proposal", "business", "market research", "finance"],
    previewColor: "from-green-500 to-teal-600",
    formats: ["Google Slides", "PPTX", "PDF"], slideCount: 22,
  },
  {
    id: "11",
    title: "Creative Portfolio — Google Slides",
    description: "Beautiful portfolio presentation for designers and photographers. Full-screen image slides, case study layouts, and minimal text with maximum visual impact.",
    category: "Google Slides", tool: "Google Slides", style: "Creative",
    isPro: true, downloads: 27560, rating: 4.8,
    tags: ["portfolio", "designer", "creative", "case study"],
    previewColor: "from-purple-600 to-pink-600",
    formats: ["Google Slides", "PDF"], isNew: true, slideCount: 20,
  },
  {
    id: "12",
    title: "Weekly Team Standup — Google Slides",
    description: "Simple and effective weekly standup template. Track goals, blockers, wins, and upcoming tasks in a clean shareable format that gets meetings done faster.",
    category: "Google Slides", tool: "Google Slides", style: "Minimal",
    isPro: false, downloads: 35670, rating: 4.5,
    tags: ["standup", "team", "weekly", "agile"],
    previewColor: "from-slate-500 to-zinc-600",
    formats: ["Google Slides", "PDF"], slideCount: 8,
  },
  {
    id: "13",
    title: "Product Roadmap — Google Slides",
    description: "Visually stunning product roadmap for PMs. Features timeline views, sprint planning slides, milestone tracking, and stakeholder update formats.",
    category: "Google Slides", tool: "Google Slides", style: "Modern",
    isPro: true, downloads: 16780, rating: 4.7,
    tags: ["roadmap", "product manager", "planning", "sprint"],
    previewColor: "from-indigo-500 to-violet-600",
    formats: ["Google Slides", "PPTX", "PDF"], isTrending: true, slideCount: 18,
  },
  {
    id: "14",
    title: "Nonprofit Fundraising Deck — Google Slides",
    description: "Compelling fundraising presentation for nonprofits. Impact stories, donation tiers, financial transparency, and call-to-action slides that convert.",
    category: "Google Slides", tool: "Google Slides", style: "Bold",
    isPro: false, downloads: 8920, rating: 4.6,
    tags: ["nonprofit", "fundraising", "charity", "impact"],
    previewColor: "from-rose-500 to-pink-600",
    formats: ["Google Slides", "PDF"], slideCount: 20,
  },
  {
    id: "15",
    title: "School Lesson Deck — Google Slides",
    description: "Colorful and engaging educational presentation for teachers. Includes lesson plan slides, quiz templates, student activities, and grade tracking pages.",
    category: "Google Slides", tool: "Google Slides", style: "Creative",
    isPro: false, downloads: 42100, rating: 4.4,
    tags: ["education", "school", "lesson plan", "teaching"],
    previewColor: "from-amber-400 to-yellow-500",
    formats: ["Google Slides", "PDF"], slideCount: 24,
  },

  // ── Canva (8) ─────────────────────────────────────────────────
  {
    id: "16",
    title: "Instagram Story Pack — Canva",
    description: "50+ Instagram story templates optimized for engagement. Covers lifestyle, business, fashion, food, and travel niches with animated elements and font pairings.",
    category: "Canva", tool: "Canva", style: "Creative",
    isPro: true, downloads: 58900, rating: 4.9,
    tags: ["instagram", "stories", "social media", "creator"],
    previewColor: "from-pink-500 to-orange-500",
    formats: ["Canva", "PNG", "MP4"], isTrending: true,
  },
  {
    id: "17",
    title: "LinkedIn Banner & Post Kit — Canva",
    description: "Complete LinkedIn presence kit with profile banner, post templates, carousel formats, and announcement graphics. Grow your professional brand in minutes.",
    category: "Canva", tool: "Canva", style: "Corporate",
    isPro: false, downloads: 29450, rating: 4.7,
    tags: ["linkedin", "banner", "personal brand", "professional"],
    previewColor: "from-blue-600 to-cyan-600",
    formats: ["Canva", "PNG", "PDF"], isNew: true,
  },
  {
    id: "18",
    title: "Brand Kit — Canva",
    description: "Complete brand identity kit in Canva. Logo variations, business card, letterhead, social media profiles, and brand guidelines. Everything a brand needs.",
    category: "Canva", tool: "Canva", style: "Minimal",
    isPro: true, downloads: 21340, rating: 4.8,
    tags: ["branding", "brand kit", "logo", "identity"],
    previewColor: "from-violet-600 to-purple-700",
    formats: ["Canva", "PNG", "PDF", "SVG"], isTrending: true,
  },
  {
    id: "19",
    title: "YouTube Thumbnail Pack — Canva",
    description: "High-CTR YouTube thumbnail templates across gaming, tutorials, vlogs, and education niches. Proven designs that increase click-through rates.",
    category: "Canva", tool: "Canva", style: "Bold",
    isPro: false, downloads: 47230, rating: 4.8,
    tags: ["youtube", "thumbnail", "creator", "viral"],
    previewColor: "from-red-600 to-orange-600",
    formats: ["Canva", "PNG", "JPG"], isTrending: true,
  },
  {
    id: "20",
    title: "Event Flyer Collection — Canva",
    description: "Professional event flyer templates for conferences, parties, webinars, and workshops. Fully customizable with easy drag-and-drop Canva editing.",
    category: "Canva", tool: "Canva", style: "Creative",
    isPro: false, downloads: 33180, rating: 4.6,
    tags: ["flyer", "event", "conference", "party"],
    previewColor: "from-emerald-500 to-green-600",
    formats: ["Canva", "PNG", "PDF"],
  },
  {
    id: "21",
    title: "Media Kit & Press Pack — Canva",
    description: "Polished media kit for influencers and brands. Audience stats, rate cards, brand story, past collaborations, and contact pages — all in stunning Canva design.",
    category: "Canva", tool: "Canva", style: "Elegant",
    isPro: true, downloads: 12670, rating: 4.9,
    tags: ["media kit", "influencer", "press", "brand"],
    previewColor: "from-rose-500 to-violet-600",
    formats: ["Canva", "PDF"], isNew: true,
  },
  {
    id: "22",
    title: "Pinterest Pin Templates — Canva",
    description: "Viral-ready Pinterest pin templates across lifestyle, recipes, travel, and business. Optimized 2:3 ratio with high-engagement design principles.",
    category: "Canva", tool: "Canva", style: "Creative",
    isPro: false, downloads: 24890, rating: 4.5,
    tags: ["pinterest", "pins", "social media", "traffic"],
    previewColor: "from-red-500 to-pink-600",
    formats: ["Canva", "PNG", "JPG"],
  },
  {
    id: "23",
    title: "Restaurant Menu — Canva",
    description: "Stunning restaurant menu templates for cafes, fine dining, and fast food. Print-ready with elegant typography and food photography placeholders.",
    category: "Canva", tool: "Canva", style: "Elegant",
    isPro: true, downloads: 16540, rating: 4.7,
    tags: ["restaurant", "menu", "food", "hospitality"],
    previewColor: "from-amber-600 to-yellow-600",
    formats: ["Canva", "PDF", "PNG"],
  },

  // ── Excel (6) ─────────────────────────────────────────────────
  {
    id: "24",
    title: "Financial Projections Model — Excel",
    description: "3-year financial projection Excel model with P&L, balance sheet, cash flow, and investor-ready dashboard. Automated formulas, charts, and scenario analysis.",
    category: "Excel", tool: "Excel", style: "Corporate",
    isPro: true, downloads: 18920, rating: 4.9,
    tags: ["finance", "projections", "startup", "model"],
    previewColor: "from-green-700 to-emerald-700",
    formats: ["XLSX", "Google Sheets"], isTrending: true, pages: 8,
  },
  {
    id: "25",
    title: "Marketing Budget Tracker — Excel",
    description: "Comprehensive marketing budget tracker with channel allocation, ROI tracking, campaign performance, and monthly summary dashboards. Auto-calculating formulas.",
    category: "Excel", tool: "Excel", style: "Modern",
    isPro: false, downloads: 26730, rating: 4.7,
    tags: ["budget", "marketing", "roi", "tracking"],
    previewColor: "from-teal-600 to-cyan-600",
    formats: ["XLSX", "Google Sheets"], isNew: true, pages: 5,
  },
  {
    id: "26",
    title: "HR Employee Tracker — Excel",
    description: "Complete HR Excel dashboard with employee data, leave tracker, performance reviews, payroll summary, and headcount analytics. Pivot-table ready.",
    category: "Excel", tool: "Excel", style: "Corporate",
    isPro: true, downloads: 14350, rating: 4.8,
    tags: ["hr", "employees", "payroll", "leave tracker"],
    previewColor: "from-indigo-600 to-blue-700",
    formats: ["XLSX"], pages: 6,
  },
  {
    id: "27",
    title: "E-commerce Sales Dashboard — Excel",
    description: "Automated e-commerce sales tracking dashboard with revenue trends, product performance, customer analytics, and inventory management. Connects to raw data.",
    category: "Excel", tool: "Excel", style: "Modern",
    isPro: true, downloads: 22160, rating: 4.8,
    tags: ["ecommerce", "sales", "dashboard", "analytics"],
    previewColor: "from-violet-600 to-indigo-700",
    formats: ["XLSX", "Google Sheets"], isTrending: true, pages: 7,
  },
  {
    id: "28",
    title: "Personal Finance Planner — Excel",
    description: "Easy-to-use personal budget planner with monthly expense tracking, savings goals, debt payoff calculator, and net worth tracker. No formulas required.",
    category: "Excel", tool: "Excel", style: "Minimal",
    isPro: false, downloads: 41200, rating: 4.6,
    tags: ["personal finance", "budget", "savings", "debt"],
    previewColor: "from-emerald-500 to-teal-600",
    formats: ["XLSX", "Google Sheets"], pages: 4,
  },
  {
    id: "29",
    title: "Project Gantt Chart — Excel",
    description: "Auto-updating Gantt chart Excel template with task dependencies, milestone tracking, resource allocation, and progress visualization. No VBA, pure formulas.",
    category: "Excel", tool: "Excel", style: "Corporate",
    isPro: false, downloads: 33470, rating: 4.7,
    tags: ["gantt chart", "project management", "planning", "milestones"],
    previewColor: "from-blue-600 to-cyan-600",
    formats: ["XLSX", "Google Sheets"], pages: 3,
  },

  // ── Figma (6) ─────────────────────────────────────────────────
  {
    id: "30",
    title: "SaaS Dashboard UI Kit — Figma",
    description: "Production-ready SaaS dashboard with 100+ components, dark/light themes, full charts library, and complete design system. Auto-layout throughout. Dev-ready.",
    category: "Figma", tool: "Figma", style: "Modern",
    isPro: true, downloads: 31560, rating: 4.9,
    tags: ["saas", "dashboard", "ui kit", "design system"],
    previewColor: "from-pink-600 to-rose-600",
    formats: ["Figma"], isTrending: true,
  },
  {
    id: "31",
    title: "Mobile App UI Kit — Figma",
    description: "Complete mobile app UI kit with onboarding, authentication, home feed, profile, and settings screens. iOS and Android variants with component library.",
    category: "Figma", tool: "Figma", style: "Modern",
    isPro: true, downloads: 28900, rating: 4.8,
    tags: ["mobile app", "ios", "android", "ui kit"],
    previewColor: "from-purple-600 to-violet-700",
    formats: ["Figma"], isTrending: true,
  },
  {
    id: "32",
    title: "Landing Page Design — Figma",
    description: "Conversion-optimized landing page with hero, features, testimonials, pricing, FAQ, and CTA sections. Responsive breakpoints and dark/light modes included.",
    category: "Figma", tool: "Figma", style: "Modern",
    isPro: false, downloads: 45230, rating: 4.8,
    tags: ["landing page", "web design", "conversion", "responsive"],
    previewColor: "from-indigo-600 to-purple-600",
    formats: ["Figma"], isNew: true,
  },
  {
    id: "33",
    title: "E-commerce Store UI — Figma",
    description: "Full e-commerce Figma design with product listings, detail pages, cart, checkout flow, and account screens. Pixel-perfect and developer-ready with specs.",
    category: "Figma", tool: "Figma", style: "Minimal",
    isPro: true, downloads: 22780, rating: 4.7,
    tags: ["ecommerce", "store", "shopping", "checkout"],
    previewColor: "from-rose-500 to-pink-600",
    formats: ["Figma"],
  },
  {
    id: "34",
    title: "Design System Foundation — Figma",
    description: "Comprehensive design system with typography scale, color tokens, spacing grid, icon library, and component documentation. Ready to extend for any product.",
    category: "Figma", tool: "Figma", style: "Corporate",
    isPro: true, downloads: 15670, rating: 4.9,
    tags: ["design system", "tokens", "components", "accessibility"],
    previewColor: "from-slate-700 to-zinc-700",
    formats: ["Figma"],
  },
  {
    id: "35",
    title: "Portfolio Website — Figma",
    description: "Stunning personal portfolio for designers and developers. Multi-page with case study layouts, about, contact, and work archive. Smooth micro-interactions.",
    category: "Figma", tool: "Figma", style: "Elegant",
    isPro: false, downloads: 38900, rating: 4.7,
    tags: ["portfolio", "personal website", "designer", "developer"],
    previewColor: "from-amber-500 to-orange-500",
    formats: ["Figma"], isNew: true,
  },

  // ── Word (6) ──────────────────────────────────────────────────
  {
    id: "36",
    title: "ATS-Optimized Resume — Word",
    description: "Professional Microsoft Word resume that passes Applicant Tracking Systems. Clean layout with skills, experience, and education — formatted for modern hiring.",
    category: "Word", tool: "Word", style: "Minimal",
    isPro: false, downloads: 52300, rating: 4.8,
    tags: ["resume", "ats", "job application", "career"],
    previewColor: "from-blue-700 to-indigo-700",
    formats: ["DOCX", "PDF"], isTrending: true, pages: 1,
  },
  {
    id: "37",
    title: "Business Proposal — Word",
    description: "Professional business proposal with executive summary, scope of work, timeline, pricing table, and terms sections. Used by top consultants and agencies.",
    category: "Word", tool: "Word", style: "Corporate",
    isPro: false, downloads: 29870, rating: 4.7,
    tags: ["proposal", "business", "consulting", "contract"],
    previewColor: "from-slate-700 to-slate-900",
    formats: ["DOCX", "PDF"], pages: 6,
  },
  {
    id: "38",
    title: "Cover Letter Pack — Word",
    description: "5 professional cover letter templates for tech, finance, creative, healthcare, and entry-level positions. ATS-safe and tailored for different industries.",
    category: "Word", tool: "Word", style: "Modern",
    isPro: false, downloads: 44120, rating: 4.6,
    tags: ["cover letter", "job application", "career", "professional"],
    previewColor: "from-cyan-600 to-teal-700",
    formats: ["DOCX", "PDF"], pages: 1,
  },
  {
    id: "39",
    title: "Company Newsletter — Word",
    description: "Internal company newsletter with sections for company news, employee spotlight, upcoming events, and HR announcements. Print-ready, professional layout.",
    category: "Word", tool: "Word", style: "Corporate",
    isPro: true, downloads: 11230, rating: 4.5,
    tags: ["newsletter", "internal comms", "hr", "company"],
    previewColor: "from-blue-500 to-indigo-600",
    formats: ["DOCX", "PDF"], pages: 4,
  },
  {
    id: "40",
    title: "Legal Contract & NDA — Word",
    description: "Standard business contract and NDA reviewed by legal professionals. Covers freelance agreements, service contracts, and partnership terms. Fully editable.",
    category: "Word", tool: "Word", style: "Corporate",
    isPro: true, downloads: 19870, rating: 4.8,
    tags: ["legal", "contract", "nda", "freelance"],
    previewColor: "from-zinc-700 to-neutral-800",
    formats: ["DOCX", "PDF"], isNew: true, pages: 8,
  },
  {
    id: "41",
    title: "Executive Bio & Speaker Sheet — Word",
    description: "Professional executive bio and speaker one-sheet for conferences, media, and speaking engagements. Authority-building design trusted by C-suite executives.",
    category: "Word", tool: "Word", style: "Elegant",
    isPro: true, downloads: 8760, rating: 4.7,
    tags: ["bio", "speaker", "executive", "media"],
    previewColor: "from-amber-600 to-orange-700",
    formats: ["DOCX", "PDF"], pages: 2,
  },

  // ── Notion (5) ────────────────────────────────────────────────
  {
    id: "42",
    title: "Startup OS — Notion",
    description: "Complete startup operating system in Notion. Product roadmap, OKR tracker, meeting notes, hiring pipeline, investor CRM, and team wiki — all connected.",
    category: "Notion", tool: "Notion", style: "Modern",
    isPro: true, downloads: 34560, rating: 4.9,
    tags: ["startup", "productivity", "crm", "okr"],
    previewColor: "from-slate-600 to-zinc-700",
    formats: ["Notion"], isTrending: true, pages: 12,
  },
  {
    id: "43",
    title: "Personal Life Dashboard — Notion",
    description: "All-in-one life management dashboard with habit tracker, journal, goal planner, reading list, and weekly review templates. Used by 60K+ people.",
    category: "Notion", tool: "Notion", style: "Minimal",
    isPro: false, downloads: 61200, rating: 4.8,
    tags: ["life dashboard", "habits", "goals", "journaling"],
    previewColor: "from-violet-600 to-purple-700",
    formats: ["Notion"], isTrending: true, pages: 8,
  },
  {
    id: "44",
    title: "Social Media Content Calendar — Notion",
    description: "Multi-platform content calendar with content pillars, post status workflow, analytics logging, and repurposing tracker. Plan a month of content in an hour.",
    category: "Notion", tool: "Notion", style: "Creative",
    isPro: false, downloads: 48730, rating: 4.7,
    tags: ["content calendar", "social media", "planning", "creator"],
    previewColor: "from-pink-500 to-rose-600",
    formats: ["Notion"], isNew: true, pages: 5,
  },
  {
    id: "45",
    title: "Freelancer CRM & Invoicing — Notion",
    description: "Complete freelancer business system with client CRM, project tracker, invoice templates, income dashboard, and contract storage. Run your business from one place.",
    category: "Notion", tool: "Notion", style: "Corporate",
    isPro: true, downloads: 27890, rating: 4.8,
    tags: ["freelancer", "crm", "invoicing", "clients"],
    previewColor: "from-emerald-600 to-teal-700",
    formats: ["Notion"], pages: 10,
  },
  {
    id: "46",
    title: "Company Knowledge Base — Notion",
    description: "Internal wiki and knowledge base for teams. Organized by department with onboarding guides, SOPs, FAQs, process docs, and team directories.",
    category: "Notion", tool: "Notion", style: "Corporate",
    isPro: true, downloads: 18450, rating: 4.6,
    tags: ["wiki", "knowledge base", "onboarding", "sop"],
    previewColor: "from-blue-600 to-indigo-700",
    formats: ["Notion"], pages: 15,
  },

  // ── Google Docs (4) ───────────────────────────────────────────
  {
    id: "47",
    title: "Creative Director Resume — Google Docs",
    description: "Standout creative professional resume with portfolio section, skills matrix, and visual hierarchy that makes recruiters stop scrolling. Two-column layout.",
    category: "Google Docs", tool: "Google Docs", style: "Creative",
    isPro: false, downloads: 38760, rating: 4.8,
    tags: ["resume", "creative director", "portfolio", "design"],
    previewColor: "from-cyan-500 to-teal-600",
    formats: ["Google Docs", "DOCX", "PDF"], isTrending: true, pages: 2,
  },
  {
    id: "48",
    title: "Consulting Proposal — Google Docs",
    description: "High-converting consulting proposal with discovery summary, proposed approach, deliverables, timeline, investment section, and next steps. Used by top consultants.",
    category: "Google Docs", tool: "Google Docs", style: "Corporate",
    isPro: true, downloads: 16540, rating: 4.7,
    tags: ["consulting", "proposal", "client", "deliverables"],
    previewColor: "from-indigo-600 to-blue-700",
    formats: ["Google Docs", "PDF"], pages: 7,
  },
  {
    id: "49",
    title: "Blog Post Template Pack — Google Docs",
    description: "10 blog post templates for different formats — listicles, how-to guides, case studies, thought leadership, and product reviews. SEO-structured outlines.",
    category: "Google Docs", tool: "Google Docs", style: "Minimal",
    isPro: false, downloads: 29340, rating: 4.6,
    tags: ["blog", "content writing", "seo", "articles"],
    previewColor: "from-amber-500 to-yellow-500",
    formats: ["Google Docs", "DOCX"], isNew: true, pages: 3,
  },
  {
    id: "50",
    title: "Grant Proposal — Google Docs",
    description: "Comprehensive grant proposal for nonprofits and researchers. Needs statement, project description, evaluation plan, and budget narrative — structured for success.",
    category: "Google Docs", tool: "Google Docs", style: "Corporate",
    isPro: true, downloads: 11230, rating: 4.7,
    tags: ["grant", "nonprofit", "research", "proposal"],
    previewColor: "from-teal-600 to-green-700",
    formats: ["Google Docs", "DOCX", "PDF"], pages: 10,
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

export function filterTemplates(opts: {
  category?: string
  style?: string
  isPro?: boolean
  search?: string
}): Template[] {
  return templates.filter(t => {
    if (opts.category && t.category !== opts.category) return false
    if (opts.style && t.style !== opts.style) return false
    if (opts.isPro !== undefined && t.isPro !== opts.isPro) return false
    if (opts.search) {
      const s = opts.search.toLowerCase()
      return (
        t.title.toLowerCase().includes(s) ||
        t.description.toLowerCase().includes(s) ||
        t.tags.some(tag => tag.includes(s)) ||
        t.tool.toLowerCase().includes(s)
      )
    }
    return true
  })
}

export function formatDownloads(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K`
  return String(n)
}
