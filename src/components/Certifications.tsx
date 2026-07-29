import React, { useState } from 'react';
import { motion } from 'motion/react';
import { certifications } from '../data/portfolioData';
import { ShieldCheck, ExternalLink, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatedPanel } from './InteractiveComponents';

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const visibleCertifications = showAll ? certifications : certifications.slice(0, 6);

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
    <section id="certifications" className="py-8 sm:py-12 md:py-14 bg-transparent relative overflow-hidden">
      {/* Subtle background matrix layout */}
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
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold text-brand-dark tracking-[-0.03em]">
            Professional Certifications
          </h2>
          <div className="w-12 h-1 bg-brand-purple mx-auto rounded-full" />
          <p className="text-slate-700/85 dark:text-slate-300/85 text-[16px] sm:text-[18px] font-sans font-normal leading-relaxed sm:leading-[1.9] max-w-[680px] mx-auto">
            Continuous professional training and digital marketing credentials completed alongside MBA coursework.
          </p>
        </motion.div>

        {/* Certifications Grid Layout */}
        <AnimatedPanel activeKey={showAll ? 'all' : 'some'}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {visibleCertifications.map((cert) => {
              return (
                <div
                  id={`certification-card-${cert.id}`}
                  key={cert.id}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/85 hover:bg-slate-50/20 dark:hover:bg-slate-950/20 hover:border-brand-purple/20 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-250 ease-out flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Verified badge */}
                    <div className="flex justify-between items-start">
                      <div className="w-9 h-9 rounded-lg bg-brand-purple/5 dark:bg-brand-purple/10 border border-brand-purple/10 dark:border-brand-purple/20 text-brand-purple flex items-center justify-center group-hover:rotate-6 group-hover:scale-105 transition-all duration-250 ease-out">
                        <GraduationCap className="w-4.5 h-4.5" />
                      </div>
                      <span className="flex items-center space-x-1 text-[11px] text-brand-success font-bold bg-emerald-50 dark:bg-emerald-950/45 border border-emerald-100 dark:border-emerald-900/40 px-2 py-0.5 rounded-full">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-brand-dark text-sm sm:text-base tracking-tight leading-snug group-hover:text-brand-purple transition-colors duration-250">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-brand-paragraph font-medium">
                        Issued by <span className="text-brand-dark font-bold">{cert.issuer}</span>
                      </p>
                      {cert.credentialId && (
                        <p className="text-xs text-brand-paragraph font-mono mt-1.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 py-0.5 px-2 rounded w-fit">
                          ID: <span className="text-brand-dark font-semibold">{cert.credentialId}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Footer and Date */}
                  <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800/60 mt-4 pt-3 text-[11px] font-semibold text-brand-paragraph">
                    <span>Completed: {cert.date || '2024'}</span>
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-purple flex items-center hover:underline cursor-pointer font-bold group-hover:translate-x-0.5 transition-transform duration-250"
                      >
                        Verify <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </a>
                    ) : (
                      <span className="text-slate-300 dark:text-slate-700 flex items-center">
                        No Link Available
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedPanel>

        {/* Dynamic Expand Button */}
        {certifications.length > 6 && (
          <div className="mt-6 text-center">
            <button
              id="certs-toggle-view-btn"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-brand-purple text-xs font-semibold uppercase tracking-wider hover:bg-slate-50/50 dark:hover:bg-slate-800 hover:scale-[1.02] hover:shadow-md transition-all duration-250 ease-out active:scale-98 cursor-pointer"
            >
              <span>{showAll ? 'Show Fewer Credentials' : `View All (${certifications.length}) Credentials`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

      </motion.div>
    </section>
  );
}
