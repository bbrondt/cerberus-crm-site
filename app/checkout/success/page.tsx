"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Loader2, Mail, Calendar } from "lucide-react";

export default function CheckoutSuccessPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentIntent = params.get("payment_intent");
    const redirectStatus = params.get("redirect_status");

    if (redirectStatus === "succeeded" && paymentIntent) {
      setStatus("success");
    } else {
      // Give it a moment in case the redirect params are slow
      const timer = setTimeout(() => {
        setStatus(redirectStatus === "succeeded" ? "success" : "error");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (status === "loading") {
    return (
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={32} className="text-cerberus-red animate-spin" />
          <p className="text-cerberus-steel">Confirming your payment...</p>
        </div>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">⚠️</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-white mb-3">
            Something Went Wrong
          </h1>
          <p className="text-cerberus-steel mb-8">
            We couldn&apos;t confirm your payment. If you were charged, don&apos;t
            worry — reach out and we&apos;ll get it sorted immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/checkout"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-red text-white font-medium text-sm hover:opacity-90 transition-all duration-200"
            >
              Try Again
            </Link>
            <a
              href="mailto:support@cerberuscrm.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 font-medium text-sm transition-all duration-200"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-cerberus-red/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-lg mx-auto px-6 text-center">
        {/* Success icon */}
        <div className="w-20 h-20 rounded-full gradient-red flex items-center justify-center mx-auto mb-8 glow-red">
          <CheckCircle size={36} className="text-white" />
        </div>

        <h1 className="font-display font-800 text-3xl md:text-4xl text-white mb-3">
          Welcome to Cerberus.
        </h1>
        <p className="text-lg text-cerberus-steel mb-10 leading-relaxed">
          Your payment is confirmed and your account is being provisioned right
          now. Here&apos;s what happens next:
        </p>

        {/* Next steps */}
        <div className="card p-6 text-left mb-8">
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                title: "Check your email",
                desc: "You'll receive your login credentials and getting-started guide within a few minutes.",
              },
              {
                icon: Calendar,
                title: "Book your onboarding call",
                desc: "We'll walk you through setup, import your contacts, and configure your pipeline on a 1-on-1 call.",
              },
            ].map((item, i) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-cerberus-red/10 flex items-center justify-center shrink-0">
                  <item.icon size={16} className="text-cerberus-red" />
                </div>
                <div>
                  <p className="text-sm font-display font-semibold text-white mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-sm text-cerberus-steel leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://app.cerberuscrm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium text-sm hover:opacity-90 transition-opacity duration-200"
          >
            Go to Your Dashboard
            <ArrowRight size={16} />
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 font-medium text-sm transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
