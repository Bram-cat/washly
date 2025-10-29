import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Washly - Professional Washing Services in PEI | Window, Gutter & Pressure Washing",
  description: "Washly offers professional window cleaning, gutter cleaning, pressure washing, soft washing, and roof cleaning services in Prince Edward Island. Locally operated. Call 705-822-8605 for a free quote.",
  keywords: "window cleaning PEI, gutter cleaning PEI, pressure washing PEI, roof cleaning PEI, soft washing, house washing, commercial cleaning, residential cleaning",
  openGraph: {
    title: "Washly - Professional Washing Services in PEI",
    description: "Professional window, gutter, and pressure washing services in Prince Edward Island. Shine brighter together!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
