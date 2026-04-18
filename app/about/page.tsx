import type { Metadata } from "next";

import MotionSection from "@/components/MotionSection";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { processSteps, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Risonai Tech builds AI automation systems, SaaS products, and intelligent workflows for premium teams.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        description="We combine product strategy, automation architecture, and senior engineering execution to help businesses turn operational complexity into scalable digital systems."
        eyebrow="About Risonai"
        title="A focused AI product studio for serious builders."
      />

      <MotionSection>
        <div className="container-premium grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">Positioning</span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Premium systems, not throwaway prototypes.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              Risonai Tech builds AI + Automation + Product Engineering solutions
              for companies that want measurable outcomes from technology.
            </p>
            <p>
              Our work covers intelligent workflows, booking engines, CRM
              automation, internal portals, and scalable SaaS platforms designed
              for high-value operations.
            </p>
            <p className="text-slate-300">{siteConfig.address}</p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="pt-0">
        <div className="container-premium">
          <div className="grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <Card className="p-6" key={step.title}>
                <p className="font-display text-5xl font-semibold text-primary/70">
                  0{index + 1}
                </p>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <CTA />
    </>
  );
}
