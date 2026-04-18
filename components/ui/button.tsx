import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-premium-glow hover:bg-primary/90 hover:shadow-[0_18px_70px_rgba(124,92,255,0.32)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-[0_18px_70px_rgba(45,212,191,0.18)]",
        outline:
          "border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.08]",
        ghost: "text-muted-foreground hover:bg-white/[0.06] hover:text-white",
        link: "h-auto rounded-none p-0 text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90"
      },
      size: {
        default: "h-11 gap-2 px-5",
        sm: "h-9 gap-2 px-4 text-xs",
        lg: "h-12 gap-2 px-7 text-base",
        icon: "size-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };
