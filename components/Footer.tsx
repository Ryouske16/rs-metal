"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* ✅ Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-oswald mb-4">
            <span className="gradient-text">RS Metal</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Precision metal fabrication services in London — combining advanced
            CNC technology with craftsmanship for projects of any scale.
          </p>
        </motion.div>

        {/* ✅ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/services" className="hover:text-cyan-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/capabilities" className="hover:text-cyan-400 transition">
                Capabilities
              </Link>
            </li>
            <li>
              <Link href="/process" className="hover:text-cyan-400 transition">
                Process
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-cyan-400 transition">
                Blog
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* ✅ Contact Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
  <p className="text-gray-400 text-sm mb-4">
    Have a project or question? Reach out — we’ll respond promptly.
  </p>

  {/* 📞 Phone Numbers */}
          <div className="space-y-1 text-sm font-medium mb-6">
            <p>
              📞{" "}
              <a
                href="tel:+447523907497"
                className="gradient-text hover:opacity-80 transition"
              >
                +44 7523 907497
              </a>
            </p>
            <p>
              📞{" "}
              <a
                href="tel:07403040313"
                className="gradient-text hover:opacity-80 transition"
              >
                07403 040313
              </a>
            </p>
            <p>
              📞{" "}
              <a
                href="tel:+447380828761"
                className="gradient-text hover:opacity-80 transition"
              >
                +44 7380 828761
              </a>
            </p>
          </div>

  {/* 📧 Emails */}
  <div className="flex flex-col gap-3">
    <a
      href="mailto:info@rsmetal.co.uk"
      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition text-center"
    >
      info@rsmetal.co.uk
    </a>
    <a
      href="mailto:rsmetalfabrications@gmail.com"
      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition text-center"
    >
      rsmetalfabrications@gmail.com
    </a>
  </div>
</motion.div>

      </div>

      {/* ✅ Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} RS Metal. All rights reserved.
      </div>
    </footer>
  );
}
