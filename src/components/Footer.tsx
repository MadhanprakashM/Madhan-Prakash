import React from 'react';
import { ChevronUp, Linkedin, Mail, Phone, Sparkles, Instagram, Youtube } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="bg-transparent text-brand-paragraph dark:text-slate-400 py-8 border-t border-[#40534C]/15 dark:border-[#D6BD98]/15 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Navigation Anchor Links for Internal SEO Equity */}
        <div className="py-6 border-b border-[#40534C]/10 dark:border-[#D6BD98]/10">
          <nav aria-label="Footer Quick Navigation" className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-600 dark:text-[#A8B8AE]">
            <a href="#home" className="hover:text-[#1A3636] dark:hover:text-[#D6BD98] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#1A3636] dark:hover:text-[#D6BD98] transition-colors">About Me</a>
            <a href="#brand" className="hover:text-[#1A3636] dark:hover:text-[#D6BD98] transition-colors">MBA Journey</a>
            <a href="#academic" className="hover:text-[#1A3636] dark:hover:text-[#D6BD98] transition-colors">Academic Profile</a>
            <a href="#experience" className="hover:text-[#1A3636] dark:hover:text-[#D6BD98] transition-colors">Work Experience</a>
            <a href="#skills" className="hover:text-[#1A3636] dark:hover:text-[#D6BD98] transition-colors">Marketing Skills</a>
            <a href="#certifications" className="hover:text-[#1A3636] dark:hover:text-[#D6BD98] transition-colors">Certifications</a>
            <a href="#research" className="hover:text-[#1A3636] dark:hover:text-[#D6BD98] transition-colors">Research Papers</a>
            <a href="#testimonials" className="hover:text-[#1A3636] dark:hover:text-[#D6BD98] transition-colors">Endorsements</a>
            <a href="#contact" className="hover:text-[#1A3636] dark:hover:text-[#D6BD98] transition-colors">Contact</a>
          </nav>
        </div>

        {/* Layout Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-b border-[#40534C]/10 dark:border-[#D6BD98]/10">
          
          {/* Logo and Tag */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center space-x-2.5">
              {personalInfo.avatarUrl ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt="M. Madhan Prakash - MBA Digital Marketing Specialist"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-lg object-cover border border-[#40534C]/20 dark:border-[#D6BD98]/20"
                />
              ) : (
                <div className="w-7 h-7 rounded-lg bg-[#1A3636] dark:bg-[#D6BD98] flex items-center justify-center text-white dark:text-[#1A3636] font-display font-bold text-xs">
                  M
                </div>
              )}
              <span className="font-display font-bold text-brand-dark dark:text-slate-100 tracking-tight text-sm">
                M. Madhan Prakash
              </span>
            </div>
            <p className="text-[11px] text-brand-paragraph dark:text-[#A8B8AE] leading-relaxed max-w-xs font-normal">
              MBA Marketing Student, Digital Marketer, B2B Lead Generation & Business Analytics Specialist.
            </p>
          </div>
 
          {/* Social Channels Link Row */}
          <div className="flex items-center space-x-3.5">
            <a
              id="footer-social-link-linkedin"
              href={personalInfo.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              className="min-w-[48px] min-h-[48px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:p-2.5 bg-white/60 dark:bg-[#1A3636]/40 border border-[#40534C]/15 dark:border-[#D6BD98]/20 hover:border-[#0077B5] dark:hover:border-[#3babeb] hover:bg-[#0077B5]/5 dark:hover:bg-[#0077B5]/10 rounded-xl text-[#0077B5] dark:text-[#3babeb] hover:scale-105 active:scale-95 transition-all duration-250 ease-out focus:outline-none shadow-3xs"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-[#0077B5] dark:text-[#3babeb]" />
            </a>
            {personalInfo.instagram && (
              <a
                id="footer-social-link-instagram"
                href={personalInfo.instagram}
                target="_blank"
                referrerPolicy="no-referrer"
                className="min-w-[48px] min-h-[48px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:p-2.5 bg-white/60 dark:bg-[#1A3636]/40 border border-[#40534C]/15 dark:border-[#D6BD98]/20 hover:border-[#E1306C] dark:hover:border-[#f25287] hover:bg-[#E1306C]/5 dark:hover:bg-[#E1306C]/10 rounded-xl text-[#E1306C] dark:text-[#f25287] hover:scale-105 active:scale-95 transition-all duration-250 ease-out focus:outline-none shadow-3xs"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4 text-[#E1306C] dark:text-[#f25287]" />
              </a>
            )}
            {personalInfo.youtube && (
              <a
                id="footer-social-link-youtube"
                href={personalInfo.youtube}
                target="_blank"
                referrerPolicy="no-referrer"
                className="min-w-[48px] min-h-[48px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:p-2.5 bg-white/60 dark:bg-[#1A3636]/40 border border-[#40534C]/15 dark:border-[#D6BD98]/20 hover:border-[#FF0000] dark:hover:border-[#ff3b3b] hover:bg-[#FF0000]/5 dark:hover:bg-[#FF0000]/10 rounded-xl text-[#FF0000] dark:text-[#ff3b3b] hover:scale-105 active:scale-95 transition-all duration-250 ease-out focus:outline-none shadow-3xs"
                aria-label="View YouTube Channel"
              >
                <Youtube className="w-4 h-4 text-[#FF0000] dark:text-[#ff3b3b]" />
              </a>
            )}
            <a
              id="footer-social-link-email"
              href={`mailto:${personalInfo.email}`}
              className="min-w-[48px] min-h-[48px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:p-2.5 bg-white/60 dark:bg-[#1A3636]/40 border border-[#40534C]/15 dark:border-[#D6BD98]/20 hover:border-[#710014] dark:hover:border-[#D6BD98] hover:bg-[#710014]/5 dark:hover:bg-[#710014]/10 rounded-xl text-[#710014] dark:text-[#D6BD98] hover:scale-105 active:scale-95 transition-all duration-250 ease-out focus:outline-none shadow-3xs"
              aria-label="Email directly"
            >
              <Mail className="w-4 h-4 text-[#710014] dark:text-[#D6BD98]" />
            </a>
            {personalInfo.phone && (
              <a
                id="footer-social-link-phone"
                href={`tel:${personalInfo.phone}`}
                className="min-w-[48px] min-h-[48px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:p-2.5 bg-white/60 dark:bg-[#1A3636]/40 border border-[#40534C]/15 dark:border-[#D6BD98]/20 hover:border-[#677D6A] dark:hover:border-[#677D6A] hover:bg-[#677D6A]/5 dark:hover:bg-[#677D6A]/10 rounded-xl text-[#677D6A] dark:text-[#677D6A] hover:scale-105 active:scale-95 transition-all duration-250 ease-out focus:outline-none shadow-3xs"
                aria-label="Call directly"
              >
                <Phone className="w-4 h-4" />
              </a>
            )}
          </div>
 
          {/* Back to Top */}
          <button
            id="footer-btn-scroll-top"
            onClick={handleScrollToTop}
            className="inline-flex items-center justify-center px-4 py-2.5 bg-white/60 dark:bg-[#1A3636]/40 border border-[#40534C]/15 dark:border-[#D6BD98]/20 hover:border-[#1A3636] dark:hover:border-[#D6BD98] hover:bg-white dark:hover:bg-[#1A3636]/80 hover:text-[#1A3636] dark:hover:text-[#D6BD98] rounded-xl text-xs font-semibold tracking-wide hover:scale-105 active:scale-95 transition-all duration-250 ease-out cursor-pointer shadow-3xs text-brand-paragraph dark:text-[#A8B8AE] min-h-[48px]"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4 text-[#1A3636] dark:text-[#D6BD98] animate-bounce" />
          </button>
        </div>
 
        {/* Bottom Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 text-[11px] font-semibold text-slate-400 dark:text-slate-500 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} M. Madhan Prakash. All rights reserved.</p>
          <p className="flex items-center justify-center space-x-1">
            <span>Crafted with</span>
            <Sparkles className="w-3.5 h-3.5 text-[#677D6A] dark:text-[#D6BD98] animate-pulse" />
            <span>in India • Strategic Marketing Excellence</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
