"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  variants,
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  /**
   * "idle"    → SSR / pre-mount: render as a plain visible div
   * "visible" → element was in viewport on first mount OR has since scrolled in
   * "waiting" → element was below the fold on first mount; waiting for IntersectionObserver
   */
  const [state, setState] = useState<"idle" | "visible" | "waiting">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setState("visible");
      return;
    }

    // Synchronously check if already in viewport
    const { top, bottom } = el.getBoundingClientRect();
    const inView = top < window.innerHeight + 80 && bottom > 0;

    if (inView) {
      // Already visible: play the entrance animation without hiding first
      setState("visible");
      return;
    }

    // Below-fold: hide and use IntersectionObserver to reveal
    setState("waiting");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const v = variants ?? defaultVariants;

  // SSR and first frame: plain visible div (no opacity flash)
  if (state === "idle") {
    return (
      <div className={className} ref={ref}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      animate="visible"
      className={className}
      // above-fold elements start "visible" so there is truly no flash
      // below-fold elements start "hidden" and animate in via the state change
      initial={state === "waiting" ? "hidden" : "visible"}
      variants={v}
    >
      {children}
    </motion.div>
  );
}
