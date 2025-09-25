"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" }, // 👈 Added Home
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
    <header className="sticky top-0 z-50 border-b border-gray-600 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
        
        {/* Logo → single homepage link */}
        <Link href="/" className="relative z-10 flex items-center">
          <Logo />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm relative z-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-accent transition ${
                pathname === link.href
                  ? "text-accent font-semibold"
                  : "text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA button */}
        <div className="hidden md:block relative z-10">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition"
          >
            Build your project.
          </Link>
        </div>
      </div>
    </header>
  );
}
