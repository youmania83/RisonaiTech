import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  variants?: unknown;
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const style: CSSProperties = {
    animationDelay: `${delay}s`,
  };

  return (
    <div className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
