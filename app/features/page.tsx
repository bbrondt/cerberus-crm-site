import {
  Zap,
  BarChart3,
  MessageSquare,
  Video,
  Target,
  Sparkles,
  FileText,
  Users,
  Mail,
  PenTool,
  Calculator,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description:
      "Generate social posts, YouTube scripts, blog articles, and email sequences with AI that actually understands mortgage marketing — not generic fluff.",
  },
  {
    icon: PenTool,
    title: "Organic Content System",
    description:
      "The Vortex generates branded image posts, video content, and carousel graphics designed for engagement — not just impressions.",
  },
  {
    icon: Video,
    title: "YouTube Script Engine",
    description:
      "Research topics, generate full scripts with hooks and CTAs, create thumbnail concepts, and publish blog versions — all from one workflow.",
  },
  {
    icon: BarChart3,
    title: "Flywheel Dashboard",
    description:
      "Real-time lead source attribution. Know exactly which campaigns, content, and referral partners are driving your pipeline.",
  },
  {
    icon: Target,
    title: "Facebook Ad Frameworks",
    description:
      "Proven four-campaign structure — Omnipresence, Video Views, Testing, and Scaling — with audience building and frequency management baked in.",
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-Up",
    description:
      "SMS and email nurture sequences that fire based on lead behavior, not just time delays. Smart, compliant, and effective.",
  },
  {
    icon: Users,
    title: "Referral Management",
    description:
      "Track and manage referral partner submissions with required field validation, team assignment, and automated workflows.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "AI-written emails that match your voice. Drip campaigns, broadcast sends, and event-triggered sequences — all automated.",
  },
  {
    icon: Calculator,
    title: "Mortgage Calculators",
    description:
      "Embeddable calculators for your website — payment, affordability, refinance — that capture leads while providing value.",
  },
  {
    icon: FileText,
    title: "Blog Publishing",
    description:
      "Turn any YouTube script into a full blog post and publish it directly. SEO-optimized content without the extra work.",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description:
      "GoHighLevel-powered workflows that handle lead routing, follow-up, appointment booking, and pipeline updates automatically.",
  },
  {
    icon: Users,
    title: "Team Management",
    description:
      "Branch managers get admin dashboards, team-level reporting, and the ability to manage content and campaigns across their entire team.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cerberus-red/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Built to Sell Loans.
            <br />
            <span className="text-cerberus-steel">Not Just Look Pretty.</span>
          </h1>
          <p className="text-lg text-cerberus-steel max-w-2xl mx-auto">
            Every feature in Cerberus CRM was built because a real loan officer
            needed it. No bloat, no guesswork — just tools that move the needle.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-hover p-7 group">
                <div className="w-10 h-10 rounded-lg bg-cerberus-red/10 flex items-center justify-center mb-5 group-hover:bg-cerberus-red/20 transition-colors duration-300">
                  <feature.icon size={20} className="text-cerberus-red" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
            See It in Action
          </h2>
          <p className="text-cerberus-steel max-w-lg mx-auto mb-8">
            Stop paying for tools that weren&apos;t built for you.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
