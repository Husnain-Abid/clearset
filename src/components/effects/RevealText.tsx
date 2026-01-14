import { useEffect, useRef, useState } from "react";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const RevealText = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 50,
  direction = "up",
}: RevealTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = children.split(" ");

  const getTransform = (visible: boolean) => {
    if (visible) return "translate(0, 0)";
    switch (direction) {
      case "up":
        return "translateY(100%)";
      case "down":
        return "translateY(-100%)";
      case "left":
        return "translateX(100%)";
      case "right":
        return "translateX(-100%)";
    }
  };

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
          <span
            className="inline-block transition-all duration-700 ease-out"
            style={{
              transform: getTransform(isVisible),
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${delay + wordIndex * staggerDelay}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
};

export default RevealText;
