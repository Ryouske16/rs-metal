export const metadata = { title: "Process — RS Metal" };
const steps = [
  ["1. Quote", "Upload drawings/brief and receive pricing within 24h."],
  ["2. DfM Review", "We optimise for manufacturability and confirm timelines."],
  ["3. Fabrication", "Cutting, forming, welding and finishing to spec."],
  ["4. QC & Delivery", "Dimensional checks and tracked delivery nationwide."],
];
export default function ProcessPage(){
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-oswald">Process</h1>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(([t,d],i)=> (
            <div key={t} className="card p-6">
              <div className="text-3xl font-oswald gradient-text">{String(i+1).padStart(2,"0")}</div>
              <h3 className="mt-2 text-xl font-semibold">{t}</h3>
              <p className="mt-1 text-gray-300">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
