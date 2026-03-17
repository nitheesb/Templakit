"use client"
// Re-exports the TemplateCard's ToolPreview as a standalone client component
// so the server-rendered detail page can use it.
import { cn } from "@/lib/utils"
import { 
  PieChart, 
  BarChart3, 
  LineChart, 
  Activity, 
  Layout, 
  Image as ImageIcon, 
  Type, 
  Table as TableIcon,
  Bold,
  Heading,
  AlignLeft,
  Users,
  Briefcase,
  TrendingUp,
  DollarSign,
  Target
} from "lucide-react"

type Props = { tool: string; style: string; color: string; className?: string }

// ── Slide variants ────────────────────────────────────────────────────────────

function SlidePitchDeck({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex flex-col rounded-xl overflow-hidden bg-white/95 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center text-primary">
              <Target className="h-3.5 w-3.5" />
            </div>
            <div className="h-3 w-24 rounded-full bg-gray-200" />
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-12 rounded-full bg-gray-100" />
            <div className="h-2 w-8 rounded-full bg-gray-100" />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-8 grid grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="h-2 w-16 rounded-full bg-primary/20 text-xs font-bold text-primary px-2 flex items-center">GROWTH</div>
              <div className="h-8 w-full rounded bg-gray-800" />
              <div className="h-8 w-2/3 rounded bg-gray-800" />
            </div>
            <div className="space-y-2 pt-2">
              <div className="h-2 w-full rounded-full bg-gray-200" />
              <div className="h-2 w-full rounded-full bg-gray-200" />
              <div className="h-2 w-4/5 rounded-full bg-gray-200" />
            </div>
            <div className="flex gap-3 pt-2">
              <div className="h-8 w-24 rounded-lg bg-primary shadow-sm" />
              <div className="h-8 w-24 rounded-lg border border-gray-200" />
            </div>
          </div>
          
          <div className="relative aspect-square rounded-xl bg-gray-100 border border-gray-200 p-4 flex flex-col justify-center items-center gap-4">
            <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <div className="w-full flex items-end justify-center gap-2 h-32 px-4 pb-2 border-b border-gray-200">
               {[40, 65, 45, 80, 55].map((h, i) => (
                 <div key={i} className="w-8 rounded-t bg-primary/80" style={{ height: `${h}%` }} />
               ))}
            </div>
            <div className="flex gap-4 w-full justify-center">
               <div className="h-2 w-12 rounded-full bg-gray-300" />
               <div className="h-2 w-12 rounded-full bg-gray-300" />
               <div className="h-2 w-12 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideReport({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex flex-col rounded-xl overflow-hidden bg-white shadow-xl">
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="h-8 w-8 rounded bg-white/10 flex items-center justify-center">
               <BarChart3 className="h-4 w-4 text-white" />
             </div>
             <div>
               <div className="h-2.5 w-24 rounded-full bg-white/90 mb-1.5" />
               <div className="h-1.5 w-16 rounded-full bg-white/50" />
             </div>
          </div>
          <div className="h-6 w-20 rounded-full bg-white/10" />
        </div>
        
        <div className="flex-1 p-6 grid grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-white shadow-sm">
                  {i===1 ? <Users className="h-4 w-4 text-blue-500"/> : i===2 ? <DollarSign className="h-4 w-4 text-green-500"/> : <Activity className="h-4 w-4 text-orange-500"/>}
                </div>
                <div className="text-[10px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded">+12%</div>
              </div>
              <div>
                <div className="h-6 w-16 rounded bg-gray-800 mb-2" />
                <div className="h-2 w-20 rounded-full bg-gray-300" />
              </div>
            </div>
          ))}
          
          <div className="col-span-2 rounded-xl border border-gray-100 p-4 bg-white">
             <div className="flex items-center justify-between mb-4">
               <div className="h-3 w-32 rounded-full bg-gray-800" />
               <div className="flex gap-1">
                 {[1,2,3].map(j => <div key={j} className="h-1.5 w-1.5 rounded-full bg-gray-300" />)}
               </div>
             </div>
             <div className="flex items-end justify-between gap-2 h-24">
                {[30, 45, 35, 60, 50, 75, 65, 90, 80, 95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-slate-800" style={{ height: `${h}%`, opacity: 0.2 + (i/10)*0.8 }} />
                ))}
             </div>
          </div>
          
          <div className="rounded-xl bg-slate-900 p-4 text-white flex flex-col justify-center items-center text-center">
             <div className="h-16 w-16 rounded-full border-4 border-white/20 flex items-center justify-center mb-3">
               <div className="text-xl font-bold">85%</div>
             </div>
             <div className="h-2 w-20 rounded-full bg-white/40 mb-1" />
             <div className="h-1.5 w-12 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideMinimal({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-0 bg-white/90 backdrop-blur-xl" />
      <div className="absolute inset-8 border border-black/5 flex flex-col justify-center items-center text-center p-8">
        <div className="mb-6">
          <div className="h-12 w-12 mx-auto rounded-full bg-black/5 flex items-center justify-center mb-4">
             <Layout className="h-5 w-5 text-black/60" />
          </div>
          <div className="h-10 w-64 mx-auto rounded bg-black/80 mb-3" />
          <div className="h-3 w-40 mx-auto rounded-full bg-black/40" />
        </div>
        
        <div className="w-full max-w-xs h-px bg-black/10 my-6" />
        
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
           <div className="text-left space-y-2">
             <div className="h-2 w-16 rounded-full bg-black/60" />
             <div className="h-1.5 w-full rounded-full bg-black/20" />
             <div className="h-1.5 w-5/6 rounded-full bg-black/20" />
           </div>
           <div className="text-left space-y-2">
             <div className="h-2 w-16 rounded-full bg-black/60" />
             <div className="h-1.5 w-full rounded-full bg-black/20" />
             <div className="h-1.5 w-5/6 rounded-full bg-black/20" />
           </div>
        </div>
      </div>
    </div>
  )
}

