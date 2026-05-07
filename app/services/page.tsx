import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import Reveal from "@/components/Reveal";
import { services } from "@/lib/constants";
import CTA from "@/components/CTA";
import ServiceIcon from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "AI & Software Development Services — AI Automation, SaaS, CRM, Chatbots",
  description:
    "RisonAI Tech offers AI automation, SaaS development, CRM solutions, AI chatbot development, website development, and WhatsApp automation for Indian businesses. Fixed-price projects.",
  keywords: [
    "AI automation services India",
    "SaaS development services India",
    "CRM development India",
    "AI chatbot services India",
    "software development services Delhi",
    "WhatsApp automation India",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | RisonAI Tech — AI Automation, SaaS & CRM Development",
    description:
      "AI automation, SaaS platforms, CRM solutions, AI chatbots, websites, and WhatsApp automation. Six core disciplines, one team.",
    url: "https://risonaitech.com/services",
  },
};

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
              >
                Everything you need to{" "}
                <span className="grad-text">ship great products</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-xl text-brand-gray">
                Six core disciplines. One team. End-to-end ownership.
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
              return (
                <Reveal delay={i * 0.08} key={service.id}>
                  <div className="service-card card-base overflow-hidden">
                    <div className="flex flex-col gap-0 lg:flex-row">
                      {/* Premium service icon */}
                      <div
                        className="flex items-center justify-center p-10 lg:w-[240px]"
                        style={{ background: "rgba(99,91,255,0.04)" }}
                      >
                        <ServiceIcon serviceId={service.id} />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-center p-8 lg:flex-1 lg:p-10">
                        <h2
                          className="font-display mt-2 text-2xl font-bold text-brand-dark sm:text-3xl"
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

