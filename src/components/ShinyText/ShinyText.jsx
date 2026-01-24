import React from "react";
import "./ShinyText.css";

const ShinyText = ({ text, disabled = false, speed = 3, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? "" : "shiny-text"} ${className}`} style={{ animationDuration }}>
      {text}
    </div>
  );
};

export default ShinyText;
