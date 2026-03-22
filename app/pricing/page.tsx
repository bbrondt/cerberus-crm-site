import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const crmFeatures = [
  "2 Pre-Built Pipelines (Purchase & Refinance)",
  "69 Automated Workflows",
  "AI-Powered Lead Nurture (Email + SMS)",
  "Referral Partner Management System",
  "10 Lead Capture Forms & Survey Builder",
  "Email & SMS Marketing (A2P Compliant)",
  "Webinar System (Consumer + Realtor)",
  "6 Pre-Built Funnel Templates",
  "Website & Funnel Builder",
  "Mortgage Calculators (Embeddable)",
  "Digital Business Card (vCard)",
  "Reputation Management & Review Campaigns",
  "Calendar & Appointment Booking",
  "59 Contact Tags & Smart Lists",
  "Flywheel Dashboard & KPI Tracking",
  "Co-Marketing Tools (Open House, Listing Promo)",
  "Call Tracking & Dialer Dispositions",
  "Community Access & Weekly Call",
  "24/7 Support",
  "Done-for-You Onboarding",
];

const vortexFeatures = [
  "Everything in Cerberus CRM",
  "AI Content Engine — 12+ Generation Tools",
  "AI Ad Creator — 3–20 Ads in Under 2 Minutes",
  "AI Headshot & Image Generator",
  "YouTube Script Generator + Blog Auto-Publishing",
  "Content Plan Generator (60+ Topics → 240+ Pieces)",
  "Video Script Generator (Short Form + Long Form)",
  "Organic Post Creator (Image + Video + Captions)",
  "Email Writer (with URL Context Reading)",
  "Guide Builder (12-Page Lead Magnets)",
  "Calculator Builder (Interactive HTML Tools)",
  "Webinar Framework Builder",
  "4-Campaign Facebook Ad Framework + Training",
  "4 Creative Lenses × 19 Content Angles",
  "Vortex Training Program",
  "Weekly Vortex Strategy Call",
  "Priority Support",
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Simple Pricing.<br />
            <span className="text-cerberus-steel">Serious Results.</span>
          </h1>
          <p className="text-lg text-cerberus-steel max-w-xl mx-auto">
            No hidden fees. No annual contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CRM Plan */}
            <div className="relative rounded-2xl p-8 flex flex-col bg-dark-700 border border-dark-400">
              <h3 className="font-display font-bold text-xl text-white mb-2">Cerberus CRM</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-display font-800 text-white">$497</span>
                <span className="text-cerberus-steel text-sm">/mo</span>
              </div>
              <p className="text-sm text-cerberus-steel mb-8 leading-relaxed">
                The complete CRM and marketing automation platform built for mortgage professionals. Pipeline management, 69 pre-built workflows, AI nurture, webinar system, and the full command center.
              </p>
              <ul className="space-y-2.5 mb-10 flex-1">
                {crmFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="text-cerberus-steel mt-0.5 shrink-0" />
                    <span className="text-sm text-cerberus-steel-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/checkout/mlo-saas" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30">
                Get Started <ArrowRight size={16} />
              </Link>
            </div>

            {/* Vortex Plan */}
            <div className="relative rounded-2xl p-8 flex flex-col bg-dark-700 border-2 border-cerberus-red/40 glow-red">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-red text-xs font-semibold text-white tracking-wide uppercase flex items-center gap-1.5">
                <Sparkles size={12} />
                Full Flywheel
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Cerberus + Vortex</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-display font-800 text-white">$497</span>
                <span className="text-cerberus-steel text-sm">/mo + Vortex activation</span>
              </div>
              <p className="text-sm text-cerberus-steel mb-8 leading-relaxed">
                Everything in Cerberus CRM plus the full AI-powered Vortex content engine with 12+ generation tools, the 4-campaign ad framework, training, and a weekly strategy call.
              </p>
              <ul className="space-y-2.5 mb-10 flex-1">
                {vortexFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="text-cerberus-red mt-0.5 shrink-0" />
                    <span className="text-sm text-cerberus-steel-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-red text-white font-medium text-sm hover:opacity-90 transition-all duration-200">
                Learn More & Schedule a Demo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video: CRM vs Vortex */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-4">
              See What You Get
            </h2>
            <p className="text-cerberus-steel">
              Watch a side-by-side walkthrough of the CRM and the Vortex content engine.
            </p>
          </div>
          <VideoPlaceholder
            title="Watch: CRM vs. Vortex — What's the Difference?"
            description="3-minute walkthrough comparing both plans"
          />
        </div>
      </section>

      {/* What It Replaces */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-4">
              Think About What You&apos;re Replacing
            </h2>
            <p className="text-cerberus-steel leading-relaxed mb-10">
              Most loan officers are paying for a CRM, an email platform, a funnel builder, a website builder, a content tool, and a webinar platform separately. Cerberus puts it all in one ecosystem.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
              {[
                { tool: "Generic CRM", cost: "$99–$300/mo" },
                { tool: "Email Platform", cost: "$50–$150/mo" },
                { tool: "Funnel Builder", cost: "$97–$297/mo" },
                { tool: "Content Tools", cost: "$50–$200/mo" },
                { tool: "Webinar Platform", cost: "$49–$99/mo" },
                { tool: "Ad Creative Tools", cost: "$30–$100/mo" },
              ].map((item) => (
                <div key={item.tool} className="flex items-center justify-between px-4 py-3 rounded-lg bg-dark-800 border border-dark-400">
                  <span className="text-sm text-cerberus-steel-light">{item.tool}</span>
                  <span className="text-sm text-cerberus-steel-dark line-through">{item.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-center mb-12">Common Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "What's the difference between Cerberus CRM and the Vortex?",
                a: "Cerberus CRM is the full platform — pipeline management, 69 automated workflows, AI nurture, webinar system, referral management, funnels, website builder, and the entire command center. The Vortex adds the AI-powered content engine on top: 12+ tools that generate ads, scripts, social posts, emails, guides, calculators, and headshots. Think of it as the car (CRM) vs. the car with a turbocharger (CRM + Vortex).",
              },
              {
                q: "What does the Vortex activation include?",
                a: "The Vortex is an add-on that includes the full AI content engine, the 4-campaign Facebook ad framework with training, a weekly Vortex strategy call, and priority support. Schedule a demo to learn about the activation investment.",
              },
              {
                q: "Is there a contract?",
                a: "No annual contracts. The CRM is month-to-month at $497/mo. Cancel anytime.",
              },
              {
                q: "Is this built on GoHighLevel?",
                a: "Yes — Cerberus is a white-labeled GoHighLevel instance specifically built and configured for the mortgage industry. But it's not just a HighLevel account with a different logo. It includes 69 custom workflows, pre-built pipelines, funnel templates, the entire command center app, and the Vortex content engine — none of which you'll find anywhere else.",
              },
              {
                q: "Do I get support setting everything up?",
                a: "Yes. Every subscription includes done-for-you onboarding — we configure your account, walk you through the command center, set up your pipelines, and make sure you're running. Plus 24/7 support and a weekly community call.",
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="font-display font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
