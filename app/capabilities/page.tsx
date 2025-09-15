export const metadata = { title: "Capabilities — RS Metal" };
export default function CapabilitiesPage(){
  const stats = [
    ["Tolerance", "±0.2 mm"],
    ["Sheet Size", "3000 × 1500 mm"],
    ["Thickness", "0.9 – 20 mm"],
    ["Lead Time", "3–7 days"],
  ];
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-oswald">Capabilities</h1>
          <p className="mt-4 text-gray-300 max-w-xl">Industrial capacity with small-batch flexibility across mild steel, stainless, and aluminium.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(([k,v]) => (
            <div key={k} className="card p-5">
              <div className="text-sm text-gray-400">{k}</div>
              <div className="text-2xl font-semibold gradient-text">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
