import { CheckCircle2 } from "lucide-react";

import Reveal from "@/components/Reveal";
import { services } from "@/lib/constants";
import CTA from "@/components/CTA";

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="label-pill mb-5 inline-flex">Services</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Everything you need to{" "}
                <span className="grad-text">ship great products</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-xl text-brand-gray">
                Four core disciplines. One team. End-to-end ownership.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service detail cards */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <div className="flex flex-col gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal delay={i * 0.08} key={service.id}>
                  <div className="card-base overflow-hidden">
                    <div className="flex flex-col gap-0 lg:flex-row">
                      {/* Icon accent */}
                      <div
                        className="flex items-center justify-center p-10 lg:w-[240px]"
                        style={{ background: "rgba(99,91,255,0.05)" }}
                      >
                        <div
                          className="flex h-16 w-16 items-center justify-center rounded-2xl"
                          style={{ background: "rgba(99,91,255,0.1)" }}
                        >
                          <Icon className="text-[#635BFF]" size={28} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-center p-8 lg:flex-1 lg:p-10">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#635BFF]">
                          Service 0{i + 1}
                        </span>
                        <h2
                          className="font-display mt-2 text-2xl font-bold text-brand-dark sm:text-3xl"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {service.title}
                        </h2>
                        <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-gray">
                          {service.description}
                        </p>
                        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                          {service.bullets.map((b) => (
                            <li className="flex items-center gap-2 text-sm text-brand-gray" key={b}>
                              <CheckCircle2 className="flex-shrink-0 text-[#635BFF]" size={14} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
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

