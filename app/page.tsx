"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

// ✅ Lucide icons
import {
  Ruler,
  Timer,
  Wrench,
  Handshake,
  Scissors,
  Layers,
} from "lucide-react";

// ✅ Shared gradient ID
const gradientId = "cyan-violet";

const values = [
  {
    icon: (
      <Ruler
        className="w-10 h-10 mx-auto"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
    title: "Precision First",
    desc: "Every project is manufactured with tolerances down to ±0.2mm, ensuring components fit perfectly the first time, every time.",
  },
  {
    icon: (
      <Timer
        className="w-10 h-10 mx-auto"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
    title: "Fast Turnarounds",
    desc: "We know deadlines matter. With streamlined workflows, typical lead times range from 3–7 days — without compromising quality.",
  },
  {
    icon: (
      <Wrench
        className="w-10 h-10 mx-auto"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
    title: "Flexible Production",
    desc: "From one-off prototypes to small batch runs, we scale to suit your project requirements and budget.",
  },
  {
    icon: (
      <Handshake
        className="w-10 h-10 mx-auto"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
    title: "Collaborative Support",
    desc: "Our team provides design input and DfM guidance, helping you avoid costly revisions and making the build process smoother.",
  },
];

const expertise = [
  {
    icon: (
      <Scissors
        className="w-12 h-12"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
    title: "Precision Cutting",
    desc: "CNC laser and plasma cutting on steel, aluminium, and stainless — delivering clean, accurate parts every time.",
  },
  {
    icon: (
      <Wrench
        className="w-12 h-12"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
    title: "Forming & Welding",
    desc: "Expert bending, forming, and certified MIG/TIG welding for components that demand strength and consistency.",
  },
  {
    icon: (
      <Layers
        className="w-12 h-12"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.2}
      />
    ),
    title: "Finishing Solutions",
    desc: "Powder coating and assembly services that give your parts the durability and look they need to perform.",
  },
];

export default function Page() {
  const images = ["/hero-welding.png", "/hero-cnc.png", "/hero-bending.png"];

  return (
    <div className="relative">
      {/* ✅ Global Gradient Defs */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#22d3ee" offset="0%" /> {/* cyan-400 */}
            <stop stopColor="#6366f1" offset="100%" /> {/* violet-600 */}
          </linearGradient>
        </defs>
      </svg>

      {/* ✅ Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-oswald leading-tight">
              Precision <span className="gradient-text">Metal</span> Fabrication
            </h1>
            <p className="mt-5 text-gray-300 max-w-xl">
              CNC cutting, forming, welding and finishing — delivered on time
              with industrial accuracy.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition"
              >
                Your project, our precision.
              </Link>
              <Link
                href="/services"
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10"
              >
                Our services
              </Link>
            </div>
          </motion.div>

          {/* ✅ Image Slider */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-white/10 shadow-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full"
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-[400px] relative">
                    <Image
                      src={src}
                      alt={`Hero slide ${i + 1}`}
                      fill
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* ✅ Intro Card with Animation */}
      <motion.div
        className="mb-16 max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="p-10 bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl text-center border border-white/10">
          <motion.div
            className="h-[2px] w-32 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 mb-6 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.7)]"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Welcome to RS Metal — where{" "}
            <span className="gradient-text">advanced machinery</span> meets{" "}
            <span className="gradient-text">skilled craftsmanship</span>. From
            cutting and forming to welding and finishing, we deliver{" "}
            <span className="gradient-text">precision fabrication</span> with
            reliability and care, ensuring your projects are completed to the
            highest standards — on time and on budget.
          </motion.p>
        </div>
      </motion.div>

      {/* ✅ What We Build Section */}
      <section className="mb-20 text-center max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-oswald"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What We <span className="gradient-text">Build</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From small prototypes to full-scale projects, here are just some of
          the things we fabricate with precision and care:
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
  {
    img: "/examples/bracket.jpg",
    title: "Custom Brackets & Mounts",
    desc: "Strong, reliable, and made to measure for construction and automotive use.",
  },
  {
    img: "/examples/panel.jpg",
    title: "Architectural Panels & Screens",
    desc: "Decorative laser-cut panels and facades that combine durability with design.",
  },
  {
    img: "/examples/machine-part.jpg",
    title: "Machine Parts & Housings",
    desc: "Precision components to keep equipment running smoothly and reliably.",
  },
  {
    img: "/examples/furniture.jpg",
    title: "Furniture & Fixtures",
    desc: "Stylish, robust frames and fittings that bring ideas into everyday use.",
  },
].map((item, i) => (
  <motion.div
    key={item.title}
    className="relative group rounded-xl overflow-hidden border border-white/10 cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: i * 0.2 }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ scale: 1.05 }}
  >
    <Link href="/services#what-we-build" className="block">
      <Image
        src={item.img}
        alt={item.title}
        width={500}
        height={300}
        className="object-cover w-full h-56 group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
      <div className="absolute bottom-4 left-4 right-4 text-left">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-sm text-gray-200">{item.desc}</p>
      </div>
    </Link>
  </motion.div>
))}
        </div>
      </section>

      {/* ✅ Fabrication Expertise */}
      <div className="max-w-3xl mx-auto text-center mb-20 px-4">
        <h2 className="text-3xl md:text-4xl font-oswald">
          Fabrication <span className="gradient-text">Expertise</span>
        </h2>
        <p className="mt-4 text-gray-400">
          We bring together precision processes and skilled craftsmanship to
          deliver fabrication solutions that perform at every stage.
        </p>

        <div className="mt-12 space-y-10">
          {expertise.map((srv, i) => (
            <motion.div
              key={srv.title}
              className="card p-6 flex items-start gap-4 bg-gray-950/60 border border-white/10 rounded-xl cursor-pointer group"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                {srv.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{srv.title}</h3>
                <p className="mt-2 text-gray-300">{srv.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href="/services"
          className="mt-12 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition"
        >
          View All Services
        </Link>
      </div>

      {/* ✅ Why Choose RS Metal */}
      <section className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-oswald"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose RS <span className="gradient-text">Metal</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-400 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At RS Metal, we don’t just fabricate parts — we help you bring ideas
          to life with precision, speed, and collaboration. Our approach is
          designed around what matters most to you:
        </motion.p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="card p-6 text-center cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {v.icon}
              <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-gray-300">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Import Your Project Section */}
<section className="py-20 bg-gray-950/50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <motion.h2
      className="text-3xl md:text-4xl font-oswald"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Import Your <span className="gradient-text">Project</span>
    </motion.h2>
    <motion.p
      className="mt-4 text-gray-400 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Already have designs, CAD files, or specifications? Send them over
      and we’ll work with you to bring your idea to life — built with{" "}
      <span className="gradient-text">precision</span> and adapted to your{" "}
      <span className="gradient-text">preferences</span>.
    </motion.p>

    <motion.div
      className="mt-10 flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <Link
        href="/contact"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition"
      >
        Start Your Project
      </Link>
    </motion.div>

    <motion.div
      className="h-[2px] w-40 mx-auto mt-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.7)]"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      viewport={{ once: true }}
    />
  </div>
</section>
</div> 
); 

}
