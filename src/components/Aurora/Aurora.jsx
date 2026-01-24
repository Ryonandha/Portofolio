import React from "react";
import "./Aurora.css";

const Aurora = ({ colorStops = ["#577870", "#1F97A6", "#127B99"], speed = 0.5 }) => {
  // Kita konversi props speed menjadi durasi animasi CSS
  const duration = 10 / speed;

  return (
    <div className="aurora-container pointer-events-none">
      {/* Layer 1 */}
      <div
        className="aurora-blob"
        style={{
          backgroundColor: colorStops[0],
          width: "60vw",
          height: "60vw",
          top: "-10%",
          left: "-10%",
          animationDuration: `${duration}s`,
        }}
      />
      {/* Layer 2 */}
      <div
        className="aurora-blob"
        style={{
          backgroundColor: colorStops[1],
          width: "50vw",
          height: "50vw",
          top: "20%",
          right: "-10%",
          animationDuration: `${duration * 1.5}s`,
          animationDirection: "alternate-reverse",
        }}
      />
      {/* Layer 3 */}
      <div
        className="aurora-blob"
        style={{
          backgroundColor: colorStops[2],
          width: "40vw",
          height: "40vw",
          bottom: "-10%",
          left: "20%",
          animationDuration: `${duration * 1.2}s`,
        }}
      />
    </div>
  );
};

export default Aurora;
