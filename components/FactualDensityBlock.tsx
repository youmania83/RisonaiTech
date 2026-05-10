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
    <section className="py-20 bg-grid" style={{ backgroundColor: "#090C18" }}>
      <div className="container-site">
        <h2
          className="font-display text-3xl font-bold text-white"
        >
          {title}
        </h2>
        <p className="mt-2 max-w-3xl text-white/52">{intro}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {benchmarks.map((item) => (
            <div className="card-base p-5" key={item.stat}>
              <p className="text-sm font-semibold text-white">{item.stat}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/52">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
