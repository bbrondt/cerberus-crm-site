/**
 * PRODUCT CATALOG
 * ───────────────
 * Single source of truth for all Cerberus products.
 *
 * To add a new product:
 *   1. Create the product + price in Stripe Dashboard
 *   2. Add the env var: NEXT_PUBLIC_STRIPE_PRICE_<SLUG_UPPER> = price_...
 *   3. Add a new entry to this catalog
 *   4. That's it — /checkout/[your-slug] is live
 *
 * To change a price:
 *   1. Create a new Price in Stripe (old subscribers keep their price)
 *   2. Update the env var with the new price_ ID
 *   3. Update displayPrice below
 */

export type BillingInterval = "month" | "year" | "one_time";

export interface ProductConfig {
  /** URL slug — used in /checkout/[slug] */
  slug: string;
  /** Display name */
  name: string;
  /** Short tagline for the checkout page */
  description: string;
  /** What to show as the price (e.g. "$497", "$2,997") */
  displayPrice: string;
  /** Billing label (e.g. "/mo", "/yr", "one-time") */
  billingLabel: string;
  /** Billing interval for Stripe logic */
  interval: BillingInterval;
  /** Env var name that holds the Stripe Price ID */
  priceIdEnvVar: string;
  /** Features list shown on checkout sidebar */
  features: string[];
  /** CTA button text on checkout */
  ctaText: string;
  /** Plan identifier sent to GHL in webhook metadata */
  ghlPlanName: string;
  /** Whether this product is currently available for purchase */
  active: boolean;
  /** Optional: if true, checkout is disabled and user is sent to a booking link */
  requiresDemo?: boolean;
  /** Optional: demo/booking URL if requiresDemo is true */
  demoUrl?: string;
}

export const productCatalog: Record<string, ProductConfig> = {
  "mlo-saas": {
    slug: "mlo-saas",
    name: "Cerberus CRM",
    description:
      "The complete CRM and marketing automation platform built for mortgage professionals.",
    displayPrice: "$497",
    billingLabel: "/mo",
    interval: "month",
    priceIdEnvVar: "NEXT_PUBLIC_STRIPE_PRICE_MLO_SAAS",
    features: [
      "2 Pre-Built Pipelines (Purchase & Refinance)",
      "69 Automated Workflows",
      "AI-Powered Lead Nurture (Email + SMS)",
      "Referral Partner Management System",
      "10 Lead Capture Forms & Survey Builder",
      "Email & SMS Marketing (A2P Compliant)",
      "Webinar System (Consumer + Realtor)",
      "6 Pre-Built Funnel Templates",
      "Website & Funnel Builder",
      "Mortgage Calculators (Embeddable)",
      "Digital Business Card (vCard)",
      "Reputation Management & Review Campaigns",
      "Calendar & Appointment Booking",
      "59 Contact Tags & Smart Lists",
      "Flywheel Dashboard & KPI Tracking",
      "Community Access & Weekly Call",
      "24/7 Support",
      "Done-for-You Onboarding",
    ],
    ctaText: "Start My Subscription",
    ghlPlanName: "mlo-saas",
    active: true,
  },

  vortex: {
    slug: "vortex",
    name: "Cerberus + Vortex",
    description:
      "Everything in Cerberus CRM plus the full AI-powered Vortex content engine with 12+ generation tools and the complete marketing flywheel.",
    displayPrice: "$497",
    billingLabel: "/mo + Vortex activation",
    interval: "month",
    priceIdEnvVar: "NEXT_PUBLIC_STRIPE_PRICE_VORTEX",
    features: [
      "Everything in Cerberus CRM",
      "AI Content Engine — 12+ Generation Tools",
      "AI Ad Creator — 3–20 Ads in Under 2 Minutes",
      "AI Headshot & Image Generator",
      "YouTube Script Generator + Blog Auto-Publishing",
      "Content Plan Generator (60+ Topics → 240+ Pieces)",
      "Video Script Generator (Short Form + Long Form)",
      "Organic Post Creator (Image + Video + Captions)",
      "Email Writer (with URL Context Reading)",
      "Guide Builder (12-Page Lead Magnets)",
      "Calculator Builder (Interactive HTML Tools)",
      "Webinar Framework Builder",
      "4-Campaign Facebook Ad Framework + Training",
      "Vortex Training Program",
      "Weekly Vortex Strategy Call",
      "Priority Support",
    ],
    ctaText: "Learn More & Schedule a Demo",
    ghlPlanName: "vortex",
    active: true,
    requiresDemo: true,
    demoUrl: "/demo",
  },

  // ─── EXAMPLE: Future products ─────────────────────────────
  // Uncomment and fill in when ready:
  //
  // "webinar-course": {
  //   slug: "webinar-course",
  //   name: "The Mortgage Webinar Ad System",
  //   description: "The complete course on building webinar funnels that convert.",
  //   displayPrice: "$297",
  //   billingLabel: "one-time",
  //   interval: "one_time",
  //   priceIdEnvVar: "NEXT_PUBLIC_STRIPE_PRICE_WEBINAR_COURSE",
  //   features: [
  //     "4-Campaign Ad Framework Curriculum",
  //     "Production Workflow & Recording Checklist",
  //     "Funnel Templates",
  //     "Email/SMS Nurture Sequences",
  //     "Lifetime Access",
  //   ],
  //   ctaText: "Buy Now",
  //   ghlPlanName: "webinar-course",
  //   active: true,
  // },
  //
  // "done-for-you": {
  //   slug: "done-for-you",
  //   name: "Done-For-You Flywheel Setup",
  //   description: "We build your entire marketing flywheel for you.",
  //   displayPrice: "$5,000",
  //   billingLabel: "one-time",
  //   interval: "one_time",
  //   priceIdEnvVar: "NEXT_PUBLIC_STRIPE_PRICE_DFY",
  //   features: [
  //     "Complete CRM Configuration",
  //     "Custom Funnel Build",
  //     "Ad Creative Package",
  //     "Webinar Setup",
  //     "90-Day Support",
  //   ],
  //   ctaText: "Buy Now",
  //   ghlPlanName: "done-for-you",
  //   active: true,
  // },
};

/** Get a product by slug, returns undefined if not found or inactive */
export function getProduct(slug: string): ProductConfig | undefined {
  const product = productCatalog[slug];
  if (!product || !product.active) return undefined;
  return product;
}

/** Get all active products */
export function getActiveProducts(): ProductConfig[] {
  return Object.values(productCatalog).filter((p) => p.active);
}
