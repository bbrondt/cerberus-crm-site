import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-02-24.acacia",
  });
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const {
      priceId,
      customerEmail,
      customerName,
      productSlug,
      ghlPlanName,
      interval,
    } = await req.json();

    if (!priceId) {
      return NextResponse.json(
        { error: "Missing price ID" },
        { status: 400 }
      );
    }

    // ─── Find or create customer ───
    let customer: Stripe.Customer;
    const existingCustomers = await stripe.customers.list({
      email: customerEmail,
      limit: 1,
    });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
      if (customerName && customer.name !== customerName) {
        customer = await stripe.customers.update(customer.id, {
          name: customerName,
        });
      }
    } else {
      customer = await stripe.customers.create({
        email: customerEmail,
        name: customerName,
        metadata: {
          source: "cerberus-crm-website",
        },
      });
    }

    const metadata = {
      source: "cerberus-crm-website",
      product_slug: productSlug || "",
      plan: ghlPlanName || productSlug || "",
      customer_email: customerEmail || "",
      customer_name: customerName || "",
    };

    // ─── Recurring subscription ───
    if (interval === "month" || interval === "year") {
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        payment_behavior: "default_incomplete",
        payment_settings: {
          save_default_payment_method: "on_subscription",
        },
        metadata,
        expand: ["latest_invoice.payment_intent"],
      });

      const invoice = subscription.latest_invoice as Stripe.Invoice;
      const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent;

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        subscriptionId: subscription.id,
        type: "subscription",
      });
    }

    // ─── One-time payment ───
    const price = await stripe.prices.retrieve(priceId);

    const paymentIntent = await stripe.paymentIntents.create({
      customer: customer.id,
      amount: price.unit_amount!,
      currency: price.currency,
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      type: "one_time",
    });
  } catch (err) {
    console.error("Stripe checkout session error:", err);

    const message =
      err instanceof Stripe.errors.StripeError
        ? err.message
        : "Internal server error";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
