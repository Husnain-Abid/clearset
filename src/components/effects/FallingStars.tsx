import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

const FallingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createStars = () => {
      const starCount = Math.min(30, Math.floor((canvas.width * canvas.height) / 40000));
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          size: Math.random() * 6 + 4,
          speed: Math.random() * 0.8 + 0.3,
          opacity: Math.random() * 0.4 + 0.5,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          twinkleSpeed: Math.random() * 0.05 + 0.02,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, opacity: number) => {
      const spikes = 4;
      const outerRadius = size;
      const innerRadius = size * 0.4;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();

      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.closePath();
      ctx.fillStyle = `hsla(168, 100%, 75%, ${opacity})`;
      ctx.shadowColor = `hsla(168, 100%, 60%, ${opacity * 1.5})`;
      ctx.shadowBlur = size * 4;
      ctx.fill();
      ctx.restore();
    };

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      starsRef.current.forEach((star) => {
        star.y += star.speed;
        star.rotation += star.rotationSpeed;

        // Twinkle effect
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;

        // Reset to top when falling off bottom
        if (star.y > canvas.height + star.size) {
          star.y = -star.size * 2;
          star.x = Math.random() * canvas.width;
        }

        drawStar(ctx, star.x, star.y, star.size, star.rotation, currentOpacity);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  );
};

export default FallingStars;
