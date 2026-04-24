"use client";

export default function AnimatedLogo({ size = 40 }: { size?: number }) {
  return (
    <div className="premium-logo">
      <div className="premium-icon" style={{ width: size, height: size }}>
        <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="gradOuter" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#FF8C00" />
              <stop offset="50%"  stopColor="#FF3A6E" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>

          {/* Gradient ring — slow spin, accelerates on hover */}
          <g className="ring">
            <circle
              cx="36"
              cy="36"
              r="32"
              stroke="url(#gradOuter)"
              strokeWidth="3"
              strokeDasharray="8 6"
              opacity="0.8"
            />
          </g>

          {/* R — spine */}
          <line x1="22" y1="20" x2="22" y2="52" stroke="#0b1220" strokeWidth="5" strokeLinecap="round" />

          {/* R — bowl */}
          <path
            d="M22 20 L38 20 Q52 20 52 30 Q52 40 38 40 L22 40"
            stroke="#0b1220"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />

          {/* R — leg (accent gradient) */}
          <line x1="36" y1="40" x2="52" y2="52" stroke="url(#gradOuter)" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="premium-text">
        <span className="brand-name">
          Rison&nbsp;<span className="brand-ai">Ai</span>&nbsp;Tech
        </span>
        <span className="brand-tag">AI · Automation · Innovation</span>
      </div>
    </div>
  );
}
