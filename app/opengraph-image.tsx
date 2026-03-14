import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Templakit — Free Professional Templates for PowerPoint, Canva, Figma & more"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#09090b",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 800,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Logo pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #7c3aed, #ec4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 900,
              color: "white",
            }}
          >
            T
          </div>
          <span style={{ color: "white", fontSize: 36, fontWeight: 800, letterSpacing: "-1px" }}>
            Templakit
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-2px",
            maxWidth: 900,
          }}
        >
          Free Templates for{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Every Tool
          </span>
        </div>

        {/* Sub */}
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: 780,
          }}
        >
          PowerPoint · Google Slides · Canva · Excel · Figma · Word · Notion · Google Docs
        </div>

        {/* Bottom badges */}
        <div
          style={{
            marginTop: 44,
            display: "flex",
            gap: 16,
          }}
        >
          {["500+ Free Templates", "8 Tools Covered", "Premium from $1"].map((b) => (
            <div
              key={b}
              style={{
                padding: "10px 22px",
                borderRadius: 100,
                border: "1.5px solid rgba(255,255,255,0.15)",
                color: "#d4d4d8",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
