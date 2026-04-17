import PptxGenJS from "pptxgenjs";

// ---------------------------------------------------------------------------
// Tailwind color -> hex mapping
// ---------------------------------------------------------------------------
const TAILWIND_COLORS = {
  violet:  { 500: "8B5CF6", 600: "7C3AED" },
  indigo:  { 500: "6366F1", 600: "4F46E5" },
  blue:    { 500: "3B82F6", 600: "2563EB" },
  cyan:    { 500: "06B6D4", 600: "0891B2" },
  teal:    { 500: "14B8A6", 600: "0D9488" },
  emerald: { 500: "10B981", 600: "059669" },
  green:   { 500: "22C55E", 600: "16A34A" },
  amber:   { 500: "F59E0B", 600: "D97706" },
  yellow:  { 500: "EAB308", 600: "CA8A04" },
  orange:  { 500: "F97316", 600: "EA580C" },
  red:     { 500: "EF4444", 600: "DC2626" },
  pink:    { 500: "EC4899", 600: "DB2777" },
  rose:    { 500: "F43F5E", 600: "E11D48" },
  purple:  { 500: "A855F7", 600: "9333EA" },
  slate:   { 500: "64748B", 600: "475569" },
  zinc:    { 500: "71717A", 600: "52525B" },
  gray:    { 500: "6B7280", 600: "4B5563" },
};

/**
 * Extract a primary hex color from a Tailwind gradient class string.
 * e.g. "from-violet-600 to-indigo-600" -> "7C3AED"
 */
export function tailwindToHex(gradientClass) {
  if (!gradientClass) return "6366F1"; // default indigo-500

  // Try to find "from-<color>-<shade>" first, fall back to any "<color>-<shade>"
  const match =
    gradientClass.match(/from-(\w+)-(\d+)/) ||
    gradientClass.match(/(\w+)-(\d+)/);

  if (match) {
    const [, colorName, shade] = match;
    const palette = TAILWIND_COLORS[colorName];
    if (palette) {
      return palette[shade] || palette[600] || palette[500];
    }
  }
  return "6366F1";
}

/**
 * Darken a hex color by a given amount (0-1).
 */
