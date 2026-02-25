import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Problem from "@/sections/Problem";
import Solution from "@/sections/Solution";
import Packages from "@/sections/Packages";
import Process from "@/sections/Process";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";
import BackgroundGrid from "@/components/BackgroundGrid";
import Trust from "@/sections/Trust";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <BackgroundGrid />
      <Navbar />
      <Hero />
      <Trust/>
      <Problem />
      <Solution />
      <Packages />
      <Process />
      <FAQ />
      <Testimonials/>
      <CTA />
    </main>
  );
}