"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import of lottie-react so it doesn't load on the critical LCP path
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroLottie() {
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    let cancelled = false;

    // Skip Lottie entirely if user prefers reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const loadLottie = () => {
      if (cancelled) return;
      fetch("/lottie/hero.json")
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (!cancelled) setAnimationData(data);
        })
        .catch(() => {});
    };

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (h: number) => void;
    };
    const useIdle = typeof w.requestIdleCallback === "function";
    const timer = useIdle
      ? w.requestIdleCallback!(loadLottie, { timeout: 2500 })
      : window.setTimeout(loadLottie, 1500);

    return () => {
      cancelled = true;
      if (useIdle && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(timer as number);
      } else {
        window.clearTimeout(timer as number);
      }
    };
  }, []);

  if (!animationData) return null;

  return (
    <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen" aria-hidden>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
