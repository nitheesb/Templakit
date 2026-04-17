/**
 * Excel (.xlsx) spreadsheet generator using ExcelJS.
 *
 * Produces professional-looking workbooks with 2-4 sheets of realistic
 * sample data.  Variant (0-4) selects the spreadsheet type.
 */

import ExcelJS from "exceljs"

// ---------------------------------------------------------------------------
// Tailwind gradient class -> hex color utility
// ---------------------------------------------------------------------------

const TAILWIND_HEX_MAP = {
  red: "#ef4444",
  orange: "#f97316",
  amber: "#f59e0b",
  yellow: "#eab308",
  lime: "#84cc16",
  green: "#22c55e",
  emerald: "#10b981",
  teal: "#14b8a6",
  cyan: "#06b6d4",
  sky: "#0ea5e9",
  blue: "#3b82f6",
  indigo: "#6366f1",
  violet: "#8b5cf6",
  purple: "#a855f7",
  fuchsia: "#d946ef",
  pink: "#ec4899",
  rose: "#f43f5e",
  slate: "#64748b",
  gray: "#6b7280",
  zinc: "#71717a",
  neutral: "#737373",
  stone: "#78716c",
}

const EXCEL_GREEN = "107c41"

/**
 * Extract a hex color (without #) from a Tailwind gradient class string.
 * Falls back to Excel green.
 */
function accentFromTailwind(tw) {
  if (!tw) return EXCEL_GREEN
  for (const [name, hex] of Object.entries(TAILWIND_HEX_MAP)) {
    if (tw.includes(name)) return hex.replace("#", "")
  }
  return EXCEL_GREEN
}

// ---------------------------------------------------------------------------
// Shared style helpers
// ---------------------------------------------------------------------------

function headerFill(hex = EXCEL_GREEN) {
  return { type: "pattern", pattern: "solid", fgColor: { argb: `FF${hex}` } }
}

const WHITE_FONT = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 }
const BOLD_FONT = { bold: true, size: 11 }
const TITLE_FONT = { bold: true, size: 14 }

const THIN_BORDER = {
  top: { style: "thin", color: { argb: "FFD0D0D0" } },
  bottom: { style: "thin", color: { argb: "FFD0D0D0" } },
  left: { style: "thin", color: { argb: "FFD0D0D0" } },
  right: { style: "thin", color: { argb: "FFD0D0D0" } },
}

const ALT_ROW_FILL = {
  type: "pattern",
  pattern: "solid",
  fgColor: { argb: "FFF2F2F2" },
}

const CURRENCY_FMT = '"$"#,##0.00'
const PERCENT_FMT = "0.0%"
const NUMBER_FMT = "#,##0"
const DATE_FMT = "yyyy-mm-dd"

function styleHeaderRow(row, colCount, fill) {
  row.font = WHITE_FONT
  row.height = 24
  for (let c = 1; c <= colCount; c++) {
    const cell = row.getCell(c)
    cell.fill = fill
    cell.font = WHITE_FONT
    cell.border = THIN_BORDER
    cell.alignment = { vertical: "middle", horizontal: "center" }
  }
}

function styleDataRows(ws, startRow, endRow, colCount) {
  for (let r = startRow; r <= endRow; r++) {
    const row = ws.getRow(r)
    for (let c = 1; c <= colCount; c++) {
      const cell = row.getCell(c)
      cell.border = THIN_BORDER
      cell.alignment = { vertical: "middle" }
    }
    if ((r - startRow) % 2 === 1) {
      for (let c = 1; c <= colCount; c++) {
        row.getCell(c).fill = ALT_ROW_FILL
      }
    }
  }
}

function addTitleRow(ws, title, colSpan) {
  const row = ws.addRow([title])
  row.getCell(1).font = TITLE_FONT
  ws.mergeCells(row.number, 1, row.number, colSpan)
  ws.addRow([])
}

function statusFill(status) {
  const map = {
    done: "FF22c55e",
    "in progress": "FF3b82f6",
    pending: "FFeab308",
    "not started": "FFd4d4d4",
  }
  return {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: map[status?.toLowerCase()] || "FFd4d4d4" },
  }
}

function stockFill(qty) {
  if (qty > 50) return { type: "pattern", pattern: "solid", fgColor: { argb: "FF22c55e" } }
  if (qty >= 20) return { type: "pattern", pattern: "solid", fgColor: { argb: "FFeab308" } }
  return { type: "pattern", pattern: "solid", fgColor: { argb: "FFef4444" } }
}

// ---------------------------------------------------------------------------
// Variant 0 - Dashboard with Charts
// ---------------------------------------------------------------------------

