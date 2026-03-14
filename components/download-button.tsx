"use client"

import { useState } from "react"
import { Download, Loader2, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { DownloadType } from "@/lib/templates"

interface DownloadButtonProps {
  templateId: string
  isFree: boolean
  downloadType: DownloadType
  downloadUrl: string
}

type State = "idle" | "loading" | "success" | "error"

export function DownloadButton({ templateId, isFree, downloadType, downloadUrl }: DownloadButtonProps) {
  const [state, setState] = useState<State>("idle")

  async function handleDownload() {
    if (isFree) {
      setState("loading")
      await new Promise(r => setTimeout(r, 400))

      if (downloadType === "external") {
        // Canva, Notion, Google Slides, Figma — open platform link
        window.open(downloadUrl, "_blank", "noopener,noreferrer")
        setState("success")
      } else {
        // PowerPoint, Excel, Word — direct file download from GitHub Releases
        const a = document.createElement("a")
        a.href = downloadUrl
        a.download = ""
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        setState("success")
      }
      setTimeout(() => setState("idle"), 5000)
      return
    }

    // Paid: Stripe checkout
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

  const isExternal = downloadType === "external"

  return (
    <div className="space-y-2">
      <Button
        size="lg"
        onClick={handleDownload}
        disabled={state === "loading" || state === "success"}
        className={cn(
          "w-full gap-2 rounded-xl font-semibold border-0 transition-all duration-300",
          state === "success" ? "bg-emerald-500 hover:bg-emerald-500 text-white"
            : state === "error" ? "bg-red-500 hover:bg-red-600 text-white"
            : "btn-gradient text-white"
        )}
      >
        {state === "loading" && <><Loader2 className="h-5 w-5 animate-spin" />{isFree ? "Opening…" : "Redirecting to checkout…"}</>}
        {state === "success" && <><CheckCircle2 className="h-5 w-5" />{isExternal ? "Opened in new tab ✓" : "Download started ✓"}</>}
        {state === "error"   && <><AlertCircle className="h-5 w-5" />Something went wrong — Try again</>}
        {state === "idle"    && (
          isFree
            ? isExternal
              ? <><ExternalLink className="h-5 w-5" />Open in {downloadUrl.includes("canva") ? "Canva" : downloadUrl.includes("notion") ? "Notion" : downloadUrl.includes("figma") ? "Figma" : "Google"}</>
              : <><Download className="h-5 w-5" />Download Free (.zip)</>
            : <><Download className="h-5 w-5" />Download for $1</>
        )}
      </Button>

      {state === "success" && isFree && (
        <p className="text-center text-xs text-emerald-600 dark:text-emerald-400 font-medium animate-fade-in">
          {isExternal
            ? "✓ Template opened in a new tab. Make a copy to start editing."
            : "✓ Download started. Unzip and open in your app."}
        </p>
      )}
    </div>
  )
}

