import React, { useState } from 'react';
import { motion } from 'motion/react';
import { skillGroups } from '../data/portfolioData';
import { 
  Compass, 
  Search, 
  Sparkles, 
  Video, 
  Target, 
  BarChart2, 
  Truck, 
  CheckCircle2
} from 'lucide-react';
import { TabSwitcher, AnimatedPanel } from './InteractiveComponents';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'All' | string>('All');

  const categories = ['All', ...skillGroups.map((g) => g.category)];

  const tabs = categories.map((cat) => ({ id: cat, label: cat }));

  const filteredGroups =
    activeTab === 'All'
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeTab);

  // Helper to map category name to a Lucide icon
  const getCategoryIcon = (category: string) => {
    const name = category.toLowerCase();
    if (name.includes('digital marketing')) return <Compass className="w-5 h-5 text-brand-purple" />;
    if (name.includes('seo')) return <Search className="w-5 h-5 text-brand-purple" />;
    if (name.includes('ai & productivity')) return <Sparkles className="w-5 h-5 text-brand-purple" />;
    if (name.includes('design')) return <Video className="w-5 h-5 text-brand-purple" />;
    if (name.includes('lead generation') || name.includes('research')) return <Target className="w-5 h-5 text-brand-purple" />;
    if (name.includes('analytics')) return <BarChart2 className="w-5 h-5 text-brand-purple" />;
    if (name.includes('logistics')) return <Truck className="w-5 h-5 text-brand-purple" />;
    return <CheckCircle2 className="w-5 h-5 text-brand-purple" />;
  };

  const getChipColors = (category: string) => {
    const name = category.toLowerCase();
    if (name.includes('digital marketing')) {
      // Pink
      return 'bg-pink-50/70 text-pink-700 border-pink-100/50 dark:bg-pink-950/20 dark:text-pink-300 dark:border-pink-900/30';
    }
    if (name.includes('analytics')) {
      // Blue
      return 'bg-blue-50/70 text-blue-700 border-blue-100/50 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-900/30';
    }
    if (name.includes('research')) {
      // Purple
      return 'bg-purple-50/70 text-purple-700 border-purple-100/50 dark:bg-purple-950/20 dark:text-purple-300 dark:border-purple-900/30';
    }
    if (name.includes('content')) {
      // Cyan
      return 'bg-cyan-50/70 text-cyan-700 border-cyan-100/50 dark:bg-cyan-950/20 dark:text-cyan-300 dark:border-cyan-900/30';
    }
    if (name.includes('seo')) {
      // Emerald
      return 'bg-emerald-50/70 text-emerald-700 border-emerald-100/50 dark:bg-emerald-950/20 dark:text-emerald-300 dark:border-emerald-900/30';
    }
    if (name.includes('design') || name.includes('creative')) {
      // Violet
      return 'bg-violet-50/70 text-violet-700 border-violet-100/50 dark:bg-violet-950/20 dark:text-violet-300 dark:border-violet-900/30';
    }
    // Default Orange/Amber
    return 'bg-orange-50/70 text-orange-700 border-orange-100/50 dark:bg-orange-950/20 dark:text-orange-300 dark:border-orange-900/30';
  };

  const animateFadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } 
    }
  };

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-14 bg-transparent relative overflow-hidden">
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
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-full text-brand-purple text-xs font-semibold uppercase tracking-[0.24em] shadow-2xs backdrop-blur-md">
            <span>CORE EXPERTISE</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold text-brand-dark tracking-[-0.03em]">
            Core Expertise
          </h2>
          <div className="w-12 h-1 bg-brand-purple mx-auto rounded-full" />
          <p className="text-slate-700/85 dark:text-slate-300/85 text-[16px] sm:text-[18px] font-sans font-normal leading-relaxed sm:leading-[1.9] max-w-[680px] mx-auto">
            Beautifully categorized skill groups highlighting practical tool proficiency and core strategic competencies.
          </p>
        </motion.div>

        {/* Tab Filter Controls */}
        <div className="mb-5 md:mb-6 max-w-5xl mx-auto">
          <TabSwitcher
            idPrefix="skills"
            tabs={tabs}
            activeTab={activeTab}
            onChange={(val) => setActiveTab(val)}
            ariaLabel="Skills Category Filters"
          />
        </div>

        {/* Categorized Grid */}
        <AnimatedPanel activeKey={activeTab}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch text-left">
            {filteredGroups.map((group, gIdx) => (
              <div
                id={`skills-group-${gIdx}`}
                key={group.category}
                className="p-5 sm:p-6 rounded-[24px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-50/25 dark:hover:bg-slate-950/25 hover:border-brand-purple/25 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-250 ease-out flex flex-col justify-between group"
              >
                <div>
                  {/* Group Header */}
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100 dark:border-slate-800/60 mb-4">
                    <div className="p-2.5 bg-brand-purple/5 dark:bg-brand-purple/10 rounded-xl shrink-0 border border-brand-purple/10 dark:border-brand-purple/20 group-hover:rotate-6 group-hover:scale-105 transition-all duration-250 ease-out">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="font-display font-bold text-brand-dark text-base">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills Displayed as Modern Colored Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.skills.map((skill) => {
                      const chipColors = getChipColors(group.category);
                      return (
                        <span 
                          key={skill.name} 
                          className={`px-3 py-1.5 text-xs font-semibold rounded-xl border ${chipColors} transition-all duration-200 hover:scale-[1.03] cursor-default shadow-3xs`}
                        >
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedPanel>

      </motion.div>
    </section>
  );
}
