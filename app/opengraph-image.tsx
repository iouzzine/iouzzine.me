import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ismail Ouzzine — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#06060a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(129,140,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            display: "flex",
          }}
        />

        {/* Glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(52,211,153,0.14) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "15px",
            color: "#818CF8",
            letterSpacing: "0.05em",
            marginBottom: "36px",
            display: "flex",
          }}
        >
          {"<io/>"}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: 700,
            color: "#eaeaf4",
            lineHeight: 1,
            marginBottom: "20px",
            letterSpacing: "-0.03em",
            display: "flex",
          }}
        >
          Ismail Ouzzine
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "30px",
            color: "#818CF8",
            fontWeight: 500,
            marginBottom: "56px",
            display: "flex",
          }}
        >
          Full Stack Developer
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "56px" }}>
          {[
            { value: "6+", label: "Years Experience" },
            { value: "30+", label: "Projects Delivered" },
            { value: "15+", label: "Clients Served" },
          ].map(({ value, label }) => (
            <div
              key={label}
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <div
                style={{
                  fontSize: "44px",
                  fontWeight: 700,
                  color: "#818CF8",
                  lineHeight: 1,
                  display: "flex",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#6b6b8a",
                  letterSpacing: "0.04em",
                  display: "flex",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "14px", color: "#6b6b8a", display: "flex" }}>
            iouzzine.me
          </div>
          <div style={{ fontSize: "13px", color: "#6b6b8a", display: "flex" }}>
            React · Next.js · Node.js · TypeScript
          </div>
        </div>
      </div>
    ),
    size,
  );
}
