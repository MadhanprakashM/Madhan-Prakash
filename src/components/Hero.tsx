import React, { useState, useEffect } from 'react';
import { 
  Download, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Phone
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import AnimatedCounter from './AnimatedCounter';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Cinematic transition configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as any, // Luxury cubic-bezier curve (easeOutExpo)
      },
    },
  };

  const widgetVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 20, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  // Scroll-linked parallax setup for premium depth perspectives
  const { scrollY } = useScroll();
  
  const rawGridY = useTransform(scrollY, [0, 800], [0, -60]);
  const rawDotY = useTransform(scrollY, [0, 800], [0, -30]);
  const rawOrb1Y = useTransform(scrollY, [0, 800], [0, -100]);
  const rawOrb2Y = useTransform(scrollY, [0, 800], [0, 40]);
  const rawOrb3Y = useTransform(scrollY, [0, 800], [0, -140]);
  const rawBgOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  const gridY = prefersReducedMotion ? 0 : rawGridY;
  const dotY = prefersReducedMotion ? 0 : rawDotY;
  const orb1Y = prefersReducedMotion ? 0 : rawOrb1Y;
  const orb2Y = prefersReducedMotion ? 0 : rawOrb2Y;
  const orb3Y = prefersReducedMotion ? 0 : rawOrb3Y;
  const bgOpacity = prefersReducedMotion ? 1 : rawBgOpacity;

  return (
    <section
      id="home"
      className="relative min-h-[60vh] flex items-center justify-center pt-20 pb-8 lg:pt-24 lg:pb-10 overflow-hidden bg-transparent"
    >
      {/* Subtle editor matrix layout grid with parallax translation */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute -inset-y-12 inset-x-0 matrix-grid-pattern opacity-45 pointer-events-none" 
      />
      <motion.div 
        style={{ y: dotY }}
        className="absolute -inset-y-12 inset-x-0 matrix-dot-pattern opacity-30 pointer-events-none" 
      />

      {/* Floating ambient gradients creating professional parallax depth */}
      <motion.div 
        style={{ y: orb1Y, opacity: bgOpacity }}
        className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-purple/5 dark:bg-brand-purple/10 blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: orb2Y, opacity: bgOpacity }}
        className="absolute bottom-[15%] right-[-5%] w-[300px] h-[300px] rounded-full bg-amber-500/5 dark:bg-amber-500/10 blur-3xl pointer-events-none"
      />

      {/* Rotating abstract vector pattern for modern engineering aesthetic */}
      <motion.div 
        style={{ y: orb3Y, opacity: bgOpacity }}
        className="absolute top-[15%] right-[25%] w-[140px] h-[140px] rounded-full border border-brand-purple/5 dark:border-brand-purple/10 pointer-events-none hidden md:flex items-center justify-center opacity-40"
      >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-[100px] h-[100px] rounded-full border border-dashed border-brand-purple/10 dark:border-brand-purple/20"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Left Side: Typography Stack */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability pill badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center space-x-2.5 px-4.5 py-2.5 bg-white/70 dark:bg-slate-900/70 border border-brand-purple/20 dark:border-brand-purple/30 rounded-full shadow-md backdrop-blur-lg relative overflow-hidden group select-none cursor-pointer"
              animate={{
                borderColor: ["rgba(139, 92, 246, 0.2)", "rgba(139, 92, 246, 0.6)", "rgba(139, 92, 246, 0.2)"],
                boxShadow: [
                  "0 4px 20px -2px rgba(139, 92, 246, 0.05), 0 2px 4px -1px rgba(139, 92, 246, 0.03)",
                  "0 4px 20px 2px rgba(139, 92, 246, 0.15), 0 2px 8px 1px rgba(139, 92, 246, 0.08)",
                  "0 4px 20px -2px rgba(139, 92, 246, 0.05), 0 2px 4px -1px rgba(139, 92, 246, 0.03)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              
              <span className="text-brand-dark font-sans text-xs font-bold tracking-wide flex items-center gap-1.5">
                <span className="bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded-md text-[10px] font-extrabold tracking-wider uppercase">Active</span>
                <span>Open to <span className="text-brand-purple font-extrabold bg-gradient-to-r from-brand-purple to-indigo-600 bg-clip-text text-transparent">Full-Time Marketing & Analytics Roles</span></span>
              </span>
            </motion.div>

            {/* Title block */}
            <div className="space-y-4">
              <motion.span variants={itemVariants} className="block text-xs font-mono font-semibold tracking-[0.24em] text-brand-purple uppercase">
                MBA STUDENT • MARKETING & ANALYTICS
              </motion.span>
              
              <motion.h1 
                id="hero-title" 
                variants={itemVariants}
                className="text-3xl sm:text-5xl lg:text-[54px] font-display font-extrabold tracking-tight text-brand-dark leading-tight max-w-[15ch] mx-auto lg:mx-0"
              >
                {personalInfo.name}
              </motion.h1>
              
              <motion.p 
                id="hero-subtitle" 
                variants={itemVariants}
                className="text-lg sm:text-[22px] font-sans font-bold text-brand-purple leading-[1.8] max-w-[650px] mx-auto lg:mx-0 tracking-wide"
              >
                Digital Marketing | Business Analytics | Brand Strategy
              </motion.p>
            </div>

            {/* Dynamic visual copy */}
            <motion.p 
              id="hero-tagline" 
              variants={itemVariants}
              className="text-[18px] text-slate-700/85 dark:text-slate-300/85 max-w-[680px] mx-auto lg:mx-0 font-normal leading-[1.9] text-balance"
            >
              I'm an MBA student passionate about digital marketing, business analytics, and building practical marketing solutions. Through live projects, internships, and leadership experiences, I'm continuously learning how marketing creates real business growth.
            </motion.p>

            {/* Strategic pill list */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {['SEO Strategy', 'Meta Ads', 'Google Analytics', 'Lead Generation', 'Power BI'].map((badge) => (
                <span 
                  key={badge} 
                  className="px-4 py-2 bg-white/55 dark:bg-slate-900/55 border border-white/70 dark:border-slate-800/80 rounded-full text-xs font-semibold text-brand-paragraph dark:text-slate-300 shadow-3xs hover:border-brand-purple/20 transition-all duration-300"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Primary Action Row */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                id="hero-btn-work"
                href="#academic"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-purple hover:bg-brand-purple-light text-white font-semibold rounded-full text-sm tracking-wider uppercase shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-250 ease-out active:scale-98 group min-h-[48px]"
              >
                <span>Explore Qualifications</span>
                <ArrowRight className="w-4 h-4 ml-2 animate-pulse group-hover:translate-x-1 transition-transform duration-250" />
              </a>

              <a
                id="hero-btn-resume"
                href="https://drive.google.com/file/d/1UIh4_RUz_8qIwTOwZKDi8s0iwmFNu_UT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/75 dark:bg-slate-900/75 border border-slate-200/60 dark:border-slate-800/60 text-brand-dark hover:border-brand-purple dark:hover:border-brand-purple-light hover:text-brand-purple dark:hover:text-brand-purple-light hover:bg-white dark:hover:bg-slate-800 rounded-full text-sm font-semibold hover:scale-[1.02] hover:shadow-md transition-all duration-250 ease-out cursor-pointer active:scale-98 group min-h-[48px]"
              >
                <Download className="w-4 h-4 mr-2 text-brand-purple group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-250" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Channels Row */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-6"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1.5 select-none">
                Connect:
              </span>
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:p-3 bg-white/70 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 hover:border-[#0077B5] dark:hover:border-[#3babeb] hover:bg-[#0077B5]/5 dark:hover:bg-[#0077B5]/10 text-[#0077B5] dark:text-[#3babeb] rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-3xs hover:shadow-2xs cursor-pointer"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
              )}
              {personalInfo.youtube && (
                <a
                  href={personalInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:p-3 bg-white/70 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 hover:border-[#FF0000] dark:hover:border-[#ff3b3b] hover:bg-[#FF0000]/5 dark:hover:bg-[#FF0000]/10 text-[#FF0000] dark:text-[#ff3b3b] rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-3xs hover:shadow-2xs cursor-pointer"
                  title="YouTube"
                >
                  <Youtube className="w-4.5 h-4.5" />
                </a>
              )}
              {personalInfo.instagram && (
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:p-3 bg-white/70 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 hover:border-[#E1306C] dark:hover:border-[#f25287] hover:bg-[#E1306C]/5 dark:hover:bg-[#E1306C]/10 text-[#E1306C] dark:text-[#f25287] rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-3xs hover:shadow-2xs cursor-pointer"
                  title="Instagram"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
              )}
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:p-3 bg-white/70 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 hover:border-[#EA4335] dark:hover:border-[#ff5e50] hover:bg-[#EA4335]/5 dark:hover:bg-[#EA4335]/10 text-[#EA4335] dark:text-[#ff5e50] rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-3xs hover:shadow-2xs cursor-pointer"
                  title="Email"
                >
                  <Mail className="w-4.5 h-4.5" />
                </a>
              )}
              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:p-3 bg-white/70 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 hover:border-emerald-600 dark:hover:border-emerald-400 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-3xs hover:shadow-2xs cursor-pointer"
                  title="Phone"
                >
                  <Phone className="w-4.5 h-4.5" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Right Side: Luxury Portrait & Available Card */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-center lg:items-end gap-8"
            variants={widgetVariants}
          >
            {/* Portrait area */}
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center select-none">
              
              {/* Background gradient rings */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[105%] h-[105%] rounded-full border border-dashed border-brand-purple/15 dark:border-brand-purple/25 pointer-events-none"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[115%] h-[115%] rounded-full border border-dashed border-brand-purple-light/10 dark:border-brand-purple-light/15 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 to-brand-purple-light/5 blur-3xl rounded-full opacity-60 scale-110 pointer-events-none" />
              </div>

              {/* Central Floating portrait */}
              <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-2 border-white dark:border-slate-900 shadow-2xl group/image z-10 bg-white dark:bg-slate-900">
                {personalInfo.avatarUrl ? (
                  <img
                    src={personalInfo.avatarUrl}
                    alt="M. Madhan Prakash - MBA Digital Marketing & Business Analytics Specialist"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-purple/20 to-brand-purple-light/10 flex items-center justify-center text-brand-purple font-display font-black text-4xl">
                    MP
                  </div>
                )}
              </div>

              {/* Floating Chip 1: 🏆 Research Pubs */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-1 -left-1 sm:-left-4 bg-white/95 dark:bg-slate-900/95 border border-brand-border backdrop-blur-md py-1.5 px-3 rounded-2xl shadow-lg flex items-center gap-2 z-20 hover:scale-105 transition-transform"
              >
                <span className="text-sm">🏆</span>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[11px] font-bold text-brand-dark">
                    <AnimatedCounter target={3} duration={1200} />
                  </span>
                  <span className="text-[9px] text-brand-paragraph font-medium">Research Pubs</span>
                </div>
              </motion.div>

              {/* Floating Chip 2: 📊 Leads */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute top-16 -right-3 sm:-right-12 bg-white/95 dark:bg-slate-900/95 border border-brand-border backdrop-blur-md py-1.5 px-3.5 rounded-2xl shadow-lg flex items-center gap-2 z-20 hover:scale-105 transition-transform"
              >
                <span className="text-sm">📊</span>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[11px] font-bold text-brand-dark">
                    <AnimatedCounter target={850} suffix="+" duration={1200} />
                  </span>
                  <span className="text-[9px] text-brand-paragraph font-medium">Leads Researched</span>
                </div>
              </motion.div>

              {/* Floating Chip 3: 👥 Units Sold */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                className="absolute bottom-12 -left-3 sm:-left-12 bg-white/95 dark:bg-slate-900/95 border border-brand-border backdrop-blur-md py-1.5 px-3 rounded-2xl shadow-lg flex items-center gap-2 z-20 hover:scale-105 transition-transform"
              >
                <span className="text-sm">👥</span>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[11px] font-bold text-brand-dark">
                    <AnimatedCounter target={150} suffix="+" duration={1200} />
                  </span>
                  <span className="text-[9px] text-brand-paragraph font-medium">Units Sold</span>
                </div>
              </motion.div>

              {/* Floating Chip 4: 📈 MBA Marketing */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                className="absolute bottom-6 -right-1 sm:-right-6 bg-white/95 dark:bg-slate-900/95 border border-brand-border backdrop-blur-md py-1.5 px-3 rounded-2xl shadow-lg flex items-center gap-2 z-20 hover:scale-105 transition-transform"
              >
                <span className="text-sm">📈</span>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[11px] font-bold text-brand-dark">MBA</span>
                  <span className="text-[9px] text-brand-paragraph font-medium">Marketing</span>
                </div>
              </motion.div>
            </div>

            {/* Opportunities Card (Bento Style) */}
            <div className="w-full max-w-[340px] bg-white/80 dark:bg-slate-900/80 border border-brand-border dark:border-slate-800 backdrop-blur-md p-5 rounded-[24px] shadow-sm flex flex-col text-left relative overflow-hidden group/opt hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-brand-purple tracking-wider uppercase">Available For</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Opportunities
                </span>
              </div>
              <h4 className="font-display font-extrabold text-brand-dark text-base mb-2 group-hover/opt:text-brand-purple transition-colors">
                Open to full-time roles & marketing collaborations.
              </h4>
              <p className="text-brand-paragraph text-xs font-medium mb-4 leading-relaxed">
                Available to join immediately for data-driven, strategic B2B/B2C marketing or research positions.
              </p>
              <div className="flex items-center justify-between border-t border-brand-border dark:border-slate-800 pt-3">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-brand-purple-light transition-colors"
                >
                  Let's Talk ➔
                </a>
                <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  ⏱ Usually replies within 24 hrs
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
