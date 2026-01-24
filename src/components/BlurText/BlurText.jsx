import { useRef, useEffect, useState } from "react";

// Kita gunakan Tailwind + CSS standard agar ringan dan sesuai dependencies
const BlurText = ({
  text = "",
  delay = 200,
  animateBy = "words", // 'words' or 'letters'
  direction = "top", // 'top' or 'bottom'
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current); // Hanya animasi sekali
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((element, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-1000 ease-[cubic-bezier(0.2,0.65,0.3,0.9)]"
          style={{
            opacity: inView ? 1 : 0,
            filter: inView ? "blur(0px)" : "blur(10px)",
            transform: inView ? "translate3d(0,0,0)" : direction === "top" ? "translate3d(0,-50px,0)" : "translate3d(0,50px,0)",
            transitionDelay: `${index * (delay / 10)}ms`,
            marginRight: animateBy === "words" ? "0.3em" : "0em", // Spasi antar kata
          }}
        >
          {element}
        </span>
      ))}
    </p>
  );
};

export default BlurText;
