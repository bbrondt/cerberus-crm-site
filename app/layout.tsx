import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyDemoCTA from "@/components/StickyDemoCTA";

export const metadata: Metadata = {
  title: "Cerberus CRM — The Marketing Flywheel for Mortgage Pros",
  description:
    "Cerberus CRM is the all-in-one marketing flywheel that replaces your CRM, content tools, funnel builder, ad creator, and webinar platform — built by a loan officer, for loan officers.",
  metadataBase: new URL("https://cerberuscrm.com"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Cerberus CRM — The Marketing Flywheel for Mortgage Pros",
    description:
      "The complete marketing engine that replaces your CRM, content tools, funnel builder, and webinar platform. Built by a loan officer, for loan officers.",
    type: "website",
    url: "https://cerberuscrm.com",
    siteName: "Cerberus CRM",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cerberus CRM — It's Not Just a CRM. It's a Marketing Flywheel.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerberus CRM — The Marketing Flywheel for Mortgage Pros",
    description:
      "The complete marketing engine that replaces your CRM, content tools, funnel builder, and webinar platform. Built by a loan officer, for loan officers.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57ZQGJ6');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-57ZQGJ6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyDemoCTA />
      </body>
    </html>
  );
}
