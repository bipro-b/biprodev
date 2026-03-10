"use client";

import BookingModal from "@/components/BookingModal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 blur-3xl" />

      <div className="relative container mx-auto px-6 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Enterprise-Grade DevOps Infrastructure  <br />
          <span className="text-blue-500">
            for High-Growth Startups
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto"
        >
          CI/CD, AWS infrastructure, monitoring & scaling — delivered fast,
          structured, and built for long-term stability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex justify-center gap-4"
        >
            <BookingModal />

          <a
            href="#packages"
            className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition font-semibold"
          >
            View Packages
          </a>
        </motion.div>

        <div className="mt-12 text-sm text-slate-500">
          Built for startups deploying on AWS
        </div>
      </div>
    </section>
  );
}