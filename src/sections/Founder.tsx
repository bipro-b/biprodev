export default function Founder() {
  return (
    <section className="py-36 relative">
      {/* subtle background separation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT — Image with glow frame */}
          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />

            <div className="relative w-72 h-72 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-blue-600/10 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=tfBv6taG9nTidFwENcrvEEvRHABN5gDAmg-K1G1Etnc="
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>

            <div className="text-blue-500 text-sm font-medium tracking-wide mb-4 uppercase">
              Founder & DevOps Architect
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              Startup Infrastructure Built to Scale — Not Break
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              I work with growing SaaS teams to transform fragile deployments
              into resilient, auto-healing AWS infrastructure designed for
              high-growth environments.
            </p>

            {/* Authority bullets */}
            <ul className="space-y-4 text-slate-300 mb-10">
              <li>✔ AWS architecture & high-availability systems</li>
              <li>✔ CI/CD pipelines built for zero-downtime releases</li>
              <li>✔ Cost-optimized scaling strategies</li>
              <li>✔ Rollback-first & security-first deployment framework</li>
            </ul>

            {/* Trust stats row */}
            <div className="grid grid-cols-3 gap-6 text-center border-t border-white/10 pt-8">

              <div>
                <div className="text-2xl font-semibold text-white">99.9%</div>
                <div className="text-xs text-slate-500 mt-1">
                  Uptime Focus
                </div>
              </div>

              <div>
                <div className="text-2xl font-semibold text-white">0-Downtime</div>
                <div className="text-xs text-slate-500 mt-1">
                  Deploy Strategy
                </div>
              </div>

              <div>
                <div className="text-2xl font-semibold text-white">Startup-Only</div>
                <div className="text-xs text-slate-500 mt-1">
                  Specialization
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}