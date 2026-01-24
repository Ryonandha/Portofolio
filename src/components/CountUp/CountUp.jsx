import { useEffect, useState, useRef } from "react";

const CountUp = ({ from = 0, to = 100, duration = 2, onEnd, separator = ",", className = "" }) => {
  const [count, setCount] = useState(from);
  const startTime = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;

      // Efek Ease Out (Cepat di awal, melambat di akhir)
      const ease = (t) => 1 - Math.pow(1 - t, 3);

      const percentage = Math.min(progress / (duration * 1000), 1);
      const currentCount = Math.floor(from + (to - from) * ease(percentage));

      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        if (onEnd) onEnd();
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [from, to, duration, onEnd]);

  // Format angka dengan separator (misal: 1,000)
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return <span className={className}>{formattedCount}</span>;
};

export default CountUp;