function buildDashboard(wb, accent) {
  const fill = headerFill(accent)

  // -- Dashboard sheet --
  const ds = wb.addWorksheet("Dashboard")
  ds.columns = [
    { width: 16 }, { width: 16 }, { width: 16 }, { width: 16 }, { width: 16 },
  ]

  addTitleRow(ds, "Executive Dashboard", 5)

  // Summary stats
  const statsHeader = ds.addRow(["Total Revenue", "Total Expenses", "Net Profit", "Avg Monthly", "Growth"])
  styleHeaderRow(statsHeader, 5, fill)
  const statsRow = ds.addRow([284600, 196420, 88180, 23717, 0.124])
  statsRow.getCell(1).numFmt = CURRENCY_FMT
  statsRow.getCell(2).numFmt = CURRENCY_FMT
  statsRow.getCell(3).numFmt = CURRENCY_FMT
  statsRow.getCell(4).numFmt = CURRENCY_FMT
  statsRow.getCell(5).numFmt = PERCENT_FMT
  for (let c = 1; c <= 5; c++) {
    statsRow.getCell(c).font = BOLD_FONT
    statsRow.getCell(c).border = THIN_BORDER
  }

  ds.addRow([])

  // Data table
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"]
  const revenues = [21500, 23100, 19800, 26400, 24300, 28100, 25600, 27800, 30200, 27500]
  const expenses = [15200, 16800, 14900, 18200, 17100, 19600, 18400, 19800, 21300, 18700]

  const tableHeader = ds.addRow(["Month", "Revenue", "Expenses", "Profit", "Margin"])
  styleHeaderRow(tableHeader, 5, fill)
  const dataStart = tableHeader.number + 1

  months.forEach((m, i) => {
    const profit = revenues[i] - expenses[i]
    const margin = profit / revenues[i]
    const row = ds.addRow([m, revenues[i], expenses[i], profit, margin])
    row.getCell(2).numFmt = CURRENCY_FMT
    row.getCell(3).numFmt = CURRENCY_FMT
    row.getCell(4).numFmt = CURRENCY_FMT
    row.getCell(5).numFmt = PERCENT_FMT
  })
  styleDataRows(ds, dataStart, dataStart + months.length - 1, 5)

  // -- Data sheet --
  const data = wb.addWorksheet("Data")
  data.columns = [
    { width: 14 }, { width: 14 }, { width: 14 }, { width: 14 }, { width: 14 }, { width: 14 },
  ]
  const dh = data.addRow(["Date", "Category", "Amount", "Type", "Region", "Notes"])
  styleHeaderRow(dh, 6, fill)
  const categories = ["Sales", "Services", "Licensing", "Support", "Consulting"]
  const regions = ["North", "South", "East", "West"]
  const rawStart = dh.number + 1
  for (let i = 0; i < 20; i++) {
    const d = new Date(2026, 0, 1 + i * 5)
    data.addRow([
      d, categories[i % 5], 1200 + i * 340, i % 3 === 0 ? "Expense" : "Revenue",
      regions[i % 4], `Transaction ${i + 1}`,
    ])
  }
  for (let i = rawStart; i < rawStart + 20; i++) {
    data.getRow(i).getCell(1).numFmt = DATE_FMT
    data.getRow(i).getCell(3).numFmt = CURRENCY_FMT
  }
  styleDataRows(data, rawStart, rawStart + 19, 6)

  // -- Charts sheet --
  const charts = wb.addWorksheet("Charts")
  charts.columns = [{ width: 16 }, { width: 16 }, { width: 16 }, { width: 16 }]
  addTitleRow(charts, "Chart Data Series", 4)
  const ch = charts.addRow(["Month", "Revenue", "Expenses", "Profit"])
  styleHeaderRow(ch, 4, fill)
  const chStart = ch.number + 1
  months.forEach((m, i) => {
    charts.addRow([m, revenues[i], expenses[i], revenues[i] - expenses[i]])
  })
  for (let i = chStart; i < chStart + months.length; i++) {
    for (let c = 2; c <= 4; c++) charts.getRow(i).getCell(c).numFmt = CURRENCY_FMT
  }
  styleDataRows(charts, chStart, chStart + months.length - 1, 4)

  // -- Summary sheet --
  const summary = wb.addWorksheet("Summary")
  summary.columns = [{ width: 22 }, { width: 18 }]
  addTitleRow(summary, "Performance Summary", 2)
  const sh = summary.addRow(["Metric", "Value"])
  styleHeaderRow(sh, 2, fill)
  const totalRev = revenues.reduce((a, b) => a + b, 0)
  const totalExp = expenses.reduce((a, b) => a + b, 0)
  const summaryData = [
    ["Total Revenue", totalRev],
    ["Total Expenses", totalExp],
    ["Net Profit", totalRev - totalExp],
    ["Average Revenue", totalRev / months.length],
    ["Average Expenses", totalExp / months.length],
    ["Best Month Revenue", Math.max(...revenues)],
    ["Worst Month Revenue", Math.min(...revenues)],
    ["Profit Margin", (totalRev - totalExp) / totalRev],
  ]
  const smStart = sh.number + 1
  summaryData.forEach(([label, val]) => {
    const row = summary.addRow([label, val])
    row.getCell(1).font = BOLD_FONT
    if (typeof val === "number" && val < 1) row.getCell(2).numFmt = PERCENT_FMT
    else row.getCell(2).numFmt = CURRENCY_FMT
  })
  styleDataRows(summary, smStart, smStart + summaryData.length - 1, 2)
}