function SlideCreative({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
      
      <div className="absolute inset-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden">
        <div className="flex justify-between items-start">
           <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center transform -rotate-6">
             <ImageIcon className="h-5 w-5 text-white" />
           </div>
           <div className="text-right">
             <div className="h-2 w-20 rounded-full bg-white/60 mb-1 ml-auto" />
             <div className="h-2 w-12 rounded-full bg-white/40 ml-auto" />
           </div>
        </div>
        
        <div className="relative z-10">
          <div className="h-12 w-3/4 rounded-lg bg-white/90 mb-4 shadow-lg" />
          <div className="space-y-2">
            <div className="h-3 w-1/2 rounded-full bg-white/60" />
            <div className="h-3 w-1/3 rounded-full bg-white/40" />
          </div>
        </div>
        
        <div className="flex gap-3">
           {[1,2,3].map(i => (
             <div key={i} className="h-16 w-24 rounded-lg bg-black/20 border border-white/10 backdrop-blur-sm transform hover:-translate-y-1 transition-transform" />
           ))}
        </div>
      </div>
    </div>
  )
}

function SlideBold({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
       <div className="absolute inset-0 flex">
         <div className="w-1/3 bg-black/20 backdrop-blur-sm p-6 flex flex-col justify-center">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-6">
               <Bold className="h-6 w-6 text-black" />
            </div>
            <div className="h-8 w-full rounded bg-white mb-2" />
            <div className="h-8 w-2/3 rounded bg-white/60 mb-6" />
            <div className="h-2 w-full rounded-full bg-white/40 mb-2" />
            <div className="h-2 w-full rounded-full bg-white/40 mb-2" />
            <div className="h-2 w-4/5 rounded-full bg-white/40" />
         </div>
         <div className="flex-1 p-6 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full">
               {[1,2,3,4].map(i => (
                 <div key={i} className="aspect-video rounded-lg bg-white/10 border-2 border-white/20 p-3 flex flex-col justify-end">
                    <div className="h-2 w-12 rounded-full bg-white/60 mb-1" />
                    <div className="h-1.5 w-8 rounded-full bg-white/30" />
                 </div>
               ))}
            </div>
         </div>
       </div>
    </div>
  )
}

