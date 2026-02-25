"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "LaunchShield typically takes 7–10 days. ScaleForge takes 14–21 days depending on complexity.",
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Yes. Most clients are pre-Series A or preparing for rapid growth.",
    },
    {
      question: "Do you provide post-launch support?",
      answer: "ScaleForge includes 30 days of structured post-launch support.",
    },
    {
      question: "Can you sign an NDA?",
      answer: "Yes. Confidentiality is standard practice.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-white/5"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full text-left px-6 py-4 font-medium"
              >
                {item.question}
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-400 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}