function darken(hex, amount = 0.25) {
  const num = parseInt(hex, 16);
  const r = Math.max(0, Math.round(((num >> 16) & 0xff) * (1 - amount)));
  const g = Math.max(0, Math.round(((num >> 8) & 0xff) * (1 - amount)));
  const b = Math.max(0, Math.round((num & 0xff) * (1 - amount)));
  return [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
}

/**
 * Lighten a hex color by a given amount (0-1). Moves toward white.
 */
function lighten(hex, amount = 0.4) {
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.round(((num >> 16) & 0xff) + (255 - ((num >> 16) & 0xff)) * amount));
  const g = Math.min(255, Math.round(((num >> 8) & 0xff) + (255 - ((num >> 8) & 0xff)) * amount));
  const b = Math.min(255, Math.round((num & 0xff) + (255 - (num & 0xff)) * amount));
  return [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------
const FONT_TITLE = "Helvetica Neue";
const FONT_BODY = "Helvetica Neue";
const DARK_BG = "1E1E2E";
const DARK_SURFACE = "2A2A3C";
const DARK_TEXT = "E0E0E0";
const WHITE = "FFFFFF";
const LIGHT_GRAY = "F3F4F6";
const MED_GRAY = "6B7280";
const DARK_GRAY = "374151";

function addFooter(slide, text, color = MED_GRAY) {
  slide.addText(text, {
    x: 0.5,
    y: 6.9,
    w: 9,
    h: 0.4,
    fontSize: 9,
    fontFace: FONT_BODY,
    color,
    align: "left",
  });
}

// ---------------------------------------------------------------------------
// Variant 0: Hero / Title Presentation
// ---------------------------------------------------------------------------
function buildVariant0(pres, title, accent) {
  const accentLight = lighten(accent, 0.85);

  // Slide 1 -- Title
  const s1 = pres.addSlide();
  s1.background = { color: WHITE };
  s1.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 2.8, fill: { color: accent },
  });
  s1.addText(title, {
    x: 0.8, y: 0.6, w: 8.4, h: 1.2,
    fontSize: 36, fontFace: FONT_TITLE, bold: true, color: WHITE,
  });
  s1.addText("Strategic Overview & Key Insights", {
    x: 0.8, y: 1.8, w: 8.4, h: 0.7,
    fontSize: 18, fontFace: FONT_BODY, color: lighten(accent, 0.7),
  });
  s1.addText("Prepared by the Strategy Team  |  2026", {
    x: 0.8, y: 3.4, w: 8.4, h: 0.5,
    fontSize: 12, fontFace: FONT_BODY, color: MED_GRAY,
  });

  // Slide 2 -- Key Highlights (3 stat cards)
  const s2 = pres.addSlide();
  s2.background = { color: LIGHT_GRAY };
  s2.addText("Key Highlights", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 28, fontFace: FONT_TITLE, bold: true, color: DARK_GRAY,
  });
  const stats = [
    { value: "$4.2M", label: "Annual Revenue", delta: "+18% YoY" },
    { value: "12,400", label: "Active Customers", delta: "+2,100 this quarter" },
    { value: "97.5%", label: "Uptime SLA", delta: "Exceeds target" },
  ];
  stats.forEach((st, i) => {
    const cx = 0.5 + i * 3.1;
    s2.addShape(pres.ShapeType.roundRect, {
      x: cx, y: 1.4, w: 2.8, h: 2.6,
      fill: { color: WHITE }, shadow: { type: "outer", blur: 6, offset: 2, color: "C0C0C0" },
      rectRadius: 0.1,
    });
    s2.addText(st.value, {
      x: cx, y: 1.7, w: 2.8, h: 0.8,
      fontSize: 32, fontFace: FONT_TITLE, bold: true, color: accent, align: "center",
    });
    s2.addText(st.label, {
      x: cx, y: 2.5, w: 2.8, h: 0.5,
      fontSize: 14, fontFace: FONT_BODY, color: DARK_GRAY, align: "center",
    });
    s2.addText(st.delta, {
      x: cx, y: 3.1, w: 2.8, h: 0.4,
      fontSize: 11, fontFace: FONT_BODY, color: MED_GRAY, align: "center",
    });
  });
  addFooter(s2, title);

  // Slide 3 -- Overview bullets
  const s3 = pres.addSlide();
  s3.background = { color: WHITE };
  s3.addText("Overview", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 28, fontFace: FONT_TITLE, bold: true, color: DARK_GRAY,
  });
  s3.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 0.25, h: 4.5, fill: { color: accent },
  });
  const bullets = [
    "Expanded into three new markets across APAC and EMEA regions",
    "Launched next-generation platform with AI-powered analytics",
    "Achieved record customer retention rate of 94%",
    "Reduced operational costs by 22% through automation initiatives",
    "Established strategic partnerships with five Fortune 500 companies",
  ];
  bullets.forEach((b, i) => {
    s3.addText(b, {
      x: 1.2, y: 1.2 + i * 0.85, w: 8, h: 0.65,
      fontSize: 15, fontFace: FONT_BODY, color: DARK_GRAY, valign: "middle",
      bullet: { type: "number", numberStartAt: i + 1, color: accent },
    });
  });
  addFooter(s3, title);

  // Slide 4 -- Call to action
  const s4 = pres.addSlide();
  s4.background = { color: accent };
  s4.addText("Ready to Get Started?", {
    x: 1, y: 1.5, w: 8, h: 1.2,
    fontSize: 36, fontFace: FONT_TITLE, bold: true, color: WHITE, align: "center",
  });
  s4.addText(
    "Contact our team to schedule a personalized demo\nand discover how we can accelerate your growth.",
    {
      x: 1.5, y: 3.0, w: 7, h: 1.2,
      fontSize: 16, fontFace: FONT_BODY, color: lighten(accent, 0.7), align: "center",
      lineSpacingMultiple: 1.5,
    }
  );
  s4.addShape(pres.ShapeType.roundRect, {
    x: 3.5, y: 4.6, w: 3, h: 0.7,
    fill: { color: WHITE }, rectRadius: 0.35,
  });
  s4.addText("Get in Touch", {
    x: 3.5, y: 4.6, w: 3, h: 0.7,
    fontSize: 16, fontFace: FONT_TITLE, bold: true, color: accent, align: "center",
    valign: "middle",
  });
}

