const RELEASES_BASE = "https://github.com/nitheesb/Templakit/releases/download/v1.0.0"

export type DownloadType = "file" | "external"

export interface Template {
  id: string
  title: string
  description: string
  category: string
  tool: string
  style: string
  price: number
  downloads: number
  rating: number
  tags: string[]
  previewColor: string
  formats: string[]
  isNew?: boolean
  isTrending?: boolean
  slideCount?: number
  pages?: number
  /** How this template is delivered */
  downloadType: DownloadType
  /** For "file": GitHub Releases zip URL. For "external": platform link. */
  downloadUrl: string
}

export const isPaid = (t: Template) => t.price > 0

/** Helpers */
export function fileDownloadUrl(id: string) {
  return `${RELEASES_BASE}/template-${id}.zip`
}

export const tools = [
  { name: "PowerPoint",    slug: "PowerPoint",    icon: "Presentation", count: 8, color: "from-orange-500 to-red-500",    description: "Microsoft PowerPoint templates" },
  { name: "Google Slides", slug: "Google Slides", icon: "Monitor",      count: 7, color: "from-yellow-500 to-amber-500",  description: "Google Slides presentations" },
  { name: "Canva",         slug: "Canva",         icon: "Palette",      count: 8, color: "from-violet-500 to-purple-600", description: "Canva design templates" },
  { name: "Excel",         slug: "Excel",         icon: "Table2",       count: 6, color: "from-green-600 to-emerald-600", description: "Microsoft Excel spreadsheets" },
  { name: "Figma",         slug: "Figma",         icon: "Figma",        count: 6, color: "from-pink-500 to-rose-500",     description: "Figma design files & UI kits" },
  { name: "Word",          slug: "Word",          icon: "FileText",     count: 6, color: "from-blue-600 to-indigo-600",   description: "Microsoft Word documents" },
  { name: "Notion",        slug: "Notion",        icon: "BookOpen",     count: 5, color: "from-slate-600 to-zinc-600",    description: "Notion pages & databases" },
  { name: "Google Docs",   slug: "Google Docs",   icon: "FileEdit",     count: 4, color: "from-cyan-500 to-teal-500",     description: "Google Docs templates" },
]

export const categories = tools
export const styles = ["Minimal", "Modern", "Corporate", "Creative", "Bold", "Elegant"]

