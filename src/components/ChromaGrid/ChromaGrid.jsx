import React from "react";
import "./ChromaGrid.css";

const ChromaGrid = ({ items, onItemClick }) => {
  return (
    <div className="chroma-grid">
      {items.map((item) => {
        // LOGIKA PENYELAMAT:
        // Cek apakah pakai array 'images' ATAU string 'image' biasa
        // Ini mencegah error "undefined" yang bikin tampilan jelek
        const thumbnail = item.images && item.images.length > 0 ? item.images[0] : item.image || null;

        return (
          <div
            key={item.id}
            className="chroma-card"
            onClick={() => onItemClick(item)}
            data-aos="fade-up" // Tambahkan animasi agar muncul pelan-pelan
          >
            <div className="chroma-content">
              {/* Gambar Thumbnail */}
              <div className="chroma-image-wrapper">
                {thumbnail ? (
                  <img src={thumbnail} alt={item.title} className="chroma-img" />
                ) : (
                  // Tampilan jika gambar tidak ditemukan (Placeholder Rapi)
                  <div className="w-full h-full flex items-center justify-center bg-indigo-900/20 text-indigo-300">
                    <span className="text-sm font-medium">No Image</span>
                  </div>
                )}
              </div>

              <div className="chroma-details">
                <h3 className="chroma-title">{item.title}</h3>
                <p className="chroma-desc">{item.deskripsi || item.fullDescription || "No description provided."}</p>

                {/* Tech Stack Pills */}
                <div className="chroma-tags">
                  {item.tech?.slice(0, 3).map((t, i) => (
                    <span key={i} className="chroma-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Effect Borders */}
            <div className="chroma-border"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ChromaGrid;
