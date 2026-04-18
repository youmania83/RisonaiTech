"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ─── Floating glass cards ─────────────────────────────────────────── */
const CARDS = [
  {
    id: 1,
    label: "Products Shipped",
    value: "40+",
    sub: "across 6 industries",
    rotate: -5,
    top: "12%",
    left: "6%",
    duration: 8,
    delay: 0,
  },
  {
    id: 2,
    label: "Uptime SLA",
    value: "99.9%",
    sub: "production grade",
    rotate: 4,
    top: "50%",
    right: "5%",
    duration: 10,
    delay: 1.4,
  },
  {
    id: 3,
    label: "AI Efficiency",
    value: "3× faster",
    sub: "avg. workflow gain",
    rotate: -2,
    bottom: "14%",
    left: "12%",
    duration: 9,
    delay: 0.7,
  },
] as const;

export default function HeroVisual({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      aria-hidden
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* ── Static base gradient (SSR-safe, no opacity:0) ──────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 28%, #2563eb 58%, #db2777 100%)",
        }}
      />

      {/* ── Animated colour-shift overlay (client only) ─────────────────── */}
      {mounted && (
        <motion.div
          animate={{
            opacity: [0.6, 0.9, 0.7, 0.85, 0.6],
          }}
          className="absolute inset-0"
          initial={{ opacity: 0.6 }}
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, rgba(139,92,246,0.85) 0%, transparent 52%)," +
              "radial-gradient(ellipse at 78% 65%, rgba(59,130,246,0.75) 0%, transparent 52%)," +
              "radial-gradient(ellipse at 55% 20%, rgba(236,72,153,0.65) 0%, transparent 48%)",
          }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      )}

      {/* ── Slow hue-rotate on the whole canvas (CSS, no JS) ────────────── */}
      <div
        className="absolute inset-0"
        style={{
          animation: "heroHue 22s ease-in-out infinite alternate",
          background:
            "radial-gradient(ellipse at 70% 80%, rgba(99,91,255,0.45) 0%, transparent 55%)," +
            "radial-gradient(ellipse at 15% 20%, rgba(14,165,233,0.38) 0%, transparent 50%)",
        }}
      />

      {/* ── Noise grain ─────────────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.035,
        }}
      />

      {/* ── Top gloss highlight ─────────────────────────────────────────── */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 rounded-t-3xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Glow ring at the bottom ─────────────────────────────────────── */}
      <div
        className="absolute inset-x-8 bottom-0 h-24"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(99,91,255,0.55) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(18px)",
        }}
      />

      {/* ── Floating glass cards ────────────────────────────────────────── */}
      {mounted &&
        CARDS.map((card) => (
          <motion.div
            animate={{ y: [0, -14, 0] }}
            className="absolute"
            initial={{ y: 0 }}
            key={card.id}
            style={{
              top: "top" in card ? card.top : undefined,
              bottom: "bottom" in card ? card.bottom : undefined,
              left: "left" in card ? card.left : undefined,
              right: "right" in card ? card.right : undefined,
              rotate: card.rotate,
              willChange: "transform",
            }}
            transition={{
              duration: card.duration,
              delay: card.delay,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "14px",
                padding: "12px 18px",
                minWidth: "130px",
                boxShadow:
                  "0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.58)",
                  fontSize: "9.5px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: 0,
                }}
              >
                {card.label}
              </p>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  margin: "4px 0 2px",
                  fontFamily: "var(--font-display)",
                }}
              >
                {card.value}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "10px",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {card.sub}
              </p>
            </div>
          </motion.div>
        ))}

      {/* ── CSS keyframe (scoped inside component as inline style) ───────── */}
      <style>{`
        @keyframes heroHue {
          0%   { filter: hue-rotate(0deg)   blur(36px); }
          50%  { filter: hue-rotate(18deg)  blur(44px); }
          100% { filter: hue-rotate(-12deg) blur(30px); }
        }
      `}</style>
    </div>
  );
}
