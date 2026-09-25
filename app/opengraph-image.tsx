import { ImageResponse } from "next/og";

export const alt = "ToolNest — Discover Top Businesses & Tools in India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4338ca 0%, #312e81 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            🏠
          </div>
          <div style={{ fontSize: 48, fontWeight: 800 }}>ToolNest</div>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          Discover Top Businesses &amp; Tools in India
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            opacity: 0.9,
          }}
        >
          Weekly leaderboards · Free listings · Community rankings
        </div>
        <div style={{ marginTop: "auto", fontSize: 18, opacity: 0.6 }}>
          toolnest.in
        </div>
      </div>
    ),
    size
  );
}