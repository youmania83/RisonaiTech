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
    <section className="bg-white py-20" id="leadership">
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
                  className="rounded-full border border-brand-border bg-[#f7f9fc] px-3 py-1.5 text-xs font-medium text-brand-dark"
                  key={topic}
                >
                  {topic}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-brand-gray">
              Need references before you commit? Review our <Link className="text-[#635BFF] underline underline-offset-2" href="/#case-studies">proof-of-work outcomes</Link> and <Link className="text-[#635BFF] underline underline-offset-2" href="/products">live product portfolio</Link>.
            </p>
          </div>

          <div className="card-base p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-subtle">Authority signals</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-brand-border bg-[#f7f9fc] p-4">
                <p className="font-display text-3xl font-extrabold text-brand-dark">
                  {founder.experienceYears}+
                </p>
                <p className="mt-1 text-sm text-brand-gray">Years in product engineering</p>
              </div>
              <div className="rounded-xl border border-brand-border bg-[#f7f9fc] p-4">
                <p className="font-display text-3xl font-extrabold text-brand-dark">
                  {founder.projectsShipped}+
                </p>
                <p className="mt-1 text-sm text-brand-gray">Production deployments shipped</p>
              </div>
              <div className="rounded-xl border border-brand-border bg-[#f7f9fc] p-4 sm:col-span-2">
                <p className="text-sm font-semibold text-brand-dark">Leadership profile</p>
                <p className="mt-1 text-sm text-brand-gray">{founder.name} · {founder.role}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {founder.sameAs.map((url) => (
                    <a className="rounded-md border border-brand-border px-2 py-1 text-brand-gray transition-colors hover:text-brand-dark" href={url} key={url} rel="noreferrer" target="_blank">
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
