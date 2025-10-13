import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rsmetal.co.uk"), // ✅ Fix #4
  title:
    "Precision Metal Fabrication in London | RS Metal — CNC, Welding & Engineering Solutions",
  description:
    "RS Metal provides precision metal fabrication in London, specialising in CNC cutting, welding, and bespoke engineering solutions with fast turnaround.",
  openGraph: {
    title:
      "Precision Metal Fabrication in London | RS Metal — CNC, Welding & Engineering Solutions",
    description:
      "RS Metal delivers CNC cutting, welding, and custom fabrication services with expert precision and reliability. Serving businesses and individuals across the UK.",
    url: "https://www.rsmetal.co.uk",
    siteName: "RS Metal",
    images: [
      {
        url: "/favicon.png", // You can replace this with your logo (e.g. /rsmetal-logo.png)
        width: 1200,
        height: 630,
        alt: "RS Metal Fabrication & Engineering Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "RS Metal — Precision Metal Fabrication, Welding & CNC Engineering",
    description:
      "High-quality metal fabrication, CNC cutting, and welding services in London. Trusted engineering for bespoke projects.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

// ✅ Fix #3 — themeColor now correctly exported under `viewport`
export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-metal-sheen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
