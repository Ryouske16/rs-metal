"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "How to Prepare CAD Drawings",
    desc: "Tips on exporting DXF/DWG files for fabrication-ready accuracy.",
    slug: "cad-preparation",
  },
  {
    title: "Laser vs Plasma Cutting",
    desc: "Understand the pros and cons to choose the right cutting method.",
    slug: "laser-vs-plasma",
  },
];

export default function BlogPageClient() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <motion.h1
        className="text-3xl md:text-5xl font-oswald text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        RS Metal <span className="gradient-text">Blog</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 rounded-xl bg-white/5 border border-white/10 shadow-glow hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400">{post.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
