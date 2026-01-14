import { useRef, useEffect, useState } from "react";

interface StackedScrollCardProps {
  children: React.ReactNode;
  index: number;
  total: number;
  className?: string;
}

const StackedScrollCard = ({ children, index, total, className = "" }: StackedScrollCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far into the viewport the card is
      const startPoint = windowHeight * 0.8;
      const endPoint = windowHeight * 0.3;
      
      if (rect.top > startPoint) {
        setScrollProgress(0);
      } else if (rect.top < endPoint) {
        setScrollProgress(1);
      } else {
        const progress = (startPoint - rect.top) / (startPoint - endPoint);
        setScrollProgress(Math.min(1, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Staggered delay based on index
  const staggerDelay = index * 0.05;
  
  // Calculate transforms based on scroll progress
  const translateY = (1 - scrollProgress) * 100;
  const opacity = scrollProgress;
  const scale = 0.9 + (scrollProgress * 0.1);
  const rotateX = (1 - scrollProgress) * 15;

  return (
    <div
      ref={cardRef}
      className={`transition-none ${className}`}
      style={{
        transform: `perspective(1000px) translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`,
        opacity: opacity,
        transitionDelay: `${staggerDelay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default StackedScrollCard;