// ---------------------------------------------------------------------------
// Variant 1 - Budget Tracker
// ---------------------------------------------------------------------------

function buildBudgetTracker(wb, accent) {
  const fill = headerFill(accent)

  // -- Budget sheet --
  const bs = wb.addWorksheet("Budget")
  bs.columns = [
    { width: 20 }, { width: 16 }, { width: 16 }, { width: 16 }, { width: 12 },
  ]
  addTitleRow(bs, "Monthly Budget Overview", 5)
  const bh = bs.addRow(["Category", "Budget", "Spent", "Remaining", "%"])
  styleHeaderRow(bh, 5, fill)

  const budgetData = [
    ["Housing", 2000, 1950],
    ["Food & Dining", 800, 720],
    ["Transportation", 400, 385],
    ["Utilities", 300, 275],
    ["Savings", 600, 600],
    ["Entertainment", 250, 310],
    ["Healthcare", 200, 145],
    ["Personal Care", 150, 130],
  ]
  const bStart = bh.number + 1
  budgetData.forEach(([cat, budget, spent]) => {
    const remaining = budget - spent
    const pct = spent / budget
    const row = bs.addRow([cat, budget, spent, remaining, pct])
    row.getCell(2).numFmt = CURRENCY_FMT
    row.getCell(3).numFmt = CURRENCY_FMT
    row.getCell(4).numFmt = CURRENCY_FMT
    row.getCell(5).numFmt = PERCENT_FMT
    // Conditional color on remaining
    if (remaining < 0) {
      row.getCell(4).font = { bold: true, color: { argb: "FFef4444" } }
      row.getCell(5).font = { bold: true, color: { argb: "FFef4444" } }
    } else if (pct > 0.9) {
      row.getCell(4).font = { bold: true, color: { argb: "FFeab308" } }
    }
  })
  styleDataRows(bs, bStart, bStart + budgetData.length - 1, 5)

  // Totals row
  const totalBudget = budgetData.reduce((s, d) => s + d[1], 0)
  const totalSpent = budgetData.reduce((s, d) => s + d[2], 0)
  const totRow = bs.addRow(["TOTAL", totalBudget, totalSpent, totalBudget - totalSpent, totalSpent / totalBudget])
  totRow.font = BOLD_FONT
  for (let c = 1; c <= 5; c++) totRow.getCell(c).border = THIN_BORDER
  totRow.getCell(2).numFmt = CURRENCY_FMT
  totRow.getCell(3).numFmt = CURRENCY_FMT
  totRow.getCell(4).numFmt = CURRENCY_FMT
  totRow.getCell(5).numFmt = PERCENT_FMT

  // -- Expenses sheet --
  const es = wb.addWorksheet("Expenses")
  es.columns = [
    { width: 14 }, { width: 20 }, { width: 30 }, { width: 14 }, { width: 16 },
  ]
  const eh = es.addRow(["Date", "Category", "Description", "Amount", "Payment"])
  styleHeaderRow(eh, 5, fill)
  const expenseItems = [
    [new Date(2026, 3, 1), "Housing", "Rent payment", 1600, "Bank Transfer"],
    [new Date(2026, 3, 1), "Utilities", "Electric bill", 95, "Auto Pay"],
    [new Date(2026, 3, 2), "Food & Dining", "Grocery store", 156.40, "Debit Card"],
    [new Date(2026, 3, 3), "Transportation", "Gas station", 52.30, "Credit Card"],
    [new Date(2026, 3, 5), "Entertainment", "Movie tickets", 36, "Credit Card"],
    [new Date(2026, 3, 6), "Food & Dining", "Restaurant dinner", 78.50, "Credit Card"],
    [new Date(2026, 3, 7), "Healthcare", "Pharmacy", 24.99, "Debit Card"],
    [new Date(2026, 3, 8), "Housing", "Insurance", 350, "Auto Pay"],
    [new Date(2026, 3, 10), "Personal Care", "Haircut", 45, "Cash"],
    [new Date(2026, 3, 11), "Transportation", "Bus pass", 85, "Debit Card"],
    [new Date(2026, 3, 12), "Food & Dining", "Grocery store", 132.80, "Debit Card"],
    [new Date(2026, 3, 14), "Entertainment", "Streaming services", 42.97, "Credit Card"],
    [new Date(2026, 3, 15), "Utilities", "Internet bill", 79.99, "Auto Pay"],
    [new Date(2026, 3, 15), "Savings", "Monthly deposit", 600, "Bank Transfer"],
    [new Date(2026, 3, 16), "Entertainment", "Concert tickets", 120, "Credit Card"],
  ]
  const eStart = eh.number + 1
  expenseItems.forEach((item) => {
    const row = es.addRow(item)
    row.getCell(1).numFmt = DATE_FMT
    row.getCell(4).numFmt = CURRENCY_FMT
  })
  styleDataRows(es, eStart, eStart + expenseItems.length - 1, 5)

  // -- Income sheet --
  const inc = wb.addWorksheet("Income")
  inc.columns = [{ width: 14 }, { width: 24 }, { width: 16 }, { width: 16 }]
  const ih = inc.addRow(["Date", "Source", "Amount", "Type"])
  styleHeaderRow(ih, 4, fill)
  const incomeData = [
    [new Date(2026, 3, 1), "Primary Salary", 4200, "Employment"],
    [new Date(2026, 3, 1), "Freelance Project", 850, "Contract"],
    [new Date(2026, 3, 10), "Stock Dividends", 125.50, "Investment"],
    [new Date(2026, 3, 15), "Rental Income", 700, "Property"],
  ]
  const iStart = ih.number + 1
  incomeData.forEach((item) => {
    const row = inc.addRow(item)
    row.getCell(1).numFmt = DATE_FMT
    row.getCell(3).numFmt = CURRENCY_FMT
  })
  styleDataRows(inc, iStart, iStart + incomeData.length - 1, 4)

  // -- Summary sheet --
  const sm = wb.addWorksheet("Summary")
  sm.columns = [{ width: 24 }, { width: 18 }]
  addTitleRow(sm, "Monthly Summary", 2)
  const smh = sm.addRow(["Metric", "Amount"])
  styleHeaderRow(smh, 2, fill)
  const totalIncome = incomeData.reduce((s, d) => s + d[2], 0)
  const summaryItems = [
    ["Total Income", totalIncome],
    ["Total Budgeted", totalBudget],
    ["Total Spent", totalSpent],
    ["Budget Remaining", totalBudget - totalSpent],
    ["Net Savings", totalIncome - totalSpent],
    ["Savings Rate", (totalIncome - totalSpent) / totalIncome],
    ["Budget Utilization", totalSpent / totalBudget],
  ]
  const smStart = smh.number + 1
  summaryItems.forEach(([label, val]) => {
    const row = sm.addRow([label, val])
    row.getCell(1).font = BOLD_FONT
    row.getCell(2).numFmt = typeof val === "number" && val < 1 && val > -1 ? PERCENT_FMT : CURRENCY_FMT
  })
  styleDataRows(sm, smStart, smStart + summaryItems.length - 1, 2)
}

