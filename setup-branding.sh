set -euo pipefail

# Ensure folders exist
mkdir -p "app/(sections)" components public lib

# === Tailwind theme: metal greys + gradient + accent ===
cat > tailwind.config.ts <<'EOF'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        metal: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          700: "#2b2b2f",
          800: "#1f1f22",
          900: "#0f0f10"
        },
        accent: "#f59e0b" // RS orange
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 30px rgba(0,0,0,.3)"
      },
      backgroundImage: {
        "metal-sheen": "radial-gradient(1200px 400px at 50% -10%, rgba(255,255,255,.08), transparent)"
      }
    }
  },
  plugins: [],
};
export default config;
EOF

# === Global styles: fonts + utilities + dark base ===
cat > app/globals.css <<'EOF'
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: dark; }

html, body { height: 100%; }
body {
  @apply bg-metal-900 text-white antialiased;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.font-oswald { font-family: Oswald, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif; }

.gradient-text { @apply bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600; }
.card { @apply rounded-2xl bg-metal-800/80 border border-white/10 shadow-glow; }
.section { @apply py-20; }
.container { @apply max-w-6xl mx-auto px-4; }
EOF

# === Layout updated to include header/footer and background sheen ===
cat > app/layout.tsx <<'EOF'
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RS Metal — Metal Fabrication & Engineering",
  description: "Precision metal fabrication • CNC • Welding • Bespoke structures",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
EOF

# === Logo + Header + Footer with branded styling ===
cat > components/Logo.tsx <<'EOF'
export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="font-oswald text-xl tracking-wide gradient-text">RS METAL</span>
    </div>
  );
}
EOF

cat > components/Header.tsx <<'EOF'
"use client";
import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-metal-900/70 border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#services" className="hover:text-cyan-300">Services</Link>
          <Link href="#capabilities" className="hover:text-cyan-300">Capabilities</Link>
          <Link href="#process" className="hover:text-cyan-300">Process</Link>
          <Link href="#gallery" className="hover:text-cyan-300">Projects</Link>
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition">
            Get a quote
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-white/10">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container py-3 flex flex-col gap-3">
            <a href="#services">Services</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#process">Process</a>
            <a href="#gallery">Projects</a>
            <a href="#contact" className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold text-center">Get a quote</a>
          </div>
        </div>
      )}
    </header>
  );
}
EOF

cat > components/Footer.tsx <<'EOF'
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-300">
        <div>
          <h4 className="font-semibold text-white">RS Metal</h4>
          <p className="mt-2 max-w-sm opacity-80">Precision metal fabrication • CNC • Welding • Bespoke structures</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="mt-2">London • Birmingham • Manchester</p>
          <p className="mt-1">+44 7481 900060</p>
          <p className="mt-1">info@rsmetal.example</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Links</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#capabilities" className="hover:text-white">Capabilities</a></li>
            <li><a href="#gallery" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Get a quote</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} RS Metal. All rights reserved.</div>
    </footer>
  );
}
EOF

# Small visual nudge for section placeholders so they match the theme
for f in Hero Services Capabilities Process Gallery ContactCTA; do
  cat > "app/(sections)/$f.tsx" <<EOF
export default function $f() {
  return (
    <section className="section">
      <div className="container card p-8">
        <h2 className="text-3xl font-oswald">$f</h2>
        <p className="mt-2 text-gray-300">Placeholder for $f content.</p>
      </div>
    </section>
  );
}
EOF
done

