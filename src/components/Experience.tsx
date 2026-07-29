import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { experiences } from '../data/portfolioData';
import { 
  Calendar, 
  MapPin, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  ChevronLeft,
  Trophy,
  Video,
  Megaphone,
  Users,
  Landmark,
  Briefcase,
  Award,
  TrendingUp
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
    period: 'Aug 2025 - Present',
    role: 'Marketing Campaign Specialist',
    company: 'Vettikaaran Campaign',
    icon: Megaphone,
    unlockedSkill: 'Meta Ads & Social Chat Sales',
    description: 'Managed ₹10,000 Meta ad budgets, drafted conversion copy, and closed 150+ sales directly in customer chats.',
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
    description: 'Led student team to organize state-level management festival for 400+ attendees, coordinating schedules and sponsor deliverables.',
    type: 'leadership',
    color: 'from-emerald-500 to-teal-500',
    accentColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20 dark:border-emerald-500/30'
  },
  {
    year: '2026',
    period: 'Jun 2026 - Present',
    role: 'Marketing & Research Intern',
    company: 'Bruhat Logistics',
    icon: TrendingUp,
    unlockedSkill: 'B2B Lead Sourcing & Market Intel',
    description: 'Conducted logistics market analysis and built verified leads database for B2B client acquisition campaigns.',
    type: 'internship',
    color: 'from-indigo-500 to-blue-600',
    accentColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20 dark:border-indigo-500/30'
  }
];

