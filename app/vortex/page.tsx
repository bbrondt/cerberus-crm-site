import Link from "next/link";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import {
  ArrowRight,
  Sparkles,
  Target,
  Youtube,
  Search,
  Image,
  PenTool,
  Mic,
  Mail,
  BookOpen,
  Calculator,
  FileText,
  Users,
  Check,
  Zap,
} from "lucide-react";

/* ─── Vortex content tools with detail ─── */
const contentTools = [
  {
    icon: Target,
    title: "AI Ad Creator (Ugly Ads)",
    tagline: "3–20 Facebook ads in under 2 minutes",
    description:
      "Describe what you're promoting, pick a funnel stage mix (cold, warm, hot), and generate. Each ad gets unique primary text, headlines, descriptions, and Gemini image prompts. Test 10 new creatives every two weeks without touching Canva.",
    videoTitle: "Watch: 10 Ads Generated in 2 Minutes",
  },
  {
    icon: Youtube,
    title: "YouTube Script Generator",
    tagline: "Script → thumbnail → blog in one click",
    description:
      "Enter a topic and target audience. Get a complete script with hooks, CTAs, SEO title, description, tags, thumbnail prompt, and a one-click blog post that publishes directly to your CRM. Three length modes: 5-8, 10-15, and 20+ minutes.",
    videoTitle: "Watch: YouTube Script to Published Blog",
  },
  {
    icon: Search,
    title: "Content Plan Generator",
    tagline: "60+ topics → 240+ pieces of content",
    description:
      "Uses the belief-breaking framework to research and organize topics across 4 categories: Big Idea, Vehicle, Internal Beliefs, and External Beliefs. Each topic becomes a short-form script, long-form script, YouTube script, and email — one input, months of content.",
    videoTitle: "Watch: 240 Pieces of Content From One Input",
  },
  {
    icon: Image,
    title: "AI Headshot & Image Creator",
    tagline: "Professional photos without a photographer",
    description:
      "Upload reference photos once. Generate unlimited headshots in any outfit, background, and style — headshot, mid-body, or full-body. Organic post images in 3 modes: character reference, custom upload, or topic scene. Multi-size output for every platform.",
    videoTitle: "Watch: AI Headshots vs. Real Headshots",
  },
  {
    icon: PenTool,
    title: "Organic Post Creator",
    tagline: "Image + video posts for every platform",
    description:
      "Image posts with AI-generated visuals and video scripts with platform-specific captions for TikTok, Reels, Shorts, and LinkedIn. Three post types (thought, story, value), four copy formats (organic, AIDA, PAS, story hook), and thumbnail generation.",
    videoTitle: "Watch: Organic Content Engine Demo",
  },
  {
    icon: Mail,
    title: "Email Writer",
    tagline: "Emails that sound like you, not a robot",
    description:
      "Paste a URL and the AI reads the full article, then writes a high-converting email in your natural voice using that context. Reply-based CTAs optimized for inbox deliverability. Lens and angle framework ensures every email hits differently.",
    videoTitle: "Watch: Email Writer with URL Reading",
  },
  {
    icon: Mic,
    title: "Webinar Framework Builder",
    tagline: "Concept to finished webinar in a day",
    description:
      "Pick your dream buyer, offer, and geographic market. AI researches the topic, generates a 30-40 slide outline with presenter notes, creates registration page copy, email sequences, and all marketing assets. Evergreen or date-specific.",
    videoTitle: "Watch: Full Webinar Package Generated",
  },
  {
    icon: BookOpen,
    title: "Guide Builder",
    tagline: "12-page lead magnets in 90 seconds",
    description:
      "Enter a topic and audience. Get a 12-14 page branded PDF guide that answers real questions and positions you as the expert. Use as a lead magnet in funnels, ads, and social posts.",
    videoTitle: "Watch: Guide Builder Output",
  },
  {
    icon: Calculator,
    title: "Calculator Builder",
    tagline: "Interactive tools that capture leads",
    description:
      "Describe what you want to calculate. Get a fully functional interactive HTML calculator with your brand colors and a CTA button linking to your booking page. Rent vs. buy, affordability, refinance break-even — any mortgage scenario.",
    videoTitle: "Watch: Calculator Builder Demo",
  },
];

/* ─── The math ─── */
const contentMath = [
  { label: "Content Topics Generated", value: "60+" },
  { label: "Content Pieces Per Topic", value: "4" },
  { label: "Total Pieces From One Input", value: "240+" },
  { label: "Facebook Ads Per Batch", value: "3–20" },
  { label: "Creative Lenses", value: "4" },
  { label: "Content Angles", value: "19" },
];

