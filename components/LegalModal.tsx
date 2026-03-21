"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Download } from "lucide-react";

type PolicyKey = "privacy" | "terms" | "cookies" | "disclaimer";

interface LegalModalProps {
  policy: PolicyKey | null;
  onClose: () => void;
}

const policyContent: Record<
  PolicyKey,
  { title: string; lastUpdated: string; sections: { heading: string; body: string }[] }
> = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "March 21, 2026",
    sections: [
      {
        heading: "1. Introduction",
        body: 'Cerberus CRM ("we," "us," or "our") operates the website cerberuscrm.com and provides the Cerberus CRM platform and related services (collectively, the "Service"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use our Service.',
      },
      {
        heading: "2. Information We Collect",
        body: "We may collect the following types of information:\n\nPersonal Information: Name, email address, phone number, mailing address, company name, NMLS number, and payment information when you create an account, subscribe to our Service, or contact us.\n\nUsage Data: Information about how you access and use the Service, including your IP address, browser type, device information, pages visited, time spent on pages, and referring URLs.\n\nCookies & Tracking Technologies: We use cookies, pixels, and similar technologies to collect usage data and improve our Service. See our Cookie Policy for more details.\n\nThird-Party Data: If you connect third-party services (such as GoHighLevel, Facebook, or email providers) to your Cerberus CRM account, we may receive data from those services as necessary to provide our Service.",
      },
      {
        heading: "3. How We Use Your Information",
        body: "We use the information we collect to: provide, operate, and maintain the Service; process transactions and send related information including purchase confirmations and invoices; send you marketing and promotional communications (you may opt out at any time); respond to your comments, questions, and customer service requests; monitor and analyze usage trends to improve the Service; detect, prevent, and address technical issues, fraud, or illegal activity; and comply with legal obligations.",
      },
      {
        heading: "4. How We Share Your Information",
        body: "We do not sell your personal information. We may share your information with: service providers who assist us in operating the Service (payment processors, hosting providers, email delivery services, analytics providers); third-party integrations you explicitly connect to your account; law enforcement or government authorities when required by law or to protect our rights; and in connection with a merger, acquisition, or sale of all or a portion of our assets.",
      },
      {
        heading: "5. Data Retention",
        body: "We retain your personal information for as long as your account is active or as needed to provide the Service. We may also retain certain information as required by law or for legitimate business purposes such as resolving disputes and enforcing our agreements. You may request deletion of your data by contacting us at support@cerberuscrm.com.",
      },
      {
        heading: "6. Data Security",
        body: "We implement commercially reasonable security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.",
      },
      {
        heading: "7. Your Rights",
        body: "Depending on your location, you may have the right to: access, correct, or delete your personal information; object to or restrict certain processing of your data; request portability of your data; and opt out of marketing communications. To exercise any of these rights, contact us at support@cerberuscrm.com.",
      },
      {
        heading: "8. California Residents (CCPA)",
        body: "If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and how it is used, the right to request deletion of your personal information, and the right to opt out of the sale of your personal information (we do not sell personal information). To submit a request, contact us at support@cerberuscrm.com.",
      },
      {
        heading: "9. Children's Privacy",
        body: "Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.",
      },
      {
        heading: "10. Changes to This Policy",
        body: 'We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the updated policy.',
      },
      {
        heading: "11. Contact Us",
        body: "If you have questions about this Privacy Policy, contact us at: support@cerberuscrm.com",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "March 21, 2026",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: 'By accessing or using the Cerberus CRM website (cerberuscrm.com) and platform (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service. These Terms constitute a legally binding agreement between you and Cerberus CRM.',
      },
      {
        heading: "2. Description of Service",
        body: "Cerberus CRM provides a marketing automation platform, customer relationship management tools, content generation tools, webinar integration, and related services designed for mortgage professionals. The Service is built on the GoHighLevel platform and may include integrations with third-party tools and services.",
      },
      {
        heading: "3. Account Registration",
        body: "To use certain features of the Service, you must create an account. You agree to: provide accurate and complete information during registration; maintain the security of your account credentials; accept responsibility for all activities that occur under your account; and notify us immediately of any unauthorized use. We reserve the right to suspend or terminate accounts that violate these Terms.",
      },
      {
        heading: "4. Subscription and Payment",
        body: "Access to the Service requires a paid subscription. By subscribing, you agree to pay all fees associated with your selected plan. Subscriptions are billed on a recurring monthly basis unless otherwise stated. You may cancel your subscription at any time, and cancellation will take effect at the end of your current billing period. We reserve the right to change pricing with 30 days' notice. Refunds are handled on a case-by-case basis at our discretion.",
      },
      {
        heading: "5. Acceptable Use",
        body: "You agree not to: use the Service for any unlawful purpose or in violation of any applicable laws or regulations; send unsolicited communications (spam) through the Service; violate the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, or any other applicable marketing and communications laws; upload or transmit viruses, malware, or any other harmful code; attempt to gain unauthorized access to the Service or its related systems; interfere with or disrupt the Service; resell, sublicense, or redistribute the Service without written authorization; or use the Service to harass, abuse, or harm others.",
      },
      {
        heading: "6. Compliance With Marketing Laws",
        body: "You are solely responsible for ensuring that your use of the Service complies with all applicable laws and regulations, including but not limited to: TCPA and A2P 10DLC requirements for SMS messaging; CAN-SPAM Act for email marketing; state-specific mortgage advertising regulations; NMLS disclosure requirements; and any applicable fair lending laws. Cerberus CRM provides tools to assist with compliance but does not guarantee compliance on your behalf. You are responsible for the content of your communications.",
      },
      {
        heading: "7. AI-Generated Content",
        body: "The Service includes AI-powered content generation tools. Content generated by AI is provided as a starting point and suggestion only. You are solely responsible for reviewing, editing, and approving all AI-generated content before use. Cerberus CRM makes no guarantees about the accuracy, compliance, or suitability of AI-generated content. You should not publish or distribute AI-generated content without first reviewing it for accuracy and compliance with applicable laws and regulations.",
      },
      {
        heading: "8. Intellectual Property",
        body: "The Service, including its design, features, code, and content (excluding your user content), is owned by Cerberus CRM and is protected by intellectual property laws. You retain ownership of content you create using the Service. By using the Service, you grant us a limited license to store, process, and display your content as necessary to provide the Service.",
      },
      {
        heading: "9. Third-Party Services",
        body: "The Service integrates with third-party platforms including but not limited to GoHighLevel, Facebook, Google, WebinarKit, and various AI providers. Your use of these integrations is subject to the respective third-party terms of service. We are not responsible for the availability, accuracy, or practices of third-party services.",
      },
      {
        heading: "10. Limitation of Liability",
        body: "To the maximum extent permitted by law, Cerberus CRM shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunities, arising out of or related to your use of the Service. Our total liability for any claims arising under these Terms shall not exceed the amount you paid us in the twelve (12) months preceding the claim.",
      },
      {
        heading: "11. Disclaimer of Warranties",
        body: 'The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or secure.',
      },
      {
        heading: "12. Indemnification",
        body: "You agree to indemnify and hold harmless Cerberus CRM, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from: your use of the Service; your violation of these Terms; your violation of any applicable laws or regulations; or your content or communications sent through the Service.",
      },
      {
        heading: "13. Termination",
        body: "We may suspend or terminate your access to the Service at any time, with or without cause, with or without notice. Upon termination, your right to use the Service ceases immediately. You may request an export of your data within 30 days of termination by contacting support@cerberuscrm.com.",
      },
      {
        heading: "14. Governing Law",
        body: "These Terms shall be governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in New Jersey.",
      },
      {
        heading: "15. Changes to These Terms",
        body: 'We reserve the right to update these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the revised Terms.',
      },
      {
        heading: "16. Contact Us",
        body: "If you have questions about these Terms, contact us at: support@cerberuscrm.com",
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    lastUpdated: "March 21, 2026",
    sections: [
      {
        heading: "1. What Are Cookies",
        body: "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work efficiently, provide analytics information, and enable personalization. This policy explains how Cerberus CRM uses cookies and similar tracking technologies on cerberuscrm.com and within our platform.",
      },
      {
        heading: "2. Types of Cookies We Use",
        body: "Essential Cookies: These cookies are necessary for the website to function properly. They enable core features like page navigation, access to secure areas, and session management. The website cannot function properly without these cookies.\n\nAnalytics Cookies: These cookies help us understand how visitors interact with our website by collecting information such as pages visited, time spent on pages, and traffic sources. We use this data to improve the website and our Service. These cookies do not directly identify individual visitors.\n\nFunctional Cookies: These cookies allow the website to remember choices you make (such as your login status or display preferences) and provide enhanced features and personalization.\n\nMarketing Cookies: These cookies are used to track visitors across websites and display relevant advertisements. They are set by third-party advertising partners such as Facebook (Meta Pixel) and Google and help us measure the effectiveness of our advertising campaigns.",
      },
      {
        heading: "3. Third-Party Cookies",
        body: "We may use third-party services that set their own cookies, including: Google Analytics for website usage analytics; Meta (Facebook) Pixel for advertising measurement and retargeting; GoHighLevel for CRM functionality and tracking; and Vercel for website hosting and performance analytics. These third parties have their own privacy and cookie policies, which we encourage you to review.",
      },
      {
        heading: "4. How to Manage Cookies",
        body: "You can control and manage cookies through your browser settings. Most browsers allow you to: view what cookies are stored and delete them individually; block third-party cookies; block all cookies from specific sites; block all cookies entirely; and delete all cookies when you close your browser. Please note that blocking or deleting cookies may affect the functionality of the website and your ability to use certain features of the Service.",
      },
      {
        heading: "5. Do Not Track",
        body: 'Some browsers offer a "Do Not Track" setting. There is currently no industry standard for how websites should respond to Do Not Track signals. At this time, our website does not respond to Do Not Track browser signals.',
      },
      {
        heading: "6. Changes to This Policy",
        body: 'We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the website after changes constitutes acceptance of the updated policy.',
      },
      {
        heading: "7. Contact Us",
        body: "If you have questions about our use of cookies, contact us at: support@cerberuscrm.com",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    lastUpdated: "March 21, 2026",
    sections: [
      {
        heading: "1. General Disclaimer",
        body: 'The information provided on cerberuscrm.com and through the Cerberus CRM platform (the "Service") is for general informational and educational purposes only. Nothing on this website or within the Service constitutes professional advice, including but not limited to legal, financial, tax, mortgage, or compliance advice. You should consult with qualified professionals before making decisions based on any information provided through the Service.',
      },
      {
        heading: "2. Not Financial or Mortgage Advice",
        body: "Cerberus CRM is a marketing automation and CRM platform. We do not provide mortgage lending services, financial advice, or loan origination through this website or platform. Any mortgage-related content, calculators, or educational materials are provided for informational purposes only and should not be construed as lending advice, rate quotes, or pre-qualification decisions. All mortgage lending activities are conducted through appropriately licensed entities and individuals.",
      },
      {
        heading: "3. Earnings Disclaimer",
        body: "Any references to income, revenue, results, or performance on this website, in our marketing materials, during webinars, or within coaching and training content are for illustrative purposes only. They are not guarantees of results.\n\nResults vary based on individual effort, experience, market conditions, business acumen, and numerous other factors. We make no representations or warranties that you will achieve any particular results from using the Service, following our training, implementing our strategies, or participating in our coaching programs.\n\nTestimonials and case studies represent individual experiences and are not indicative of future performance or results. Past performance is not a guarantee of future results. Any specific income figures, deal counts, or revenue numbers shared are the results of specific individuals in specific circumstances and should not be considered typical.",
      },
      {
        heading: "4. No Guarantees",
        body: "Cerberus CRM does not guarantee that using our platform, tools, or training will result in: increased leads, closed deals, or revenue; successful advertising campaigns; higher conversion rates; improved search engine rankings; or any other specific business outcome. The Service provides tools and training to support your marketing efforts, but success depends on your implementation, market conditions, and many factors outside our control.",
      },
      {
        heading: "5. AI-Generated Content Disclaimer",
        body: "Cerberus CRM includes AI-powered tools that generate content including but not limited to ad copy, blog posts, email sequences, video scripts, and social media posts. AI-generated content is provided as a starting point and should always be reviewed and edited before use. We do not guarantee the accuracy, compliance, originality, or suitability of AI-generated content. You are solely responsible for ensuring that any content you publish or distribute complies with all applicable laws, regulations, and industry standards, including NMLS advertising requirements, fair lending laws, and truth-in-advertising regulations.",
      },
      {
        heading: "6. Advertising and Compliance Disclaimer",
        body: "The advertising strategies, frameworks, and templates provided through the Service are for educational purposes. You are solely responsible for ensuring that your advertising complies with all applicable laws and regulations, including but not limited to: Federal Trade Commission (FTC) advertising guidelines; TCPA and A2P 10DLC requirements for SMS and phone communications; CAN-SPAM Act for email marketing; Facebook, Google, and other platform advertising policies; state-specific mortgage advertising regulations; and NMLS disclosure and licensing requirements. Cerberus CRM is not responsible for compliance violations resulting from your use of our tools or implementation of strategies discussed in our training.",
      },
      {
        heading: "7. Third-Party Links and Services",
        body: "This website and the Service may contain links to third-party websites, tools, and services. We do not control and are not responsible for the content, practices, or availability of third-party services. Inclusion of any link does not imply endorsement.",
      },
      {
        heading: "8. Limitation of Liability",
        body: "To the fullest extent permitted by law, Cerberus CRM, its owners, employees, and affiliates shall not be liable for any damages arising from your use of the Service, reliance on information provided, implementation of strategies discussed, or results achieved or not achieved through use of the platform.",
      },
      {
        heading: "9. Contact Us",
        body: "If you have questions about this Disclaimer, contact us at: support@cerberuscrm.com",
      },
    ],
  },
};

export default function LegalModal({ policy, onClose }: LegalModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (policy) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [policy]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (policy) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [policy, handleClose]);

  if (!policy) return null;

  const content = policyContent[policy];

  const handleDownload = () => {
    let text = `${content.title}\nLast updated: ${content.lastUpdated}\n\n`;
    content.sections.forEach((s) => {
      text += `${s.heading}\n\n${s.body}\n\n`;
    });
    text += `\n© ${new Date().getFullYear()} Cerberus CRM. All rights reserved.\n`;

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Cerberus-CRM-${content.title.replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={`relative w-full max-w-2xl max-h-[85vh] bg-dark-800 border border-dark-400 rounded-2xl shadow-2xl flex flex-col transition-all duration-200 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 shrink-0">
          <div>
            <h2 className="font-display font-bold text-xl text-white">
              {content.title}
            </h2>
            <p className="text-xs text-cerberus-steel-dark mt-1">
              Last updated: {content.lastUpdated}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-cerberus-steel hover:text-white bg-dark-600 hover:bg-dark-500 border border-dark-400 transition-all duration-200"
              title="Download as text file"
            >
              <Download size={14} />
              Download
            </button>
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-cerberus-steel hover:text-white hover:bg-dark-600 transition-all duration-200"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 space-y-6 custom-scrollbar">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-display font-semibold text-[15px] text-white mb-2">
                {section.heading}
              </h3>
              <div className="text-sm text-cerberus-steel leading-relaxed whitespace-pre-line">
                {section.body}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/5 shrink-0">
          <p className="text-xs text-cerberus-steel-dark text-center">
            &copy; {new Date().getFullYear()} Cerberus CRM. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
