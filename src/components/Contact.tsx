import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Copy, Check, Sparkles, Instagram, FileText, ArrowUpRight, Youtube } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onOpenResume?: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
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
    <section id="contact" className="py-16 sm:py-24 bg-transparent relative overflow-hidden border-t border-slate-100 dark:border-slate-900/60">
      {/* Precision Editorial Grid & Glass Glows */}
      <div className="absolute inset-0 matrix-grid-pattern opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Apple-style Centered Intro */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animateFadeUp}
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-full shadow-2xs backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
            <span className="text-brand-purple text-xs font-semibold uppercase tracking-[0.24em]">
              DIRECT CONNECTION CHANNELS
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold text-brand-dark tracking-[-0.03em] leading-tight">
            Let's start a conversation.
          </h2>
          <div className="w-10 h-1 bg-brand-purple/80 mx-auto rounded-full" />
          <p className="text-slate-700/85 dark:text-slate-300/85 text-[16px] sm:text-[18px] font-sans font-normal leading-relaxed max-w-[680px] mx-auto">
            Whether discussing brand strategy, marketing analytics systems, campaign consulting, or permanent recruitment.
          </p>
        </motion.div>

        {/* Master Glass Board Layout */}
        <div className="max-w-5xl mx-auto">
          
          {/* Desktop Version (hidden on mobile/tablet <= 1024px) */}
          <div className="hidden lg:block">
            <motion.div 
              className="p-6 sm:p-10 rounded-[32px] bg-white/45 dark:bg-slate-900/40 border border-white/60 dark:border-slate-800/80 backdrop-blur-md shadow-2xl shadow-brand-purple/5 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={animateFadeUp}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 dark:via-slate-800/80 to-transparent" />

              <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <h3 className="font-display font-bold text-brand-dark text-xl sm:text-2xl tracking-tight">
                  Direct Contact Channels
                </h3>
                <p className="text-brand-paragraph text-xs font-medium">
                  Copy my details directly or connect through my digital networks.
                </p>
              </div>

              {/* Channels Grid: Balanced 3-column layout on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
                
                {/* Refined Email Panel */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/40 dark:bg-slate-900/60 border border-white/50 dark:border-slate-800/60 backdrop-blur-xl hover:border-brand-purple/15 dark:hover:border-brand-purple/30 hover:bg-white/70 dark:hover:bg-slate-900/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-250 ease-out group flex flex-col justify-between text-left min-h-[160px]">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-purple/5 dark:bg-brand-purple/10 text-[#EA4335] dark:text-[#ff5e50] border border-brand-purple/10 dark:border-brand-purple/20 rounded-xl group-hover:scale-105 transition-transform duration-250 ease-out shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest block mb-0.5">
                        Professional Email
                      </span>
                      <span className="font-display font-bold text-brand-dark text-xs sm:text-sm truncate block tracking-tight">
                        {personalInfo.email}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <button
                      id="contact-action-copy-email-desktop"
                      onClick={handleCopyEmail}
                      className="flex items-center space-x-1.5 px-3 py-1.5 text-xs bg-white/60 dark:bg-slate-800/60 border border-brand-border/60 dark:border-slate-700/60 hover:border-brand-purple/30 dark:hover:border-brand-purple/50 hover:bg-white dark:hover:bg-slate-800 rounded-xl hover:scale-105 active:scale-95 transition-all duration-250 ease-out cursor-pointer shadow-3xs min-h-[36px]"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                          <span className="text-slate-600 dark:text-slate-300 font-medium">Copy Email</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Refined Location Panel */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/40 dark:bg-slate-900/60 border border-white/50 dark:border-slate-800/60 backdrop-blur-xl hover:border-brand-purple/15 dark:hover:border-brand-purple/30 hover:bg-white/70 dark:hover:bg-slate-900/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-250 ease-out group flex flex-col justify-between text-left min-h-[160px]">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-purple/5 dark:bg-brand-purple/10 text-brand-purple border border-brand-purple/10 dark:border-brand-purple/20 rounded-xl group-hover:scale-105 transition-transform duration-250 ease-out shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest block mb-0.5">
                        Operating Base
                      </span>
                      <span className="font-display font-bold text-brand-dark text-xs sm:text-sm leading-tight block whitespace-pre-line tracking-tight">
                        {personalInfo.location || 'India'}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-medium text-right self-end mt-4">
                    Available for Relocation
                  </div>
                </div>

                {/* Connected Social Networks Panel */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/40 dark:bg-slate-900/60 border border-white/50 dark:border-slate-800/60 backdrop-blur-xl hover:border-brand-purple/15 dark:hover:border-brand-purple/30 hover:bg-white/70 dark:hover:bg-slate-900/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-250 ease-out group flex flex-col justify-between text-left min-h-[160px]">
                  <div className="flex flex-col space-y-1">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest block">
                      Digital Networks
                    </span>
                    <div className="flex items-center space-x-2 pt-3">
                      {personalInfo.linkedin && (
                        <a
                          id="contact-network-linkedin-desktop"
                          href={personalInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/60 dark:bg-slate-800/60 border border-brand-border/60 dark:border-slate-700/60 hover:border-[#0077B5] dark:hover:border-[#3babeb] hover:bg-[#0077B5]/5 dark:hover:bg-[#0077B5]/10 text-[#0077B5] dark:text-[#3babeb] rounded-xl hover:scale-105 active:scale-95 transition-all duration-250 ease-out cursor-pointer shadow-3xs"
                          title="Connect on LinkedIn"
                        >
                          <Linkedin className="w-4.5 h-4.5 text-[#0077B5] dark:text-[#3babeb]" />
                        </a>
                      )}
                      {personalInfo.instagram && (
                        <a
                          id="contact-network-instagram-desktop"
                          href={personalInfo.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/60 dark:bg-slate-800/60 border border-brand-border/60 dark:border-slate-700/60 hover:border-[#E1306C] dark:hover:border-[#f25287] hover:bg-[#E1306C]/5 dark:hover:bg-[#E1306C]/10 text-[#E1306C] dark:text-[#f25287] rounded-xl hover:scale-105 active:scale-95 transition-all duration-250 ease-out cursor-pointer shadow-3xs"
                          title="Follow on Instagram"
                        >
                          <Instagram className="w-4.5 h-4.5 text-[#E1306C] dark:text-[#f25287]" />
                        </a>
                      )}
                      {personalInfo.youtube && (
                        <a
                          id="contact-network-youtube-desktop"
                          href={personalInfo.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/60 dark:bg-slate-800/60 border border-brand-border/60 dark:border-slate-700/60 hover:border-[#FF0000] dark:hover:border-[#ff3b3b] hover:bg-[#FF0000]/5 dark:hover:bg-[#FF0000]/10 text-[#FF0000] dark:text-[#ff3b3b] rounded-xl hover:scale-105 active:scale-95 transition-all duration-250 ease-out cursor-pointer shadow-3xs"
                          title="Subscribe on YouTube"
                        >
                          <Youtube className="w-4.5 h-4.5 text-[#FF0000] dark:text-[#ff3b3b]" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-medium text-right self-end">
                    Active Online
                  </div>
                </div>

              </div>

              {/* Resume Button Centered Placement */}
              <div className="max-w-md mx-auto pt-2">
                <a
                  id="contact-action-resume-open-desktop"
                  href="https://drive.google.com/file/d/1UIh4_RUz_8qIwTOwZKDi8s0iwmFNu_UT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-brand-purple hover:bg-brand-purple-light text-white rounded-xl text-xs font-bold tracking-wide hover:scale-[1.02] hover:shadow-lg transition-all duration-250 ease-out active:scale-98 cursor-pointer shrink-0 min-h-[48px] uppercase tracking-wider"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Download Professional Resume</span>
                </a>
              </div>

              {/* Secondary CTA Accent */}
              <div className="pt-6 border-t border-slate-200/40 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-left mt-8">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-brand-dark tracking-tight flex items-center">
                    <Sparkles className="w-3.5 h-3.5 mr-1.5 text-brand-purple animate-pulse" />
                    Open for Opportunities & Consultations
                  </h4>
                  <p className="text-[11px] text-brand-paragraph leading-normal">
                    Response rate is typically within 12-24 hours. Let's arrange a video introduction.
                  </p>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center space-x-1.5 text-xs text-brand-purple hover:text-brand-purple-light font-bold transition-all duration-250 ease-out hover:scale-[1.02] active:scale-98 group"
                >
                  <span>Write a Direct Message</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-250 ease-out" />
                </a>
              </div>

            </motion.div>
          </div>

          {/* Mobile & Tablet Layout (<= 1024px) */}
          <div className="block lg:hidden max-w-xl mx-auto space-y-4 text-left">
            
            {/* 1. Email Card */}
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-xs space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-brand-purple/5 dark:bg-brand-purple/10 text-[#EA4335] dark:text-[#ff5e50] border border-brand-purple/10 dark:border-brand-purple/20 rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest block mb-0.5">
                    Professional Email
                  </span>
                  <span className="font-display font-bold text-brand-dark text-sm truncate block tracking-tight">
                    {personalInfo.email}
                  </span>
                </div>
              </div>
              <button
                id="contact-action-copy-email-mobile"
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center space-x-2 min-h-[44px] px-4 py-2.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium text-slate-700 dark:text-slate-200 active:scale-98 transition-all cursor-pointer shadow-3xs"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* 2. Location Card */}
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-xs flex items-center justify-between gap-3">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="p-2.5 bg-brand-purple/5 dark:bg-brand-purple/10 text-brand-purple border border-brand-purple/10 dark:border-brand-purple/20 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest block mb-0.5">
                    Operating Base
                  </span>
                  <span className="font-display font-bold text-brand-dark text-sm block tracking-tight truncate">
                    {personalInfo.location || 'India'}
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-bold text-brand-purple bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full shrink-0">
                Available for Relocation
              </span>
            </div>

            {/* 3. Social links in one horizontal row */}
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-xs space-y-3">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest block">
                Digital Networks
              </span>
              <div className="flex items-center space-x-3">
                {personalInfo.linkedin && (
                  <a
                    id="contact-network-linkedin-mobile"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-h-[48px] flex items-center justify-center space-x-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#0077B5] dark:text-[#3babeb] rounded-xl font-semibold text-xs active:scale-98 transition-all shadow-3xs"
                    title="Connect on LinkedIn"
                  >
                    <Linkedin className="w-4.5 h-4.5" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {personalInfo.instagram && (
                  <a
                    id="contact-network-instagram-mobile"
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-h-[48px] flex items-center justify-center space-x-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#E1306C] dark:text-[#f25287] rounded-xl font-semibold text-xs active:scale-98 transition-all shadow-3xs"
                    title="Follow on Instagram"
                  >
                    <Instagram className="w-4.5 h-4.5" />
                    <span>Instagram</span>
                  </a>
                )}
                {personalInfo.youtube && (
                  <a
                    id="contact-network-youtube-mobile"
                    href={personalInfo.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-h-[48px] flex items-center justify-center space-x-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#FF0000] dark:text-[#ff3b3b] rounded-xl font-semibold text-xs active:scale-98 transition-all shadow-3xs"
                    title="Subscribe on YouTube"
                  >
                    <Youtube className="w-4.5 h-4.5" />
                    <span>YouTube</span>
                  </a>
                )}
              </div>
            </div>

            {/* 4. Resume download button */}
            <a
              id="contact-action-resume-open-mobile"
              href="https://drive.google.com/file/d/1UIh4_RUz_8qIwTOwZKDi8s0iwmFNu_UT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-4 bg-brand-purple hover:bg-brand-purple-light text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-250 ease-out active:scale-98 cursor-pointer shrink-0 min-h-[48px] shadow-md"
            >
              <FileText className="w-4.5 h-4.5 mr-2" />
              <span>Download Professional Resume</span>
            </a>

            {/* 5. Opportunity message card */}
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-xs space-y-1.5">
              <h4 className="text-xs font-bold text-brand-dark tracking-tight flex items-center">
                <Sparkles className="w-4 h-4 mr-1.5 text-brand-purple animate-pulse" />
                Open for Opportunities & Consultations
              </h4>
              <p className="text-xs text-brand-paragraph leading-relaxed">
                Response rate is typically within 12-24 hours. Let's arrange a video introduction.
              </p>
            </div>

            {/* 6. Direct message button */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center space-x-2 w-full min-h-[48px] px-6 py-3.5 rounded-xl border border-brand-purple/30 bg-brand-purple/5 dark:bg-brand-purple/10 text-brand-purple dark:text-brand-purple-light font-bold text-xs uppercase tracking-wider hover:bg-brand-purple/10 active:scale-98 transition-all shadow-3xs"
            >
              <span>Write a Direct Message</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </motion.div>
    </section>
  );
}
