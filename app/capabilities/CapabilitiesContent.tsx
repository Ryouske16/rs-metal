"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Car,
  Landmark,
  Settings,
  FlaskConical,
} from "lucide-react";

export default function CapabilitiesContent() {
  const gradientId = "cyan-violet";

  const capabilities = [
    {
      img: "/capabilities/workflow.jpg",
      title: "Streamlined Workflow",
      stat: "3–7 days",
      desc: "Automated nesting, digital job tracking, and efficient scheduling enable us to deliver parts in days, not weeks.",
    },
    {
      img: "/capabilities/precision.jpg",
      title: "Precision Engineering",
      stat: "±0.2 mm",
      desc: "Our CNC machines and digital calibration maintain repeatable accuracy across every batch, no matter the complexity.",
    },
    {
      img: "/capabilities/sheet.jpg",
      title: "Large Sheet Handling",
      stat: "3000 × 1500 mm",
      desc: "Accommodates bigger parts in a single piece, reducing the need for joints or welds.",
    },
    {
      img: "/capabilities/thickness.jpg",
      title: "Versatile Thickness",
      stat: "0.9 – 20 mm",
      desc: "From lightweight prototypes to heavy-duty structures, we cover a wide range of material needs.",
    },
  ];

  const industries = [
    {
      title: "Construction",
      desc: "Structural components, brackets, and supports built for strength and reliability in demanding environments.",
      icon: (
        <Building2
          className="w-10 h-10 mx-auto"
          stroke={`url(#${gradientId})`}
          strokeWidth={2}
        />
      ),
    },
    {
      title: "Automotive",
      desc: "Precision parts, mounts, and prototypes to support vehicle design, testing, and custom fabrication needs.",
      icon: (
        <Car
          className="w-10 h-10 mx-auto"
          stroke={`url(#${gradientId})`}
          strokeWidth={2}
        />
      ),
    },
    {
      title: "Architecture",
      desc: "Decorative panels, balustrades, and bespoke fittings that balance aesthetics with durability.",
      icon: (
        <Landmark
          className="w-10 h-10 mx-auto"
          stroke={`url(#${gradientId})`}
          strokeWidth={2}
        />
      ),
    },
    {
      title: "Industrial Equipment",
      desc: "Frames, housings, and machine parts manufactured with accuracy to keep operations running smoothly.",
      icon: (
        <Settings
          className="w-10 h-10 mx-auto"
          stroke={`url(#${gradientId})`}
          strokeWidth={2}
        />
      ),
    },
    {
      title: "Prototyping",
      desc: "Fast-turnaround prototypes that help validate designs before scaling to production.",
      icon: (
        <FlaskConical
          className="w-10 h-10 mx-auto"
          stroke={`url(#${gradientId})`}
          strokeWidth={2}
        />
      ),
    },
  ];

  const machines = [
    {
      img: "/machines/laser.jpg",
      title: "CNC Laser Cutter",
      desc: "Cuts sheet metal with high precision and clean edges, ideal for intricate patterns.",
    },
    {
      img: "/machines/press-brake.jpg",
      title: "Press Brake",
      desc: "Bends sheet metal into angles and shapes with high repeatability.",
    },
    {
      img: "/machines/milling.jpg",
      title: "CNC Milling Machine",
      desc: "Removes material from solid blocks to create complex 3D parts.",
    },
    {
      img: "/machines/welding.jpg",
      title: "MIG/TIG Welding Stations",
      desc: "Joins components with strength and clean finishes for structural and detailed work.",
    },
    {
  img: "/machines/punching.jpg",
  title: "CNC Punching Machine",
  desc: "Creates precise holes and cutouts in sheet metal efficiently, ideal for perforated panels and enclosures.",
},
    {
      img: "/machines/finishing.jpg",
      title: "Finishing Tools",
      desc: "Grinding, sanding, and powder coating for durability and aesthetics.",
    },
  ];

  return (
    <>
      {/* ✅ Gradient defs */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#22d3ee" offset="0%" />
            <stop stopColor="#6366f1" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      {/* ✅ Capabilities Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            className="text-3xl md:text-4xl font-oswald"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Capabilities
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            More than just fabrication our blend of precision, flexibility,
            and speed ensures your parts exceed expectations, not just meet
            them.
          </motion.p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                className="card p-6 text-center relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-28 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {c.stat}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-gray-300">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Divider */}
      <div className="border-t border-white/10"></div>

      {/* ✅ Industries We Support */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-oswald"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Industries We <span className="gradient-text">Support</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-400 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our capabilities extend across multiple industries, helping clients
            turn ideas into durable, high-quality parts with precision and
            efficiency:
          </motion.p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4 flex justify-center">{ind.icon}</div>
                <h3 className="text-xl font-semibold">{ind.title}</h3>
                <p className="mt-2 text-gray-300">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Machinery Section */}
      <section className="py-20 bg-gray-950/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-oswald text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="gradient-text">Machinery</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((m, i) => (
              <motion.div
                key={m.title}
                className="card p-6 bg-white/5 border border-white/10 rounded-xl shadow-glow hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.title}
                    fill
                    className={`object-cover ${m.title === "MIG/TIG Welding Stations" ? "object-bottom" : "object-center"}`}
/>
                </div>
                <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
                <p className="text-gray-300">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
