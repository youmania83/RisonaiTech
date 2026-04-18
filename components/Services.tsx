"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cardReveal, hoverLift, staggerContainer, viewport } from "@/lib/animations";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container-premium">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial="hidden"
            variants={cardReveal}
            viewport={viewport}
            whileInView="visible"
          >
            <span className="eyebrow">Services</span>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Systems that replace manual drag with intelligent momentum.
            </h2>
          </motion.div>
          <Button asChild variant="outline">
            <Link href="/services">
              Explore services
              <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewport}
          whileInView="visible"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardReveal} whileHover={hoverLift}>
              <Card className="h-full overflow-hidden">
                <CardHeader>
                  <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-primary/15 text-primary">
                    <service.icon className="size-5" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="mt-6 border-t border-white/10 pt-5 text-xs font-semibold uppercase text-accent">
                    {service.proof}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