// ---------------------------------------------------------------------------
// Variant 2 - Project Planner
// ---------------------------------------------------------------------------

function buildProjectPlanner(wb, accent) {
  const fill = headerFill(accent)

  // -- Timeline sheet --
  const tl = wb.addWorksheet("Timeline")
  tl.columns = [
    { width: 28 }, { width: 14 }, { width: 12 }, { width: 18 }, { width: 14 },
  ]
  addTitleRow(tl, "Project Timeline", 5)
  const th = tl.addRow(["Task", "Start Week", "Duration", "Owner", "Status"])
  styleHeaderRow(th, 5, fill)

  const tasks = [
    ["Requirements Gathering", "Week 1", "2 weeks", "Sarah Chen", "Done"],
    ["UI/UX Design", "Week 2", "3 weeks", "Alex Rivera", "Done"],
    ["Database Schema Design", "Week 3", "1 week", "Jordan Lee", "Done"],
    ["Backend API Development", "Week 4", "4 weeks", "Jordan Lee", "In Progress"],
    ["Frontend Development", "Week 5", "4 weeks", "Alex Rivera", "In Progress"],
    ["Integration Testing", "Week 8", "2 weeks", "Maria Santos", "Pending"],
    ["Performance Optimization", "Week 9", "1 week", "Jordan Lee", "Pending"],
    ["User Acceptance Testing", "Week 10", "2 weeks", "Sarah Chen", "Not Started"],
    ["Documentation", "Week 10", "2 weeks", "Maria Santos", "Not Started"],
    ["Deployment & Launch", "Week 12", "1 week", "Jordan Lee", "Not Started"],
  ]
  const tStart = th.number + 1
  tasks.forEach((t) => {
    const row = tl.addRow(t)
    row.getCell(5).fill = statusFill(t[4])
    row.getCell(5).font = { bold: true, color: { argb: t[4] === "Pending" ? "FF000000" : "FFFFFFFF" }, size: 11 }
    row.getCell(5).alignment = { horizontal: "center", vertical: "middle" }
  })
  styleDataRows(tl, tStart, tStart + tasks.length - 1, 5)
  // Re-apply status fills (styleDataRows may overwrite alt rows on status col)
  tasks.forEach((t, i) => {
    const row = tl.getRow(tStart + i)
    row.getCell(5).fill = statusFill(t[4])
  })

  // -- Tasks sheet --
  const ts = wb.addWorksheet("Tasks")
  ts.columns = [
    { width: 8 }, { width: 28 }, { width: 14 }, { width: 12 }, { width: 36 },
  ]
  const tsh = ts.addRow(["ID", "Task", "Priority", "Est. Hours", "Description"])
  styleHeaderRow(tsh, 5, fill)
  const taskDetails = [
    [1, "Define user stories", "High", 16, "Document all user stories and acceptance criteria"],
    [2, "Create wireframes", "High", 24, "Design wireframes for all major application screens"],
    [3, "Design database ERD", "High", 8, "Create entity-relationship diagram for data model"],
    [4, "Build REST endpoints", "High", 40, "Implement all CRUD operations for core resources"],
    [5, "Create React components", "High", 48, "Build reusable UI component library"],
    [6, "Write unit tests", "Medium", 24, "Achieve minimum 80% code coverage"],
    [7, "API integration tests", "Medium", 16, "End-to-end testing of all API endpoints"],
    [8, "Load testing", "Medium", 8, "Simulate concurrent users and measure response times"],
    [9, "Write user guide", "Low", 12, "Create end-user documentation with screenshots"],
    [10, "Deploy to staging", "High", 6, "Set up CI/CD pipeline and staging environment"],
  ]
  const tsStart = tsh.number + 1
  taskDetails.forEach((t) => ts.addRow(t))
  styleDataRows(ts, tsStart, tsStart + taskDetails.length - 1, 5)

  // -- Resources sheet --
  const rs = wb.addWorksheet("Resources")
  rs.columns = [
    { width: 20 }, { width: 22 }, { width: 16 }, { width: 14 }, { width: 18 },
  ]
  const rh = rs.addRow(["Name", "Role", "Allocation", "Rate", "Availability"])
  styleHeaderRow(rh, 5, fill)
  const resources = [
    ["Sarah Chen", "Project Manager", 1.0, 95, "Full-time"],
    ["Alex Rivera", "UI/UX Designer", 0.8, 85, "Mon-Thu"],
    ["Jordan Lee", "Senior Developer", 1.0, 110, "Full-time"],
    ["Maria Santos", "QA Engineer", 0.6, 80, "Wed-Fri"],
    ["David Kim", "DevOps Engineer", 0.4, 105, "As needed"],
  ]
  const rStart = rh.number + 1
  resources.forEach((r) => {
    const row = rs.addRow(r)
    row.getCell(3).numFmt = PERCENT_FMT
    row.getCell(4).numFmt = CURRENCY_FMT
  })
  styleDataRows(rs, rStart, rStart + resources.length - 1, 5)

  // -- Report sheet --
  const rp = wb.addWorksheet("Report")
  rp.columns = [{ width: 28 }, { width: 18 }]
  addTitleRow(rp, "Project Status Report", 2)
  const rph = rp.addRow(["Metric", "Value"])
  styleHeaderRow(rph, 2, fill)
  const reportData = [
    ["Total Tasks", 10],
    ["Completed", 3],
    ["In Progress", 2],
    ["Pending", 2],
    ["Not Started", 3],
    ["Completion Rate", "30%"],
    ["Total Est. Hours", 202],
    ["Team Size", 5],
    ["Project Duration", "12 weeks"],
    ["Budget Allocated", 48000],
  ]
  const rpStart = rph.number + 1
  reportData.forEach(([label, val]) => {
    const row = rp.addRow([label, val])
    row.getCell(1).font = BOLD_FONT
    if (typeof val === "number" && val > 1000) row.getCell(2).numFmt = CURRENCY_FMT
    else if (typeof val === "number") row.getCell(2).numFmt = NUMBER_FMT
  })
  styleDataRows(rp, rpStart, rpStart + reportData.length - 1, 2)
}

