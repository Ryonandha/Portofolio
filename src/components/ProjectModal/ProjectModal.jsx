import React, { useEffect, useState } from "react";
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import ReactDOM from "react-dom";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setCurrentImageIndex(0); // Reset ke gambar pertama saat dibuka
      setTimeout(() => setIsAnimating(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible || !project) return null;

  // Normalisasi gambar: Pastikan selalu dalam bentuk array
  // Jika di data cuma ada 'image' (string), ubah jadi array
  const images = project.images || (project.image ? [project.image] : []);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"}`} onClick={onClose} />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] bg-[#0f172a] border border-indigo-500/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 transform ${
          isAnimating ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        {/* === IMAGE SLIDER SECTION === */}
        <div className="relative w-full h-56 sm:h-72 md:h-96 bg-black/50 group">
          {/* Gambar */}
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            {images.length > 0 ? (
              <img src={images[currentImageIndex]} alt={`${project.title} screenshot ${currentImageIndex + 1}`} className="w-full h-full object-contain transition-opacity duration-300" />
            ) : (
              <div className="text-gray-500">No Image Available</div>
            )}
          </div>

          {/* Tombol Close (Pojok Kanan Atas) */}
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-500/80 text-white rounded-full transition-colors backdrop-blur-md z-10">
            <X size={20} />
          </button>

          {/* Navigasi Slider (Hanya muncul jika gambar > 1) */}
          {images.length > 1 && (
            <>
              {/* Tombol Kiri */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-indigo-600/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 translate-x-2 group-hover:translate-x-0"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Tombol Kanan */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-indigo-600/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 -translate-x-2 group-hover:translate-x-0"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indikator Titik (Dots) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? "bg-indigo-500 w-6" : "bg-white/50 hover:bg-white"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* === CONTENT SECTION === */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech?.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-900/30 border border-indigo-500/30 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons (Link Berfungsi) */}
            <div className="flex gap-3 w-full md:w-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium shadow-lg shadow-indigo-500/20 transition-all"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-indigo-200 mb-2">Overview</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.deskripsi || "No description provided."}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectModal;
