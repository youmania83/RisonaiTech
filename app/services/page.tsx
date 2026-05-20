import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import Reveal from "@/components/Reveal";
import { services } from "@/lib/constants";
import CTA from "@/components/CTA";
import ServiceIcon from "@/components/ServiceIcon";
import { breadcrumbSchema, graph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "6 AI & Software Services for Indian Businesses — Automation, AI Agents, CRM, Chatbots",
  description:
    "RisonAI Tech offers 6 core services for Indian businesses: AI automation, AI agent development, CRM solutions, AI chatbots, website development, and WhatsApp automation. Fixed-price, full code ownership. Starting ₹20,000.",
  keywords: [
    "AI automation services India",
    "AI agent development India",
    "CRM development India",
    "AI chatbot services India",
    "agentic AI India",
    "software development services Delhi",
    "WhatsApp automation India",
    "AI workflow automation India",
  ],
  alternates: { canonical: "/services" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "Services | RisonAI Tech — AI Automation, AI Agents & CRM Development",
    description:
      "AI automation, AI agent development, CRM solutions, AI chatbots, websites, and WhatsApp automation. Six core disciplines, one team.",
    url: "https://risonaitech.com/services",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "6 AI & Software Services | RisonAI Tech India",
    description: "AI automation, AI agents, CRM, chatbots, WhatsApp automation, websites. Fixed-price. Full code ownership. Starting ₹20,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const servicesPageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]),
);

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />

      {/* Header */}
      <section className="pb-16 pt-36 bg-grid" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="label-pill mb-5 inline-flex">Services</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl"
              >
                Everything you need to{" "}
                <span className="grad-text">ship great products</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-xl text-white/52">
                Six core disciplines. One team. End-to-end ownership.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service detail cards */}
      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
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
                        style={{ background: "rgba(99,91,255,0.06)", borderRight: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <ServiceIcon serviceId={service.id} />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-center p-8 lg:flex-1 lg:p-10">
                        <h2
                          className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl"
                        >
                          {service.title}
                        </h2>
                        <p className="mt-3 max-w-xl text-base leading-relaxed text-white/52">
                          {service.description}
                        </p>
                        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                          {service.bullets.map((b) => (
                            <li className="flex items-center gap-2 text-sm text-white/58" key={b}>
                              <CheckCircle2 className="flex-shrink-0 text-[#a78bfa]" size={14} />
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