export default function VortexPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cerberus-red/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cerberus-red/10 border border-cerberus-red/20 mb-8">
              <Sparkles size={14} className="text-cerberus-red" />
              <span className="text-xs font-medium text-cerberus-red-light tracking-wide uppercase">
                The Vortex — AI Content Engine
              </span>
            </div>

            <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              Stop Creating Content.
              <br />
              <span className="text-gradient">Start Generating It.</span>
            </h1>

            <p className="text-lg md:text-xl text-cerberus-steel max-w-2xl mx-auto leading-relaxed mb-10">
              12+ AI tools that create ads, scripts, social posts, emails,
              guides, headshots, and calculators — all matching your voice. One
              input creates months of content across every channel.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium text-base hover:opacity-90 transition-opacity duration-200"
              >
                Schedule a Demo
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-dark-400 text-cerberus-steel hover:text-white hover:border-cerberus-steel/30 font-medium text-base transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Hero Video */}
          <div className="mt-16 max-w-4xl mx-auto">
            <VideoPlaceholder
              title="Watch: The Vortex Content Engine Demo"
              description="Full walkthrough — ads, scripts, headshots, and the content plan generator"
            />
          </div>
        </div>
      </section>

      {/* ═══ THE MATH ═══ */}
      <section className="py-12 border-y border-cerberus-red/10 bg-cerberus-red/[0.03]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {contentMath.map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display font-800 text-3xl md:text-4xl text-white">
                  {item.value}
                </p>
                <p className="text-xs text-cerberus-steel-dark mt-1 leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOOLS DEEP DIVE ═══ */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
              Every Tool. In Detail.
            </h2>
            <p className="text-cerberus-steel max-w-2xl mx-auto">
              Each tool is purpose-built for mortgage marketing. No generic
              templates — every output is tailored to your audience, voice, and
              business.
            </p>
          </div>

          <div className="space-y-24">
            {contentTools.map((tool, index) => {
              const isEven = index % 2 === 0;
              const Icon = tool.icon;

              return (
                <div
                  key={tool.title}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-10 lg:gap-16 items-center`}
                >
                  {/* Video */}
                  <div className="w-full lg:w-3/5">
                    <VideoPlaceholder title={tool.videoTitle} />
                  </div>

                  {/* Info */}
                  <div className="w-full lg:w-2/5">
                    <div className="w-12 h-12 rounded-xl bg-cerberus-red/10 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-cerberus-red" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-1">
                      {tool.title}
                    </h3>
                    <p className="text-sm font-medium text-cerberus-red-light mb-4">
                      {tool.tagline}
                    </p>
                    <p className="text-cerberus-steel leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ LENS & ANGLE FRAMEWORK ═══ */}
      <section className="py-20 md:py-32 border-t border-white/5">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
              The Lens & Angle Framework
            </h2>
            <p className="text-cerberus-steel text-lg leading-relaxed">
              Most AI tools give you one take on a topic. The Vortex gives you
              76 — 4 creative lenses multiplied by 19 content angles. The same
              topic generates completely different content every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Lenses */}
            <div className="card p-8">
              <p className="text-xs font-medium text-cerberus-red-light uppercase tracking-widest mb-6">
                4 Creative Lenses
              </p>
              <div className="space-y-4">
                {[
                  {
                    name: "Actionable",
                    desc: "How-to steps your audience can implement today",
                  },
                  {
                    name: "Analytical",
                    desc: "Data, benchmarks, and numbers that prove the point",
                  },
                  {
                    name: "Aspirational",
                    desc: "Transformation stories that inspire action",
                  },
                  {
                    name: "Anthropological",
                    desc: "Psychology and behavior — why people do what they do",
                  },
                ].map((lens) => (
                  <div key={lens.name} className="flex items-start gap-3">
                    <Sparkles
                      size={16}
                      className="text-cerberus-red mt-1 shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {lens.name}
                      </p>
                      <p className="text-xs text-cerberus-steel-dark">
                        {lens.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Angles */}
            <div className="card p-8">
              <p className="text-xs font-medium text-cerberus-red-light uppercase tracking-widest mb-6">
                19 Content Angles
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Contrarian",
                  "Myth-Bust",
                  "Hidden Cost",
                  "Trend/Shift",
                  "Root-Cause",
                  "Constraint Removal",
                  "Failure Mode",
                  "Opportunity Cost",
                  "Mechanism/Secret",
                  "Speed",
                  "Specific Result Proof",
                  "Time Objection",
                  "Complexity Objection",
                  "Risk Objection",
                  "Skepticism Objection",
                  "Value Stack",
                  "Urgency",
                  "Direct Response",
                  "Story Hook",
                ].map((angle) => (
                  <span
                    key={angle}
                    className="px-3 py-1.5 rounded-full bg-dark-600 border border-dark-400 text-xs text-cerberus-steel-light"
                  >
                    {angle}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ALSO INCLUDED ═══ */}
      <section className="py-20 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
              More Than Just Tools
            </h2>
            <p className="text-cerberus-steel max-w-xl mx-auto">
              The Vortex isn&apos;t just software — it includes training,
              strategy, and support to make sure you actually use it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Target,
                title: "4-Campaign Ad Framework",
                desc: "Omnipresence, Webinar Enrollment, Creative Testing, and Scaling — the complete paid traffic system with training.",
              },
              {
                icon: Zap,
                title: "Vortex Training Program",
                desc: "Step-by-step training on every tool, the lens/angle framework, content strategy, and the flywheel methodology.",
              },
              {
                icon: Users,
                title: "Weekly Strategy Call",
                desc: "Live weekly call specifically for Vortex members. Content review, strategy, Q&A, and accountability.",
              },
              {
                icon: Sparkles,
                title: "Priority Support",
                desc: "Faster response times and direct access for Vortex-specific questions and troubleshooting.",
              },
              {
                icon: Check,
                title: "Done-for-You Onboarding",
                desc: "We configure your content engine, set up your profile, upload reference photos, and walk you through every tool.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-7">
                <div className="w-10 h-10 rounded-lg bg-cerberus-red/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-cerberus-red" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden glow-red">
            <div className="absolute inset-0 gradient-red opacity-10" />
            <div className="absolute inset-0 noise pointer-events-none" />
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <Sparkles
                size={32}
                className="text-cerberus-red mx-auto mb-6"
              />
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
                Ready to Add the Vortex?
              </h2>
              <p className="text-cerberus-steel max-w-xl mx-auto mb-8">
                Schedule a demo and see every tool in action. We&apos;ll walk
                through your business, show you the content engine, and explain
                exactly how it fits your goals.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg gradient-red text-white font-medium text-base hover:opacity-90 transition-opacity duration-200"
              >
                Schedule a Demo
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
