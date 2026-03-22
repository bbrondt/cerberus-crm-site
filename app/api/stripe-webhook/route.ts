import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-02-24.acacia",
  });
}

// GHL inbound webhook URL — set this in your environment variables
const GHL_WEBHOOK_URL = process.env.GHL_INBOUND_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      // ─── New subscription payment succeeded ───
      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;

        // Only process subscription invoices
        if (!invoice.subscription) break;

        const customerId = invoice.customer as string;
        const customer = await stripe.customers.retrieve(customerId);

        if (customer.deleted) break;

        const subscription = await stripe.subscriptions.retrieve(
          invoice.subscription as string
        );

        const payload = {
          // ─── Event metadata ───
          event_type: "subscription_payment_succeeded",
          source: "cerberus-crm-website",
          timestamp: new Date().toISOString(),

          // ─── Customer data (for GHL contact creation) ───
          customer_email: customer.email || "",
          customer_name: customer.name || "",
          customer_phone: customer.phone || "",
          stripe_customer_id: customer.id,

          // ─── Subscription data ───
          stripe_subscription_id: subscription.id,
          plan: subscription.metadata?.plan || "cerberus-crm",
          status: subscription.status,
          current_period_start: new Date(
            subscription.current_period_start * 1000
          ).toISOString(),
          current_period_end: new Date(
            subscription.current_period_end * 1000
          ).toISOString(),

          // ─── Invoice / payment data ───
          invoice_id: invoice.id,
          amount_paid: (invoice.amount_paid / 100).toFixed(2),
          currency: invoice.currency,
          invoice_url: invoice.hosted_invoice_url || "",

          // ─── Flags for workflow logic ───
          is_first_payment:
            subscription.metadata?.plan === "cerberus-crm" &&
            invoice.billing_reason === "subscription_create",
        };

        // Forward to GHL inbound webhook
        if (GHL_WEBHOOK_URL) {
          const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!ghlResponse.ok) {
            console.error(
              "GHL webhook failed:",
              ghlResponse.status,
              await ghlResponse.text()
            );
          } else {
            console.log(
              "GHL webhook delivered successfully for:",
              customer.email
            );
          }
        } else {
          console.warn(
            "GHL_INBOUND_WEBHOOK_URL not set — skipping GHL notification"
          );
        }

        break;
      }

      // ─── Subscription cancelled ───
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        const customer = await stripe.customers.retrieve(customerId);

        if (customer.deleted) break;

        const cancelPayload = {
          event_type: "subscription_cancelled",
          source: "cerberus-crm-website",
          timestamp: new Date().toISOString(),
          customer_email: customer.email || "",
          customer_name: customer.name || "",
          stripe_customer_id: customer.id,
          stripe_subscription_id: subscription.id,
          plan: subscription.metadata?.plan || "cerberus-crm",
          cancelled_at: new Date().toISOString(),
        };

        if (GHL_WEBHOOK_URL) {
          await fetch(GHL_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cancelPayload),
          });
        }

        break;
      }

      // ─── Payment failed (dunning) ───
      case "invoice.payment_failed": {
        const failedInvoice = event.data.object as Stripe.Invoice;
        const failedCustomerId = failedInvoice.customer as string;
        const failedCustomer =
          await stripe.customers.retrieve(failedCustomerId);

        if (failedCustomer.deleted) break;

        const failPayload = {
          event_type: "payment_failed",
          source: "cerberus-crm-website",
          timestamp: new Date().toISOString(),
          customer_email: failedCustomer.email || "",
          customer_name: failedCustomer.name || "",
          stripe_customer_id: failedCustomer.id,
          stripe_subscription_id: failedInvoice.subscription as string,
          amount_due: (failedInvoice.amount_due / 100).toFixed(2),
          attempt_count: failedInvoice.attempt_count,
          next_attempt: failedInvoice.next_payment_attempt
            ? new Date(
                failedInvoice.next_payment_attempt * 1000
              ).toISOString()
            : null,
        };

        if (GHL_WEBHOOK_URL) {
          await fetch(GHL_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(failPayload),
          });
        }

        break;
      }

      default:
        // Unhandled event type — log for debugging
        console.log(`Unhandled Stripe event: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
