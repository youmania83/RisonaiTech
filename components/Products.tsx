"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cardReveal, hoverLift, staggerContainer, viewport } from "@/lib/animations";
import { products } from "@/lib/constants";

type ProductsProps = {
  compact?: boolean;
};

export default function Products({ compact = false }: ProductsProps) {
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
          <span className="eyebrow">Products</span>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Product concepts shaped for serious operators.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Risonai Tech builds SaaS platforms and intelligent systems that can
            become durable business assets.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-2"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewport}
          whileInView="visible"
        >
          {products.map((product) => (
            <motion.div key={product.title} variants={cardReveal} whileHover={hoverLift}>
              <Card className="group h-full overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    alt={product.subtitle}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    src={product.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-accent backdrop-blur-xl">
                    <product.icon className="size-5" />
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase text-primary">
                    {product.subtitle}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.signals.map((signal) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-200"
                        key={signal}
                      >
                        {signal}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {!compact ? (
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link href="/products">
                View product direction
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
