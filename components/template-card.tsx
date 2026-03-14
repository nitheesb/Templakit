"use client"

import type { ReactElement } from "react"
import Link from "next/link"
import { Star, Download, Eye, Flame, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Template } from "@/lib/templates"
import { formatDownloads } from "@/lib/templates"

interface TemplateCardProps {
  template: Template
  className?: string
}

// ─── Slide variants ──────────────────────────────────────────────────────────

/** Modern: dark pitch deck — big hero title + metric stats + chart */
function SlidePitchDeck({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm">
        {/* Nav bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-black/15">
          <div className="flex gap-1.5">
            <div className="h-1.5 w-5 rounded-full bg-white/60" />
            <div className="h-1.5 w-8 rounded-full bg-white/35" />
            <div className="h-1.5 w-6 rounded-full bg-white/35" />
          </div>
          <div className="h-4 w-12 rounded-full bg-white/20" />
        </div>
        {/* Hero */}
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-5 text-center">
          <div className="h-1 w-8 rounded-full bg-white/40" />
          <div className="h-5 w-3/4 rounded-lg bg-white/85" />
          <div className="h-2.5 w-1/2 rounded-full bg-white/55" />
          {/* Metric row */}
          <div className="mt-2 flex gap-3">
            {["$4.2M","18K","92%"].map((v,i) => (
              <div key={i} className="flex flex-col items-center rounded-lg bg-white/15 px-3 py-1.5">
                <div className="h-3 w-8 rounded bg-white/80" />
                <div className="mt-0.5 h-1.5 w-10 rounded-full bg-white/40" />
              </div>
            ))}
          </div>
        </div>
        {/* Page dots */}
        <div className="flex justify-center gap-1 py-2">
          {[0,1,2,3,4].map(i => <div key={i} className={cn("h-1 rounded-full", i===0?"w-4 bg-white/80":"w-1.5 bg-white/25")} />)}
        </div>
      </div>
    </div>
  )
}

