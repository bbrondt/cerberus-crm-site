import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const crmFeatures = [
  "CRM & Pipeline Management",
  "Automated Follow-Up Sequences",
  "Lead Capture Forms & Funnels",
  "Email & SMS Marketing",
  "Mortgage Calculators",
  "Referral Partner Management",
  "Smart Lists & Contact Tagging",
  "Digital Business Card (vCard)",
  "Website Builder",
  "Funnel Templates (6 Pre-Built)",
  "Reputation Management",
  "Calendar & Appointment Booking",
  "Workflow Automation Library",
  "Community Access",
];

const vortexFeatures = [
  "Everything in Cerberus CRM",
  "AI Content Engine (The Vortex)",
  "AI Ad Creator — Generate 10+ Ads in Minutes",
  "AI Headshot & Image Generator",
  "YouTube Script Generator",
  "Blog Post Automation",
  "Content Plan Generator (80+ Topics)",
  "Video Script Generator (Short & Long Form)",
  "Webinar Framework Builder",
  "WebinarFuse Studio Access",
  "Flywheel Attribution Dashboard",
  "4-Campaign Facebook Ad Framework",
  "Automated Video-to-Blog Publishing",
  "AI Website Builder",
  "Priority Support & Training",
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Simple Pricing.
            <br />
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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CRM Plan */}
            <div className="relative rounded-2xl p-8 flex flex-col bg-dark-700 border border-dark-400">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Cerberus CRM
              </h3>

              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-display font-800 text-white">
                  $497
                </span>
                <span className="text-cerberus-steel text-sm">/mo</span>
              </div>

              <p className="text-sm text-cerberus-steel mb-8 leading-relaxed">
                The complete CRM and marketing automation platform built for
                mortgage professionals. Pipeline management, automated
                follow-up, lead capture, and everything you need to run your
                business.
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {crmFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-cerberus-red mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-cerberus-steel-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/checkout"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Vortex Plan */}
            <div className="relative rounded-2xl p-8 flex flex-col bg-dark-700 border-2 border-cerberus-red/40 glow-red">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-red text-xs font-semibold text-white tracking-wide uppercase flex items-center gap-1.5">
                <Sparkles size={12} />
                Full Flywheel
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-2">
                Cerberus + Vortex
              </h3>

              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-display font-800 text-white">
                  $497
                </span>
                <span className="text-cerberus-steel text-sm">
                  /mo + one-time setup
                </span>
              </div>

              <p className="text-sm text-cerberus-steel mb-8 leading-relaxed">
                Everything in Cerberus CRM plus the full AI-powered Vortex
                content engine, WebinarFuse Studio, ad creator, and the complete
                marketing flywheel. The Vortex requires an additional one-time
                investment — schedule a demo to get pricing.
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {vortexFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-cerberus-red mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-cerberus-steel-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-red text-white font-medium text-sm hover:opacity-90 transition-all duration-200"
              >
                Schedule a Demo
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
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
              Most loan officers are paying for a CRM, an email platform, a
              funnel builder, a website builder, a content tool, and a webinar
              platform separately. Cerberus puts it all in one ecosystem — with
              automations connecting every piece.
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
                <div
                  key={item.tool}
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-dark-800 border border-dark-400"
                >
                  <span className="text-sm text-cerberus-steel-light">
                    {item.tool}
                  </span>
                  <span className="text-sm text-cerberus-steel-dark line-through">
                    {item.cost}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "What's the difference between Cerberus CRM and the Vortex?",
                a: "Cerberus CRM is the full CRM platform — pipeline management, automated follow-up, lead capture, email/SMS marketing, funnels, website builder, and all the core tools. The Vortex is our AI-powered content and marketing automation layer that adds the Content Engine, AI Ad Creator, WebinarFuse Studio, Flywheel Dashboard, and the complete 4-campaign ad framework. Think of it as the difference between having a car and having a car with a turbocharger.",
              },
              {
                q: "Why do I need to schedule a demo for Vortex pricing?",
                a: "The Vortex is a one-time setup investment on top of the $497/mo CRM subscription. Because it includes hands-on onboarding, training, and configuration specific to your business, we walk through everything on a demo call so you understand exactly what you're getting and how it fits your goals.",
              },
              {
                q: "Is there a contract?",
                a: "No annual contracts. The CRM is month-to-month at $497/mo. Cancel anytime. The Vortex setup fee is a one-time investment.",
              },
              {
                q: "Is this built on GoHighLevel?",
                a: "Yes — Cerberus is a white-labeled GoHighLevel instance specifically built and configured for the mortgage industry. But it's not just a HighLevel account with a different logo. It includes custom automations, pre-built workflows, funnel templates, the entire Vortex content engine, and WebinarFuse integration that you won't find anywhere else.",
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="font-display font-semibold text-white mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
