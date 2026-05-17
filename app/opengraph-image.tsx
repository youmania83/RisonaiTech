import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RisonAI Tech — AI Automation & SaaS Development Company India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#05070F",
          padding: "60px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid / glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(99,102,241,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Top bar — logo wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            zIndex: 1,
          }}
        >
          {/* Hexagon icon placeholder */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            R
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            RisonAI Tech
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "58px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.12,
              letterSpacing: "-1.5px",
              maxWidth: "900px",
            }}
          >
            AI Automation &amp; SaaS Development
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#94a3b8",
              fontWeight: 400,
              maxWidth: "720px",
              lineHeight: 1.4,
            }}
          >
            Enterprise-grade AI systems, workflows, and SaaS platforms for Indian businesses.
          </div>
        </div>

        {/* Bottom bar — trust signals */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            zIndex: 1,
          }}
        >
          {["40+ Products Shipped", "100% Client Retention", "From ₹30,000"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#a5b4fc",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#6366f1",
                }}
              />
              {item}
            </div>
          ))}
          <div
            style={{
              marginLeft: "auto",
              fontSize: "18px",
              color: "#475569",
              fontWeight: 400,
            }}
          >
            risonaitech.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
