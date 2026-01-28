import React from "react";
import "./ChromaGrid.css";

const ChromaGrid = ({ items, onItemClick }) => {
  return (
    <div className="chroma-grid">
      {items.map((item) => {
        // LOGIKA BARU: Ambil gambar pertama dari array 'images'
        // Jika tidak ada array, coba cari properti 'image' lama sebagai cadangan
        const thumbnail = item.images && item.images.length > 0 ? item.images[0] : item.image;

        return (
          <div key={item.id} className="chroma-card" onClick={() => onItemClick(item)}>
            <div className="chroma-content">
              {/* Gambar Thumbnail */}
              <div className="chroma-image-wrapper">{thumbnail ? <img src={thumbnail} alt={item.title} className="chroma-img" /> : <div className="chroma-placeholder">No Image</div>}</div>

              <div className="chroma-details">
                <h3 className="chroma-title">{item.title}</h3>
                <p className="chroma-desc line-clamp-2">{item.deskripsi || "No description provided."}</p>

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
