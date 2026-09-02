import { ImageResponse } from "next/og";

export const alt = "Ewoma Ozore — Senior Frontend & Mobile Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f4ef",
          color: "#141414",
          padding: "72px 80px",
        }}
      >
        <p
          style={{
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6b675e",
            margin: 0,
          }}
        >
          Ewoma Ozore
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: 72,
              lineHeight: 0.95,
              margin: 0,
              fontFamily: "Georgia, serif",
              maxWidth: 900,
            }}
          >
            Senior frontend engineer. Product systems at scale.
          </p>
          <p
            style={{
              fontSize: 28,
              color: "#6b675e",
              marginTop: 28,
              maxWidth: 720,
            }}
          >
            React, React Native, and Next.js — case studies from production.
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
