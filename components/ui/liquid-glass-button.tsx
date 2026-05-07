"use client";

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ─── Liquid Glass Button ──────────────────────────────────────────────────── */

const liquidButtonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2 select-none isolate",
    "font-semibold text-white antialiased",
    "rounded-full border border-white/15",
    "backdrop-blur-xl backdrop-saturate-150",
    "transition-[transform,box-shadow,border-color] duration-300 ease-out",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.25),0_10px_40px_-12px_rgba(99,91,255,0.55)]",
    "hover:-translate-y-0.5 hover:border-white/25",
    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.3),0_18px_60px_-16px_rgba(139,92,246,0.7)]",
    "active:translate-y-0 active:scale-[0.99]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070F]",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-sm",
        xl: "h-14 px-8 text-base",
        xxl: "h-16 px-10 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {
  asChild?: boolean;
}

export const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, size, asChild = false, children, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const filterId = React.useId();

    return (
      <Comp
        ref={ref}
        className={cn(liquidButtonVariants({ size }), className)}
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.10) 100%)",
          filter: `url(#${filterId})`,
          ...style,
        }}
        {...props}
      >
        {/* Goo filter scoped to this button only */}
        <svg aria-hidden width="0" height="0" className="absolute" style={{ pointerEvents: "none" }}>
          <defs>
            <filter id={filterId}>
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>

        {/* Top sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-2 top-px h-1/2 rounded-full opacity-60"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Inner radial glow on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 0%, rgba(139,92,246,0.45) 0%, transparent 70%)",
          }}
        />

        <Slottable>{children}</Slottable>
      </Comp>
    );
  }
);
LiquidButton.displayName = "LiquidButton";
