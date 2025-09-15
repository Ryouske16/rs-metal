export const metadata = { title: "Services — RS Metal" };
const items = [
  { title: "CNC Laser/Plasma Cutting", desc: "High-precision cutting on steel, aluminium and stainless." },
  { title: "Bending & Forming", desc: "Press brake forming for complex geometries and repeatability." },
  { title: "MIG/TIG Welding", desc: "Certified welders for structural and fine fabrication." },
  { title: "Powder Coating", desc: "Durable finishes with consistent colour and texture." },
  { title: "CAD/CAM", desc: "Design support and DfM to accelerate your build." },
  { title: "Assembly", desc: "Complete assemblies with fasteners and QA checks." },
];
export default function ServicesPage(){
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-oswald">Services</h1>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(it => (
            <div key={it.title} className="card p-6">
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-gray-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
