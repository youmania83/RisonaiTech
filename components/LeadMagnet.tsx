import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

import Reveal from "@/components/Reveal";

export default function LeadMagnet() {
  return (
    <section className="py-14" style={{ backgroundColor: "#090C18" }}>
      <div className="container-site">
        <Reveal>
          <div
            className="flex flex-col items-center justify-between gap-8 rounded-2xl p-8 text-center sm:flex-row sm:text-left lg:px-12 lg:py-10"
            style={{
              background: "linear-gradient(135deg, rgba(99,91,255,0.1) 0%, rgba(14,165,233,0.06) 100%)",
              border: "1px solid rgba(99,91,255,0.22)",
              boxShadow: "0 0 60px rgba(99,91,255,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
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
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a78bfa]">
                  Free for Indian Businesses
                </p>
                <h3
                  className="mt-1 font-display text-xl font-bold text-white sm:text-2xl"
                >
                  Get a Free AI Automation Audit
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/52">
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
              <p className="text-xs text-white/32">
                Only 3 spots left this month
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
