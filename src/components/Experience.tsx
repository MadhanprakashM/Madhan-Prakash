import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { experiences } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Award,
  Video,
  Users,
  Trophy,
  Megaphone,
  Landmark,
  TrendingUp,
  ChevronLeft
} from 'lucide-react';
import { TabSwitcher, AnimatedPanel } from './InteractiveComponents';

type FilterType = 'all' | 'internship' | 'live-project' | 'work' | 'leadership';

const timelineMilestones = [
  {
    year: '2021',
    period: 'Jan 2021 - Present',
    role: 'YouTube Creator & Video Producer',
    company: 'Classic Tamil Channel',
    icon: Video,
    unlockedSkill: 'YouTube SEO & Audience Analytics',
    description: 'Built sports gaming channel to 93.5K+ views and 717+ subscribers with 48 videos using Canva and CapCut.',
    type: 'content',
    color: 'from-blue-500 to-indigo-500',
    accentColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20 dark:border-blue-500/30'
  },
  {
    year: '2021',
    period: '2021 - 2022',
    role: 'NSS Blood Donation Camp Leader',
    company: 'National Service Scheme',
    icon: Users,
    unlockedSkill: 'Logistics & Volunteer Mobilization',
    description: 'Coordinated regional donor drives, managed volunteer committees, and practiced public mobilization.',
    type: 'leadership',
    color: 'from-red-500 to-rose-500',
    accentColor: 'text-rose-500 bg-rose-500/10 border-rose-500/20 dark:border-rose-500/30'
  },
  {
    year: '2024',
    period: '2024',
    role: 'Adzap Competition Champion',
    company: 'Ayya Nadar College & Regionals',
    icon: Trophy,
    unlockedSkill: 'Ad Strategy & Creative Pitching',
    description: 'Won 1st Prize in Adzap, designing marketing strategy and presenting ad campaigns on-the-spot under intense pressure.',
    type: 'leadership',
    color: 'from-amber-500 to-orange-500',
    accentColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20 dark:border-amber-500/30'
  },
  {
    year: '2024',
    period: '2024',
    role: 'RYLA Entrepreneurship Scholar',
    company: 'Rotary International',
    icon: Award,
    unlockedSkill: 'Business Model Pitching',
    description: 'Selected for intensive leadership camp. Collaborated with a group of 5 to draft and pitch a startup concept to a panel of entrepreneurs.',
    type: 'leadership',
    color: 'from-purple-500 to-fuchsia-500',
    accentColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20 dark:border-purple-500/30'
  },
  {
    year: '2024',
    period: 'Jun 2024 - Jan 2026',
    role: 'Freelance Video Editor & Advisor',
    company: 'Mosi Trading Company',
    icon: Briefcase,
    unlockedSkill: 'Engagement Pacing & Reel SEO',
    description: 'Edited 15+ educational finance videos and reels, structuring scripts and pacing to maximize watch retention.',
    type: 'content',
    color: 'from-cyan-500 to-teal-500',
    accentColor: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20 dark:border-cyan-500/30'
  },
  {
    year: '2025',
    period: 'Dec 2025 - Feb 2026',
    role: 'Digital Marketing Campaign Specialist',
    company: 'Vetikaaran Live Project',
    icon: Megaphone,
    unlockedSkill: 'Meta Ads & Campaign Optimization',
    description: 'Managed ₹10,000 Meta ad budgets, drafted conversion copy, generated 2.5M+ views and closed 150+ product sales.',
    type: 'marketing',
    color: 'from-brand-purple to-pink-500',
    accentColor: 'text-brand-purple bg-brand-purple/10 border-brand-purple/20 dark:border-brand-purple/30'
  },
  {
    year: '2026',
    period: 'Feb 2026',
    role: 'Overall Event Coordinator',
    company: 'VIMSMART Intercollege Festival',
    icon: Landmark,
    unlockedSkill: 'Large-scale Project Management',
    description: 'Led student team of 80 volunteers across 17 teams for 400+ participants and won Best Event Manager Award.',
    type: 'leadership',
    color: 'from-emerald-500 to-teal-500',
    accentColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20 dark:border-emerald-500/30'
  },
  {
    year: '2026',
    period: 'Jun 2026 - Jul 2026',
    role: 'Logistics Operations Intern',
    company: 'Bruhat Logistics',
    icon: TrendingUp,
    unlockedSkill: 'B2B Lead Sourcing & ERP Tools',
    description: 'Conducted market research across 500+ manufacturing firms and built 300+ verified B2B lead database for client expansion.',
    type: 'internship',
    color: 'from-indigo-500 to-blue-600',
    accentColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20 dark:border-indigo-500/30'
  }
];

