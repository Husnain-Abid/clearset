import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  type?: "words" | "chars";
}

const TextReveal = ({
  children,
  className,
  delay = 0,
  staggerDelay = 50,
  type = "words",
}: TextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const elements = type === "words" 
    ? children.split(" ")
    : children.split("");

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {elements.map((element, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden"
        >
          <span
            className="inline-block transition-all duration-500"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${delay + index * staggerDelay}ms`,
            }}
          >
            {element}
            {type === "words" && index < elements.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
};

export default TextReveal;
