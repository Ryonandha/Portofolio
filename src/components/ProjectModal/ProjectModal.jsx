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
      setCurrentImageIndex(0);
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] bg-[#0a0f1a] border border-indigo-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 transform ${
          isAnimating ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        {/* === IMAGE SLIDER SECTION === */}
        <div className="relative w-full h-56 sm:h-72 md:h-80 bg-black/50 group">
          {/* Image */}
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            {images.length > 0 ? (
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            ) : (
              <div className="text-gray-500 text-center p-4">No Image Available</div>
            )}
          </div>

          {/* Dark gradient overlay at bottom for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          {/* Close Button (Top Right) */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-red-500/90 text-white rounded-full transition-colors backdrop-blur-md z-10 focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Slider Navigation (only if > 1 image) */}
          {images.length > 1 && (
            <>
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-indigo-600/90 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 translate-x-2 group-hover:translate-x-0 focus:translate-x-0"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-indigo-600/90 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 -translate-x-2 group-hover:translate-x-0 focus:-translate-x-0"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? "bg-indigo-400 w-5" : "bg-white/50 hover:bg-white"}`}
                    aria-label={`Go to image ${idx + 1}`}
                    aria-current={currentImageIndex === idx ? "true" : "false"}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* === CONTENT SECTION === */}
        <div className="p-5 md:p-7 overflow-y-auto max-h-[calc(90vh-280px)] custom-scrollbar">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-5">
            <div>
              <h2 id="modal-title" className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold text-indigo-200 bg-indigo-900/50 border border-indigo-500/50 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full md:w-auto flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg text-white font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium shadow-lg shadow-indigo-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-base font-semibold text-indigo-300 mb-2 uppercase tracking-wider">Overview</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.deskripsi || "No description provided."}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectModal;