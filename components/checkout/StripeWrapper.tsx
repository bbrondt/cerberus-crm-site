"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Loader2 } from "lucide-react";
import type { ProductConfig } from "@/lib/products";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface StripeWrapperProps {
  customerEmail?: string;
  customerName?: string;
  product: ProductConfig;
}

export default function StripeWrapper({
  customerEmail,
  customerName,
  product,
}: StripeWrapperProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const priceId = process.env[product.priceIdEnvVar];

  useEffect(() => {
    const createSession = async () => {
      try {
        const res = await fetch("/api/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            priceId,
            customerEmail,
            customerName,
            productSlug: product.slug,
            ghlPlanName: product.ghlPlanName,
            interval: product.interval,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to initialize checkout");
        }

        setClientSecret(data.clientSecret);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to initialize checkout"
        );
      }
    };

    createSession();
  }, [customerEmail, customerName, priceId, product.slug, product.ghlPlanName, product.interval]);

  if (error) {
    return (
      <div className="card p-8 text-center">
        <p className="text-red-400 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-sm text-cerberus-red-light hover:text-white transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="card p-12 flex flex-col items-center justify-center gap-4">
        <Loader2 size={24} className="text-cerberus-red animate-spin" />
        <p className="text-sm text-cerberus-steel">
          Preparing secure checkout...
        </p>
      </div>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "night",
          variables: {
            colorPrimary: "#bd1e00",
            colorBackground: "#1a1a1a",
            colorText: "#c4cbcb",
            colorTextPlaceholder: "#8a9494",
            colorDanger: "#ef4444",
            fontFamily: '"DM Sans", sans-serif',
            fontSizeBase: "15px",
            spacingUnit: "4px",
            borderRadius: "10px",
            colorTextSecondary: "#adb5b5",
            colorIcon: "#adb5b5",
          },
          rules: {
            ".Input": {
              backgroundColor: "#111111",
              border: "1px solid #333333",
              boxShadow: "none",
              padding: "12px 14px",
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            },
            ".Input:focus": {
              border: "1px solid #bd1e00",
              boxShadow: "0 0 0 3px rgba(189, 30, 0, 0.15)",
            },
            ".Input:hover": {
              border: "1px solid #444444",
            },
            ".Label": {
              color: "#adb5b5",
              fontWeight: "500",
              fontSize: "13px",
              textTransform: "uppercase" as const,
              letterSpacing: "0.05em",
              marginBottom: "6px",
            },
            ".Tab": {
              backgroundColor: "#111111",
              border: "1px solid #333333",
              color: "#adb5b5",
              borderRadius: "10px",
            },
            ".Tab:hover": {
              backgroundColor: "#1a1a1a",
              border: "1px solid #444444",
              color: "#c4cbcb",
            },
            ".Tab--selected": {
              backgroundColor: "#1a1a1a",
              border: "1px solid #bd1e00",
              color: "#ffffff",
              boxShadow: "0 0 0 3px rgba(189, 30, 0, 0.12)",
            },
            ".TabIcon--selected": {
              fill: "#bd1e00",
            },
            ".Block": {
              backgroundColor: "#1a1a1a",
              border: "1px solid #333333",
              borderRadius: "12px",
            },
          },
        },
      }}
    >
      <CheckoutForm product={product} />
    </Elements>
  );
}
