import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "97",
    interval: "mo",
    description: "For individual loan officers getting started with marketing automation.",
    features: [
      "CRM & Pipeline Management",
      "Automated Follow-Up Sequences",
      "Lead Capture Forms",
      "Basic Email Marketing",
      "Mortgage Calculators",
      "Community Access",
    ],
    cta: "Start Free Trial",
    href: "#",
    featured: false,
  },
  {
    name: "Pro",
    price: "297",
    interval: "mo",
    description: "For loan officers ready to build a real marketing engine.",
    features: [
      "Everything in Starter",
      "AI Content Engine (Vortex)",
      "YouTube Script Generator",
      "Blog Publishing",
      "Facebook Ad Frameworks",
      "Flywheel Attribution Dashboard",
      "Referral Partner Management",
      "Priority Support",
    ],
    cta: "Start Free Trial",
    href: "#",
    featured: true,
  },
  {
    name: "Branch",
    price: "Custom",
    interval: null,
    description: "For branch managers and teams who need enterprise-level tools.",
    features: [
      "Everything in Pro",
      "Team Admin Dashboard",
      "Multi-User Management",
      "Branch-Level Reporting",
      "Custom Integrations",
      "Dedicated Onboarding",
      "White-Glove Setup",
    ],
    cta: "Contact Us",
    href: "#",
    featured: false,
  },
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
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.featured
                    ? "bg-dark-700 border-2 border-cerberus-red/40 glow-red"
                    : "bg-dark-700 border border-dark-400"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-red text-xs font-semibold text-white tracking-wide uppercase">
                    Most Popular
                  </div>
                )}

                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-3">
                  {plan.interval ? (
                    <>
                      <span className="text-4xl font-display font-800 text-white">
                        ${plan.price}
                      </span>
                      <span className="text-cerberus-steel text-sm">
                        /{plan.interval}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-display font-800 text-white">
                      {plan.price}
                    </span>
                  )}
                </div>

                <p className="text-sm text-cerberus-steel mb-8 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature) => (
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
                  href={plan.href}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                    plan.featured
                      ? "gradient-red text-white hover:opacity-90"
                      : "border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
