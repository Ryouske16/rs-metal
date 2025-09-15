import Button from '@/components/Button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-oswald leading-tight">
            Your project, <span className="gradient-text">our precision.</span>
          </h1>
          <p className="mt-5 text-gray-300 max-w-xl">
            From prototypes to production — CNC cutting, welding, bending and finishing with industry-grade accuracy.
          </p>
          <div className="mt-8 flex gap-3">
            <Button href="#contact">Get a quote</Button>
            <Button href="#services" variant="ghost">Our services</Button>
          </div>
        </div>

        {/* ✅ Replace placeholder with actual image */}
        <div className="relative">
          <div className="card p-0 overflow-hidden">
            <Image
              src="/hero-welding.png"
              alt="Metal fabrication welding sparks"
              width={560}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
