"use client";

import { motion } from "framer-motion";

export default function BlogArticleClient({
  article,
}: {
  article: { title: string; content: string };
}) {
  const isCAD = article.title.toLowerCase().includes("cad");
  const isLaser = article.title.toLowerCase().includes("laser");

  return (
    <section className="py-20 max-w-4xl mx-auto px-4 text-gray-300 leading-relaxed">
      {/* ✅ Title */}
      <motion.h1
        className="text-3xl md:text-5xl font-oswald mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="gradient-text">{article.title}</span>
      </motion.h1>

      {/* ✅ Article Body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8 text-lg md:text-xl"
      >
        {isCAD && (
          <>
            <p>
              Preparing your{" "}
              <span className="gradient-text">CAD drawings</span> properly before
              fabrication saves time, money, and prevents costly rework. At{" "}
              <span className="gradient-text">RS Metal</span>, we follow a{" "}
              <strong className="text-cyan-400">precision-first</strong> approach
              to ensure your designs translate perfectly to production.
            </p>

            <div className="p-6 rounded-2xl bg-gray-950/60 border border-white/10 hover:border-cyan-400/30 transition-all">
              <h2 className="text-xl font-semibold mb-3 gradient-text">
                🧰 Best Practices for CAD to Fabrication
              </h2>
              <ul className="list-disc ml-5 space-y-3 text-gray-300">
                <li className="pl-2 leading-relaxed">
                  Export files as{" "}
                  <strong className="text-blue-400">DXF</strong> or{" "}
                  <strong className="text-blue-400">DWG</strong> for 2D profiles.
                </li>
                <li className="pl-2 leading-relaxed">
                  Use <strong className="text-violet-400">millimetres</strong>{" "}
                  — not pixels — for accurate scaling.
                </li>
                <li className="pl-2 leading-relaxed">
                  Remove overlapping lines to avoid duplicate tool paths during
                  cutting.
                </li>
                <li className="pl-2 leading-relaxed">
                  Mark <span className="text-cyan-300">bend lines</span> clearly
                  and match radii to material thickness.
                </li>
                <li className="pl-2 leading-relaxed">
                  Keep engravings or text on a separate layer for clean export.
                </li>
              </ul>
            </div>

            <p>
              A clean, well-organised drawing ensures your part is cut with{" "}
              <span className="gradient-text">maximum precision</span> and
              minimal adjustment — the hallmark of true engineering quality.
            </p>
          </>
        )}

        {isLaser && (
          <>
            <p>
              Choosing between{" "}
              <span className="gradient-text">laser</span> and{" "}
              <span className="gradient-text">plasma cutting</span> depends on
              your material, design complexity, and budget. Both are powerful
              tools — the trick is knowing when to use each.
            </p>

            {/* ✅ Section Header */}
            <motion.div
              className="text-center my-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold gradient-text inline-block pb-1">
                ⚡ Laser vs Plasma — The Right Cut for Every Project
              </h2>
            </motion.div>

            {/* ✅ Comparison Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Laser Cutting */}
              <motion.div
                className="p-6 rounded-2xl bg-gray-950/60 border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-400">
                  <span className="text-cyan-400">◆</span>
                  <span>Laser Cutting</span>
                </h2>

                <ul className="list-disc ml-5 space-y-3 text-gray-300">
                  <li className="pl-2 leading-relaxed">
                    Ideal for{" "}
                    <span className="text-cyan-300 font-medium">
                      thin to medium
                    </span>{" "}
                    sheets.
                  </li>
                  <li className="pl-2 leading-relaxed">
                    Produces{" "}
                    <span className="text-blue-400 font-semibold">
                      ultra-clean edges
                    </span>{" "}
                    and fine detail.
                  </li>
                  <li className="pl-2 leading-relaxed">
                    Perfect for logos, intricate cuts, or{" "}
                    <span className="text-violet-400 font-medium">
                      tight tolerances
                    </span>
                    .
                  </li>
                  <li className="pl-2 leading-relaxed">
                    Offers superior precision — ideal when{" "}
                    <span className="text-cyan-300 font-medium">
                      accuracy matters most
                    </span>
                    .
                  </li>
                </ul>
              </motion.div>

              {/* Plasma Cutting */}
              <motion.div
                className="p-6 rounded-2xl bg-gray-950/60 border border-white/10 hover:border-violet-400/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-violet-400">
                  <span className="text-violet-400">◆</span>
                  <span>Plasma Cutting</span>
                </h2>

                <ul className="list-disc ml-5 space-y-3 text-gray-300">
                  <li className="pl-2 leading-relaxed">
                    Designed for{" "}
                    <span className="text-cyan-300 font-medium">
                      thicker steel
                    </span>{" "}
                    or aluminium sheets.
                  </li>
                  <li className="pl-2 leading-relaxed">
                    Faster and more{" "}
                    <span className="text-blue-400 font-medium">
                      cost-effective
                    </span>{" "}
                    for large projects.
                  </li>
                  <li className="pl-2 leading-relaxed">
                    Slightly rougher edges, but ideal for{" "}
                    <span className="text-cyan-300 font-semibold">
                      structural parts
                    </span>
                    .
                  </li>
                  <li className="pl-2 leading-relaxed">
                    Great balance between{" "}
                    <span className="text-violet-300 font-medium">speed</span>{" "}
                    and{" "}
                    <span className="text-cyan-300 font-medium">
                      affordability
                    </span>
                    .
                  </li>
                </ul>
              </motion.div>
            </div>

            <p className="mt-10">
              At <span className="gradient-text">RS Metal</span>, we help you
              balance{" "}
              <strong className="text-blue-400">cost</strong>,{" "}
              <strong className="text-cyan-400">tolerance</strong>, and{" "}
              <strong className="text-violet-400">finish quality</strong> to
              choose the most efficient method for your project.
            </p>
          </>
        )}
      </motion.div>
    </section>
  );
}
