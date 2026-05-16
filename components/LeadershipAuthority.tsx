import Link from "next/link";

const founder = {
  name: "Yogesh Wadhwa",
  role: "Founder & Product Engineer",
  experienceYears: 8,
  projectsShipped: 40,
  specialties: [
    "AI automation systems",
    "RAG architecture",
    "WhatsApp automation",
    "SaaS platform engineering",
    "CRM architecture",
  ],
  bio: "Yogesh leads delivery across AI automation, SaaS, and integration-heavy systems for Indian startups and SMBs. He has shipped products in healthcare and real estate with strict uptime and conversion requirements.",
  image: "https://risonaitech.com/images/founder-yogesh.jpg",
  sameAs: [
    "https://linkedin.com/company/risonaitech",
    "https://github.com/risonaitech",
    "https://twitter.com/risonaitech",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://risonaitech.com/#founder",
  name: founder.name,
  jobTitle: founder.role,
  description: founder.bio,
  image: founder.image,
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
  return (
    <section className="py-20" id="leadership" style={{ backgroundColor: "#05070F" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="label-pill mb-4 inline-flex">Leadership & Expertise</span>
            <h2
              className="font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl"
            >
              Operator-led execution with <span className="grad-text">real delivery history</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-gray">
              {founder.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {founder.specialties.map((topic) => (
                <span
                  className="rounded-full px-3 py-1.5 text-xs font-medium text-white/65"
                  key={topic}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/60">
              Need references before you commit? Review our{" "}
              <Link className="text-[#a78bfa] underline underline-offset-2 hover:text-[#c4b5fd] transition-colors" href="/#case-studies">proof-of-work outcomes</Link>
              {" "}and{" "}
              <Link className="text-[#a78bfa] underline underline-offset-2 hover:text-[#c4b5fd] transition-colors" href="/products">live product portfolio</Link>.
            </p>
          </div>

          <div className="card-base p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/32">Authority signals</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div
                className="rounded-xl p-4"
                style={{ background: "rgba(99,91,255,0.07)", border: "1px solid rgba(99,91,255,0.14)" }}
              >
                <p className="font-display text-3xl font-extrabold grad-text">
                  {founder.experienceYears}+
                </p>
                <p className="mt-1 text-xs text-white/60">Years in product engineering</p>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: "rgba(14,165,233,0.07)", border: "1px solid rgba(14,165,233,0.14)" }}
              >
                <p className="font-display text-3xl font-extrabold grad-text">
                  {founder.projectsShipped}+
                </p>
                <p className="mt-1 text-xs text-white/60">Production deployments shipped</p>
              </div>
              <div
                className="rounded-xl p-4 sm:col-span-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p className="text-sm font-semibold text-white">Leadership profile</p>
                <p className="mt-1 text-sm text-white/60">{founder.name} · {founder.role}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {founder.sameAs.map((url) => (
                    <a
                      className="rounded-md px-2 py-1 text-white/60 transition-colors hover:text-white/80"
                      href={url}
                      key={url}
                      rel="noreferrer"
                      target="_blank"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {url.replace("https://", "")}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
