"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import { products } from "@/lib/constants";
import { scaleUp } from "@/lib/animations";
import CTA from "@/components/CTA";

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="label-pill mb-5 inline-flex">Products</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Built in-house.{" "}
                <span className="grad-text">Shipped to production.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-xl text-brand-gray">
                Products we&apos;ve designed, engineered, and launched — demonstrating
                what we can do for you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <Reveal delay={i * 0.1} key={product.id} variants={scaleUp}>
                  <div className="card-base group flex flex-col overflow-hidden h-full">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        alt={product.title}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        src={product.image}
                      />
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{ background: product.color }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-8">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
                          style={{ background: product.color }}
                        >
                          <Icon size={16} />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-subtle">
                          {product.subtitle}
                        </span>
                      </div>
                      <h2
                        className="font-display mt-4 text-2xl font-bold text-brand-dark"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {product.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                        {product.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <span
                            className="rounded-full px-3 py-1 text-xs font-medium"
                            key={tag}
                            style={{ background: `${product.color}15`, color: product.color }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex-1" />
                      <button
                        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                        style={{ color: product.color }}
                      >
                        Learn more <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

