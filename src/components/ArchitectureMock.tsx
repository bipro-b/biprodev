export default function ArchitectureMock() {
  const box =
    "px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300";

  return (
    <div className="relative p-10 rounded-3xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 border border-white/10 backdrop-blur-xl">

      <div className="grid gap-6 text-center">

        {/* Row 1 */}
        <div className={box}>Users</div>

        {/* Row 2 */}
        <div className={box}>AWS Load Balancer</div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className={box}>Auto-Scaling App Servers</div>
          <div className={box}>CI/CD Pipeline</div>
        </div>

        {/* Row 4 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className={box}>RDS Database (Multi-AZ)</div>
          <div className={box}>Monitoring & Alerts</div>
        </div>
      </div>

      <div className="mt-10 text-xs text-slate-500 text-center">
        High-availability, auto-healing AWS architecture with zero-downtime deployments.
      </div>
    </div>
  );
}