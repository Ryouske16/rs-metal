set -euo pipefail

# Ensure folders
mkdir -p "app/(sections)" app/services app/capabilities app/process app/projects app/contact components public

# --- Logo component (uses /public/logo.png) ---
cat > components/Logo.tsx <<'EOF'
import Image from "next/image";

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="RS Metal"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
        priority
      />
      <span className="font-oswald text-xl tracking-wide gradient-text">RS METAL</span>
    </a>
  );
}
EOF

# --- Header with page links ---
cat > components/Header.tsx <<'EOF'
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/process", label: "Process" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-metal-900/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={active ? "text-cyan-300" : "hover:text-cyan-300"}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Link href="/contact" className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition">
            Get a quote
          </Link>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg border border-white/10">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>
            ))}
            <Link href="/contact" onClick={()=>setOpen(false)} className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold text-center">Get a quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
EOF

# --- Footer keeps it simple ---
cat > components/Footer.tsx <<'EOF'
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="text-center text-xs text-gray-500 py-8">
        © {new Date().getFullYear()} RS Metal. All rights reserved.
      </div>
    </footer>
  );
}
EOF

# --- Layout: use relative imports to avoid alias issues ---
cat > app/layout.tsx <<'EOF'
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

# --- Home page (intro + CTAs only; we’ll refine after logo is in) ---
cat > app/page.tsx <<'EOF'
import Link from "next/link";

export default function Page() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-oswald leading-tight">
            Precision <span className="gradient-text">Metal</span> Fabrication
          </h1>
          <p className="mt-5 text-gray-300 max-w-xl">
            CNC cutting, forming, welding and finishing — delivered on time with industrial accuracy.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition">Get a quote</Link>
            <Link href="/services" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10">Our services</Link>
          </div>
        </div>
        <div className="rounded-2xl bg-metal-800/80 border border-white/10 shadow-glow p-8">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center">
            <span className="text-gray-400">Hero image / shop floor photo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
EOF

# --- Services page ---
cat > app/services/page.tsx <<'EOF'
export const metadata = { title: "Services — RS Metal" };
const items = [
  { title: "CNC Laser/Plasma Cutting", desc: "High-precision cutting on steel, aluminium and stainless." },
  { title: "Bending & Forming", desc: "Press brake forming for complex geometries and repeatability." },
  { title: "MIG/TIG Welding", desc: "Certified welders for structural and fine fabrication." },
  { title: "Powder Coating", desc: "Durable finishes with consistent colour and texture." },
  { title: "CAD/CAM", desc: "Design support and DfM to accelerate your build." },
  { title: "Assembly", desc: "Complete assemblies with fasteners and QA checks." },
];
export default function ServicesPage(){
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-oswald">Services</h1>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(it => (
            <div key={it.title} className="card p-6">
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-gray-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

# --- Capabilities page ---
cat > app/capabilities/page.tsx <<'EOF'
export const metadata = { title: "Capabilities — RS Metal" };
export default function CapabilitiesPage(){
  const stats = [
    ["Tolerance", "±0.2 mm"],
    ["Sheet Size", "3000 × 1500 mm"],
    ["Thickness", "0.9 – 20 mm"],
    ["Lead Time", "3–7 days"],
  ];
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-oswald">Capabilities</h1>
          <p className="mt-4 text-gray-300 max-w-xl">Industrial capacity with small-batch flexibility across mild steel, stainless, and aluminium.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(([k,v]) => (
            <div key={k} className="card p-5">
              <div className="text-sm text-gray-400">{k}</div>
              <div className="text-2xl font-semibold gradient-text">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

# --- Process page ---
cat > app/process/page.tsx <<'EOF'
export const metadata = { title: "Process — RS Metal" };
const steps = [
  ["1. Quote", "Upload drawings/brief and receive pricing within 24h."],
  ["2. DfM Review", "We optimise for manufacturability and confirm timelines."],
  ["3. Fabrication", "Cutting, forming, welding and finishing to spec."],
  ["4. QC & Delivery", "Dimensional checks and tracked delivery nationwide."],
];
export default function ProcessPage(){
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-oswald">Process</h1>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(([t,d],i)=> (
            <div key={t} className="card p-6">
              <div className="text-3xl font-oswald gradient-text">{String(i+1).padStart(2,"0")}</div>
              <h3 className="mt-2 text-xl font-semibold">{t}</h3>
              <p className="mt-1 text-gray-300">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

# --- Projects page ---
cat > app/projects/page.tsx <<'EOF'
export const metadata = { title: "Projects — RS Metal" };
export default function ProjectsPage(){
  const images = Array.from({length:9},(_,i)=>`https://picsum.photos/seed/rsmetal${i}/800/600`);
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-oswald">Projects</h1>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map(src => (
            <img key={src} src={src} alt="Project" className="rounded-xl border border-white/10" />
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

# --- Contact page (form posts to /api/contact) ---
cat > app/contact/page.tsx <<'EOF'
export const metadata = { title: "Contact — RS Metal" };
export default function ContactPage(){
  async function action(formData: FormData) {
    "use server";
    // Here you could call an email API later (Resend, SendGrid, etc.)
  }
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-oswald">Contact</h1>
        <div className="mt-6 card p-8">
          <form action={action} method="post" className="grid md:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3" />
            <input required type="email" name="email" placeholder="Email" className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3" />
            <input name="phone" placeholder="Phone (optional)" className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3 md:col-span-2" />
            <textarea required name="message" placeholder="Project details" rows={6} className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3 md:col-span-2"></textarea>
            <button className="md:col-span-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
EOF

# --- Update sitemap for all routes ---
cat > app/sitemap.ts <<'EOF'
export default function sitemap(){
  const base = "https://example.com"\;
  const now = new Date();
  const routes = ["","/services","/capabilities","/process","/projects","/contact"];
  return routes.map(r => ({ url: base + r, lastModified: now }));
}
EOF

