"use client"

import React from "react"
import { cn } from "@/lib/utils"

type Props = {
  tool: string
  style: string
  color: string
  variant?: number
  className?: string
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Lines({ widths, cls = "bg-gray-200" }: { widths: number[]; cls?: string }) {
  return (
    <>
      {widths.map((w, i) => (
        <div key={i} className={cn("h-1.5 rounded-full", cls)} style={{ width: `${w}%` }} />
      ))}
    </>
  )
}

function Bars({ data, color, h = 72 }: { data: number[]; color: string; h?: number }) {
  return (
    <div
      className="flex items-end gap-1 border-b-2 border-l-2 border-gray-300/60 pb-0.5 pl-0.5"
      style={{ height: h }}
    >
      {data.map((v, i) => (
        <div
          key={i}
          className={cn("flex-1 rounded-t-sm bg-gradient-to-t", color)}
          style={{ height: `${v}%`, opacity: 0.45 + (i / data.length) * 0.55 }}
        />
      ))}
    </div>
  )
}

// ─── Slide content variants ───────────────────────────────────────────────────

function SlideHero({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br overflow-hidden", color)}>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/8 blur-2xl" />
      <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-black/10 blur-2xl" />
      <div className="absolute inset-0 flex items-center gap-8 px-10">
        <div className="flex-1 space-y-5">
          <div className="text-[7px] font-bold tracking-[0.3em] uppercase text-white/50">
            Company Presentation · 2024
          </div>
          <div className="space-y-2">
            <div className="h-12 w-full rounded-xl bg-white/88 shadow-xl" />
            <div className="h-5 w-4/5 rounded-lg bg-white/50" />
          </div>
          <div className="space-y-2">
            <Lines widths={[100, 88, 72]} cls="bg-white/28" />
          </div>
          <div className="flex gap-3 pt-1">
            <div className="h-9 w-28 rounded-xl bg-white shadow-lg" />
            <div className="h-9 w-24 rounded-xl border-2 border-white/35 backdrop-blur-sm" />
          </div>
        </div>
        <div className="w-64 h-52 shrink-0 rounded-2xl bg-black/18 backdrop-blur-sm border border-white/15 p-5 flex flex-col gap-4">
          <div className="text-[7px] font-bold uppercase tracking-wider text-white/45">Key Highlights</div>
          {[["$2.4M", "Annual Revenue"], ["340%", "YoY Growth"], ["4,200+", "Customers"]].map(([v, l]) => (
            <div key={l} className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/15 shrink-0" />
              <div className="flex-1 space-y-1">
                <div className="h-4 w-14 rounded-md bg-white/80" />
                <div className="h-1.5 w-20 rounded-full bg-white/30" />
              </div>
              <div className="h-4 w-10 rounded-full bg-emerald-400/20 border border-emerald-300/30 flex items-center justify-center">
                <div className="h-1.5 w-6 rounded-full bg-emerald-300/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 right-8 flex items-center gap-1.5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={cn("rounded-full bg-white", i === 0 ? "h-1.5 w-7" : "h-1.5 w-1.5 opacity-25")} />
        ))}
      </div>
    </div>
  )
}

function SlideDark({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 bg-[#0f172a] overflow-hidden">
      <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", color)} />
      <div className="absolute inset-0 p-8 flex flex-col gap-5">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="h-2 w-20 rounded-full bg-white/20" />
            <div className="h-8 w-60 rounded-xl bg-white/80" />
          </div>
          <div className="flex gap-2">
            {["W", "M", "Y"].map((t, i) => (
              <div key={t} className={cn("h-6 w-10 rounded-lg text-[7px] flex items-center justify-center font-bold",
                i === 1 ? cn("bg-gradient-to-r text-white", color) : "bg-white/8 text-white/35")}>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-4">
          <div className="col-span-2 rounded-2xl bg-white/5 border border-white/8 p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="h-2.5 w-24 rounded-full bg-white/30" />
              <div className="flex gap-3">
                {["Revenue", "Target"].map((l, i) => (
                  <div key={l} className="flex items-center gap-1.5">
                    <div className={cn("h-1.5 w-4 rounded-full", i === 0 ? cn("bg-gradient-to-r", color) : "bg-white/20")} />
                    <div className="h-1.5 w-8 rounded-full bg-white/20" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex gap-1.5 relative">
              <div className="absolute inset-0 flex flex-col justify-between opacity-[0.15]">
                {[...Array(4)].map((_, i) => <div key={i} className="h-px bg-white" />)}
              </div>
              {[35, 52, 44, 67, 55, 78, 65, 88, 72, 94, 82, 93].map((h, i) => (
                <div key={i} className="flex-1 relative">
                  <div className={cn("absolute bottom-0 left-0 right-0 rounded-t-sm bg-gradient-to-t", color)}
                    style={{ height: `${h}%`, opacity: 0.75 + (i / 12) * 0.25 }} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[["↑28%", "Revenue"], ["4.9K", "Users"], ["$85", "Avg Order"]].map(([v, l]) => (
              <div key={l} className="flex-1 rounded-2xl bg-white/5 border border-white/8 p-3 flex flex-col justify-between">
                <div className="h-6 w-6 rounded-lg bg-white/10" />
                <div className="space-y-1">
                  <div className="h-6 w-14 rounded-lg bg-white/70" />
                  <div className="h-1.5 w-20 rounded-full bg-white/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideKPI({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br overflow-hidden", color)}>
      <div className="absolute inset-0 p-8 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-2.5 w-24 rounded-full bg-white/40" />
            <div className="h-9 w-72 rounded-xl bg-white/85 shadow-sm" />
          </div>
          <div className="h-11 w-11 rounded-2xl bg-white/15 flex items-center justify-center">
            <div className="h-5 w-5 rounded-lg bg-white/50" />
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{ w: 75 }, { w: 92 }, { w: 58 }, { w: 96 }].map(({ w }, idx) => (
            <div key={idx} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/18 p-5 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="h-8 w-8 rounded-xl bg-white/15" />
                <div className="h-5 px-2 rounded-full bg-emerald-400/20 border border-emerald-300/25 flex items-center">
                  <div className="h-1.5 w-7 rounded-full bg-emerald-300/55" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-8 w-20 rounded-xl bg-white/85 shadow-sm" />
                <div className="h-1.5 w-28 rounded-full bg-white/35" />
                <div className="h-1.5 rounded-full bg-white/18 overflow-hidden">
                  <div className="h-full rounded-full bg-white/48" style={{ width: `${w}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SlideSplit({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 bg-white flex overflow-hidden">
      <div className={cn("w-2/5 bg-gradient-to-br flex flex-col justify-between p-8 shrink-0", color)}>
        <div className="h-11 w-11 rounded-2xl bg-white/15" />
        <div className="space-y-4">
          <div className="h-2.5 w-20 rounded-full bg-white/40" />
          <div className="space-y-2">
            <div className="h-11 rounded-xl bg-white/88 shadow-sm" />
            <div className="h-4 w-4/5 rounded-md bg-white/50" />
          </div>
          <div className="space-y-2.5">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="h-5 w-5 rounded-full bg-white/22 shrink-0" />
                <div className="h-2 rounded-full bg-white/38" style={{ width: `${50 + i * 14}%` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-9 w-24 rounded-xl bg-white shadow-md" />
          <div className="h-9 w-20 rounded-xl border-2 border-white/28" />
        </div>
      </div>
      <div className="flex-1 p-8 flex flex-col gap-4 overflow-hidden">
        <div className="h-2.5 w-24 rounded-full bg-gray-400" />
        {[1, 2, 3].map(i => (
          <div key={i} className="flex-1 rounded-2xl bg-gray-50 border border-gray-100 p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className={cn("h-9 w-9 rounded-xl bg-gradient-to-br shrink-0", color)} />
              <div className="flex-1 space-y-1.5">
                <div className="h-3 w-24 rounded bg-gray-700" />
                <div className="h-2 w-16 rounded-full bg-gray-300" />
              </div>
              <div className="h-5 w-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <div className="h-1.5 w-7 rounded-full bg-emerald-400" />
              </div>
            </div>
            <Lines widths={[100, 84]} cls="bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  )
}

function SlideTimeline({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 p-8 flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="h-2.5 w-20 rounded-full bg-white/22" />
            <div className="h-9 w-64 rounded-xl bg-white/80" />
          </div>
          <div className={cn("h-12 w-12 rounded-2xl bg-gradient-to-br", color)} />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div className="relative">
            <div className="h-0.5 bg-white/10 absolute inset-x-0 top-3" />
            <div className={cn("h-0.5 bg-gradient-to-r absolute left-0 top-3", color)} style={{ width: "65%" }} />
            <div className="flex justify-between">
              {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
                <div key={q} className="flex flex-col items-center gap-2">
                  <div className={cn("h-6 w-6 rounded-full border-2 z-10 flex items-center justify-center",
                    i < 3 ? cn("bg-gradient-to-br border-transparent shadow-lg", color) : "bg-gray-800 border-white/18"
                  )}>
                    {i < 3 && <div className="h-2 w-2 rounded-full bg-white" />}
                  </div>
                  <div className="h-2 w-6 rounded-full bg-white/28" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-4 gap-4">
            {["Research & Design", "MVP Launch", "Scale Up", "Expansion"].map((title, i) => (
              <div key={title} className={cn("rounded-xl border p-4 flex flex-col gap-3", i < 3 ? "border-white/12 bg-white/5" : "border-white/5 bg-white/[0.02] opacity-45")}>
                <div className={cn("h-7 w-7 rounded-lg bg-gradient-to-br", i < 3 ? color : "bg-white/10")} />
                <div className="space-y-1.5">
                  <div className="h-3 w-full rounded bg-white/58" />
                  <Lines widths={[100, 78, 60]} cls="bg-white/18" />
                </div>
                <div className="mt-auto pt-2 border-t border-white/8">
                  <div className="h-2 w-14 rounded-full bg-white/22" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideContent({ color, variant }: { color: string; variant: number }) {
  switch (variant % 5) {
    case 0: return <SlideHero color={color} />
    case 1: return <SlideDark color={color} />
    case 2: return <SlideKPI color={color} />
    case 3: return <SlideSplit color={color} />
    case 4: return <SlideTimeline color={color} />
    default: return <SlideHero color={color} />
  }
}

// ─── PowerPoint / Google Slides Editor Chrome ────────────────────────────────

function SlideEditorChrome({ color, variant, isGoogle = false }: { color: string; variant: number; isGoogle?: boolean }) {
  return (
    <div className="absolute inset-0 bg-[#3c3c3c] flex flex-col">
      {/* Menu bar */}
      <div className="h-8 bg-[#232323] flex items-center px-4 gap-4 shrink-0 border-b border-black/25">
        {isGoogle ? (
          <>
            <div className="flex items-center gap-1.5">
              {["#ea4335", "#fbbc04", "#34a853", "#4285f4"].map(c => (
                <div key={c} className="h-2 w-2 rounded-full" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="h-2 w-32 rounded-full bg-white/20 mx-2" />
          </>
        ) : (
          <>
            <div className="flex gap-1.5">
              {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                <div key={c} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="flex gap-4 ml-3">
              {["File", "Edit", "View", "Insert", "Format", "Slide"].map(m => (
                <span key={m} className="text-[8px] text-white/38 font-medium">{m}</span>
              ))}
            </div>
          </>
        )}
        <div className="ml-auto h-4 w-24 rounded bg-white/10" />
      </div>

      {/* Toolbar */}
      <div className="h-8 bg-[#2d2d2d] border-b border-black/20 flex items-center px-3 gap-1.5 shrink-0">
        {[...Array(9)].map((_, i) => <div key={i} className="h-4 w-5 rounded bg-white/10" />)}
        <div className="w-px h-4 bg-white/10 mx-1" />
        {["B", "I", "U"].map(t => (
          <div key={t} className="h-4 w-4 rounded bg-white/10 flex items-center justify-center">
            <span className="text-[6px] text-white/35 font-black">{t}</span>
          </div>
        ))}
        <div className="w-px h-4 bg-white/10 mx-1" />
        {[...Array(4)].map((_, i) => <div key={i} className="h-4 w-6 rounded bg-white/10" />)}
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Filmstrip */}
        <div className="w-14 bg-[#1c1c1c] border-r border-black/20 flex flex-col py-2 gap-1.5 shrink-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={cn("mx-1.5 aspect-video rounded-sm border overflow-hidden",
              i === 0
                ? "border-blue-500 shadow-[0_0_0_2px_rgba(59,130,246,0.28)]"
                : "border-white/8 opacity-38"
            )}>
              <div className={cn("h-full w-full bg-gradient-to-br", color, i > 0 && "opacity-30")} />
            </div>
          ))}
        </div>

        {/* Canvas */}
        <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
          <div className="w-full aspect-video relative overflow-hidden rounded shadow-2xl ring-1 ring-black/40">
            <SlideContent color={color} variant={variant} />
          </div>
        </div>

        {/* Inspector */}
        <div className="w-36 bg-[#1c1c1c] border-l border-black/20 p-3 shrink-0 space-y-3 overflow-hidden">
          <div>
            <div className="h-2 w-14 rounded-full bg-white/28 mb-2" />
            <div className="space-y-1.5">
              {[...Array(4)].map((_, i) => <div key={i} className="h-5 rounded bg-white/10" />)}
            </div>
          </div>
          <div className="h-px bg-white/10" />
          <div>
            <div className="h-2 w-10 rounded-full bg-white/28 mb-2" />
            <div className="grid grid-cols-2 gap-1.5">
              {[...Array(4)].map((_, i) => <div key={i} className="h-4 rounded bg-white/10" />)}
            </div>
          </div>
          <div className="h-px bg-white/10" />
          <div className="space-y-1.5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-2">
                <div className="h-3 w-3 rounded bg-white/10 shrink-0" />
                <div className="flex-1 h-3 rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="h-5 bg-[#232323] border-t border-black/20 flex items-center px-4 gap-4 shrink-0">
        <span className="text-[6.5px] text-white/28">Slide 1 of 24</span>
        <div className="ml-auto flex gap-2">
          {[...Array(3)].map((_, i) => <div key={i} className="h-2.5 w-6 rounded bg-white/10" />)}
        </div>
      </div>
    </div>
  )
}

// ─── Excel ────────────────────────────────────────────────────────────────────

function ExcelGrid({ variant, color }: { variant: number; color: string }) {
  const mod = variant % 5
  const cols = ["A", "B", "C", "D", "E", "F"]
  const green = "#107c41"

  // Variant 0: Dashboard with charts
  if (mod === 0) return (
    <div className="flex-1 flex overflow-hidden">
      <div className="flex-1 overflow-hidden">
        <div className="flex bg-[#f4f4f2] border-b border-gray-200 shrink-0">
          <div className="w-7 border-r border-gray-200 h-5" />
          {cols.map(c => (
            <div key={c} className="flex-1 h-5 border-r border-gray-200 flex items-center justify-center">
              <span className="text-[7.5px] text-gray-500 font-medium">{c}</span>
            </div>
          ))}
        </div>
        {[...Array(6)].map((_, row) => (
          <div key={row} className={cn("flex border-b border-gray-100", row === 0 ? "bg-[#e2efda]" : row % 2 === 0 ? "bg-[#f9fff9]/60" : "bg-white")}>
            <div className="w-7 border-r border-gray-200 flex items-center justify-center shrink-0">
              <span className="text-[6.5px] text-gray-400">{row + 1}</span>
            </div>
            {cols.map((_, col) => (
              <div key={col} className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
                {row === 0 ? <div className="h-2 rounded-full bg-[#107c41]" style={{ width: "70%" }} />
                  : <div className={cn("h-1.5 rounded-full", col === 1 ? "bg-emerald-400" : col === 3 ? "bg-blue-400" : "bg-gray-300")} style={{ width: `${30 + ((row * col * 17) % 50)}%` }} />}
              </div>
            ))}
          </div>
        ))}
        {/* Inline chart area */}
        <div className="p-3 border-b border-gray-100">
          <Bars data={[38, 62, 48, 80, 58, 88, 68]} color="from-[#107c41]/80 to-[#107c41]" h={64} />
        </div>
        {[...Array(8)].map((_, row) => (
          <div key={row} className={cn("flex border-b border-gray-100", row % 2 === 0 ? "bg-[#f9fff9]/60" : "bg-white")}>
            <div className="w-7 border-r border-gray-200 flex items-center justify-center shrink-0">
              <span className="text-[6.5px] text-gray-400">{row + 8}</span>
            </div>
            {cols.map((_, col) => (
              <div key={col} className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
                <div className="h-1.5 rounded-full bg-gray-300" style={{ width: `${25 + ((row * col * 13) % 55)}%` }} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="w-44 border-l border-gray-200 p-3 flex flex-col gap-2 shrink-0 bg-white">
        <div className="h-2.5 w-20 rounded-full bg-gray-400" />
        <div className="flex-1 flex items-end gap-1 pb-1">
          <Bars data={[38, 62, 48, 80, 58, 88, 68]} color="from-[#107c41]/80 to-[#107c41]" />
        </div>
        <div className="h-3.5 rounded bg-gray-100 flex items-center gap-1 px-1.5">
          <div className="h-2 w-2 rounded-sm bg-[#107c41]/50 shrink-0" />
          <div className="h-1.5 flex-1 rounded-full bg-gray-300" />
        </div>
        <div className="h-px bg-gray-100" />
        <div className="space-y-1.5">
          {[["Total", ""], ["Average", ""], ["Growth", "bg-emerald-200"]].map(([l, c]) => (
            <div key={l} className="flex items-center justify-between">
              <div className="h-1.5 w-10 rounded-full bg-gray-300" />
              <div className={cn("h-3 w-12 rounded", c || "bg-gray-100")} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Variant 1: Budget tracker with colored categories
  if (mod === 1) {
    const cats = [
      { label: "Housing", pct: 85, clr: "bg-red-400" },
      { label: "Food", pct: 62, clr: "bg-orange-400" },
      { label: "Transport", pct: 45, clr: "bg-blue-400" },
      { label: "Utilities", pct: 38, clr: "bg-purple-400" },
      { label: "Savings", pct: 72, clr: "bg-emerald-400" },
      { label: "Entertainment", pct: 28, clr: "bg-pink-400" },
    ]
    return (
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <div className="flex bg-[#e2efda] border-b border-gray-200 shrink-0">
            <div className="w-7 border-r border-gray-200 h-5" />
            {["Category", "Budget", "Spent", "Remaining", "%", "Status"].map(c => (
              <div key={c} className="flex-1 h-5 border-r border-gray-200 flex items-center justify-center">
                <div className="h-2 rounded-full bg-[#107c41]" style={{ width: "70%" }} />
              </div>
            ))}
          </div>
          {cats.map((cat, row) => (
            <div key={row} className={cn("flex border-b border-gray-100", row % 2 === 0 ? "bg-[#f9fff9]/60" : "bg-white")}>
              <div className="w-7 border-r border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-[6.5px] text-gray-400">{row + 2}</span>
              </div>
              <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center gap-1">
                <div className={cn("h-2.5 w-2.5 rounded-sm shrink-0", cat.clr)} />
                <div className="h-2 w-14 rounded-full bg-gray-400" />
              </div>
              {[...Array(3)].map((_, c) => (
                <div key={c} className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
                  <div className="h-1.5 rounded-full bg-gray-300" style={{ width: `${40 + c * 15}%` }} />
                </div>
              ))}
              <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
                <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                  <div className={cn("h-full rounded-full", cat.clr)} style={{ width: `${cat.pct}%` }} />
                </div>
              </div>
              <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
                <div className={cn("h-3.5 w-12 rounded-full", cat.pct > 70 ? "bg-red-100" : cat.pct > 50 ? "bg-yellow-100" : "bg-green-100")} />
              </div>
            </div>
          ))}
          <div className="flex border-b border-gray-200 bg-[#e2efda]">
            <div className="w-7 border-r border-gray-200 h-6" />
            <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
              <div className="h-2.5 w-12 rounded-full bg-[#107c41]" />
            </div>
            {[...Array(5)].map((_, c) => (
              <div key={c} className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
                <div className="h-2 rounded-full bg-[#107c41]/60" style={{ width: "60%" }} />
              </div>
            ))}
          </div>
          {[...Array(10)].map((_, row) => (
            <div key={row} className="flex border-b border-gray-50 bg-white">
              <div className="w-7 border-r border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-[6.5px] text-gray-400">{row + 9}</span>
              </div>
              {[...Array(6)].map((_, col) => (
                <div key={col} className="flex-1 h-6 border-r border-gray-50" />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Variant 2: Project planner / Gantt-like
  if (mod === 2) {
    const tasks = [
      { w: 35, off: 0, clr: "bg-blue-400" },
      { w: 25, off: 10, clr: "bg-indigo-400" },
      { w: 40, off: 20, clr: "bg-emerald-400" },
      { w: 20, off: 35, clr: "bg-amber-400" },
      { w: 30, off: 45, clr: "bg-rose-400" },
      { w: 25, off: 55, clr: "bg-purple-400" },
      { w: 20, off: 70, clr: "bg-teal-400" },
    ]
    return (
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <div className="flex bg-[#e2efda] border-b border-gray-200 shrink-0">
            <div className="w-7 border-r border-gray-200 h-5" />
            <div className="w-24 h-5 border-r border-gray-200 flex items-center px-1.5">
              <div className="h-2 w-12 rounded-full bg-[#107c41]" />
            </div>
            {["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"].map(w => (
              <div key={w} className="flex-1 h-5 border-r border-gray-200 flex items-center justify-center">
                <span className="text-[6px] text-gray-500 font-medium">{w}</span>
              </div>
            ))}
          </div>
          {tasks.map((t, row) => (
            <div key={row} className={cn("flex border-b border-gray-100", row % 2 === 0 ? "bg-[#f9fff9]/60" : "bg-white")}>
              <div className="w-7 border-r border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-[6.5px] text-gray-400">{row + 2}</span>
              </div>
              <div className="w-24 h-7 border-r border-gray-200 px-1.5 flex items-center">
                <div className="h-2 w-16 rounded-full bg-gray-400" />
              </div>
              <div className="flex-1 h-7 relative flex items-center px-0.5">
                <div className={cn("h-4 rounded-md shadow-sm", t.clr)} style={{ width: `${t.w}%`, marginLeft: `${t.off}%` }} />
              </div>
            </div>
          ))}
          {[...Array(10)].map((_, row) => (
            <div key={row} className="flex border-b border-gray-50 bg-white">
              <div className="w-7 border-r border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-[6.5px] text-gray-400">{row + 9}</span>
              </div>
              <div className="w-24 h-6 border-r border-gray-200" />
              <div className="flex-1 h-6" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Variant 3: Data analysis with pivot-like layout
  if (mod === 3) {
    const regions = ["North", "South", "East", "West"]
    return (
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <div className="flex bg-[#e2efda] border-b border-gray-200 shrink-0">
            <div className="w-7 border-r border-gray-200 h-5" />
            {["Region", "Q1", "Q2", "Q3", "Q4", "Total"].map(c => (
              <div key={c} className="flex-1 h-5 border-r border-gray-200 flex items-center justify-center">
                <div className="h-2 rounded-full bg-[#107c41]" style={{ width: "65%" }} />
              </div>
            ))}
          </div>
          {regions.map((_, row) => (
            <div key={row} className={cn("flex border-b border-gray-100", row % 2 === 0 ? "bg-[#f9fff9]/60" : "bg-white")}>
              <div className="w-7 border-r border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-[6.5px] text-gray-400">{row + 2}</span>
              </div>
              <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
                <div className="h-2 w-10 rounded-full bg-gray-500" />
              </div>
              {[...Array(4)].map((_, col) => (
                <div key={col} className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
                  <div className={cn("h-1.5 rounded-full", col === row ? "bg-[#107c41]" : "bg-gray-300")} style={{ width: `${35 + ((row + col) * 15) % 50}%` }} />
                </div>
              ))}
              <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
                <div className="h-2 rounded-full bg-[#107c41]/70" style={{ width: "70%" }} />
              </div>
            </div>
          ))}
          <div className="flex border-b border-gray-200 bg-[#e2efda]">
            <div className="w-7 border-r border-gray-200 h-6" />
            {[...Array(6)].map((_, c) => (
              <div key={c} className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
                <div className="h-2 rounded-full bg-[#107c41]" style={{ width: "60%" }} />
              </div>
            ))}
          </div>
          {/* Empty rows */}
          <div className="flex border-b border-gray-50 bg-white h-2" />
          {/* Pie-like chart area */}
          <div className="px-4 py-3 flex gap-4">
            <div className="flex-1 rounded-lg border border-gray-200 p-2 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full border-[6px] border-[#107c41] border-t-blue-400 border-r-amber-400" />
            </div>
            <div className="flex-1 rounded-lg border border-gray-200 p-2">
              <Bars data={[65, 48, 82, 55]} color="from-[#107c41]/80 to-[#107c41]" h={56} />
            </div>
          </div>
          {[...Array(6)].map((_, row) => (
            <div key={row} className="flex border-b border-gray-50 bg-white">
              <div className="w-7 border-r border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-[6.5px] text-gray-400">{row + 12}</span>
              </div>
              {[...Array(6)].map((_, col) => (
                <div key={col} className="flex-1 h-6 border-r border-gray-50" />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Variant 4: Inventory tracker with status indicators
  const items = [
    { stock: 92, status: "bg-green-100" },
    { stock: 15, status: "bg-red-100" },
    { stock: 67, status: "bg-green-100" },
    { stock: 8, status: "bg-red-100" },
    { stock: 45, status: "bg-yellow-100" },
    { stock: 88, status: "bg-green-100" },
    { stock: 23, status: "bg-yellow-100" },
    { stock: 5, status: "bg-red-100" },
  ]
  return (
    <div className="flex-1 flex overflow-hidden">
      <div className="flex-1 overflow-hidden">
        <div className="flex bg-[#e2efda] border-b border-gray-200 shrink-0">
          <div className="w-7 border-r border-gray-200 h-5" />
          {["SKU", "Product", "Stock", "Price", "Status", "Reorder"].map(c => (
            <div key={c} className="flex-1 h-5 border-r border-gray-200 flex items-center justify-center">
              <div className="h-2 rounded-full bg-[#107c41]" style={{ width: "65%" }} />
            </div>
          ))}
        </div>
        {items.map((item, row) => (
          <div key={row} className={cn("flex border-b border-gray-100", row % 2 === 0 ? "bg-[#f9fff9]/60" : "bg-white")}>
            <div className="w-7 border-r border-gray-200 flex items-center justify-center shrink-0">
              <span className="text-[6.5px] text-gray-400">{row + 2}</span>
            </div>
            <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
              <div className="h-1.5 w-10 rounded-full bg-gray-400" />
            </div>
            <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
              <div className="h-2 w-14 rounded-full bg-gray-400" />
            </div>
            <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
              <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                <div className={cn("h-full rounded-full", item.stock > 50 ? "bg-emerald-400" : item.stock > 20 ? "bg-amber-400" : "bg-red-400")} style={{ width: `${item.stock}%` }} />
              </div>
            </div>
            <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
              <div className="h-1.5 w-8 rounded-full bg-gray-300" />
            </div>
            <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
              <div className={cn("h-3.5 w-12 rounded-full", item.status)} />
            </div>
            <div className="flex-1 h-6 border-r border-gray-100 px-1.5 flex items-center">
              {item.stock < 20 && <div className="h-3 w-10 rounded bg-[#107c41]/15 border border-[#107c41]/30" />}
            </div>
          </div>
        ))}
        {[...Array(8)].map((_, row) => (
          <div key={row} className="flex border-b border-gray-50 bg-white">
            <div className="w-7 border-r border-gray-200 flex items-center justify-center shrink-0">
              <span className="text-[6.5px] text-gray-400">{row + 10}</span>
            </div>
            {[...Array(6)].map((_, col) => (
              <div key={col} className="flex-1 h-6 border-r border-gray-50" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function ExcelMockup({ color, variant = 0 }: { color: string; variant?: number }) {
  const mod = variant % 5
  const tabs = [
    ["Dashboard", "Data", "Charts", "Summary"],
    ["Budget", "Expenses", "Income", "Summary"],
    ["Timeline", "Tasks", "Resources", "Report"],
    ["Pivot", "Raw Data", "Charts", "Notes"],
    ["Inventory", "Orders", "Suppliers", "Reports"],
  ][mod]
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl bg-white shadow-2xl overflow-hidden">
        {/* Ribbon */}
        <div className="bg-[#107c41] px-4 py-2 flex items-center gap-3 shrink-0">
          <div className="h-5 w-5 bg-white/22 rounded flex items-center justify-center">
            <div className="h-3 w-3 border border-white/60 rounded-sm" />
          </div>
          <div className="h-2 w-20 rounded bg-white/38" />
          <div className="ml-auto flex gap-2">
            {[...Array(5)].map((_, i) => <div key={i} className="h-3.5 w-8 rounded bg-white/18" />)}
          </div>
        </div>
        {/* Toolbar */}
        <div className="bg-[#f4f4f2] border-b border-gray-200 px-3 py-1.5 flex items-center gap-1.5 shrink-0">
          {[...Array(8)].map((_, i) => <div key={i} className="h-3.5 w-5 rounded bg-gray-300" />)}
          <div className="w-px h-3.5 bg-gray-300 mx-1" />
          {[...Array(3)].map((_, i) => <div key={i} className="h-3.5 w-3.5 rounded bg-gray-300" />)}
          <div className="ml-auto h-3.5 w-16 rounded bg-gray-300" />
        </div>
        {/* Formula bar */}
        <div className="bg-white border-b border-gray-200 px-3 py-1 flex items-center gap-2 shrink-0">
          <div className="h-4 w-10 rounded border border-gray-200 bg-gray-50" />
          <div className="h-3 w-px bg-gray-300" />
          <div className="flex-1 h-4 rounded border border-gray-200" />
        </div>
        {/* Main area */}
        <ExcelGrid variant={variant} color={color} />
        {/* Sheet tabs */}
        <div className="bg-[#f4f4f2] border-t border-gray-200 px-2 py-0.5 flex gap-0.5 shrink-0">
          {tabs.map((s, i) => (
            <div key={s} className={cn("px-3 py-0.5 rounded-t border border-gray-200 border-b-0",
              i === 0 ? "bg-white" : "bg-[#f4f4f2] opacity-55"
            )}>
              <div className="h-1.5 rounded-full" style={{ width: s.length * 5, background: i === 0 ? "#107c41" : "#9ca3af" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



// ─── Word / Google Docs ───────────────────────────────────────────────────────

function DocumentMockup({ color, isGoogle = false, variant = 0 }: { color: string; isGoogle?: boolean; variant?: number }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl bg-white shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className={cn("px-4 py-2 flex items-center gap-3 shrink-0",
          isGoogle ? "bg-white border-b border-gray-200" : "bg-[#2b579a]")}>
          {isGoogle ? (
            <>
              <div className="flex gap-1">
                {["#ea4335", "#fbbc04", "#34a853", "#4285f4"].map(c => (
                  <div key={c} className="h-2.5 w-2.5 rounded-full opacity-80" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="h-2 w-24 rounded-full bg-gray-300 ml-1" />
              <div className="ml-auto flex gap-1.5 items-center">
                <div className="h-6 px-2 rounded-full border border-gray-200 flex items-center gap-1">
                  <div className="h-1.5 w-8 rounded-full bg-gray-400" />
                </div>
                <div className="h-6 px-2 rounded-full bg-[#4285f4] flex items-center gap-1">
                  <div className="h-1.5 w-8 rounded-full bg-white/80" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="h-5 w-5 bg-white/20 rounded flex items-center justify-center shrink-0">
                <span className="text-[9px] font-black text-white">W</span>
              </div>
              <div className="h-2 w-28 rounded-full bg-white/48" />
              <div className="ml-auto flex gap-1.5">
                {[...Array(3)].map((_, i) => <div key={i} className="h-4 w-8 rounded bg-white/18" />)}
              </div>
            </>
          )}
        </div>

        {/* Toolbar */}
        <div className="bg-[#f9f9f9] border-b border-gray-200 px-3 py-1 flex items-center gap-1.5 shrink-0">
          {[...Array(6)].map((_, i) => <div key={i} className="h-3.5 w-5 rounded bg-gray-300" />)}
          <div className="w-px h-3.5 bg-gray-200 mx-1" />
          <div className="h-3.5 w-14 rounded bg-gray-300" />
          <div className="w-px h-3.5 bg-gray-200 mx-1" />
          {["B", "I", "U"].map(t => (
            <div key={t} className="h-3.5 w-3.5 rounded bg-gray-300 flex items-center justify-center">
              <span className="text-[5.5px] text-gray-500 font-black">{t}</span>
            </div>
          ))}
        </div>

        {/* Document area */}
        <div className="flex-1 bg-gray-100 overflow-hidden flex justify-center pt-5">
          <div className="w-3/4 max-w-[240px] bg-white shadow-lg min-h-full p-6 flex flex-col gap-3">
            {variant % 5 === 0 ? (
              /* Resume */
              <>
                <div className="text-center space-y-1.5 border-b border-gray-200 pb-4 mb-1">
                  <div className="h-6 w-36 rounded bg-gray-800 mx-auto" />
                  <div className="h-1.5 w-52 rounded-full bg-gray-300 mx-auto" />
                  <div className="h-1.5 w-44 rounded-full bg-gray-200 mx-auto" />
                </div>
                {["EXPERIENCE", "EDUCATION", "SKILLS"].map(s => (
                  <div key={s} className="space-y-2">
                    <div className="h-2.5 w-20 rounded bg-gray-700 border-b-2 border-gray-800 pb-0.5" />
                    <div className="pl-2 space-y-1">
                      <div className="h-2.5 w-32 rounded bg-gray-500" />
                      <Lines widths={[100, 88, 74, 88, 68]} cls="bg-gray-200" />
                    </div>
                  </div>
                ))}
                <div className="space-y-2">
                  <div className="h-2.5 w-24 rounded bg-gray-700 border-b-2 border-gray-800 pb-0.5" />
                  <div className="pl-2 flex flex-wrap gap-1">
                    {[60, 45, 70, 55, 48, 62].map((w, i) => (
                      <div key={i} className="h-4 rounded-full bg-gray-100 border border-gray-200" style={{ width: w }} />
                    ))}
                  </div>
                </div>
              </>
            ) : variant % 5 === 1 ? (
              /* Business letter */
              <>
                <div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-1">
                  <div className="space-y-1.5">
                    <div className="h-7 w-36 rounded-lg bg-gray-800" />
                    <div className="h-2 w-24 rounded-full bg-gray-300" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-100 border border-gray-200" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-20 rounded-full bg-gray-400" />
                  <div className="h-2 w-28 rounded-full bg-gray-300" />
                  <div className="h-2 w-16 rounded-full bg-gray-300" />
                </div>
                <div className="space-y-2 mt-2">
                  <div className="h-3 w-16 rounded bg-gray-600" />
                  <Lines widths={[100, 100, 94, 88, 100, 82, 97, 90, 100, 75, 88, 60]} cls="bg-gray-200" />
                </div>
                <div className="space-y-1.5 mt-2">
                  <Lines widths={[100, 92, 85, 76, 88, 60]} cls="bg-gray-200" />
                </div>
                <div className="mt-auto pt-4 space-y-1">
                  <div className="h-2 w-20 rounded-full bg-gray-400" />
                  <div className="h-4 w-24 rounded bg-gray-300 italic" />
                </div>
              </>
            ) : variant % 5 === 2 ? (
              /* Report with charts */
              <>
                <div className="text-center border-b border-gray-200 pb-3 mb-1 space-y-1">
                  <div className="h-5 w-40 rounded bg-gray-800 mx-auto" />
                  <div className="h-2 w-28 rounded-full bg-gray-400 mx-auto" />
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 mx-auto" />
                </div>
                <div className="space-y-1">
                  <div className="h-3 w-28 rounded bg-gray-700" />
                  <Lines widths={[100, 88, 75, 92]} cls="bg-gray-200" />
                </div>
                {/* Mini chart */}
                <div className="rounded-lg border border-gray-200 p-2">
                  <div className="h-2 w-16 rounded-full bg-gray-500 mb-2" />
                  <div className="h-12 flex items-end gap-0.5">
                    {[35, 55, 42, 68, 52, 78, 60].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm bg-gray-400" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="h-3 w-24 rounded bg-gray-700" />
                  <Lines widths={[100, 92, 80, 88, 70]} cls="bg-gray-200" />
                </div>
                {/* Mini table */}
                <div className="rounded border border-gray-200 overflow-hidden">
                  {[...Array(4)].map((_, r) => (
                    <div key={r} className={cn("flex border-b border-gray-100", r === 0 && "bg-gray-50")}>
                      {[...Array(3)].map((_, c) => (
                        <div key={c} className="flex-1 h-4 border-r border-gray-100 px-1 flex items-center">
                          <div className={cn("h-1.5 rounded-full", r === 0 ? "bg-gray-500" : "bg-gray-200")} style={{ width: `${50 + c * 15}%` }} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            ) : variant % 5 === 3 ? (
              /* Contract / Legal */
              <>
                <div className="text-center border-b-2 border-gray-800 pb-3 mb-2">
                  <div className="h-5 w-44 rounded bg-gray-800 mx-auto" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-2.5 w-20 rounded bg-gray-700" />
                  <Lines widths={[100, 100, 94, 88, 100, 82]} cls="bg-gray-200" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-2.5 w-24 rounded bg-gray-700" />
                  <Lines widths={[100, 92, 100, 85, 100, 78, 65]} cls="bg-gray-200" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-2.5 w-28 rounded bg-gray-700" />
                  <Lines widths={[100, 88, 100, 92, 40]} cls="bg-gray-200" />
                </div>
                <div className="mt-auto pt-4 flex justify-between">
                  <div className="space-y-1">
                    <div className="h-px w-24 bg-gray-800" />
                    <div className="h-1.5 w-20 rounded-full bg-gray-300" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-px w-24 bg-gray-800" />
                    <div className="h-1.5 w-20 rounded-full bg-gray-300" />
                  </div>
                </div>
              </>
            ) : (
              /* Newsletter */
              <>
                <div className={cn("rounded-lg p-3 text-center space-y-1.5 bg-gradient-to-r", color)}>
                  <div className="h-4 w-28 rounded bg-white/80 mx-auto" />
                  <div className="h-1.5 w-20 rounded-full bg-white/50 mx-auto" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-3 w-32 rounded bg-gray-700" />
                  <Lines widths={[100, 88, 74]} cls="bg-gray-200" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className={cn("rounded-lg h-16 bg-gradient-to-br", color)} />
                  <div className="space-y-1.5 flex flex-col justify-center">
                    <div className="h-2.5 w-full rounded bg-gray-600" />
                    <Lines widths={[100, 80]} cls="bg-gray-200" />
                  </div>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="space-y-1.5">
                  <div className="h-3 w-24 rounded bg-gray-700" />
                  <Lines widths={[100, 92, 85, 76]} cls="bg-gray-200" />
                </div>
                <div className={cn("rounded-lg h-6 flex items-center justify-center bg-gradient-to-r", color)}>
                  <div className="h-2 w-16 rounded-full bg-white/80" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


// ─── Main export ─────────────────────────────────────────────────────────────

export function TemplatePreview({ tool, style, color, variant = 0, className }: Props) {
  const render = () => {
    switch (tool) {
      case "Excel":
        return <ExcelMockup color={color} variant={variant} />
      case "Word":
        return <DocumentMockup color={color} isGoogle={false} variant={variant} />
      case "Google Docs":
        return <DocumentMockup color={color} isGoogle={true} variant={variant} />
      case "Google Slides":
        return <SlideEditorChrome color={color} variant={variant} isGoogle />
      default:
        return <SlideEditorChrome color={color} variant={variant} />
    }
  }

  return (
    <div className={cn("relative overflow-hidden rounded-xl shadow-lg border border-border/50 bg-background", className)}>
      {render()}
    </div>
  )
}
