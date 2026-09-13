type Benchmark = {
  stat: string;
  detail: string;
};

type FactualDensityBlockProps = {
  title: string;
  intro: string;
  benchmarks: Benchmark[];
};

export default function FactualDensityBlock({
  title,
  intro,
  benchmarks,
}: FactualDensityBlockProps) {
  return (
    <section className="py-20 bg-grid border-y border-slate-200/50" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container-site">
        <h2
          className="font-display text-3xl font-bold text-slate-900"
        >
          {title}
        </h2>
        <p className="mt-2 max-w-3xl text-slate-500">{intro}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {benchmarks.map((item) => (
            <div className="card-base p-5" key={item.stat}>
              <p className="text-sm font-semibold text-slate-900">{item.stat}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
