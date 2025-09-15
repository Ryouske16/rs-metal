import Link from "next/link";

export default function Page() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-oswald leading-tight">
            Precision <span className="gradient-text">Metal</span> Fabrication
          </h1>
          <p className="mt-5 text-gray-300 max-w-xl">
            CNC cutting, forming, welding and finishing — delivered on time with industrial accuracy.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition">Get a quote</Link>
            <Link href="/services" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10">Our services</Link>
          </div>
        </div>
        <div className="rounded-2xl bg-metal-800/80 border border-white/10 shadow-glow p-8">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center">
            <span className="text-gray-400">Hero image / shop floor photo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
