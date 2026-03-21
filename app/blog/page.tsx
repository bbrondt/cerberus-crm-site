import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "why-loan-officers-need-marketing-system",
    title: "Why Every Loan Officer Needs a Marketing Flywheel (Not Just a CRM)",
    excerpt:
      "Most CRMs are glorified contact lists. A real marketing flywheel connects your content, ads, webinars, and follow-up into a system that compounds over time — not just stores phone numbers.",
    date: "2026-03-20",
    category: "Marketing",
  },
  {
    slug: "four-campaign-facebook-ad-framework",
    title: "The 4-Campaign Facebook Ad Framework for Mortgage Professionals",
    excerpt:
      "Omnipresence, Webinar Enrollment, Creative Testing, Scaling — the proven structure that turns cold traffic into warm leads. Launch 10 new ads every two weeks. Move winners to scaling. Repeat.",
    date: "2026-03-15",
    category: "Advertising",
  },
  {
    slug: "ai-content-mortgage-marketing",
    title: "How to Use AI Content Without Sounding Like a Robot",
    excerpt:
      "AI-generated content is only as good as the person directing it. Analyze your voice, feed it your transcripts, and create content that matches how you actually talk — not generic fluff.",
    date: "2026-03-10",
    category: "Content",
  },
  {
    slug: "self-employed-borrower-webinar-strategy",
    title:
      "The Self-Employed Borrower Webinar: How to Close One Deal Every Two Webinars",
    excerpt:
      "The entire conventional mortgage system was designed for W2 employees. Self-employed borrowers are underserved and hungry for solutions. Here's the webinar framework that converts them.",
    date: "2026-03-05",
    category: "Webinars",
  },
  {
    slug: "stop-depending-on-realtor-referrals",
    title: "Stop Depending on Realtor Referrals. Build a Direct Pipeline.",
    excerpt:
      "Referral partners are great. But if your entire business depends on someone else sending you leads, you don't have a business — you have a dependency. Here's how to build both.",
    date: "2026-02-28",
    category: "Strategy",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-6">
            The Cerberus <span className="text-cerberus-steel">Blog</span>
          </h1>
          <p className="text-lg text-cerberus-steel max-w-xl mx-auto">
            Marketing strategies, industry insights, and real talk for mortgage
            professionals who want to grow — not just post and pray.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block card-hover p-7 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-cerberus-red/10 text-cerberus-red-light">
                    {post.category}
                  </span>
                  <span className="text-xs text-cerberus-steel-dark">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="font-display font-semibold text-xl text-white mb-2 group-hover:text-cerberus-red-light transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-sm text-cerberus-steel leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-cerberus-red-light group-hover:gap-2.5 transition-all duration-200">
                  Read More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
