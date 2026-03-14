"use client"

import { useState } from "react"
import { Download, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DownloadButtonProps {
  templateId: string
  isFree: boolean
}

type State = "idle" | "loading" | "success" | "error"

export function DownloadButton({ templateId, isFree }: DownloadButtonProps) {
  const [state, setState] = useState<State>("idle")

  async function handleDownload() {
    if (isFree) {
      setState("loading")
      // Simulate brief processing then show success
      await new Promise(r => setTimeout(r, 800))
      setState("success")
      // Reset after 4 seconds
      setTimeout(() => setState("idle"), 4000)
      return
    }

    setState("loading")
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId }),
      })

      const data = await res.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        setState("error")
        setTimeout(() => setState("idle"), 4000)
      }
    } catch {
      setState("error")
      setTimeout(() => setState("idle"), 4000)
    }
  }

  return (
    <div className="space-y-2">
      <Button
        size="lg"
        onClick={handleDownload}
        disabled={state === "loading" || state === "success"}
        className={cn(
          "w-full gap-2 rounded-xl font-semibold border-0 transition-all duration-300",
          state === "success"
            ? "bg-emerald-500 hover:bg-emerald-500 text-white"
            : state === "error"
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "btn-gradient text-white"
        )}
      >
        {state === "loading" && <><Loader2 className="h-5 w-5 animate-spin" />{isFree ? "Preparing download…" : "Redirecting to checkout…"}</>}
        {state === "success" && <><CheckCircle2 className="h-5 w-5" />Download Ready — Check your browser</>}
        {state === "error"   && <><AlertCircle className="h-5 w-5" />Something went wrong — Try again</>}
        {state === "idle"    && <><Download className="h-5 w-5" />{isFree ? "Download Free" : "Download for $1"}</>}
      </Button>

      {state === "success" && isFree && (
        <p className="text-center text-xs text-emerald-600 dark:text-emerald-400 font-medium animate-fade-in">
          ✓ Your download has started. Check your downloads folder.
        </p>
      )}
    </div>
  )
}

