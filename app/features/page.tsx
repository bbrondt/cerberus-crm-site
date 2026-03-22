import {
  Zap, BarChart3, MessageSquare, Video, Target, Sparkles, FileText, Users,
  Mail, PenTool, Calculator, ArrowRight, Globe, CreditCard, LayoutDashboard,
  Image, RefreshCw, Mic, Search, BookOpen, Youtube,
} from "lucide-react";
import Link from "next/link";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const crmFeatures = [
  {
    icon: LayoutDashboard,
    title: "Command Center",
    description: "Your central dashboard with the Flywheel visualization, KPI tracking, coverage score, funnel tracker, pipeline view, and weekly checklist. One screen tells you exactly where your business stands.",
  },
  {
    icon: Zap,
    title: "69 Pre-Built Workflows",
    description: "System automations (call tracking, email handling, SMS compliance), pipeline management for Purchase and Refinance, calendar handling, AI nurture, webinar systems, ringless voicemail, and consumer lead routing — all published and ready.",
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Follow-Up",
    description: "Charlie, the built-in AI bot, manages email and SMS nurture 24/7. Pre-built sequences for new leads, referral partners, webinar registrants, post-webinar engagement, abandoned leads, and review campaigns.",
  },
  {
    icon: Users,
    title: "Referral Partner Management",
    description: "Automated referral submissions with contact autocomplete, 37 partner type tags, team routing, and workflow triggering. Track every referral partner by type, frequency, volume, and activity.",
  },
  {
    icon: BarChart3,
    title: "Flywheel Dashboard",
    description: "Real-time lead source attribution. Track every lead back to its source — which campaigns, content, and referral partners are actually driving your pipeline. Coverage scoring shows gaps in your marketing.",
  },
  {
    icon: Mail,
    title: "Email & SMS Marketing",
    description: "Broadcast sends, drip campaigns, and event-triggered sequences. A2P 10DLC compliant with guided registration. Pre-built templates for buyer nurture, refinance leads, and review request campaigns.",
  },
  {
    icon: Video,
    title: "Webinar System",
    description: "Full infrastructure for consumer and realtor webinars with registration, expiration pages, follow-up sequences, co-marketing variants, calendar integration, and custom value management — all in the command center.",
  },
  {
    icon: Calculator,
    title: "Mortgage Calculators",
    description: "Embeddable payment, affordability, and refinance calculators for your website. Capture leads while providing genuine value — education-first marketing that builds trust.",
  },
  {
    icon: Globe,
    title: "Website & Funnel Builder",
    description: "Drag-and-drop builder with 6 pre-built funnel templates (webinar registration, lead magnets, call booking, and more). Templates are continuously updated as we refine what converts.",
  },
  {
    icon: CreditCard,
    title: "Digital Business Card",
    description: "Built-in vCard builder. Embed on websites, share via text or email. Contact info, photo, and social links save directly to the recipient's phone contacts.",
  },
  {
    icon: Target,
    title: "59 Contact Tags & Smart Lists",
    description: "Pre-configured tags for 22 system events and 37 contact types — from realtors and CPAs to VA-eligible borrowers. Smart lists filter by tag, activity, and pipeline stage automatically.",
  },
  {
    icon: RefreshCw,
    title: "84 Custom Values",
    description: "Every variable your business needs — company info, loan officer details, social URLs, webinar configs (consumer + realtor), FB CAPI integration, application links, brand colors, and more. Pre-configured on install.",
  },
];

