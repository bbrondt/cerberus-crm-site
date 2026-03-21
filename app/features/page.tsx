import {
  Zap,
  BarChart3,
  MessageSquare,
  Video,
  Target,
  Sparkles,
  FileText,
  Users,
  Mail,
  PenTool,
  Calculator,
  ArrowRight,
  Globe,
  CreditCard,
  LayoutDashboard,
  Image,
  RefreshCw,
  Mic,
} from "lucide-react";
import Link from "next/link";

const crmFeatures = [
  {
    icon: LayoutDashboard,
    title: "Command Center",
    description:
      "Your central dashboard for managing your entire business. Referral submissions, pipeline tracking, smart lists, contact management, reputation management, and analytics — all in one place.",
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-Up",
    description:
      "Pre-built nurture sequences for new leads, referral partner follow-up, webinar registrations, post-webinar engagement, abandoned leads, and reputation requests. Smart workflows that fire on behavior, not just time delays.",
  },
  {
    icon: Users,
    title: "Referral Partner Management",
    description:
      "Track every referral partner by type — realtor, CPA, financial advisor, attorney. Smart lists filter by referral frequency, volume, and activity. Automated notifications keep partners informed as referrals move through your pipeline.",
  },
  {
    icon: BarChart3,
    title: "Flywheel Dashboard",
    description:
      "Real-time lead source attribution. Track every lead back to its source — which campaigns, content, and referral partners are actually driving your pipeline. No more guessing what's working.",
  },
  {
    icon: Mail,
    title: "Email & SMS Marketing",
    description:
      "Broadcast sends, drip campaigns, and event-triggered sequences. A2P 10DLC compliant. Send one valuable email per week to your entire database with timely, relevant content — not stale drip sequences.",
  },
  {
    icon: Calculator,
    title: "Mortgage Calculators",
    description:
      "Embeddable payment, affordability, and refinance calculators for your website. They capture leads while providing genuine value — education-first marketing that builds trust.",
  },
  {
    icon: Globe,
    title: "Website Builder",
    description:
      "AI-powered website generation that creates professional mortgage sites with SEO optimization, schema markup, program pages, resource sections, and lead capture forms. Indistinguishable from custom-built.",
  },
  {
    icon: CreditCard,
    title: "Digital Business Card",
    description:
      "Built-in vCard builder. Embed on websites, share via text or email. Includes contact info, photo, and social links. Saves directly to the recipient's phone contacts.",
  },
  {
    icon: Zap,
    title: "Funnel Templates",
    description:
      "Six pre-built funnel templates — webinar registration, lead magnets, call booking, and more. Clone the latest version anytime. Templates are continuously updated as we refine what works.",
  },
];

const vortexFeatures = [
  {
    icon: Sparkles,
    title: "AI Content Engine",
    description:
      "The hub of the Vortex. Analyze your voice from transcripts so all generated content matches your natural speaking style. Social posts, scripts, emails, blogs — everything sounds like you, not a robot.",
  },
  {
    icon: Target,
    title: "AI Ad Creator",
    description:
      "Generate batches of 10–20 complete Facebook and Instagram ads in under 2 minutes. Primary text, headlines, descriptions, and social copy — each ad takes a different creative angle. Then generate matching images with AI. A month of ad creative in 30 minutes.",
  },
  {
    icon: Image,
    title: "AI Headshot Creator",
    description:
      "Generate professional headshots in any outfit, setting, or style. Head-to-toe, mid-body, or portrait. Place yourself in any backdrop — office, outdoor, stadium. Landing pages and social content without expensive photoshoots.",
  },
  {
    icon: Video,
    title: "YouTube Script Generator",
    description:
      "Research topics, generate full scripts with hooks and CTAs, create thumbnail concepts, and auto-publish blog versions. Three modes: short-form, long-form, and YouTube-optimized. All designed for teleprompter use.",
  },
  {
    icon: FileText,
    title: "Blog Post Automation",
    description:
      "Video recording to transcript to SEO-optimized blog post to published — automatically. Every video you record also becomes a blog post without extra work. Your content compounds while you sleep.",
  },
  {
    icon: PenTool,
    title: "Content Plan Generator",
    description:
      "Creates 80+ content topics organized around four belief categories: Big Idea, Vehicle, Internal Beliefs, and External Beliefs. One framework generates months of content across all channels — video, blog, social, ads, and email.",
  },
  {
    icon: RefreshCw,
    title: "4-Campaign Ad Framework",
    description:
      "The proven structure: Omnipresence (always-on retargeting), Webinar Enrollment (direct response), Creative Testing (10 new ads every two weeks), and Scaling (winners get budget). Audience building and frequency management built in.",
  },
  {
    icon: Mic,
    title: "Webinar Framework Builder",
    description:
      "Pick your dream buyer, offer, and geo. AI generates the webinar script with presenter notes, builds the slide deck, creates landing page copy, email sequences, and all marketing assets from a single framework input. Concept to finished webinar in a day.",
  },
  {
    icon: Video,
    title: "WebinarFuse Studio",
    description:
      "Included with Vortex. Registration pages, thank you pages, watch pages, scheduling, replay management, and deep analytics. Webhook integration sends engagement data — minutes watched, view percentage, CTA clicks — straight into your CRM.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cerberus-red/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Built to Sell Loans.
            <br />
            <span className="text-cerberus-steel">Not Just Look Pretty.</span>
          </h1>
          <p className="text-lg text-cerberus-steel max-w-2xl mx-auto">
            Every feature was built because a real loan officer needed it. No
            bloat, no guesswork — just tools that move the needle.
          </p>
        </div>
      </section>

      {/* CRM Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-700 border border-dark-400 mb-4">
              <span className="text-xs font-medium text-cerberus-steel tracking-wide uppercase">
                Cerberus CRM — $497/mo
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
              The Foundation
            </h2>
            <p className="text-cerberus-steel mt-2 max-w-2xl">
              Your complete CRM, marketing automation, and business management
              platform. Everything you need to manage leads, nurture
              relationships, and close deals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmFeatures.map((feature) => (
              <div key={feature.title} className="card-hover p-7 group">
                <div className="w-10 h-10 rounded-lg bg-cerberus-red/10 flex items-center justify-center mb-5 group-hover:bg-cerberus-red/20 transition-colors duration-300">
                  <feature.icon size={20} className="text-cerberus-red" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vortex Features */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cerberus-red/10 border border-cerberus-red/20 mb-4">
              <Sparkles size={12} className="text-cerberus-red" />
              <span className="text-xs font-medium text-cerberus-red-light tracking-wide uppercase">
                The Vortex — Schedule a Demo for Pricing
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
              The Full Marketing Flywheel
            </h2>
            <p className="text-cerberus-steel mt-2 max-w-2xl">
              Everything in Cerberus CRM plus the AI-powered content engine, ad
              creator, webinar platform, and the complete marketing automation
              system. This is where the flywheel starts spinning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vortexFeatures.map((feature) => (
              <div
                key={feature.title}
                className="card-hover p-7 group border-cerberus-red/10"
              >
                <div className="w-10 h-10 rounded-lg bg-cerberus-red/10 flex items-center justify-center mb-5 group-hover:bg-cerberus-red/20 transition-colors duration-300">
                  <feature.icon size={20} className="text-cerberus-red" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
            See It in Action
          </h2>
          <p className="text-cerberus-steel max-w-lg mx-auto mb-8">
            Stop paying for tools that weren&apos;t built for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium hover:opacity-90 transition-opacity duration-200"
            >
              View Pricing
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 font-medium transition-all duration-200"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