// ---------------------------------------------------------------------------
// Variant 3 - Data Analysis
// ---------------------------------------------------------------------------

function buildDataAnalysis(wb, accent) {
  const fill = headerFill(accent)

  // -- Pivot sheet --
  const pv = wb.addWorksheet("Pivot")
  pv.columns = [
    { width: 14 }, { width: 14 }, { width: 14 }, { width: 14 }, { width: 14 }, { width: 14 },
  ]
  addTitleRow(pv, "Sales by Region & Quarter", 6)
  const pvh = pv.addRow(["Region", "Q1", "Q2", "Q3", "Q4", "Total"])
  styleHeaderRow(pvh, 6, fill)

  const pivotData = [
    ["North", 42500, 48200, 51300, 56100],
    ["South", 38100, 41600, 44200, 47800],
    ["East", 51200, 54800, 49600, 58300],
    ["West", 35800, 39200, 42100, 45600],
  ]
  const pvStart = pvh.number + 1
  pivotData.forEach((d) => {
    const total = d[1] + d[2] + d[3] + d[4]
    const row = pv.addRow([...d, total])
    for (let c = 2; c <= 6; c++) row.getCell(c).numFmt = CURRENCY_FMT
  })
  // Totals row
  const colTotals = ["Total", 0, 0, 0, 0, 0]
  pivotData.forEach((d) => {
    for (let i = 1; i <= 4; i++) colTotals[i] += d[i]
  })
  colTotals[5] = colTotals[1] + colTotals[2] + colTotals[3] + colTotals[4]
  const pvTot = pv.addRow(colTotals)
  pvTot.font = BOLD_FONT
  for (let c = 1; c <= 6; c++) {
    pvTot.getCell(c).border = THIN_BORDER
    if (c >= 2) pvTot.getCell(c).numFmt = CURRENCY_FMT
  }
  styleDataRows(pv, pvStart, pvStart + pivotData.length - 1, 6)

  // -- Raw Data sheet --
  const rd = wb.addWorksheet("Raw Data")
  rd.columns = [
    { width: 10 }, { width: 14 }, { width: 14 }, { width: 14 },
    { width: 20 }, { width: 14 }, { width: 14 },
  ]
  const rdh = rd.addRow(["ID", "Date", "Region", "Quarter", "Product", "Units", "Revenue"])
  styleHeaderRow(rdh, 7, fill)
  const products = ["Widget A", "Widget B", "Gadget Pro", "Gadget Lite", "Service Plan"]
  const regions = ["North", "South", "East", "West"]
  const rdStart = rdh.number + 1
  for (let i = 0; i < 24; i++) {
    const month = i % 12
    const q = `Q${Math.floor(month / 3) + 1}`
    const units = 50 + Math.floor((i * 37 + 13) % 200)
    const price = [29.99, 49.99, 89.99, 39.99, 149.99][i % 5]
    rd.addRow([
      i + 1001, new Date(2026, month, 1 + (i % 28)),
      regions[i % 4], q, products[i % 5], units, units * price,
    ])
  }
  for (let i = rdStart; i < rdStart + 24; i++) {
    rd.getRow(i).getCell(2).numFmt = DATE_FMT
    rd.getRow(i).getCell(6).numFmt = NUMBER_FMT
    rd.getRow(i).getCell(7).numFmt = CURRENCY_FMT
  }
  styleDataRows(rd, rdStart, rdStart + 23, 7)

  // -- Charts sheet --
  const cs = wb.addWorksheet("Charts")
  cs.columns = [{ width: 14 }, { width: 14 }, { width: 14 }, { width: 14 }, { width: 14 }]
  addTitleRow(cs, "Chart Data: Quarterly Performance", 5)
  const csh = cs.addRow(["Quarter", "North", "South", "East", "West"])
  styleHeaderRow(csh, 5, fill)
  const csStart = csh.number + 1
  for (let q = 0; q < 4; q++) {
    const row = cs.addRow([`Q${q + 1}`, pivotData[0][q + 1], pivotData[1][q + 1], pivotData[2][q + 1], pivotData[3][q + 1]])
    for (let c = 2; c <= 5; c++) row.getCell(c).numFmt = CURRENCY_FMT
  }
  styleDataRows(cs, csStart, csStart + 3, 5)

  // -- Notes sheet --
  const ns = wb.addWorksheet("Notes")
  ns.columns = [{ width: 24 }, { width: 60 }]
  addTitleRow(ns, "Methodology & Notes", 2)
  const nsh = ns.addRow(["Section", "Details"])
  styleHeaderRow(nsh, 2, fill)
  const notes = [
    ["Data Source", "Internal CRM system, exported quarterly sales records for FY 2026."],
    ["Time Period", "January 2026 through December 2026 (4 quarters)."],
    ["Regions", "North, South, East, and West divisions as defined by corporate structure."],
    ["Products", "Five product lines: Widget A, Widget B, Gadget Pro, Gadget Lite, Service Plan."],
    ["Methodology", "Revenue figures aggregated by region and quarter. Units tracked at point of sale."],
    ["Adjustments", "Returns and refunds have been deducted from gross revenue figures."],
    ["Prepared By", "Analytics Team, April 2026."],
  ]
  const nsStart = nsh.number + 1
  notes.forEach(([section, detail]) => {
    const row = ns.addRow([section, detail])
    row.getCell(1).font = BOLD_FONT
    row.getCell(2).alignment = { wrapText: true }
  })
  styleDataRows(ns, nsStart, nsStart + notes.length - 1, 2)
}

