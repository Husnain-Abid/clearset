import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

interface BreakoutClipProps {
  className?: string;
}

const BreakoutClip = ({ className = "" }: BreakoutClipProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Motion values for smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring configs for different elements
  const smoothSpring = { stiffness: 150, damping: 20 };
  const snappySpring = { stiffness: 300, damping: 25 };
  const bouncySpring = { stiffness: 200, damping: 15 };
  
  // Sprung values for robot
  const robotRotateY = useSpring(mouseX, smoothSpring);
  const robotRotateX = useSpring(mouseY, smoothSpring);
  
  // Sprung values for phone (moves opposite to robot for parallax)
  const phoneRotateY = useSpring(useMotionValue(0), snappySpring);
  const phoneRotateX = useSpring(useMotionValue(0), snappySpring);
  
  // Eye tracking springs
  const eyeX = useSpring(mouseX, bouncySpring);
  const eyeY = useSpring(mouseY, bouncySpring);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const robotY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30]);
  const robotScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1]);
  const glassOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  
  const robotYSpring = useSpring(robotY, smoothSpring);
  const robotScaleSpring = useSpring(robotScale, smoothSpring);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized position (-1 to 1)
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);
      
      // Clamp values
      const clampedX = Math.max(-1, Math.min(1, normalizedX));
      const clampedY = Math.max(-1, Math.min(1, normalizedY));
      
      // More dramatic rotation when hovering
      const multiplier = isHovering ? 35 : 15;
      
      mouseX.set(clampedX * multiplier);
      mouseY.set(clampedY * multiplier * 0.6);
      
      // Phone moves slightly opposite for depth
      phoneRotateY.set(-clampedX * (isHovering ? 12 : 5));
      phoneRotateX.set(clampedY * (isHovering ? 8 : 3));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovering, mouseX, mouseY, phoneRotateY, phoneRotateX]);

  // Floating hashtag badges
  const hashtags = [
    { text: "#AI", x: -120, y: -80, delay: 0 },
    { text: "#Automation", x: 100, y: -60, delay: 0.2 },
    { text: "#Future", x: -100, y: 80, delay: 0.4 },
    { text: "#Tech", x: 120, y: 60, delay: 0.6 },
    { text: "#Innovation", x: -80, y: 0, delay: 0.8 },
  ];

  return (
    <motion.div 
      ref={containerRef}
      className={`relative w-[320px] h-[500px] md:w-[380px] md:h-[600px] cursor-pointer ${className}`}
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        // Reset to center when leaving
        mouseX.set(0);
        mouseY.set(0);
        phoneRotateY.set(0);
        phoneRotateX.set(0);
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Phone Frame */}
      <motion.div
        className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-gray-800 via-gray-900 to-black p-2 shadow-2xl"
        style={{
          rotateY: phoneRotateY,
          rotateX: phoneRotateX,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Phone Screen */}
        <div className="relative w-full h-full rounded-[32px] bg-gradient-to-br from-cyan-900/80 via-blue-900/60 to-black overflow-hidden">
          {/* Screen Content Background */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,200,255,0.15) 0%, transparent 70%)",
            }}
            animate={isHovering ? {
              background: [
                "radial-gradient(ellipse at center, rgba(0,200,255,0.15) 0%, transparent 70%)",
                "radial-gradient(ellipse at center, rgba(0,200,255,0.3) 0%, transparent 80%)",
                "radial-gradient(ellipse at center, rgba(0,200,255,0.15) 0%, transparent 70%)",
              ]
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          {/* Social Media UI Elements */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center"
                animate={isHovering ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-bold text-primary">AI</span>
              </motion.div>
              <span className="text-xs text-white/80">clearset.ai</span>
            </div>
            <div className="flex gap-3">
              <motion.svg 
                className="w-5 h-5 text-white/60" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.2, color: "#ff4757" }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </motion.svg>
              <motion.svg 
                className="w-5 h-5 text-white/60" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.2 }}
              >
                <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>
              </motion.svg>
              <motion.svg 
                className="w-5 h-5 text-white/60" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.2 }}
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </motion.svg>
            </div>
          </div>

          {/* Bookmark icon */}
          <div className="absolute top-4 right-4 z-10">
            <motion.svg 
              className="w-5 h-5 text-white/60" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ scale: 1.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
            </motion.svg>
          </div>

          {/* Floating Hashtags - react to hover */}
          {hashtags.map((tag, i) => (
            <motion.div
              key={tag.text}
              className="absolute text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm"
              style={{
                left: `calc(50% + ${tag.x}px)`,
                top: `calc(40% + ${tag.y}px)`,
                zIndex: 5
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isHovering ? { 
                opacity: [0.6, 1, 0.6], 
                scale: [1, 1.2, 1],
                x: [0, tag.x > 0 ? 20 : -20, 0],
                y: [0, -15, 0]
              } : { 
                opacity: [0.4, 0.8, 0.4], 
                scale: [0.9, 1.1, 0.9],
                x: [0, tag.x > 0 ? 10 : -10, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: isHovering ? 2 : 4,
                delay: tag.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {tag.text}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Robot Breaking Out - dramatically follows mouse */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 z-20 pointer-events-none"
        style={{
          y: robotYSpring,
          scale: robotScaleSpring,
          rotateY: robotRotateY,
          rotateX: robotRotateX,
          translateY: "-60%",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Robot SVG */}
        <motion.svg
          width="280"
          height="350"
          viewBox="0 0 280 350"
          fill="none"
          className="drop-shadow-2xl"
          style={{ filter: "drop-shadow(0 20px 40px rgba(0,200,255,0.3))" }}
          animate={isHovering ? {
            filter: [
              "drop-shadow(0 20px 40px rgba(0,200,255,0.3))",
              "drop-shadow(0 30px 60px rgba(0,200,255,0.5))",
              "drop-shadow(0 20px 40px rgba(0,200,255,0.3))",
            ]
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {/* Robot Head */}
          <defs>
            <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0e0e0" />
              <stop offset="50%" stopColor="#b0b0b0" />
              <stop offset="100%" stopColor="#808080" />
            </linearGradient>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#0066ff" />
            </linearGradient>
            <linearGradient id="glowGradientIntense" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="#00aaff" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="glowIntense">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Head - tilts with mouse */}
          <motion.g
            style={{
              transformOrigin: "140px 70px",
            }}
          >
            <rect x="80" y="20" width="120" height="100" rx="20" fill="url(#robotGradient)" stroke="#666" strokeWidth="2"/>
            
            {/* Antenna */}
            <line x1="140" y1="20" x2="140" y2="0" stroke="#888" strokeWidth="4"/>
            <motion.circle 
              cx="140" 
              cy="0" 
              r="8" 
              fill={isHovering ? "url(#glowGradientIntense)" : "url(#glowGradient)"} 
              filter={isHovering ? "url(#glowIntense)" : "url(#glow)"}
              animate={{ 
                opacity: [0.5, 1, 0.5],
                r: isHovering ? [8, 12, 8] : [8, 10, 8]
              }}
              transition={{ duration: isHovering ? 0.5 : 1.5, repeat: Infinity }}
            />
            
            {/* Eyes - follow mouse cursor */}
            <ellipse cx="110" cy="70" rx="15" ry="20" fill="#1a1a2e" />
            <ellipse cx="170" cy="70" rx="15" ry="20" fill="#1a1a2e" />
            
            {/* Eye pupils - track mouse */}
            <motion.circle 
              cx="110" 
              cy="65" 
              r={isHovering ? 10 : 8}
              fill={isHovering ? "url(#glowGradientIntense)" : "url(#glowGradient)"} 
              filter={isHovering ? "url(#glowIntense)" : "url(#glow)"}
              style={{
                x: useTransform(eyeX, [-35, 35], [-5, 5]),
                y: useTransform(eyeY, [-25, 25], [-4, 4]),
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: isHovering ? 0.8 : 2, repeat: Infinity }}
            />
            <motion.circle 
              cx="170" 
              cy="65" 
              r={isHovering ? 10 : 8}
              fill={isHovering ? "url(#glowGradientIntense)" : "url(#glowGradient)"} 
              filter={isHovering ? "url(#glowIntense)" : "url(#glow)"}
              style={{
                x: useTransform(eyeX, [-35, 35], [-5, 5]),
                y: useTransform(eyeY, [-25, 25], [-4, 4]),
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: isHovering ? 0.8 : 2, repeat: Infinity, delay: 0.2 }}
            />

            {/* Eyebrow expressions on hover */}
            {isHovering && (
              <>
                <motion.rect
                  x="95"
                  y="48"
                  width="30"
                  height="4"
                  rx="2"
                  fill="#666"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -10 }}
                  style={{ transformOrigin: "110px 50px" }}
                />
                <motion.rect
                  x="155"
                  y="48"
                  width="30"
                  height="4"
                  rx="2"
                  fill="#666"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 10 }}
                  style={{ transformOrigin: "170px 50px" }}
                />
              </>
            )}

            {/* Mouth - smiles on hover */}
            <rect x="115" y="95" width="50" height="10" rx="5" fill="#333"/>
            <motion.rect 
              x="120" 
              y="97" 
              width="40" 
              height="6" 
              rx="3" 
              fill={isHovering ? "url(#glowGradientIntense)" : "url(#glowGradient)"}
              animate={{ 
                opacity: isHovering ? [0.8, 1, 0.8] : [0.3, 1, 0.3],
                width: isHovering ? [40, 45, 40] : [40, 40, 40]
              }}
              transition={{ duration: isHovering ? 0.3 : 1, repeat: Infinity }}
            />
          </motion.g>

          {/* Neck */}
          <rect x="120" y="120" width="40" height="20" fill="url(#robotGradient)"/>

          {/* Body */}
          <rect x="60" y="140" width="160" height="120" rx="15" fill="url(#robotGradient)" stroke="#666" strokeWidth="2"/>
          
          {/* Chest Panel */}
          <rect x="90" y="160" width="100" height="60" rx="10" fill="#1a1a2e"/>
          <motion.circle 
            cx="140" 
            cy="190" 
            r="20" 
            fill="none" 
            stroke={isHovering ? "url(#glowGradientIntense)" : "url(#glowGradient)"} 
            strokeWidth={isHovering ? 4 : 3}
            filter={isHovering ? "url(#glowIntense)" : "url(#glow)"}
            animate={{ 
              scale: isHovering ? [1, 1.2, 1] : [1, 1.1, 1], 
              opacity: [0.5, 1, 0.5] 
            }}
            transition={{ duration: isHovering ? 1 : 2, repeat: Infinity }}
          />
          <motion.circle 
            cx="140" 
            cy="190" 
            r={isHovering ? 12 : 10}
            fill={isHovering ? "url(#glowGradientIntense)" : "url(#glowGradient)"}
            filter={isHovering ? "url(#glowIntense)" : "url(#glow)"}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: isHovering ? 0.8 : 1.5, repeat: Infinity }}
          />

          {/* Arms - more dramatic movement on hover */}
          {/* Left Arm */}
          <motion.g
            animate={{ 
              rotate: isHovering ? [0, -15, 0] : [0, -5, 0]
            }}
            transition={{ duration: isHovering ? 0.8 : 3, repeat: Infinity }}
            style={{ transformOrigin: "60px 160px" }}
          >
            <rect x="20" y="145" width="40" height="80" rx="10" fill="url(#robotGradient)" stroke="#666" strokeWidth="2"/>
            <motion.circle 
              cx="40" 
              cy="235" 
              r="20" 
              fill="url(#robotGradient)" 
              stroke="#666" 
              strokeWidth="2"
              animate={isHovering ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </motion.g>
          
          {/* Right Arm - waves enthusiastically on hover */}
          <motion.g
            animate={{ 
              rotate: isHovering ? [0, 25, 0] : [0, 10, 0]
            }}
            transition={{ duration: isHovering ? 0.6 : 2, repeat: Infinity }}
            style={{ transformOrigin: "220px 160px" }}
          >
            <rect x="220" y="145" width="40" height="80" rx="10" fill="url(#robotGradient)" stroke="#666" strokeWidth="2"/>
            <motion.g
              animate={{ 
                rotate: isHovering ? [0, 40, 0] : [0, 20, 0]
              }}
              transition={{ duration: isHovering ? 0.3 : 0.5, repeat: Infinity }}
              style={{ transformOrigin: "240px 225px" }}
            >
              <circle cx="240" cy="235" r="20" fill="url(#robotGradient)" stroke="#666" strokeWidth="2"/>
            </motion.g>
          </motion.g>

          {/* Lower body fade */}
          <rect x="60" y="260" width="160" height="40" fill="url(#robotGradient)" opacity="0.8"/>
          <rect x="60" y="290" width="160" height="30" fill="url(#robotGradient)" opacity="0.4"/>
        </motion.svg>
      </motion.div>

      {/* Glass Shards Effect - more intense on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-15"
        style={{ opacity: glassOpacity }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + (i % 4) * 22}%`,
              top: `${25 + Math.floor(i / 4) * 25}%`,
              width: `${15 + Math.random() * 25}px`,
              height: `${15 + Math.random() * 25}px`,
              background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 100%)",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              transform: `rotate(${i * 30}deg)`,
            }}
            animate={{
              y: isHovering ? [0, -40 - i * 8, -80 - i * 15] : [0, -20 - i * 5, -40 - i * 10],
              x: [(i % 2 === 0 ? -1 : 1) * 10, (i % 2 === 0 ? -1 : 1) * (isHovering ? 50 : 30)],
              opacity: isHovering ? [0.2, 1, 0] : [0, 0.8, 0],
              rotate: [i * 30, i * 30 + (isHovering ? 180 : 90)],
              scale: isHovering ? [1, 1.5, 0.3] : [1, 1.2, 0.5]
            }}
            transition={{
              duration: isHovering ? 1.5 : 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Energy Particles - more particles and faster on hover */}
      {[...Array(isHovering ? 20 : 12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            left: `${50 + Math.cos(i * (isHovering ? 18 : 30) * Math.PI / 180) * 40}%`,
            top: `${50 + Math.sin(i * (isHovering ? 18 : 30) * Math.PI / 180) * 40}%`,
            boxShadow: isHovering 
              ? "0 0 15px 4px hsl(var(--primary))" 
              : "0 0 10px 2px hsl(var(--primary))",
          }}
          animate={{
            x: [0, Math.cos(i * (isHovering ? 18 : 30) * Math.PI / 180) * (isHovering ? 150 : 100)],
            y: [0, Math.sin(i * (isHovering ? 18 : 30) * Math.PI / 180) * (isHovering ? 150 : 100)],
            opacity: [0, 1, 0],
            scale: isHovering ? [0.8, 2, 0] : [0.5, 1.5, 0],
          }}
          transition={{
            duration: isHovering ? 1 : 2,
            repeat: Infinity,
            delay: i * (isHovering ? 0.08 : 0.15),
            ease: "easeOut"
          }}
        />
      ))}

      {/* Glow ring around phone - intensifies on hover */}
      <motion.div
        className="absolute inset-0 rounded-[40px] pointer-events-none"
        animate={{
          boxShadow: isHovering ? [
            "0 0 80px 20px rgba(0,200,255,0.5), inset 0 0 80px 20px rgba(0,200,255,0.2)",
            "0 0 120px 40px rgba(0,200,255,0.6), inset 0 0 100px 30px rgba(0,200,255,0.3)",
            "0 0 80px 20px rgba(0,200,255,0.5), inset 0 0 80px 20px rgba(0,200,255,0.2)",
          ] : [
            "0 0 60px 10px rgba(0,200,255,0.3), inset 0 0 60px 10px rgba(0,200,255,0.1)",
            "0 0 80px 20px rgba(0,200,255,0.4), inset 0 0 80px 20px rgba(0,200,255,0.2)",
            "0 0 60px 10px rgba(0,200,255,0.3), inset 0 0 60px 10px rgba(0,200,255,0.1)",
          ]
        }}
        transition={{ duration: isHovering ? 1 : 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hover sparkle burst effect */}
      {isHovering && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-1 h-4 bg-gradient-to-b from-primary to-transparent rounded-full"
              style={{
                left: "50%",
                top: "30%",
                transformOrigin: "center bottom",
                rotate: `${i * 45}deg`,
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: [0, 1.5, 0],
                opacity: [0, 1, 0],
                y: [0, -30, -60],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

export default BreakoutClip;
