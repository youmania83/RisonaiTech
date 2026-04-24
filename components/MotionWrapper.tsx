"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  viewportOnce?: boolean;
}

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function MotionWrapper({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  variants = defaultVariants,
  viewportOnce = true,
}: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: viewportOnce,
    amount: 0.1
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
      variants={variants}
      transition={{
        duration: duration,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
