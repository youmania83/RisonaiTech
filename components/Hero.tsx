"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";
import { capabilityIcons, proofPoints } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden pt-20">
      <Image
        alt="Abstract AI control room with data systems and luminous infrastructure"
        className="object-cover opacity-45"
        fill
        priority
        sizes="100vw"
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=88"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,12,0.96)_0%,rgba(5,5,12,0.82)_42%,rgba(5,5,12,0.42)_100%)]" />
      <div className="absolute inset-0 noise-overlay opacity-[0.08]" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-background to-transparent" />

      <div className="container-premium relative z-10 flex min-h-[calc(88svh-5rem)] items-center py-16">
        <motion.div
          animate="visible"
          className="max-w-5xl"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.span className="eyebrow" variants={fadeUp}>
            AI + automation + product engineering
          </motion.span>
          <motion.h1
            className="mt-7 max-w-5xl font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-8xl"
            variants={fadeUp}
          >
            We Build AI-Powered Systems That Scale Businesses
          </motion.h1>
          <motion.p
            className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl"
            variants={fadeUp}
          >
            Risonai Tech builds intelligent workflows, scalable SaaS platforms,
            and automation systems for companies that need premium execution,
            not experimental noise.
          </motion.p>

          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
            <Button asChild size="lg">
              <Link href="/contact">
                Book Strategy Call
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/products">
                <PlayCircle />
                View Our Work
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 grid max-w-4xl gap-3 sm:grid-cols-3"
            variants={staggerContainer}
          >
            {proofPoints.map((item) => (
              <motion.div
                className="glass-panel rounded-2xl p-4"
                key={item.value}
                variants={fadeIn}
              >
                <p className="font-display text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="container-premium relative z-10 -mt-6 hidden pb-8 lg:block"
        initial={{ opacity: 0, y: 18 }}
        transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
      >
        <div className="glass-panel ml-auto grid max-w-xl grid-cols-4 rounded-2xl p-3">
          {capabilityIcons.map((Icon, index) => (
            <div
              className="flex items-center justify-center border-r border-white/10 py-4 last:border-r-0"
              key={index}
            >
              <Icon className="size-5 text-accent" />
            </div>
          ))}
        </div>
      </motion.div>

      <div className="container-premium relative z-10 pb-10">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <CheckCircle2 className="size-4 text-accent" />
          Built for high-ticket SaaS, automation, booking, CRM, and workflow systems.
        </div>
      </div>
    </section>
  );
}