// ---------------------------------------------------------------------------
// Variant 1: Dark Analytics Dashboard
// ---------------------------------------------------------------------------
function buildVariant1(pres, title, accent) {
  // Slide 1 -- Title
  const s1 = pres.addSlide();
  s1.background = { color: DARK_BG };
  s1.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08, fill: { color: accent },
  });
  s1.addText(title, {
    x: 0.8, y: 2.0, w: 8.4, h: 1.2,
    fontSize: 36, fontFace: FONT_TITLE, bold: true, color: WHITE,
  });
  s1.addText("Analytics Dashboard  |  Q1 2026", {
    x: 0.8, y: 3.2, w: 8.4, h: 0.6,
    fontSize: 16, fontFace: FONT_BODY, color: MED_GRAY,
  });
  s1.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 4.1, w: 2, h: 0.05, fill: { color: accent },
  });

  // Slide 2 -- Revenue chart (bar chart)
  const s2 = pres.addSlide();
  s2.background = { color: DARK_BG };
  s2.addText("Revenue Performance", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 24, fontFace: FONT_TITLE, bold: true, color: WHITE,
  });
  s2.addChart(pres.charts.BAR, [
    {
      name: "Revenue ($K)",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      values: [420, 510, 480, 620, 710, 680],
    },
  ], {
    x: 0.5, y: 1.2, w: 9, h: 5.0,
    showTitle: false,
    showValue: true,
    valueFontSize: 10,
    valueFontColor: DARK_TEXT,
    catAxisLabelColor: MED_GRAY,
    catAxisLabelFontSize: 11,
    valAxisLabelColor: MED_GRAY,
    valAxisLabelFontSize: 10,
    chartColors: [accent],
    plotAreaFill: { color: DARK_SURFACE },
    catGridLine: { style: "none" },
    valGridLine: { color: "3A3A4C", size: 1 },
  });
  addFooter(s2, title, MED_GRAY);

  // Slide 3 -- KPI cards (4 metrics)
  const s3 = pres.addSlide();
  s3.background = { color: DARK_BG };
  s3.addText("Key Performance Indicators", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 24, fontFace: FONT_TITLE, bold: true, color: WHITE,
  });
  const kpis = [
    { value: "$3.4M", label: "Total Revenue", change: "+24%" },
    { value: "8,920", label: "New Users", change: "+18%" },
    { value: "64%", label: "Conversion Rate", change: "+5%" },
    { value: "2.4s", label: "Avg Load Time", change: "-31%" },
  ];
  kpis.forEach((k, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cx = 0.5 + col * 4.7;
    const cy = 1.3 + row * 2.6;
    s3.addShape(pres.ShapeType.roundRect, {
      x: cx, y: cy, w: 4.3, h: 2.2,
      fill: { color: DARK_SURFACE }, rectRadius: 0.1,
    });
    s3.addText(k.value, {
      x: cx + 0.4, y: cy + 0.3, w: 3.5, h: 0.8,
      fontSize: 30, fontFace: FONT_TITLE, bold: true, color: accent,
    });
    s3.addText(k.label, {
      x: cx + 0.4, y: cy + 1.1, w: 2.5, h: 0.4,
      fontSize: 13, fontFace: FONT_BODY, color: MED_GRAY,
    });
    s3.addText(k.change, {
      x: cx + 3.0, y: cy + 1.1, w: 1, h: 0.4,
      fontSize: 13, fontFace: FONT_BODY, bold: true,
      color: k.change.startsWith("-") ? "10B981" : "10B981",
      align: "right",
    });
  });
  addFooter(s3, title, MED_GRAY);

  // Slide 4 -- Summary
  const s4 = pres.addSlide();
  s4.background = { color: DARK_BG };
  s4.addText("Summary & Outlook", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 24, fontFace: FONT_TITLE, bold: true, color: WHITE,
  });
  const summaryItems = [
    "Revenue grew 24% quarter-over-quarter, exceeding projections by $400K",
    "User acquisition costs decreased 15% with improved targeting strategy",
    "Platform stability improved with 99.9% uptime across all services",
    "Projected Q2 growth of 18% based on current pipeline and momentum",
  ];
  summaryItems.forEach((item, i) => {
    s4.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: 1.3 + i * 1.3, w: 9, h: 1.0,
      fill: { color: DARK_SURFACE }, rectRadius: 0.08,
    });
    s4.addShape(pres.ShapeType.rect, {
      x: 0.5, y: 1.3 + i * 1.3, w: 0.08, h: 1.0, fill: { color: accent },
    });
    s4.addText(item, {
      x: 1.0, y: 1.3 + i * 1.3, w: 8.2, h: 1.0,
      fontSize: 14, fontFace: FONT_BODY, color: DARK_TEXT, valign: "middle",
    });
  });
  addFooter(s4, title, MED_GRAY);
}

