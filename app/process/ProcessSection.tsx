"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileCode, Ruler, Lightbulb, BookOpen, Newspaper } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We listen to your requirements, discuss design ideas, and define project goals clearly.",
  },
  {
    step: "02",
    title: "Design & Planning",
    desc: "Our engineers prepare precise technical drawings and select the best methods for fabrication.",
  },
  {
    step: "03",
    title: "Fabrication",
    desc: "Using CNC cutting, welding, and forming techniques, we manufacture with high accuracy.",
  },
  {
    step: "04",
    title: "Finishing",
    desc: "Surface treatments and quality checks ensure durability and aesthetics.",
  },
  {
    step: "05",
    title: "Delivery",
    desc: "We deliver on time, every time, ensuring a smooth installation or handover.",
  },
];

const gradientId = "cyan-violet";

export default function ProcessSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* ✅ Gradient defs */}
        <svg className="absolute w-0 h-0">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop stopColor="#22d3ee" offset="0%" />
              <stop stopColor="#6366f1" offset="100%" />
            </linearGradient>
          </defs>
        </svg>

        {/* ✅ How We Work */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-oswald mb-12 text-center"
        >
          How We <span className="gradient-text">Work</span>
        </motion.h1>

        <div className="grid md:grid-cols-5 gap-8 text-center">
          {steps.map(({ step, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 shadow-glow transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-bold text-lg mb-4">
                {step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
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

        {/* ✅ Design Resources */}
        <motion.h2 className="text-3xl md:text-4xl font-oswald text-center mb-12">
          Design <span className="gradient-text">Resources</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: (
                <FileCode
                  className="w-10 h-10 mx-auto"
                  stroke={`url(#${gradientId})`}
                  strokeWidth={2.2}
                />
              ),
              title: "File Formats",
              desc: "DXF, DWG, STEP, PDF supported for fabrication-ready designs.",
            },
            {
              icon: (
                <Ruler
                  className="w-10 h-10 mx-auto"
                  stroke={`url(#${gradientId})`}
                  strokeWidth={2.2}
                />
              ),
              title: "Tolerances",
              desc: "±0.2mm cutting, ±0.5mm bending typical ranges.",
            },
            {
              icon: (
                <Lightbulb
                  className="w-10 h-10 mx-auto"
                  stroke={`url(#${gradientId})`}
                  strokeWidth={2.2}
                />
              ),
              title: "Design Tips",
              desc: "Hole size ≥ thickness, bend radii ≥ thickness, avoid very narrow slots.",
            },
          ].map((res, i) => (
            <motion.div
              key={res.title}
              className="card p-6 bg-white/5 border border-white/10 rounded-xl shadow-glow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="mb-4 flex justify-center">{res.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{res.title}</h3>
              <p className="text-gray-300">{res.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ✅ Blog / Articles */}
<motion.h2 className="text-3xl md:text-4xl font-oswald text-center mt-20 mb-12">
  Articles & <span className="gradient-text">Guides</span>
</motion.h2>
<div className="grid md:grid-cols-2 gap-8">
  {[
    {
      icon: (
        <BookOpen
          className="w-8 h-8 mx-auto"
          stroke={`url(#${gradientId})`}
          strokeWidth={2}
        />
      ),
      title: "How to Prepare CAD Drawings",
      desc: "Tips on exporting DXF/DWG files for fabrication-ready accuracy.",
      link: "/blog/cad-preparation",
    },
    {
      icon: (
        <Newspaper
          className="w-8 h-8 mx-auto"
          stroke={`url(#${gradientId})`}
          strokeWidth={2}
        />
      ),
      title: "Laser vs Plasma Cutting",
      desc: "Understand the pros and cons to choose the right cutting method.",
      link: "/blog/laser-vs-plasma",
    },
  ].map((article, i) => (
    <motion.div
      key={article.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      viewport={{ once: true }}
    >
      <Link
        href={article.link}
        className="block card p-6 bg-white/5 border border-white/10 rounded-xl shadow-glow hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-violet-600/10 transition-all"
      >
        <div className="mb-4 flex justify-center">{article.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-300">{article.desc}</p>
      </Link>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}
