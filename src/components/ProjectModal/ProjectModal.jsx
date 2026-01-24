import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { RiCloseLine, RiGithubFill, RiGlobalLine } from "react-icons/ri";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Gelap dengan Blur */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-sm" />

          {/* Konten Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-[#1e1b4b] border border-indigo-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 max-h-[90vh] flex flex-col md:flex-row"
          >
            {/* Tombol Close */}
            <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-indigo-600 text-white rounded-full transition-colors backdrop-blur-md">
              <RiCloseLine size={24} />
            </button>

            {/* Bagian Gambar */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-black/50 relative group">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b] to-transparent opacity-60"></div>
            </div>

            {/* Bagian Teks */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto custom-scrollbar">
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-indigo-400 font-medium mb-6 text-lg">{project.subtitle}</p>

              <div className="prose prose-invert mb-8 text-indigo-100/80 leading-relaxed text-sm md:text-base">
                <p>{project.fullDescription}</p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "Tailwind", "Node.js"].map((tag) => (
                  <span key={tag} className="text-xs font-mono bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a href="#" className="flex-1 bg-white text-indigo-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-50 transition-all transform hover:-translate-y-1 shadow-lg">
                  <RiGlobalLine size={20} /> Live Demo
                </a>
                <a href="#" className="flex-1 bg-indigo-900/50 text-white border border-indigo-500/50 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all transform hover:-translate-y-1">
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