// ---------------------------------------------------------------------------
// Variant 2: KPI Dashboard
// ---------------------------------------------------------------------------
function buildVariant2(pres, title, accent) {
  const accentDark = darken(accent, 0.2);
  const accentLight = lighten(accent, 0.8);

  // Slide 1 -- Title with gradient feel
  const s1 = pres.addSlide();
  s1.background = { color: accentDark };
  s1.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 7.5, fill: { color: accent, transparency: 40 },
  });
  s1.addText(title, {
    x: 0.8, y: 2.2, w: 8.4, h: 1.2,
    fontSize: 38, fontFace: FONT_TITLE, bold: true, color: WHITE,
  });
  s1.addText("KPI Dashboard  |  Performance Metrics", {
    x: 0.8, y: 3.4, w: 8.4, h: 0.6,
    fontSize: 16, fontFace: FONT_BODY, color: lighten(accent, 0.65),
  });

  // Slide 2 -- 4 KPI metric cards with progress indicators
  const s2 = pres.addSlide();
  s2.background = { color: LIGHT_GRAY };
  s2.addText("Performance Metrics", {
    x: 0.5, y: 0.2, w: 9, h: 0.7,
    fontSize: 26, fontFace: FONT_TITLE, bold: true, color: DARK_GRAY,
  });
  const metrics = [
    { value: "92%", label: "Customer Satisfaction", progress: 0.92 },
    { value: "78%", label: "Goal Completion", progress: 0.78 },
    { value: "85%", label: "Team Productivity", progress: 0.85 },
    { value: "96%", label: "System Reliability", progress: 0.96 },
  ];
  metrics.forEach((m, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cx = 0.5 + col * 4.7;
    const cy = 1.2 + row * 2.9;
    // Card background
    s2.addShape(pres.ShapeType.roundRect, {
      x: cx, y: cy, w: 4.3, h: 2.5,
      fill: { color: WHITE },
      shadow: { type: "outer", blur: 4, offset: 2, color: "D0D0D0" },
      rectRadius: 0.1,
    });
    s2.addText(m.value, {
      x: cx + 0.4, y: cy + 0.25, w: 3.5, h: 0.8,
      fontSize: 34, fontFace: FONT_TITLE, bold: true, color: accent,
    });
    s2.addText(m.label, {
      x: cx + 0.4, y: cy + 1.05, w: 3.5, h: 0.4,
      fontSize: 13, fontFace: FONT_BODY, color: MED_GRAY,
    });
    // Progress bar background
    s2.addShape(pres.ShapeType.roundRect, {
      x: cx + 0.4, y: cy + 1.7, w: 3.5, h: 0.25,
      fill: { color: LIGHT_GRAY }, rectRadius: 0.12,
    });
    // Progress bar fill
    s2.addShape(pres.ShapeType.roundRect, {
      x: cx + 0.4, y: cy + 1.7, w: 3.5 * m.progress, h: 0.25,
      fill: { color: accent }, rectRadius: 0.12,
    });
  });
  addFooter(s2, title);

  // Slide 3 -- Growth trends (line chart)
  const s3 = pres.addSlide();
  s3.background = { color: WHITE };
  s3.addText("Growth Trends", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 26, fontFace: FONT_TITLE, bold: true, color: DARK_GRAY,
  });
  s3.addChart(pres.charts.LINE, [
    {
      name: "Revenue",
      labels: ["Q1 '25", "Q2 '25", "Q3 '25", "Q4 '25", "Q1 '26"],
      values: [280, 340, 390, 460, 520],
    },
    {
      name: "Users (hundreds)",
      labels: ["Q1 '25", "Q2 '25", "Q3 '25", "Q4 '25", "Q1 '26"],
      values: [120, 180, 250, 310, 410],
    },
  ], {
    x: 0.5, y: 1.2, w: 9, h: 4.8,
    showTitle: false,
    lineSize: 3,
    showMarker: true,
    markerSize: 8,
    chartColors: [accent, lighten(accent, 0.4)],
    catAxisLabelColor: MED_GRAY,
    valAxisLabelColor: MED_GRAY,
    showLegend: true,
    legendPos: "b",
    legendFontSize: 11,
    valGridLine: { color: "E5E7EB", size: 1 },
    catGridLine: { style: "none" },
  });
  addFooter(s3, title);

  // Slide 4 -- Next steps
  const s4 = pres.addSlide();
  s4.background = { color: accentDark };
  s4.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 7.5, fill: { color: accent, transparency: 40 },
  });
  s4.addText("Next Steps", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 26, fontFace: FONT_TITLE, bold: true, color: WHITE,
  });
  const steps = [
    { num: "01", text: "Expand analytics coverage to all product lines and regional teams" },
    { num: "02", text: "Implement real-time alerting for KPI threshold breaches" },
    { num: "03", text: "Launch self-service dashboard builder for department leads" },
    { num: "04", text: "Integrate predictive modeling for Q3 and Q4 forecasting" },
  ];
  steps.forEach((s, i) => {
    s4.addShape(pres.ShapeType.roundRect, {
      x: 0.6, y: 1.4 + i * 1.35, w: 8.8, h: 1.1,
      fill: { color: WHITE, transparency: 10 }, rectRadius: 0.08,
    });
    s4.addText(s.num, {
      x: 0.8, y: 1.4 + i * 1.35, w: 0.8, h: 1.1,
      fontSize: 22, fontFace: FONT_TITLE, bold: true, color: WHITE,
      align: "center", valign: "middle",
    });
    s4.addText(s.text, {
      x: 1.7, y: 1.4 + i * 1.35, w: 7.5, h: 1.1,
      fontSize: 15, fontFace: FONT_BODY, color: lighten(accent, 0.75),
      valign: "middle",
    });
  });
}

