"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* Liquid Glass Button */

const liquidButtonVariants = cva(
  [
    "group relative inline-flex items-center justify-center gap-2 select-none isolate overflow-hidden",
    "font-semibold text-white antialiased",
    "rounded-full border border-white/15",
    "backdrop-blur-xl backdrop-saturate-150",
    "[text-shadow:0_1px_1px_rgba(15,23,42,0.18)]",
    "before:pointer-events-none before:absolute before:inset-x-2 before:top-px before:h-1/2 before:rounded-full before:opacity-60",
    "before:bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_100%)]",
    "transition-[transform,box-shadow,border-color] duration-300 ease-out",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.25),0_10px_40px_-12px_rgba(99,91,255,0.55)]",
    "hover:-translate-y-0.5 hover:border-white/25",
    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.3),0_18px_60px_-16px_rgba(139,92,246,0.7),0_0_0_1px_rgba(255,255,255,0.06)]",
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
    const mergedClassName = cn(liquidButtonVariants({ size }), className);
    const mergedStyle = {
      backgroundImage:
        "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.10) 100%)",
      ...style,
    };

    if (asChild) {
      if (!React.isValidElement(children)) {
        return null;
      }

      const child = children as React.ReactElement<{
        className?: string;
        style?: React.CSSProperties;
      }>;

      return React.cloneElement(child, {
        className: cn(mergedClassName, child.props.className),
        style: {
          ...mergedStyle,
          ...child.props.style,
        },
      });
    }

    return (
      <button
        ref={ref}
        className={mergedClassName}
        style={mergedStyle}
        {...props}
      >
        {children}
      </button>
    );
  }
);
LiquidButton.displayName = "LiquidButton";
