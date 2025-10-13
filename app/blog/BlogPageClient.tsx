"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "How to Prepare CAD Drawings for Metal Fabrication",
    desc: "Learn how to prepare accurate DXF/DWG files and avoid common design mistakes before fabrication.",
    slug: "cad-preparation",
    image: "/images/cad-guide.jpg", // optional — place in public/images
  },
  {
    title: "Laser vs Plasma Cutting: Which Should You Choose?",
    desc: "Understand the pros, cons, and ideal use cases for both cutting methods.",
    slug: "laser-vs-plasma",
    image: "/images/laser-plasma.jpg",
  },
];

export default function BlogPageClient() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      {/* ✅ Page Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-oswald text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="gradient-text">Insights & Guides</span>
      </motion.h1>

      <motion.p
        className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Explore RS Metal’s latest articles on fabrication, CNC design, and modern manufacturing methods.
        Learn how to design smarter, cut cleaner, and build stronger.
      </motion.p>

      {/* ✅ Blog Cards Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/70 to-gray-950 hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] transition-all"
            >
              {/* ✅ Image Header */}
              {post.image && (
                <div className="overflow-hidden relative h-56 w-full">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent" />
                </div>
              )}

              {/* ✅ Text Section */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold gradient-text group-hover:opacity-90 transition">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.desc}
                </p>
                <p className="text-sm mt-3 font-semibold text-cyan-400 group-hover:text-blue-400 transition">
                  Read More →
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
