export const metadata = { title: "Projects — RS Metal" };
export default function ProjectsPage(){
  const images = Array.from({length:9},(_,i)=>`https://picsum.photos/seed/rsmetal${i}/800/600`);
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-oswald">Projects</h1>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map(src => (
            <img key={src} src={src} alt="Project" className="rounded-xl border border-white/10" />
          ))}
        </div>
      </div>
    </section>
  );
}
