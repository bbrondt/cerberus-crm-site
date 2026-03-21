import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-cerberus-red/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md mx-auto px-6">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl gradient-red flex items-center justify-center font-display font-bold text-lg text-white mx-auto mb-6">
            C
          </div>
          <h1 className="font-display font-bold text-2xl text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-sm text-cerberus-steel">
            Log in to your Cerberus CRM account.
          </p>
        </div>

        <div className="card p-8">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-cerberus-steel-light mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-400 text-white placeholder:text-cerberus-steel-dark text-sm focus:outline-none focus:border-cerberus-red/50 focus:ring-1 focus:ring-cerberus-red/20 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-cerberus-steel-light mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-400 text-white placeholder:text-cerberus-steel-dark text-sm focus:outline-none focus:border-cerberus-red/50 focus:ring-1 focus:ring-cerberus-red/20 transition-colors"
              />
            </div>
            <button className="w-full py-3 rounded-lg gradient-red text-white font-medium text-sm hover:opacity-90 transition-opacity duration-200">
              Log In
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="#"
              className="text-xs text-cerberus-steel hover:text-white transition-colors"
            >
              Forgot your password?
            </Link>
          </div>
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
