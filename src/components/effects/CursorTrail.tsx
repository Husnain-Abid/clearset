import { useEffect, useRef } from "react";

interface TrailParticle {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<TrailParticle[]>([]);
  const animationRef = useRef<number>();
  const lastMouseRef = useRef({ x: 0, y: 0, time: 0 });
  const currentMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      currentMouseRef.current = { x: e.clientX, y: e.clientY };
      
      const now = Date.now();
      // Throttle particle creation to every 50ms for better performance
      if (now - lastMouseRef.current.time < 50) return;
      lastMouseRef.current = { x: e.clientX, y: e.clientY, time: now };
      
      // Add single smaller particle at cursor position
      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        size: 4,
        opacity: 0.5,
      });
      
      // Limit particle count to 15 for performance
      if (particlesRef.current.length > 15) {
        particlesRef.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw cursor glow effect
      const { x, y } = currentMouseRef.current;
      if (x > 0 || y > 0) {
        // Outer glow
        const outerGradient = ctx.createRadialGradient(x, y, 0, x, y, 40);
        outerGradient.addColorStop(0, "hsla(168, 100%, 50%, 0.3)");
        outerGradient.addColorStop(0.5, "hsla(168, 100%, 50%, 0.1)");
        outerGradient.addColorStop(1, "hsla(168, 100%, 50%, 0)");
        
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI * 2);
        ctx.fillStyle = outerGradient;
        ctx.fill();

        // Inner glow ring
        const innerGradient = ctx.createRadialGradient(x, y, 12, x, y, 22);
        innerGradient.addColorStop(0, "hsla(168, 100%, 60%, 0)");
        innerGradient.addColorStop(0.5, "hsla(168, 100%, 60%, 0.25)");
        innerGradient.addColorStop(1, "hsla(168, 100%, 60%, 0)");
        
        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2);
        ctx.fillStyle = innerGradient;
        ctx.fill();
      }

      // Draw trail particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.opacity -= 0.04;
        particle.size *= 0.95;

        if (particle.opacity <= 0 || particle.size < 0.5) {
          return false;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(168, 100%, 60%, ${particle.opacity})`;
        ctx.fill();

        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
};

export default CursorTrail;
