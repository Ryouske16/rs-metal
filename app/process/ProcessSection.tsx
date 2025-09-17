"use client";

import { motion } from "framer-motion";

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

export default function ProcessSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-oswald mb-12 text-center"
        >
          How We Work
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
      </div>
    </section>
  );
}
