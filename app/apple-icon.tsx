import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 100,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-4px",
          }}
        >
          T
        </div>
      </div>
    ),
    { ...size }
  )
}
