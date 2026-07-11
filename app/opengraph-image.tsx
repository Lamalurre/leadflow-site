import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sylvor — Sluta förlora jobb till långsamma svar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#0b0e16",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(74,108,247,0.35), transparent 55%), radial-gradient(circle at 10% 90%, rgba(217,146,42,0.2), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#131826",
              border: "2px solid rgba(74,108,247,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              color: "#4a6cf7",
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 32, color: "#e9ecf3", fontWeight: 600 }}>
            Sylvor
          </div>
        </div>
        <div
          style={{
            fontSize: 60,
            color: "#e9ecf3",
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Sluta förlora jobb till långsamma svar.
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "rgba(233,236,243,0.65)",
            maxWidth: 800,
          }}
        >
          Säkert autosvar direkt. AI-svarsförslag du godkänner innan det skickas.
        </div>
      </div>
    ),
    { ...size }
  );
}
