import { ImageResponse } from "next/og";

export const alt = "Personal projects — Ewoma Ozore";
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
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6b675e",
            margin: 0,
          }}
        >
          Personal projects · Ewoma Ozore
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: 72,
              lineHeight: 0.95,
              margin: 0,
              fontFamily: "Georgia, serif",
              maxWidth: 920,
            }}
          >
            Nights and weekends.
          </p>
          <p
            style={{
              fontSize: 28,
              color: "#6b675e",
              marginTop: 24,
              maxWidth: 760,
            }}
          >
            QuantumSpecs, Pollux, GameBuddy, Interswitch, and Flux.
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
