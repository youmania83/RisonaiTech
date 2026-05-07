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
    <section className="bg-[#f7f9fc] py-20">
      <div className="container-site">
        <h2
          className="font-display text-3xl font-bold text-brand-dark"
        >
          {title}
        </h2>
        <p className="mt-2 max-w-3xl text-brand-gray">{intro}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {benchmarks.map((item) => (
            <div className="card-base p-5" key={item.stat}>
              <p className="text-sm font-semibold text-brand-dark">{item.stat}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
