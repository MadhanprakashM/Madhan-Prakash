import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles } from 'lucide-react';

export default function PersonalBrand() {
  // Generate a list of decorative floating background particles
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 5 + 8,
    delay: Math.random() * -6,
  }));

  return (
    <section id="brand" className="py-10 sm:py-14 bg-transparent relative overflow-visible border-t border-slate-100/60 dark:border-slate-900/40">
      {/* Editorial matrix grid overlays */}
      <div className="absolute inset-0 matrix-grid-pattern opacity-[0.08] dark:opacity-[0.15] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-8 sm:mb-10 space-y-1.5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-white/70 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 rounded-full text-brand-purple text-[10px] font-bold uppercase tracking-[0.2em] shadow-3xs backdrop-blur-md">
            <Sparkles className="w-2.5 h-2.5 text-brand-purple-light animate-pulse" />
            <span>IDENTITY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Personal Brand
          </h2>
          <div className="w-10 h-0.5 bg-brand-purple mx-auto rounded-full" />
        </motion.div>

        {/* Bento Grid Layout - Compact, balanced height, perfectly sized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* LEFT CARD: Presentation Showcase Card with absolute zero empty space */}
          <motion.div
            className="group relative flex flex-col justify-between rounded-[24px] bg-white/70 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-brand-purple/[0.01] backdrop-blur-md p-5 sm:p-6 overflow-hidden transition-all duration-300 ease-out hover:border-brand-purple/35 hover:shadow-brand-purple/[0.03]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Ambient decorative particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full bg-brand-purple/10 dark:bg-brand-purple-light/15"
                  style={{
                    width: p.size,
                    height: p.size,
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                  }}
                  animate={{
                    y: ['0px', '-20px', '0px'],
                    opacity: [0.1, 0.35, 0.1],
                  }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Top Bar with Signature */}
            <div className="relative z-20 flex justify-between items-center w-full mb-4">
              <span className="text-slate-500 dark:text-slate-400 text-[9px] font-mono font-bold tracking-widest uppercase">
                SPEAKER • LEADERSHIP
              </span>
              
              <motion.div 
                className="select-none relative rotate-[-5deg] leading-none"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                  }
                }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl text-brand-purple dark:text-purple-400 font-semibold tracking-wide relative z-10"
                  style={{ fontFamily: 'var(--font-signature)' }}
                  variants={{
                    hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0.3 },
                    visible: { 
                      clipPath: 'inset(0 0% 0 0)', 
                      opacity: 0.85,
                      transition: { duration: 1.4, ease: "easeInOut" }
                    }
                  }}
                  whileHover={{ opacity: 1.0, scale: 1.05 }}
                >
                  Madhan Prakash
                </motion.div>
                
                <svg 
                  className="absolute -bottom-1 -left-1 w-[105%] h-2 text-brand-purple/55 dark:text-purple-400/60 pointer-events-none" 
                  viewBox="0 0 160 12" 
                  preserveAspectRatio="none"
                >
                  <motion.path 
                    d="M3,7 Q50,2 110,6 T155,9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round" 
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      visible: { 
                        pathLength: 1, 
                        opacity: 1,
                        transition: { duration: 1.1, ease: "easeOut", delay: 1.0 }
                      }
                    }}
                  />
                </svg>
              </motion.div>
            </div>

            {/* FRAMED LIVE PHOTO: Perfectly sized container, no overflow floating, fits stage photo brilliantly */}
            <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-xl border border-slate-200/50 dark:border-slate-850/60 shadow-sm">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTLf1BJRs4NHnXiaFM881iN5Ci7cZwUrBWkoxsLQg4C7oO2ccQJ_YsHCUw9rIagDISfjhNnhD4rLCj8mI8aWwvsoHPnUFd_DmUovv0h__DIufqkWC6jydMA5bfcszc2JAhfpp8LKeO1NzjDVKfKmFQ8wH1rWUVASx6i4sQli5yl_4rGyKoqrbiGL6nfy0/s3264/1000203247.png"
                alt="Madhan Prakash Speaking on Stage at Management Leadership Event"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
              
              {/* Premium dark gradient bottom overlay on the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Text beautifully overlaid directly inside/on the image at the bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 z-20 space-y-2">
                <div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight leading-tight">
                    Madhan Prakash
                  </h3>
                  <p className="text-[10px] font-bold text-purple-300 font-mono uppercase tracking-wider">
                    MBA Marketing Graduate
                  </p>
                </div>

                {/* Badges container inside image */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold bg-brand-purple/20 border border-brand-purple/30 text-purple-200 backdrop-blur-md">
                    <span className="w-1 h-1 rounded-full bg-brand-purple-light mr-1 animate-pulse" />
                    MBA Marketing Student
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold bg-white/10 border border-white/10 text-slate-100 backdrop-blur-md">
                    Digital Marketing • Analytics
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD: Personal Quote (Balanced, compact, centered vertically with zero extra empty space) */}
          <motion.div
            className="group relative flex flex-col justify-center rounded-[24px] bg-white/70 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-brand-purple/[0.01] backdrop-blur-md p-5 sm:p-6 overflow-hidden transition-all duration-300 ease-out hover:border-brand-purple/35"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {/* Top quote blocks styled with precise vertical spacing */}
            <div className="space-y-5 flex flex-col justify-center h-full">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400 text-[9px] font-mono font-bold tracking-widest uppercase">
                  PHILOSOPHY
                </span>
                <Quote className="w-8 h-8 text-brand-purple/30 dark:text-purple-400/35 fill-brand-purple/5" />
              </div>

              {/* Personal quote with perfect line-height, text size, and premium contrast */}
              <div className="py-1">
                <p className="text-lg sm:text-xl font-display font-semibold leading-relaxed text-slate-850 dark:text-slate-100 tracking-normal italic">
                  "I don't claim to know everything. I enjoy learning, experimenting, and turning ideas into meaningful marketing solutions"
                </p>
              </div>

              {/* Animated Accent Line below the quote */}
              <div className="w-20 h-1 bg-slate-150 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-brand-purple to-brand-purple-light"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
