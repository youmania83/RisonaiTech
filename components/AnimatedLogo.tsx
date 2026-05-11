"use client";

/**
 * AnimatedLogo — premium neural-lattice mark + wordmark.
 *
 * Uses the official brand mark (4×3 node lattice with a central hub) and
 * layers in motion: a slowly rotating ring around the hub, a soft glow pulse,
 * and per-node twinkles. Mirrors the SVG kit shipped in /public/brand/.
 */
export default function AnimatedLogo({ size = 40 }: { size?: number }) {
  return (
    <div className="premium-logo">
      <div
        className="premium-icon"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 128 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="rs-iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C6FF" />
              <stop offset="100%" stopColor="#6C47FF" />
            </linearGradient>
            <linearGradient id="rs-dotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5B0" />
              <stop offset="100%" stopColor="#00C6FF" />
            </linearGradient>
            <radialGradient id="rs-hubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6C47FF" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#00C6FF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#00C6FF" stopOpacity="0" />
            </radialGradient>
            <filter id="rs-softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Hub aura — soft radial halo behind the centre */}
          <circle cx="48" cy="48" r="28" fill="url(#rs-hubGlow)" className="glow-pulse" />

          {/* Lattice connectors */}
          <g
            stroke="url(#rs-iconGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#rs-softGlow)"
          >
            <line x1="16" y1="16" x2="48" y2="16" />
            <line x1="48" y1="16" x2="48" y2="48" />
            <line x1="48" y1="48" x2="80" y2="48" />
            <line x1="16" y1="16" x2="16" y2="80" />
          </g>
          <g
            stroke="url(#rs-dotGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#rs-softGlow)"
          >
            <line x1="80" y1="48" x2="80" y2="16" />
            <line x1="16" y1="80" x2="48" y2="80" />
            <line x1="48" y1="48" x2="48" y2="80" />
            <line x1="80" y1="16" x2="112" y2="16" />
            <line x1="112" y1="16" x2="112" y2="80" />
            <line x1="80" y1="80" x2="112" y2="80" />
            <line x1="48" y1="80" x2="80" y2="80" />
          </g>

          {/* Rotating concentric rings around the hub */}
          <g className="ring" style={{ transformOrigin: "48px 48px" }}>
            <circle
              cx="48"
              cy="48"
              r="12"
              fill="none"
              stroke="#6C47FF"
              strokeWidth="1.4"
              strokeDasharray="3 4"
              opacity="0.45"
            />
            <circle
              cx="48"
              cy="48"
              r="18"
              fill="none"
              stroke="#00C6FF"
              strokeWidth="1"
              strokeDasharray="2 5"
              opacity="0.22"
            />
          </g>

          {/* Nodes — twinkling sequence keeps motion subtle */}
          <g>
            <circle cx="16" cy="16" r="5.5" fill="url(#rs-iconGrad)" className="node node-1" />
            <circle cx="48" cy="16" r="4"   fill="#6C47FF"           className="node node-2" />
            <circle cx="80" cy="16" r="4"   fill="#00C6FF"           className="node node-3" />
            <circle cx="112" cy="16" r="5.5" fill="url(#rs-dotGrad)" className="node node-4" />
            <circle cx="16" cy="80" r="4"   fill="#6C47FF"           className="node node-5" />
            <circle cx="80" cy="48" r="4"   fill="#00E5B0"           className="node node-6" />
            <circle cx="48" cy="80" r="4"   fill="#00C6FF"           className="node node-7" />
            <circle cx="80" cy="80" r="5.5" fill="url(#rs-iconGrad)" className="node node-8" />
            <circle cx="112" cy="80" r="4"  fill="#00E5B0"           className="node node-9" />
            {/* Central hub — slightly bigger, always on */}
            <circle cx="48" cy="48" r="7" fill="url(#rs-iconGrad)" className="node-hub" />
          </g>
        </svg>
      </div>

      <div className="premium-text">
        <span className="brand-name">
          Rison<span className="brand-ai">&nbsp;AI&nbsp;</span>Tech
        </span>
        <span className="brand-tag">Automate · Innovate · Accelerate</span>
      </div>
    </div>
  );
}
