import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  BorderStyle,
  WidthType,
  Header,
  Footer,
  PageNumber,
  PageBreak,
  Tab,
  TabStopType,
  TabStopPosition,
  convertInchesToTwip,
  ShadingType,
} from "docx";

// ---------------------------------------------------------------------------
// Tailwind gradient class -> primary hex color
// ---------------------------------------------------------------------------
const TAILWIND_COLOR_MAP = {
  slate:   { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" },
  gray:    { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" },
  zinc:    { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" },
  red:     { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" },
  orange:  { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" },
  amber:   { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" },
  yellow:  { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" },
  lime:    { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" },
  green:   { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" },
  emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" },
  teal:    { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" },
  cyan:    { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" },
  sky:     { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" },
  blue:    { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" },
  indigo:  { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4e" },
  violet:  { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" },
  purple:  { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" },
  fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" },
  pink:    { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" },
  rose:    { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" },
};

/**
 * Extract a primary hex color from a Tailwind gradient class string.
 * e.g. "from-blue-500 to-indigo-600" -> "#3b82f6"
 */
export function extractColorFromTailwind(gradientClass) {
  if (!gradientClass) return "#3b82f6"; // default blue
  // Match patterns like from-blue-500, via-red-400, to-emerald-600
  const match = gradientClass.match(/(?:from|via|to)-(\w+)-(\d+)/);
  if (match) {
    const [, colorName, shade] = match;
    const palette = TAILWIND_COLOR_MAP[colorName];
    if (palette && palette[shade]) return palette[shade];
  }
  return "#3b82f6";
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------
const PT = 2; // half-points per point in docx sizing

function heading(text, level, options = {}) {
  return new Paragraph({
    heading: level,
    alignment: options.center ? AlignmentType.CENTER : undefined,
    spacing: { after: 120, before: options.spaceBefore ?? 240 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: options.size ?? (level === HeadingLevel.HEADING_1 ? 28 * PT : 14 * PT),
        color: options.color,
        font: "Calibri",
      }),
    ],
  });
}

function body(text, options = {}) {
  return new Paragraph({
    alignment: options.center ? AlignmentType.CENTER : undefined,
    spacing: { after: options.after ?? 160, line: options.lineSpacing ?? 276 },
    indent: options.indent ? { left: convertInchesToTwip(options.indent) } : undefined,
    bullet: options.bullet ? { level: 0 } : undefined,
    children: [
      new TextRun({
        text,
        bold: options.bold ?? false,
        italics: options.italics ?? false,
        size: (options.size ?? 11) * PT,
        color: options.color,
        font: "Calibri",
      }),
    ],
  });
}

function spacer(height = 200) {
  return new Paragraph({ spacing: { after: height }, children: [] });
}

function hrRule(color = "999999") {
  return new Paragraph({
    spacing: { after: 120, before: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color } },
    children: [],
  });
}

function numberedParagraph(num, text, options = {}) {
  return new Paragraph({
    spacing: { after: 160, line: 276 },
    indent: { left: convertInchesToTwip(0.25) },
    children: [
      new TextRun({ text: `${num}. `, bold: true, size: 11 * PT, font: "Calibri", color: options.color }),
      new TextRun({ text, size: 11 * PT, font: "Calibri" }),
    ],
  });
}

// ---------------------------------------------------------------------------
// Variant 0: Resume
// ---------------------------------------------------------------------------
function buildResume(title, accent) {
  const children = [
    // Name
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [new TextRun({ text: title, bold: true, size: 28 * PT, color: accent, font: "Calibri" })],
    }),
    // Contact info
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
      children: [new TextRun({ text: "contact@email.com  |  (555) 123-4567  |  San Francisco, CA  |  linkedin.com/in/professional", size: 10 * PT, font: "Calibri", color: "555555" })],
    }),
    hrRule(accent),

    // EXPERIENCE
    heading("EXPERIENCE", HeadingLevel.HEADING_1, { color: accent, size: 16 * PT }),
    new Paragraph({
      spacing: { after: 40 },
      children: [
        new TextRun({ text: "Senior Software Engineer", bold: true, size: 12 * PT, font: "Calibri" }),
        new TextRun({ text: "  —  Acme Technologies", size: 12 * PT, font: "Calibri", color: "555555" }),
      ],
    }),
    body("January 2022 – Present  |  San Francisco, CA", { size: 10, color: "777777" }),
    body("Led the architecture and implementation of a microservices platform serving 2M+ daily active users, reducing average response times by 40%.", { bullet: true }),
    body("Mentored a team of 5 junior engineers and established code review best practices adopted across the engineering organization.", { bullet: true }),
    body("Designed and deployed CI/CD pipelines that cut release cycle time from 2 weeks to 2 days.", { bullet: true }),
    spacer(80),

    new Paragraph({
      spacing: { after: 40 },
      children: [
        new TextRun({ text: "Software Engineer", bold: true, size: 12 * PT, font: "Calibri" }),
        new TextRun({ text: "  —  Globex Corporation", size: 12 * PT, font: "Calibri", color: "555555" }),
      ],
    }),
    body("June 2019 – December 2021  |  New York, NY", { size: 10, color: "777777" }),
    body("Built real-time data analytics dashboards using React and D3.js, providing business stakeholders with actionable insights.", { bullet: true }),
    body("Optimized PostgreSQL queries that reduced report generation time by 65%, directly impacting quarterly planning workflows.", { bullet: true }),
    spacer(80),

    // EDUCATION
    heading("EDUCATION", HeadingLevel.HEADING_1, { color: accent, size: 16 * PT }),
    new Paragraph({
      spacing: { after: 40 },
      children: [
        new TextRun({ text: "Bachelor of Science in Computer Science", bold: true, size: 12 * PT, font: "Calibri" }),
      ],
    }),
    body("University of California, Berkeley  —  2015 – 2019", { size: 10, color: "555555" }),
    body("GPA: 3.8/4.0  |  Dean's List  |  Relevant coursework: Distributed Systems, Machine Learning, Database Systems"),
    spacer(80),

    // SKILLS
    heading("SKILLS", HeadingLevel.HEADING_1, { color: accent, size: 16 * PT }),
  ];

  // Skills in a table grid
  const skills = [
    ["JavaScript / TypeScript", "Python", "Go", "SQL"],
    ["React / Next.js", "Node.js", "Docker / K8s", "AWS / GCP"],
    ["System Design", "CI/CD", "GraphQL", "REST APIs"],
  ];

  children.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: {
        top: { style: BorderStyle.NONE },
        bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE },
        right: { style: BorderStyle.NONE },
        insideHorizontal: { style: BorderStyle.NONE },
        insideVertical: { style: BorderStyle.NONE },
      },
      rows: skills.map(
        (row) =>
          new TableRow({
            children: row.map(
              (skill) =>
                new TableCell({
                  width: { size: 25, type: WidthType.PERCENTAGE },
                  borders: {
                    top: { style: BorderStyle.NONE },
                    bottom: { style: BorderStyle.NONE },
                    left: { style: BorderStyle.NONE },
                    right: { style: BorderStyle.NONE },
                  },
                  children: [body(skill, { size: 10 })],
                })
            ),
          })
      ),
    })
  );

  return [{ properties: {}, children }];
}

// ---------------------------------------------------------------------------
// Variant 1: Business Letter
// ---------------------------------------------------------------------------
function buildBusinessLetter(title, accent) {
  const children = [
    // Letterhead
    new Paragraph({
      spacing: { after: 20 },
      children: [new TextRun({ text: "Meridian Consulting Group", bold: true, size: 18 * PT, color: accent, font: "Calibri" })],
    }),
    body("1200 Market Street, Suite 400", { size: 10, color: "555555", after: 20 }),
    body("San Francisco, CA 94103", { size: 10, color: "555555", after: 20 }),
    body("Tel: (415) 555-0198  |  info@meridianconsulting.com", { size: 10, color: "555555" }),
    hrRule(accent),
    spacer(100),

    // Date
    body("April 17, 2026"),
    spacer(100),

    // Recipient
    body("Ms. Sarah Chen"),
    body("Vice President of Operations"),
    body("Pinnacle Industries, Inc."),
    body("4500 Innovation Drive"),
    body("Austin, TX 78701"),
    spacer(100),

    // Salutation
    body("Dear Ms. Chen,"),
    spacer(60),

    // Body paragraphs
    body(`I am writing to formally present our proposal for the strategic consulting engagement we discussed during our meeting on April 10th. At Meridian Consulting Group, we have a proven track record of helping organizations like Pinnacle Industries streamline operations and achieve sustainable growth.`),
    body(`Based on our preliminary assessment, we have identified several key areas where our expertise can deliver measurable impact. Our team of specialists in operational efficiency, digital transformation, and change management is well-positioned to address the challenges outlined in your recent organizational review.`),
    body(`The enclosed proposal details our recommended three-phase approach, beginning with a comprehensive diagnostic assessment, followed by strategy development and implementation support. We estimate the total engagement will span approximately sixteen weeks, with clear milestones and deliverables at each stage.`),
    body(`We are confident that this partnership will yield significant returns for Pinnacle Industries. I would welcome the opportunity to discuss the proposal in greater detail at your earliest convenience. Please do not hesitate to contact me directly at (415) 555-0198 or via email.`),
    spacer(200),

    // Closing
    body("Sincerely,"),
    spacer(300),
    hrRule("CCCCCC"),
    body("James A. Whitfield", { bold: true }),
    body("Managing Director", { color: "555555", size: 10 }),
    body("Meridian Consulting Group", { color: "555555", size: 10 }),
  ];

  return [{ properties: {}, children }];
}

// ---------------------------------------------------------------------------
// Variant 2: Report with Data
// ---------------------------------------------------------------------------
function buildReport(title, accent) {
  // Title page
  const titlePage = {
    properties: {},
    children: [
      spacer(2000),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: title, bold: true, size: 36 * PT, color: accent, font: "Calibri" })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 120 },
        children: [new TextRun({ text: "Quarterly Performance Analysis", size: 16 * PT, color: "555555", font: "Calibri" })],
      }),
      spacer(400),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [new TextRun({ text: "Prepared by: Research & Analytics Division", size: 12 * PT, font: "Calibri" })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "April 17, 2026", size: 12 * PT, color: "777777", font: "Calibri" })],
      }),
      new Paragraph({ children: [new PageBreak()] }),
    ],
  };

  // Table of Contents
  const tocChildren = [
    heading("TABLE OF CONTENTS", HeadingLevel.HEADING_1, { color: accent, size: 18 * PT }),
    spacer(100),
    body("1.  Executive Summary ....................................... 3"),
    body("2.  Key Findings .................................................. 4"),
    body("3.  Data Analysis ................................................. 5"),
    body("4.  Conclusion ..................................................... 6"),
    new Paragraph({ children: [new PageBreak()] }),
  ];

  // Content sections
  const contentChildren = [
    heading("1. EXECUTIVE SUMMARY", HeadingLevel.HEADING_1, { color: accent, size: 18 * PT }),
    body("This report presents a comprehensive analysis of organizational performance across the first quarter of 2026. The findings are based on data collected from all operational divisions, encompassing revenue metrics, customer satisfaction indicators, and operational efficiency benchmarks."),
    body("Overall, the organization demonstrated strong growth in key performance areas, with total revenue increasing by 18.3% compared to the same period last year. Customer retention rates improved to 94.2%, while operational costs were reduced by 7.1% through targeted efficiency initiatives."),
    body("The following sections detail the specific findings, supported by quantitative data and actionable recommendations for the upcoming quarter."),
    spacer(100),

    heading("2. KEY FINDINGS", HeadingLevel.HEADING_1, { color: accent, size: 18 * PT }),
    numberedParagraph(1, "Revenue growth exceeded projections by 4.7 percentage points, driven primarily by expansion in the enterprise segment, which contributed an additional $2.3M in recurring revenue.", { color: accent }),
    numberedParagraph(2, "Customer acquisition cost (CAC) decreased by 12% while lifetime value (LTV) increased by 8%, resulting in a significantly improved LTV:CAC ratio of 4.2:1.", { color: accent }),
    numberedParagraph(3, "Employee productivity metrics improved across all departments, with the engineering division showing a 23% increase in sprint velocity and a 15% reduction in cycle time.", { color: accent }),
    numberedParagraph(4, "The new digital onboarding process reduced average customer setup time from 14 days to 3 days, contributing to a 31% improvement in early-stage customer satisfaction scores.", { color: accent }),
    numberedParagraph(5, "Infrastructure costs were optimized through cloud resource right-sizing, achieving $180K in annual savings without impacting system performance or reliability.", { color: accent }),
    spacer(100),

    heading("3. DATA ANALYSIS", HeadingLevel.HEADING_1, { color: accent, size: 18 * PT }),
    body("The following table summarizes key metrics across divisions for Q1 2026:"),
    spacer(60),
  ];

  // Data table
  const tableHeaders = ["Division", "Revenue ($M)", "Growth (%)", "Satisfaction"];
  const tableData = [
    ["Enterprise Sales", "8.4", "22.1", "4.7 / 5.0"],
    ["SMB Sales", "3.2", "14.5", "4.3 / 5.0"],
    ["Professional Services", "2.1", "18.7", "4.8 / 5.0"],
    ["Product & Engineering", "1.8", "11.2", "4.5 / 5.0"],
    ["Customer Success", "0.9", "26.3", "4.9 / 5.0"],
  ];

  const headerRow = new TableRow({
    tableHeader: true,
    children: tableHeaders.map(
      (h) =>
        new TableCell({
          width: { size: 25, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.SOLID, color: accent },
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: h, bold: true, size: 10 * PT, color: "FFFFFF", font: "Calibri" })],
          })],
        })
    ),
  });

  const dataRows = tableData.map(
    (row, i) =>
      new TableRow({
        children: row.map(
          (cell) =>
            new TableCell({
              width: { size: 25, type: WidthType.PERCENTAGE },
              shading: i % 2 === 0 ? { type: ShadingType.SOLID, color: "F5F5F5" } : undefined,
              children: [new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: cell, size: 10 * PT, font: "Calibri" })],
              })],
            })
        ),
      })
  );

  contentChildren.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [headerRow, ...dataRows],
    })
  );

  contentChildren.push(
    spacer(200),
    heading("4. CONCLUSION", HeadingLevel.HEADING_1, { color: accent, size: 18 * PT }),
    body("The first quarter results demonstrate that the strategic initiatives implemented at the beginning of the fiscal year are yielding measurable improvements across all key performance indicators. The combination of revenue growth, cost optimization, and improved customer metrics positions the organization well for continued success."),
    body("Moving forward, we recommend increasing investment in the enterprise sales channel, which has shown the highest growth trajectory, while continuing to refine operational processes in the SMB segment. Additionally, the successful digital onboarding program should be expanded to cover the full customer lifecycle."),
  );

  // Footer with page numbers
  const footer = new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: "Page ", size: 9 * PT, color: "999999", font: "Calibri" }),
          new TextRun({ children: [PageNumber.CURRENT], size: 9 * PT, color: "999999", font: "Calibri" }),
          new TextRun({ text: " of ", size: 9 * PT, color: "999999", font: "Calibri" }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 9 * PT, color: "999999", font: "Calibri" }),
        ],
      }),
    ],
  });

  return [
    titlePage,
    { properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } }, headers: {}, footers: { default: footer }, children: [...tocChildren, ...contentChildren] },
  ];
}

