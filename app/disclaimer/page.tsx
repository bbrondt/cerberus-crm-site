import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — Cerberus CRM",
  description:
    "Disclaimer and Earnings Disclaimer for Cerberus CRM and related services.",
};

export default function DisclaimerPage() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h1 className="font-display font-800 text-3xl md:text-4xl tracking-tight mb-2">
          Disclaimer
        </h1>
        <p className="text-sm text-cerberus-steel-dark mb-12">
          Last updated: March 21, 2026
        </p>

        <div className="prose-custom space-y-8 text-[15px] text-cerberus-steel leading-relaxed">
          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              1. General Disclaimer
            </h2>
            <p>
              The information provided on cerberuscrm.com and through the
              Cerberus CRM platform (the &quot;Service&quot;) is for general
              informational and educational purposes only. Nothing on this
              website or within the Service constitutes professional advice,
              including but not limited to legal, financial, tax, mortgage, or
              compliance advice. You should consult with qualified professionals
              before making decisions based on any information provided through
              the Service.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              2. Not Financial or Mortgage Advice
            </h2>
            <p>
              Cerberus CRM is a marketing automation and CRM platform. We do
              not provide mortgage lending services, financial advice, or loan
              origination through this website or platform. Any mortgage-related
              content, calculators, or educational materials are provided for
              informational purposes only and should not be construed as lending
              advice, rate quotes, or pre-qualification decisions. All mortgage
              lending activities are conducted through appropriately licensed
              entities and individuals.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              3. Earnings Disclaimer
            </h2>
            <p>
              Any references to income, revenue, results, or performance on
              this website, in our marketing materials, during webinars, or
              within coaching and training content are for illustrative purposes
              only. They are not guarantees of results.
            </p>
            <p className="mt-3">
              Results vary based on individual effort, experience, market
              conditions, business acumen, and numerous other factors. We make
              no representations or warranties that you will achieve any
              particular results from using the Service, following our training,
              implementing our strategies, or participating in our coaching
              programs.
            </p>
            <p className="mt-3">
              Testimonials and case studies represent individual experiences and
              are not indicative of future performance or results. Past
              performance is not a guarantee of future results. Any specific
              income figures, deal counts, or revenue numbers shared are the
              results of specific individuals in specific circumstances and
              should not be considered typical.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              4. No Guarantees
            </h2>
            <p>
              Cerberus CRM does not guarantee that using our platform, tools,
              or training will result in: increased leads, closed deals, or
              revenue; successful advertising campaigns; higher conversion
              rates; improved search engine rankings; or any other specific
              business outcome. The Service provides tools and training to
              support your marketing efforts, but success depends on your
              implementation, market conditions, and many factors outside our
              control.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              5. AI-Generated Content Disclaimer
            </h2>
            <p>
              Cerberus CRM includes AI-powered tools that generate content
              including but not limited to ad copy, blog posts, email sequences,
              video scripts, and social media posts. AI-generated content is
              provided as a starting point and should always be reviewed and
              edited before use. We do not guarantee the accuracy, compliance,
              originality, or suitability of AI-generated content. You are
              solely responsible for ensuring that any content you publish or
              distribute complies with all applicable laws, regulations, and
              industry standards, including NMLS advertising requirements, fair
              lending laws, and truth-in-advertising regulations.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              6. Advertising and Compliance Disclaimer
            </h2>
            <p>
              The advertising strategies, frameworks, and templates provided
              through the Service are for educational purposes. You are solely
              responsible for ensuring that your advertising complies with all
              applicable laws and regulations, including but not limited to:
              Federal Trade Commission (FTC) advertising guidelines; TCPA and
              A2P 10DLC requirements for SMS and phone communications; CAN-SPAM
              Act for email marketing; Facebook, Google, and other platform
              advertising policies; state-specific mortgage advertising
              regulations; and NMLS disclosure and licensing requirements.
              Cerberus CRM is not responsible for compliance violations
              resulting from your use of our tools or implementation of
              strategies discussed in our training.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              7. Third-Party Links and Services
            </h2>
            <p>
              This website and the Service may contain links to third-party
              websites, tools, and services. We do not control and are not
              responsible for the content, practices, or availability of
              third-party services. Inclusion of any link does not imply
              endorsement.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Cerberus CRM, its
              owners, employees, and affiliates shall not be liable for any
              damages arising from your use of the Service, reliance on
              information provided, implementation of strategies discussed, or
              results achieved or not achieved through use of the platform.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have questions about this Disclaimer, contact us at:{" "}
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
