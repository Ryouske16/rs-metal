"use client";

import { motion } from "framer-motion";

const services = [
  { title: "CNC Laser/Plasma Cutting", desc: "High-precision cutting on steel, aluminium and stainless." },
  { title: "Bending & Forming", desc: "Press brake forming for complex geometries and repeatability." },
  { title: "MIG/TIG Welding", desc: "Certified welders for structural and fine fabrication." },
  { title: "Powder Coating", desc: "Durable finishes with consistent colour and texture." },
  { title: "CAD/CAM", desc: "Design support and DfM to accelerate your build." },
  { title: "Assembly", desc: "Complete assemblies with fasteners and QA checks." },
];

export default function ServicesPage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-oswald"
        >
          Services
        </motion.h1>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="card p-6 bg-white/5 border border-white/10 rounded-xl shadow-glow transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-gray-300">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
