import { NextRequest, NextResponse } from "next/server";

const GHL_WEBHOOK_URL = process.env.GHL_INBOUND_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      company,
      productSlug,
      productName,
      ghlPlanName,
    } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const payload = {
      event_type: "checkout_started",
      source: "cerberus-crm-website",
      timestamp: new Date().toISOString(),

      // Contact data
      customer_name: name || "",
      customer_email: email || "",
      customer_phone: phone || "",
      customer_company: company || "",

      // Product context — so GHL can tag and route correctly
      product_slug: productSlug || "",
      product_name: productName || "",
      plan: ghlPlanName || productSlug || "",
    };

    if (GHL_WEBHOOK_URL) {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("GHL lead capture failed:", res.status, await res.text());
      } else {
        console.log("GHL lead captured:", email, productSlug);
      }
    } else {
      console.warn("GHL_INBOUND_WEBHOOK_URL not set — skipping lead capture");
    }

    return NextResponse.json({ captured: true });
  } catch (err) {
    console.error("Lead capture error:", err);
    return NextResponse.json(
      { error: "Lead capture failed" },
      { status: 500 }
    );
  }
}
