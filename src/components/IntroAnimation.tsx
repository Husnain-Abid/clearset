import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useMemo, useEffect } from 'react';
import * as THREE from 'three';

interface ParticleSystemProps {
  phase: 'drop' | 'explode' | 'hold' | 'implode' | 'rise' | 'done';
  onPhaseComplete: () => void;
}

// Sparkle particles that twinkle during explosion
const Sparkles = ({ active }: { active: boolean }) => {
  const sparklesRef = useRef<THREE.Points>(null);
  const sparkleCount = 500;
  
  const { positions, sizes, twinkleOffsets } = useMemo(() => {
    const positions = new Float32Array(sparkleCount * 3);
    const sizes = new Float32Array(sparkleCount);
    const twinkleOffsets = new Float32Array(sparkleCount);
    
    for (let i = 0; i < sparkleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      sizes[i] = Math.random() * 0.08 + 0.02;
      twinkleOffsets[i] = Math.random() * Math.PI * 2;
    }
    
    return { positions, sizes, twinkleOffsets };
  }, []);
  
  useFrame((state) => {
    if (sparklesRef.current && active) {
      const time = state.clock.elapsedTime;
      const material = sparklesRef.current.material as THREE.PointsMaterial;
      material.opacity = 0.6 + Math.sin(time * 3) * 0.3;
    }
  });
  
  if (!active) return null;
  
  return (
    <points ref={sparklesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Ring burst effect during explosion
const RingBurst = ({ active, progress }: { active: boolean; progress: number }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (ringRef.current && active) {
      const scale = progress * 8;
      ringRef.current.scale.set(scale, scale, scale);
      const material = ringRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = Math.max(0, 1 - progress);
    }
  });
  
  if (!active) return null;
  
  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.9, 1, 64]} />
      <meshBasicMaterial color="#00e5a0" transparent opacity={1} side={THREE.DoubleSide} />
    </mesh>
  );
};

