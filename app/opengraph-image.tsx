import { ImageResponse } from "next/og";

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
          justifyContent: "space-between",
          background: "#1a1a1a",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            color: "#f5f5f2",
            textTransform: "uppercase",
          }}
        >
          PILLAR
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#f5f5f2",
              textTransform: "uppercase",
              maxWidth: 900,
            }}
          >
            When they search, be there.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#929292",
            }}
          >
            Web Development &amp; SEO
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
