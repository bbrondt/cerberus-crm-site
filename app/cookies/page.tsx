import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Cerberus CRM",
  description: "Cookie Policy for Cerberus CRM and related services.",
};

export default function CookiePolicyPage() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h1 className="font-display font-800 text-3xl md:text-4xl tracking-tight mb-2">
          Cookie Policy
        </h1>
        <p className="text-sm text-cerberus-steel-dark mb-12">
          Last updated: March 21, 2026
        </p>

        <div className="prose-custom space-y-8 text-[15px] text-cerberus-steel leading-relaxed">
          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They are widely used to make websites work
              efficiently, provide analytics information, and enable
              personalization. This policy explains how Cerberus CRM uses
              cookies and similar tracking technologies on cerberuscrm.com and
              within our platform.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              2. Types of Cookies We Use
            </h2>
            <p className="mb-3">
              <span className="text-white font-medium">
                Essential Cookies:
              </span>{" "}
              These cookies are necessary for the website to function properly.
              They enable core features like page navigation, access to secure
              areas, and session management. The website cannot function
              properly without these cookies.
            </p>
            <p className="mb-3">
              <span className="text-white font-medium">
                Analytics Cookies:
              </span>{" "}
              These cookies help us understand how visitors interact with our
              website by collecting information such as pages visited, time
              spent on pages, and traffic sources. We use this data to improve
              the website and our Service. These cookies do not directly
              identify individual visitors.
            </p>
            <p className="mb-3">
              <span className="text-white font-medium">
                Functional Cookies:
              </span>{" "}
              These cookies allow the website to remember choices you make
              (such as your login status or display preferences) and provide
              enhanced features and personalization.
            </p>
            <p>
              <span className="text-white font-medium">
                Marketing Cookies:
              </span>{" "}
              These cookies are used to track visitors across websites and
              display relevant advertisements. They are set by third-party
              advertising partners such as Facebook (Meta Pixel) and Google and
              help us measure the effectiveness of our advertising campaigns.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              3. Third-Party Cookies
            </h2>
            <p>
              We may use third-party services that set their own cookies,
              including: Google Analytics for website usage analytics; Meta
              (Facebook) Pixel for advertising measurement and retargeting;
              GoHighLevel for CRM functionality and tracking; and Vercel for
              website hosting and performance analytics. These third parties
              have their own privacy and cookie policies, which we encourage
              you to review.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              4. How to Manage Cookies
            </h2>
            <p>
              You can control and manage cookies through your browser settings.
              Most browsers allow you to: view what cookies are stored and
              delete them individually; block third-party cookies; block all
              cookies from specific sites; block all cookies entirely; and
              delete all cookies when you close your browser. Please note that
              blocking or deleting cookies may affect the functionality of the
              website and your ability to use certain features of the Service.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              5. Do Not Track
            </h2>
            <p>
              Some browsers offer a &quot;Do Not Track&quot; setting. There is
              currently no industry standard for how websites should respond to
              Do Not Track signals. At this time, our website does not respond
              to Do Not Track browser signals.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Changes will
              be posted on this page with an updated &quot;Last updated&quot;
              date. Your continued use of the website after changes constitutes
              acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              7. Contact Us
            </h2>
            <p>
              If you have questions about our use of cookies, contact us at:{" "}
              <a
                href="mailto:support@cerberuscrm.com"
                className="text-cerberus-red-light hover:text-white transition-colors"
              >
                support@cerberuscrm.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
