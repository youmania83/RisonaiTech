"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { fadeUp, viewport } from "@/lib/animations";
import { siteConfig } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container-premium">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-premium-glow backdrop-blur-2xl sm:p-10 lg:p-14"
          initial="hidden"
          variants={fadeUp}
          viewport={viewport}
          whileInView="visible"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(124,92,255,0.22),transparent_42%),linear-gradient(260deg,rgba(45,212,191,0.16),transparent_34%)]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="eyebrow">Conversion-ready build partner</span>
              <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Let us design the AI system your next growth stage needs.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                Bring the workflow, product idea, or operational bottleneck.
                We will shape the architecture, user journey, and delivery plan.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" variant="secondary">
                <a href={siteConfig.whatsappUrl} rel="noreferrer" target="_blank">
                  <MessageCircle />
                  WhatsApp Risonai
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Contact team
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
