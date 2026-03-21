"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LegalModal from "./LegalModal";

type PolicyKey = "privacy" | "terms" | "cookies" | "disclaimer";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Support", href: "mailto:support@cerberuscrm.com" },
];

const legalLinks: { label: string; key: PolicyKey }[] = [
  { label: "Privacy Policy", key: "privacy" },
  { label: "Terms of Service", key: "terms" },
  { label: "Cookie Policy", key: "cookies" },
  { label: "Disclaimer", key: "disclaimer" },
];

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyKey | null>(null);

  return (
    <>
      <footer className="border-t border-white/5 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/cerberus-logo.png"
                  alt="Cerberus CRM"
                  width={160}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-cerberus-steel-dark leading-relaxed">
                The complete marketing flywheel built for mortgage
                professionals.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-display font-semibold text-sm text-white mb-4">
                Product
              </h4>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cerberus-steel-dark hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display font-semibold text-sm text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cerberus-steel-dark hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display font-semibold text-sm text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.key}>
                    <button
                      onClick={() => setActivePolicy(link.key)}
                      className="text-sm text-cerberus-steel-dark hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 pt-8 border-t border-white/5">
            <p className="text-xs text-cerberus-steel-dark text-center">
              &copy; {new Date().getFullYear()} Cerberus CRM. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      <LegalModal
        policy={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </>
  );
}
