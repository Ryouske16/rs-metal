import Image from "next/image";
import { Building2, Car, Landmark, Settings, FlaskConical } from "lucide-react";

export const metadata = { title: "Capabilities — RS Metal" };

export default function CapabilitiesPage() {
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
          fill={`url(#${gradientId})`}
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
          fill={`url(#${gradientId})`}
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
          fill={`url(#${gradientId})`}
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
          fill={`url(#${gradientId})`}
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
          fill={`url(#${gradientId})`}
          strokeWidth={2}
        />
      ),
    },
  ];

  return (
    <>
      {/* ✅ Global gradient defs (only once per page) */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#22d3ee" offset="0%" />   {/* cyan-400 */}
            <stop stopColor="#6366f1" offset="100%" /> {/* violet-600 */}
          </linearGradient>
        </defs>
      </svg>

      {/* ✅ Capabilities */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-oswald">Capabilities</h1>
          <p className="mt-4 text-gray-300 max-w-2xl">
            More than just fabrication — our blend of precision, flexibility, and speed ensures your parts
            exceed expectations, not just meet them.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="card p-6 text-center relative">
                {/* ✅ Mini photo */}
                <div className="w-full h-28 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
                {/* ✅ Big stat */}
                <div className="text-3xl md:text-4xl font-bold gradient-text">{c.stat}</div>
                {/* ✅ Title + description */}
                <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-gray-300">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Divider */}
      <div className="border-t border-white/10"></div>

      {/* ✅ Industries We Support */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-oswald">Industries We Support</h2>
          <p className="mt-4 text-gray-400 max-w-3xl">
            Our capabilities extend across multiple industries, helping clients turn ideas into durable,
            high-quality parts with precision and efficiency:
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="card p-6 text-center">
                <div className="mb-4 flex justify-center">{ind.icon}</div>
                <h3 className="text-xl font-semibold">{ind.title}</h3>
                <p className="mt-2 text-gray-300">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
