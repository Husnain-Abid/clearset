import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
  continuous?: boolean;
}

const GlitchText = ({ 
  children, 
  className, 
  intensity = "medium",
  continuous = false 
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (continuous) {
      const interval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }, 3000 + Math.random() * 2000);
      return () => clearInterval(interval);
    }
  }, [continuous]);

  const intensityClass = {
    low: "glitch-low",
    medium: "glitch-medium", 
    high: "glitch-high"
  };

  return (
    <span 
      className={cn(
        "glitch-text relative inline-block",
        isGlitching && "glitching",
        intensityClass[intensity],
        className
      )}
      data-text={children}
      onMouseEnter={() => !continuous && setIsGlitching(true)}
      onMouseLeave={() => !continuous && setIsGlitching(false)}
    >
      {children}
    </span>
  );
};

export default GlitchText;
