import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cerberus CRM — The Marketing Engine for Mortgage Pros",
  description:
    "Cerberus CRM gives mortgage loan officers the marketing automation, content engine, and lead management tools they need to dominate their market.",
  openGraph: {
    title: "Cerberus CRM — The Marketing Engine for Mortgage Pros",
    description:
      "Marketing automation, content engine, and lead management built for mortgage loan officers.",
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
