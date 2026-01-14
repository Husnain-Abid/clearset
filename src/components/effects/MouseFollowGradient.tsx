import { useRef, useState, useEffect } from "react";

interface MouseFollowGradientProps {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
}

const MouseFollowGradient = ({ 
  children, 
  className = "",
  gradientSize = 400
}: MouseFollowGradientProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay that follows mouse */}
      <div
        className="absolute pointer-events-none transition-opacity duration-500"
        style={{
          width: gradientSize,
          height: gradientSize,
          left: mousePosition.x - gradientSize / 2,
          top: mousePosition.y - gradientSize / 2,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {children}
    </div>
  );
};

export default MouseFollowGradient;
