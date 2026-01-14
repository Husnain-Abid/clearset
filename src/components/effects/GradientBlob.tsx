import { useEffect, useRef } from "react";

interface GradientBlobProps {
  className?: string;
  colors?: string[];
  size?: number;
  blur?: number;
  speed?: number;
}

const GradientBlob = ({
  className = "",
  colors = ["hsl(var(--primary))", "hsl(var(--accent))"],
  size = 400,
  blur = 100,
  speed = 20,
}: GradientBlobProps) => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    let animationFrame: number;
    let angle = 0;

    const animate = () => {
      angle += 0.5;
      const x = Math.sin(angle * (Math.PI / 180)) * 50;
      const y = Math.cos(angle * (Math.PI / 180)) * 30;
      const scale = 1 + Math.sin(angle * 2 * (Math.PI / 180)) * 0.1;

      blob.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return (
    <div
      ref={blobRef}
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${colors.join(", ")})`,
        borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        filter: `blur(${blur}px)`,
        opacity: 0.4,
        animation: `morphBlob ${speed}s ease-in-out infinite`,
      }}
    />
  );
};

export default GradientBlob;
