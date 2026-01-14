import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
  rotate?: boolean;
}

const FloatingElement = ({
  children,
  className,
  amplitude = 20,
  duration = 6,
  delay = 0,
  rotate = false,
}: FloatingElementProps) => {
  const style: CSSProperties = {
    animation: `
      float-y ${duration}s ease-in-out infinite ${delay}s
      ${rotate ? `, float-rotate ${duration * 2}s linear infinite ${delay}s` : ""}
    `,
    "--float-amplitude": `${amplitude}px`,
  } as CSSProperties;

  return (
    <div className={cn("will-change-transform", className)} style={style}>
      {children}
    </div>
  );
};

export default FloatingElement;