// ---------------------------------------------------------------------------
// Variant 3: Split Layout
// ---------------------------------------------------------------------------
function buildVariant3(pres, title, accent) {
  const accentDark = darken(accent, 0.15);
  const panelW = 3.5;

  // Slide 1 -- Title (split)
  const s1 = pres.addSlide();
  s1.background = { color: WHITE };
  s1.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: panelW, h: 7.5, fill: { color: accent },
  });
  s1.addText(title.charAt(0).toUpperCase(), {
    x: 0, y: 1.5, w: panelW, h: 2.5,
    fontSize: 96, fontFace: FONT_TITLE, bold: true, color: WHITE,
    align: "center", transparency: 30,
  });
  s1.addText(title, {
    x: panelW + 0.5, y: 2.0, w: 10 - panelW - 1, h: 1.2,
    fontSize: 32, fontFace: FONT_TITLE, bold: true, color: DARK_GRAY,
  });
  s1.addText("A Modern Approach to Business Solutions", {
    x: panelW + 0.5, y: 3.3, w: 10 - panelW - 1, h: 0.6,
    fontSize: 14, fontFace: FONT_BODY, color: MED_GRAY,
  });

  // Slide 2 -- Feature comparison
  const s2 = pres.addSlide();
  s2.background = { color: WHITE };
  s2.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: panelW, h: 7.5, fill: { color: accent },
  });
  s2.addText("Feature\nComparison", {
    x: 0.3, y: 0.5, w: panelW - 0.6, h: 1.4,
    fontSize: 24, fontFace: FONT_TITLE, bold: true, color: WHITE,
    lineSpacingMultiple: 1.2,
  });
  const features = [
    { name: "Real-time Analytics", ours: true, others: false },
    { name: "Custom Dashboards", ours: true, others: true },
    { name: "AI-Powered Insights", ours: true, others: false },
    { name: "API Integration", ours: true, others: true },
    { name: "24/7 Support", ours: true, others: false },
    { name: "Data Export", ours: true, others: true },
  ];
  // Table header
  const contentX = panelW + 0.3;
  const contentW = 10 - panelW - 0.6;
  s2.addText("Feature", {
    x: contentX, y: 0.6, w: contentW * 0.55, h: 0.5,
    fontSize: 12, fontFace: FONT_BODY, bold: true, color: DARK_GRAY,
  });
  s2.addText("Ours", {
    x: contentX + contentW * 0.55, y: 0.6, w: contentW * 0.22, h: 0.5,
    fontSize: 12, fontFace: FONT_BODY, bold: true, color: accent, align: "center",
  });
  s2.addText("Others", {
    x: contentX + contentW * 0.77, y: 0.6, w: contentW * 0.23, h: 0.5,
    fontSize: 12, fontFace: FONT_BODY, bold: true, color: MED_GRAY, align: "center",
  });
  features.forEach((f, i) => {
    const ry = 1.2 + i * 0.85;
    if (i % 2 === 0) {
      s2.addShape(pres.ShapeType.rect, {
        x: contentX, y: ry, w: contentW, h: 0.85, fill: { color: LIGHT_GRAY },
      });
    }
    s2.addText(f.name, {
      x: contentX + 0.2, y: ry, w: contentW * 0.55 - 0.2, h: 0.85,
      fontSize: 13, fontFace: FONT_BODY, color: DARK_GRAY, valign: "middle",
    });
    s2.addText(f.ours ? "\u2713" : "\u2013", {
      x: contentX + contentW * 0.55, y: ry, w: contentW * 0.22, h: 0.85,
      fontSize: 16, fontFace: FONT_BODY, bold: true,
      color: f.ours ? "10B981" : "EF4444", align: "center", valign: "middle",
    });
    s2.addText(f.others ? "\u2713" : "\u2013", {
      x: contentX + contentW * 0.77, y: ry, w: contentW * 0.23, h: 0.85,
      fontSize: 16, fontFace: FONT_BODY, bold: true,
      color: f.others ? "10B981" : "EF4444", align: "center", valign: "middle",
    });
  });

  // Slide 3 -- Process flow (3 steps)
  const s3 = pres.addSlide();
  s3.background = { color: WHITE };
  s3.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: panelW, h: 7.5, fill: { color: accent },
  });
  s3.addText("Our\nProcess", {
    x: 0.3, y: 0.5, w: panelW - 0.6, h: 1.4,
    fontSize: 24, fontFace: FONT_TITLE, bold: true, color: WHITE,
    lineSpacingMultiple: 1.2,
  });
  const process = [
    { step: "01", title: "Discovery", desc: "Deep dive into your business needs, goals, and current challenges to build a tailored strategy." },
    { step: "02", title: "Implementation", desc: "Agile deployment with iterative feedback loops, ensuring alignment at every milestone." },
    { step: "03", title: "Optimization", desc: "Continuous monitoring and refinement to maximize ROI and drive sustained growth." },
  ];
  process.forEach((p, i) => {
    const cy = 1.0 + i * 2.1;
    // Step number circle
    s3.addShape(pres.ShapeType.ellipse, {
      x: contentX + 0.2, y: cy + 0.1, w: 0.7, h: 0.7, fill: { color: accent },
    });
    s3.addText(p.step, {
      x: contentX + 0.2, y: cy + 0.1, w: 0.7, h: 0.7,
      fontSize: 14, fontFace: FONT_TITLE, bold: true, color: WHITE,
      align: "center", valign: "middle",
    });
    s3.addText(p.title, {
      x: contentX + 1.2, y: cy, w: contentW - 1.4, h: 0.5,
      fontSize: 18, fontFace: FONT_TITLE, bold: true, color: DARK_GRAY,
    });
    s3.addText(p.desc, {
      x: contentX + 1.2, y: cy + 0.55, w: contentW - 1.4, h: 1.0,
      fontSize: 12, fontFace: FONT_BODY, color: MED_GRAY, lineSpacingMultiple: 1.3,
    });
    // Connecting line
    if (i < 2) {
      s3.addShape(pres.ShapeType.rect, {
        x: contentX + 0.52, y: cy + 0.85, w: 0.06, h: 1.25,
        fill: { color: lighten(accent, 0.6) },
      });
    }
  });

  // Slide 4 -- Contact / CTA
  const s4 = pres.addSlide();
  s4.background = { color: WHITE };
  s4.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: panelW, h: 7.5, fill: { color: accent },
  });
  s4.addText("Let's\nConnect", {
    x: 0.3, y: 2.0, w: panelW - 0.6, h: 2,
    fontSize: 36, fontFace: FONT_TITLE, bold: true, color: WHITE,
    lineSpacingMultiple: 1.1,
  });
  const contactItems = [
    { label: "Email", value: "hello@company.com" },
    { label: "Phone", value: "+1 (555) 123-4567" },
    { label: "Website", value: "www.company.com" },
    { label: "Address", value: "123 Innovation Drive, San Francisco, CA" },
  ];
  contactItems.forEach((c, i) => {
    s4.addText(c.label, {
      x: contentX + 0.3, y: 1.5 + i * 1.1, w: 2, h: 0.4,
      fontSize: 11, fontFace: FONT_BODY, bold: true, color: accent,
    });
    s4.addText(c.value, {
      x: contentX + 0.3, y: 1.9 + i * 1.1, w: contentW - 0.6, h: 0.5,
      fontSize: 15, fontFace: FONT_BODY, color: DARK_GRAY,
    });
  });
}

