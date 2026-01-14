import { useEffect, useRef, useState } from "react";

interface ScrambleTextProps {
  children: string;
  className?: string;
  scrambleOnHover?: boolean;
  duration?: number;
}

const ScrambleText = ({ 
  children, 
  className = "", 
  scrambleOnHover = true,
  duration = 1000 
}: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        children
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return children[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= children.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, duration / (children.length * 3));
  };

  return (
    <span
      className={`inline-block font-mono ${className}`}
      onMouseEnter={scrambleOnHover ? scramble : undefined}
      style={{ fontFamily: "inherit" }}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
