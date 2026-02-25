import FadeIn from "@/components/FadeIn";

export default function Solution() {
  const steps = [
    {
      title: "Infrastructure Audit",
      desc: "Deep analysis of your current AWS setup, CI/CD, scaling limits and risk points.",
    },
    {
      title: "Structured Implementation",
      desc: "Clean CI/CD pipelines, production-ready environments, monitoring and automation.",
    },
    {
      title: "Optimization & Hardening",
      desc: "Auto-scaling, high availability, cost control and failure recovery systems.",
    },
  ];

  return (
    <section id="solution" className="py-28">
      <FadeIn>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold">
            A Structured DevOps System — Not Random Fixes
          </h2>
          <p className="mt-4 text-slate-400">
            Every implementation follows a defined framework.
            No guesswork. No chaos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition"
            >
              <div className="text-blue-500 font-semibold mb-3">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      </FadeIn>
    </section>
  );
}