export default function Testimonials() {
  const testimonials = [
    {
      name: "SaaS Founder",
      quote:
        "Our deployments went from stressful to seamless. The infrastructure now scales automatically without manual intervention.",
    },
    {
      name: "CTO, Fintech Startup",
      quote:
        "We reduced AWS costs by 28% while improving reliability. The DevOps structure completely changed how we ship.",
    },
  ];

  return (
    <section className="py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold">
            Trusted by Growing Teams
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <p className="text-slate-300 mb-6">
                “{item.quote}”
              </p>
              <div className="text-slate-400 text-sm">
                — {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}