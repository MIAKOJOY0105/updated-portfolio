import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/70 rounded-2xl shadow-2xl border border-white/30 backdrop-blur-xl max-w-2xl w-[90%] p-8 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
          >
            &times;
          </button>

          {/* Image */}
          <div className="overflow-hidden rounded-xl mb-6 shadow-md">
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          {/* Info */}
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            {project.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {project.desc ||
              "This project uses modern web technologies and AI for elegant results."}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
              Category: {project.category || "General"}
            </span>
            <span className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-3 py-1 rounded-full text-sm">
              Stack: {project.stack || "React, Node.js"}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all duration-300"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-md transition-all duration-300"
              >
                <Github size={18} /> GitHub
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
