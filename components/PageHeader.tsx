"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  className
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "container-premium flex min-h-[52vh] items-end pb-12 pt-32 sm:pb-16 lg:pt-40",
        className
      )}
    >
      <motion.div
        animate="visible"
        className="max-w-4xl"
        initial="hidden"
        variants={fadeUp}
      >
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