// ---------------------------------------------------------------------------
// Variant 4: Timeline / Roadmap
// ---------------------------------------------------------------------------
function buildVariant4(pres, title, accent) {
  const accentLight = lighten(accent, 0.5);

  // Slide 1 -- Title with roadmap title
  const s1 = pres.addSlide();
  s1.background = { color: DARK_BG };
  s1.addShape(pres.ShapeType.rect, {
    x: 0, y: 3.2, w: 10, h: 0.06, fill: { color: accent },
  });
  s1.addText(title, {
    x: 0.8, y: 1.4, w: 8.4, h: 1.2,
    fontSize: 36, fontFace: FONT_TITLE, bold: true, color: WHITE,
  });
  s1.addText("Product Roadmap 2026", {
    x: 0.8, y: 2.5, w: 8.4, h: 0.6,
    fontSize: 18, fontFace: FONT_BODY, color: accentLight,
  });
  s1.addText("Building the future, one quarter at a time", {
    x: 0.8, y: 3.8, w: 8.4, h: 0.5,
    fontSize: 13, fontFace: FONT_BODY, color: MED_GRAY,
  });

  // Slide 2 -- Q1-Q4 timeline with milestones
  const s2 = pres.addSlide();
  s2.background = { color: DARK_BG };
  s2.addText("2026 Roadmap", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 24, fontFace: FONT_TITLE, bold: true, color: WHITE,
  });
  // Timeline horizontal line
  s2.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.5, w: 9, h: 0.06, fill: { color: accent },
  });
  const quarters = [
    { q: "Q1", title: "Foundation", items: "Core platform\nredesign & API v2" },
    { q: "Q2", title: "Growth", items: "Mobile app launch\n& partner portal" },
    { q: "Q3", title: "Scale", items: "Enterprise tier\n& global CDN" },
    { q: "Q4", title: "Innovation", items: "AI features\n& marketplace" },
  ];
  quarters.forEach((qr, i) => {
    const cx = 0.7 + i * 2.3;
    // Milestone dot
    s2.addShape(pres.ShapeType.ellipse, {
      x: cx + 0.65, y: 3.25, w: 0.55, h: 0.55, fill: { color: accent },
    });
    s2.addText(qr.q, {
      x: cx + 0.65, y: 3.25, w: 0.55, h: 0.55,
      fontSize: 11, fontFace: FONT_TITLE, bold: true, color: WHITE,
      align: "center", valign: "middle",
    });
    // Label above
    s2.addText(qr.title, {
      x: cx, y: 2.0, w: 1.85, h: 0.5,
      fontSize: 16, fontFace: FONT_TITLE, bold: true, color: WHITE, align: "center",
    });
    // Items below
    s2.addShape(pres.ShapeType.roundRect, {
      x: cx, y: 4.2, w: 1.85, h: 1.5,
      fill: { color: DARK_SURFACE }, rectRadius: 0.08,
    });
    s2.addText(qr.items, {
      x: cx + 0.15, y: 4.3, w: 1.55, h: 1.3,
      fontSize: 11, fontFace: FONT_BODY, color: DARK_TEXT,
      lineSpacingMultiple: 1.4, valign: "top",
    });
  });
  addFooter(s2, title, MED_GRAY);

  // Slide 3 -- Phase details
  const s3 = pres.addSlide();
  s3.background = { color: DARK_BG };
  s3.addText("Phase Details", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 24, fontFace: FONT_TITLE, bold: true, color: WHITE,
  });
  const phases = [
    {
      name: "Phase 1: Research & Design",
      duration: "Jan - Mar 2026",
      details: "User research, competitive analysis, wireframes, design system update, and technical architecture review.",
    },
    {
      name: "Phase 2: Development & Testing",
      duration: "Apr - Aug 2026",
      details: "Iterative sprints with bi-weekly releases, automated testing pipeline, beta program with 200 users.",
    },
    {
      name: "Phase 3: Launch & Iterate",
      duration: "Sep - Dec 2026",
      details: "Phased rollout by region, performance monitoring, feedback collection, and rapid iteration cycles.",
    },
  ];
  phases.forEach((p, i) => {
    const cy = 1.2 + i * 1.9;
    s3.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: cy, w: 9, h: 1.6,
      fill: { color: DARK_SURFACE }, rectRadius: 0.08,
    });
    s3.addShape(pres.ShapeType.rect, {
      x: 0.5, y: cy, w: 0.08, h: 1.6, fill: { color: accent },
    });
    s3.addText(p.name, {
      x: 1.0, y: cy + 0.15, w: 5, h: 0.45,
      fontSize: 15, fontFace: FONT_TITLE, bold: true, color: WHITE,
    });
    s3.addText(p.duration, {
      x: 7.0, y: cy + 0.15, w: 2.3, h: 0.45,
      fontSize: 12, fontFace: FONT_BODY, color: accent, align: "right",
    });
    s3.addText(p.details, {
      x: 1.0, y: cy + 0.65, w: 8.2, h: 0.8,
      fontSize: 12, fontFace: FONT_BODY, color: MED_GRAY, lineSpacingMultiple: 1.4,
    });
  });
  addFooter(s3, title, MED_GRAY);

  // Slide 4 -- Team / Resources
  const s4 = pres.addSlide();
  s4.background = { color: DARK_BG };
  s4.addText("Team & Resources", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 24, fontFace: FONT_TITLE, bold: true, color: WHITE,
  });
  const team = [
    { role: "Product Lead", name: "Sarah Chen", focus: "Strategy & Roadmap" },
    { role: "Engineering", name: "8 Engineers", focus: "Platform & Infrastructure" },
    { role: "Design", name: "3 Designers", focus: "UX Research & UI" },
    { role: "QA", name: "2 QA Engineers", focus: "Testing & Automation" },
    { role: "DevOps", name: "2 SREs", focus: "Deployment & Monitoring" },
  ];
  team.forEach((t, i) => {
    const cy = 1.2 + i * 1.1;
    s4.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: cy, w: 9, h: 0.9,
      fill: { color: DARK_SURFACE }, rectRadius: 0.06,
    });
    // Role badge
    s4.addShape(pres.ShapeType.roundRect, {
      x: 0.7, y: cy + 0.2, w: 1.8, h: 0.5,
      fill: { color: accent }, rectRadius: 0.25,
    });
    s4.addText(t.role, {
      x: 0.7, y: cy + 0.2, w: 1.8, h: 0.5,
      fontSize: 10, fontFace: FONT_BODY, bold: true, color: WHITE,
      align: "center", valign: "middle",
    });
    s4.addText(t.name, {
      x: 2.8, y: cy, w: 3, h: 0.9,
      fontSize: 14, fontFace: FONT_TITLE, bold: true, color: WHITE, valign: "middle",
    });
    s4.addText(t.focus, {
      x: 5.8, y: cy, w: 3.5, h: 0.9,
      fontSize: 12, fontFace: FONT_BODY, color: MED_GRAY, align: "right", valign: "middle",
    });
  });
  addFooter(s4, title, MED_GRAY);
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
const builders = [buildVariant0, buildVariant1, buildVariant2, buildVariant3, buildVariant4];

/**
 * Generate a .pptx presentation and return it as a Buffer.
 *
 * @param {string} templateId  - Template identifier
 * @param {number} variant     - 0-4 theme variant
 * @param {string} title       - Presentation title
 * @param {string} previewColor - Tailwind gradient class, e.g. "from-violet-600 to-indigo-600"
 * @returns {Promise<Buffer>}  - The .pptx file as a Node buffer
 */
export async function generateSlide(templateId, variant, title, previewColor) {
  const accent = tailwindToHex(previewColor);
  const safeVariant = Math.max(0, Math.min(4, Number(variant) || 0));

  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_WIDE"; // 13.33" x 7.5"
  pres.author = "Slide Generator";
  pres.subject = templateId;
  pres.title = title;

  builders[safeVariant](pres, title, accent);

  const buffer = await pres.write({ outputType: "nodebuffer" });
  return buffer;
}
