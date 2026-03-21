import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Cerberus CRM",
  description: "Privacy Policy for Cerberus CRM and related services.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h1 className="font-display font-800 text-3xl md:text-4xl tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-cerberus-steel-dark mb-12">
          Last updated: March 21, 2026
        </p>

        <div className="prose-custom space-y-8 text-[15px] text-cerberus-steel leading-relaxed">
          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              1. Introduction
            </h2>
            <p>
              Cerberus CRM (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              operates the website cerberuscrm.com and provides the Cerberus CRM
              platform and related services (collectively, the
              &quot;Service&quot;). This Privacy Policy explains how we collect,
              use, disclose, and protect your personal information when you visit
              our website or use our Service.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following types of information:
            </p>
            <p>
              <span className="text-white font-medium">
                Personal Information:
              </span>{" "}
              Name, email address, phone number, mailing address, company name,
              NMLS number, and payment information when you create an account,
              subscribe to our Service, or contact us.
            </p>
            <p className="mt-3">
              <span className="text-white font-medium">Usage Data:</span>{" "}
              Information about how you access and use the Service, including
              your IP address, browser type, device information, pages visited,
              time spent on pages, and referring URLs.
            </p>
            <p className="mt-3">
              <span className="text-white font-medium">
                Cookies &amp; Tracking Technologies:
              </span>{" "}
              We use cookies, pixels, and similar technologies to collect usage
              data and improve our Service. See our Cookie Policy for more
              details.
            </p>
            <p className="mt-3">
              <span className="text-white font-medium">
                Third-Party Data:
              </span>{" "}
              If you connect third-party services (such as GoHighLevel,
              Facebook, or email providers) to your Cerberus CRM account, we may
              receive data from those services as necessary to provide our
              Service.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              3. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to: provide, operate, and
              maintain the Service; process transactions and send related
              information including purchase confirmations and invoices; send
              you marketing and promotional communications (you may opt out at
              any time); respond to your comments, questions, and customer
              service requests; monitor and analyze usage trends to improve the
              Service; detect, prevent, and address technical issues, fraud, or
              illegal activity; and comply with legal obligations.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              4. How We Share Your Information
            </h2>
            <p>
              We do not sell your personal information. We may share your
              information with: service providers who assist us in operating the
              Service (payment processors, hosting providers, email delivery
              services, analytics providers); third-party integrations you
              explicitly connect to your account; law enforcement or government
              authorities when required by law or to protect our rights; and in
              connection with a merger, acquisition, or sale of all or a portion
              of our assets.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              5. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as your account is
              active or as needed to provide the Service. We may also retain
              certain information as required by law or for legitimate business
              purposes such as resolving disputes and enforcing our agreements.
              You may request deletion of your data by contacting us at
              support@cerberuscrm.com.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              6. Data Security
            </h2>
            <p>
              We implement commercially reasonable security measures to protect
              your personal information. However, no method of transmission over
              the Internet or method of electronic storage is 100% secure, and
              we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              7. Your Rights
            </h2>
            <p>
              Depending on your location, you may have the right to: access,
              correct, or delete your personal information; object to or restrict
              certain processing of your data; request portability of your data;
              and opt out of marketing communications. To exercise any of these
              rights, contact us at support@cerberuscrm.com.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              8. California Residents (CCPA)
            </h2>
            <p>
              If you are a California resident, you have additional rights under
              the California Consumer Privacy Act (CCPA), including the right to
              know what personal information we collect and how it is used, the
              right to request deletion of your personal information, and the
              right to opt out of the sale of your personal information (we do
              not sell personal information). To submit a request, contact us at
              support@cerberuscrm.com.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our Service is not directed to individuals under the age of 18. We
              do not knowingly collect personal information from children. If you
              believe we have collected information from a child, please contact
              us immediately.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the new policy on this
              page and updating the &quot;Last updated&quot; date. Your
              continued use of the Service after changes constitutes acceptance
              of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:{" "}
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