/** Corporate: KPI dashboard slide — metric blocks + bar chart + table */
function SlideReport({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl bg-white/90 overflow-hidden shadow-inner">
        {/* Branded header */}
        <div className={cn("flex items-center justify-between px-3 py-2 bg-gradient-to-r", color)}>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-white/70" />
            <div className="h-2 w-14 rounded-full bg-white/60" />
          </div>
          <div className="h-2 w-10 rounded-full bg-white/40" />
        </div>
        {/* KPI blocks */}
        <div className="flex gap-1.5 px-2.5 pt-2">
          {[["$2.4M","Revenue"],["↑ 34%","Growth"],["4,821","Users"]].map(([v,l],i) => (
            <div key={i} className="flex-1 rounded-lg border border-gray-100 bg-gray-50 p-1.5">
              <div className="h-2.5 w-8 rounded bg-gray-700" />
              <div className="mt-0.5 h-1.5 w-10 rounded-full bg-gray-300" />
            </div>
          ))}
        </div>
        {/* Chart + table */}
        <div className="flex flex-1 gap-2 px-2.5 pb-2 pt-1.5">
          <div className="flex-1 rounded-lg border border-gray-100 bg-gray-50 p-2 flex flex-col justify-end">
            <div className="flex items-end justify-around gap-1 h-full">
              {[55,75,45,90,65,80,50].map((h,i) => (
                <div key={i} className="flex-1 rounded-t bg-blue-400/60" style={{height:`${h}%`}} />
              ))}
            </div>
            <div className="mt-1 flex justify-around">
              {[1,2,3,4,5,6,7].map(i => <div key={i} className="h-1 w-2 rounded-full bg-gray-300" />)}
            </div>
          </div>
          <div className="w-20 flex flex-col gap-0.5 rounded-lg border border-gray-100 bg-gray-50 p-1.5">
            <div className="h-1.5 w-full rounded-full bg-gray-300" />
            {[1,2,3,4].map(i => (
              <div key={i} className="flex gap-0.5">
                <div className="h-1.5 w-10 rounded-full bg-gray-200" />
                <div className="h-1.5 w-6 rounded-full bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Minimal: clean typography slide — editorial white design */
function SlideMinimal({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl bg-white/95 shadow-inner overflow-hidden">
        {/* Top accent line */}
        <div className={cn("h-1 w-full bg-gradient-to-r", color)} />
        <div className="flex flex-1 flex-col justify-center px-5 py-3">
          {/* Page label */}
          <div className="mb-3 flex items-center gap-2">
            <div className="h-0.5 w-4 bg-gray-700" />
            <div className="h-1.5 w-8 rounded-full bg-gray-300" />
          </div>
          {/* Title block */}
          <div className="h-5 w-3/4 rounded bg-gray-800" />
          <div className="mt-1.5 h-2 w-1/2 rounded-full bg-gray-400" />
          {/* Divider */}
          <div className="my-3 h-px w-full bg-gray-100" />
          {/* Body text */}
          <div className="space-y-1.5">
            {[1,.9,.95,.7,.8].map((w,i) => (
              <div key={i} className="h-1.5 rounded-full bg-gray-200" style={{width:`${w*100}%`}} />
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 px-4 py-1.5">
          <div className="h-1.5 w-8 rounded-full bg-gray-200" />
          <div className="h-1.5 w-6 rounded-full bg-gray-300" />
          <div className="h-1.5 w-8 rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  )
}

/** Creative: visual-heavy, abstract shapes + bold headline */
function SlideCreative({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      {/* Abstract decorative shapes */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-sm" />
      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-black/15 blur-md" />
      <div className="absolute right-8 bottom-12 h-12 w-12 rotate-45 rounded-lg bg-white/10" />
      {/* Content */}
      <div className="absolute inset-4 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="h-4 w-4 rounded-full bg-white/50" />
          <div className="flex flex-col gap-1 items-end">
            <div className="h-1.5 w-8 rounded-full bg-white/35" />
            <div className="h-1.5 w-12 rounded-full bg-white/25" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="h-8 w-3/4 rounded-xl bg-white/80" />
          <div className="h-2.5 w-1/2 rounded-full bg-white/50" />
          <div className="mt-1 flex gap-1.5">
            <div className="h-6 w-16 rounded-full bg-white/30 backdrop-blur-sm" />
            <div className="h-6 w-14 rounded-full border border-white/40 bg-transparent" />
          </div>
        </div>
        <div className="flex justify-center gap-1.5">
          {[0,1,2,3].map(i=><div key={i} className={cn("h-1 rounded-full",i===0?"w-4 bg-white/80":"w-1.5 bg-white/30")} />)}
        </div>
      </div>
    </div>
  )
}

/** Bold: impact stat slide — huge number, strong typography */
function SlideBold({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-0 flex overflow-hidden rounded-lg">
        {/* Left color block */}
        <div className="w-2 shrink-0 bg-white/30" />
        {/* Content */}
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-4 text-center">
          {/* HUGE number */}
          <div className="h-10 w-2/3 rounded-xl bg-white/85 shadow-lg" />
          <div className="h-2.5 w-1/2 rounded-full bg-white/60" />
          {/* Icon row */}
          <div className="flex gap-3 mt-1">
            {[1,2,3].map(i => <div key={i} className="h-8 w-8 rounded-full bg-white/20 border border-white/30" />)}
          </div>
        </div>
        {/* Right stat panel */}
        <div className="w-20 shrink-0 flex flex-col justify-center gap-2 bg-black/15 px-2 py-3">
          {[85,60,75].map((h,i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <div className="h-1.5 w-8 rounded-full bg-white/60" />
              <div className="h-2 rounded bg-white/30 w-full" style={{width:`${h}%`}} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/** Elegant: editorial split layout — image left, text right */
function SlideElegant({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex rounded-xl overflow-hidden shadow-inner">
        {/* Image / visual half */}
        <div className="w-2/5 flex-col flex items-center justify-center bg-black/20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          {/* Placeholder portrait */}
          <div className="relative z-10 flex flex-col items-center gap-1.5">
            <div className="h-12 w-12 rounded-full bg-white/30" />
            <div className="h-1.5 w-14 rounded-full bg-white/60" />
            <div className="h-1 w-10 rounded-full bg-white/40" />
          </div>
        </div>
        {/* Text half */}
        <div className="flex-1 flex flex-col justify-center bg-white/90 px-3 py-3 gap-2">
          {/* Decorative rule */}
          <div className={cn("h-0.5 w-6 bg-gradient-to-r rounded-full", color)} />
          <div className="h-4 w-4/5 rounded bg-gray-800" />
          <div className="h-2 w-3/5 rounded-full bg-gray-400" />
          <div className="space-y-1 mt-1">
            {[.9,.75,.85,.7].map((w,i) => (
              <div key={i} className="h-1.5 rounded-full bg-gray-200" style={{width:`${w*100}%`}} />
            ))}
          </div>
          <div className="mt-1 flex items-center gap-1.5">
            <div className={cn("h-5 w-12 rounded-full bg-gradient-to-r", color, "opacity-80")} />
            <div className="h-5 w-8 rounded-full border border-gray-200 bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const SLIDE_VARIANTS: Record<string, (p: { color: string }) => ReactElement> = {
  Modern:    SlidePitchDeck,
  Corporate: SlideReport,
  Minimal:   SlideMinimal,
  Creative:  SlideCreative,
  Bold:      SlideBold,
  Elegant:   SlideElegant,
}

// ─── Spreadsheet mockup ───────────────────────────────────────────────────────
function SpreadsheetMockup({ color }: { color: string }) {
  const rows = 5
  const cols = 4
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl bg-white/95 overflow-hidden shadow-inner">
        {/* Excel-style toolbar */}
        <div className="flex items-center gap-1 bg-green-700 px-3 py-1.5">
          <div className="h-2 w-6 rounded-full bg-white/70" />
          <div className="h-2 w-10 rounded-full bg-white/50" />
          <div className="flex-1" />
          <div className="h-4 w-16 rounded bg-white/20" />
        </div>
        {/* Formula bar */}
        <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-2 py-1">
          <div className="h-1.5 w-8 rounded-full bg-gray-300" />
          <div className="h-px flex-1 bg-gray-200" />
          <div className="h-1.5 w-20 rounded-full bg-gray-200" />
        </div>
        {/* Grid */}
        <div className="flex-1 overflow-hidden">
          <div className="flex border-b border-gray-200 bg-gray-100 text-[8px]">
            <div className="w-5 shrink-0 border-r border-gray-200" />
            {Array.from({length:cols}).map((_,c) => (
              <div key={c} className="flex-1 flex items-center justify-center border-r border-gray-200 py-0.5">
                <div className="h-1.5 w-3 rounded-full bg-gray-400" />
              </div>
            ))}
          </div>
          {Array.from({length:rows}).map((_,r) => (
            <div key={r} className={cn("flex border-b border-gray-100", r===0&&"bg-green-50")}>
              <div className="w-5 shrink-0 flex items-center justify-center border-r border-gray-200 bg-gray-50">
                <div className="h-1.5 w-2 rounded-full bg-gray-400" />
              </div>
              {Array.from({length:cols}).map((_,c) => (
                <div key={c} className="flex-1 flex items-center px-1 border-r border-gray-100 py-1">
                  <div className={cn("h-1.5 rounded-full", r===0?"bg-green-600/60":"bg-gray-200", c===0?"w-4/5":"w-2/3")} />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Sheet tabs */}
        <div className="flex items-center gap-0.5 border-t border-gray-200 bg-gray-50 px-1 py-0.5">
          <div className="rounded-t bg-white border border-b-0 border-gray-200 px-2 py-0.5">
            <div className="h-1.5 w-8 rounded-full bg-gray-400" />
          </div>
          <div className="px-2 py-0.5"><div className="h-1.5 w-6 rounded-full bg-gray-300" /></div>
        </div>
      </div>
    </div>
  )
}

// ─── Canva social mockup ──────────────────────────────────────────────────────
function CanvaMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      {/* Canva editor chrome */}
      <div className="absolute inset-0 flex flex-col overflow-hidden rounded-xl">
        {/* Top toolbar */}
        <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5">
          <div className="h-2 w-2 rounded-full bg-white/60" />
          <div className="h-1.5 flex-1 rounded-full bg-white/20" />
          <div className="flex gap-1">
            <div className="h-5 w-12 rounded bg-white/20" />
            <div className="h-5 w-16 rounded bg-white/80" />
          </div>
        </div>
        {/* Canvas + sidebar */}
        <div className="flex flex-1 gap-0">
          {/* Left panel */}
          <div className="w-8 shrink-0 flex flex-col gap-2 bg-black/20 p-1.5 items-center">
            {[1,2,3,4,5].map(i => <div key={i} className="h-5 w-5 rounded-lg bg-white/15" />)}
          </div>
          {/* Canvas */}
          <div className="flex-1 flex items-center justify-center bg-[#f0f0f0]/20 p-2">
            <div className="aspect-square w-full max-h-full rounded-lg overflow-hidden relative">
              {/* Social card mockup */}
              <div className={cn("absolute inset-0 bg-gradient-to-br", color, "opacity-80")} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-2">
                <div className="h-8 w-8 rounded-full bg-white/40" />
                <div className="h-2.5 w-3/4 rounded-full bg-white/80" />
                <div className="h-1.5 w-1/2 rounded-full bg-white/55" />
                <div className="mt-1 h-5 w-16 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Figma UI kit mockup ──────────────────────────────────────────────────────
function FigmaMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-[#1e1e1e] bg-gradient-to-br", color, "bg-blend-overlay")}>
      <div className="absolute inset-0 flex overflow-hidden rounded-xl" style={{background:"rgba(30,30,30,0.85)"}}>
        {/* Layers panel */}
        <div className="w-16 shrink-0 bg-black/40 p-2 flex flex-col gap-1">
          <div className="h-2 w-full rounded-full bg-white/50" />
          <div className="h-px bg-white/10 my-0.5" />
          {[90,70,80,65,75,55,80,60].map((w,i) => (
            <div key={i} className="flex items-center gap-0.5 pl-1">
              <div className="h-1 w-1 rounded-full bg-white/20 shrink-0" />
              <div className="h-1.5 rounded-full bg-white/20" style={{width:`${w}%`}} />
            </div>
          ))}
        </div>
        {/* Canvas */}
        <div className="flex-1 flex items-center justify-center p-2">
          <div className="h-full w-4/5 rounded-lg border border-white/15 bg-white/5 flex flex-col overflow-hidden">
            {/* Navbar */}
            <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1.5 border-b border-white/10">
              <div className="h-2 w-2 rounded-full bg-white/50" />
              <div className="h-1.5 w-10 rounded-full bg-white/35" />
              <div className="flex-1" />
              <div className="flex gap-1">
                <div className="h-1.5 w-5 rounded-full bg-white/30" />
                <div className="h-1.5 w-5 rounded-full bg-white/30" />
              </div>
            </div>
            {/* Component grid */}
            <div className="flex-1 p-2 grid grid-cols-3 gap-1">
              {Array.from({length:9}).map((_,i) => (
                <div key={i} className={cn("rounded-md border border-white/10 bg-white/5 flex items-center justify-center", i===4&&"bg-white/15")}>
                  <div className="h-2 w-6 rounded-full bg-white/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Properties */}
        <div className="w-16 shrink-0 bg-black/40 p-2 flex flex-col gap-1.5">
          <div className="h-2 w-full rounded-full bg-white/50" />
          {[1,2,3].map(i => <div key={i} className="h-4 w-full rounded bg-white/10" />)}
          <div className="flex gap-0.5 mt-1">
            {[1,2,3].map(i => <div key={i} className="flex-1 h-5 rounded bg-white/10" />)}
          </div>
          <div className="h-2 w-3/4 rounded-full bg-white/30 mt-0.5" />
        </div>
      </div>
    </div>
  )
}

// ─── Word / Google Docs mockup ────────────────────────────────────────────────
function DocumentMockup({ color, isWord }: { color: string; isWord?: boolean }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl bg-white/95 shadow-inner overflow-hidden">
        {/* App bar */}
        <div className={cn("flex items-center gap-2 px-3 py-1.5", isWord ? "bg-blue-700" : "bg-white border-b border-gray-200")}>
          {isWord ? (
            <>
              <div className="h-2.5 w-2.5 rounded-sm bg-white font-bold flex items-center justify-center text-blue-700" style={{fontSize:6}}>W</div>
              <div className="h-1.5 w-24 rounded-full bg-white/60" />
            </>
          ) : (
            <>
              <div className="h-2.5 w-2.5 rounded-sm bg-blue-500" />
              <div className="h-1.5 w-24 rounded-full bg-gray-300" />
            </>
          )}
          <div className="flex-1" />
          <div className="flex gap-1">
            <div className={cn("h-1.5 w-5 rounded-full", isWord?"bg-white/50":"bg-gray-200")} />
            <div className={cn("h-1.5 w-5 rounded-full", isWord?"bg-white/50":"bg-gray-200")} />
          </div>
        </div>
        {/* Page */}
        <div className="flex-1 flex flex-col bg-gray-100 p-2 overflow-hidden">
          <div className="flex-1 bg-white rounded shadow-sm mx-auto w-full p-3 flex flex-col gap-1.5">
            {/* Name / letterhead */}
            <div className="h-3 w-2/5 rounded bg-gray-800 mb-0.5" />
            <div className="h-1.5 w-1/3 rounded-full bg-gray-400 mb-1.5" />
            <div className="h-px w-full bg-gray-200 mb-1.5" />
            {[1,.92,.85,.88,.7,.9,.8,.78,.85,.65].map((w,i) => (
              <div key={i} className="h-1.5 rounded-full bg-gray-200" style={{width:`${w*100}%`}} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Notion mockup ────────────────────────────────────────────────────────────
function NotionMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex rounded-xl bg-white/95 overflow-hidden shadow-inner">
        {/* Sidebar */}
        <div className="w-16 shrink-0 bg-gray-50 border-r border-gray-100 p-2 flex flex-col gap-1.5">
          <div className="flex items-center gap-1 mb-1">
            <div className="h-4 w-4 rounded bg-gray-800" />
            <div className="h-1.5 w-8 rounded-full bg-gray-400" />
          </div>
          <div className="h-px bg-gray-200 my-0.5" />
          {["full","4/5","3/4","full","4/5","2/3","full","3/5"].map((w,i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="h-2.5 w-2.5 rounded bg-gray-300 shrink-0" />
              <div className={`h-1.5 w-${w} rounded-full bg-gray-300`} />
            </div>
          ))}
        </div>
        {/* Page content */}
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
          <div className="h-6 w-3/5 rounded bg-gray-800 mt-1" />
          <div className="h-px bg-gray-100" />
          <div className="flex items-start gap-2">
            <div className="mt-0.5 h-3 w-3 rounded bg-gray-200 shrink-0" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-full rounded-full bg-gray-200" />
              <div className="h-1.5 w-4/5 rounded-full bg-gray-200" />
            </div>
          </div>
          {/* Property grid */}
          <div className="rounded-lg border border-gray-100 overflow-hidden">
            <div className="flex bg-gray-50 border-b border-gray-100">
              <div className="flex-1 px-1.5 py-1"><div className="h-1.5 w-10 rounded-full bg-gray-400" /></div>
              <div className="w-14 px-1.5 py-1 border-l border-gray-100"><div className="h-1.5 w-8 rounded-full bg-gray-400" /></div>
              <div className="w-12 px-1.5 py-1 border-l border-gray-100"><div className="h-1.5 w-7 rounded-full bg-gray-400" /></div>
            </div>
            {[0,1,2,3].map(r => (
              <div key={r} className="flex border-b border-gray-50">
                <div className="flex-1 px-1.5 py-1.5"><div className="h-1.5 w-4/5 rounded-full bg-gray-200" /></div>
                <div className="w-14 px-1.5 py-1.5 border-l border-gray-50">
                  <div className={cn("h-3 rounded-full px-1 text-[0px]", ["bg-blue-100","bg-green-100","bg-orange-100","bg-purple-100"][r])} style={{width:"80%"}} />
                </div>
                <div className="w-12 px-1.5 py-1.5 border-l border-gray-50"><div className="h-1.5 w-6 rounded-full bg-gray-200" /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Tool → mockup router ─────────────────────────────────────────────────────
function ToolPreview({ tool, style, color }: { tool: string; style: string; color: string }) {
  if (tool === "Excel" || tool === "Google Docs") return <SpreadsheetMockup color={color} />
  if (tool === "Word")  return <DocumentMockup color={color} isWord />
  if (tool === "Google Docs") return <DocumentMockup color={color} />
  if (tool === "Canva") return <CanvaMockup color={color} />
  if (tool === "Figma") return <FigmaMockup color={color} />
  if (tool === "Notion") return <NotionMockup color={color} />
  // Slide tools: PowerPoint, Google Slides
  const Variant = SLIDE_VARIANTS[style] ?? SlidePitchDeck
  return <Variant color={color} />
}

// ─── Card ─────────────────────────────────────────────────────────────────────
export function TemplateCard({ template, className }: TemplateCardProps) {
  return (
    <Link href={`/templates/${template.id}`} className="block">
      <article className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card card-hover",
        className
      )}>
        {/* Preview thumbnail */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
          <ToolPreview tool={template.tool} style={template.style} color={template.previewColor} />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:bg-black/35">
            <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-900 shadow-xl backdrop-blur-sm">
              <Eye className="h-3.5 w-3.5" />
              Preview
            </div>
          </div>

          {/* Badges */}
          <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5">
            {template.isNew && (
              <span className="flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-lg">
                <Sparkles className="h-2.5 w-2.5" /> NEW
              </span>
            )}
            {template.isTrending && !template.isNew && (
              <span className="flex items-center gap-1 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-lg">
                <Flame className="h-2.5 w-2.5" /> HOT
              </span>
            )}
          </div>
        </div>

        {/* Card body */}
        <div className="p-4">
          <div className="mb-2 flex items-center gap-1.5">
            <Badge variant="secondary" className="text-[11px] font-semibold">{template.tool}</Badge>
            <span className="text-[11px] text-muted-foreground">{template.style}</span>
          </div>

          <h3 className="line-clamp-1 text-sm font-semibold leading-snug text-foreground transition-colors duration-150 group-hover:text-primary">
            {template.title}
          </h3>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold">{template.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Download className="h-3 w-3" />
              {formatDownloads(template.downloads)}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-1">
            {template.formats.slice(0, 3).map(fmt => (
              <span key={fmt} className="rounded-md border border-border/70 bg-secondary/60 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                {fmt}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
