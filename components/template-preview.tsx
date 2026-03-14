"use client"
// Re-exports the TemplateCard's ToolPreview as a standalone client component
// so the server-rendered detail page can use it.
import { cn } from "@/lib/utils"

type Props = { tool: string; style: string; color: string; className?: string }

// ── Slide variants ────────────────────────────────────────────────────────────
function SlidePitchDeck({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex flex-col rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-2.5 bg-black/15">
          <div className="flex gap-2"><div className="h-2 w-8 rounded-full bg-white/60" /><div className="h-2 w-12 rounded-full bg-white/35" /></div>
          <div className="h-5 w-16 rounded-full bg-white/20" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
          <div className="h-1.5 w-10 rounded-full bg-white/40" />
          <div className="h-8 w-3/4 rounded-xl bg-white/85" />
          <div className="h-3.5 w-1/2 rounded-full bg-white/55" />
          <div className="mt-2 flex gap-4">
            {["$4.2M","18K","92%"].map((_,i) => (
              <div key={i} className="flex flex-col items-center rounded-xl bg-white/15 px-4 py-2">
                <div className="h-4 w-10 rounded bg-white/80" />
                <div className="mt-1 h-2 w-12 rounded-full bg-white/40" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-1.5 py-3">
          {[0,1,2,3,4].map(i=><div key={i} className={cn("h-1.5 rounded-full",i===0?"w-5 bg-white/80":"w-2 bg-white/25")} />)}
        </div>
      </div>
    </div>
  )
}

function SlideReport({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex flex-col rounded-xl bg-white/90 overflow-hidden shadow-inner">
        <div className={cn("flex items-center justify-between px-4 py-2.5 bg-gradient-to-r", color)}>
          <div className="flex items-center gap-2"><div className="h-4 w-4 rounded-full bg-white/70" /><div className="h-2.5 w-20 rounded-full bg-white/60" /></div>
          <div className="h-2.5 w-14 rounded-full bg-white/40" />
        </div>
        <div className="flex gap-2 px-4 pt-3">
          {[["$2.4M","Revenue"],["↑34%","Growth"],["4.8K","Users"],["98%","NPS"]].map(([v,l],i)=>(
            <div key={i} className="flex-1 rounded-lg border border-gray-100 bg-gray-50 p-2">
              <div className="h-3.5 w-10 rounded bg-gray-700" /><div className="mt-1 h-2 w-12 rounded-full bg-gray-300" />
            </div>
          ))}
        </div>
        <div className="flex flex-1 gap-3 px-4 pb-3 pt-2">
          <div className="flex-1 rounded-lg border border-gray-100 bg-gray-50 p-3 flex flex-col justify-end">
            <div className="flex items-end justify-around gap-1 h-full">
              {[55,75,45,90,65,80,50,70].map((h,i)=><div key={i} className="flex-1 rounded-t bg-blue-400/60" style={{height:`${h}%`}} />)}
            </div>
          </div>
          <div className="w-32 flex flex-col gap-1 rounded-lg border border-gray-100 bg-gray-50 p-2.5">
            <div className="h-2 w-full rounded-full bg-gray-300 mb-1" />
            {[1,2,3,4,5].map(i=>(
              <div key={i} className="flex gap-1"><div className="h-2 w-16 rounded-full bg-gray-200" /><div className="h-2 w-8 rounded-full bg-gray-200" /></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideMinimal({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex flex-col rounded-xl bg-white/95 shadow-inner overflow-hidden">
        <div className={cn("h-1.5 w-full bg-gradient-to-r", color)} />
        <div className="flex flex-1 flex-col justify-center px-8 py-4 gap-3">
          <div className="flex items-center gap-3"><div className="h-0.5 w-6 bg-gray-700" /><div className="h-2 w-10 rounded-full bg-gray-300" /></div>
          <div className="h-7 w-3/4 rounded-lg bg-gray-800" />
          <div className="h-3 w-1/2 rounded-full bg-gray-400" />
          <div className="my-2 h-px w-full bg-gray-100" />
          <div className="space-y-2">
            {[1,.9,.95,.7,.8,.85,.65].map((w,i)=><div key={i} className="h-2 rounded-full bg-gray-200" style={{width:`${w*100}%`}} />)}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-2">
          <div className="h-2 w-10 rounded-full bg-gray-200" /><div className="h-2 w-8 rounded-full bg-gray-300" /><div className="h-2 w-10 rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  )
}

function SlideCreative({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-md" />
      <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-black/15 blur-xl" />
      <div className="absolute right-12 bottom-16 h-16 w-16 rotate-45 rounded-xl bg-white/10" />
      <div className="absolute inset-6 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="h-6 w-6 rounded-full bg-white/50" />
          <div className="flex flex-col gap-1.5 items-end"><div className="h-2 w-10 rounded-full bg-white/35" /><div className="h-2 w-14 rounded-full bg-white/25" /></div>
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="h-10 w-3/4 rounded-2xl bg-white/80" />
          <div className="h-3.5 w-1/2 rounded-full bg-white/50" />
          <div className="mt-2 flex gap-2">
            <div className="h-8 w-20 rounded-full bg-white/30 backdrop-blur-sm" />
            <div className="h-8 w-16 rounded-full border border-white/40" />
          </div>
        </div>
        <div className="flex justify-center gap-2">
          {[0,1,2,3].map(i=><div key={i} className={cn("h-1.5 rounded-full",i===0?"w-5 bg-white/80":"w-2 bg-white/30")} />)}
        </div>
      </div>
    </div>
  )
}

function SlideBold({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-0 flex overflow-hidden">
        <div className="w-3 shrink-0 bg-white/30" />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
          <div className="h-12 w-2/3 rounded-2xl bg-white/85 shadow-lg" />
          <div className="h-3.5 w-1/2 rounded-full bg-white/60" />
          <div className="flex gap-4 mt-1">
            {[1,2,3].map(i=><div key={i} className="h-10 w-10 rounded-full bg-white/20 border-2 border-white/30" />)}
          </div>
        </div>
        <div className="w-24 shrink-0 flex flex-col justify-center gap-3 bg-black/15 px-3 py-4">
          {[85,60,75].map((h,i)=>(
            <div key={i} className="flex flex-col gap-1">
              <div className="h-2 w-10 rounded-full bg-white/60" />
              <div className="h-2.5 rounded bg-white/30" style={{width:`${h}%`}} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SlideElegant({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex rounded-xl overflow-hidden shadow-inner">
        <div className="w-2/5 flex flex-col items-center justify-center bg-black/20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-white/30" />
            <div className="h-2.5 w-18 rounded-full bg-white/60" />
            <div className="h-2 w-14 rounded-full bg-white/40" />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center bg-white/90 px-5 py-4 gap-3">
          <div className={cn("h-1 w-8 rounded-full bg-gradient-to-r", color)} />
          <div className="h-6 w-4/5 rounded bg-gray-800" />
          <div className="h-2.5 w-3/5 rounded-full bg-gray-400" />
          <div className="space-y-1.5">
            {[.9,.75,.85,.7,.8].map((w,i)=><div key={i} className="h-2 rounded-full bg-gray-200" style={{width:`${w*100}%`}} />)}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className={cn("h-6 w-16 rounded-full bg-gradient-to-r opacity-80", color)} />
            <div className="h-6 w-12 rounded-full border border-gray-200 bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const SLIDE_VARIANTS: Record<string, (p:{color:string})=>React.ReactElement> = {
  Modern:    SlidePitchDeck,
  Corporate: SlideReport,
  Minimal:   SlideMinimal,
  Creative:  SlideCreative,
  Bold:      SlideBold,
  Elegant:   SlideElegant,
}

import React from "react"

export function TemplatePreview({ tool, style, color, className }: Props) {
  const render = () => {
    if (tool === "Excel")       return <SpreadsheetMockup color={color} />
    if (tool === "Word")        return <DocumentMockup color={color} isWord />
    if (tool === "Google Docs") return <DocumentMockup color={color} />
    if (tool === "Canva")       return <CanvaMockup color={color} />
    if (tool === "Figma")       return <FigmaMockup color={color} />
    if (tool === "Notion")      return <NotionMockup color={color} />
    const Variant = SLIDE_VARIANTS[style] ?? SlidePitchDeck
    return <Variant color={color} />
  }

  return (
    <div className={cn("relative overflow-hidden rounded-2xl shadow-2xl", className, `bg-gradient-to-br ${color}`)}>
      {render()}
    </div>
  )
}

function SpreadsheetMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex flex-col rounded-xl bg-white/95 overflow-hidden shadow-inner">
        <div className="flex items-center gap-2 bg-green-700 px-4 py-2">
          <div className="h-2.5 w-8 rounded-full bg-white/70" /><div className="h-2.5 w-12 rounded-full bg-white/50" />
          <div className="flex-1" /><div className="h-5 w-20 rounded bg-white/20" />
        </div>
        <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-3 py-1.5">
          <div className="h-2 w-10 rounded-full bg-gray-300" /><div className="h-px flex-1 bg-gray-200" /><div className="h-2 w-24 rounded-full bg-gray-200" />
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex border-b border-gray-200 bg-gray-100">
            <div className="w-6 shrink-0 border-r border-gray-200" />
            {[1,2,3,4,5].map(c=><div key={c} className="flex-1 flex items-center justify-center border-r border-gray-200 py-1"><div className="h-2 w-4 rounded-full bg-gray-400" /></div>)}
          </div>
          {[0,1,2,3,4,5].map(r=>(
            <div key={r} className={cn("flex border-b border-gray-100", r===0&&"bg-green-50")}>
              <div className="w-6 shrink-0 flex items-center justify-center border-r border-gray-200 bg-gray-50"><div className="h-2 w-3 rounded-full bg-gray-400" /></div>
              {[1,2,3,4,5].map(c=><div key={c} className="flex-1 flex items-center px-1.5 border-r border-gray-100 py-1.5"><div className={cn("h-2 rounded-full", r===0?"bg-green-600/60":"bg-gray-200", c===0?"w-4/5":"w-2/3")} /></div>)}
            </div>
          ))}
        </div>
        <div className="flex gap-0.5 border-t border-gray-200 bg-gray-50 px-1.5 py-1">
          <div className="rounded-t border border-b-0 border-gray-200 bg-white px-3 py-0.5"><div className="h-2 w-10 rounded-full bg-gray-400" /></div>
          <div className="px-3 py-0.5"><div className="h-2 w-8 rounded-full bg-gray-300" /></div>
        </div>
      </div>
    </div>
  )
}

function DocumentMockup({ color, isWord }: { color: string; isWord?: boolean }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex flex-col rounded-xl bg-white/95 shadow-inner overflow-hidden">
        <div className={cn("flex items-center gap-2 px-4 py-2", isWord?"bg-blue-700":"bg-white border-b border-gray-200")}>
          {isWord
            ? <><div className="h-3 w-3 rounded-sm bg-white/90" /><div className="h-2 w-28 rounded-full bg-white/60" /></>
            : <><div className="h-3 w-3 rounded-sm bg-blue-500" /><div className="h-2 w-28 rounded-full bg-gray-300" /></>
          }
          <div className="flex-1" />
          <div className={cn("flex gap-1.5")}>{[1,2,3].map(i=><div key={i} className={cn("h-2 w-6 rounded-full", isWord?"bg-white/40":"bg-gray-200")} />)}</div>
        </div>
        <div className="flex-1 flex flex-col bg-gray-100 p-3 overflow-hidden">
          <div className="flex-1 bg-white rounded shadow-sm p-5 flex flex-col gap-2">
            <div className="border-b border-gray-100 pb-3">
              <div className="h-5 w-2/5 rounded bg-gray-800 mb-1.5" />
              <div className="h-2.5 w-1/3 rounded-full bg-gray-400" />
            </div>
            {[1,.92,.85,.88,.7,.9,.8,.78,.85,.65,.9,.72].map((w,i)=><div key={i} className="h-2 rounded-full bg-gray-200" style={{width:`${w*100}%`}} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

function CanvaMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-0 flex flex-col overflow-hidden">
        <div className="flex items-center gap-2 bg-black/30 px-4 py-2">
          <div className="h-2.5 w-2.5 rounded-full bg-white/60" /><div className="h-2 flex-1 rounded-full bg-white/20" />
          <div className="flex gap-1.5"><div className="h-6 w-14 rounded bg-white/20" /><div className="h-6 w-20 rounded bg-white/80" /></div>
        </div>
        <div className="flex flex-1">
          <div className="w-10 shrink-0 flex flex-col gap-2 bg-black/20 p-2 items-center">
            {[1,2,3,4,5,6].map(i=><div key={i} className="h-6 w-6 rounded-lg bg-white/15" />)}
          </div>
          <div className="flex-1 flex items-center justify-center bg-[#f0f0f0]/20 p-4">
            <div className="aspect-square w-full max-h-full rounded-xl overflow-hidden relative shadow-xl">
              <div className={cn("absolute inset-0 bg-gradient-to-br", color, "opacity-90")} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-4">
                <div className="h-10 w-10 rounded-full bg-white/40 shadow-md" />
                <div className="h-4 w-3/4 rounded-full bg-white/80" />
                <div className="h-2.5 w-1/2 rounded-full bg-white/55" />
                <div className="mt-1 h-6 w-20 rounded-full bg-white/30 border border-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FigmaMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0")} style={{background:"#1e1e1e"}}>
      <div className="absolute inset-0 flex overflow-hidden">
        <div className="w-20 shrink-0 bg-[#2c2c2c] p-2.5 flex flex-col gap-1.5">
          <div className="h-2.5 w-full rounded-full bg-white/50" />
          <div className="h-px bg-white/10 my-0.5" />
          {[90,70,80,65,75,55,80,60,70].map((w,i)=>(
            <div key={i} className="flex items-center gap-1 pl-1">
              <div className="h-1.5 w-1.5 rounded-full bg-white/20 shrink-0" />
              <div className="h-1.5 rounded-full bg-white/20" style={{width:`${w}%`}} />
            </div>
          ))}
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="h-full w-4/5 rounded-xl border border-white/15 bg-white/5 flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 border-b border-white/10">
              <div className="h-3 w-3 rounded-full bg-white/50" /><div className="h-2 w-14 rounded-full bg-white/35" />
              <div className="flex-1" />
              <div className="h-6 w-16 rounded-full bg-white/20" />
            </div>
            <div className="flex-1 p-3 grid grid-cols-3 gap-1.5">
              {Array.from({length:9}).map((_,i)=>(
                <div key={i} className={cn("rounded-lg border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-1 p-2", i===4&&"bg-white/15 border-white/25")}>
                  <div className="h-3 w-3 rounded bg-white/30" />
                  <div className="h-1.5 w-8 rounded-full bg-white/25" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-20 shrink-0 bg-[#2c2c2c] p-2.5 flex flex-col gap-2">
          <div className="h-2.5 w-full rounded-full bg-white/50" />
          {[1,2,3].map(i=><div key={i} className="h-5 w-full rounded bg-white/10" />)}
          <div className="flex gap-1 mt-1">{[1,2,3].map(i=><div key={i} className="flex-1 h-6 rounded bg-white/10" />)}</div>
          <div className="h-2 w-3/4 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  )
}

function NotionMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex rounded-xl bg-white/95 overflow-hidden shadow-inner">
        <div className="w-20 shrink-0 bg-gray-50 border-r border-gray-100 p-2.5 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="h-5 w-5 rounded bg-gray-800" /><div className="h-2 w-10 rounded-full bg-gray-400" />
          </div>
          <div className="h-px bg-gray-200 my-0.5" />
          {[1,2,3,4,5,6,7].map(i=>(
            <div key={i} className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded bg-gray-300 shrink-0" /><div className="h-2 flex-1 rounded-full bg-gray-300" />
            </div>
          ))}
        </div>
        <div className="flex-1 p-4 flex flex-col gap-2.5">
          <div className="h-8 w-3/5 rounded-lg bg-gray-800 mt-1" />
          <div className="h-px bg-gray-100" />
          <div className="flex items-start gap-2">
            <div className="mt-0.5 h-4 w-4 rounded bg-gray-200 shrink-0" />
            <div className="flex-1 space-y-1.5"><div className="h-2 w-full rounded-full bg-gray-200" /><div className="h-2 w-4/5 rounded-full bg-gray-200" /></div>
          </div>
          <div className="rounded-xl border border-gray-100 overflow-hidden mt-1">
            <div className="flex bg-gray-50 border-b border-gray-100">
              <div className="flex-1 px-2 py-1.5"><div className="h-2 w-12 rounded-full bg-gray-400" /></div>
              <div className="w-16 px-2 py-1.5 border-l border-gray-100"><div className="h-2 w-10 rounded-full bg-gray-400" /></div>
              <div className="w-14 px-2 py-1.5 border-l border-gray-100"><div className="h-2 w-8 rounded-full bg-gray-400" /></div>
            </div>
            {[0,1,2,3,4].map(r=>(
              <div key={r} className="flex border-b border-gray-50">
                <div className="flex-1 px-2 py-2"><div className="h-2 w-4/5 rounded-full bg-gray-200" /></div>
                <div className="w-16 px-2 py-2 border-l border-gray-50">
                  <div className={cn("h-3.5 rounded-full px-1",["bg-blue-100","bg-green-100","bg-orange-100","bg-purple-100","bg-red-100"][r])} style={{width:"80%"}} />
                </div>
                <div className="w-14 px-2 py-2 border-l border-gray-50"><div className="h-2 w-8 rounded-full bg-gray-200" /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
