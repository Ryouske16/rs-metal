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
  <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
    <Logo />
    <nav className="hidden md:flex items-center gap-8 text-sm">
      <a href="/services" className="hover:text-cyan-300">Services</a>
      <a href="/capabilities" className="hover:text-cyan-300">Capabilities</a>
      <a href="/process" className="hover:text-cyan-300">Process</a>
      <a href="/projects" className="hover:text-cyan-300">Projects</a>
      <a href="/contact" className="hover:text-cyan-300">Contact</a>
    </nav>
    <div className="hidden md:block">
      <a href="/contact" className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition">
        Get a quote
      </a>
    </div>
  </div>
</header>

  );
}
