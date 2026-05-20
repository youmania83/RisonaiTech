"use client";

import { useEffect, useState } from "react";
import { getPricing, type ServiceKey } from "@/lib/pricing";

interface PriceTagProps {
  service: ServiceKey;
  /** "from" | "range" — defaults to "from" */
  variant?: "from" | "range";
  className?: string;
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export default function PriceTag({
  service,
  variant = "from",
  className,
}: PriceTagProps) {
  // Default to INR on server / before hydration — avoids layout shift
  const [price, setPrice] = useState<string>(() => {
    const p = getPricing(service, "IN");
    return variant === "range" ? p.range : p.from;
  });

  useEffect(() => {
    const country = getCookie("visitor-country") ?? "IN";
    const p = getPricing(service, country);
    setPrice(variant === "range" ? p.range : p.from);
  }, [service, variant]);

  return <span className={className}>{price}</span>;
}
