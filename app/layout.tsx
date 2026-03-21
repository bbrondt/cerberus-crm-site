import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cerberus CRM — The Marketing Flywheel for Mortgage Pros",
  description:
    "Cerberus CRM is the all-in-one marketing flywheel that replaces your CRM, content tools, funnel builder, ad creator, and webinar platform — built by a loan officer, for loan officers.",
  openGraph: {
    title: "Cerberus CRM — The Marketing Flywheel for Mortgage Pros",
    description:
      "The complete marketing engine that replaces your CRM, content tools, funnel builder, and webinar platform. Built by a loan officer, for loan officers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
