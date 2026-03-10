import BookingModal from "@/components/BookingModal";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-br from-blue-600/10 to-purple-600/10">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-bold">
          Ready to Build Stable Infrastructure?
        </h2>

        <p className="mt-6 text-slate-400">
          Let’s design a production-ready DevOps system tailored to your growth.
        </p>

        
         <BookingModal/>
      </div>
    </section>
  );
}