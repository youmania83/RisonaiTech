import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import { products } from "@/lib/constants";

export default function Products() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <Reveal>
            <span className="label-pill mb-4 inline-flex">Our Products</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Products we&apos;ve{" "}
              <span className="grad-text">designed &amp; built</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-lg text-brand-gray">
              Real products that solve real problems — built entirely in-house.
            </p>
          </Reveal>
        </div>

        {/* Product cards */}
        <div className="flex flex-col gap-8">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <Reveal delay={0.05 + i * 0.06} key={product.id}>
                <div className="card-base overflow-hidden">
                  <div className={`flex flex-col lg:flex-row ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                    {/* Text */}
                    <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                          style={{ background: product.color }}
                        >
                          <Icon size={18} />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-subtle">
                          {product.subtitle}
                        </p>
                      </div>
                      <h3
                        className="font-display mt-5 text-3xl font-bold text-brand-dark"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {product.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-brand-gray">
                        {product.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <span
                            className="rounded-full px-3 py-1 text-xs font-medium"
                            key={tag}
                            style={{ background: `${product.color}12`, color: product.color }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        className="mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-70"
                        href="/products"
                        style={{ color: product.color }}
                      >
                        Learn more <ArrowUpRight size={14} />
                      </Link>
                    </div>
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden lg:h-auto lg:w-1/2">
                      <Image
                        alt={product.title}
                        className="object-cover"
                        fill
                        priority={i === 0}
                        quality={70}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        src={product.image}
                      />
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{ background: product.color }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

