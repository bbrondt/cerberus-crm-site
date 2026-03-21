import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-cerberus-red/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md mx-auto px-6">
        <div className="text-center mb-8">
          <Image
            src="/cerberus-logo.png"
            alt="Cerberus CRM"
            width={140}
            height={48}
            className="h-12 w-auto object-contain mx-auto mb-6"
          />
          <h1 className="font-display font-bold text-2xl text-white mb-2">
            Log in to Cerberus CRM
          </h1>
          <p className="text-sm text-cerberus-steel">
            Access your account at app.cerberuscrm.com
          </p>
        </div>

        <div className="card p-8 text-center">
          <p className="text-sm text-cerberus-steel leading-relaxed mb-6">
            Your Cerberus CRM dashboard, content engine, and all platform tools
            live on our dedicated app. Click below to log in.
          </p>

          <a
            href="https://app.cerberuscrm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg gradient-red text-white font-medium text-sm hover:opacity-90 transition-opacity duration-200"
          >
            Go to App
            <ExternalLink size={16} />
          </a>
        </div>

        <p className="text-center text-xs text-cerberus-steel-dark mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/pricing"
            className="text-cerberus-red-light hover:text-white transition-colors"
          >
            Get started
          </Link>
        </p>
      </div>
    </section>
  );
}
