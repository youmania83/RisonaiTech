"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp, viewport } from "@/lib/animations";
import { cn } from "@/lib/utils";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function MotionSection({
  children,
  className,
  id
}: MotionSectionProps) {
  return (
    <motion.section
      className={cn("section-padding", className)}
      id={id}
      initial="hidden"
      variants={fadeUp}
      viewport={viewport}
      whileInView="visible"
    >
      {children}
    </motion.section>
  );
}
