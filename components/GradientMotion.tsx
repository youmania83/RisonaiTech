"use client";

import { useEffect, useRef } from "react";

interface GradientMotionProps {
  className?: string;
}

export default function GradientMotion({ className = "" }: GradientMotionProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{ background: "#f0f0ff" }}
    >
      {/* Base gradient canvas */}
      <div
        className="gradient-bg absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 25% 60%, rgba(99,91,255,0.55) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 20%, rgba(14,165,233,0.50) 0%, transparent 50%),
            radial-gradient(ellipse at 55% 85%, rgba(249,115,22,0.38) 0%, transparent 50%),
            radial-gradient(ellipse at 10% 10%, rgba(99,91,255,0.30) 0%, transparent 45%)
          `,
          animation: "gradientShift 16s ease-in-out infinite alternate",
        }}
      />

      {/* Second layer rotates opposite */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 70% 70%, rgba(14,165,233,0.40) 0%, transparent 52%),
            radial-gradient(ellipse at 20% 30%, rgba(249,115,22,0.32) 0%, transparent 48%)
          `,
          animation: "gradientShift2 20s ease-in-out infinite alternate",
          mixBlendMode: "multiply",
        }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.04,
        }}
      />

      {/* Soft vignette edge */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(247,249,252,0.4) 100%)",
        }}
      />

      <style>{`
        @keyframes gradientShift {
          0%   { filter: hue-rotate(0deg)   blur(38px); transform: scale(1)    translate(0%,   0%); }
          33%  { filter: hue-rotate(12deg)  blur(44px); transform: scale(1.04) translate(2%,  -2%); }
          66%  { filter: hue-rotate(22deg)  blur(50px); transform: scale(1.06) translate(-1%,  1%); }
          100% { filter: hue-rotate(-8deg)  blur(36px); transform: scale(0.97) translate(1%,   2%); }
        }
        @keyframes gradientShift2 {
          0%   { filter: hue-rotate(0deg)   blur(56px); transform: scale(1.05) translate(-1%, 1%); }
          50%  { filter: hue-rotate(-15deg) blur(64px); transform: scale(0.98) translate(2%, -1%); }
          100% { filter: hue-rotate(10deg)  blur(48px); transform: scale(1.03) translate(-2%, 2%); }
        }
      `}</style>
    </div>
  );
}
