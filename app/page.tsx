"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Page() {
  const images = [
    "/hero-welding.png",
    "/hero-cnc.png",
    "/hero-bending.png",
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-oswald leading-tight">
            Precision <span className="gradient-text">Metal</span> Fabrication
          </h1>
          <p className="mt-5 text-gray-300 max-w-xl">
            CNC cutting, forming, welding and finishing — delivered on time with
            industrial accuracy.
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

        {/* ✅ Image slider */}
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
  );
}
