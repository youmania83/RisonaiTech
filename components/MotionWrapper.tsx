"use client";

/**
 * MotionWrapper — drop-in viewport reveal wrapper.
 *
 * Originally backed by framer-motion (`useInView` + <motion.div>); rewritten
 * to use a single IntersectionObserver + CSS transitions so it no longer
 * pulls framer-motion into the bundle. The public API (children, className,
 * delay, duration, variants, viewportOnce) is preserved for backwards
 * compatibility — `variants` is accepted but intentionally ignored.
 */

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  // Accepted for backwards-compat with previous framer-motion API. Ignored.
  variants?: unknown;
  viewportOnce?: boolean;
}

export default function MotionWrapper({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  viewportOnce = true,
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect users that ask for reduced motion — show immediately, no animation.
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (viewportOnce) {
              obs.disconnect();
              return;
            }
          } else if (!viewportOnce) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [viewportOnce]);

  const style: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}s`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay * 0.12}s`,
    transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 40px, 0)",
    opacity: visible ? 1 : 0,
    willChange: visible ? "auto" : "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
