import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-02-24.acacia",
  });
}

const GHL_WEBHOOK_URL = process.env.GHL_INBOUND_WEBHOOK_URL;

/** Helper: send payload to GHL inbound webhook */
async function sendToGHL(payload: Record<string, unknown>) {
  if (!GHL_WEBHOOK_URL) {
    console.warn("GHL_INBOUND_WEBHOOK_URL not set — skipping");
    return;
  }

  try {
    const res = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("GHL webhook failed:", res.status, await res.text());
    } else {
      console.log("GHL webhook delivered:", payload.event_type, payload.customer_email);
    }
  } catch (err) {
    console.error("GHL webhook network error:", err);
  }
}

/** Helper: get non-deleted customer */
async function getCustomer(stripe: Stripe, customerId: string) {
  const customer = await stripe.customers.retrieve(customerId);
  if (customer.deleted) return null;
  return customer;
}

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
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      // ═══════════════════════════════════════════════════════
      // SUBSCRIPTION: Payment succeeded (first + recurring)
      // ═══════════════════════════════════════════════════════
      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        if (!invoice.subscription) break; // skip non-subscription invoices

        const customer = await getCustomer(stripe, invoice.customer as string);
        if (!customer) break;

        const subscription = await stripe.subscriptions.retrieve(
          invoice.subscription as string
        );

        await sendToGHL({
          event_type: "subscription_payment_succeeded",
          source: "cerberus-crm-website",
          timestamp: new Date().toISOString(),

          // Customer
          customer_email: customer.email || "",
          customer_name: customer.name || "",
          customer_phone: customer.phone || "",
          stripe_customer_id: customer.id,

          // Product identification
          product_slug: subscription.metadata?.product_slug || "",
          plan: subscription.metadata?.plan || "",

          // Subscription
          stripe_subscription_id: subscription.id,
          status: subscription.status,
          current_period_start: new Date(
            subscription.current_period_start * 1000
          ).toISOString(),
          current_period_end: new Date(
            subscription.current_period_end * 1000
          ).toISOString(),

          // Payment
          invoice_id: invoice.id,
          amount_paid: (invoice.amount_paid / 100).toFixed(2),
          currency: invoice.currency,
          invoice_url: invoice.hosted_invoice_url || "",

          // Workflow flags
          is_first_payment: invoice.billing_reason === "subscription_create",
        });

        break;
      }

      // ═══════════════════════════════════════════════════════
      // SUBSCRIPTION: Payment failed (dunning)
      // ═══════════════════════════════════════════════════════
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const customer = await getCustomer(stripe, invoice.customer as string);
        if (!customer) break;

        // Get subscription metadata if this is a subscription invoice
        let productSlug = "";
        let plan = "";
        if (invoice.subscription) {
          const sub = await stripe.subscriptions.retrieve(
            invoice.subscription as string
          );
          productSlug = sub.metadata?.product_slug || "";
          plan = sub.metadata?.plan || "";
        }

        await sendToGHL({
          event_type: "payment_failed",
          source: "cerberus-crm-website",
          timestamp: new Date().toISOString(),

          customer_email: customer.email || "",
          customer_name: customer.name || "",
          stripe_customer_id: customer.id,

          product_slug: productSlug,
          plan,

          stripe_subscription_id: (invoice.subscription as string) || "",
          amount_due: (invoice.amount_due / 100).toFixed(2),
          attempt_count: invoice.attempt_count,
          next_attempt: invoice.next_payment_attempt
            ? new Date(invoice.next_payment_attempt * 1000).toISOString()
            : null,
        });

        break;
      }

      // ═══════════════════════════════════════════════════════
      // SUBSCRIPTION: Status changed (past_due, unpaid, etc.)
      // ═══════════════════════════════════════════════════════
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const customer = await getCustomer(
          stripe,
          subscription.customer as string
        );
        if (!customer) break;

        // Only notify GHL on meaningful status changes
        const prevStatus = (event.data.previous_attributes as Record<string, unknown>)?.status;
        if (prevStatus && prevStatus !== subscription.status) {
          await sendToGHL({
            event_type: "subscription_status_changed",
            source: "cerberus-crm-website",
            timestamp: new Date().toISOString(),

            customer_email: customer.email || "",
            customer_name: customer.name || "",
            stripe_customer_id: customer.id,

            product_slug: subscription.metadata?.product_slug || "",
            plan: subscription.metadata?.plan || "",

            stripe_subscription_id: subscription.id,
            previous_status: prevStatus,
            new_status: subscription.status,
            cancel_at_period_end: subscription.cancel_at_period_end,
          });
        }

        break;
      }

      // ═══════════════════════════════════════════════════════
      // SUBSCRIPTION: Cancelled / deleted
      // ═══════════════════════════════════════════════════════
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customer = await getCustomer(
          stripe,
          subscription.customer as string
        );
        if (!customer) break;

        await sendToGHL({
          event_type: "subscription_cancelled",
          source: "cerberus-crm-website",
          timestamp: new Date().toISOString(),

          customer_email: customer.email || "",
          customer_name: customer.name || "",
          stripe_customer_id: customer.id,

          product_slug: subscription.metadata?.product_slug || "",
          plan: subscription.metadata?.plan || "",

          stripe_subscription_id: subscription.id,
          cancelled_at: new Date().toISOString(),
        });

        break;
      }

      // ═══════════════════════════════════════════════════════
      // SUBSCRIPTION: Upcoming renewal notice
      // ═══════════════════════════════════════════════════════
      case "invoice.upcoming": {
        const invoice = event.data.object as Stripe.Invoice;
        if (!invoice.subscription) break;

        const customer = await getCustomer(stripe, invoice.customer as string);
        if (!customer) break;

        const sub = await stripe.subscriptions.retrieve(
          invoice.subscription as string
        );

        await sendToGHL({
          event_type: "subscription_renewal_upcoming",
          source: "cerberus-crm-website",
          timestamp: new Date().toISOString(),

          customer_email: customer.email || "",
          customer_name: customer.name || "",
          stripe_customer_id: customer.id,

          product_slug: sub.metadata?.product_slug || "",
          plan: sub.metadata?.plan || "",

          stripe_subscription_id: sub.id,
          amount_due: (invoice.amount_due / 100).toFixed(2),
          next_payment_date: invoice.next_payment_attempt
            ? new Date(invoice.next_payment_attempt * 1000).toISOString()
            : null,
        });

        break;
      }

      // ═══════════════════════════════════════════════════════
      // ONE-TIME: Payment succeeded
      // ═══════════════════════════════════════════════════════
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        // Skip subscription-related payment intents (handled by invoice.payment_succeeded)
        if (paymentIntent.invoice) break;

        // Only process our website payments
        if (paymentIntent.metadata?.source !== "cerberus-crm-website") break;

        const customer = paymentIntent.customer
          ? await getCustomer(stripe, paymentIntent.customer as string)
          : null;

        await sendToGHL({
          event_type: "one_time_payment_succeeded",
          source: "cerberus-crm-website",
          timestamp: new Date().toISOString(),

          customer_email:
            customer?.email ||
            paymentIntent.metadata?.customer_email ||
            "",
          customer_name:
            customer?.name ||
            paymentIntent.metadata?.customer_name ||
            "",
          stripe_customer_id: customer?.id || "",

          product_slug: paymentIntent.metadata?.product_slug || "",
          plan: paymentIntent.metadata?.plan || "",

          payment_intent_id: paymentIntent.id,
          amount_paid: (paymentIntent.amount / 100).toFixed(2),
          currency: paymentIntent.currency,
        });

        break;
      }

      // ═══════════════════════════════════════════════════════
      // DISPUTE: Chargeback created
      // ═══════════════════════════════════════════════════════
      case "charge.dispute.created": {
        const dispute = event.data.object as Stripe.Dispute;
        const charge = await stripe.charges.retrieve(dispute.charge as string);
        const customer = charge.customer
          ? await getCustomer(stripe, charge.customer as string)
          : null;

        await sendToGHL({
          event_type: "chargeback_created",
          source: "cerberus-crm-website",
          timestamp: new Date().toISOString(),

          customer_email: customer?.email || "",
          customer_name: customer?.name || "",
          stripe_customer_id: customer?.id || "",

          dispute_id: dispute.id,
          amount: (dispute.amount / 100).toFixed(2),
          reason: dispute.reason,
          status: dispute.status,
        });

        break;
      }

      default:
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