function SlideElegant({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-3 border border-white/20 rounded-lg p-6 flex flex-col">
         <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
               <div className="h-px w-8 bg-white/50" />
               <div className="h-4 w-4 rounded-full border border-white/50" />
               <div className="h-px w-8 bg-white/50" />
            </div>
         </div>
         
         <div className="text-center flex-1 flex flex-col justify-center items-center">
            <div className="h-16 w-3/4 bg-white/90 rounded-sm mb-4 font-serif" />
            <div className="h-px w-20 bg-white/30 mb-4" />
            <div className="space-y-2 w-full max-w-md flex flex-col items-center">
               <div className="h-2 w-full rounded-full bg-white/50" />
               <div className="h-2 w-5/6 rounded-full bg-white/50" />
               <div className="h-2 w-4/5 rounded-full bg-white/50" />
            </div>
         </div>
         
         <div className="flex justify-between items-end">
            <div className="h-8 w-24 bg-white/10 rounded backdrop-blur-sm" />
            <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
               <div className="h-1 w-1 rounded-full bg-white" />
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
    <div className={cn("relative overflow-hidden rounded-xl shadow-lg border border-border/50 bg-background", className)}>
      {render()}
    </div>
  )
}

function SpreadsheetMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex flex-col rounded-lg bg-white overflow-hidden shadow-xl">
        {/* Ribbon */}
        <div className="bg-[#107c41] px-3 py-2 flex items-center justify-between">
           <div className="flex items-center gap-2">
              <TableIcon className="h-4 w-4 text-white" />
              <div className="h-2 w-16 rounded bg-white/40" />
           </div>
           <div className="flex gap-1">
              {[1,2,3].map(i => <div key={i} className="h-4 w-4 rounded bg-white/20" />)}
           </div>
        </div>
        {/* Toolbar */}
        <div className="bg-gray-50 border-b border-gray-200 px-3 py-1 flex gap-2">
           <div className="h-4 w-4 rounded bg-gray-200" />
           <div className="h-px w-4 rotate-90 bg-gray-300" />
           <div className="h-4 w-20 rounded bg-gray-200" />
           <div className="h-4 w-8 rounded bg-gray-200" />
        </div>
        {/* Formula Bar */}
        <div className="bg-white border-b border-gray-200 px-2 py-1 flex items-center gap-2">
           <div className="h-3 w-8 rounded bg-gray-100" />
           <div className="h-3 flex-1 rounded bg-gray-50 border border-gray-100" />
        </div>
        {/* Grid */}
        <div className="flex-1 overflow-hidden relative bg-white">
           <div className="absolute inset-0 grid grid-cols-5 grid-rows-8">
              {Array.from({length: 40}).map((_, i) => {
                const isHeader = i < 5
                const isSidebar = i % 5 === 0
                const isData = !isHeader && !isSidebar
                return (
                  <div key={i} className={cn("border-r border-b border-gray-100 flex items-center px-2", isHeader && "bg-gray-50 font-bold", isSidebar && "bg-gray-50 justify-center")}>
                     {isHeader && i>0 && <div className="h-2 w-4 bg-gray-300 rounded-sm" />}
                     {isSidebar && i>0 && <div className="h-2 w-2 bg-gray-300 rounded-sm" />}
                     {isData && Math.random() > 0.3 && (
                       <div className={cn("h-1.5 rounded-full", i===7 || i===13 ? "w-16 bg-green-100 text-green-700" : "w-8 bg-gray-200")} style={{width: `${Math.random() * 60 + 20}%`}} />
                     )}
                     {isData && (i === 7 || i === 13) && <div className="h-1.5 w-4 rounded-full bg-green-500 ml-auto" />}
                  </div>
                )
              })}
           </div>
           {/* Chart overlay */}
           <div className="absolute bottom-4 right-4 w-32 h-20 bg-white border border-gray-200 shadow-lg rounded p-2 flex flex-col gap-1">
              <div className="h-2 w-16 bg-gray-200 rounded" />
              <div className="flex-1 flex items-end justify-between gap-1 pt-1">
                 {[40, 70, 50, 90, 60].map((h,i) => (
                   <div key={i} className="flex-1 bg-blue-500 rounded-t-sm" style={{height: `${h}%`}} />
                 ))}
              </div>
           </div>
        </div>
        {/* Tabs */}
        <div className="bg-gray-50 border-t border-gray-200 px-2 py-0.5 flex gap-1">
           <div className="bg-white px-3 py-0.5 rounded-t border border-gray-200 border-b-0 shadow-sm"><div className="h-1.5 w-10 bg-green-600 rounded-full" /></div>
           <div className="px-3 py-0.5"><div className="h-1.5 w-8 bg-gray-300 rounded-full" /></div>
        </div>
      </div>
    </div>
  )
}

