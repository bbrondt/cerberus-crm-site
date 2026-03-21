import Link from "next/link";
import {
  Zap,
  BarChart3,
  MessageSquare,
  Video,
  Target,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Content Engine",
    description:
      "AI-powered content creation — social posts, YouTube scripts, emails, and blog articles generated in minutes, not hours.",
  },
  {
    icon: BarChart3,
    title: "Lead Source Attribution",
    description:
      "The Flywheel Dashboard tracks every lead back to its source so you know exactly what's working and what's not.",
  },
  {
    icon: MessageSquare,
    title: "Smart Follow-Up",
    description:
      "Automated nurture sequences, pipeline management, and borrower communication that runs while you sleep.",
  },
  {
    icon: Video,
    title: "Webinar Integration",
    description:
      "Built-in webinar funnels that convert cold traffic into warm leads and pre-qualified appointments.",
  },
  {
    icon: Target,
    title: "Ad Campaign System",
    description:
      "Proven Facebook ad frameworks — Omnipresence, Video Views, Testing, and Scaling — baked into the platform.",
  },
  {
    icon: ArrowRight,
    title: "The Vortex",
    description:
      "Our signature marketing automation system — organic content, referral workflows, and AI tools all working together.",
  },
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
                Built for Mortgage Professionals
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              Stop Marketing Like
              <br />
              <span className="text-gradient">It&apos;s 2015.</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-cerberus-steel max-w-2xl mx-auto leading-relaxed mb-10">
              Cerberus CRM is the all-in-one marketing engine that gives loan
              officers the content, automation, and lead management tools they
              need to dominate their market — without hiring an agency.
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

      {/* Feature Highlights */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
              Everything You Need.
              <br />
              <span className="text-cerberus-steel">Nothing You Don&apos;t.</span>
            </h2>
            <p className="text-cerberus-steel max-w-xl mx-auto">
              Built by a loan officer, for loan officers. Every feature exists
              because it solves a real problem.
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden glow-red">
            <div className="absolute inset-0 gradient-red opacity-10" />
            <div className="absolute inset-0 noise pointer-events-none" />
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
                Ready to Stop Guessing?
              </h2>
              <p className="text-cerberus-steel max-w-xl mx-auto mb-8">
                Join the mortgage professionals who are building real marketing
                systems — not just posting and praying.
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