export default function Experience() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAllCards, setShowAllCards] = useState<boolean>(false);

  // Scroll logic states
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const filteredExp =
    filter === 'all'
      ? experiences
      : experiences.filter((exp) => exp.type === filter);

  // Scroll milestones
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 340 : scrollLeft + 340;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      const timer = setTimeout(checkScroll, 300);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  useEffect(() => {
    if (filteredExp.length > 0) {
      setExpandedId(filteredExp[0].id);
    } else {
      setExpandedId(null);
    }
    setShowAllCards(false);
  }, [filter]);

  const tabs: { id: FilterType; label: string }[] = [
    { label: 'All Experience', id: 'all' },
    { label: 'Internships', id: 'internship' },
    { label: 'Live Projects', id: 'live-project' },
    { label: 'Content Work', id: 'work' },
    { label: 'Leadership', id: 'leadership' },
  ];

  const animateFadeUp = {
    hidden: { opacity: 0, y: 25, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } 
    }
  };

  return (
    <section id="experience" className="py-10 sm:py-14 md:py-16 bg-transparent relative overflow-hidden">
      {/* Background Matrix Grid Overlay */}
      <div className="absolute inset-0 matrix-grid-pattern opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-8 md:mb-10 space-y-2 md:space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={animateFadeUp}
        >
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 rounded-full text-brand-purple text-xs font-semibold uppercase tracking-[0.2em] shadow-2xs backdrop-blur-md">
            <span>PROVING GROUND</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-display font-bold text-brand-dark tracking-[-0.03em]">
            Practical Experience
          </h2>
          <div className="w-12 h-1 bg-brand-purple mx-auto rounded-full" />
          <p className="text-slate-700/85 dark:text-slate-300/85 text-[15px] sm:text-[17px] font-sans font-normal leading-relaxed max-w-[660px] mx-auto">
            A comprehensive record of MBA internships, live client advertising budgets, content growth, and organizational leadership.
          </p>
        </motion.div>

        {/* Horizontal Milestone Tracker */}
        <div className="max-w-7xl mx-auto mb-10 sm:mb-12 relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div className="text-left">
              <h3 className="font-display font-bold text-brand-dark text-base sm:text-lg tracking-tight flex items-center">
                <Sparkles className="w-4 h-4 text-brand-purple mr-2 animate-pulse" />
                Career Milestones & Skills Unlocked
              </h3>
              <p className="text-brand-paragraph text-xs font-medium">
                Horizontal timeline showing practical skill progression across internships, projects, and leadership roles.
              </p>
            </div>
            
            {/* Slider controls */}
            <div className="flex items-center space-x-2 self-end sm:self-auto">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`p-2 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md text-slate-700 dark:text-slate-300 transition-all focus:outline-none min-w-[38px] min-h-[38px] flex items-center justify-center cursor-pointer ${
                  !canScrollLeft ? 'opacity-35 cursor-not-allowed' : 'hover:bg-brand-purple/5 hover:border-brand-purple/30 dark:hover:bg-brand-purple/10 active:scale-95'
                }`}
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`p-2 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md text-slate-700 dark:text-slate-300 transition-all focus:outline-none min-w-[38px] min-h-[38px] flex items-center justify-center cursor-pointer ${
                  !canScrollRight ? 'opacity-35 cursor-not-allowed' : 'hover:bg-brand-purple/5 hover:border-brand-purple/30 dark:hover:bg-brand-purple/10 active:scale-95'
                }`}
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Timeline Horizontal Container */}
          <div className="relative">
            <div className="absolute top-[38px] left-8 right-8 h-[2px] bg-gradient-to-r from-brand-purple/10 via-brand-purple/40 to-indigo-500/10 z-0 hidden md:block" />

            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory relative z-10 pb-3 px-1"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {timelineMilestones.map((milestone, idx) => {
                const IconComponent = milestone.icon;
                return (
                  <div
                    key={idx}
                    className="snap-center shrink-0 min-w-[260px] sm:min-w-[290px] max-w-[290px] flex flex-col pt-8 relative group"
                  >
                    <div className="absolute top-[26px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-white dark:bg-[#07090e] border-[3px] border-brand-purple group-hover:border-indigo-500 transition-all duration-300 group-hover:scale-125 relative shadow-md">
                        <div className="absolute inset-0 rounded-full bg-brand-purple opacity-0 group-hover:opacity-30 group-hover:animate-ping" />
                      </div>
                      <div className="w-[1.5px] h-4 bg-gradient-to-b from-brand-purple to-brand-purple/20 opacity-60 group-hover:h-6 transition-all duration-300" />
                    </div>

                    <div className="p-4.5 rounded-[20px] bg-white/60 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-purple/40 backdrop-blur-md hover:bg-white/90 dark:hover:bg-slate-900/80 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between h-[240px] select-none">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-display font-black text-lg tracking-tight bg-gradient-to-r from-brand-purple to-indigo-500 bg-clip-text text-transparent">
                            {milestone.year}
                          </span>
                          <div className={`p-1.5 rounded-xl border ${milestone.accentColor} shadow-3xs group-hover:scale-105 transition-transform duration-300`}>
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs sm:text-sm font-display font-bold text-brand-dark leading-tight group-hover:text-brand-purple transition-colors">
                            {milestone.role}
                          </h4>
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5 block truncate">
                            {milestone.company}
                          </span>
                        </div>

                        <div>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-brand-purple/5 dark:bg-brand-purple/10 border border-brand-purple/10 text-brand-purple dark:text-brand-purple-light">
                            🔑 {milestone.unlockedSkill}
                          </span>
                        </div>

                        <p className="text-xs text-brand-paragraph leading-relaxed line-clamp-3">
                          {milestone.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                        <span>{milestone.period}</span>
                        <span className="font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[9px]">
                          0{idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Filter Tab Switcher */}
        <div className="mb-8">
          <TabSwitcher
            idPrefix="experience"
            tabs={tabs}
            activeTab={filter}
            onChange={(val) => setFilter(val)}
            ariaLabel="Experience Category Filters"
          />
        </div>

        {/* Experience Cards */}
        <AnimatedPanel activeKey={filter}>
          {/* Desktop Timeline View (>= 768px) */}
          <div className="hidden md:block relative pl-8 border-l-2 border-slate-200/80 dark:border-slate-800/80 space-y-8 text-left max-w-4xl mx-auto">
            {filteredExp.map((exp) => (
              <div
                key={exp.id}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-white dark:bg-[#07090e] border-4 border-brand-purple group-hover:bg-brand-purple group-hover:scale-125 transition-all duration-300 z-10" />

                {/* Info Card */}
                <div className="p-6 sm:p-7 rounded-[24px] bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md hover:bg-white/95 dark:hover:bg-slate-900/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/60">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-0.5 border font-bold text-[10px] uppercase tracking-wider rounded-md ${
                          exp.type === 'leadership' 
                            ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200/60 dark:border-amber-800/40 text-amber-700 dark:text-amber-300' 
                            : 'bg-brand-purple/5 dark:bg-brand-purple/10 border-brand-purple/10 dark:border-brand-purple/20 text-brand-purple dark:text-brand-purple-light'
                        }`}>
                          {exp.id === 'exp_intercollege_prize' || exp.id === 'exp_ryla' ? 'Leadership Award' : exp.type.replace('-', ' ')}
                        </span>
                        <h3 className="text-lg sm:text-xl font-display font-bold text-brand-dark">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="font-display font-bold text-brand-purple text-sm flex items-center">
                        <Briefcase className="w-3.5 h-3.5 mr-1.5" />
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-brand-paragraph font-medium space-y-1 shrink-0">
                      <span className="flex items-center font-semibold text-brand-dark">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-brand-purple" />
                        {exp.period}
                      </span>
                      <span className="flex items-center text-slate-400 text-[11px]">
                        <MapPin className="w-3.5 h-3.5 mr-1.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="py-4 space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start text-xs sm:text-sm text-brand-paragraph leading-relaxed">
                        <ChevronRight className="mt-1 mr-2.5 w-4 h-4 text-brand-purple shrink-0" />
                        <p className="font-normal">{bullet}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-brand-paragraph text-xs rounded-full font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Mobile Accordion View (< 768px) */}
          <div className="block md:hidden space-y-3.5 text-left max-w-xl mx-auto">
            {filteredExp.slice(0, 3).map((exp) => {
              const isExpanded = expandedId === exp.id;
              return (
                <div
                  key={exp.id}
                  className="rounded-[24px] border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md overflow-hidden transition-all duration-250 shadow-2xs"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="w-full text-left p-4.5 flex items-start justify-between gap-3 focus:outline-none cursor-pointer min-h-[48px]"
                    aria-expanded={isExpanded}
                  >
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className={`px-2 py-0.5 border font-bold text-[9px] uppercase tracking-wider rounded-md shrink-0 ${
                          exp.type === 'leadership' 
                            ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200/60 dark:border-amber-800/40 text-amber-700 dark:text-amber-300' 
                            : 'bg-brand-purple/5 dark:bg-brand-purple/10 border-brand-purple/10 text-brand-purple dark:text-brand-purple-light'
                        }`}>
                          {exp.id === 'exp_intercollege_prize' || exp.id === 'exp_ryla' ? 'Leadership' : exp.type.replace('-', ' ')}
                        </span>
                        <h3 className="text-base font-display font-bold text-brand-dark truncate">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="font-display font-bold text-brand-purple text-xs">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 pt-0.5 text-[11px] text-slate-500 font-medium">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1 text-brand-purple shrink-0" />
                          {exp.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1 text-slate-400 shrink-0" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 mt-0.5">
                      <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-4.5 pb-4.5 pt-1 border-t border-slate-100 dark:border-slate-800/60 space-y-3">
                          <div className="space-y-2 pt-2">
                            {exp.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-start text-xs sm:text-sm text-brand-paragraph leading-relaxed">
                                <ChevronRight className="mt-0.5 mr-2 w-3.5 h-3.5 text-brand-purple shrink-0" />
                                <p className="font-normal">{bullet}</p>
                              </div>
                            ))}
                          </div>

                          {exp.tags && exp.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                              {exp.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-0.5 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-brand-paragraph text-[10px] rounded-full font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Remaining cards for mobile */}
            {filteredExp.length > 3 && (
              <AnimatePresence initial={false}>
                {showAllCards && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden space-y-3.5 pt-1"
                  >
                    {filteredExp.slice(3).map((exp) => {
                      const isExpanded = expandedId === exp.id;
                      return (
                        <div
                          key={exp.id}
                          className="rounded-[24px] border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md overflow-hidden transition-all duration-250 shadow-2xs"
                        >
                          <button
                            onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                            className="w-full text-left p-4.5 flex items-start justify-between gap-3 focus:outline-none cursor-pointer min-h-[48px]"
                          >
                            <div className="space-y-1 flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-1.5">
                                <span className="px-2 py-0.5 border font-bold text-[9px] uppercase tracking-wider rounded-md bg-brand-purple/5 text-brand-purple">
                                  {exp.type.replace('-', ' ')}
                                </span>
                                <h3 className="text-base font-display font-bold text-brand-dark truncate">
                                  {exp.role}
                                </h3>
                              </div>
                              <p className="font-display font-bold text-brand-purple text-xs">
                                {exp.company}
                              </p>
                            </div>
                            <div className="shrink-0 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500">
                              <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="px-4.5 pb-4.5 border-t border-slate-100 dark:border-slate-800/60 space-y-2 pt-2"
                              >
                                {exp.bullets.map((bullet, bIdx) => (
                                  <div key={bIdx} className="flex items-start text-xs text-brand-paragraph">
                                    <ChevronRight className="mt-0.5 mr-2 w-3.5 h-3.5 text-brand-purple shrink-0" />
                                    <p>{bullet}</p>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            {filteredExp.length > 3 && (
              <div className="pt-2 text-center">
                <button
                  onClick={() => setShowAllCards(!showAllCards)}
                  className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-brand-purple dark:text-brand-purple-light text-xs font-bold tracking-wider uppercase hover:bg-slate-50 transition-all cursor-pointer min-h-[44px]"
                >
                  <span>{showAllCards ? 'Show Less' : 'View All Experiences'}</span>
                  {showAllCards ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            )}
          </div>
        </AnimatedPanel>

      </motion.div>
    </section>
  );
}