// Secondary particle trails
const ParticleTrails = ({ active, progress }: { active: boolean; progress: number }) => {
  const trailsRef = useRef<THREE.Points>(null);
  const trailCount = 800;
  
  const { positions, velocities, originalPositions, colors } = useMemo(() => {
    const positions = new Float32Array(trailCount * 3);
    const velocities = new Float32Array(trailCount * 3);
    const originalPositions = new Float32Array(trailCount * 3);
    const colors = new Float32Array(trailCount * 3);
    
    for (let i = 0; i < trailCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 0.4 + Math.random() * 0.4;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
      
      const speed = 3 + Math.random() * 4;
      velocities[i * 3] = x * speed * (0.5 + Math.random());
      velocities[i * 3 + 1] = y * speed * (0.5 + Math.random());
      velocities[i * 3 + 2] = z * speed * (0.5 + Math.random());
      
      // Color variation: cyan to green to white
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 0.9; colors[i * 3 + 2] = 0.63; // Primary green
      } else if (colorChoice < 0.7) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 0.65; colors[i * 3 + 2] = 0.88; // Cyan
      } else {
        colors[i * 3] = 1; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 1; // White sparkle
      }
    }
    
    return { positions, velocities, originalPositions, colors };
  }, []);
  
  useFrame(() => {
    if (trailsRef.current && active) {
      const geometry = trailsRef.current.geometry;
      const positionAttr = geometry.attributes.position;
      
      for (let i = 0; i < trailCount; i++) {
        positionAttr.setXYZ(
          i,
          originalPositions[i * 3] + velocities[i * 3] * progress,
          originalPositions[i * 3 + 1] + velocities[i * 3 + 1] * progress,
          originalPositions[i * 3 + 2] + velocities[i * 3 + 2] * progress
        );
      }
      positionAttr.needsUpdate = true;
      
      const material = trailsRef.current.material as THREE.PointsMaterial;
      material.opacity = Math.max(0, 1 - progress * 0.5);
    }
  });
  
  if (!active) return null;
  
  return (
    <points ref={trailsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={1}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const ParticleSystem = ({ phase, onPhaseComplete }: ParticleSystemProps) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const phaseStartTime = useRef(0);
  const [explosionProgress, setExplosionProgress] = useState(0);
  
  const particleCount = 3000;
  
  const { positions, velocities, originalPositions, sizes } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 0.8;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
      
      // Varied explosion speeds for more dynamic effect
      const speed = 2 + Math.random() * 4;
      const wobble = 0.3;
      velocities[i * 3] = x * speed + (Math.random() - 0.5) * wobble;
      velocities[i * 3 + 1] = y * speed + (Math.random() - 0.5) * wobble;
      velocities[i * 3 + 2] = z * speed + (Math.random() - 0.5) * wobble;
      
      sizes[i] = 0.02 + Math.random() * 0.06;
    }
    
    return { positions, velocities, originalPositions, sizes };
  }, []);
  
  useEffect(() => {
    phaseStartTime.current = 0;
    setExplosionProgress(0);
  }, [phase]);
  
  useFrame((state, delta) => {
    phaseStartTime.current += delta;
    const time = phaseStartTime.current;
    
    // Animate glow sphere
    if (glowRef.current) {
      glowRef.current.rotation.x += delta * 0.5;
      glowRef.current.rotation.y += delta * 0.3;
    }
    
    if (phase === 'drop') {
      if (sphereRef.current) {
        const targetY = 0;
        const startY = 8;
        const progress = Math.min(time / 1.2, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        sphereRef.current.position.y = startY - (startY - targetY) * eased;
        
        // Pulsing glow as it drops
        const material = sphereRef.current.material as THREE.MeshStandardMaterial;
        material.emissiveIntensity = 0.5 + Math.sin(time * 8) * 0.2;
        
        if (progress >= 1) {
          onPhaseComplete();
        }
      }
    }
    
    if (phase === 'explode') {
      if (particlesRef.current) {
        const geometry = particlesRef.current.geometry;
        const positionAttr = geometry.attributes.position;
        const progress = Math.min(time / 0.8, 1);
        const eased = 1 - Math.pow(1 - progress, 2);
        setExplosionProgress(eased);
        
        for (let i = 0; i < particleCount; i++) {
          // Add slight spiral motion
          const spiralAngle = eased * Math.PI * 0.5;
          const cos = Math.cos(spiralAngle * (i % 3 === 0 ? 1 : -1) * 0.3);
          const sin = Math.sin(spiralAngle * (i % 3 === 0 ? 1 : -1) * 0.3);
          
          const baseX = originalPositions[i * 3] + velocities[i * 3] * eased;
          const baseZ = originalPositions[i * 3 + 2] + velocities[i * 3 + 2] * eased;
          
          positionAttr.setXYZ(
            i,
            baseX * cos - baseZ * sin,
            originalPositions[i * 3 + 1] + velocities[i * 3 + 1] * eased,
            baseX * sin + baseZ * cos
          );
        }
        positionAttr.needsUpdate = true;
        
        // Animate particle size
        const material = particlesRef.current.material as THREE.PointsMaterial;
        material.size = 0.05 + eased * 0.03;
        
        if (progress >= 1) {
          onPhaseComplete();
        }
      }
    }
    
    if (phase === 'hold') {
      // Keep particles shimmering
      if (particlesRef.current) {
        const material = particlesRef.current.material as THREE.PointsMaterial;
        material.opacity = 0.7 + Math.sin(time * 4) * 0.2;
      }
      setExplosionProgress(1);
      
      if (time >= 1.5) {
        onPhaseComplete();
      }
    }
    
    if (phase === 'implode') {
      if (particlesRef.current) {
        const geometry = particlesRef.current.geometry;
        const positionAttr = geometry.attributes.position;
        const progress = Math.min(time / 0.8, 1);
        const eased = Math.pow(progress, 2);
        setExplosionProgress(1 - eased);
        
        for (let i = 0; i < particleCount; i++) {
          const explodedX = originalPositions[i * 3] + velocities[i * 3];
          const explodedY = originalPositions[i * 3 + 1] + velocities[i * 3 + 1];
          const explodedZ = originalPositions[i * 3 + 2] + velocities[i * 3 + 2];
          
          positionAttr.setXYZ(
            i,
            explodedX - velocities[i * 3] * eased,
            explodedY - velocities[i * 3 + 1] * eased,
            explodedZ - velocities[i * 3 + 2] * eased
          );
        }
        positionAttr.needsUpdate = true;
        
        if (progress >= 1) {
          onPhaseComplete();
        }
      }
    }
    
    if (phase === 'rise') {
      if (sphereRef.current) {
        const startY = 0;
        const targetY = -8;
        const progress = Math.min(time / 1, 1);
        const eased = Math.pow(progress, 2);
        sphereRef.current.position.y = startY + (targetY - startY) * eased;
        
        if (progress >= 1) {
          onPhaseComplete();
        }
      }
    }
  });
  
  const showSphere = phase === 'drop' || phase === 'rise';
  const showParticles = phase === 'explode' || phase === 'hold' || phase === 'implode';
  const showEffects = phase === 'explode' || phase === 'hold';
  
  return (
    <>
      {showSphere && (
        <group>
          <mesh ref={sphereRef} position={[0, 8, 0]}>
            <sphereGeometry args={[0.8, 64, 64]} />
            <meshStandardMaterial 
              color="#00e5a0" 
              emissive="#00e5a0" 
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          {/* Outer glow */}
          <mesh ref={glowRef} position={[0, 8, 0]}>
            <sphereGeometry args={[1.1, 32, 32]} />
            <meshBasicMaterial color="#00e5a0" transparent opacity={0.15} />
          </mesh>
        </group>
      )}
      
      {showParticles && (
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
          </bufferGeometry>
          <pointsMaterial 
            size={0.05} 
            color="#00e5a0" 
            transparent 
            opacity={0.9}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
          />
        </points>
      )}
      
      {/* Additional effects */}
      <Sparkles active={showEffects} />
      <RingBurst active={phase === 'explode'} progress={explosionProgress} />
      <ParticleTrails active={showParticles} progress={explosionProgress} />
      
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00e5a0" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00a5e0" />
      <pointLight position={[0, 0, 5]} intensity={showEffects ? 2 : 0.5} color="#ffffff" />
    </>
  );
};

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<'drop' | 'explode' | 'hold' | 'implode' | 'rise' | 'done'>('drop');
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  const handlePhaseComplete = () => {
    switch (phase) {
      case 'drop':
        setPhase('explode');
        break;
      case 'explode':
        setShowText(true);
        setPhase('hold');
        break;
      case 'hold':
        setShowText(false);
        setPhase('implode');
        break;
      case 'implode':
        setPhase('rise');
        break;
      case 'rise':
        setFadeOut(true);
        setTimeout(() => {
          setPhase('done');
          onComplete();
        }, 500);
        break;
    }
  };
  
  if (phase === 'done') return null;
  
  return (
    <div 
      className={`fixed inset-0 z-50 bg-background transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ParticleSystem phase={phase} onPhaseComplete={handlePhaseComplete} />
      </Canvas>
      
      {/* ClearSet.AI Text */}
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500 ${
          showText ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          <span className="text-foreground">Clear</span>
          <span className="text-primary">Set</span>
          <span className="text-foreground">.AI</span>
        </h1>
      </div>
      
      {/* Skip button */}
      <button
        onClick={() => {
          setFadeOut(true);
          setTimeout(() => {
            setPhase('done');
            onComplete();
          }, 300);
        }}
        className="absolute bottom-8 right-8 text-muted-foreground hover:text-foreground transition-colors text-sm"
      >
        Skip Intro →
      </button>
    </div>
  );
};

export default IntroAnimation;
