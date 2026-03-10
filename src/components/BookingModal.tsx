"use client";

import { useState } from "react";
import { InlineWidget } from "react-calendly";

export default function BookingModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
       onClick={() => {
  setOpen(true);
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "book_call_click", {
      event_category: "engagement",
    });
  }
}}
        className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold shadow-lg shadow-blue-600/20"
      >
        Book Strategy Call
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-[#0B1120] border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
            >
              ×
            </button>

            {/* Header */}
            <div className="px-8 pt-8 pb-4 border-b border-white/10">
              <h3 className="text-2xl font-semibold">
                Book Your Free Infrastructure Audit
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                30-minute technical discussion about your current AWS setup and scaling plan.
              </p>
            </div>

            {/* Calendly */}
            <div className="h-[650px]">
              <InlineWidget url="https://calendly.com/biprocuet/30min" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}