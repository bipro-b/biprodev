export default function Trust() {
  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm mb-8">
          Built with modern cloud-native technologies
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 text-slate-400 text-sm font-medium">
          <span>AWS</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>GitHub Actions</span>
          <span>Terraform</span>
          <span>CloudWatch</span>
        </div>
      </div>
    </section>
  );
}