export const templates: Template[] = [
  // ── PowerPoint ─────────────────────────────────────────────
  {
    id: "1",
    title: "Startup Pitch Deck — PowerPoint",
    description: "Close your next funding round with this investor-grade PowerPoint pitch deck. Built on proven frameworks used by Y Combinator and Sequoia-backed startups, it covers all 10 essential pitch sections: problem, solution, market size (TAM/SAM/SOM), business model, traction metrics, competitive landscape, team, financials, roadmap, and funding ask. Includes 30 fully editable slides with animated chart builds, icon sets, and two complete color themes (dark and light). Used by 24,000+ founders.",
    category: "PowerPoint", tool: "PowerPoint", style: "Modern",
    price: 1, downloads: 24530, rating: 4.9,
    tags: ["startup", "pitch deck", "investors", "fundraising", "venture capital", "seed round"],
    previewColor: "from-violet-600 to-indigo-600",
    formats: ["PPTX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("1"), isTrending: true, slideCount: 30,
  },
  {
    id: "2",
    title: "Corporate Annual Report — PowerPoint",
    description: "Present your company's yearly performance with authority using this Fortune-500-inspired annual report PowerPoint template. Features 40 slides including executive summary, financial highlights with editable charts, department overviews, milestone timeline, CSR initiatives, and forward-looking statements. Every chart, table, and infographic is fully editable. Built for C-suite presentations, board meetings, and shareholder communications. Includes both print-ready and screen-optimized versions.",
    category: "PowerPoint", tool: "PowerPoint", style: "Corporate",
    price: 1, downloads: 11240, rating: 4.8,
    tags: ["corporate", "annual report", "finance", "board meeting", "shareholder", "business"],
    previewColor: "from-blue-700 to-blue-900",
    formats: ["PPTX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("2"), slideCount: 40,
  },
  {
    id: "3",
    title: "Marketing Campaign Deck — PowerPoint",
    description: "Win internal buy-in and client approval with this vibrant marketing campaign PowerPoint template. Covers every phase of campaign planning: audience research and persona slides, competitive analysis, campaign concept and creative direction, channel strategy, content calendar, KPI dashboard, budget breakdown, and results reporting. 25 fully animated slides with vivid color options. Perfect for brand managers, agencies, and marketing teams presenting to stakeholders.",
    category: "PowerPoint", tool: "PowerPoint", style: "Creative",
    price: 0, downloads: 18760, rating: 4.7,
    tags: ["marketing", "campaign", "strategy", "kpi", "brand", "agency"],
    previewColor: "from-pink-500 to-rose-600",
    formats: ["PPTX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("3"), isNew: true, slideCount: 25,
  },
  {
    id: "4",
    title: "Tech Product Launch — PowerPoint",
    description: "Launch your SaaS product or tech feature with maximum impact using this sleek, dark-themed PowerPoint template. Designed for product managers, CTOs, and tech founders, it includes feature showcase slides with device mockup placeholders, interactive roadmap timeline, architecture diagrams, pricing tier comparison, go-to-market strategy, competitive positioning, and team introduction. 28 slides with smooth entrance animations. Pairs perfectly with live product demos.",
    category: "PowerPoint", tool: "PowerPoint", style: "Modern",
    price: 1, downloads: 15890, rating: 4.8,
    tags: ["tech", "product launch", "saas", "roadmap", "go-to-market", "product manager"],
    previewColor: "from-emerald-600 to-teal-700",
    formats: ["PPTX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("4"), isTrending: true, slideCount: 28,
  },
  {
    id: "5",
    title: "Sales Quarterly Review — PowerPoint",
    description: "Nail your next QBR with this polished sales quarterly review PowerPoint template. Includes 20 slides covering revenue vs target, YoY growth charts, pipeline health, deal velocity, rep performance leaderboard, win/loss analysis, customer success metrics, churn and expansion revenue, Q3 forecast, and strategic priorities. Data-driven layout built for sales leaders, VPs, and revenue teams. All charts connect directly to Excel data for easy updates.",
    category: "PowerPoint", tool: "PowerPoint", style: "Corporate",
    price: 0, downloads: 22410, rating: 4.6,
    tags: ["sales", "quarterly review", "QBR", "revenue", "pipeline", "sales metrics"],
    previewColor: "from-indigo-600 to-purple-700",
    formats: ["PPTX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("5"), slideCount: 20,
  },
  {
    id: "6",
    title: "University Thesis Presentation — PowerPoint",
    description: "Present your academic research with confidence using this clean, scholarly PowerPoint template. Designed specifically for thesis defenses, dissertation presentations, and academic conferences. Includes 22 structured slides: title and committee page, research overview, literature review grid, methodology flowchart, data visualizations, findings summary, discussion and limitations, conclusions, future research directions, references, and Q&A slide. Adheres to academic presentation conventions with elegant, distraction-free design.",
    category: "PowerPoint", tool: "PowerPoint", style: "Minimal",
    price: 0, downloads: 31200, rating: 4.7,
    tags: ["academic", "thesis", "university", "research", "dissertation", "conference"],
    previewColor: "from-slate-600 to-slate-800",
    formats: ["PPTX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("6"), slideCount: 22,
  },
  {
    id: "7",
    title: "Brand Identity Deck — PowerPoint",
    description: "Define and present your brand with precision using this award-winning brand identity PowerPoint. Covers every element of a comprehensive brand guide: brand story and mission, logo construction and safe zones, primary and secondary color palettes with hex/CMYK/Pantone values, typography hierarchy with usage examples, icon and illustration style, photography and imagery direction, tone of voice principles, do's and don'ts, and real-world application mockups. 35 slides. Essential for brand managers, designers, and agencies onboarding new clients.",
    category: "PowerPoint", tool: "PowerPoint", style: "Elegant",
    price: 1, downloads: 9340, rating: 4.9,
    tags: ["branding", "brand identity", "brand guidelines", "logo", "style guide", "design"],
    previewColor: "from-amber-500 to-orange-600",
    formats: ["PPTX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("7"), isNew: true, slideCount: 35,
  },
  {
    id: "8",
    title: "Workshop & Training Slides — PowerPoint",
    description: "Deliver engaging, results-driven workshops with this professionally structured training PowerPoint template. Designed by learning and development specialists, it includes icebreaker slides, agenda overview, learning objectives, modular content sections with progress indicators, interactive activity instructions, breakout group prompts, knowledge check quizzes, participant reflection exercises, key takeaways, and action planning pages. 30 fully animated slides. Compatible with Microsoft Teams, Zoom screen share, and in-person projection.",
    category: "PowerPoint", tool: "PowerPoint", style: "Bold",
    price: 0, downloads: 14560, rating: 4.5,
    tags: ["workshop", "training", "education", "L&D", "corporate training", "facilitation"],
    previewColor: "from-cyan-500 to-blue-600",
    formats: ["PPTX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("8"), slideCount: 30,
  },

  // ── Google Slides ──────────────────────────────────────────
  {
    id: "9",
    title: "Investor Pitch — Google Slides",
    description: "Raise funding faster with this highly shareable investor pitch Google Slides template. Built for remote fundraising, it includes a live-link sharing workflow alongside 25 polished slides: executive summary, pain and solution, product screenshots, market opportunity, business model canvas, traction milestones with real metrics placeholders, competitive matrix, team bios with photo placeholders, financial projections table, and funding ask. Exports cleanly to PowerPoint and PDF. Used by 19,000+ founders across 40 countries.",
    category: "Google Slides", tool: "Google Slides", style: "Modern",
    price: 1, downloads: 19870, rating: 4.9,
    tags: ["pitch deck", "investor", "startup", "fundraising", "Series A", "seed"],
    previewColor: "from-yellow-500 to-amber-600",
    formats: ["Google Slides", "PPTX", "PDF"],
    downloadType: "external",
    downloadUrl: "https://docs.google.com/presentation", isTrending: true, slideCount: 25,
  },
  {
    id: "10",
    title: "Business Proposal — Google Slides",
    description: "Win more clients with this professional business proposal Google Slides template. Presents your company with authority through an executive summary, our understanding of your challenge, proposed solution overview, detailed scope of work, project phases and timeline Gantt chart, team credentials and case studies, investment summary with pricing table, next steps, and terms overview. 22 slides designed to be shared as a link directly with decision-makers. Download as PPTX or PDF for offline delivery.",
    category: "Google Slides", tool: "Google Slides", style: "Corporate",
    price: 0, downloads: 12300, rating: 4.6,
    tags: ["proposal", "business", "scope of work", "client", "consulting", "B2B"],
    previewColor: "from-green-500 to-teal-600",
    formats: ["Google Slides", "PPTX", "PDF"],
    downloadType: "external",
    downloadUrl: "https://docs.google.com/presentation", slideCount: 22,
  },
  {
    id: "11",
    title: "Creative Portfolio — Google Slides",
    description: "Showcase your creative work with this beautifully crafted portfolio Google Slides template. Features full-bleed image slides, detailed case study layouts with problem/solution/result structure, project overview pages, skills and tools proficiency charts, client testimonials section, awards and recognition slides, and contact page with social links. 20 slides designed with generous whitespace and typographic hierarchy to put your work front and center. Perfect for designers, photographers, illustrators, and UX professionals.",
    category: "Google Slides", tool: "Google Slides", style: "Creative",
    price: 1, downloads: 27560, rating: 4.8,
    tags: ["portfolio", "designer", "creative", "case study", "UX", "photography"],
    previewColor: "from-purple-600 to-pink-600",
    formats: ["Google Slides", "PDF"],
    downloadType: "external",
    downloadUrl: "https://docs.google.com/presentation", isNew: true, slideCount: 20,
  },
  {
    id: "12",
    title: "Weekly Team Standup — Google Slides",
    description: "Run faster, more focused standups with this lightweight team meeting Google Slides template. Eight clean slides guide your team through: last week's wins, blockers and dependencies, this week's priorities, key metrics dashboard, upcoming milestones, shoutouts, open questions, and parking lot. Designed to be opened once a week, updated in under 5 minutes, and shared as a link — keeping every team member aligned without long email threads.",
    category: "Google Slides", tool: "Google Slides", style: "Minimal",
    price: 0, downloads: 35670, rating: 4.5,
    tags: ["standup", "team meeting", "agile", "scrum", "weekly sync", "remote work"],
    previewColor: "from-slate-500 to-zinc-600",
    formats: ["Google Slides", "PDF"],
    downloadType: "external",
    downloadUrl: "https://docs.google.com/presentation", slideCount: 8,
  },
  {
    id: "13",
    title: "Product Roadmap — Google Slides",
    description: "Align your team and stakeholders with this visually stunning product roadmap Google Slides template. Designed for product managers, it includes a quarterly timeline with swimlanes, initiative cards with status indicators, sprint planning view, theme-based roadmap layout, dependency tracker, milestone celebration slides, and stakeholder-specific views (executive vs team). 18 slides that make complex product strategy immediately understandable. Export to PowerPoint or share as a live link for always-current roadmap visibility.",
    category: "Google Slides", tool: "Google Slides", style: "Modern",
    price: 1, downloads: 16780, rating: 4.7,
    tags: ["product roadmap", "product manager", "planning", "sprint", "agile", "OKR"],
    previewColor: "from-indigo-500 to-violet-600",
    formats: ["Google Slides", "PPTX", "PDF"],
    downloadType: "external",
    downloadUrl: "https://docs.google.com/presentation", isTrending: true, slideCount: 18,
  },
  {
    id: "14",
    title: "Nonprofit Fundraising Deck — Google Slides",
    description: "Move donors to action with this emotionally compelling nonprofit fundraising Google Slides template. Structured around storytelling principles, it includes mission and impact overview, beneficiary stories with photo placeholders, program breakdown with cost-per-impact statistics, theory of change visual, financial transparency infographic, donation tiers with specific outcomes, board and leadership page, success stories and testimonials, urgency narrative, and a powerful CTA close. 20 slides. Proven to increase donation conversion rates.",
    category: "Google Slides", tool: "Google Slides", style: "Bold",
    price: 0, downloads: 8920, rating: 4.6,
    tags: ["nonprofit", "fundraising", "charity", "impact", "grant", "donor"],
    previewColor: "from-rose-500 to-pink-600",
    formats: ["Google Slides", "PDF"],
    downloadType: "external",
    downloadUrl: "https://docs.google.com/presentation", slideCount: 20,
  },
  {
    id: "15",
    title: "School Lesson Deck — Google Slides",
    description: "Transform your classroom with this colorful, pedagogically sound lesson plan Google Slides template. Created with educational best practices, it includes warm-up activities, clear learning objectives with Bloom's taxonomy alignment, structured content delivery slides, visual explanation frames, interactive discussion prompts, pair-and-share activity instructions, formative assessment check-ins, exit ticket, and homework overview. 24 slides. Works perfectly on Google Classroom, Chromebooks, projectors, and interactive whiteboards.",
    category: "Google Slides", tool: "Google Slides", style: "Creative",
    price: 0, downloads: 42100, rating: 4.4,
    tags: ["education", "school", "lesson plan", "teacher", "classroom", "K-12"],
    previewColor: "from-amber-400 to-yellow-500",
    formats: ["Google Slides", "PDF"],
    downloadType: "external",
    downloadUrl: "https://docs.google.com/presentation", slideCount: 24,
  },

  // ── Canva ─────────────────────────────────────────────────
  {
    id: "16",
    title: "Instagram Story Pack — Canva",
    description: "Grow your Instagram following with this high-engagement story template pack. Includes 50+ professionally designed Instagram story templates across 8 content categories: product showcase, sale and promotion, quote and motivation, behind-the-scenes, poll and question sticker, countdown, user-generated content repost, and announcement. Each template uses animated text effects, gradient overlays, and strategic CTA placement to maximize swipe-ups and profile visits. Available in 10 cohesive color palettes. Fully editable in Canva — swap colors, fonts, and images in seconds.",
    category: "Canva", tool: "Canva", style: "Creative",
    price: 1, downloads: 58900, rating: 4.9,
    tags: ["instagram", "stories", "social media", "creator", "influencer", "engagement"],
    previewColor: "from-pink-500 to-orange-500",
    formats: ["Canva", "PNG", "MP4"],
    downloadType: "external",
    downloadUrl: "https://www.canva.com/templates", isTrending: true,
  },
  {
    id: "17",
    title: "LinkedIn Banner & Post Kit — Canva",
    description: "Build a professional LinkedIn presence that attracts recruiters, clients, and collaborators. This complete LinkedIn brand kit includes: profile banner (1584×396px), 20 post templates for thought leadership, job announcements, achievement highlights, and engagement questions, 5 carousel post templates, 3 newsletter header designs, and connection request follow-up post templates. All optimized for LinkedIn's algorithm with proven content formats. Used by consultants, executives, and job seekers to get 10x more profile views.",
    category: "Canva", tool: "Canva", style: "Corporate",
    price: 0, downloads: 29450, rating: 4.7,
    tags: ["linkedin", "banner", "personal brand", "professional", "B2B", "networking"],
    previewColor: "from-blue-600 to-cyan-600",
    formats: ["Canva", "PNG", "PDF"],
    downloadType: "external",
    downloadUrl: "https://www.canva.com/templates", isNew: true,
  },
  {
    id: "18",
    title: "Brand Kit — Canva",
    description: "Launch your brand with a complete, cohesive identity package built entirely in Canva. This all-in-one brand kit includes: primary and secondary logo designs with clear space rules, business card (front and back), letterhead and invoice template, email signature, social media profile and cover images for 5 platforms, brand color palette with hex codes, typography pairing guide with font usage rules, branded PowerPoint slide template, document folder cover, and brand guidelines one-pager. Perfect for startups, freelancers, and small businesses launching or rebranding.",
    category: "Canva", tool: "Canva", style: "Minimal",
    price: 1, downloads: 21340, rating: 4.8,
    tags: ["branding", "brand kit", "logo", "identity", "startup", "small business"],
    previewColor: "from-violet-600 to-purple-700",
    formats: ["Canva", "PNG", "PDF", "SVG"],
    downloadType: "external",
    downloadUrl: "https://www.canva.com/templates", isTrending: true,
  },
  {
    id: "19",
    title: "YouTube Thumbnail Pack — Canva",
    description: "Dramatically increase your YouTube click-through rate with this data-driven thumbnail template pack. Includes 40 thumbnail templates across the highest-performing niches: tutorial and how-to, reaction and commentary, vlog, gaming highlights, educational explainer, tech review, finance and investing, fitness and lifestyle, and cooking. Each design follows YouTube's proven CTR-maximizing formula: bold expressive text, high-contrast background, emotional face placeholder, and clear visual hierarchy. Multiple color schemes per niche included.",
    category: "Canva", tool: "Canva", style: "Bold",
    price: 0, downloads: 47230, rating: 4.8,
    tags: ["youtube", "thumbnail", "creator", "CTR", "video", "content creator"],
    previewColor: "from-red-600 to-orange-600",
    formats: ["Canva", "PNG", "JPG"],
    downloadType: "external",
    downloadUrl: "https://www.canva.com/templates", isTrending: true,
  },
  {
    id: "20",
    title: "Event Flyer Collection — Canva",
    description: "Promote your next event with professional flyers that get noticed. This collection includes 30 fully editable event flyer templates for conferences and summits, networking happy hours, workshops and webinars, music and entertainment events, charity galas and fundraisers, product launch parties, corporate team events, and holiday parties. Each template includes a main flyer (A4/US Letter), social media square, and story variant — so you get three assets per design. Print-ready at 300 DPI with bleeds and safe zones marked.",
    category: "Canva", tool: "Canva", style: "Creative",
    price: 0, downloads: 33180, rating: 4.6,
    tags: ["event flyer", "conference", "party", "workshop", "print", "promotion"],
    previewColor: "from-emerald-500 to-green-600",
    formats: ["Canva", "PNG", "PDF"],
    downloadType: "external",
    downloadUrl: "https://www.canva.com/templates",
  },
  {
    id: "21",
    title: "Media Kit & Press Pack — Canva",
    description: "Land brand deals, speaking gigs, and press features with a media kit that makes editors and sponsors stop scrolling. This influencer and brand media kit includes: cover page with hero photo placeholder, about me and brand story, audience demographics with infographic charts, platform statistics and engagement rate highlights, content categories and niche overview, past brand collaboration showcase, rates and packages page, testimonials from past partners, and contact and booking page. Available in vertical (for digital) and landscape (for print) orientations.",
    category: "Canva", tool: "Canva", style: "Elegant",
    price: 1, downloads: 12670, rating: 4.9,
    tags: ["media kit", "influencer", "press kit", "brand partnerships", "sponsorship", "PR"],
    previewColor: "from-rose-500 to-violet-600",
    formats: ["Canva", "PDF"],
    downloadType: "external",
    downloadUrl: "https://www.canva.com/templates", isNew: true,
  },
  {
    id: "22",
    title: "Pinterest Pin Templates — Canva",
    description: "Drive consistent Pinterest traffic with this collection of viral-optimized pin templates. Includes 35 pin designs in the ideal 2:3 ratio across top-performing Pinterest categories: recipe and food photography, home decor and interior design, travel guides and itineraries, personal finance tips, fitness and wellness, fashion outfit ideas, DIY and crafts, and business and marketing. Each pin uses proven SEO-friendly text overlay placement and high-readability fonts. Optimized for both static and video pins.",
    category: "Canva", tool: "Canva", style: "Creative",
    price: 0, downloads: 24890, rating: 4.5,
    tags: ["pinterest", "pins", "traffic", "SEO", "content marketing", "blog"],
    previewColor: "from-red-500 to-pink-600",
    formats: ["Canva", "PNG", "JPG"],
    downloadType: "external",
    downloadUrl: "https://www.canva.com/templates",
  },
  {
    id: "23",
    title: "Restaurant Menu — Canva",
    description: "Elevate your dining experience before guests take a bite with this elegant restaurant menu Canva template. Available in three styles — fine dining, casual bistro, and modern café — each includes a full-page menu layout, drink and cocktail menu page, daily specials insert, takeaway menu version, and digital QR code menu variant. Typography is carefully selected for readability in low-light environments. Print-ready at 300 DPI with standard restaurant menu proportions (4.25×11 inches). Fully editable — update items, prices, and descriptions in minutes.",
    category: "Canva", tool: "Canva", style: "Elegant",
    price: 1, downloads: 16540, rating: 4.7,
    tags: ["restaurant", "menu", "food", "cafe", "hospitality", "print design"],
    previewColor: "from-amber-600 to-yellow-600",
    formats: ["Canva", "PDF", "PNG"],
    downloadType: "external",
    downloadUrl: "https://www.canva.com/templates",
  },

  // ── Excel ─────────────────────────────────────────────────
  {
    id: "24",
    title: "Financial Projections Model — Excel",
    description: "Build investor-credible financial projections in hours, not days. This 3-year financial model includes a fully integrated income statement, balance sheet, and cash flow statement with automatic cross-linking. Features a revenue build-up module with multiple revenue stream inputs, headcount planning with salary roll-up, operating expense assumptions dashboard, working capital and capex schedule, debt and equity financing module, DCF valuation calculator, key metrics summary (ARR, MRR, CAC, LTV, burn rate, runway), and a polished investor-ready charts dashboard. No financial modeling experience required.",
    category: "Excel", tool: "Excel", style: "Corporate",
    price: 1, downloads: 18920, rating: 4.9,
    tags: ["financial model", "projections", "startup", "P&L", "cash flow", "DCF valuation"],
    previewColor: "from-green-700 to-emerald-700",
    formats: ["XLSX", "Google Sheets"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("24"), isTrending: true, pages: 8,
  },
  {
    id: "25",
    title: "Marketing Budget Tracker — Excel",
    description: "Take control of every marketing dollar with this comprehensive budget tracking Excel template. Features a top-level budget summary with variance analysis, individual channel sheets for paid search, paid social, SEO, content, email, events, and PR, monthly spend vs budget charts, campaign-level ROI calculator, cost-per-lead and cost-per-acquisition trackers, a quarterly reallocation planning tool, and an annual marketing calendar view. Auto-calculates all totals and variances. Compatible with Google Sheets — upload and share instantly with your team.",
    category: "Excel", tool: "Excel", style: "Modern",
    price: 0, downloads: 26730, rating: 4.7,
    tags: ["marketing budget", "ROI tracking", "campaign", "channel mix", "spend tracking"],
    previewColor: "from-teal-600 to-cyan-600",
    formats: ["XLSX", "Google Sheets"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("25"), isNew: true, pages: 5,
  },
  {
    id: "26",
    title: "HR Employee Tracker — Excel",
    description: "Manage your entire workforce from one powerful Excel dashboard. This HR employee tracker includes a master employee database with custom fields, leave and absence tracker with automatic balance calculations, performance review scheduler and rating matrix, headcount planning model by department and quarter, payroll summary with benefits cost breakdown, training and certification tracking, turnover rate analytics, and an HR KPI dashboard with charts for headcount trend, leave utilization, and diversity metrics. Built with pivot tables and structured references for easy data updates.",
    category: "Excel", tool: "Excel", style: "Corporate",
    price: 1, downloads: 14350, rating: 4.8,
    tags: ["HR", "employee tracker", "payroll", "leave management", "headcount", "HR analytics"],
    previewColor: "from-indigo-600 to-blue-700",
    formats: ["XLSX"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("26"), pages: 6,
  },
  {
    id: "27",
    title: "E-commerce Sales Dashboard — Excel",
    description: "Get instant clarity on your e-commerce business performance with this automated Excel sales dashboard. Drop in your order data and instantly see: daily and monthly revenue trends, product performance ranking with margin analysis, customer acquisition vs retention ratio, cohort-based retention chart, inventory days on hand, top and bottom performing SKUs, geographic sales breakdown, refund rate tracker, and a 12-week rolling forecast. Works with Shopify, WooCommerce, or any CSV export. No formulas to write — just paste your data.",
    category: "Excel", tool: "Excel", style: "Modern",
    price: 1, downloads: 22160, rating: 4.8,
    tags: ["ecommerce", "sales dashboard", "Shopify analytics", "product performance", "revenue"],
    previewColor: "from-violet-600 to-indigo-700",
    formats: ["XLSX", "Google Sheets"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("27"), isTrending: true, pages: 7,
  },
  {
    id: "28",
    title: "Personal Finance Planner — Excel",
    description: "Take control of your money with this beautifully simple personal finance Excel planner. Tracks income from multiple sources, categorizes and visualizes monthly expenses against budget, calculates your savings rate, projects your debt-free date with the avalanche and snowball methods, shows your net worth progression over time, and includes a dedicated emergency fund and vacation savings tracker. Everything on one dashboard — no pivot tables, no complex formulas. Just enter your numbers and see your financial life clearly. Compatible with Google Sheets.",
    category: "Excel", tool: "Excel", style: "Minimal",
    price: 0, downloads: 41200, rating: 4.6,
    tags: ["personal finance", "budget planner", "savings", "debt payoff", "net worth"],
    previewColor: "from-emerald-500 to-teal-600",
    formats: ["XLSX", "Google Sheets"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("28"), pages: 4,
  },
  {
    id: "29",
    title: "Project Gantt Chart — Excel",
    description: "Plan and track any project with professional clarity using this auto-updating Gantt chart Excel template. Enter your tasks, start dates, and durations — the Gantt chart builds itself automatically. Features task dependency linking, milestone diamonds, completion percentage progress bars, resource assignment column, critical path highlighting, project health summary, weekly status update section, and a risk register tab. No VBA macros — built entirely with Excel formulas and conditional formatting for full transparency and easy customization. Scales to 200+ tasks.",
    category: "Excel", tool: "Excel", style: "Corporate",
    price: 0, downloads: 33470, rating: 4.7,
    tags: ["Gantt chart", "project management", "project planning", "milestones", "PMO"],
    previewColor: "from-blue-600 to-cyan-600",
    formats: ["XLSX", "Google Sheets"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("29"), pages: 3,
  },

  // ── Figma ─────────────────────────────────────────────────
  {
    id: "30",
    title: "SaaS Dashboard UI Kit — Figma",
    description: "Build production-ready SaaS dashboards in hours with this comprehensive Figma UI kit. Includes 100+ fully componentized UI elements built with Figma variables and auto-layout: navigation sidebar with collapsible states, data table with sorting and pagination, 12 chart types (line, bar, donut, area, scatter), stat cards, notification center, user management screens, settings pages, onboarding flow, and empty states. Ships in both dark and light themes with a complete color token system. Includes a detailed component documentation page. Dev-ready with annotated specs.",
    category: "Figma", tool: "Figma", style: "Modern",
    price: 1, downloads: 31560, rating: 4.9,
    tags: ["SaaS dashboard", "Figma UI kit", "design system", "admin panel", "data visualization"],
    previewColor: "from-pink-600 to-rose-600",
    formats: ["Figma"],
    downloadType: "external",
    downloadUrl: "https://www.figma.com/community", isTrending: true,
  },
  {
    id: "31",
    title: "Mobile App UI Kit — Figma",
    description: "Design your mobile app at speed with this production-ready Figma mobile UI kit. Includes complete screen designs for: onboarding and splash, sign up / login / forgot password, home feed and dashboard, search and filter, product detail, shopping cart and checkout, user profile, settings and preferences, notifications center, and in-app messaging. Provided in iOS (iPhone 15 Pro) and Android (Pixel 8) frame sizes with platform-specific conventions respected throughout. Auto-layout throughout, named layers, shared styles, and a comprehensive component library.",
    category: "Figma", tool: "Figma", style: "Modern",
    price: 1, downloads: 28900, rating: 4.8,
    tags: ["mobile app", "iOS", "Android", "Figma UI kit", "app design", "UX design"],
    previewColor: "from-purple-600 to-violet-700",
    formats: ["Figma"],
    downloadType: "external",
    downloadUrl: "https://www.figma.com/community", isTrending: true,
  },
  {
    id: "32",
    title: "Landing Page Design — Figma",
    description: "Convert more visitors with this scientifically optimized landing page Figma template. Designed using CRO (conversion rate optimization) principles from 500+ A/B tests, it includes: hero section with social proof and above-fold CTA, feature grid with icons, comparison table, testimonial carousel, FAQ accordion, pricing section, trust badges footer, and sticky navigation. Fully responsive with desktop, tablet, and mobile breakpoints. Includes dark and light mode variants. Handoff-ready with all measurements annotated for developers.",
    category: "Figma", tool: "Figma", style: "Modern",
    price: 0, downloads: 45230, rating: 4.8,
    tags: ["landing page", "web design", "conversion optimization", "Figma", "responsive"],
    previewColor: "from-indigo-600 to-purple-600",
    formats: ["Figma"],
    downloadType: "external",
    downloadUrl: "https://www.figma.com/community", isNew: true,
  },
  {
    id: "33",
    title: "E-commerce Store UI — Figma",
    description: "Design a world-class e-commerce experience with this pixel-perfect Figma template. Covers the complete shopping journey: homepage with hero banner and featured products, category listing with filter sidebar, product detail page with image gallery and variant selector, wishlist, shopping cart drawer, multi-step checkout (address → shipping → payment → review), order confirmation, account dashboard, and order history. Inspired by best-in-class stores like Shopify themes. All components use auto-layout and variants for rapid customization.",
    category: "Figma", tool: "Figma", style: "Minimal",
    price: 1, downloads: 22780, rating: 4.7,
    tags: ["ecommerce", "online store", "Figma", "checkout flow", "product page", "web design"],
    previewColor: "from-rose-500 to-pink-600",
    formats: ["Figma"],
    downloadType: "external",
    downloadUrl: "https://www.figma.com/community",
  },
  {
    id: "34",
    title: "Design System Foundation — Figma",
    description: "Establish a scalable, maintainable design system from day one with this enterprise-grade Figma design system foundation. Includes a complete typography scale (6 heading levels + body variants), color system with semantic tokens (primary, secondary, success, warning, error, neutral), 8px spacing grid documentation, border radius scale, shadow elevation system, 200+ icon library in multiple weights, a complete form component library (inputs, selects, checkboxes, radios, toggles), button variants, badge and tag system, and full accessibility documentation meeting WCAG 2.1 AA. Used by design teams at 50+ companies.",
    category: "Figma", tool: "Figma", style: "Corporate",
    price: 1, downloads: 15670, rating: 4.9,
    tags: ["design system", "Figma tokens", "component library", "accessibility", "WCAG"],
    previewColor: "from-slate-700 to-zinc-700",
    formats: ["Figma"],
    downloadType: "external",
    downloadUrl: "https://www.figma.com/community",
  },
  {
    id: "35",
    title: "Portfolio Website — Figma",
    description: "Land your dream job or next client with this stunning personal portfolio Figma template. Designed for designers, developers, and creative professionals, it includes: hero with animated headline, selected work grid, detailed case study layout (context → problem → process → outcome), about page with skills visualization, work experience timeline, client logos section, testimonials, blog preview, and contact form. Includes smooth scroll and hover micro-interaction specs. Provided in desktop, tablet, and mobile viewports. Based on real portfolios that secured roles at top tech companies and agencies.",
    category: "Figma", tool: "Figma", style: "Elegant",
    price: 0, downloads: 38900, rating: 4.7,
    tags: ["portfolio", "personal website", "designer portfolio", "developer portfolio", "case study"],
    previewColor: "from-amber-500 to-orange-500",
    formats: ["Figma"],
    downloadType: "external",
    downloadUrl: "https://www.figma.com/community", isNew: true,
  },

  // ── Word ──────────────────────────────────────────────────
  {
    id: "36",
    title: "ATS-Optimized Resume — Word",
    description: "Get past the robots and into the hands of hiring managers with this professionally crafted ATS-optimized Microsoft Word resume template. Built to pass Applicant Tracking Systems used by 99% of Fortune 500 companies — no tables, text boxes, or headers/footers that trip up ATS parsers. Clean single-column layout with strategic keyword placement areas, a quantification-focused work experience section, skills matrix, and education block. Available in 1-page and 2-page versions. Trusted by job seekers who've landed roles at Google, Amazon, McKinsey, and Goldman Sachs.",
    category: "Word", tool: "Word", style: "Minimal",
    price: 0, downloads: 52300, rating: 4.8,
    tags: ["resume", "ATS resume", "job application", "CV", "career", "job search"],
    previewColor: "from-blue-700 to-indigo-700",
    formats: ["DOCX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("36"), isTrending: true, pages: 1,
  },
  {
    id: "37",
    title: "Business Proposal — Word",
    description: "Win more business with this polished, conversion-focused Microsoft Word business proposal template. Structured around the psychology of business decision-making, it includes: executive summary written to the C-suite, problem restatement showing you truly understood the brief, proposed solution with clear deliverables, phased project timeline with milestones, team credentials and relevant case studies, detailed investment breakdown, ROI justification section, terms and payment schedule, and next steps with a clear call to action. Editable table of contents and auto-updating page numbers included.",
    category: "Word", tool: "Word", style: "Corporate",
    price: 0, downloads: 29870, rating: 4.7,
    tags: ["business proposal", "consulting proposal", "SOW", "B2B sales", "RFP response"],
    previewColor: "from-slate-700 to-slate-900",
    formats: ["DOCX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("37"), pages: 6,
  },
  {
    id: "38",
    title: "Cover Letter Pack — Word",
    description: "Stand out from hundreds of applicants with a cover letter that gets you interviews. This pack includes 5 professionally written and designed Microsoft Word cover letter templates, each crafted for a different industry and career stage: technology and engineering, finance and consulting, creative and design, healthcare and life sciences, and entry-level and recent graduate. Each template uses a proven 4-paragraph structure: hook opening, relevant experience bridge, company-specific value proposition, and confident close. ATS-safe formatting throughout. Saved thousands of job seekers weeks of frustration.",
    category: "Word", tool: "Word", style: "Modern",
    price: 0, downloads: 44120, rating: 4.6,
    tags: ["cover letter", "job application", "career", "resume cover letter", "internship"],
    previewColor: "from-cyan-600 to-teal-700",
    formats: ["DOCX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("38"), pages: 1,
  },
  {
    id: "39",
    title: "Company Newsletter — Word",
    description: "Keep your team informed and engaged with this professional internal company newsletter Microsoft Word template. Designed for HR managers and internal communications teams, it features a masthead with company logo placeholder, featured article layout with pull quote, department news columns, employee spotlight section with photo placeholder, upcoming events calendar, new hire announcements, company metrics dashboard page, CEO message section, and a culture and values feature. Print-ready at A4 and US Letter. Compatible with Word's Mail Merge for personalized distribution.",
    category: "Word", tool: "Word", style: "Corporate",
    price: 1, downloads: 11230, rating: 4.5,
    tags: ["internal newsletter", "employee communications", "HR", "company news", "internal comms"],
    previewColor: "from-blue-500 to-indigo-600",
    formats: ["DOCX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("39"), pages: 4,
  },
  {
    id: "40",
    title: "Legal Contract & NDA — Word",
    description: "Protect your business and client relationships with these professionally drafted contract templates. Reviewed by a licensed attorney, this pack includes: a mutual NDA (non-disclosure agreement), a freelance services agreement, a SaaS subscription agreement, and a general partnership agreement — all in fully editable Microsoft Word format. Each document includes clearly labeled clause explanations, optional clauses for different scenarios, jurisdiction-neutral language adaptable to any country, and a signing page with witness fields. Used by 19,000+ freelancers, agencies, and startups.",
    category: "Word", tool: "Word", style: "Corporate",
    price: 1, downloads: 19870, rating: 4.8,
    tags: ["NDA", "contract template", "freelance agreement", "legal document", "SaaS agreement"],
    previewColor: "from-zinc-700 to-neutral-800",
    formats: ["DOCX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("40"), isNew: true, pages: 8,
  },
  {
    id: "41",
    title: "Executive Bio & Speaker Sheet — Word",
    description: "Build instant authority with a polished executive bio and speaker one-sheet that opens doors. This two-page Microsoft Word template includes a short-form bio (150 words, for event programs), a full executive biography (400 words, for press and media), a speaker topics overview with suggested talk titles, audience fit and key takeaways section, speaking credentials and past stages, client and media logos row, headshot and contact details page. Designed to be updated quarterly and emailed to event organizers, journalists, and podcast hosts. Trusted by CEOs, authors, and keynote speakers.",
    category: "Word", tool: "Word", style: "Elegant",
    price: 1, downloads: 8760, rating: 4.7,
    tags: ["executive bio", "speaker sheet", "thought leadership", "media kit", "keynote speaker"],
    previewColor: "from-amber-600 to-orange-700",
    formats: ["DOCX", "PDF"],
    downloadType: "file",
    downloadUrl: fileDownloadUrl("41"), pages: 2,
  },

  // ── Notion ────────────────────────────────────────────────
  {
    id: "42",
    title: "Startup OS — Notion",
    description: "Run your entire startup from one Notion workspace with this battle-tested Startup OS template. Built by founders who've scaled from 0 to $1M ARR, it includes: product roadmap with prioritization scoring, OKR tracker with check-in reminders, sprint planning board with story points, meeting notes database with action item extraction, hiring pipeline with candidate scorecards, investor CRM with update tracking, fundraising pipeline, customer discovery log, team wiki with onboarding guides, and company-wide metrics dashboard. 12 interconnected databases with 50+ pre-built views. Used by 34,000+ startup teams.",
    category: "Notion", tool: "Notion", style: "Modern",
    price: 1, downloads: 34560, rating: 4.9,
    tags: ["startup", "Notion OS", "OKR", "product roadmap", "investor CRM", "hiring pipeline"],
    previewColor: "from-slate-600 to-zinc-700",
    formats: ["Notion"],
    downloadType: "external",
    downloadUrl: "https://www.notion.so/templates", isTrending: true, pages: 12,
  },
  {
    id: "43",
    title: "Personal Life Dashboard — Notion",
    description: "Design your ideal life and actually execute on it with this comprehensive Notion life dashboard. Trusted by 61,000+ users, it includes: a morning routine and habit tracker with streak visualization, daily journal with structured prompts, weekly review template, quarterly goal planner with milestone tracking, reading and learning library, project and side hustle manager, financial snapshot linked to goals, gratitude and wins log, health and fitness tracker, relationship and social calendar, and a vision board with yearly themes. Everything interconnected — when you log a habit, your weekly review automatically captures it.",
    category: "Notion", tool: "Notion", style: "Minimal",
    price: 0, downloads: 61200, rating: 4.8,
    tags: ["life dashboard", "habit tracker", "Notion productivity", "goal planner", "journaling"],
    previewColor: "from-violet-600 to-purple-700",
    formats: ["Notion"],
    downloadType: "external",
    downloadUrl: "https://www.notion.so/templates", isTrending: true, pages: 8,
  },
  {
    id: "44",
    title: "Social Media Content Calendar — Notion",
    description: "Plan, create, and publish a month of social media content in a single afternoon with this Notion content calendar template. Built for solopreneurs, creators, and social media managers, it includes: a content pillar framework with 5 pillar slots, a master content database with platform, status, format, and publish-date fields, multi-view calendar (weekly, monthly, and kanban), post caption drafting area with hashtag storage, evergreen content library for repurposing, analytics logging section with performance notes, content inspiration inbox, and a bulk scheduling export view. Works for Instagram, LinkedIn, Twitter/X, TikTok, Pinterest, and YouTube.",
    category: "Notion", tool: "Notion", style: "Creative",
    price: 0, downloads: 48730, rating: 4.7,
    tags: ["content calendar", "social media planning", "creator", "content strategy", "scheduling"],
    previewColor: "from-pink-500 to-rose-600",
    formats: ["Notion"],
    downloadType: "external",
    downloadUrl: "https://www.notion.so/templates", isNew: true, pages: 5,
  },
  {
    id: "45",
    title: "Freelancer CRM & Invoicing — Notion",
    description: "Run a profitable freelance business without expensive software using this all-in-one Notion CRM and business management template. Includes: client database with relationship history and contact details, project tracker with deliverables, deadlines, and feedback logs, invoice generator with auto-calculated totals and tax support, income and expense tracker with monthly P&L view, proposal library with win-rate tracking, contract storage, onboarding checklist templates, client offboarding flow, testimonial collection tracker, and a capacity and availability planner. Trusted by 27,000+ freelancers across design, writing, development, and consulting.",
    category: "Notion", tool: "Notion", style: "Corporate",
    price: 1, downloads: 27890, rating: 4.8,
    tags: ["freelancer CRM", "invoicing", "client management", "freelance business", "project tracker"],
    previewColor: "from-emerald-600 to-teal-700",
    formats: ["Notion"],
    downloadType: "external",
    downloadUrl: "https://www.notion.so/templates", pages: 10,
  },
  {
    id: "46",
    title: "Company Knowledge Base — Notion",
    description: "Onboard new hires faster and eliminate repetitive questions with a structured company knowledge base in Notion. Built for growing teams of 5–500, it includes: company overview and values page, organizational chart with role descriptions, new employee onboarding checklist (days 1, 30, 60, 90), department wikis for product, engineering, marketing, sales, and ops, standard operating procedures (SOP) template library, meeting cadences and agendas, tech stack documentation, glossary of company terms, employee benefits guide, and an FAQ page updated from actual Slack questions. Organized for search and discoverability.",
    category: "Notion", tool: "Notion", style: "Corporate",
    price: 1, downloads: 18450, rating: 4.6,
    tags: ["knowledge base", "company wiki", "onboarding", "SOP templates", "internal docs"],
    previewColor: "from-blue-600 to-indigo-700",
    formats: ["Notion"],
    downloadType: "external",
    downloadUrl: "https://www.notion.so/templates", pages: 15,
  },

  // ── Google Docs ───────────────────────────────────────────
  {
    id: "47",
    title: "Creative Director Resume — Google Docs",
    description: "Win creative director, head of design, and brand lead roles with this visually distinctive Google Docs resume. Unlike generic resume templates, this two-column design establishes your aesthetic sensibility from the first glance while remaining fully ATS-compatible. Features a bold typographic header, curated portfolio link section, visual skills proficiency bars, tools and software section (with icons), selected accomplishments with impact metrics, brand and agency client list, and education with relevant courses. Used by creative professionals who went on to lead design at startups, agencies, and global brands.",
    category: "Google Docs", tool: "Google Docs", style: "Creative",
    price: 0, downloads: 38760, rating: 4.8,
    tags: ["creative resume", "design resume", "portfolio", "creative director", "brand manager"],
    previewColor: "from-cyan-500 to-teal-600",
    formats: ["Google Docs", "DOCX", "PDF"],
    downloadType: "external",
    downloadUrl: "https://docs.google.com", isTrending: true, pages: 2,
  },
  {
    id: "48",
    title: "Consulting Proposal — Google Docs",
    description: "Close consulting engagements faster with this high-converting Google Docs proposal template used by independent consultants and boutique firms. Structured around the Decision Cycle framework, it includes: executive summary that speaks to ROI, discovery findings restatement (showing thorough understanding), proposed engagement overview, detailed methodology with phase breakdown, deliverables matrix with formats and timelines, team credentials with relevant case studies, engagement investment with payment schedule options, ROI projection with conservative/base/optimistic scenarios, client reference list, and a clear next steps section. Shareable as a Google Doc link for easy signing and commenting.",
    category: "Google Docs", tool: "Google Docs", style: "Corporate",
    price: 1, downloads: 16540, rating: 4.7,
    tags: ["consulting proposal", "B2B proposal", "RFP", "management consulting", "professional services"],
    previewColor: "from-indigo-600 to-blue-700",
    formats: ["Google Docs", "PDF"],
    downloadType: "external",
    downloadUrl: "https://docs.google.com", pages: 7,
  },
  {
    id: "49",
    title: "Blog Post Template Pack — Google Docs",
    description: "Publish SEO-optimized, reader-friendly blog posts consistently with this structured Google Docs template pack. Includes 10 ready-to-fill templates for the highest-traffic content formats: the Ultimate Guide (comprehensive pillar post), numbered listicle, step-by-step how-to tutorial, expert interview post, case study with results, product comparison review, thought leadership opinion piece, data-driven research post, beginner's introduction explainer, and news commentary post. Each template includes SEO metadata fields (title, meta description, target keyword, internal link placeholders), a suggested headline formula, and a content outline with H2/H3 structure.",
    category: "Google Docs", tool: "Google Docs", style: "Minimal",
    price: 0, downloads: 29340, rating: 4.6,
    tags: ["blog template", "content writing", "SEO content", "copywriting", "content marketing"],
    previewColor: "from-amber-500 to-yellow-500",
    formats: ["Google Docs", "DOCX"],
    downloadType: "external",
    downloadUrl: "https://docs.google.com", isNew: true, pages: 3,
  },
  {
    id: "50",
    title: "Grant Proposal — Google Docs",
    description: "Secure funding for your nonprofit, research project, or community initiative with this professionally structured grant proposal Google Docs template. Written in alignment with the requirements of major US foundations (Gates Foundation, Ford Foundation, MacArthur) and government grant programs (NIH, NSF, NEA). Includes: cover page and table of contents, executive summary (500 words), organizational background and track record, needs assessment with data citations, project description with SMART objectives, implementation timeline with key milestones, evaluation plan and success metrics, sustainability strategy, detailed line-item budget with justifications, and appendix guidelines. Increases first-application approval rates for 68% of users.",
    category: "Google Docs", tool: "Google Docs", style: "Corporate",
    price: 1, downloads: 11230, rating: 4.7,
    tags: ["grant proposal", "nonprofit funding", "NIH grant", "research proposal", "foundation grant"],
    previewColor: "from-teal-600 to-green-700",
    formats: ["Google Docs", "DOCX", "PDF"],
    downloadType: "external",
    downloadUrl: "https://docs.google.com", pages: 10,
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
  free?: boolean
  search?: string
}): Template[] {
  return templates.filter(t => {
    if (opts.category && t.category !== opts.category) return false
    if (opts.style    && t.style    !== opts.style)    return false
    if (opts.free     && t.price    !== 0)             return false
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

export function priceLabel(price: number): string {
  return price === 0 ? "Free" : `$${price}`
}