// ---------------------------------------------------------------------------
// Variant 3: Contract / Legal Document
// ---------------------------------------------------------------------------
function buildContract(title, accent) {
  const children = [
    spacer(400),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [new TextRun({ text: "AGREEMENT", bold: true, size: 28 * PT, font: "Calibri", color: accent })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
      children: [new TextRun({ text: title, size: 14 * PT, font: "Calibri", color: "555555" })],
    }),
    hrRule(accent),
    spacer(100),

    // Preamble
    body("This Agreement (\"Agreement\") is entered into as of April 17, 2026 (the \"Effective Date\"), by and between Meridian Technologies, Inc., a Delaware corporation with its principal place of business at 1200 Market Street, San Francisco, CA 94103 (hereinafter referred to as \"Company\"), and Vertex Solutions LLC, a California limited liability company with its principal place of business at 800 Innovation Blvd, Palo Alto, CA 94301 (hereinafter referred to as \"Contractor\")."),
    body("WHEREAS, the Company desires to engage the Contractor to provide certain professional services; and WHEREAS, the Contractor possesses the requisite skills and expertise to perform such services; NOW, THEREFORE, in consideration of the mutual covenants and agreements herein contained, the parties agree as follows:", { italics: true }),
    spacer(100),

    // Article 1
    heading("Article 1 — Definitions", HeadingLevel.HEADING_2, { color: accent, size: 14 * PT }),
    body("1.1  \"Services\" shall mean all professional consulting, development, and advisory services to be provided by the Contractor as described in Exhibit A attached hereto and incorporated by reference.", { indent: 0.25 }),
    body("1.2  \"Deliverables\" shall mean all work product, reports, documentation, software, and other tangible materials produced by the Contractor in the performance of the Services.", { indent: 0.25 }),
    body("1.3  \"Confidential Information\" shall mean any and all non-public information, trade secrets, proprietary data, and business intelligence disclosed by either party to the other in connection with this Agreement.", { indent: 0.25 }),
    spacer(60),

    // Article 2
    heading("Article 2 — Scope of Work", HeadingLevel.HEADING_2, { color: accent, size: 14 * PT }),
    body("2.1  The Contractor shall perform the Services in accordance with the specifications set forth in Exhibit A, adhering to industry best practices and professional standards applicable to such work.", { indent: 0.25 }),
    body("2.2  The Contractor shall dedicate sufficient personnel, resources, and time to ensure timely and satisfactory completion of all Deliverables within the agreed-upon timeline.", { indent: 0.25 }),
    body("2.3  Any changes to the scope of work shall be documented in a written amendment signed by authorized representatives of both parties.", { indent: 0.25 }),
    spacer(60),

    // Article 3
    heading("Article 3 — Compensation", HeadingLevel.HEADING_2, { color: accent, size: 14 * PT }),
    body("3.1  In consideration for the Services rendered, the Company shall pay the Contractor a total fee of Two Hundred Fifty Thousand Dollars ($250,000.00), payable in accordance with the payment schedule outlined in Exhibit B.", { indent: 0.25 }),
    body("3.2  The Contractor shall submit itemized invoices on a monthly basis. Payment shall be due within thirty (30) days of receipt of each invoice.", { indent: 0.25 }),
    body("3.3  The Company shall reimburse the Contractor for pre-approved, reasonable, and documented out-of-pocket expenses incurred in the direct performance of the Services.", { indent: 0.25 }),
    spacer(60),

    // Article 4
    heading("Article 4 — Term and Termination", HeadingLevel.HEADING_2, { color: accent, size: 14 * PT }),
    body("4.1  This Agreement shall commence on the Effective Date and shall continue for a period of twelve (12) months, unless earlier terminated in accordance with this Article.", { indent: 0.25 }),
    body("4.2  Either party may terminate this Agreement for cause upon thirty (30) days' written notice if the other party materially breaches any provision and fails to cure such breach within the notice period.", { indent: 0.25 }),
    body("4.3  Upon termination, the Contractor shall deliver all completed and in-progress Deliverables to the Company, and the Company shall pay for all Services satisfactorily rendered through the date of termination.", { indent: 0.25 }),
    spacer(60),

    // Article 5
    heading("Article 5 — Confidentiality", HeadingLevel.HEADING_2, { color: accent, size: 14 * PT }),
    body("5.1  Each party agrees to hold all Confidential Information in strict confidence and not to disclose such information to any third party without the prior written consent of the disclosing party.", { indent: 0.25 }),
    body("5.2  The obligations of confidentiality shall survive the expiration or termination of this Agreement for a period of three (3) years.", { indent: 0.25 }),
    body("5.3  Confidential Information shall not include information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was known to the receiving party prior to disclosure; or (c) is independently developed without use of the Confidential Information.", { indent: 0.25 }),
    spacer(200),

    // Signature block
    hrRule(accent),
    spacer(100),
    body("IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date first written above.", { bold: true }),
    spacer(200),

    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: {
        top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
        insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE },
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 45, type: WidthType.PERCENTAGE },
              borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
              children: [
                body("_______________________________"),
                body("Authorized Signatory", { size: 10, color: "777777" }),
                body("Meridian Technologies, Inc.", { bold: true, size: 10 }),
                body("Name: ________________________", { size: 10 }),
                body("Title: ________________________", { size: 10 }),
                body("Date: ________________________", { size: 10 }),
              ],
            }),
            new TableCell({
              width: { size: 10, type: WidthType.PERCENTAGE },
              borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
              children: [spacer(10)],
            }),
            new TableCell({
              width: { size: 45, type: WidthType.PERCENTAGE },
              borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
              children: [
                body("_______________________________"),
                body("Authorized Signatory", { size: 10, color: "777777" }),
                body("Vertex Solutions LLC", { bold: true, size: 10 }),
                body("Name: ________________________", { size: 10 }),
                body("Title: ________________________", { size: 10 }),
                body("Date: ________________________", { size: 10 }),
              ],
            }),
          ],
        }),
      ],
    }),
  ];

  return [{ properties: {}, children }];
}

