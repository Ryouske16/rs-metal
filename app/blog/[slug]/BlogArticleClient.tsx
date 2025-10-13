"use client";

import { motion } from "framer-motion";

export default function BlogArticleClient({
  article,
}: {
  article: { title: string; content: string };
}) {
  return (
    <section className="py-20 max-w-4xl mx-auto px-4">
      <motion.h1
        className="text-3xl md:text-5xl font-oswald mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {article.title}
      </motion.h1>

      <motion.p
        className="text-gray-300 leading-relaxed text-base md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {article.content}
      </motion.p>
    </section>
  );
}
