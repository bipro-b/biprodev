export default function CaseStudy() {
  return (
    <section className="py-32 bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Real Infrastructure Transformation
          </h2>
        </div>

        <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
          
          <h3 className="text-2xl font-bold mb-6">
            SaaS Platform Scaling Upgrade
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <div className="text-3xl font-bold text-blue-500">
                -28%
              </div>
              <p className="text-slate-400 text-sm mt-2">
                AWS cost reduction
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-blue-500">
                0 → Stable
              </div>
              <p className="text-slate-400 text-sm mt-2">
                Deployment failures eliminated
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-blue-500">
                3 AZ
              </div>
              <p className="text-slate-400 text-sm mt-2">
                High-availability setup
              </p>
            </div>

          </div>

          <p className="mt-10 text-slate-400 text-sm text-center">
            Migration to auto-scaling architecture with monitoring,
            alerting and structured CI/CD rollout.
          </p>
        </div>
      </div>
    </section>
  );
}