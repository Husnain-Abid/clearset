import { useState, useRef } from "react";

interface SplitTextHoverProps {
  children: string;
  className?: string;
  hoverClassName?: string;
}

const SplitTextHover = ({ children, className = "", hoverClassName = "text-primary" }: SplitTextHoverProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  const characters = children.split("");

  const getProximityScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.3;
    if (distance === 1) return 1.15;
    if (distance === 2) return 1.05;
    return 1;
  };

  const getProximityTranslate = (index: number) => {
    if (hoveredIndex === null) return 0;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return -8;
    if (distance === 1) return -4;
    if (distance === 2) return -2;
    return 0;
  };

  return (
    <span ref={containerRef} className={`inline-flex ${className}`}>
      {characters.map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ease-out cursor-default ${
            hoveredIndex === index ? hoverClassName : ""
          }`}
          style={{
            transform: `scale(${getProximityScale(index)}) translateY(${getProximityTranslate(index)}px)`,
            textShadow: hoveredIndex === index ? "0 0 20px hsl(var(--primary) / 0.5)" : "none",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default SplitTextHover;