// ---------------------------------------------------------------------------
// Variant 4 - Inventory Tracker
// ---------------------------------------------------------------------------

function buildInventoryTracker(wb, accent) {
  const fill = headerFill(accent)

  // -- Inventory sheet --
  const inv = wb.addWorksheet("Inventory")
  inv.columns = [
    { width: 12 }, { width: 26 }, { width: 10 }, { width: 14 },
    { width: 14 }, { width: 12 }, { width: 14 },
  ]
  addTitleRow(inv, "Current Inventory", 7)
  const ih = inv.addRow(["SKU", "Product", "Stock", "Price", "Value", "Status", "Reorder"])
  styleHeaderRow(ih, 7, fill)

  const inventory = [
    ["SKU-001", "Wireless Mouse", 85, 29.99, "In Stock", 25],
    ["SKU-002", "Mechanical Keyboard", 42, 79.99, "In Stock", 20],
    ["SKU-003", "USB-C Hub", 12, 49.99, "Low Stock", 30],
    ["SKU-004", "Monitor Stand", 67, 34.99, "In Stock", 15],
    ["SKU-005", "Webcam HD", 8, 59.99, "Low Stock", 25],
    ["SKU-006", "Desk Lamp LED", 156, 24.99, "In Stock", 40],
    ["SKU-007", "Cable Organizer", 3, 14.99, "Critical", 50],
    ["SKU-008", "Laptop Sleeve", 91, 19.99, "In Stock", 20],
    ["SKU-009", "Bluetooth Speaker", 28, 44.99, "In Stock", 15],
    ["SKU-010", "Phone Stand", 15, 12.99, "Low Stock", 30],
    ["SKU-011", "Ergonomic Chair", 6, 299.99, "Low Stock", 10],
    ["SKU-012", "Wireless Charger", 54, 22.99, "In Stock", 25],
  ]
  const iStart = ih.number + 1
  inventory.forEach((item) => {
    const value = item[2] * item[3]
    const row = inv.addRow([item[0], item[1], item[2], item[3], value, item[4], item[5]])
    row.getCell(4).numFmt = CURRENCY_FMT
    row.getCell(5).numFmt = CURRENCY_FMT
    row.getCell(7).numFmt = NUMBER_FMT
    // Conditional formatting on stock level
    row.getCell(3).fill = stockFill(item[2])
    row.getCell(3).font = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 }
    row.getCell(3).alignment = { horizontal: "center" }
  })
  styleDataRows(inv, iStart, iStart + inventory.length - 1, 7)
  // Re-apply stock fills
  inventory.forEach((item, i) => {
    inv.getRow(iStart + i).getCell(3).fill = stockFill(item[2])
    inv.getRow(iStart + i).getCell(3).font = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 }
  })

  // -- Orders sheet --
  const os = wb.addWorksheet("Orders")
  os.columns = [
    { width: 14 }, { width: 14 }, { width: 24 }, { width: 10 },
    { width: 14 }, { width: 14 }, { width: 14 },
  ]
  const oh = os.addRow(["Order ID", "Date", "Product", "Qty", "Unit Price", "Total", "Status"])
  styleHeaderRow(oh, 7, fill)
  const orders = [
    ["ORD-4001", new Date(2026, 3, 1), "Wireless Mouse", 50, 29.99, "Delivered"],
    ["ORD-4002", new Date(2026, 3, 3), "USB-C Hub", 30, 49.99, "In Transit"],
    ["ORD-4003", new Date(2026, 3, 5), "Cable Organizer", 100, 14.99, "Processing"],
    ["ORD-4004", new Date(2026, 3, 7), "Webcam HD", 25, 59.99, "Ordered"],
    ["ORD-4005", new Date(2026, 3, 8), "Mechanical Keyboard", 20, 79.99, "In Transit"],
    ["ORD-4006", new Date(2026, 3, 10), "Phone Stand", 40, 12.99, "Processing"],
    ["ORD-4007", new Date(2026, 3, 12), "Ergonomic Chair", 10, 299.99, "Ordered"],
    ["ORD-4008", new Date(2026, 3, 14), "Bluetooth Speaker", 15, 44.99, "Delivered"],
  ]
  const oStart = oh.number + 1
  orders.forEach((o) => {
    const total = o[3] * o[4]
    const row = os.addRow([o[0], o[1], o[2], o[3], o[4], total, o[5]])
    row.getCell(2).numFmt = DATE_FMT
    row.getCell(5).numFmt = CURRENCY_FMT
    row.getCell(6).numFmt = CURRENCY_FMT
  })
  styleDataRows(os, oStart, oStart + orders.length - 1, 7)

  // -- Suppliers sheet --
  const ss = wb.addWorksheet("Suppliers")
  ss.columns = [
    { width: 12 }, { width: 24 }, { width: 22 }, { width: 18 },
    { width: 14 }, { width: 16 },
  ]
  const ssh = ss.addRow(["Code", "Company", "Contact", "Email", "Lead Time", "Rating"])
  styleHeaderRow(ssh, 6, fill)
  const suppliers = [
    ["SUP-01", "TechParts Inc.", "James Wilson", "james@techparts.com", "5 days", "4.8/5"],
    ["SUP-02", "Global Supply Co.", "Lisa Park", "lisa@globalsupply.com", "7 days", "4.5/5"],
    ["SUP-03", "QuickShip Ltd.", "Robert Chen", "robert@quickship.com", "3 days", "4.9/5"],
    ["SUP-04", "ValueSource", "Anna Miller", "anna@valuesource.com", "10 days", "4.2/5"],
    ["SUP-05", "PrimeParts", "David Johnson", "david@primeparts.com", "4 days", "4.7/5"],
  ]
  const ssStart = ssh.number + 1
  suppliers.forEach((s) => ss.addRow(s))
  styleDataRows(ss, ssStart, ssStart + suppliers.length - 1, 6)

  // -- Reports sheet --
  const rp = wb.addWorksheet("Reports")
  rp.columns = [{ width: 28 }, { width: 18 }]
  addTitleRow(rp, "Inventory Report", 2)
  const rph = rp.addRow(["Metric", "Value"])
  styleHeaderRow(rph, 2, fill)

  const totalStock = inventory.reduce((s, d) => s + d[2], 0)
  const totalValue = inventory.reduce((s, d) => s + d[2] * d[3], 0)
  const lowStock = inventory.filter((d) => d[2] < 20).length
  const reportItems = [
    ["Total SKUs", inventory.length],
    ["Total Units in Stock", totalStock],
    ["Total Inventory Value", totalValue],
    ["Average Stock per SKU", Math.round(totalStock / inventory.length)],
    ["Low Stock Items", lowStock],
    ["Critical Items", inventory.filter((d) => d[2] < 10).length],
    ["Pending Orders", orders.filter((o) => o[5] !== "Delivered").length],
    ["Active Suppliers", suppliers.length],
  ]
  const rpStart = rph.number + 1
  reportItems.forEach(([label, val]) => {
    const row = rp.addRow([label, val])
    row.getCell(1).font = BOLD_FONT
    if (label.includes("Value")) row.getCell(2).numFmt = CURRENCY_FMT
    else row.getCell(2).numFmt = NUMBER_FMT
  })
  styleDataRows(rp, rpStart, rpStart + reportItems.length - 1, 2)
}

