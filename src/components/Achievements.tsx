import React from 'react';
import { motion } from 'motion/react';
import { achievements } from '../data/portfolioData';
import AnimatedCounter from './AnimatedCounter';
import { 
  Award, 
  BookOpen, 
  Presentation, 
  Users, 
  Sparkles, 
  Target, 
  ShoppingBag, 
  Briefcase,
  Video,
  BarChart2,
  Search
} from 'lucide-react';

interface KPIData {
  id: string;
  targetValue: number;
  suffix: string;
  title: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  brandColor: string;
}

function KPICard({ kpi, cardVariants }: { kpi: KPIData; cardVariants: any }) {
  return (
    <motion.div
      variants={cardVariants}
      id={`impact-card-${kpi.id}`}
      whileHover={{ 
        y: -6,
        borderColor: kpi.brandColor,
        boxShadow: `0 16px 36px -12px ${kpi.brandColor}35`
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="p-4.5 sm:p-5 lg:p-7 rounded-2xl lg:rounded-[24px] bg-white/70 dark:bg-slate-900/45 border border-slate-200/60 dark:border-slate-800/65 shadow-xs transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-left"
    >
      {/* Soft gradient glow in background */}
      <div 
        className="absolute -right-12 -top-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: kpi.brandColor }}
      />
      
      {/* Subtle bottom corner gradient accent */}
      <div 
        className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-[rgba(var(--brand-color-rgb),0.02)] rounded-br-[24px] pointer-events-none"
      />

      <div className="space-y-2.5 sm:space-y-3.5 relative z-10">
        {/* Header: Icon & Category Label */}
        <div className="flex items-center justify-between">
          <motion.div 
            className="p-2 sm:p-2.5 lg:p-3 rounded-xl border border-transparent transition-colors duration-300"
            style={{
              backgroundColor: `${kpi.brandColor}12`,
              color: kpi.brandColor,
            }}
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            {React.cloneElement(kpi.icon as any, { className: 'w-4 h-4 lg:w-5 lg:h-5 text-current' })}
          </motion.div>
          
          <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-brand-purple transition-colors">
            {kpi.label}
          </span>
        </div>

        {/* Big Number and Title */}
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-dark tracking-tight leading-none">
            <AnimatedCounter 
              target={kpi.targetValue} 
              suffix={kpi.suffix} 
              duration={400}
            />
          </div>
          <h3 className="text-xs sm:text-sm lg:text-base font-sans font-bold text-brand-dark tracking-tight leading-snug group-hover:text-brand-purple transition-colors duration-300">
            {kpi.title}
          </h3>
        </div>

        {/* Short description */}
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-[13px] leading-relaxed font-normal">
          {kpi.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const kpis: KPIData[] = [
    {
      id: 'marketing_strategy',
      targetValue: 8,
      suffix: '+',
      title: 'Corporate Seminar Presentations',
      label: 'Marketing Strategy',
      description: 'Prepared, submitted, and orally presented strategy papers at highly reputed regional business schools.',
      icon: <Presentation className="w-5 h-5" />,
      brandColor: '#8B5CF6', // Purple
    },
    {
      id: 'business_analytics',
      targetValue: 850,
      suffix: '+',
      title: 'Logistics Leads Researched & Validated',
      label: 'Business Analytics',
      description: 'Identified and qualified high-intent commercial shipping prospects under market intelligent criteria.',
      icon: <BarChart2 className="w-5 h-5" />,
      brandColor: '#3B82F6', // Blue
    },
    {
      id: 'digital_marketing',
      targetValue: 150,
      suffix: '+',
      title: 'Units Sold (Meta Ad Campaigns)',
      label: 'Digital Marketing',
      description: 'Managed active advertising campaigns and engaged directly with inbound leads via direct sales chats.',
      icon: <ShoppingBag className="w-5 h-5" />,
      brandColor: '#EC4899', // Pink
    },
    {
      id: 'leadership',
      targetValue: 400,
      suffix: '+',
      title: 'Festival Attendees Managed',
      label: 'Leadership',
      description: 'Led planning committees, sponsor coordination, and venue logistics as Overall Coordinator for VIMSMART 2K26.',
      icon: <Users className="w-5 h-5" />,
      brandColor: '#F97316', // Orange
    },
    {
      id: 'seo_strategy',
      targetValue: 93,
      suffix: 'K+',
      title: 'Organic Search YouTube Views',
      label: 'SEO',
      description: 'Leveraged key term queries, structured descriptions, and customized templates to scale content traffic.',
      icon: <Search className="w-5 h-5" />,
      brandColor: '#10B981', // Emerald
    },
    {
      id: 'content_marketing',
      targetValue: 48,
      suffix: '+',
      title: 'Videos & Tutorials Produced',
      label: 'Content Marketing',
      description: 'Produced, edited, and published custom video series using CapCut to maximize community engagement.',
      icon: <Video className="w-5 h-5" />,
      brandColor: '#06B6D4', // Cyan
    },
  ];

  const animateFadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <section id="achievements" className="py-8 sm:py-12 md:py-14 bg-transparent relative overflow-hidden border-t border-slate-100 dark:border-slate-900/60">
      {/* Editorial matrix grid overlays */}
      <div className="absolute inset-0 matrix-grid-pattern opacity-30 pointer-events-none" />

      {/* Decorative ambient blurred spots */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-5 md:mb-6 space-y-2 md:space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animateFadeUp}
        >
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-full text-brand-purple text-xs font-semibold uppercase tracking-[0.24em] shadow-2xs backdrop-blur-md">
            <span>WHAT I BRING</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold text-brand-dark tracking-[-0.03em] leading-tight">
            What I Bring
          </h2>
          <div className="w-12 h-1 bg-brand-purple mx-auto rounded-full" />
          <p className="text-slate-700/85 dark:text-slate-300/85 text-[16px] sm:text-[18px] font-sans font-normal leading-relaxed max-w-[680px] mx-auto">
            A verified showcase of professional milestones, digital expertise, and practical business value.
          </p>
        </motion.div>

        {/* 3x2 KPI Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6 mb-8 md:mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {kpis.map((kpi) => (
            <KPICard 
              key={kpi.id} 
              kpi={kpi} 
              cardVariants={cardVariants} 
            />
          ))}
        </motion.div>

        {/* Section divider and secondary heading for publications */}
        <div className="relative my-8 sm:my-10 md:my-12 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-200/50 dark:border-slate-800/55" />
          </div>
          <div className="relative px-6 bg-slate-50/5 dark:bg-slate-950/5 backdrop-blur-md rounded-full">
            <span className="px-4 py-1.5 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 rounded-full text-brand-purple text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] shadow-2xs">
              Research Publications & Honors
            </span>
          </div>
        </div>

        {/* Publications & Academic Highlights Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {achievements.map((ach) => {
            return (
              <motion.div
                id={`achievement-card-${ach.id}`}
                key={ach.id}
                variants={animateFadeUp}
                className="p-5 sm:p-8 rounded-2xl bg-white/45 dark:bg-slate-900/40 border border-white/60 dark:border-slate-800/80 backdrop-blur-md hover:bg-white/75 dark:hover:bg-slate-900/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-250 ease-out flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    {(() => {
                      const categoryMeta: Record<string, { label: string; styles: string }> = {
                        paper: {
                          label: 'Research Publication',
                          styles: 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300'
                        },
                        leadership: {
                          label: 'Campus Leadership',
                          styles: 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-200/60 dark:border-amber-800/60 text-amber-700 dark:text-amber-300'
                        },
                        competition: {
                          label: 'Competition Winner',
                          styles: 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-200/60 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300'
                        },
                        activity: {
                          label: 'Co-Curricular / Community',
                          styles: 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-200/60 dark:border-rose-800/60 text-rose-700 dark:text-rose-300'
                        }
                      };

                      const currentMeta = categoryMeta[ach.category] || {
                        label: 'Leadership Award',
                        styles: 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-200/60 dark:border-amber-800/60 text-amber-700 dark:text-amber-300'
                      };

                      return (
                        <span className={`px-2.5 py-0.5 rounded-md font-bold text-[11px] uppercase tracking-widest border ${currentMeta.styles}`}>
                          {currentMeta.label}
                        </span>
                      );
                    })()}
                    <span className="text-xs text-brand-paragraph font-semibold">{ach.date}</span>
                  </div>

                  {/* Title and description */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-brand-dark text-lg tracking-tight leading-snug">
                      {ach.title}
                    </h3>
                    <p className="text-brand-paragraph text-xs sm:text-sm leading-relaxed font-normal text-balance">
                      {ach.description}
                    </p>
                  </div>
                </div>

                {/* Footer decorative accent */}
                <div className="flex items-center space-x-1.5 text-brand-purple font-display font-bold text-[10px] tracking-widest uppercase border-t border-slate-100 dark:border-slate-800/60 mt-5 pt-3.5">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span>Honored Achievement</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </section>
  );
}
