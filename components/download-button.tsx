"use client"

import { useState } from "react"
import { Download, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DownloadButtonProps {
  templateId: string
  isFree: boolean
}

export function DownloadButton({ templateId, isFree }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false)

  async function handleDownload() {
    if (isFree) {
      // Free: just trigger download (placeholder — wire to real file URL later)
      alert("Download starting! (Connect your file storage to complete this step)")
      return
    }

    setLoading(true)
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
        console.error("No checkout URL returned:", data)
        alert("Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error("Checkout error:", err)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      size="lg"
      onClick={handleDownload}
      disabled={loading}
      className="w-full btn-gradient text-white gap-2 rounded-xl font-semibold border-0"
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Redirecting to checkout…
        </>
      ) : (
        <>
          <Download className="h-5 w-5" />
          {isFree ? "Download Free" : "Download for $1"}
        </>
      )}
    </Button>
  )
}
