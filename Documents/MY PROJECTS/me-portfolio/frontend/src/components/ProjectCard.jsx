import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.35 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-white/10"
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
        <h4 className="text-white text-lg font-semibold">{project.title}</h4>
        <p className="text-gray-200 text-sm mt-1 line-clamp-3">{project.desc}</p>
      </div>
    </motion.div>
  );
}
