import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  BookOpen, 
  ChevronRight, 
  ClipboardList, 
  Calendar, 
  Heart, 
  Users, 
  Sparkles,
  Trophy,
  Search,
  BookMarked
} from 'lucide-react';
import { educationHistory } from '../data/portfolioData';
import { TimelineSwitcher } from './InteractiveComponents';

// Large static constant data moved outside of component for performance optimization
const academicCoursework: Record<string, string[]> = {
  edu1: [
    'Digital Marketing Strategy',
    'Business Analytics',
    'SEO & Google Search Console',
    'Meta & Google Ads Strategy',
    'Data Analysis with SPSS & Power BI',
    'Quantitative & Statistical Methods'
  ],
  edu2: [
    'Organizational Behavior',
    'Financial, Cost & Management Accounting',
    'Quantitative Techniques (QT)',
    'Statistics (STAT)',
    'Marketing Research',
    'Marketing Management'
  ],
  edu3: [
    'Commerce',
    'History',
    'Economics',
    'Accountancy'
  ],
  edu4: [
    'Mathematics',
    'General Science',
    'Social Studies',
    'Language Studies'
  ]
};

const academicProjects: Record<string, { title: string; desc: string; icon: React.ReactNode }[]> = {
  edu1: [
    {
      title: 'Vettikaaran Marketing Campaign',
      desc: 'Ran targeted regional Meta ads campaigns and localized short-form videos to convert direct chat sales.',
      icon: <ClipboardList className="w-4 h-4 text-[#1A3636] dark:text-[#D6BD98]" />
    },
    {
      title: 'VIMSMART 2K26 Intercollege Festival',
      desc: 'Organized and managed student teams, venue schedules, and regional college communication channels.',
      icon: <Users className="w-4 h-4 text-[#1A3636] dark:text-[#D6BD98]" />
    }
  ],
  edu2: [
    {
      title: "Charavyuga Management Fest Leader (2k24 & 2k25)",
      desc: "Coordinated rounds and judged criteria for the inter-collegiate 'Best Manager' competition.",
      icon: <Trophy className="w-4 h-4 text-[#B38F6F]" />
    }
  ],
  edu3: [
    {
      title: "NSS School Campaigns",
      desc: "Organized public health awareness presentations and local cleanliness drives.",
      icon: <Heart className="w-4 h-4 text-[#710014]" />
    }
  ],
  edu4: [
    {
      title: "JRC Civic Hygiene Initiatives",
      desc: "Conducted basic first aid workshops and community health education sessions.",
      icon: <Users className="w-4 h-4 text-[#677D6A]" />
    }
  ]
};

const academicResearch: Record<string, { title: string; desc: string; pub: string }[]> = {
  edu1: [
    {
      title: 'E-Commerce Online Shopping Behavior Study',
      desc: 'Analyzed purchasing behaviors of 150+ regional college students to identify core conversion drivers.',
      pub: 'Published peer-reviewed scientific paper (Paper ID: 1716534)'
    }
  ],
  edu2: [
    {
      title: "Tomorrow's Accountant Seminar Research",
      desc: "Studied the digitalization of management accounting roles for corporate efficiency.",
      pub: "Published in ISBN-registered national seminar research book (2023)"
    }
  ],
  edu3: [],
  edu4: []
};

const academicAchievements: Record<string, { title: string; award: string }[]> = {
  edu1: [
    {
      title: "Overall Event Coordinator",
      award: "Recognized by VIMS administration for managing a major 400+ student festival."
    }
  ],
  edu2: [
    {
      title: "Adzap (Advertising Pitch) Winner",
      award: "1st Prize - Outperformed competing teams in on-the-spot brand campaign design."
    },
    {
      title: "Treasure Hunt Champion",
      award: "2nd Prize - Evaluated for rapid collaborative analytical problem solving."
    },
    {
      title: "RYLA Entrepreneur Scholar",
      award: "Rotary youth leadership residential training scholarship."
    }
  ],
  edu3: [
    {
      title: "NSS Blood Donation Campaign",
      award: "Collected 120+ units of blood. Awarded for exceptional service by school management."
    }
  ],
  edu4: [
    {
      title: "JRC Outstanding Volunteer",
      award: "Recognized for continuous participation in community first aid drills."
    }
  ]
};

