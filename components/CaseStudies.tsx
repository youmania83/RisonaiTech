"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { cardReveal, hoverLift, staggerContainer, viewport } from "@/lib/animations";
import { caseStudies } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section className="section-padding">
      <div className="container-premium">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          variants={cardReveal}
          viewport={viewport}
          whileInView="visible"
        >
          <span className="eyebrow">Case studies</span>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Problem to solution to measurable operational lift.
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-3"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewport}
          whileInView="visible"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.title} variants={cardReveal} whileHover={hoverLift}>
              <Card className="h-full p-6">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-accent/10 text-accent">
                  <study.icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                  {study.title}
                </h3>
                <div className="mt-6 space-y-5 text-sm leading-7 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-white">Problem:</span>{" "}
                    {study.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Solution:</span>{" "}
                    {study.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Outcome:</span>{" "}
                    {study.outcome}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
