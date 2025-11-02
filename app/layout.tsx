import type { Metadata, Viewport } from "next"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Washly Washing Services | Professional Cleaning in PEI",
  description: "Professional window cleaning, gutter cleaning, pressure washing, and roof cleaning services in Prince Edward Island. Call us today for a free quote! Pathik: (705) 822-8605, Atmiya: (705) 970-4920",
  keywords: [
    "window cleaning PEI",
    "gutter cleaning Prince Edward Island",
    "pressure washing PEI",
    "roof cleaning",
    "house washing",
    "driveway cleaning",
    "cleaning services PEI",
    "Washly Washing Services"
  ],
  authors: [{ name: "Washly Washing Services" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://washlywashing.com",
    title: "Washly Washing Services | Professional Cleaning in PEI",
    description: "Professional cleaning services that make your property shine brighter. Serving Prince Edward Island with quality window cleaning, gutter cleaning, pressure washing, and roof cleaning.",
    siteName: "Washly Washing Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Washly Washing Services | Professional Cleaning in PEI",
    description: "Professional cleaning services in Prince Edward Island. Window cleaning, gutter cleaning, pressure washing, and roof cleaning.",
  },
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ fontFamily: 'Chillax, sans-serif' }}>
      <body>{children}</body>
    </html>
  )
}
