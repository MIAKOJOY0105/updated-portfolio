import React from "react";

export default function CategoryFilter({ active, onSelect, categories }) {
  return (
    <div
      className="flex flex-wrap justify-center gap-3 mt-6"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            active === cat
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
              : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md"
          }`}
        >
          {cat === "all"
            ? "All"
            : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