const vortexFeatures = [
  {
    icon: Sparkles,
    title: "AI Content Engine",
    description: "The hub of the Vortex with 12+ generation tools. Every piece of content matches your natural voice — not generic AI. Four creative lenses and 19 content angles ensure variety across hundreds of outputs.",
  },
  {
    icon: Target,
    title: "AI Ad Creator (Ugly Ads)",
    description: "Generate batches of 3–20 complete Facebook ads in under 2 minutes. Primary text, headlines, descriptions, and Gemini image prompts. Choose funnel stage mix (cold, warm, hot) and let the AI target each angle differently.",
  },
  {
    icon: Image,
    title: "AI Headshot Creator",
    description: "Professional headshots in any outfit, setting, or style — headshot, mid-body, or full-body. Place yourself anywhere: office, outdoor, urban, gradient. Upload reference photos once, generate unlimited variations.",
  },
  {
    icon: Youtube,
    title: "YouTube Script Generator",
    description: "Research topics, generate full scripts with hooks and CTAs, create thumbnail concepts, and auto-publish blog versions to your CRM. Three modes: 5-8 min, 10-15 min, and 20+ min deep dives.",
  },
  {
    icon: FileText,
    title: "Blog Post Automation",
    description: "Every YouTube script auto-publishes as an SEO-optimized blog post. Video to transcript to blog to published — automatically. Your content compounds while you sleep.",
  },
  {
    icon: Search,
    title: "Content Plan Generator",
    description: "Creates 60+ content topics organized around the belief-breaking framework: Big Idea, Vehicle, Internal Beliefs, and External Beliefs. Each topic generates 4 content pieces — that's 240+ pieces from one input.",
  },
  {
    icon: PenTool,
    title: "Organic Post Creator",
    description: "Image posts and video scripts with platform-specific captions for TikTok, Reels, Shorts, and LinkedIn. Three image modes (character reference, custom photo, topic scene). Four copy formats: organic, AIDA, PAS, story hook.",
  },
  {
    icon: Mail,
    title: "Email Writer",
    description: "Paste a URL and the AI reads the article, then writes a high-converting email in your voice. Reply-based CTAs optimized for deliverability. Lens and angle framework for unlimited variations.",
  },
  {
    icon: RefreshCw,
    title: "4-Campaign Ad Framework",
    description: "The proven structure: Omnipresence (always-on retargeting), Webinar Enrollment (direct response), Creative Testing (10 new ads every two weeks), and Scaling (winners get budget). Audience building and frequency management built in.",
  },
  {
    icon: Mic,
    title: "Webinar Framework Builder",
    description: "Pick your dream buyer, offer, and geo. AI generates the webinar script with presenter notes, builds the slide deck outline, creates landing page copy, email sequences, and all marketing assets from a single input.",
  },
  {
    icon: BookOpen,
    title: "Guide & Calculator Builder",
    description: "Generate 12-14 page lead magnet PDF guides and interactive HTML calculators with branded CTAs. The guide builder positions you as the expert; the calculator builder captures leads with real utility.",
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
            Built to Sell Loans.<br />
            <span className="text-cerberus-steel">Not Just Look Pretty.</span>
          </h1>
          <p className="text-lg text-cerberus-steel max-w-2xl mx-auto">
            Every feature was built because a real loan officer needed it. 69 workflows, 2 pipelines, 59 tags, 84 custom values, 10 forms, and 12+ AI content tools — all pre-configured for mortgage.
          </p>
        </div>
      </section>

      {/* CRM Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-700 border border-dark-400 mb-4">
              <span className="text-xs font-medium text-cerberus-steel tracking-wide uppercase">Cerberus CRM — $497/mo</span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">The Foundation</h2>
            <p className="text-cerberus-steel mt-2 max-w-2xl">
              Your complete CRM, marketing automation, and business management platform. Everything you need to manage leads, nurture relationships, and close deals — with 69 pre-built workflows ready on day one.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmFeatures.map((feature) => (
              <div key={feature.title} className="card-hover p-7 group">
                <div className="w-10 h-10 rounded-lg bg-dark-500 flex items-center justify-center mb-5 group-hover:bg-cerberus-red/15 transition-colors duration-300">
                  <feature.icon size={20} className="text-cerberus-steel group-hover:text-cerberus-red transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          {/* CRM Video */}
          <div className="mt-16 max-w-4xl mx-auto">
            <VideoPlaceholder title="Watch: What You Get for $497/mo" description="Full command center walkthrough" />
          </div>
        </div>
      </section>

      {/* Vortex Features */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cerberus-red/10 border border-cerberus-red/20 mb-4">
              <Sparkles size={12} className="text-cerberus-red" />
              <span className="text-xs font-medium text-cerberus-red-light tracking-wide uppercase">The Vortex — AI Content Engine</span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">The Full Marketing Flywheel</h2>
            <p className="text-cerberus-steel mt-2 max-w-2xl">
              Everything in Cerberus CRM plus 12+ AI-powered content generation tools, the 4-campaign ad framework, training, and a weekly strategy call. This is where the flywheel starts spinning.
            </p>
          </div>
          {/* Vortex Video */}
          <div className="mb-12 max-w-4xl mx-auto">
            <VideoPlaceholder title="Watch: The Vortex Content Engine in Action" description="See ads, scripts, and content generated live" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vortexFeatures.map((feature) => (
              <div key={feature.title} className="card-hover p-7 group border-cerberus-red/10">
                <div className="w-10 h-10 rounded-lg bg-cerberus-red/10 flex items-center justify-center mb-5 group-hover:bg-cerberus-red/20 transition-colors duration-300">
                  <feature.icon size={20} className="text-cerberus-red" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">See It in Action</h2>
          <p className="text-cerberus-steel max-w-lg mx-auto mb-8">Stop paying for tools that weren&apos;t built for you.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium hover:opacity-90 transition-opacity duration-200">
              Schedule a Demo <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 font-medium transition-all duration-200">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