export default function Experience() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAllFilterCards, setShowAllFilterCards] = useState<boolean>(false);

  // Scroll logic states for milestone tracker
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
      // Wait slightly for initial render to establish dimensions
      const timer = setTimeout(checkScroll, 300);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  // Auto-expand first item when filter changes on mobile/tablet
  useEffect(() => {
    if (filteredExp.length > 0) {
      setExpandedId(filteredExp[0].id);
    } else {
      setExpandedId(null);
    }
    setShowAllFilterCards(false);
  }, [filter]);

  const tabs: { id: FilterType; label: string }[] = [
    { label: 'All Milestones', id: 'all' },
    { label: 'Internships', id: 'internship' },
    { label: 'Live Corporate Projects', id: 'live-project' },
    { label: 'Creative/Content Work', id: 'work' },
    { label: 'Campus Leadership', id: 'leadership' },
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

  return (
    <section id="experience" className="py-8 sm:py-12 md:py-14 bg-transparent relative overflow-hidden">
      {/* Editorial matrix grid overlays */}
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
            <span>MY JOURNEY</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold text-brand-dark tracking-[-0.03em]">
            My Journey
          </h2>
          <div className="w-12 h-1 bg-brand-purple mx-auto rounded-full" />
          <p className="text-slate-700/85 dark:text-slate-300/85 text-[16px] sm:text-[18px] font-sans font-normal leading-relaxed sm:leading-[1.9] max-w-[680px] mx-auto">
            A proven record of execution across professional internships, live corporate consulting, and campus student committees.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Milestone Tracker */}
        <div className="max-w-5xl mx-auto px-4 sm:px-0 mb-12 sm:mb-16 relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="text-left">
              <h3 className="font-display font-bold text-brand-dark text-base sm:text-lg tracking-tight flex items-center">
                <Sparkles className="w-4 h-4 text-brand-purple mr-2 animate-pulse" />
                Career Progression Timeline
              </h3>
              <p className="text-brand-paragraph text-xs font-medium">
                Slide horizontally to track the evolution of key marketing skills and leadership accomplishments.
              </p>
            </div>
            
            {/* Slider controls */}
            <div className="flex items-center space-x-2 self-end sm:self-auto">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`p-2 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 transition-all focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer ${
                  !canScrollLeft ? 'opacity-35 cursor-not-allowed' : 'hover:bg-brand-purple/5 hover:border-brand-purple/30 dark:hover:bg-brand-purple/10 active:scale-95'
                }`}
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`p-2 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 transition-all focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer ${
                  !canScrollRight ? 'opacity-35 cursor-not-allowed' : 'hover:bg-brand-purple/5 hover:border-brand-purple/30 dark:hover:bg-brand-purple/10 active:scale-95'
                }`}
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Timeline Horizontal Outer Container */}
          <div className="relative">
            
            {/* Continuous gradient line behind cards */}
            <div className="absolute top-[38px] left-8 right-8 h-[2px] bg-gradient-to-r from-brand-purple/10 via-brand-purple/40 to-indigo-500/10 z-0 hidden md:block" />

            {/* Draggable/scrollable viewport */}
            <div
              ref={scrollRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory relative z-10 pb-4 px-1"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {timelineMilestones.map((milestone, idx) => {
                const IconComponent = milestone.icon;
                return (
                  <div
                    key={idx}
                    className="snap-center shrink-0 min-w-[270px] sm:min-w-[310px] max-w-[310px] flex flex-col pt-10 relative group"
                  >
                    {/* Timeline Node Point (Connected to the back line) */}
                    <div className="absolute top-[32px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-white dark:bg-[#07090e] border-[3px] border-brand-purple group-hover:border-indigo-500 transition-all duration-300 group-hover:scale-125 relative shadow-md">
                        <div className="absolute inset-0 rounded-full bg-brand-purple opacity-0 group-hover:opacity-30 group-hover:animate-ping" />
                      </div>
                      <div className="w-[1.5px] h-5 bg-gradient-to-b from-brand-purple to-brand-purple/20 opacity-60 group-hover:h-7 transition-all duration-300" />
                    </div>

                    {/* Milestone Bento Glass Card */}
                    <div className="p-5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 hover:border-brand-purple/30 dark:hover:border-brand-purple/50 backdrop-blur-md hover:bg-white/70 dark:hover:bg-slate-900/70 hover:shadow-xl hover:shadow-brand-purple/[0.02] hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between h-[255px] select-none">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="font-display font-black text-xl tracking-tight bg-gradient-to-r from-brand-purple to-indigo-500 bg-clip-text text-transparent">
                            {milestone.year}
                          </span>
                          <div className={`p-2 rounded-xl border ${milestone.accentColor} shadow-3xs group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs sm:text-sm font-display font-bold text-brand-dark leading-tight group-hover:text-brand-purple transition-colors">
                            {milestone.role}
                          </h4>
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5 block">
                            {milestone.company}
                          </span>
                        </div>

                        <div className="pt-0.5">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-bold tracking-wide uppercase bg-brand-purple/5 dark:bg-brand-purple/10 border border-brand-purple/10 dark:border-brand-purple/20 text-brand-purple dark:text-brand-purple-light shadow-3xs">
                            🔑 {milestone.unlockedSkill}
                          </span>
                        </div>

                        <p className="text-xs text-brand-paragraph leading-relaxed line-clamp-3">
                          {milestone.description}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                        <span>{milestone.period}</span>
                        <span className="font-mono text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 px-1.5 py-0.5 rounded">
                          Step 0{idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#FFFFFF] dark:from-[#07090e] to-transparent pointer-events-none z-20 hidden md:block opacity-70" />
            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#FFFFFF] dark:from-[#07090e] to-transparent pointer-events-none z-20 hidden md:block opacity-70" />
          </div>

        </div>

        {/* Experience Filters */}
        <div className="mb-5 md:mb-6 max-w-4xl mx-auto">
          <TabSwitcher
            idPrefix="experience"
            tabs={tabs}
            activeTab={filter}
            onChange={(val) => setFilter(val)}
            ariaLabel="Career Journey Filters"
          />
        </div>

        {/* Timeline Stack */}
        <AnimatedPanel activeKey={filter}>
          {/* Desktop Timeline Layout (>= 1024px) */}
          <div className="hidden lg:block relative max-w-4xl mx-auto pl-6 sm:pl-10 border-l-2 border-slate-200/80 dark:border-slate-800/80 space-y-8 text-left">
            {filteredExp.map((exp, index) => {
              return (
                <div
                  id={`experience-timeline-card-${exp.id}`}
                  key={exp.id}
                  className="relative group"
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#07090e] border-4 border-brand-purple group-hover:bg-brand-purple group-hover:scale-125 transition-all duration-300 z-10" />

                  {/* Info Card */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-white/45 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md hover:bg-white/75 dark:hover:bg-slate-900/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-250 ease-out">
                    
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/60">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`px-2.5 py-0.5 border font-bold text-[11px] uppercase tracking-widest rounded-md ${
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
                           {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs text-brand-paragraph font-medium space-y-1">
                        <span className="flex items-center sm:justify-end font-semibold text-brand-dark">
                          <Calendar className="w-3.5 h-3.5 mr-1.5 text-brand-purple" />
                          {exp.period}
                        </span>
                        <span className="flex items-center sm:justify-end text-slate-400">
                          <MapPin className="w-3.5 h-3.5 mr-1.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet points mapping */}
                    <div className="py-4 space-y-2.5">
                      {exp.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start text-xs sm:text-sm text-brand-paragraph leading-relaxed">
                          <ChevronRight className="mt-1 mr-3.5 w-3.5 h-3.5 text-brand-purple shrink-0" />
                          <p className="font-normal text-balance">{bullet}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tag Badges */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/60 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60 text-brand-paragraph text-xs rounded-full font-semibold shadow-3xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet Accordion Layout (< 1024px) */}
          <div className="block lg:hidden space-y-3 sm:space-y-3.5 max-w-2xl mx-auto text-left">
            {/* Display first 3 cards */}
            {filteredExp.slice(0, 3).map((exp) => {
              const isExpanded = expandedId === exp.id;
              return (
                <div
                  id={`experience-mobile-accordion-${exp.id}`}
                  key={exp.id}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/50 backdrop-blur-md overflow-hidden transition-all duration-250 ease-out hover:border-brand-purple/30 shadow-2xs"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="w-full text-left p-4 sm:p-4.5 flex items-start justify-between gap-3 focus:outline-none cursor-pointer min-h-[48px]"
                    aria-expanded={isExpanded}
                  >
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2 py-0.5 border font-bold text-[10px] uppercase tracking-widest rounded-md shrink-0 ${
                          exp.type === 'leadership' 
                            ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200/60 dark:border-amber-800/40 text-amber-700 dark:text-amber-300' 
                            : 'bg-brand-purple/5 dark:bg-brand-purple/10 border-brand-purple/10 dark:border-brand-purple/20 text-brand-purple dark:text-brand-purple-light'
                        }`}>
                          {exp.id === 'exp_intercollege_prize' || exp.id === 'exp_ryla' ? 'Leadership' : exp.type.replace('-', ' ')}
                        </span>
                        <h3 className="text-sm sm:text-base font-display font-bold text-brand-dark dark:text-slate-100 truncate">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="font-display font-bold text-brand-purple text-xs">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-0.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        <span className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1 text-brand-purple shrink-0" />
                          {exp.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 mt-0.5 border border-slate-200/50 dark:border-slate-700/50">
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
                        <div className="px-4 pb-4 pt-1 sm:px-4.5 sm:pb-4.5 border-t border-slate-100 dark:border-slate-800/60 space-y-3">
                          <div className="space-y-2 pt-2">
                            {exp.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-start text-xs text-brand-paragraph dark:text-slate-300 leading-relaxed">
                                <ChevronRight className="mt-0.5 mr-2 w-3.5 h-3.5 text-brand-purple shrink-0" />
                                <p className="font-normal">{bullet}</p>
                              </div>
                            ))}
                          </div>

                          {exp.tags && exp.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-slate-100 dark:border-slate-800/50">
                              {exp.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-0.5 bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 text-brand-paragraph dark:text-slate-300 text-[10px] rounded-md font-semibold"
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

            {/* Expandable remaining cards (index 3 onwards) */}
            {filteredExp.length > 3 && (
              <AnimatePresence initial={false}>
                {showAllFilterCards && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 sm:space-y-3.5 pt-1">
                      {filteredExp.slice(3).map((exp) => {
                        const isExpanded = expandedId === exp.id;
                        return (
                          <div
                            id={`experience-mobile-accordion-${exp.id}`}
                            key={exp.id}
                            className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/50 backdrop-blur-md overflow-hidden transition-all duration-250 ease-out hover:border-brand-purple/30 shadow-2xs"
                          >
                            <button
                              onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                              className="w-full text-left p-4 sm:p-4.5 flex items-start justify-between gap-3 focus:outline-none cursor-pointer min-h-[48px]"
                              aria-expanded={isExpanded}
                            >
                              <div className="space-y-1.5 flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className={`px-2 py-0.5 border font-bold text-[10px] uppercase tracking-widest rounded-md shrink-0 ${
                                    exp.type === 'leadership' 
                                      ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200/60 dark:border-amber-800/40 text-amber-700 dark:text-amber-300' 
                                      : 'bg-brand-purple/5 dark:bg-brand-purple/10 border-brand-purple/10 dark:border-brand-purple/20 text-brand-purple dark:text-brand-purple-light'
                                  }`}>
                                    {exp.id === 'exp_intercollege_prize' || exp.id === 'exp_ryla' ? 'Leadership' : exp.type.replace('-', ' ')}
                                  </span>
                                  <h3 className="text-sm sm:text-base font-display font-bold text-brand-dark dark:text-slate-100 truncate">
                                    {exp.role}
                                  </h3>
                                </div>
                                <p className="font-display font-bold text-brand-purple text-xs">
                                  {exp.company}
                                </p>
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-0.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                                  <span className="flex items-center">
                                    <Calendar className="w-3.5 h-3.5 mr-1 text-brand-purple shrink-0" />
                                    {exp.period}
                                  </span>
                                  <span className="flex items-center">
                                    <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
                                    {exp.location}
                                  </span>
                                </div>
                              </div>
                              <div className="shrink-0 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 mt-0.5 border border-slate-200/50 dark:border-slate-700/50">
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
                                  <div className="px-4 pb-4 pt-1 sm:px-4.5 sm:pb-4.5 border-t border-slate-100 dark:border-slate-800/60 space-y-3">
                                    <div className="space-y-2 pt-2">
                                      {exp.bullets.map((bullet, bIdx) => (
                                        <div key={bIdx} className="flex items-start text-xs text-brand-paragraph dark:text-slate-300 leading-relaxed">
                                          <ChevronRight className="mt-0.5 mr-2 w-3.5 h-3.5 text-brand-purple shrink-0" />
                                          <p className="font-normal">{bullet}</p>
                                        </div>
                                      ))}
                                    </div>

                                    {exp.tags && exp.tags.length > 0 && (
                                      <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-slate-100 dark:border-slate-800/50">
                                        {exp.tags.map((tag) => (
                                          <span
                                            key={tag}
                                            className="px-2.5 py-0.5 bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 text-brand-paragraph dark:text-slate-300 text-[10px] rounded-md font-semibold"
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
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            {/* Premium Centered VIEW ALL MILESTONES / SHOW LESS Button below cards */}
            {filteredExp.length > 3 && (
              <div className="pt-4 pb-1 text-center">
                <button
                  id="experience-view-all-milestones-btn"
                  onClick={() => setShowAllFilterCards(!showAllFilterCards)}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-brand-purple dark:text-brand-purple-light text-xs font-bold uppercase tracking-wider hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-[1.02] hover:shadow-md active:scale-98 transition-all duration-250 cursor-pointer min-h-[48px] shadow-2xs"
                >
                  <span>{showAllFilterCards ? 'SHOW LESS' : 'VIEW ALL MILESTONES'}</span>
                  {showAllFilterCards ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            )}
          </div>

          {filteredExp.length === 0 && (
            <div className="text-center py-12 text-brand-paragraph">
              No milestones found for this filter. Select another filter to see items.
            </div>
          )}
        </AnimatedPanel>

      </motion.div>
    </section>
  );
}
