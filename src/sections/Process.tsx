export default function Process() {
  const process = [
    "Book strategy call",
    "Infrastructure assessment",
    "Architecture proposal",
    "Implementation phase",
    "Testing & deployment",
    "Documentation + handoff",
  ];

  return (
    <section id="process" className="py-28 bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Clear Process. Zero Confusion.
          </h2>
          <p className="mt-4 text-slate-400">
            You always know what’s happening.
          </p>
        </div>

        <div className="space-y-6">
          {process.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-blue-500 font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}