"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StickyDemoCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-dark-900/95 backdrop-blur-xl border-t border-cerberus-red/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <p className="hidden sm:block text-sm text-cerberus-steel">
            See how mortgage professionals are building real marketing systems.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/demo"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg gradient-red text-white font-medium text-sm hover:opacity-90 transition-opacity duration-200 animate-pulse hover:animate-none"
            >
              Schedule a Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/pricing"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 font-medium text-sm transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
