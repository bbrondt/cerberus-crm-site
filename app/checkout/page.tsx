"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ArrowLeft,
  Shield,
  Clock,
  Headphones,
} from "lucide-react";
import StripeWrapper from "@/components/checkout/StripeWrapper";

const includedFeatures = [
  "CRM & Pipeline Management",
  "Automated Follow-Up Sequences",
  "Lead Capture Forms & Funnels",
  "Email & SMS Marketing",
  "Mortgage Calculators",
  "Referral Partner Management",
  "Smart Lists & Contact Tagging",
  "Website & Funnel Builder",
  "Calendar & Appointment Booking",
  "Workflow Automation Library",
  "Community Access",
];

export default function CheckoutPage() {
  const [step, setStep] = useState<"info" | "payment">("info");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const canProceed = name.trim() && email.trim() && phone.trim();

  return (
    <section className="relative min-h-screen pt-36 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-cerberus-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-sm text-cerberus-steel hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to pricing
        </Link>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left Column — Order Summary */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="lg:sticky lg:top-36">
              <div className="card p-7">
                {/* Plan header */}
                <div className="pb-6 border-b border-dark-400">
                  <p className="text-xs font-medium text-cerberus-steel-dark uppercase tracking-widest mb-3">
                    Your Plan
                  </p>
                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    Cerberus CRM
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-display font-800 text-white">
                      $497
                    </span>
                    <span className="text-cerberus-steel text-sm">/month</span>
                  </div>
                </div>

                {/* Features */}
                <div className="py-6 border-b border-dark-400">
                  <p className="text-xs font-medium text-cerberus-steel-dark uppercase tracking-widest mb-4">
                    Includes
                  </p>
                  <ul className="space-y-2.5">
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5"
                      >
                        <Check
                          size={14}
                          className="text-cerberus-red mt-0.5 shrink-0"
                        />
                        <span className="text-sm text-cerberus-steel-light leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Guarantees */}
                <div className="pt-6 space-y-4">
                  {[
                    {
                      icon: Shield,
                      title: "No Annual Contract",
                      desc: "Month-to-month. Cancel anytime with zero hassle.",
                    },
                    {
                      icon: Clock,
                      title: "Same-Day Access",
                      desc: "Your account is provisioned immediately after payment.",
                    },
                    {
                      icon: Headphones,
                      title: "Hands-On Onboarding",
                      desc: "We walk you through setup on a 1-on-1 call.",
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
              </div>
            </div>
          </div>

          {/* Right Column — Checkout Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={() => step === "payment" && setStep("info")}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  step === "info"
                    ? "text-white"
                    : "text-cerberus-steel hover:text-white cursor-pointer"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center ${
                    step === "info"
                      ? "gradient-red text-white"
                      : step === "payment"
                      ? "bg-cerberus-red/20 text-cerberus-red"
                      : "bg-dark-500 text-cerberus-steel-dark"
                  }`}
                >
                  {step === "payment" ? (
                    <Check size={12} />
                  ) : (
                    "1"
                  )}
                </span>
                Your Info
              </button>

              <div className="w-8 h-px bg-dark-400" />

              <div
                className={`flex items-center gap-2 text-sm font-medium ${
                  step === "payment"
                    ? "text-white"
                    : "text-cerberus-steel-dark"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center ${
                    step === "payment"
                      ? "gradient-red text-white"
                      : "bg-dark-500 text-cerberus-steel-dark"
                  }`}
                >
                  2
                </span>
                Payment
              </div>
            </div>

            {/* Step 1: Contact Info */}
            {step === "info" && (
              <div className="card p-8">
                <h2 className="font-display font-bold text-xl text-white mb-1">
                  Let&apos;s get you set up
                </h2>
                <p className="text-sm text-cerberus-steel mb-8">
                  We&apos;ll use this to create your Cerberus CRM account.
                </p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-cerberus-steel uppercase tracking-wider mb-2">
                      Full Name <span className="text-cerberus-red">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Brad Brondt"
                      className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-400 text-white placeholder-cerberus-steel-dark text-sm focus:outline-none focus:border-cerberus-red focus:ring-2 focus:ring-cerberus-red/15 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-cerberus-steel uppercase tracking-wider mb-2">
                      Email <span className="text-cerberus-red">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourbrokerage.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-400 text-white placeholder-cerberus-steel-dark text-sm focus:outline-none focus:border-cerberus-red focus:ring-2 focus:ring-cerberus-red/15 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-cerberus-steel uppercase tracking-wider mb-2">
                      Phone <span className="text-cerberus-red">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-400 text-white placeholder-cerberus-steel-dark text-sm focus:outline-none focus:border-cerberus-red focus:ring-2 focus:ring-cerberus-red/15 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-cerberus-steel uppercase tracking-wider mb-2">
                      Company / Brokerage
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="ABC Mortgage"
                      className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-400 text-white placeholder-cerberus-steel-dark text-sm focus:outline-none focus:border-cerberus-red focus:ring-2 focus:ring-cerberus-red/15 transition-all duration-200"
                    />
                  </div>
                </div>

                <button
                  onClick={() => canProceed && setStep("payment")}
                  disabled={!canProceed}
                  className="w-full mt-8 inline-flex items-center justify-center gap-2 py-4 rounded-xl gradient-red text-white font-display font-semibold text-base hover:opacity-90 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue to Payment
                </button>

                <p className="text-xs text-cerberus-steel-dark text-center mt-4 leading-relaxed">
                  By continuing, you agree to our{" "}
                  <span className="text-cerberus-steel hover:text-white cursor-pointer transition-colors">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-cerberus-steel hover:text-white cursor-pointer transition-colors">
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === "payment" && (
              <div className="card p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="font-display font-bold text-xl text-white mb-1">
                      Payment Details
                    </h2>
                    <p className="text-sm text-cerberus-steel">
                      Secure payment powered by Stripe
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-600 border border-dark-400">
                    <svg viewBox="0 0 28 12" className="h-3 w-auto">
                      <path
                        d="M13.976 3.078c0-1.035.863-1.432 1.521-1.432.677 0 1.26.345 1.826.863l1.07-1.329A4.165 4.165 0 0 0 15.59.002c-1.864 0-3.468 1.035-3.468 2.956 0 2.884 3.972 2.418 3.972 3.674 0 .604-.528 1.001-1.375 1.001-.87 0-1.657-.432-2.234-1.001l-1.174 1.38c.899.845 2.063 1.38 3.304 1.38 1.898 0 3.572-.942 3.572-3.023-.016-3.108-3.988-2.556-3.988-3.71l-.224.419z"
                        fill="#adb5b5"
                      />
                      <path
                        d="M5.62 0L3.85 5.942 2.08 0H0l2.729 8.655h2.165L7.632 0H5.62zM8.152 0h1.898v8.655H8.152V0zM23.988 0l-1.796 5.942L20.422 0h-2.08l2.729 8.655h2.165L26 0h-2.012z"
                        fill="#adb5b5"
                      />
                    </svg>
                    <svg viewBox="0 0 24 16" className="h-3 w-auto">
                      <circle cx="9" cy="8" r="7" fill="#5a5a5a" />
                      <circle cx="15" cy="8" r="7" fill="#6a6a6a" />
                    </svg>
                  </div>
                </div>

                {/* Customer summary */}
                <div className="px-4 py-3 rounded-lg bg-dark-800 border border-dark-400 mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">{name}</p>
                    <p className="text-xs text-cerberus-steel-dark">{email}</p>
                  </div>
                  <button
                    onClick={() => setStep("info")}
                    className="text-xs text-cerberus-red-light hover:text-white transition-colors"
                  >
                    Edit
                  </button>
                </div>

                <StripeWrapper customerEmail={email} customerName={name} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
