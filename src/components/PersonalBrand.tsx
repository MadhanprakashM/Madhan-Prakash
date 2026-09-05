import React from 'react';
import { motion } from 'motion/react';
import { Target, BarChart2, Briefcase, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PersonalBrand() {
  const pillars = [
    {
      step: '01',
      title: 'Marketing Thinking',
      subtitle: 'Brand & Acquisition',
      description: 'Digital marketing, SEO discovery, B2B outbound workflows, lead generation pipelines, and brand positioning that connects with target audiences.',
      skills: ['Digital Marketing', 'SEO Strategy', 'B2B Lead Gen', 'Meta Ads', 'Audience Growth'],
      icon: <Target className="w-6 h-6 text-[#1A3636] dark:text-[#D6BD98]" />
    },
    {
      step: '02',
      title: 'Analytics Thinking',
      subtitle: 'Metrics & Performance',
      description: 'Dashboards, KPI evaluation, data interpretation, and performance tracking to evaluate return on ad spend and optimize commercial funnel velocity.',
      skills: ['Power BI', 'Google Analytics (GA4)', 'SEMrush', 'Excel Modeling', 'Conversion Tracking'],
      icon: <BarChart2 className="w-6 h-6 text-[#1A3636] dark:text-[#D6BD98]" />
    },
    {
      step: '03',
      title: 'Business Thinking',
      subtitle: 'Strategy & Growth',
      description: 'Customer understanding, commercial strategy, operational planning, team coordination, and practical decision-making for sustainable revenue growth.',
      skills: ['Market Research', 'Client Relations', 'Event Leadership', 'Budget Control', 'Strategic Pitching'],
      icon: <Briefcase className="w-6 h-6 text-[#1A3636] dark:text-[#D6BD98]" />
    }
  ];

  const animateFadeUp = {
    hidden: { opacity: 0, y: 25, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as any } 
    }
  };

  return (
    <section id="brand" className="py-14 sm:py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={animateFadeUp}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/80 dark:bg-[#1A3636]/70 border border-[#40534C]/20 dark:border-[#D6BD98]/25 rounded-full text-[#1A3636] dark:text-[#D6BD98] text-xs font-semibold uppercase tracking-[0.24em] shadow-2xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#677D6A] dark:text-[#D6BD98]" />
            <span>THE THREE PILLARS</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-brand-dark tracking-tight">
            How I Create Business Value
          </h2>
          <div className="w-12 h-1 bg-[#1A3636] dark:bg-[#D6BD98] mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto pt-1">
            Combining creative marketing intuition, rigorous analytical insights, and pragmatic business strategy to drive real-world impact.
          </p>
        </motion.div>

        {/* 3 Interconnected Pillars Grid */}
        <div className="relative">
          {/* Subtle Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#1A3636]/20 via-[#D6BD98]/40 to-[#1A3636]/20 -translate-y-12 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="p-6 sm:p-8 rounded-[24px] bg-white/85 dark:bg-[#1A3636]/45 border border-[#40534C]/15 dark:border-[#D6BD98]/20 backdrop-blur-xl shadow-lg hover:border-[#1A3636]/40 dark:hover:border-[#D6BD98]/40 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
              >
                {/* Background Card Step Watermark */}
                <span className="absolute top-4 right-6 font-mono font-extrabold text-5xl text-slate-200/50 dark:text-white/5 group-hover:text-[#1A3636]/10 dark:group-hover:text-[#D6BD98]/10 transition-colors pointer-events-none select-none">
                  {pillar.step}
                </span>

                <div className="space-y-4 relative z-10">
                  {/* Top Icon Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#0F1D1D] border border-[#40534C]/15 dark:border-[#D6BD98]/25 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-250">
                    {pillar.icon}
                  </div>

                  {/* Titles */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#40534C] dark:text-[#D6BD98]">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-xl text-brand-dark tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Body description */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  {/* Competency Chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-black/5 dark:bg-white/5 border border-[#40534C]/10 dark:border-[#D6BD98]/15 rounded-md text-[11px] font-medium text-slate-700 dark:text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Status Row */}
                <div className="mt-6 pt-4 border-t border-[#40534C]/10 dark:border-[#D6BD98]/15 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3636] dark:text-[#D6BD98]" />
                    Applied in Real Projects
                  </span>
                  <span className="font-mono text-[10px] font-bold text-[#1A3636] dark:text-[#D6BD98]">
                    Phase {pillar.step}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
