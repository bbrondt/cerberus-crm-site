import {
  Mail,
  Star,
  Receipt,
  Key,
  FileText,
  Newspaper,
  Bell,
  ArrowRight,
  Check,
  Zap,
  Clock,
  DollarSign,
  ChevronDown,
} from "lucide-react";

const categories = [
  {
    icon: Star,
    name: "ACTION NOW",
    description:
      "Real humans who need your response. Stays in your inbox.",
    action: "Stays in inbox",
    highlight: true,
  },
  {
    icon: Receipt,
    name: "BILLING & RECEIPTS",
    description:
      "Invoices, payments, Stripe notifications, subscription renewals.",
    action: "Labeled & archived",
    highlight: false,
  },
  {
    icon: Key,
    name: "LOGIN CREDENTIALS",
    description:
      "License keys, API keys, password resets, account activations.",
    action: "Labeled & archived",
    highlight: false,
  },
  {
    icon: FileText,
    name: "LEGAL & LICENSING",
    description:
      "Contracts, TOS updates, compliance notices, partner agreements.",
    action: "Labeled & archived",
    highlight: false,
  },
  {
    icon: Newspaper,
    name: "NEWSLETTER",
    description:
      "Digests, promos, vendor pitches, marketing emails, cold outreach.",
    action: "Labeled & archived",
    highlight: false,
  },
  {
    icon: Bell,
    name: "PLATFORM NOTIFICATIONS",
    description:
      "Zoom, GitHub, Slack, CRM alerts, deploy notifications, error logs.",
    action: "Labeled & archived",
    highlight: false,
  },
];

const inboxEmails = [
  { sender: "Best Buy", subject: "Tech Fest Sale — Save big on electronics 📱", noise: true },
  { sender: "Stripe", subject: "Your $143.44 payout is on the way", noise: true },
  { sender: "Zoom", subject: "Meeting recording is ready", noise: true },
  { sender: "Sarah Miller", subject: "Re: Quick question about my account", noise: false },
  { sender: "Skool", subject: "Weekly digest — 942 posts, 20504 comments", noise: true },
  { sender: "Cloudflare", subject: "Your domain is now active", noise: true },
  { sender: "James Parker", subject: "Hey — can we hop on a call this week?", noise: false },
  { sender: "Pinterest", subject: "Business casual looks for you", noise: true },
  { sender: "Make.com", subject: "🛑 Encountered 4 errors in your scenario", noise: true },
  { sender: "Lori Kolbye", subject: "Accepted: Discovery Call — Thursday 4:30 PM", noise: false },
];

const steps = [
  {
    num: "1",
    title: "Import two files into n8n",
    desc: "Download the JSON files, open n8n, click Import. Done.",
  },
  {
    num: "2",
    title: "Connect Gmail & Anthropic",
    desc: "Sign in with Google and paste your API key. Two minutes.",
  },
  {
    num: "3",
    title: "Run the helper workflow",
    desc: "One click generates all the code snippets you need.",
  },
  {
    num: "4",
    title: "Paste, activate, walk away",
    desc: "Copy three values, toggle it on. Your inbox is automated.",
  },
];

const includes = [
  {
    title: "AI Inbox Agent Workflow",
    desc: "The main n8n workflow that classifies, labels, and archives automatically.",
  },
  {
    title: "Setup Helper Workflow",
    desc: "Generates your Gmail label IDs and search filter. No manual lookup.",
  },
  {
    title: "Step-by-Step Video Tutorial",
    desc: "Watch every click. Zero to working agent in one video.",
  },
  {
    title: "Built-in Setup Guide",
    desc: "Instructions embedded as sticky notes inside the workflow.",
  },
  {
    title: "Customizable AI Prompt",
    desc: "Change categories, add rules, make it yours. Plain English.",
  },
];

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. You import a file, connect two accounts, and follow the setup video. Everything is step by step.",
  },
  {
    q: "Does this work with Outlook?",
    a: "Currently Gmail only. Outlook support may come in the future.",
  },
  {
    q: "What's n8n?",
    a: "A workflow automation platform — like Zapier or Make, but more powerful. Cloud version is ~$24/month, or self-host for free.",
  },
  {
    q: "What if I want different categories?",
    a: "The AI classification prompt is fully editable. Change, add, or remove categories in plain English.",
  },
  {
    q: "What happens to archived emails?",
    a: "They stay in your Gmail with labels. Click any label to find them. They're just not cluttering your inbox.",
  },
  {
    q: "How accurate is it?",
    a: "Very. Claude AI reads the sender, subject, and body. It understands context, not just keywords.",
  },
];

