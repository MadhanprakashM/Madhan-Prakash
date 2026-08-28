import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Target, BarChart2, Award, BookOpen, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Target className="w-5 h-5 text-[#1A3636] dark:text-[#D6BD98]" />,
      title: 'Digital Marketing & SEO',
      subtitle: 'Search Strategy & Paid Ads',
      tools: 'Meta Ads, Google Ads, SEMrush, Canva, CapCut',
      metric: 'Sold 150+ product units under ₹10,000 ad spend',
      description: 'Creating localized social media campaigns and optimizing video content for search traffic to drive sales.'
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-[#1A3636] dark:text-[#D6BD98]" />,
      title: 'Business Analytics & Lead Gen',
      subtitle: 'Sales Pipelines & Impact Overview',
      tools: 'Excel, Power BI, Apollo.io, LinkedIn Sales Nav',
      metric: 'Generated 500+ B2B leads via South India market research',
      description: 'Building custom Power BI dashboards and using outbound search tools to find and qualify prospective commercial clients.'
    },
    {
      icon: <Award className="w-5 h-5 text-[#1A3636] dark:text-[#D6BD98]" />,
      title: 'Leadership & Execution',
      subtitle: 'Team Coordination & Events',
      tools: 'Event Planning, Public Relations, Budgeting',
      metric: 'Coordinated VIMSMART 2K26 with 400+ regional attendees',
      description: 'Managing student organizing committees, leading campus events, and resolving operational conflicts under tight schedules.'
    }
  ];

  const animateFadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
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
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };  return (
    <section id="about" className="py-8 sm:py-12 md:py-14 bg-transparent relative overflow-hidden">
      {/* Subtle organic light grid overlays */}
      <div className="absolute inset-0 matrix-grid-pattern opacity-30 pointer-events-none" />

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
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/70 dark:bg-[#1A3636]/60 border border-[#40534C]/20 dark:border-[#D6BD98]/25 rounded-full text-[#1A3636] dark:text-[#D6BD98] text-xs font-semibold uppercase tracking-[0.24em] shadow-2xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#677D6A] dark:text-[#D6BD98]" />
            <span>WHO I AM</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold text-brand-dark tracking-[-0.03em]">
            Who I Am
          </h2>
          <div className="w-12 h-1 bg-[#1A3636] dark:bg-[#D6BD98] mx-auto rounded-full" />
          <p className="text-slate-700/85 dark:text-slate-300/85 text-[16px] sm:text-[18px] font-sans font-normal leading-relaxed sm:leading-[1.9] max-w-[680px] mx-auto">
            A practical MBA student with hands-on experience in search SEO, client outbound outreach, and event coordination.
          </p>
        </motion.div>
 
        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Story Panel (Left) */}
          <motion.div 
            className="lg:col-span-5 space-y-6 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animateFadeUp}
          >
            <h3 className="text-xl font-display font-bold text-brand-dark leading-[1.4] tracking-tight">
              Specializing in Marketing and Business Analytics to solve growth and coordination challenges.
            </h3>
            
            <p className="text-slate-700/85 dark:text-slate-300/85 text-[18px] font-sans font-normal leading-[1.9] max-w-[680px] text-balance">
              {personalInfo.aboutStory}
            </p>
 
            {/* Language & Hobbies Quick Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#40534C]/15 dark:border-[#D6BD98]/20">
              <div>
                <h4 className="font-display font-bold text-brand-dark text-sm mb-2 flex items-center">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5 text-[#1A3636] dark:text-[#D6BD98]" /> Languages
                </h4>
                <ul className="space-y-1.5 text-xs text-brand-paragraph font-medium">
                  {personalInfo.languages.map((lang) => (
                    <li key={lang} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#1A3636] dark:bg-[#D6BD98] rounded-full mr-1.5 shrink-0" />
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
 
              <div>
                <h4 className="font-display font-bold text-brand-dark text-sm mb-2 flex items-center">
                  <Award className="w-3.5 h-3.5 mr-1.5 text-[#1A3636] dark:text-[#D6BD98]" /> Focus Areas
                </h4>
                <ul className="space-y-1.5 text-xs text-brand-paragraph font-medium">
                  {personalInfo.hobbies.map((hobby) => (
                    <li key={hobby} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#1A3636] dark:bg-[#D6BD98] rounded-full mr-1.5 shrink-0" />
                      {hobby}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
 
          {/* Pillars/Value Block (Right) */}
          <motion.div 
            className="lg:col-span-7 grid grid-cols-1 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {pillars.map((pillar, i) => (
              <motion.div
                id={`about-pillar-${i}`}
                key={pillar.title}
                variants={animateFadeUp}
                className="relative overflow-hidden p-5 sm:p-7 rounded-[24px] bg-white/90 dark:bg-[#1A3636]/40 border border-[#40534C]/15 dark:border-[#D6BD98]/20 hover:border-[#1A3636]/35 dark:hover:border-[#D6BD98]/40 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-250 ease-out group text-left"
              >
                {/* Subtle background card numbering */}
                <span className="absolute right-6 top-5 text-5xl font-mono font-extrabold text-slate-300/40 dark:text-white/5 group-hover:text-[#1A3636]/10 dark:group-hover:text-[#D6BD98]/10 transition-all duration-500 select-none pointer-events-none">
                  0{i + 1}
                </span>
 
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="p-3 bg-[#1A3636]/[0.05] dark:bg-[#D6BD98]/10 text-[#1A3636] dark:text-[#D6BD98] rounded-xl border border-[#1A3636]/10 dark:border-[#D6BD98]/20 group-hover:bg-[#1A3636] group-hover:text-[#F2F1ED] dark:group-hover:bg-[#D6BD98] dark:group-hover:text-[#161616] group-hover:rotate-6 group-hover:scale-105 transition-all duration-250 ease-out shrink-0 mt-0.5 shadow-3xs">
                    {React.cloneElement(pillar.icon, { className: 'w-5 h-5 text-current transition-colors duration-250' })}
                  </div>
                  
                  <div className="space-y-3 flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="font-display font-bold text-brand-dark text-lg sm:text-xl tracking-tight group-hover:text-[#1A3636] dark:group-hover:text-[#D6BD98] transition-colors duration-250">
                        {pillar.title}
                      </h4>
                      <span className="self-start sm:self-center text-[10px] font-mono font-bold text-[#1A3636] dark:text-[#D6BD98] bg-[#1A3636]/5 dark:bg-[#D6BD98]/10 px-2.5 py-0.5 rounded-md border border-[#1A3636]/10 dark:border-[#D6BD98]/20 shrink-0 tracking-wide">
                        {pillar.subtitle}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
 
                    {/* Tools & Metric Footer section */}
                    <div className="pt-3.5 border-t border-[#40534C]/10 dark:border-[#D6BD98]/15 flex flex-col gap-3">
                      {/* Interactive tools chip list */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-bold text-slate-500 dark:text-[#A8B8AE] font-sans uppercase tracking-wider mr-1">
                          Tools:
                        </span>
                        {pillar.tools.split(', ').map((tool) => (
                          <span 
                            key={tool} 
                            className="text-[10px] font-medium text-slate-700 dark:text-slate-200 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-[#40534C]/10 dark:border-[#D6BD98]/15 px-2 py-0.5 rounded-md transition-all duration-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
 
                      {/* Outstanding Metric Highlight badge */}
                      <div className="inline-flex items-center self-start bg-[#677D6A]/10 dark:bg-[#677D6A]/20 text-[#1A3636] dark:text-[#D6BD98] border border-[#677D6A]/20 dark:border-[#677D6A]/30 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-[#677D6A]/15 dark:hover:bg-[#677D6A]/25 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 bg-[#677D6A] dark:bg-[#D6BD98] rounded-full mr-2 shrink-0 animate-pulse" />
                        {pillar.metric}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
 
        </div>
      </motion.div>
    </section>
  );
}