function DocumentMockup({ color, isWord }: { color: string; isWord?: boolean }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-4 flex flex-col rounded-lg bg-gray-100 overflow-hidden shadow-xl">
        <div className={cn("px-4 py-2 flex items-center gap-2", isWord ? "bg-[#2b579a]" : "bg-white border-b border-gray-200")}>
           {isWord ? (
             <div className="h-4 w-4 bg-white rounded flex items-center justify-center"><Type className="h-2.5 w-2.5 text-[#2b579a]" /></div>
           ) : (
             <div className="h-4 w-4 bg-blue-500 rounded flex items-center justify-center"><Type className="h-2.5 w-2.5 text-white" /></div>
           )}
           <div className={cn("h-2 w-24 rounded-full", isWord ? "bg-white/50" : "bg-gray-300")} />
        </div>
        
        <div className="flex-1 p-4 overflow-hidden flex justify-center">
           <div className="w-full h-full bg-white shadow-sm rounded-sm p-6 flex flex-col gap-3">
              <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                 <div className="space-y-2">
                    <div className="h-6 w-32 bg-gray-800 rounded" />
                    <div className="h-2 w-20 bg-gray-400 rounded-full" />
                 </div>
                 <div className="h-10 w-10 rounded-full bg-gray-100" />
              </div>
              
              <div className="space-y-1.5 pt-2">
                 {[1, 0.9, 0.95, 0.8, 1, 0.85, 0.9, 0.4].map((w,i) => (
                   <div key={i} className="h-1.5 rounded-full bg-gray-200" style={{width: `${w*100}%`}} />
                 ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                 <div className="h-20 rounded bg-gray-50 border border-gray-100" />
                 <div className="space-y-1.5">
                    {[1, 0.8, 0.9, 0.7, 0.5].map((w,i) => (
                      <div key={i} className="h-1.5 rounded-full bg-gray-200" style={{width: `${w*100}%`}} />
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

function CanvaMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
      <div className="absolute inset-0 flex flex-col">
         {/* Canva Header */}
         <div className="h-10 bg-gradient-to-r from-[#00c4cc] to-[#7d2ae8] flex items-center px-4 justify-between">
            <div className="flex items-center gap-2">
               <div className="h-5 w-5 rounded-full bg-white/20" />
               <div className="h-2 w-16 rounded-full bg-white/40" />
            </div>
            <div className="h-6 w-20 rounded bg-white text-xs font-bold text-purple-600 flex items-center justify-center">Share</div>
         </div>
         <div className="flex-1 flex overflow-hidden bg-[#f0f0f0]">
            <div className="w-12 bg-white flex flex-col items-center py-4 gap-4 shadow-sm z-10">
               {[Layout, Type, ImageIcon, Users].map((Icon, i) => (
                 <div key={i} className="h-8 w-8 rounded flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600">
                    <Icon className="h-4 w-4" />
                 </div>
               ))}
            </div>
            <div className="flex-1 p-6 flex items-center justify-center">
               <div className="aspect-[4/3] h-full bg-white shadow-xl rounded overflow-hidden relative group">
                  <div className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: `linear-gradient(135deg, ${color.replace('from-','').replace('to-','').split(' ')[0]} 0%, ${color.replace('from-','').replace('to-','').split(' ')[0]} 100%)`}} />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-6 border border-white/40 flex flex-col justify-center items-center text-center text-white">
                     <div className="uppercase tracking-[0.2em] text-xs font-bold mb-2 opacity-80">Presenting</div>
                     <div className="text-3xl font-black mb-4 leading-none">FUTURE<br/>VISION</div>
                     <div className="h-1 w-12 bg-white mb-4" />
                     <div className="text-[10px] opacity-80 max-w-[120px]">A creative strategy for the next generation</div>
                  </div>
                  {/* Selection handles */}
                  <div className="absolute top-6 left-6 h-2 w-2 bg-purple-500 border border-white" />
                  <div className="absolute bottom-6 right-6 h-2 w-2 bg-purple-500 border border-white" />
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

function FigmaMockup({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 bg-[#1e1e1e] text-white">
       <div className="absolute inset-0 flex flex-col">
          <div className="h-8 border-b border-white/10 flex items-center px-3 gap-3 bg-[#2c2c2c]">
             <div className="flex gap-1.5"><div className="h-3 w-3 rounded-full bg-[#f24e1e]"/><div className="h-3 w-3 rounded-full bg-[#a259ff]"/><div className="h-3 w-3 rounded-full bg-[#1abcfe]"/></div>
             <div className="h-3 w-px bg-white/20" />
             <div className="h-2 w-24 rounded bg-white/20" />
          </div>
          <div className="flex-1 flex overflow-hidden">
             <div className="w-8 border-r border-white/10 flex flex-col items-center py-2 gap-3 bg-[#2c2c2c]">
                <div className="h-4 w-4 rounded bg-white/10" />
                <div className="h-4 w-4 rounded bg-white/10" />
                <div className="h-4 w-4 rounded bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
             </div>
             <div className="flex-1 p-8 flex items-center justify-center bg-[#1e1e1e] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: "radial-gradient(#444 1px, transparent 1px)", backgroundSize: "16px 16px"}} />
                
                <div className="relative z-10 w-48 h-64 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
                   <div className="h-32 bg-gray-100 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100" />
                      <div className="h-12 w-12 rounded-full bg-white shadow-sm z-10" />
                   </div>
                   <div className="p-3 space-y-2">
                      <div className="h-3 w-3/4 rounded bg-gray-200" />
                      <div className="h-2 w-full rounded bg-gray-100" />
                      <div className="h-2 w-1/2 rounded bg-gray-100" />
                      <div className="h-6 w-full rounded bg-blue-500 mt-2" />
                   </div>
                   
                   {/* Cursors */}
                   <div className="absolute -right-3 top-10 flex items-center gap-1">
                      <div className="w-0 h-0 border-l-[12px] border-l-transparent border-b-[18px] border-b-[#e05a33] border-r-[6px] border-r-transparent rotate-[-15deg]" />
                      <div className="bg-[#e05a33] text-[8px] px-1 rounded text-white font-bold">You</div>
                   </div>
                </div>
             </div>
             <div className="w-48 border-l border-white/10 bg-[#2c2c2c] p-3 space-y-3">
                <div className="flex justify-between items-center"><span className="text-[10px] text-gray-400">Design</span><div className="h-3 w-3 rounded-full bg-white/10"/></div>
                <div className="h-px bg-white/10" />
                <div className="space-y-2">
                   <div className="flex justify-between"><div className="h-2 w-8 bg-white/20 rounded"/><div className="h-4 w-12 bg-white/10 rounded"/></div>
                   <div className="flex justify-between"><div className="h-2 w-8 bg-white/20 rounded"/><div className="h-4 w-12 bg-white/10 rounded"/></div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

function NotionMockup({ color }: { color: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", color)}>
       <div className="absolute inset-4 rounded-xl bg-white shadow-xl overflow-hidden flex flex-col">
          <div className="h-24 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80')"}}>
             <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
             <div className="absolute -bottom-6 left-8 h-12 w-12 rounded bg-white p-1 text-2xl flex items-center justify-center shadow-sm">
                👋
             </div>
          </div>
          <div className="flex-1 p-8 pt-8 flex flex-col gap-3">
             <div className="h-6 w-2/3 bg-gray-800 rounded mb-2" />
             <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-1"><Users className="h-3 w-3" /> <span>Team</span></div>
                <div>•</div>
                <div className="flex items-center gap-1"><Activity className="h-3 w-3" /> <span>Updated</span></div>
             </div>
             <div className="h-px w-full bg-gray-200 mb-2" />
             <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                   <div className="h-4 w-4 rounded bg-orange-100 flex items-center justify-center text-[8px]">1</div>
                   <div className="h-2 w-full rounded bg-gray-200" />
                </div>
                <div className="flex items-center gap-2">
                   <div className="h-4 w-4 rounded bg-blue-100 flex items-center justify-center text-[8px]">2</div>
                   <div className="h-2 w-4/5 rounded bg-gray-200" />
                </div>
             </div>
             <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-100 flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-gray-200" />
                <div className="h-2 flex-1 rounded bg-gray-200" />
             </div>
          </div>
       </div>
    </div>
  )
}