export default function InboxAgentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cerberus-red/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cerberus-red/10 border border-cerberus-red/20 text-cerberus-red text-sm font-medium mb-8">
            <Mail size={16} />
            n8n + Claude AI Workflow
          </div>
          <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight">
            What If the Only Emails in Your Inbox Were the Ones That{" "}
            <span className="text-cerberus-red">Actually Mattered?</span>
          </h1>
          <p className="text-lg md:text-xl text-cerberus-steel max-w-2xl mx-auto mb-10 leading-relaxed">
            The AI Inbox Agent classifies, labels, and cleans your Gmail
            automatically — so the only emails in your inbox are the ones
            that need your attention.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-red text-white font-semibold text-lg hover:opacity-90 transition-opacity glow-red"
          >
            Get the AI Inbox Agent — $27
            <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-sm text-cerberus-steel-dark">
            Set it up in 15 minutes. Runs forever.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-cerberus-red font-semibold mb-4">
            The Problem
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl mb-6">
            Your inbox is a war zone.
          </h2>
          <p className="text-cerberus-steel text-lg mb-4">
            You open Gmail. 47 new emails. 3 of them actually matter. The
            other 44 are receipts, newsletters, platform notifications,
            and vendor pitches that bury the emails you need to respond to.
          </p>
          <p className="text-cerberus-steel text-lg mb-10">
            So you spend 20 minutes scrolling, scanning, and hoping you
            didn&apos;t miss the one email from a client waiting 3 days for a
            response.
          </p>

          {/* Inbox Demo */}
          <div className="card p-6 md:p-8">
            <div className="space-y-0">
              {inboxEmails.map((email, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0"
                >
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      email.noise ? "bg-dark-400" : "bg-cerberus-red"
                    }`}
                  />
                  <span className="text-sm font-medium w-32 md:w-44 flex-shrink-0 truncate">
                    {email.sender}
                  </span>
                  <span className="text-sm text-cerberus-steel-dark truncate">
                    {email.subject}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-cerberus-steel-dark mt-4">
              <span className="text-cerberus-red">●</span> = needs your
              attention&nbsp;&nbsp;&nbsp;
              <span className="text-dark-400">●</span> = noise
            </p>
          </div>
          <p className="text-cerberus-steel text-lg mt-8 text-center">
            You didn&apos;t sign up to be an email sorter. You signed up to
            run a business.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-cerberus-red font-semibold mb-4">
            The Solution
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl mb-6">
            AI that reads, classifies, and cleans your inbox automatically.
          </h2>
          <p className="text-cerberus-steel text-lg mb-12">
            Every 5 minutes, the AI Inbox Agent pulls your unprocessed
            emails, reads each one, classifies it, applies the right label,
            and removes everything except action-required emails from your
            inbox. When you open Gmail, you only see what matters.
          </p>

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`card p-6 transition-all duration-300 hover:border-cerberus-red/30 ${
                  cat.highlight
                    ? "border-l-4 border-l-cerberus-red"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      cat.highlight
                        ? "bg-cerberus-red/10 text-cerberus-red"
                        : "bg-dark-500 text-cerberus-steel"
                    }`}
                  >
                    <cat.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-sm mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-cerberus-steel-dark leading-relaxed">
                      {cat.description}
                    </p>
                    <p
                      className={`text-xs font-medium mt-2 ${
                        cat.highlight
                          ? "text-cerberus-red"
                          : "text-cerberus-steel-dark"
                      }`}
                    >
                      {cat.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-cerberus-red font-semibold mb-4">
            How It Works
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl mb-12">
            Set it up in 15 minutes.{" "}
            <span className="text-cerberus-steel">No coding.</span>
          </h2>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-cerberus-red/10 border border-cerberus-red/20 flex items-center justify-center font-display font-700 text-xl text-cerberus-red flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-display font-600 text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-cerberus-steel text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-cerberus-red font-semibold mb-4">
            What You Get
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl mb-10">
            Everything you need to automate your inbox.
          </h2>

          <div className="space-y-0">
            {includes.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 py-5 border-b border-white/5 last:border-0"
              >
                <Check
                  size={20}
                  className="text-cerberus-red flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-semibold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cerberus-steel-dark">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-20 md:py-28 border-t border-white/5"
      >
        <div className="max-w-2xl mx-auto px-6">
          <div className="card border-cerberus-red/30 p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 gradient-red" />
            <p className="font-display font-800 text-6xl md:text-7xl mb-2">
              $27
            </p>
            <p className="text-cerberus-steel mb-8">
              One-time payment. Runs forever.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl gradient-red text-white font-semibold text-lg hover:opacity-90 transition-opacity glow-red mb-10"
            >
              Get the AI Inbox Agent
              <ArrowRight size={20} />
            </a>

            <div className="text-left max-w-sm mx-auto space-y-3 text-sm">
              <p className="text-cerberus-steel-dark font-medium pb-2 border-b border-white/5">
                Ongoing platform costs (not paid to us):
              </p>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-cerberus-steel">n8n (cloud)</span>
                <span className="font-medium">~$24/mo</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-cerberus-steel">Anthropic API</span>
                <span className="font-medium">~$5-15/mo</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-cerberus-steel">Gmail</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between py-3 border-t border-white/10 mt-2">
                <span className="text-cerberus-steel font-medium">
                  Total daily cost
                </span>
                <span className="font-semibold text-cerberus-red">
                  {"< $1/day"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-cerberus-red font-semibold mb-4">
            FAQ
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl mb-10">
            Common questions.
          </h2>

          <div className="space-y-0">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="py-6 border-b border-white/5 last:border-0"
              >
                <h3 className="font-display font-600 text-base mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-cerberus-steel leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-cerberus-red/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-800 text-3xl md:text-4xl mb-4">
            Stop sorting email.
            <br />
            <span className="text-cerberus-steel">
              Start running your business.
            </span>
          </h2>
          <p className="text-cerberus-steel text-lg mb-8">
            15 minutes to set up. Runs on autopilot. Less than $1 a day.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl gradient-red text-white font-semibold text-lg hover:opacity-90 transition-opacity glow-red"
          >
            Get the AI Inbox Agent — $27
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
}
