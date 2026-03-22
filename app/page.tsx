import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import {
  Zap,
  BarChart3,
  MessageSquare,
  Video,
  Target,
  ArrowRight,
  Sparkles,
  PenTool,
  Users,
  RefreshCw,
  Quote,
  Calculator,
  Globe,
  CreditCard,
  Mail,
  Image,
  Search,
  BookOpen,
  Mic,
  FileText,
  Youtube,
} from "lucide-react";

/* ─── CRM Features ($497/mo base) ─── */
const crmFeatures = [
  {
    icon: BarChart3,
    title: "Pipeline Management",
    description:
      "Two pre-built pipelines (Purchase & Refinance) with 10 stages each. 69 automations handle stage transitions, notifications, and follow-up — no manual dragging.",
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-Up",
    description:
      "Pre-built nurture sequences for new leads, referral partners, webinar registrations, abandoned leads, and closed clients. AI-powered SMS and email nurture runs 24/7.",
  },
  {
    icon: Users,
    title: "Referral Partner Management",
    description:
      "Automated referral submissions with contact autocomplete, tag assignment, team routing, and pipeline creation. 37 partner types tracked by activity and volume.",
  },
  {
    icon: Mail,
    title: "Email & SMS Marketing",
    description:
      "Broadcast sends, drip campaigns, and event-triggered sequences. A2P 10DLC compliant. Pre-built templates for buyer nurture, refinance leads, and review campaigns.",
  },
  {
    icon: Video,
    title: "Webinar System",
    description:
      "Full webinar infrastructure — consumer and realtor funnels with registration, expiration pages, follow-up sequences, co-marketing variants, and calendar integration.",
  },
  {
    icon: Globe,
    title: "Website & Funnel Builder",
    description:
      "Drag-and-drop website builder, 6 pre-built funnel templates, lead capture forms, survey builder, and digital business card (vCard) generator.",
  },
  {
    icon: Calculator,
    title: "Mortgage Calculators",
    description:
      "Embeddable payment, affordability, and refinance calculators for your website. They capture leads while providing genuine value.",
  },
  {
    icon: Zap,
    title: "69 Pre-Built Workflows",
    description:
      "System automations, pipeline management, calendar handling, AI nurture, webinar systems, ringless voicemail, and consumer lead routing — all configured and ready.",
  },
  {
    icon: CreditCard,
    title: "Full CRM Infrastructure",
    description:
      "59 contact tags, 84 custom values, 112 custom fields, 10 forms, reputation management, smart lists, call tracking, and appointment booking — all pre-configured for mortgage.",
  },
];

/* ─── Vortex Features (add-on) ─── */
const vortexFeatures = [
  {
    icon: Target,
    title: "AI Ad Creator",
    description:
      "Generate 3–20 complete Facebook ads in under 2 minutes. Primary text, headlines, image prompts, and funnel stage targeting — a month of ad creative in 30 minutes.",
  },
  {
    icon: Youtube,
    title: "YouTube Script Generator",
    description:
      "Full scripts with SEO titles, descriptions, thumbnail prompts, and one-click blog publishing. Three length modes: 5-8, 10-15, and 20+ minutes.",
  },
  {
    icon: Search,
    title: "Content Plan Generator",
    description:
      "AI-researched topics using the belief-breaking framework. One input creates 60+ topics across 4 categories — each becoming short-form, long-form, YouTube, and email content.",
  },
  {
    icon: Image,
    title: "AI Headshot & Image Creator",
    description:
      "Professional headshots in any outfit, setting, or style. Organic social images with 3 modes: character reference, custom upload, or topic scene.",
  },
  {
    icon: PenTool,
    title: "Social Content Engine",
    description:
      "Organic posts (image + video), 4 copy formats (organic, AIDA, PAS, story hook), 4 creative lenses, 19 angles, and platform-specific captions for every channel.",
  },
  {
    icon: Mic,
    title: "Webinar Framework Builder",
    description:
      "Pick your audience, topic, and offer. AI generates the complete webinar package: slide outline, presenter notes, landing page copy, and email sequences.",
  },
  {
    icon: Mail,
    title: "Email Writer",
    description:
      "Paste a URL and the AI reads the article, then writes a high-converting email in your voice. Reply-based CTAs optimized for inbox deliverability.",
  },
  {
    icon: BookOpen,
    title: "Guide & Calculator Builder",
    description:
      "Generate 12-page lead magnet PDFs and interactive HTML calculators with branded CTAs. Tangible assets your leads actually want.",
  },
  {
    icon: FileText,
    title: "Automated Video-to-Blog",
    description:
      "Every YouTube script auto-publishes as an SEO-optimized blog post in your CRM. Your content compounds while you sleep.",
  },
];

