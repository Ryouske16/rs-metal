import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "RS Metal — Metal Fabrication & Engineering",
  description:
    "Precision metal fabrication • CNC • Welding • Bespoke structures",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/favicon.png", // iOS home screen icon
  },
  manifest: "/site.webmanifest", // for Android PWA / SEO
  themeColor: "#000000",
  openGraph: {
    title: "RS Metal — Metal Fabrication & Engineering",
    description:
      "Precision metal fabrication • CNC • Welding • Bespoke structures in London.",
    images: ["/favicon.png"], // fallback preview image
    url: "https://www.rsmetal.co.uk",
    type: "website",
  },
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
