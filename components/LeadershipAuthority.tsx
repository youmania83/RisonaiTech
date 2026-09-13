import { MessageCircle, ShieldCheck, Zap } from "lucide-react";

const founder = {
  name: "Yogesh Kumar Wadhwa",
  role: "Founder & Lead Product Engineer",
  experienceYears: 8,
  projectsShipped: 40,
  specialties: [
    "AI automation systems",
    "RAG architecture",
    "WhatsApp automation",
    "SaaS platform engineering",
    "CRM architecture",
  ],
  bio: "No sales reps, no middlemen, and no account managers. At RisonAI Tech, you work directly with me. I lead engineering and execution for healthcare, real estate, and SaaS systems with strict uptime, conversion, and operational requirements.",
  sameAs: [
    "https://www.linkedin.com/company/risonaitech",
    "https://www.linkedin.com/in/yogesh-kumar-wadhwa-319187412/",
    "https://github.com/risonaitech",
    "https://github.com/youmania83",
    "https://x.com/risonaitech",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://risonaitech.com/#founder",
  name: founder.name,
  jobTitle: founder.role,
  description: founder.bio,
  worksFor: {
    "@type": "Organization",
    "@id": "https://risonaitech.com/#business",
    name: "RisonAI Tech",
    url: "https://risonaitech.com",
  },
  knowsAbout: founder.specialties,
  sameAs: founder.sameAs,
};

export default function LeadershipAuthority() {
  const whatsappMessage = encodeURIComponent(
    "Hi Yogesh, I want to discuss automating our business processes. Let's connect."
  );

  return (
    <section className="py-20 relative overflow-hidden" id="leadership" style={{ backgroundColor: "var(--bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      {/* Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-[300px] w-[300px] rounded-full blur-[80px] opacity-10"
        style={{ background: "rgba(79,70,229,0.06)" }}
      />

      <div className="container-site relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          {/* Text and Copy */}
          <div className="space-y-6">
            <span className="label-pill inline-flex">Work Directly With The Founder</span>
            <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl leading-tight">
              Direct Engineering access. <br />
              <span className="grad-text">Zero middlemen.</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {founder.bio}
            </p>
 
            <div className="grid gap-4 sm:grid-cols-3 pt-4">
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-slate-200/60">
                <span className="text-2xl font-extrabold text-brand-purple block">{founder.experienceYears}+ Years</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block mt-1">Building Software</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-slate-200/60">
                <span className="text-2xl font-extrabold text-brand-purple block">{founder.projectsShipped}+ Systems</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block mt-1">Delivered Globally</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-slate-200/60">
                <span className="text-2xl font-extrabold text-brand-purple block">Real Estate & Health</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block mt-1">Products Built</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href={`https://wa.me/919310837724?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} />
                Chat with Yogesh on WhatsApp
              </a>
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-brand-purple" />
                No sales pitches. Direct technical scoping.
              </span>
            </div>
          </div>

          {/* Visual Profile Card */}
          <div 
            className="rounded-2xl p-6 sm:p-8 border relative overflow-hidden flex flex-col justify-between h-full border-orange-100"
            style={{
              background: "linear-gradient(135deg, rgba(255,122,0,0.02) 0%, rgba(255,165,0,0.01) 100%)",
              boxShadow: "0 15px 40px rgba(15,23,42,0.03), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            <div className="space-y-6">
              {/* Profile Avatar */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-full shrink-0 flex items-center justify-center bg-gradient-to-tr from-[#FF7A00] to-[#FFA500] p-0.5 shadow-lg shadow-[#FF7A00]/20">
                  <div className="h-full w-full rounded-full bg-slate-900 flex items-center justify-center font-display text-lg font-bold text-white tracking-wider">
                    YW
                  </div>
                  <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" title="Online" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{founder.name}</h3>
                  <p className="text-xs text-brand-purple font-medium">{founder.role}</p>
                </div>
              </div>

              {/* Promises checklist */}
              <ul className="space-y-3 pt-4 border-t border-slate-100">
                {[
                  "No sales representatives or account managers",
                  "Direct WhatsApp line for rapid development updates",
                  "Fixed-scope agreements with zero hidden costs",
                  "Weekly demo calls & iterative production delivery",
                  "Complete IP, source code, and cloud ownership",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Zap className="text-brand-purple shrink-0 mt-0.5" size={14} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
 
            <div className="mt-8 flex flex-wrap gap-2 text-xs pt-4 border-t border-slate-100">
              {founder.sameAs.map((url) => (
                <a
                  className="rounded-md px-2 py-1 text-slate-500 transition-colors hover:text-brand-purple hover:bg-slate-100/50"
                  href={url}
                  key={url}
                  rel="noreferrer"
                  target="_blank"
                  style={{ border: "1px solid var(--border)" }}
                >
                  {url.replace("https://", "")}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
