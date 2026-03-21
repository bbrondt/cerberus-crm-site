import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md gradient-red flex items-center justify-center font-display font-bold text-xs text-white">
                C
              </div>
              <span className="font-display font-semibold text-white">
                Cerberus<span className="text-cerberus-steel ml-0.5">CRM</span>
              </span>
            </Link>
            <p className="text-sm text-cerberus-steel-dark leading-relaxed">
              The marketing engine built for mortgage professionals.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-semibold text-sm text-white mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
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
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cerberus-steel-dark">
            &copy; {new Date().getFullYear()} Cerberus CRM. All rights reserved.
          </p>
          <p className="text-xs text-cerberus-steel-dark">
            A{" "}
            <Link href="https://thebrondtcookgroup.com" className="hover:text-white transition-colors" target="_blank">
              Brondt Cook Holdings
            </Link>{" "}
            product.
          </p>
        </div>
      </div>
    </footer>
  );
}
