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

const values = [
  {
    icon: <Ruler className="w-10 h-10 mx-auto text-cyan-400" />,
    title: "Precision First",
    desc: "Every project is manufactured with tolerances down to ±0.2mm, ensuring components fit perfectly the first time, every time.",
  },
  {
    icon: <Timer className="w-10 h-10 mx-auto text-cyan-400" />,
    title: "Fast Turnarounds",
    desc: "We know deadlines matter. With streamlined workflows, typical lead times range from 3–7 days — without compromising quality.",
  },
  {
    icon: <Wrench className="w-10 h-10 mx-auto text-cyan-400" />,
    title: "Flexible Production",
    desc: "From one-off prototypes to small batch runs, we scale to suit your project requirements and budget.",
  },
  {
    icon: <Handshake className="w-10 h-10 mx-auto text-cyan-400" />,
    title: "Collaborative Support",
    desc: "Our team provides design input and DfM guidance, helping you avoid costly revisions and making the build process smoother.",
  },
];

const expertise = [
  {
    icon: <Scissors className="w-12 h-12 text-cyan-400" />,
    title: "Precision Cutting",
    desc: "CNC laser and plasma cutting on steel, aluminium, and stainless — delivering clean, accurate parts every time.",
  },
  {
    icon: <Wrench className="w-12 h-12 text-cyan-400" />,
    title: "Forming & Welding",
    desc: "Expert bending, forming, and certified MIG/TIG welding for components that demand strength and consistency.",
  },
  {
    icon: <Layers className="w-12 h-12 text-cyan-400" />,
    title: "Finishing Solutions",
    desc: "Powder coating and assembly services that give your parts the durability and look they need to perform.",
  },
];

export default function Page() {
  const images = ["/hero-welding.png", "/hero-cnc.png", "/hero-bending.png"];

  return (
    <div>
      {/* ✅ Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
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
          </div>

          {/* ✅ Image Slider */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-glow">
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
          </div>
        </div>
      </section>

      {/* ✅ Intro + Fabrication Expertise + Why Choose */}
      <section className="py-20 bg-gray-950/50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Intro Card */}
          <div className="mb-16">
            <div className="p-10 bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl text-center border border-white/10">
              <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 mb-6 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.7)]"></div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to RS Metal — where{" "}
                <span className="gradient-text">advanced machinery</span> meets{" "}
                <span className="gradient-text">skilled craftsmanship</span>.
                From cutting and forming to welding and finishing, we deliver{" "}
                <span className="gradient-text">precision fabrication</span>{" "}
                with reliability and care, ensuring your projects are completed
                to the highest standards — on time and on budget.
              </p>
            </div>
          </div>

          {/* Fabrication Expertise */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-oswald">
              Fabrication Expertise
            </h2>
            <p className="mt-4 text-gray-400">
              We bring together precision processes and skilled craftsmanship to
              deliver fabrication solutions that perform at every stage.
            </p>

            <div className="mt-12 space-y-10">
  {expertise.map((srv, i) => (
    <motion.div
      key={srv.title}
      className="card p-6 flex items-start gap-4 bg-gray-950/60 border border-white/10 rounded-xl cursor-pointer"
      initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
    >
      {/* Icon glows naturally on card hover */}
      <motion.div
        className="inline-block"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        viewport={{ once: true }}
        variants={{
          hover: {
            scale: 1.2,
            filter: "drop-shadow(0 0 12px rgba(34,211,238,0.9))",
          },
        }}
      >
        {srv.icon}
      </motion.div>

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

          {/* Why Choose RS Metal */}
          <h2 className="text-3xl md:text-4xl font-oswald">
            Why Choose RS Metal
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl">
            At RS Metal, we don’t just fabricate parts — we help you bring ideas
            to life with precision, speed, and collaboration. Our approach is
            designed around what matters most to you:
          </p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center">
                <div>{v.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-gray-300">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