// ---------------------------------------------------------------------------
// Main entry point
// ---------------------------------------------------------------------------

const BUILDERS = [
  buildDashboard,
  buildBudgetTracker,
  buildProjectPlanner,
  buildDataAnalysis,
  buildInventoryTracker,
]

/**
 * Generate an Excel (.xlsx) workbook and return it as a Buffer.
 *
 * @param {string}  templateId   - template identifier
 * @param {number}  variant      - 0-4 spreadsheet type
 * @param {string}  title        - human-readable title
 * @param {string}  previewColor - Tailwind gradient class (used for accent)
 * @returns {Promise<Buffer>}
 */
export async function generateExcel(templateId, variant, title, previewColor) {
  const wb = new ExcelJS.Workbook()
  wb.creator = "Template Generator"
  wb.created = new Date()
  wb.modified = new Date()

  const accent = accentFromTailwind(previewColor)
  const safeVariant = Math.max(0, Math.min(4, Number(variant) || 0))

  BUILDERS[safeVariant](wb, accent)

  // Set the first sheet's name to include the title (truncated for Excel limit)
  const firstSheet = wb.worksheets[0]
  if (firstSheet && title) {
    // Excel sheet names max 31 chars, no special chars
    const safeName = title.replace(/[\\/*?[\]:]/g, "").slice(0, 31)
    if (safeName) firstSheet.name = safeName
  }

  const arrayBuffer = await wb.xlsx.writeBuffer()
  return Buffer.from(arrayBuffer)
}
