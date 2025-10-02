"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  Repeat,
  Wrench,
  Paintbrush,
  Cpu,
  Package,
} from "lucide-react";

const gradientId = "cyan-violet";

// ✅ Services list with proper gradient stroke
const services = [
  {
    title: "CNC Laser/Plasma Cutting",
    desc: "High-precision cutting on steel, aluminium and stainless.",
    icon: (
      <Scissors
        className="w-10 h-10"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
  },
  {
    title: "Bending & Forming",
    desc: "Press brake forming for complex geometries and repeatability.",
    icon: (
      <Repeat
        className="w-10 h-10"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
  },
  {
    title: "MIG/TIG Welding",
    desc: "Certified welders for structural and fine fabrication.",
    icon: (
      <Wrench
        className="w-10 h-10"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
  },
  {
    title: "Powder Coating",
    desc: "Durable finishes with consistent colour and texture.",
    icon: (
      <Paintbrush
        className="w-10 h-10"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
  },
  {
    title: "CAD/CAM",
    desc: "Design support and DfM (Design for Manufacturing) to accelerate your build.",
    icon: (
      <Cpu
        className="w-10 h-10"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
  },
  {
    title: "Assembly",
    desc: "Complete assemblies with fasteners and QA checks.",
    icon: (
      <Package
        className="w-10 h-10"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
  },
];

// ✅ What We Build categories
const categories = [
  {
    img: "/examples/bracket.jpg",
    title: "Custom Brackets & Mounts",
    desc: "Reliable steel brackets and mounts, built for strength and precision in construction and automotive industries.",
    bullets: [
      "Laser-cut accuracy for tight fits",
      "Powder-coated or raw finish options",
      "Suitable for structural and custom designs",
    ],
  },
  {
    img: "/examples/panel.jpg",
    title: "Architectural Panels & Screens",
    desc: "Decorative yet durable, our panels and screens enhance both interior and exterior projects.",
    bullets: [
      "Laser-cut patterns and facades",
      "Weather-resistant finishing",
      "Customisable sizes and designs",
    ],
  },
  {
    img: "/examples/machine-part.jpg",
    title: "Machine Parts & Housings",
    desc: "Precision-engineered housings and components to keep machinery running smoothly.",
    bullets: [
      "±0.2 mm accuracy tolerance",
      "Durable materials for heavy use",
      "Supports prototypes and production runs",
    ],
  },
  {
    img: "/examples/furniture.jpg",
    title: "Furniture & Fixtures",
    desc: "Modern and robust furniture frames, fixtures, and fittings that combine function with design.",
    bullets: [
      "Industrial-style steel frames",
      "Custom welded fixtures",
      "Ideal for retail, office, or home use",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 bg-gray-950 relative">
      {/* ✅ Global gradient defs */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#22d3ee" offset="0%" />
            <stop stopColor="#6366f1" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto px-4">
        {/* ✅ Our Services Heading */}
        <motion.h1
          className="text-3xl md:text-5xl font-oswald text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="gradient-text">Services</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-400 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From cutting and welding to coating and assembly, we provide a
          complete range of fabrication services.
        </motion.p>

        {/* ✅ Services Cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="card p-6 bg-white/5 border border-white/10 rounded-xl shadow-glow hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all"
            >
              <div className="mb-4 flex justify-center">{it.icon}</div>
              <h3 className="text-xl font-semibold text-center">{it.title}</h3>
              <p className="mt-2 text-gray-300 text-center">{it.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ✅ Divider */}
<motion.div
  className="h-[2px] w-40 mx-auto my-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.7)]"
  initial={{ opacity: 0, scaleX: 0 }}
  whileInView={{ opacity: 1, scaleX: 1 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
/>

{/* ✅ What We Build Section with Anchor */}
<section id="what-we-build">
  <motion.h2
    className="text-3xl md:text-5xl font-oswald text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    What We <span className="gradient-text">Build</span>
  </motion.h2>
  <motion.p
    className="mt-4 text-gray-400 text-center max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    From prototypes to finished products — here’s a closer look at the
    projects we create with precision and care.
  </motion.p>

        {/* ✅ Categories Deep Dive */}
        <div className="mt-16 space-y-20">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl group">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Text Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 gradient-text">
                  {cat.title}
                </h2>
                <p className="text-gray-300 mb-4">{cat.desc}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {cat.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        </section>

        {/* ✅ Final CTA */}
        <div className="text-center mt-20">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
