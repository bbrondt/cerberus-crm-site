"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/cerberus-logo.png"
            alt="Cerberus CRM"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
          <span className="font-display font-semibold text-lg text-white">
            Cerberus<span className="text-cerberus-steel ml-0.5">CRM</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cerberus-steel hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-cerberus-steel hover:text-white transition-colors duration-200"
          >
            Log in
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium px-5 py-2.5 rounded-lg gradient-red text-white hover:opacity-90 transition-opacity duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cerberus-steel hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-800 border-t border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base text-cerberus-steel hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/5 space-y-3">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="block text-base text-cerberus-steel hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-sm font-medium px-5 py-2.5 rounded-lg gradient-red text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
