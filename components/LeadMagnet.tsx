import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

import Reveal from "@/components/Reveal";

export default function LeadMagnet() {
  return (
    <section className="py-14" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container-site">
        <Reveal>
          <div
            className="flex flex-col items-center justify-between gap-8 rounded-2xl p-8 text-center sm:flex-row sm:text-left lg:px-12 lg:py-10"
            style={{
              background: "linear-gradient(135deg, rgba(79,70,229,0.03) 0%, rgba(37,99,235,0.01) 100%)",
              border: "1px solid rgba(79,70,229,0.15)",
              boxShadow: "0 10px 30px rgba(15,23,42,0.02), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {/* Icon + Text */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                style={{ background: "rgba(79,70,229,0.08)" }}
              >
                <Zap className="text-brand-purple" size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-purple">
                  Free for Indian Businesses
                </p>
                <h2
                  className="mt-1 font-display text-xl font-bold text-slate-900 sm:text-2xl"
                >
                  Get a Free AI Automation Audit
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  We&apos;ll map exactly which of your manual processes can be
                  automated, what it will cost, and how much time you&apos;ll save —
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
              <p className="text-xs text-slate-500">
                Only 3 spots left this month
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
