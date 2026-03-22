"use client";

import Image from "next/image";
import { Video, Users, Clock, Sparkles } from "lucide-react";
import DemoCalendar from "@/components/DemoCalendar";

export default function DemoPage() {
  return (
    <section className="relative min-h-screen pt-36 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-cerberus-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* ─── Left Column: Info ─── */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-36">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cerberus-red/10 border border-cerberus-red/20 mb-6">
                <Video size={12} className="text-cerberus-red" />
                <span className="text-xs font-medium text-cerberus-red-light tracking-wide uppercase">
                  Live Demo
                </span>
              </div>

              <h1 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-white mb-4">
                See Cerberus
                <br />
                <span className="text-cerberus-steel">In Action.</span>
              </h1>

              <p className="text-cerberus-steel leading-relaxed mb-8">
                Join a live walkthrough of Cerberus CRM and the Vortex content
                engine. See exactly how mortgage professionals are building
                marketing systems that generate leads on autopilot.
              </p>

              {/* What to expect */}
              <div className="space-y-4">
                <p className="text-xs font-medium text-cerberus-steel-dark uppercase tracking-widest">
                  What You&apos;ll See
                </p>
                {[
                  {
                    icon: Sparkles,
                    title: "The AI Content Engine",
                    desc: "Watch us generate 10+ ads, scripts, and posts in minutes.",
                  },
                  {
                    icon: Users,
                    title: "CRM & Pipeline",
                    desc: "Automated follow-up, lead capture, and referral tracking.",
                  },
                  {
                    icon: Video,
                    title: "WebinarFuse Integration",
                    desc: "Evergreen webinar funnels with real-time engagement tracking.",
                  },
                  {
                    icon: Clock,
                    title: "Live Q&A",
                    desc: "Get your specific questions answered at the end.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cerberus-red/10 flex items-center justify-center shrink-0">
                      <item.icon size={14} className="text-cerberus-red" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white leading-snug">
                        {item.title}
                      </p>
                      <p className="text-xs text-cerberus-steel-dark leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder note */}
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-dark-400">
                  <Image
                    src="/brad-brondt-headshot.png"
                    alt="Brad Brondt"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Hosted by Brad Brondt
                  </p>
                  <p className="text-xs text-cerberus-steel-dark">
                    Founder, Cerberus CRM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Right Column: Calendar ─── */}
          <div className="lg:col-span-3">
            <div className="card p-6 md:p-8">
              <h2 className="font-display font-bold text-xl text-white mb-1">
                Pick a Date & Time
              </h2>
              <p className="text-sm text-cerberus-steel mb-6">
                All times are Eastern Time (ET).
              </p>

              <DemoCalendar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
