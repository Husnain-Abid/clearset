import { useEffect, useState, useRef } from "react";

interface StackingTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

const StackingText = ({ words, className = "", interval = 2000 }: StackingTextProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <span
        className={`inline-block transition-all duration-500 ${
          isAnimating ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {words[activeIndex]}
      </span>
    </span>
  );
};

export default StackingText;
