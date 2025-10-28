import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectsData from "../data/projectsData";

export default function ProjectsPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = projectsData.filter(
    (p) => activeCat === "all" || p.category === activeCat
  );

  const categories = [
    "all",
    "climate",
    "health",
    "food",
    "education",
    "agriculture",
    "others",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-black to-gray-900 text-white">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-purple-800/5 to-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            My Projects
          </h2>
          <p className="text-gray-400 mt-3">
            Dive into my ML & AI projects — from predictive models to intelligent systems.
          </p>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCat(cat)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCat === cat
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-gray-800/60 border border-gray-700 hover:border-cyan-400 text-gray-300"
              }`}
            >
              {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-900/70 border border-gray-700 shadow-md hover:shadow-cyan-500/10"
                onClick={() => setSelected(p)}
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {p.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative bg-gray-900/90 border border-cyan-500/20 rounded-2xl shadow-2xl max-w-2xl w-[90%] p-6 text-white"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-2 right-3 text-gray-400 hover:text-red-400 text-2xl"
                >
                  &times;
                </button>

                <motion.img
                  src={selected.img}
                  alt={selected.title}
                  className="w-full h-48 object-cover rounded-xl mb-5"
                />

                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                  {selected.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4">{selected.desc}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {selected.languages?.map((lang) => (
                    <span
                      key={lang}
                      className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                  {selected.tools?.map((tool) => (
                    <span
                      key={tool}
                      className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center gap-2"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full flex items-center gap-2"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
