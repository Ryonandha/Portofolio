import React from "react";
import { motion } from "motion/react";
import "./ChromaGrid.css";

const ChromaGrid = ({ items, onItemClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="chroma-card bg-zinc-800 border border-zinc-700 h-[300px] group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onItemClick(item)}
        >
          {/* Gambar Background */}
          <div className="absolute inset-0 w-full h-full">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* Overlay Text */}
          <div className="chroma-overlay absolute inset-0 flex flex-col justify-end p-6 opacity-90 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">{item.subtitle}</p>
            <div className="mt-3 inline-block">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">View Details &rarr;</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ChromaGrid;
