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

// ─── PowerPoint / Google Slides mockups ─────────────────────────────────────

function SlidePitchDeck({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl overflow-hidden shadow-2xl" style={{background:"rgba(0,0,0,0.25)"}}>
        {/* slide header bar */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/25">
          {[1,2,3,4,5,6,7].map(i=><div key={i} className="h-1.5 w-6 rounded-full bg-white/25"/>)}
          <div className="ml-auto h-4 w-14 rounded-full bg-white/20"/>
        </div>
        {/* hero title area */}
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4 text-center">
          <div className="h-1 w-12 rounded-full bg-white/30 mb-1"/>
          <div className="h-6 w-4/5 rounded-lg bg-white/90"/>
          <div className="h-2.5 w-3/5 rounded-full bg-white/60"/>
          <div className="h-1.5 w-2/5 rounded-full bg-white/35"/>
          {/* stat cards */}
          <div className="mt-2 flex gap-2">
            {["$4.2M","18K","92%"].map((v,i)=>(
              <div key={i} className="flex flex-col items-center rounded-lg bg-white/15 px-3 py-2 gap-1">
                <div className="h-3.5 w-10 rounded bg-white/85"/>
                <div className="h-1 w-8 rounded-full bg-white/35"/>
              </div>
            ))}
          </div>
        </div>
        {/* slide dots */}
        <div className="flex justify-center gap-1 pb-2">
          {[0,1,2,3,4,5,6].map(i=><div key={i} className={cn("h-1 rounded-full",i===0?"w-5 bg-white/85":"w-1.5 bg-white/25")}/>)}
        </div>
      </div>
    </div>
  )
}

function SlideReport({ color }: { color: string }) {
  const bars = [55,80,45,90,65,75,50,85]
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl overflow-hidden shadow-2xl" style={{background:"rgba(0,0,0,0.28)"}}>
        {/* slide header */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/20 border-b border-white/10">
          <div className="h-2.5 w-2.5 rounded-sm bg-white/80"/>
          <div className="h-1.5 w-24 rounded-full bg-white/60"/>
          <div className="flex-1"/>
          <div className="h-1.5 w-10 rounded-full bg-white/30"/>
        </div>
        {/* kpi row */}
        <div className="flex gap-1.5 px-3 pt-2 pb-1">
          {["$2.4M","94%","12K","↑28%"].map((v,i)=>(
            <div key={i} className="flex-1 rounded-lg bg-white/12 border border-white/15 p-1.5 flex flex-col gap-0.5">
              <div className="h-3 w-full rounded bg-white/85"/>
              <div className="h-1 w-3/4 rounded-full bg-white/30"/>
            </div>
          ))}
        </div>
        {/* chart + table */}
        <div className="flex-1 px-3 py-1 flex gap-2">
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-1.5 w-16 rounded-full bg-white/40 mb-0.5"/>
            <div className="flex-1 flex items-end gap-0.5">
              {bars.map((h,i)=>(
                <div key={i} className="flex-1 rounded-t-sm" style={{height:`${h}%`,background:i===3?"rgba(255,255,255,0.85)":"rgba(255,255,255,0.3)"}}/>
              ))}
            </div>
          </div>
          <div className="w-18 flex flex-col gap-0.5">
            <div className="flex gap-1 rounded px-1 py-0.5 bg-white/15">
              <div className="h-1 flex-1 rounded-full bg-white/60"/>
              <div className="h-1 w-4 rounded-full bg-white/60"/>
            </div>
            {[1,2,3,4].map(r=>(
              <div key={r} className="flex gap-1 px-1 py-0.5">
                <div className="h-1.5 flex-1 rounded-full bg-white/25"/>
                <div className="h-1.5 w-4 rounded-full bg-white/25"/>
              </div>
            ))}
          </div>
        </div>
        {/* slide dots */}
        <div className="flex justify-center gap-1 pb-2">
          {[0,1,2,3,4,5].map(i=><div key={i} className={cn("h-1 rounded-full",i===1?"w-5 bg-white/80":"w-1.5 bg-white/25")}/>)}
        </div>
      </div>
    </div>
  )
}

function SlideMinimal({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      {/* clean semi-transparent overlay */}
      <div className="absolute inset-0" style={{background:"rgba(0,0,0,0.15)"}}/>
      {/* centered content */}
      <div className="absolute inset-0 flex flex-col justify-between px-6 py-4">
        {/* top eyebrow line */}
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-white/25"/>
          <div className="h-1.5 w-16 rounded-full bg-white/50"/>
          <div className="h-px flex-1 bg-white/25"/>
        </div>
        {/* hero text block */}
        <div className="flex flex-col gap-3">
          <div className="h-1 w-10 rounded-full bg-white/40"/>
          <div className="h-8 w-5/6 rounded-2xl bg-white/88"/>
          <div className="h-4 w-2/3 rounded-xl bg-white/60"/>
          <div className="flex flex-col gap-1.5 mt-1">
            {[0.85,0.7,0.9,0.6].map((w,i)=>(
              <div key={i} className="h-1.5 rounded-full bg-white/30" style={{width:`${w*100}%`}}/>
            ))}
          </div>
        </div>
        {/* bottom — CTA + slide nav */}
        <div className="flex items-center justify-between">
          <div className="h-6 w-20 rounded-full bg-white/88"/>
          <div className="flex gap-1">
            {[0,1,2,3,4].map(i=><div key={i} className={cn("h-1 rounded-full",i===0?"w-5 bg-white/85":"w-1.5 bg-white/30")}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideCreative({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 rounded-xl overflow-hidden shadow-2xl" style={{background:"rgba(0,0,0,0.18)"}}>
        {/* asymmetric layout */}
        <div className="absolute inset-0 flex">
          {/* left: bold text block */}
          <div className="flex-1 flex flex-col justify-center px-4 gap-2">
            <div className="h-1 w-8 rounded-full bg-white/40"/>
            <div className="h-8 w-full rounded-xl bg-white/90"/>
            <div className="h-4 w-4/5 rounded-lg bg-white/70"/>
            <div className="h-1.5 w-3/5 rounded-full bg-white/45"/>
            <div className="flex gap-1.5 mt-1">
              <div className="h-5 w-16 rounded-full bg-white/90"/>
              <div className="h-5 w-12 rounded-full bg-white/25 border border-white/40"/>
            </div>
          </div>
          {/* right: abstract shapes */}
          <div className="w-24 relative flex items-center justify-center">
            <div className="absolute h-20 w-20 rounded-full bg-white/15 top-4 right-2"/>
            <div className="absolute h-12 w-12 rounded-full bg-white/25 bottom-6 right-6"/>
            <div className="absolute h-6 w-6 rounded-full bg-white/40 top-10 left-2"/>
            <div className="absolute h-8 w-px bg-white/30 left-0 top-8 bottom-8"/>
          </div>
        </div>
        {/* bottom strip */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-3 py-1.5 bg-black/15">
          {[1,2,3,4,5].map(i=><div key={i} className="h-1 flex-1 rounded-full bg-white/20"/>)}
        </div>
      </div>
    </div>
  )
}

function SlideBold({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 rounded-xl overflow-hidden shadow-2xl flex flex-col" style={{background:"rgba(0,0,0,0.22)"}}>
        {/* top accent bar */}
        <div className="h-1.5 w-full bg-white/30"/>
        {/* hero */}
        <div className="flex-1 flex flex-col items-start justify-center px-5 gap-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-3 w-3 rounded-full bg-white/80"/>
            <div className="h-1.5 w-16 rounded-full bg-white/50"/>
          </div>
          <div className="h-10 w-full rounded-2xl bg-white/90"/>
          <div className="h-5 w-4/5 rounded-xl bg-white/70"/>
          <div className="h-1.5 w-3/5 rounded-full bg-white/35 mt-1"/>
          {/* checklist */}
          <div className="flex flex-col gap-1 mt-1 w-full">
            {[0.9,0.8,0.85].map((w,i)=>(
              <div key={i} className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-white/70 shrink-0"/>
                <div className="h-1.5 rounded-full bg-white/45" style={{width:`${w*100}%`}}/>
              </div>
            ))}
          </div>
        </div>
        <div className="h-1.5 w-full bg-white/30"/>
      </div>
    </div>
  )
}

function SlideElegant({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 rounded-xl overflow-hidden shadow-2xl flex" style={{background:"rgba(0,0,0,0.20)"}}>
        {/* left: editorial text column */}
        <div className="flex-1 flex flex-col justify-center px-4 py-4 gap-2.5">
          {/* decorative line */}
          <div className="h-0.5 w-8 rounded-full bg-white/70"/>
          {/* big title */}
          <div className="h-8 w-11/12 rounded-2xl bg-white/90"/>
          <div className="h-4 w-4/5 rounded-xl bg-white/65"/>
          {/* subtitle lines */}
          <div className="flex flex-col gap-1.5 mt-1">
            {[0.88,0.72,0.82].map((w,i)=>(
              <div key={i} className="h-1.5 rounded-full bg-white/35" style={{width:`${w*100}%`}}/>
            ))}
          </div>
          {/* two-col stats */}
          <div className="flex gap-3 mt-1">
            {[["12","Years"],["98%","Rated"],["500+","Clients"]].map(([n,l],i)=>(
              <div key={i} className="flex flex-col gap-0.5">
                <div className="h-3 w-8 rounded bg-white/85"/>
                <div className="h-1 w-6 rounded-full bg-white/35"/>
              </div>
            ))}
          </div>
        </div>
        {/* right: image placeholder */}
        <div className="w-20 shrink-0 flex flex-col bg-white/8 border-l border-white/15 relative overflow-hidden">
          <div className="absolute inset-2 rounded-lg bg-white/15"/>
          <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1">
            <div className="h-1.5 w-full rounded-full bg-white/40"/>
            <div className="h-1 w-3/4 rounded-full bg-white/25"/>
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

// ─── Excel / spreadsheet mockup ───────────────────────────────────────────────
function SpreadsheetMockup({ color }: { color: string }) {
  const cols = 4
  const colWidths = ["w-20","flex-1","flex-1","flex-1"]
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl bg-white/95 overflow-hidden shadow-xl">
        {/* Excel toolbar */}
        <div className="flex items-center gap-1.5 bg-green-700 px-3 py-1.5">
          <div className="h-3 w-3 rounded-sm bg-white/80 text-green-700 flex items-center justify-center" style={{fontSize:5,fontWeight:900,lineHeight:1}}>X</div>
          <div className="h-1.5 w-20 rounded-full bg-white/60"/>
          <div className="flex-1"/>
          <div className="flex gap-1">
            {["Share","Save"].map(l=><div key={l} className="h-4 w-10 rounded bg-white/20"/>)}
          </div>
        </div>
        {/* ribbon */}
        <div className="flex items-center gap-1.5 px-2 py-1 border-b border-gray-200 bg-gray-50">
          {["Home","Insert","Layout","Formulas","Data","Review"].map(t=>(
            <div key={t} className="h-1.5 w-8 rounded-full bg-gray-300"/>
          ))}
        </div>
        {/* formula bar */}
        <div className="flex items-center gap-2 px-2 py-1 border-b border-gray-200 text-[0px]">
          <div className="h-4 w-8 rounded border border-gray-300 bg-white"/>
          <div className="text-gray-400 text-xs">fx</div>
          <div className="h-4 flex-1 rounded border border-gray-200 bg-white"/>
        </div>
        {/* grid */}
        <div className="flex-1 overflow-hidden">
          {/* col headers */}
          <div className="flex border-b border-gray-200 bg-gray-100">
            <div className="w-5 shrink-0 border-r border-gray-200"/>
            {["A","B","C","D"].map((c,i)=>(
              <div key={c} className={cn("flex items-center justify-center border-r border-gray-200 py-0.5",colWidths[i])}>
                <div className="h-1.5 w-3 rounded-full bg-gray-500"/>
              </div>
            ))}
          </div>
          {/* rows */}
          {[0,1,2,3,4,5].map(r=>(
            <div key={r} className={cn("flex border-b border-gray-100", r===0&&"bg-green-50")}>
              <div className="w-5 shrink-0 flex items-center justify-center border-r border-gray-200 bg-gray-50">
                <div className="h-1.5 w-2 rounded-full bg-gray-400"/>
              </div>
              {[0,1,2,3].map(c=>(
                <div key={c} className={cn("flex items-center px-1.5 border-r border-gray-100 py-1.5", colWidths[c])}>
                  <div className={cn(
                    "h-1.5 rounded-full",
                    r===0 ? "bg-green-700/70" : c===0 ? "bg-gray-400" : "bg-gray-200",
                  )} style={{width: r===0?"85%":c===0?"70%":`${50+Math.sin(r*c+1)*30}%`}}/>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* sheet tabs */}
        <div className="flex items-center gap-0.5 border-t border-gray-200 bg-gray-50 px-1 py-0.5">
          {["Sheet1","Sheet2","Summary"].map((s,i)=>(
            <div key={s} className={cn("rounded-t px-2 py-0.5 border border-b-0", i===0?"bg-white border-gray-200":"border-transparent")}>
              <div className="h-1.5 w-8 rounded-full bg-gray-400"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Canva design mockup ──────────────────────────────────────────────────────
function CanvaMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-0 flex flex-col overflow-hidden rounded-xl" style={{background:"rgba(30,30,30,0.92)"}}>
        {/* Top bar — Canva chrome */}
        <div className="flex items-center gap-2 px-3 py-1.5 border-b border-white/10">
          <div className="h-4 w-4 rounded-full bg-[#7D2AE8]"/>
          <div className="h-1.5 w-14 rounded-full bg-white/50"/>
          <div className="flex-1"/>
          <div className="flex gap-1">
            {["Resize","Share","Download"].map(b=><div key={b} className="h-5 w-12 rounded-md bg-white/10"/>)}
            <div className="h-5 w-14 rounded-md bg-[#7D2AE8]/80"/>
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          {/* Left tools panel */}
          <div className="w-10 shrink-0 flex flex-col gap-1.5 bg-black/30 px-1.5 py-2 items-center border-r border-white/10">
            {["T","□","◎","⬡","🖼","☺"].map((icon,i)=>(
              <div key={i} className={cn("h-7 w-7 rounded-lg flex items-center justify-center text-white/50 text-[8px]", i===0&&"bg-white/15")}>
                <div className="h-3 w-3 rounded bg-white/40"/>
              </div>
            ))}
          </div>
          {/* Canvas area */}
          <div className="flex-1 flex items-center justify-center bg-[#2c2c2c] p-3 relative">
            {/* the social media design canvas */}
            <div className={cn("aspect-square h-full max-h-full rounded-lg overflow-hidden relative shadow-2xl bg-gradient-to-br", color)}>
              {/* design content */}
              <div className="absolute inset-0 p-3 flex flex-col gap-2">
                {/* brand header */}
                <div className="flex items-center gap-1.5">
                  <div className="h-5 w-5 rounded-full bg-white/30"/>
                  <div className="h-1.5 w-12 rounded-full bg-white/60"/>
                </div>
                {/* big headline */}
                <div className="flex-1 flex flex-col justify-center gap-1.5">
                  <div className="h-5 w-full rounded-lg bg-white/90"/>
                  <div className="h-3 w-4/5 rounded-md bg-white/70"/>
                  <div className="h-2 w-2/3 rounded-md bg-white/45"/>
                </div>
                {/* CTA bar */}
                <div className="h-6 w-3/4 rounded-full bg-white/25 border border-white/40 mx-auto"/>
              </div>
            </div>
            {/* grid overlay dots */}
            <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)",backgroundSize:"12px 12px"}}/>
          </div>
          {/* Right properties panel */}
          <div className="w-16 shrink-0 bg-black/30 p-2 flex flex-col gap-2 border-l border-white/10">
            <div className="h-1.5 w-full rounded-full bg-white/50"/>
            <div className="h-px bg-white/10"/>
            {[1,2,3].map(i=>(
              <div key={i} className="flex flex-col gap-0.5">
                <div className="h-1 w-3/4 rounded-full bg-white/30"/>
                <div className="h-5 w-full rounded bg-white/10"/>
              </div>
            ))}
            <div className="flex gap-0.5 mt-1">
              {["●","●","●"].map((c,i)=>(
                <div key={i} className="flex-1 h-5 rounded" style={{background:["#7D2AE8","#06B6D4","#F59E0B"][i]+"80"}}/>
              ))}
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
    <div className="absolute inset-0" style={{background:"#1e1e1e"}}>
      <div className="absolute inset-0 flex flex-col overflow-hidden rounded-xl">
        {/* Figma menu bar */}
        <div className="flex items-center gap-2 px-2 py-1 bg-[#2c2c2c] border-b border-black/30">
          <div className="h-4 w-4 rounded-sm" style={{background:"linear-gradient(135deg,#f24e1e 50%,#ff7262 50%)"}}/> 
          <div className="flex gap-1.5">
            {["File","Edit","View","Object","Plugins"].map(m=>(
              <div key={m} className="h-1.5 w-6 rounded-full bg-white/25"/>
            ))}
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1 rounded bg-black/30 px-2 py-0.5">
              <div className="h-1 w-1 rounded-full bg-white/40"/>
              <div className="h-1.5 w-20 rounded-full bg-white/25"/>
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="h-5 w-12 rounded bg-[#0d99ff]/70 text-[0px]">Share</div>
            <div className="h-5 w-5 rounded-full bg-purple-500/70"/>
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          {/* Layers panel */}
          <div className="w-14 shrink-0 bg-[#2c2c2c] p-1.5 flex flex-col gap-0.5 border-r border-black/30">
            <div className="h-1.5 w-full rounded-full bg-white/40 mb-1"/>
            {[0,1,2,3,4,5,6,7].map(i=>(
              <div key={i} className="flex items-center gap-0.5 pl-1" style={{paddingLeft:`${(i%3)*6+4}px`}}>
                <div className="h-1.5 w-1.5 rounded-sm bg-white/15 shrink-0"/>
                <div className="h-1.5 rounded-full bg-white/20" style={{width:`${65+Math.sin(i)*25}%`}}/>
              </div>
            ))}
          </div>
          {/* Canvas */}
          <div className="flex-1 flex items-center justify-center p-2" style={{background:"#383838",backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px)",backgroundSize:"10px 10px"}}>
            {/* Frame — component grid */}
            <div className="h-full w-4/5 rounded-lg border border-white/10 bg-[#1e1e1e] flex flex-col overflow-hidden shadow-2xl">
              {/* component header bar */}
              <div className="flex items-center gap-1.5 bg-white/8 px-2 py-1.5 border-b border-white/10">
                <div className="h-2 w-2 rounded-full bg-[#f24e1e]/80"/>
                <div className="h-1.5 w-12 rounded-full bg-white/30"/>
                <div className="flex-1"/>
                <div className="flex gap-0.5">
                  <div className="h-1.5 w-6 rounded-full bg-white/20"/>
                  <div className="h-1.5 w-6 rounded-full bg-white/20"/>
                </div>
              </div>
              {/* component grid */}
              <div className="flex-1 p-2 grid grid-cols-3 gap-1">
                {Array.from({length:9}).map((_,i)=>(
                  <div key={i} className={cn(
                    "rounded-md border flex flex-col items-center justify-center gap-0.5 p-1",
                    i===1?"border-[#0d99ff]/60 bg-[#0d99ff]/10":"border-white/8 bg-white/4"
                  )}>
                    <div className="h-3 w-3 rounded bg-white/20"/>
                    <div className="h-1 w-5 rounded-full bg-white/15"/>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Properties panel */}
          <div className="w-14 shrink-0 bg-[#2c2c2c] p-1.5 flex flex-col gap-1.5 border-l border-black/30">
            <div className="h-1.5 w-full rounded-full bg-white/40"/>
            <div className="h-px bg-white/10"/>
            {["X","Y","W","H"].map(l=>(
              <div key={l} className="flex items-center gap-0.5">
                <div className="h-1 w-2 rounded-full bg-white/30 shrink-0"/>
                <div className="h-3.5 flex-1 rounded bg-white/8 border border-white/10"/>
              </div>
            ))}
            <div className="h-px bg-white/10 mt-0.5"/>
            <div className="h-1.5 w-3/4 rounded-full bg-white/30"/>
            <div className="flex gap-0.5">
              {[1,2,3].map(i=><div key={i} className="flex-1 h-4 rounded bg-white/8 border border-white/10"/>)}
            </div>
            {/* color swatches */}
            <div className="flex gap-0.5 mt-0.5">
              {["#f24e1e","#0d99ff","#14ae5c","#ffcd29"].map(c=>(
                <div key={c} className="flex-1 h-4 rounded-sm" style={{background:c+"99"}}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Word document mockup ─────────────────────────────────────────────────────
function WordMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl bg-white/97 shadow-xl overflow-hidden">
        {/* Word toolbar */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-700">
          <div className="h-3.5 w-3.5 rounded-sm bg-white flex items-center justify-center" style={{fontSize:7,fontWeight:900,color:"#1d4ed8",lineHeight:1}}>W</div>
          <div className="flex-1">
            <div className="h-1.5 w-24 rounded-full bg-white/60"/>
          </div>
          <div className="flex gap-1">
            <div className="h-4 w-10 rounded bg-white/20"/>
            <div className="h-4 w-10 rounded bg-white/20"/>
          </div>
        </div>
        {/* ribbon */}
        <div className="flex gap-1 px-2 py-1 border-b border-gray-200 bg-gray-50">
          {["Home","Insert","Layout","References","Review"].map(t=>(
            <div key={t} className="h-1.5 w-9 rounded-full bg-gray-300"/>
          ))}
        </div>
        {/* document page */}
        <div className="flex-1 bg-gray-200 p-2 flex justify-center overflow-hidden">
          <div className="bg-white shadow-md w-full max-w-full flex flex-col px-4 py-3 gap-2">
            {/* letterhead */}
            <div className="flex items-start justify-between border-b border-gray-200 pb-2 mb-1">
              <div className="flex flex-col gap-0.5">
                <div className="h-3 w-28 rounded bg-gray-800"/>
                <div className="h-1.5 w-20 rounded-full bg-gray-400"/>
                <div className="h-1 w-16 rounded-full bg-gray-300"/>
              </div>
              <div className="h-8 w-8 rounded bg-blue-700/20"/>
            </div>
            {/* document title */}
            <div className="h-4 w-3/5 rounded bg-gray-800 mb-0.5"/>
            <div className="h-px bg-gray-200"/>
            {/* body paragraphs */}
            {[1,.92,.88,.95,.7,.88,.82,.9,.65,.78,.85].map((w,i)=>(
              <div key={i} className={cn("h-1.5 rounded-full",i%4===3?"mb-1":"","bg-gray-200")} style={{width:`${w*100}%`}}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Google Docs mockup ───────────────────────────────────────────────────────
function GoogleDocsMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 flex flex-col rounded-xl bg-white/97 shadow-xl overflow-hidden">
        {/* Docs top bar */}
        <div className="flex items-center gap-2 px-3 py-1.5 border-b border-gray-200 bg-white">
          <div className="flex gap-0.5">
            <div className="h-2 w-2 rounded-full bg-[#1a73e8]"/>
            <div className="h-2 w-2 rounded-full bg-[#ea4335]"/>
            <div className="h-2 w-2 rounded-full bg-[#fbbc04]"/>
          </div>
          <div className="h-1.5 w-24 rounded-full bg-gray-400"/>
          <div className="flex-1"/>
          <div className="flex items-center gap-1">
            <div className="h-5 w-16 rounded-full border border-[#1a73e8] text-[0px]">Share</div>
            <div className="h-6 w-6 rounded-full bg-blue-100"/>
          </div>
        </div>
        {/* menu bar */}
        <div className="flex gap-1.5 px-3 py-1 border-b border-gray-100 text-[0px]">
          {["File","Edit","View","Insert","Format","Tools"].map(m=>(
            <div key={m} className="h-1.5 w-7 rounded-full bg-gray-300"/>
          ))}
        </div>
        {/* doc */}
        <div className="flex-1 bg-gray-100 p-2 flex justify-center overflow-hidden">
          <div className="bg-white shadow-sm w-full px-5 py-4 flex flex-col gap-1.5">
            {/* doc title */}
            <div className="h-5 w-3/5 rounded bg-gray-800 mb-1"/>
            <div className="h-1.5 w-1/4 rounded-full bg-gray-400 mb-1"/>
            <div className="h-px bg-gray-200 mb-1"/>
            {/* heading */}
            <div className="h-3 w-2/5 rounded bg-gray-700 mb-0.5"/>
            {/* body text lines */}
            {[.9,.8,.95,.7,.85,.75,.9,.6,.82,.88].map((w,i)=>(
              <div key={i} className={cn("h-1.5 rounded-full bg-gray-200",i===4&&"mb-1")} style={{width:`${w*100}%`}}/>
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
      <div className="absolute inset-3 flex rounded-xl bg-white/96 overflow-hidden shadow-xl">
        {/* Sidebar */}
        <div className="w-16 shrink-0 bg-gray-50/90 border-r border-gray-100 p-1.5 flex flex-col gap-1">
          {/* workspace name */}
          <div className="flex items-center gap-1 mb-1 px-0.5">
            <div className="h-4 w-4 rounded bg-gray-900"/>
            <div className="h-1.5 w-7 rounded-full bg-gray-500"/>
            <div className="ml-auto h-2 w-2 rounded-full bg-gray-300"/>
          </div>
          <div className="h-px bg-gray-200 mb-0.5"/>
          {/* nav items */}
          {[["🏠","Home"],["📝","Notes"],["✅","Tasks"],["📊","Board"],["📅","Calendar"],["🗄️","DB"],["⚙️","Settings"]].map(([ic,n],i)=>(
            <div key={i} className={cn("flex items-center gap-1 rounded px-1 py-0.5",i===2&&"bg-gray-200/80")}>
              <div className="h-2.5 w-2.5 rounded bg-gray-300 shrink-0"/>
              <div className="h-1.5 flex-1 rounded-full bg-gray-300"/>
            </div>
          ))}
          <div className="h-px bg-gray-200 mt-0.5 mb-0.5"/>
          {/* sub pages */}
          {[.9,.75,.8,.7].map((w,i)=>(
            <div key={i} className="flex items-center gap-1 pl-3">
              <div className="h-1 w-1 rounded-full bg-gray-300"/>
              <div className="h-1.5 rounded-full bg-gray-200" style={{width:`${w*70}%`}}/>
            </div>
          ))}
        </div>
        {/* Page content */}
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
          {/* page emoji + title */}
          <div className="flex items-center gap-2 mt-1">
            <div className="h-6 w-6 rounded bg-gray-100 flex items-center justify-center text-[10px]">
              <div className="h-4 w-4 rounded-sm bg-gray-300"/>
            </div>
            <div className="h-5 w-2/5 rounded-lg bg-gray-900"/>
          </div>
          <div className="h-px bg-gray-100"/>
          {/* callout block */}
          <div className="flex items-start gap-1.5 rounded-lg bg-blue-50 border border-blue-100 px-2 py-1.5">
            <div className="h-3 w-3 rounded-sm bg-blue-400 shrink-0 mt-0.5"/>
            <div className="flex flex-col gap-0.5 flex-1">
              <div className="h-1.5 w-full rounded-full bg-blue-200"/>
              <div className="h-1.5 w-4/5 rounded-full bg-blue-200"/>
            </div>
          </div>
          {/* database table */}
          <div className="rounded-lg border border-gray-100 overflow-hidden">
            <div className="flex bg-gray-50 border-b border-gray-100">
              <div className="flex-1 px-2 py-1"><div className="h-1.5 w-12 rounded-full bg-gray-400"/></div>
              <div className="w-14 px-1.5 py-1 border-l border-gray-100"><div className="h-1.5 w-10 rounded-full bg-gray-400"/></div>
              <div className="w-12 px-1.5 py-1 border-l border-gray-100"><div className="h-1.5 w-8 rounded-full bg-gray-400"/></div>
            </div>
            {[
              ["bg-green-100","bg-blue-100"],
              ["bg-orange-100","bg-purple-100"],
              ["bg-red-100","bg-yellow-100"],
              ["bg-teal-100","bg-pink-100"],
            ].map(([s1,s2],r)=>(
              <div key={r} className="flex border-b border-gray-50 last:border-0">
                <div className="flex-1 px-2 py-1.5"><div className="h-1.5 w-4/5 rounded-full bg-gray-200"/></div>
                <div className="w-14 px-1.5 py-1.5 border-l border-gray-50">
                  <div className={cn("h-3 rounded-full",s1)} style={{width:"80%"}}/>
                </div>
                <div className="w-12 px-1.5 py-1.5 border-l border-gray-50">
                  <div className={cn("h-3 rounded-full",s2)} style={{width:"70%"}}/>
                </div>
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
  if (tool === "Excel")        return <SpreadsheetMockup color={color} />
  if (tool === "Word")         return <WordMockup color={color} />
  if (tool === "Google Docs")  return <GoogleDocsMockup color={color} />
  if (tool === "Canva")        return <CanvaMockup color={color} />
  if (tool === "Figma")        return <FigmaMockup color={color} />
  if (tool === "Notion")       return <NotionMockup color={color} />
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
