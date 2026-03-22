import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const { priceId, customerEmail, customerName } = await req.json();

    if (!priceId) {
      return NextResponse.json(
        { error: "Missing price ID" },
        { status: 400 }
      );
    }

    // Check if customer already exists by email
    let customer: Stripe.Customer;
    const existingCustomers = await stripe.customers.list({
      email: customerEmail,
      limit: 1,
    });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
      // Update name if provided
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

    // Create the subscription with payment
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_behavior: "default_incomplete",
      payment_settings: {
        save_default_payment_method: "on_subscription",
      },
      metadata: {
        source: "cerberus-crm-website",
        plan: "cerberus-crm",
        customer_email: customerEmail || "",
        customer_name: customerName || "",
      },
      expand: ["latest_invoice.payment_intent"],
    });

    const invoice = subscription.latest_invoice as Stripe.Invoice;
    const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent;

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      subscriptionId: subscription.id,
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
