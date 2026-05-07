"use client";

import { motion } from "framer-motion";

// ─── Individual service icons ─────────────────────────────────────────────────
// Each renders a unique, structured animated SVG that communicates the service
// domain at a glance. No blur, no glow — pure geometry and motion.

const ACCENT = "#6366F1";
const ACCENT2 = "#FF3A6E";
const ACCENT3 = "#FF8C00";
const STROKE = "rgba(99,102,241,0.25)";

// Web Application Development — browser window + pulsing data bars
function WebAppIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-14 w-14">
      {/* Browser chrome */}
      <rect x="6" y="10" width="52" height="38" rx="4" stroke={ACCENT} strokeWidth="1.5" />
      <line x1="6" y1="20" x2="58" y2="20" stroke={ACCENT} strokeWidth="1.5" />
      {/* Traffic light dots */}
      <circle cx="13" cy="15" r="2" fill={ACCENT3} />
      <circle cx="20" cy="15" r="2" fill={ACCENT2} />
      <circle cx="27" cy="15" r="2" fill={ACCENT} />
      {/* Animated data bars */}
      {[0, 1, 2, 3].map((j) => (
        <motion.rect
          key={j}
          x={14 + j * 10}
          y={36}
          width={7}
          height={8}
          rx={1.5}
          fill={ACCENT}
          opacity={0.15 + j * 0.2}
          initial={{ scaleY: 0.4 }}
          animate={{ scaleY: [0.4, 1, 0.6, 1, 0.4] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: j * 0.3,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "bottom" }}
        />
      ))}
    </svg>
  );
}

// Android App Development — phone outline + signal rings
function AndroidIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-14 w-14">
      {/* Phone body */}
      <rect x="18" y="6" width="28" height="52" rx="5" stroke={ACCENT} strokeWidth="1.5" />
      <line x1="18" y1="16" x2="46" y2="16" stroke={ACCENT} strokeWidth="1.5" />
      <line x1="18" y1="48" x2="46" y2="48" stroke={ACCENT} strokeWidth="1.5" />
      {/* Home indicator */}
      <rect x="26" y="51.5" width="12" height="2.5" rx="1.25" fill={ACCENT} opacity={0.5} />
      {/* Signal arcs */}
      {[1, 2, 3].map((r) => (
        <motion.path
          key={r}
          d={`M ${32 - r * 5} ${32 - r * 3} A ${r * 5} ${r * 5} 0 0 1 ${32 + r * 5} ${32 - r * 3}`}
          stroke={ACCENT}
          strokeWidth={1.2}
          strokeLinecap="round"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: [0, 0.7, 0], pathLength: [0, 1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: r * 0.45,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Centre dot */}
      <circle cx="32" cy="32" r="2.5" fill={ACCENT} />
    </svg>
  );
}

// High-Converting Websites / Website Development — cursor + conversion arrow
function WebsiteIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-14 w-14">
      {/* Globe lines */}
      <circle cx="32" cy="32" r="22" stroke={ACCENT} strokeWidth="1.5" />
      <ellipse cx="32" cy="32" rx="10" ry="22" stroke={ACCENT} strokeWidth="1.2" opacity={0.4} />
      <line x1="10" y1="32" x2="54" y2="32" stroke={ACCENT} strokeWidth="1.2" opacity={0.4} />
      <line x1="13" y1="22" x2="51" y2="22" stroke={ACCENT} strokeWidth="1" opacity={0.3} />
      <line x1="13" y1="42" x2="51" y2="42" stroke={ACCENT} strokeWidth="1" opacity={0.3} />
      {/* Animated upward arrow overlay — conversion signal */}
      <motion.path
        d="M32 42 L32 24 M32 24 L26 30 M32 24 L38 30"
        stroke={ACCENT2}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: [0, 1, 1, 0], y: [6, 0, 0, -6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

// AI Automation Systems — circuit / node graph
function AIAutomationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-14 w-14">
      {/* Central brain-like hex */}
      <polygon
        points="32,10 46,18 46,34 32,42 18,34 18,18"
        stroke={ACCENT}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Circuit lines out */}
      <line x1="32" y1="42" x2="32" y2="56" stroke={STROKE} strokeWidth="1.2" />
      <line x1="46" y1="34" x2="56" y2="40" stroke={STROKE} strokeWidth="1.2" />
      <line x1="18" y1="34" x2="8" y2="40" stroke={STROKE} strokeWidth="1.2" />
      {/* End nodes */}
      <circle cx="32" cy="56" r="3" fill={ACCENT} opacity={0.7} />
      <circle cx="56" cy="40" r="3" fill={ACCENT2} opacity={0.7} />
      <circle cx="8" cy="40" r="3" fill={ACCENT3} opacity={0.7} />
      {/* Pulsing centre */}
      <motion.circle
        cx="32"
        cy="26"
        r="5"
        fill={ACCENT}
        animate={{ r: [5, 7, 5], opacity: [0.8, 0.3, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Rotating ring around centre */}
      <motion.circle
        cx="32"
        cy="26"
        r="9"
        stroke={ACCENT}
        strokeWidth="1"
        strokeDasharray="3 4"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "32px 26px" }}
      />
    </svg>
  );
}

// WhatsApp Automation — chat bubble + flowing dots
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-14 w-14">
      {/* Outer chat bubble */}
      <path
        d="M10 14 C10 10 13 8 16 8 L48 8 C51 8 54 10 54 14 L54 36 C54 39 51 42 48 42 L22 42 L12 54 L14 42 L16 42 C13 42 10 39 10 36 Z"
        stroke={ACCENT}
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Typing dots */}
      {[0, 1, 2].map((j) => (
        <motion.circle
          key={j}
          cx={24 + j * 8}
          cy={25}
          r={3}
          fill={ACCENT}
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: j * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

// ─── Map service id → icon component ─────────────────────────────────────────
const iconMap: Record<string, React.FC> = {
  "web-app": WebAppIcon,
  android: AndroidIcon,
  website: WebsiteIcon,
  "website-development": WebsiteIcon,
  "ai-automation": AIAutomationIcon,
  "whatsapp-automation": WhatsAppIcon,
};

// Fallback — rotating ring + core for any future services
function FallbackIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-14 w-14">
      <motion.circle
        cx="32"
        cy="32"
        r="22"
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeDasharray="5 5"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "32px 32px" }}
      />
      <circle cx="32" cy="32" r="5" fill={ACCENT} opacity={0.8} />
    </svg>
  );
}

// ─── Public component ─────────────────────────────────────────────────────────
export default function ServiceIcon({ serviceId }: { serviceId: string }) {
  const Icon = iconMap[serviceId] ?? FallbackIcon;
  return (
    <div className="service-icon-wrap">
      <Icon />
    </div>
  );
}
