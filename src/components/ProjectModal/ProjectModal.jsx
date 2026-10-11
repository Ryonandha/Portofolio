import React, { useEffect, useState } from "react";
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, Layers } from "lucide-react";
import ReactDOM from "react-dom";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setCurrentImageIndex(0);
      const timer = setTimeout(() => setIsAnimating(true), 20);
      document.body.style.overflow = "hidden";
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 250);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isVisible || !project) return null;

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
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-3xl max-h-[92vh] bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col transition-all duration-300 transform ${
          isAnimating ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-3"
        }`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800 bg-zinc-900/90 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              {project.categoryName || "Studi Kasus Proyek"}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(92vh-60px)] divide-y divide-zinc-800/80">
          {/* Media Preview Section */}
          <div className="relative w-full aspect-video sm:h-72 bg-zinc-950 flex items-center justify-center overflow-hidden group">
            {images.length > 0 ? (
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover sm:object-contain transition-opacity duration-300"
              />
            ) : (
              <div className="text-zinc-600 text-sm flex items-center gap-2">
                <Layers size={18} />
                <span>Pratinjau visual belum tersedia</span>
              </div>
            )}

            {/* Multiple Images Nav Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-950/70 border border-zinc-800 text-white hover:bg-zinc-800 backdrop-blur-sm transition-all"
                  aria-label="Gambar sebelumnya"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-950/70 border border-zinc-800 text-white hover:bg-zinc-800 backdrop-blur-sm transition-all"
                  aria-label="Gambar berikutnya"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-zinc-950/60 px-2 py-1 rounded-full border border-zinc-800 backdrop-blur-sm">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImageIndex === idx ? "bg-white w-4" : "bg-zinc-600 hover:bg-zinc-400"
                      }`}
                      aria-label={`Pilih gambar ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Details Body */}
          <div className="p-5 sm:p-7 space-y-6">
            {/* Title & Subtitle */}
            <div>
              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-sm text-zinc-400 mt-1">{project.subtitle}</p>
              )}
            </div>

            {/* Highlight Metric Banner (if available) */}
            {project.highlightMetric && (
              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-xs sm:text-sm flex items-center gap-2.5">
                <span className="font-semibold text-indigo-400">⚡ Sorotan:</span>
                <span>{project.highlightMetric}</span>
              </div>
            )}

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">Deskripsi Arsitektur</h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.deskripsi}
              </p>
            </div>

            {/* Features (if present) */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-2.5">
                <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">Fitur Utama & Implementasi</h3>
                <ul className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="space-y-2.5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">Teknologi & Lib</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-sm font-medium border border-zinc-700 transition-all cursor-pointer"
                >
                  <Github size={16} />
                  <span>Lihat Source Code</span>
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
                >
                  <ExternalLink size={16} />
                  <span>Kunjungi Live Web</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;