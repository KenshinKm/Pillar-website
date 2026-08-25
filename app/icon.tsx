import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a1a",
          color: "#f5f5f2",
          fontSize: 22,
          fontWeight: 900,
        }}
      >
        P
      </div>
    ),
    { ...size }
  );
}
