import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';

export default function PremiumBackground() {
  // Mouse coordinates (defaulting offscreen initially)
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth springs for high performance cursor tracking
  const springConfig = { damping: 45, stiffness: 90, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Motion template string for mouse reactive ambient gold/indigo light spot
  const background = useMotionTemplate`radial-gradient(circle 480px at ${smoothX}px ${smoothY}px, rgba(124, 58, 237, 0.035), transparent 80%)`;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#FFFFFF] dark:bg-[#07090e] transition-colors duration-1000">
      {/* 1. Subtle noise texture layer */}
      <div className="absolute inset-0 noise-bg opacity-[0.02] dark:opacity-[0.05]" />

      {/* 2. Slow floating gradient blob 1 - Top Left */}
      <div
        className="absolute top-[-20%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-violet-200/12 to-purple-100/0 dark:from-purple-600/5 dark:to-transparent blur-[100px] opacity-75 pointer-events-none transform-gpu"
        style={{ willChange: 'transform' }}
      />
      
      {/* 3. Slow floating gradient blob 2 - Bottom Right */}
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-fuchsia-200/8 to-violet-100/0 dark:from-fuchsia-500/4 dark:to-transparent blur-[90px] opacity-70 pointer-events-none transform-gpu"
        style={{ willChange: 'transform' }}
      />

      {/* 4. Elegant center highlight for Apple Keynote feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_85%)] dark:bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.65),transparent_85%)]" />

      {/* 5. Smooth mouse reactive spotlight */}
      <motion.div 
        className="absolute inset-0" 
        style={{ background }} 
      />
    </div>
  );
}
