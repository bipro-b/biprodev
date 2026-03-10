import ArchitectureMock from "@/components/ArchitectureMock";

export default function Architecture() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 max-w-5xl text-center">

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
          Example Production Architecture
        </h2>

        <p className="text-slate-400 mb-16 max-w-2xl mx-auto">
          Every implementation follows AWS best practices for scalability,
          fault tolerance, and controlled deployment.
        </p>

        <ArchitectureMock />
      </div>
    </section>
  );
}