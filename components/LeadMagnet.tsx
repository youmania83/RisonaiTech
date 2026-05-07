import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

import Reveal from "@/components/Reveal";

export default function LeadMagnet() {
  return (
    <section className="bg-white py-14">
      <div className="container-site">
        <Reveal>
          <div
            className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-[#635BFF]/20 bg-gradient-to-br from-[#f5f4ff] to-[#eef6ff] p-8 text-center sm:flex-row sm:text-left lg:px-12 lg:py-10"
          >
            {/* Icon + Text */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                style={{ background: "rgba(99,91,255,0.12)" }}
              >
                <Zap className="text-[#635BFF]" size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
                  Free for Indian Businesses
                </p>
                <h3
                  className="mt-1 font-display text-xl font-bold text-brand-dark sm:text-2xl"
                >
                  Get a Free AI Automation Audit
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-gray">
                  We'll map exactly which of your manual processes can be
                  automated, what it will cost, and how much time you'll save —
                  in a 30-minute call. No pitch. No obligation.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-shrink-0 flex-col items-center gap-2">
              <Link
                className="btn-primary whitespace-nowrap"
                href="/contact"
              >
                Claim Free Audit
                <ArrowRight size={15} />
              </Link>
              <p className="text-xs text-brand-subtle">
                Only 3 spots left this month
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
