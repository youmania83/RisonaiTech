"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  duration?: number;
  delay?: number;
  borderRadius?: number;
  beamLength?: number;
  strokeWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}

export function BorderBeam({
  duration = 5,
  delay = 0,
  borderRadius = 8,
  beamLength = 60,
  strokeWidth = 1.5,
  colorFrom = "#a78bfa",
  colorTo = "#ec4899",
  className,
}: BorderBeamProps) {
  const id = React.useId().replace(/:/g, "");
  const gradId = `bb-grad-${id}`;
  const filterId = `bb-glow-${id}`;
  const dashGap = 1000;

  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colorFrom} stopOpacity="0" />
          <stop offset="50%" stopColor={colorFrom} stopOpacity="1" />
          <stop offset="100%" stopColor={colorTo} stopOpacity="0" />
        </linearGradient>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>
      <rect
        x={strokeWidth / 2}
        y={strokeWidth / 2}
        width={`calc(100% - ${strokeWidth}px)`}
        height={`calc(100% - ${strokeWidth}px)`}
        rx={borderRadius}
        ry={borderRadius}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={`${beamLength} ${dashGap}`}
        filter={`url(#${filterId})`}
        className="animate-border-beam"
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${-delay}s`,
        }}
      />
    </svg>
  );
}
