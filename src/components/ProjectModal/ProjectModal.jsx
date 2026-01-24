import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { RiCloseLine, RiGithubFill, RiGlobalLine } from "react-icons/ri";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Gelap */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Konten Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
          >
            {/* Tombol Close */}
            <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors">
              <RiCloseLine size={24} />
            </button>

            {/* Bagian Gambar (Kiri/Atas) */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-zinc-800">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            {/* Bagian Teks (Kanan/Bawah) */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-emerald-400 font-medium mb-6">{project.subtitle}</p>

              <div className="prose prose-invert mb-8 text-gray-300 leading-relaxed">
                <p>{project.fullDescription}</p>
              </div>

              {/* Tech Stack Tags (Contoh) */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "Tailwind", "Node.js"].map((tag) => (
                  <span key={tag} className="text-xs font-mono bg-zinc-800 border border-zinc-700 text-gray-300 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a href="#" className="flex-1 bg-white text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                  <RiGlobalLine size={20} /> Live Demo
                </a>
                <a href="#" className="flex-1 bg-zinc-800 text-white border border-zinc-700 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors">
                  <RiGithubFill size={20} /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
