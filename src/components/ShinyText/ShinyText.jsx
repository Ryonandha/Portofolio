import React from "react";
import "./ShinyText.css";

const ShinyText = ({ text, disabled = false, speed = 3, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`relative inline-block ${disabled ? "" : "shiny-text"} ${className}`}
      style={{ animationDuration }}
      data-text={text}
    >
      <span className="relative z-10 text-white bg-clip-text">
        {text}
      </span>
    </div>
  );
};

export default ShinyText;