// Theme configuration for academic stages using the new palette
const stageTheme: Record<string, { badge: string; accent: string; bg: string }> = {
  edu1: {
    badge: 'bg-[#1A3636]/10 dark:bg-[#D6BD98]/15 text-[#1A3636] dark:text-[#D6BD98] border-[#1A3636]/20 dark:border-[#D6BD98]/30',
    accent: 'bg-[#1A3636] dark:bg-[#D6BD98]',
    bg: 'from-[#1A3636]/10 dark:from-[#D6BD98]/10 to-transparent'
  },
  edu2: {
    badge: 'bg-[#40534C]/10 dark:bg-[#B38F6F]/15 text-[#40534C] dark:text-[#B38F6F] border-[#40534C]/20 dark:border-[#B38F6F]/30',
    accent: 'bg-[#40534C] dark:bg-[#B38F6F]',
    bg: 'from-[#40534C]/10 dark:from-[#B38F6F]/10 to-transparent'
  },
  edu3: {
    badge: 'bg-[#677D6A]/10 dark:bg-[#677D6A]/20 text-[#677D6A] dark:text-[#A8B8AE] border-[#677D6A]/20 dark:border-[#677D6A]/30',
    accent: 'bg-[#677D6A]',
    bg: 'from-[#677D6A]/10 dark:from-[#677D6A]/10 to-transparent'
  },
  edu4: {
    badge: 'bg-[#B38F6F]/10 dark:bg-[#B38F6F]/20 text-[#B38F6F] dark:text-[#D6BD98] border-[#B38F6F]/20 dark:border-[#B38F6F]/30',
    accent: 'bg-[#B38F6F]',
    bg: 'from-[#B38F6F]/10 dark:from-[#B38F6F]/10 to-transparent'
  }
};

interface DetailPanelContentProps {
  edu: typeof educationHistory[0];
}

