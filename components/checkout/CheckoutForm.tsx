"use client";

import { useState, FormEvent } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Loader2, Lock, ShieldCheck } from "lucide-react";
import type { ProductConfig } from "@/lib/products";

interface CheckoutFormProps {
  product: ProductConfig;
}

export default function CheckoutForm({ product }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isRecurring = product.interval !== "one_time";
  const buttonLabel = isRecurring
    ? `${product.ctaText} — ${product.displayPrice}${product.billingLabel}`
    : `${product.ctaText} — ${product.displayPrice}`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setError(null);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/${product.slug}/success`,
      },
    });

    if (submitError) {
      setError(
        submitError.message || "Something went wrong. Please try again."
      );
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="stripe-form-wrapper">
        <PaymentElement
          options={{
            layout: "tabs",
            defaultValues: {
              billingDetails: {
                address: {
                  country: "US",
                },
              },
            },
          }}
        />
      </div>

      {error && (
        <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={!stripe || isProcessing}
        className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl gradient-red text-white font-display font-semibold text-base hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
      >
        {isProcessing ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Lock size={16} />
            {buttonLabel}
          </>
        )}
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>

      {/* Trust signals */}
      <div className="flex items-center justify-center gap-6 pt-2">
        <div className="flex items-center gap-1.5 text-cerberus-steel-dark">
          <ShieldCheck size={14} />
          <span className="text-xs">256-bit SSL</span>
        </div>
        <div className="flex items-center gap-1.5 text-cerberus-steel-dark">
          <Lock size={14} />
          <span className="text-xs">PCI Compliant</span>
        </div>
        {isRecurring && (
          <div className="flex items-center gap-1.5 text-cerberus-steel-dark">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-3.5 h-3.5"
            >
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="text-xs">Cancel Anytime</span>
          </div>
        )}
      </div>
    </div>
  );
}
