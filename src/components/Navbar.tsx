"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-tight">
          DevOps<span className="text-blue-500">Pro</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#problem" className="hover:text-white transition">
            Problems
          </a>
          <a href="#packages" className="hover:text-white transition">
            Packages
          </a>
          <a href="#process" className="hover:text-white transition">
            Process
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#"
          className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-medium shadow-lg shadow-blue-600/20"
        >
          Book Call
        </a>
      </div>
    </header>
  );
}