import FadeIn from "@/components/FadeIn";

export default function Problem() {
  const problems = [
    "Deployments break randomly",
    "No proper CI/CD pipeline",
    "No monitoring or alerting",
    "Scaling costs are unpredictable",
    "No staging environment",
    "Infrastructure knowledge trapped in one engineer",
  ];

  return (
    <section
      id="problem"
      className="py-24 relative"
    >
      <FadeIn>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Infrastructure Shouldn’t Slow Growth
          </h2>
          <p className="mt-4 text-slate-400">
            Most startups don’t have broken products.
            They have fragile infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition"
            >
              <p className="text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
      </FadeIn>
    </section>
  );
}