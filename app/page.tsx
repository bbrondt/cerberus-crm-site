import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  BarChart3,
  MessageSquare,
  Video,
  Target,
  ArrowRight,
  Sparkles,
  PenTool,
  Users,
  RefreshCw,
  Quote,
} from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "AI Content Engine",
    description:
      "Generate 10 Facebook ads in under 2 minutes. Create YouTube scripts, blog posts, email sequences, and social content — all matching your voice, not generic AI fluff.",
  },
  {
    icon: BarChart3,
    title: "Flywheel Dashboard",
    description:
      "Real-time lead source attribution that tracks every lead back to its source. Know exactly which campaigns, content, and referral partners are driving your pipeline.",
  },
  {
    icon: Video,
    title: "Webinar Funnels",
    description:
      "Built-in evergreen webinar system. Register leads, automate follow-up, and track engagement — minutes watched, replay views, CTA clicks — all inside your CRM.",
  },
  {
    icon: Target,
    title: "4-Campaign Ad System",
    description:
      "The proven Omnipresence, Video Views, Testing, and Scaling framework — with AI-generated creative, audience building, and frequency management baked in.",
  },
  {
    icon: Users,
    title: "Referral Management",
    description:
      "Track every referral partner. Automated submissions, pipeline notifications, smart lists by partner type and activity. Know who sent you business this quarter.",
  },
  {
    icon: RefreshCw,
    title: "The Vortex",
    description:
      "Our signature content automation system. One framework creates 80+ topics, scripts, ads, emails, and social posts. Months of content from a single input.",
  },
];

const replaces = [
  "Your CRM",
  "Email Marketing",
  "Funnel Builder",
  "Website Builder",
  "Content Tools",
  "Ad Creator",
  "Webinar Platform",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cerberus-red/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cerberus-red/10 border border-cerberus-red/20 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-cerberus-red animate-pulse" />
              <span className="text-xs font-medium text-cerberus-red-light tracking-wide uppercase">
                Built by a Loan Officer. For Loan Officers.
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              It&apos;s Not Just a CRM.
              <br />
              <span className="text-gradient">
                It&apos;s a Marketing Flywheel.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-cerberus-steel max-w-2xl mx-auto leading-relaxed mb-10">
              Cerberus replaces your CRM, content tools, funnel builder, website
              builder, ad creator, and webinar platform — everything in one
              ecosystem with automations connecting all the pieces.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium text-base hover:opacity-90 transition-opacity duration-200"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 font-medium text-base transition-all duration-200"
              >
                See Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Replaces Section */}
      <section className="py-12 border-y border-white/5 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-medium text-cerberus-steel-dark uppercase tracking-widest mb-6">
            One Platform Replaces
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {replaces.map((item, i) => (
              <span
                key={item}
                className="text-sm text-cerberus-steel font-medium flex items-center gap-3"
              >
                {item}
                {i < replaces.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-cerberus-red/40" />
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
              Everything You Need.
              <br />
              <span className="text-cerberus-steel">
                Nothing You Don&apos;t.
              </span>
            </h2>
            <p className="text-cerberus-steel max-w-xl mx-auto">
              Every feature exists because a real loan officer needed it. No
              bloat, no guesswork — just tools that move the needle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="card-hover p-7 group">
                <div className="w-10 h-10 rounded-lg bg-cerberus-red/10 flex items-center justify-center mb-5 group-hover:bg-cerberus-red/20 transition-colors duration-300">
                  <item.icon size={20} className="text-cerberus-red" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Continuous Funnel */}
      <section className="py-20 md:py-32 relative border-t border-white/5">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
              The Continuous Funnel
            </h2>
            <p className="text-cerberus-steel text-lg leading-relaxed">
              Organic content and paid ads drive registrations. Webinars convert
              cold traffic into warm leads. Warm leads book calls. Calls close
              deals. Every piece feeds the next — a perpetual motion machine for
              your mortgage business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Content & Ads",
                desc: "One image + one video per day. AI creates both in 10 minutes. Paid ads test 10 creatives every two weeks.",
              },
              {
                step: "02",
                title: "Webinar Registration",
                desc: "Every piece of content points to your webinar. Evergreen replays run on autopilot with automated follow-up.",
              },
              {
                step: "03",
                title: "Watch & Engage",
                desc: "Rich analytics track minutes watched, replay views, and CTA clicks. Smart sequences adapt based on engagement.",
              },
              {
                step: "04",
                title: "Book & Close",
                desc: "Pre-qualified leads book calls directly. Your pipeline updates automatically. Close deals, not spreadsheets.",
              },
            ].map((item) => (
              <div key={item.step} className="card p-6 relative">
                <span className="font-display font-800 text-5xl text-cerberus-red/10 absolute top-4 right-5">
                  {item.step}
                </span>
                <div className="relative">
                  <h3 className="font-display font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cerberus-steel leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-32 relative border-t border-white/5">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Founder Image */}
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-dark-400 bg-dark-700">
                <Image
                  src="/brad-brondt-headshot.jpg"
                  alt="Brad Brondt — Founder, Cerberus CRM"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center md:text-left">
                <p className="font-display font-semibold text-white text-sm">
                  Brad Brondt
                </p>
                <p className="text-xs text-cerberus-steel-dark">
                  Founder, Cerberus CRM
                </p>
              </div>
            </div>

            {/* Story */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-8">
                <Quote size={24} className="text-cerberus-red/40 shrink-0" />
                <span className="text-xs font-medium text-cerberus-steel-dark uppercase tracking-widest">
                  The Origin Story
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-6 text-white">
                This thing accidentally became its own business.
              </h2>
              <div className="space-y-4 text-cerberus-steel leading-relaxed">
                <p>
                  In 2020, I built a marketing system on GoHighLevel for my own
                  mortgage business. Pipeline management, automated follow-up,
                  content generation, referral tracking, webinar funnels — all
                  the stuff I needed to stop depending solely on realtor
                  referrals and build a direct-to-consumer pipeline.
                </p>
                <p>
                  Then other loan officers in my network kept asking to buy what
                  I had built rather than go through the journey of building it
                  themselves. That&apos;s how Cerberus CRM was born — not from a
                  business plan, but from solving my own problems first and
                  discovering that everyone had the same pain.
                </p>
                <p className="text-white font-medium">
                  The best businesses are born from solving your own problems. I
                  don&apos;t like doing stuff that takes time — so I build
                  something to fix it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden glow-red">
            <div className="absolute inset-0 gradient-red opacity-10" />
            <div className="absolute inset-0 noise pointer-events-none" />
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
                Ready to Stop Posting and Praying?
              </h2>
              <p className="text-cerberus-steel max-w-xl mx-auto mb-8">
                Join the mortgage professionals who are building real marketing
                systems — not just hoping something sticks.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium text-base hover:opacity-90 transition-opacity duration-200"
              >
                Get Started Today
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