// Extracted reusable detail panel to avoid duplicate logic/rendering
function DetailPanelContent({ edu }: DetailPanelContentProps) {
  const theme = stageTheme[edu.id] || stageTheme.edu1;
  const projects = academicProjects[edu.id] || [];
  const research = academicResearch[edu.id] || [];
  const coursework = academicCoursework[edu.id] || [];
  const achievements = academicAchievements[edu.id] || [];

  return (
    <div className="space-y-5 relative z-10 text-left">
      {/* MODULE 1: Education Headers */}
      <div className="space-y-2 border-b border-[#40534C]/15 dark:border-[#D6BD98]/20 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="p-1.5 bg-[#1A3636]/5 dark:bg-[#D6BD98]/10 text-[#1A3636] dark:text-[#D6BD98] border border-[#1A3636]/10 dark:border-[#D6BD98]/20 rounded-lg">
            <GraduationCap className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-paragraph flex items-center">
            <Calendar className="w-3 h-3 mr-1 text-[#677D6A] dark:text-[#D6BD98]" />
            {edu.period} • Grade: {edu.grade}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-brand-dark tracking-tight leading-tight">
          {edu.degree}
        </h3>
        <p className="text-brand-paragraph text-xs font-semibold flex items-center">
          <MapPin className="w-3.5 h-3.5 mr-1 text-[#1A3636] dark:text-[#D6BD98] shrink-0" />
          {edu.institution}
        </p>
      </div>

      {/* MODULE 2: Key Highlights */}
      {edu.highlights && edu.highlights.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark flex items-center border-l-2 border-[#1A3636] dark:border-[#D6BD98] pl-2">
            <Award className="w-3.5 h-3.5 mr-1.5 text-[#1A3636] dark:text-[#D6BD98] shrink-0" />
            Key Highlights
          </h4>
          <div className="space-y-1.5 pl-2">
            {edu.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start text-xs text-brand-paragraph leading-relaxed">
                <span className="w-1.5 h-1.5 bg-[#677D6A] dark:bg-[#D6BD98] rounded-full mr-2 mt-1.5 shrink-0" />
                <span className="font-normal text-balance">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODULE 3: Projects */}
      {projects.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark flex items-center border-l-2 border-[#1A3636] dark:border-[#D6BD98] pl-2">
            <ClipboardList className="w-3.5 h-3.5 mr-1.5 text-[#1A3636] dark:text-[#D6BD98] shrink-0" />
            Practical Projects & Initiatives
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
            {projects.map((project, idx) => (
              <div key={idx} className="p-3 bg-white/60 dark:bg-[#1A3636]/40 border border-[#40534C]/15 dark:border-[#D6BD98]/20 rounded-lg">
                <h5 className="font-display font-bold text-xs text-brand-dark mb-1 flex items-center gap-1.5">
                  {project.icon}
                  {project.title}
                </h5>
                <p className="text-xs text-brand-paragraph leading-normal font-normal">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODULE 4: Research */}
      {research.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark flex items-center border-l-2 border-[#1A3636] dark:border-[#D6BD98] pl-2">
            <Search className="w-3.5 h-3.5 mr-1.5 text-[#1A3636] dark:text-[#D6BD98] shrink-0" />
            Academic Research & Publications
          </h4>
          <div className="space-y-2 pl-2">
            {research.map((res, idx) => (
              <div key={idx} className="p-3 bg-[#1A3636]/5 dark:bg-[#D6BD98]/10 border border-[#1A3636]/10 dark:border-[#D6BD98]/20 rounded-lg">
                <h5 className="font-display font-bold text-xs text-brand-dark mb-1 flex items-center gap-1.5">
                  <BookMarked className="w-3.5 h-3.5 text-[#1A3636] dark:text-[#D6BD98] shrink-0" />
                  {res.title}
                </h5>
                <p className="text-xs text-brand-paragraph leading-normal mb-1">
                  {res.desc}
                </p>
                <span className="text-[11px] font-mono text-[#1A3636] dark:text-[#D6BD98] font-bold">
                  {res.pub}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODULE 5: Skills Learned */}
      {coursework.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark flex items-center border-l-2 border-[#1A3636] dark:border-[#D6BD98] pl-2">
            <BookOpen className="w-3.5 h-3.5 mr-1.5 text-[#40534C] dark:text-[#D6BD98] shrink-0" />
            Skills Learned & Coursework
          </h4>
          <div className="flex flex-wrap gap-1.5 pl-2">
            {coursework.map((course, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-white dark:bg-[#1A3636]/60 border border-[#40534C]/15 dark:border-[#D6BD98]/20 rounded-lg text-xs font-semibold text-brand-dark flex items-center space-x-1.5 shadow-3xs hover:border-[#1A3636]/30 dark:hover:border-[#D6BD98]/40 transition-all duration-200"
              >
                <span className={`w-1 h-1 rounded-full ${theme.accent} shrink-0`} />
                <span>{course}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* MODULE 6: Achievements */}
      {achievements.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark flex items-center border-l-2 border-[#1A3636] dark:border-[#D6BD98] pl-2">
            <Trophy className="w-3.5 h-3.5 mr-1.5 text-[#B38F6F] shrink-0" />
            Achievements & Recognitions
          </h4>
          <div className="space-y-2 pl-2">
            {achievements.map((ach, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2 bg-[#B38F6F]/10 dark:bg-[#B38F6F]/15 border border-[#B38F6F]/20 rounded-lg text-xs">
                <Trophy className="w-4 h-4 text-[#B38F6F] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h5 className="font-bold text-brand-dark">{ach.title}</h5>
                  <p className="text-xs text-brand-paragraph leading-normal">{ach.award}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Academic() {
  const [activeEducation, setActiveEducation] = useState<typeof educationHistory[0]>(educationHistory[0]);

  return (
    <section id="academic" className="py-8 sm:py-12 md:py-14 bg-transparent relative overflow-hidden">
      {/* Editorial matrix grid overlays */}
      <div className="absolute inset-0 matrix-grid-pattern opacity-25 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-5 md:mb-6 space-y-2 md:space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/70 dark:bg-[#1A3636]/60 border border-[#40534C]/20 dark:border-[#D6BD98]/25 rounded-full text-[#1A3636] dark:text-[#D6BD98] text-xs font-semibold uppercase tracking-[0.24em] shadow-2xs backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-[#677D6A] dark:text-[#D6BD98]" />
            <span>QUALIFICATIONS</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold text-brand-dark tracking-[-0.03em]">
            Academic Profile
          </h2>
          <div className="w-12 h-1 bg-[#1A3636] dark:bg-[#D6BD98] mx-auto rounded-full" />
          <p className="text-slate-700/85 dark:text-slate-300 text-[16px] sm:text-[18px] font-sans font-normal leading-relaxed sm:leading-[1.9] max-w-[680px] mx-auto">
            A comprehensive, structured showcase of my academic milestones, analytics coursework, and campus leadership.
          </p>
        </div>

        {/* Unified Timeline Switcher (Desktop, Tablet & Mobile Accordion) */}
        <TimelineSwitcher
          idPrefix="edu"
          items={educationHistory}
          activeId={activeEducation.id}
          onChange={(id) => {
            const found = educationHistory.find((edu) => edu.id === id);
            if (found) {
              setActiveEducation(found);
            }
          }}
          getId={(edu) => edu.id}
          getMobileTitle={(edu) => edu.degree}
          getMobileSubtitle={(edu) => edu.institution}
          getMobileIcon={() => <GraduationCap className="w-4 h-4 text-[#1A3636] dark:text-[#D6BD98]" />}
          getMobileHeaderRight={(edu) => {
            const theme = stageTheme[edu.id] || stageTheme.edu1;
            return (
              <span className={`text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded border shrink-0 ${theme.badge}`}>
                {edu.period}
              </span>
            );
          }}
          renderSelectorItem={(edu, isSelected) => {
            const theme = stageTheme[edu.id] || stageTheme.edu1;
            return (
              <div className="p-4 w-full text-left flex flex-col justify-between h-full">
                <div className="space-y-1.5 w-full text-left">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded border ${
                      isSelected ? theme.badge : 'bg-black/5 dark:bg-white/5 text-slate-500 dark:text-[#A8B8AE] border-[#40534C]/10 dark:border-[#D6BD98]/15'
                    }`}>
                      {edu.period}
                    </span>
                    <span className={`text-xs font-mono font-bold ${
                      isSelected ? 'text-[#1A3636] dark:text-[#D6BD98]' : 'text-slate-400 dark:text-slate-500'
                    }`}>
                      {edu.grade}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base tracking-tight text-brand-dark leading-snug group-hover:text-[#1A3636] dark:group-hover:text-[#D6BD98] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-brand-paragraph font-medium leading-normal flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
                    <span className="truncate">{edu.institution}</span>
                  </p>
                </div>

                <span className={`text-[10px] font-bold pt-3 flex items-center transition-all ${
                  isSelected ? 'text-[#1A3636] dark:text-[#D6BD98] translate-x-1' : 'text-slate-500'
                }`}>
                  <span>Explore Profile Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5 shrink-0" />
                </span>
              </div>
            );
          }}
          renderDetail={(edu) => {
            const theme = stageTheme[edu.id] || stageTheme.edu1;
            return (
              <div className="relative w-full h-full">
                {/* Soft Stage-specific background tint */}
                <div className={`absolute -inset-8 bg-gradient-to-b ${theme.bg} opacity-[0.25] pointer-events-none`} />
                <DetailPanelContent edu={edu} />
              </div>
            );
          }}
        />

      </motion.div>
    </section>
  );
}
