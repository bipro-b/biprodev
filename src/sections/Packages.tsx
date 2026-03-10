import FadeIn from "@/components/FadeIn";

export default function Packages() {
  return (
    <section
      id="packages"
      className="py-28 bg-gradient-to-b from-transparent to-white/[0.02]"
    >
      <FadeIn>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold">
            Structured DevOps Packages
          </h2>
          <p className="mt-4 text-slate-400">
            Clear scope. Fixed pricing. No surprises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tier 1 */}
          <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300">
            <div className="text-sm text-blue-400 font-medium mb-3">
              🥇 Tier 1
            </div>

            <h3 className="text-2xl font-bold">
              LaunchShield Infrastructure
            </h3>

            <p className="mt-3 text-slate-400 text-sm">
              Production-ready DevOps foundation for startups preparing to grow.
            </p>

            <div className="mt-8 text-4xl font-bold">
              $3,000
            </div>

            <ul className="mt-8 space-y-4 text-slate-300 text-sm">
              <li>✔ CI/CD pipeline setup</li>
              <li>✔ AWS environment configuration</li>
              <li>✔ Production & staging setup</li>
              <li>✔ Monitoring & logging integration</li>
              <li>✔ Basic auto-scaling setup</li>
              <li>✔ Documentation & handoff</li>
            </ul>

            <a
              href="#"
              className="mt-10 inline-block w-full text-center px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold shadow-lg shadow-blue-600/20"
            >
              Get LaunchShield
            </a>
          </div>

          {/* Tier 2 (Highlighted) */}
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 shadow-2xl shadow-blue-600/10">
            <div className="absolute -top-4 right-6 bg-blue-600 text-xs px-3 py-1 rounded-full font-semibold">
              Most Powerful
            </div>

            <div className="text-sm text-purple-400 font-medium mb-3">
              🥈 Tier 2
            </div>

            <h3 className="text-2xl font-bold">
              ScaleForge Platform
            </h3>

            <p className="mt-3 text-slate-400 text-sm">
              Scalable, auto-healing infrastructure built for rapid user growth.
            </p>

            <div className="mt-8 text-4xl font-bold">
              $6,000
            </div>

            <ul className="mt-8 space-y-4 text-slate-200 text-sm">
              <li>✔ Everything in LaunchShield</li>
              <li>✔ Advanced auto-scaling architecture</li>
              <li>✔ Load balancer + high availability setup</li>
              <li>✔ Infrastructure as Code (Terraform-ready)</li>
              <li>✔ Cost optimization strategy</li>
              <li>✔ Advanced monitoring & alerting</li>
              <li>✔ 30-day post-launch support</li>
            </ul>

            <a
              href="#"
              className="mt-10 inline-block w-full text-center px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold shadow-lg shadow-blue-600/20"
            >
              Get ScaleForge
            </a>
          </div>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}