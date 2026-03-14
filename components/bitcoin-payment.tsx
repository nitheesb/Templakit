"use client"

import { useState } from "react"
import { Copy, Check, Bitcoin } from "lucide-react"

const BTC_ADDRESS = "bc1q6p3wnrvuuhvudc7ajcxrpnz7gms79p0zdcuyw5"

export function BitcoinPayment() {
  const [copied, setCopied] = useState(false)

  async function copyAddress() {
    await navigator.clipboard.writeText(BTC_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Bitcoin className="h-4 w-4 text-orange-500" />
        <span className="text-sm font-semibold">Pay with Bitcoin</span>
        <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold text-orange-500">BTC</span>
      </div>

      <p className="mb-3 text-xs text-muted-foreground">
        Send exactly <span className="font-semibold text-foreground">$1 worth of BTC</span> to the address below,
        then email us your transaction ID to receive your download link.
      </p>

      {/* Address display */}
      <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-2.5">
        <code className="flex-1 truncate text-[11px] font-mono text-foreground select-all">
          {BTC_ADDRESS}
        </code>
        <button
          onClick={copyAddress}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-secondary"
          aria-label="Copy Bitcoin address"
        >
          {copied
            ? <Check className="h-3.5 w-3.5 text-emerald-500" />
            : <Copy className="h-3.5 w-3.5 text-muted-foreground" />
          }
        </button>
      </div>

      <p className="mt-2 text-[10px] text-muted-foreground">
        After sending, email{" "}
        <a href="mailto:hello@templakit.com" className="text-primary hover:underline">
          hello@templakit.com
        </a>{" "}
        with your txid and the template name.
      </p>
    </div>
  )
}