const replaces = [
  { tool: "Your CRM", cost: "$99–300" },
  { tool: "Email Platform", cost: "$50–150" },
  { tool: "Funnel Builder", cost: "$97–297" },
  { tool: "Content Tools", cost: "$50–200" },
  { tool: "Webinar Platform", cost: "$49–99" },
  { tool: "Ad Creator", cost: "$30–100" },
  { tool: "Website Builder", cost: "$29–99" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cerberus-red/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cerberus-red/10 border border-cerberus-red/20 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-cerberus-red animate-pulse" />
              <span className="text-xs font-medium text-cerberus-red-light tracking-wide uppercase">
                Built by a Loan Officer. For Loan Officers.
              </span>
            </div>
            <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              It&apos;s Not Just a CRM.
              <br />
              <span className="text-gradient">It&apos;s a Marketing Flywheel.</span>
            </h1>
            <p className="text-lg md:text-xl text-cerberus-steel max-w-2xl mx-auto leading-relaxed mb-10">
              Cerberus replaces your CRM, content tools, funnel builder, website builder, ad creator, and webinar platform — everything in one ecosystem with automations connecting all the pieces.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium text-base hover:opacity-90 transition-opacity duration-200">
                Schedule a Demo <ArrowRight size={18} />
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 font-medium text-base transition-all duration-200">
                View Pricing
              </Link>
            </div>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <VideoPlaceholder title="Watch: What Is Cerberus?" description="2-minute overview of the complete marketing flywheel" />
          </div>
        </div>
      </section>

      {/* REPLACES STRIP */}
      <section className="py-12 border-y border-white/5 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-medium text-cerberus-steel-dark uppercase tracking-widest mb-6">One Platform Replaces</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {replaces.map((item, i) => (
              <span key={item.tool} className="text-sm text-cerberus-steel font-medium flex items-center gap-3">
                <span>{item.tool}</span>
                <span className="text-xs text-cerberus-steel-dark line-through">{item.cost}/mo</span>
                {i < replaces.length - 1 && <span className="w-1 h-1 rounded-full bg-cerberus-red/40" />}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THE FOUNDATION — CRM */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-700 border border-dark-400 mb-4">
              <span className="text-xs font-medium text-cerberus-steel tracking-wide uppercase">Cerberus CRM — $497/mo</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
              The Foundation.<br />
              <span className="text-cerberus-steel">Everything You Need to Run Your Business.</span>
            </h2>
            <p className="text-cerberus-steel max-w-2xl mx-auto">
              Your complete CRM, marketing automation, and business management platform — 69 pre-built workflows, 2 pipelines, 59 contact tags, and the full command center. Ready on day one.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmFeatures.map((item) => (
              <div key={item.title} className="card-hover p-7 group">
                <div className="w-10 h-10 rounded-lg bg-dark-500 flex items-center justify-center mb-5 group-hover:bg-cerberus-red/15 transition-colors duration-300">
                  <item.icon size={20} className="text-cerberus-steel group-hover:text-cerberus-red transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 font-medium transition-all duration-200">
              See Full CRM Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* MID-PAGE DEMO CTA */}
      <section className="py-12 border-y border-cerberus-red/10 bg-cerberus-red/[0.03]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-xl text-white">Want to see it in action?</p>
            <p className="text-sm text-cerberus-steel mt-1">Live walkthrough of the CRM, command center, and the Vortex content engine.</p>
          </div>
          <Link href="/demo" className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium hover:opacity-90 transition-opacity duration-200">
            Schedule a Demo <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ADD THE VORTEX */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cerberus-red/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cerberus-red/10 border border-cerberus-red/20 mb-4">
              <Sparkles size={12} className="text-cerberus-red" />
              <span className="text-xs font-medium text-cerberus-red-light tracking-wide uppercase">The Vortex — AI Content Engine</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
              Add the Vortex.<br />
              <span className="text-cerberus-steel">Turn Your CRM Into a Marketing Machine.</span>
            </h2>
            <p className="text-cerberus-steel max-w-2xl mx-auto">
              12+ AI content tools that create ads, scripts, social posts, emails, guides, and calculators — all matching your voice. One input creates months of content across every channel.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-16">
            <VideoPlaceholder title="Watch: The Vortex Content Engine Demo" description="See 10 Facebook ads generated in under 2 minutes" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vortexFeatures.map((item) => (
              <div key={item.title} className="card-hover p-7 group border-cerberus-red/10">
                <div className="w-10 h-10 rounded-lg bg-cerberus-red/10 flex items-center justify-center mb-5 group-hover:bg-cerberus-red/20 transition-colors duration-300">
                  <item.icon size={20} className="text-cerberus-red" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="card p-8 border-cerberus-red/20">
              <p className="text-xs font-medium text-cerberus-red-light uppercase tracking-widest mb-4">Also Included With the Vortex</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["4-Campaign Facebook Ad Framework", "Vortex Training Program", "Weekly Vortex Strategy Call", "Priority Support", "Done-for-You Onboarding"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Sparkles size={14} className="text-cerberus-red shrink-0" />
                    <span className="text-sm text-cerberus-steel-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/vortex" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium hover:opacity-90 transition-opacity duration-200">
              Learn More About the Vortex <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* THE CONTINUOUS FUNNEL */}
      <section className="py-20 md:py-32 relative border-t border-white/5">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">The Continuous Funnel</h2>
            <p className="text-cerberus-steel text-lg leading-relaxed">
              Organic content and paid ads drive registrations. Webinars convert cold traffic into warm leads. Warm leads book calls. Calls close deals. Every piece feeds the next.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Content & Ads", desc: "The Vortex creates your posts, scripts, and ad creative. One image + one video per day in 10 minutes." },
              { step: "02", title: "Webinar Registration", desc: "Every piece of content points to your webinar. Evergreen replays run on autopilot with automated follow-up." },
              { step: "03", title: "Watch & Engage", desc: "Rich analytics track minutes watched, replay views, and CTA clicks. Smart sequences adapt based on engagement." },
              { step: "04", title: "Book & Close", desc: "Pre-qualified leads book calls directly. Your pipeline updates automatically. Close deals, not spreadsheets." },
            ].map((item) => (
              <div key={item.step} className="card p-6 relative">
                <span className="font-display font-800 text-5xl text-cerberus-red/10 absolute top-4 right-5">{item.step}</span>
                <div className="relative">
                  <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-cerberus-steel leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="py-20 md:py-32 relative border-t border-white/5">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-dark-400 bg-dark-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brad-brondt-headshot.png" alt="Brad Brondt — Founder, Cerberus CRM" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 text-center md:text-left">
                <p className="font-display font-semibold text-white text-sm">Brad Brondt</p>
                <p className="text-xs text-cerberus-steel-dark">Founder, Cerberus CRM</p>
              </div>
              <div className="mt-6 w-48 md:w-56">
                <VideoPlaceholder title="Watch the Story" aspect="square" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-8">
                <Quote size={24} className="text-cerberus-red/40 shrink-0" />
                <span className="text-xs font-medium text-cerberus-steel-dark uppercase tracking-widest">The Origin Story</span>
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-6 text-white">This thing accidentally became its own business.</h2>
              <div className="space-y-4 text-cerberus-steel leading-relaxed">
                <p>In 2020, I built a marketing system on GoHighLevel for my own mortgage business. Pipeline management, automated follow-up, content generation, referral tracking, webinar funnels — all the stuff I needed to stop depending solely on realtor referrals and build a direct-to-consumer pipeline.</p>
                <p>Then other loan officers in my network kept asking to buy what I had built rather than go through the journey of building it themselves. That&apos;s how Cerberus CRM was born — not from a business plan, but from solving my own problems first and discovering that everyone had the same pain.</p>
                <p className="text-white font-medium">The best businesses are born from solving your own problems. I don&apos;t like doing stuff that takes time — so I build something to fix it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* BOTTOM CTA */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden glow-red">
            <div className="absolute inset-0 gradient-red opacity-10" />
            <div className="absolute inset-0 noise pointer-events-none" />
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">Ready to Stop Posting and Praying?</h2>
              <p className="text-cerberus-steel max-w-xl mx-auto mb-8">Join the mortgage professionals who are building real marketing systems — not just hoping something sticks.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium text-base hover:opacity-90 transition-opacity duration-200">
                  Schedule a Demo <ArrowRight size={18} />
                </Link>
                <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 text-cerberus-steel hover:text-white font-medium text-base transition-all duration-200">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