// ---------------------------------------------------------------------------
// Variant 4: Newsletter
// ---------------------------------------------------------------------------
function buildNewsletter(title, accent) {
  const children = [
    // Header
    new Paragraph({
      spacing: { after: 40 },
      children: [new TextRun({ text: title, bold: true, size: 32 * PT, color: accent, font: "Calibri" })],
    }),
    new Paragraph({
      spacing: { after: 20 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: accent } },
      children: [],
    }),
    new Paragraph({
      spacing: { after: 200 },
      children: [new TextRun({ text: "Volume 12, Issue 4  |  April 2026  |  Monthly Edition", size: 10 * PT, color: "777777", font: "Calibri" })],
    }),

    // Lead article
    heading("Transforming the Future of Remote Collaboration", HeadingLevel.HEADING_1, { color: accent, size: 18 * PT }),
    body("The landscape of remote work continues to evolve at an unprecedented pace, with new technologies reshaping how teams communicate, collaborate, and deliver results. This month, we explore the latest innovations that are bridging the gap between in-person and distributed work environments, from AI-powered meeting assistants to immersive virtual workspaces."),
    body("Industry analysts predict that by 2028, over 70% of knowledge workers will operate in hybrid or fully remote arrangements. Organizations that invest in the right tools and cultural frameworks today will be best positioned to attract top talent and maintain competitive advantage in an increasingly digital-first world."),
    spacer(100),

    // Featured callout box
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 100, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.SOLID, color: "F8F9FA" },
              borders: {
                top: { style: BorderStyle.SINGLE, size: 2, color: accent },
                bottom: { style: BorderStyle.SINGLE, size: 2, color: accent },
                left: { style: BorderStyle.SINGLE, size: 8, color: accent },
                right: { style: BorderStyle.SINGLE, size: 2, color: accent },
              },
              children: [
                new Paragraph({
                  spacing: { after: 80, before: 80 },
                  children: [new TextRun({ text: "FEATURED", bold: true, size: 12 * PT, color: accent, font: "Calibri" })],
                }),
                new Paragraph({
                  spacing: { after: 60 },
                  children: [new TextRun({ text: "\"The companies that will thrive in the next decade are those that treat distributed work not as a compromise, but as a competitive advantage.\"", italics: true, size: 11 * PT, font: "Calibri" })],
                }),
                new Paragraph({
                  spacing: { after: 80 },
                  children: [new TextRun({ text: "— Dr. Elena Vasquez, Future of Work Institute", size: 10 * PT, color: "555555", font: "Calibri" })],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    spacer(200),

    // Secondary article
    heading("Five Strategies for Building High-Performance Distributed Teams", HeadingLevel.HEADING_2, { color: accent, size: 14 * PT }),
    body("As organizations scale their remote operations, leaders are discovering that successful distributed teams require more than just technology — they demand intentional design. Here are five research-backed strategies that top-performing companies are using to build cohesive and productive remote teams:"),
    spacer(40),
    body("Establish clear communication protocols that define when to use synchronous vs. asynchronous channels. Over-communication is the antidote to the ambiguity that remote work can create.", { bullet: true }),
    body("Invest in regular virtual team-building activities that go beyond work discussions. Research shows that teams with strong social bonds are 50% more productive.", { bullet: true }),
    body("Create comprehensive documentation cultures where knowledge is shared openly and decisions are recorded for future reference.", { bullet: true }),
    body("Implement outcome-based performance metrics rather than activity-based tracking. Trust your team members to manage their time effectively.", { bullet: true }),
    body("Schedule periodic in-person gatherings for strategic planning and relationship building, even if day-to-day work is fully remote.", { bullet: true }),
    spacer(200),

    // Footer
    hrRule(accent),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40, before: 80 },
      children: [
        new TextRun({ text: title, bold: true, size: 10 * PT, color: accent, font: "Calibri" }),
        new TextRun({ text: "  |  Published by Meridian Media Group", size: 9 * PT, color: "777777", font: "Calibri" }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [new TextRun({ text: "newsletter@meridianmedia.com  |  (800) 555-0142  |  www.meridianmedia.com", size: 9 * PT, color: "999999", font: "Calibri" })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "To unsubscribe, reply with UNSUBSCRIBE in the subject line.", size: 8 * PT, color: "AAAAAA", font: "Calibri" })],
    }),
  ];

  return [{ properties: {}, children }];
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
const BUILDERS = [buildResume, buildBusinessLetter, buildReport, buildContract, buildNewsletter];

/**
 * Generate a .docx document buffer.
 * @param {string} templateId
 * @param {number} variant  0-4
 * @param {string} title
 * @param {string} previewColor  Tailwind gradient class
 * @returns {Promise<Buffer>}
 */
export async function generateDocument(templateId, variant, title, previewColor) {
  const accent = extractColorFromTailwind(previewColor).replace("#", "");
  const safeVariant = Math.max(0, Math.min(4, variant ?? 0));
  const builder = BUILDERS[safeVariant];
  const sections = builder(title, accent);

  const doc = new Document({
    creator: "Document Generator",
    title,
    description: `Generated document for template ${templateId}`,
    styles: {
      default: {
        document: {
          run: { font: "Calibri", size: 11 * PT },
          paragraph: { spacing: { line: 276 } },
        },
      },
    },
    sections,
  });

  return Packer.toBuffer(doc);
}
