import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-base text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/70 focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      data-slot="input"
      type={type}
      {...props}
    />
  );
}

export { Input };
