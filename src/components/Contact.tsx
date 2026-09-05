import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Linkedin, 
  Youtube, 
  Instagram, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  ArrowUpRight, 
  Send,
  MessageCircle,
  Briefcase,
  Sparkles,
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onOpenResume?: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-28 relative bg-transparent scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A3636]/10 dark:bg-[#D6BD98]/10 border border-[#1A3636]/20 dark:border-[#D6BD98]/20 text-[#1A3636] dark:text-[#D6BD98] text-xs font-bold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5 mr-1" />
            <span>Direct Channels & Social Profiles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-dark tracking-tight leading-tight">
            Let's Connect & Collaborate
          </h2>

          <div className="w-16 h-1 bg-[#1A3636] dark:bg-[#D6BD98] mx-auto rounded-full" />

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Open to full-time MBA roles, B2B sales development, digital marketing campaigns, and business analytics opportunities. Reach out directly through any of my verified channels below.
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Direct Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="p-6 sm:p-7 rounded-[24px] bg-white/85 dark:bg-[#1A3636]/45 border border-[#40534C]/15 dark:border-[#D6BD98]/20 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-[#1A3636]/40 dark:hover:border-[#D6BD98]/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#EA4335]/10 text-[#EA4335] dark:text-[#ff6b5d] flex items-center justify-center border border-[#EA4335]/20">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  Fastest Response
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-brand-dark">
                  Direct Email
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  For recruiter inquiries, interview schedules, and business proposals.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 text-xs font-mono font-medium text-slate-800 dark:text-slate-200 truncate">
                {personalInfo.email}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-5 mt-5 border-t border-[#40534C]/10 dark:border-[#D6BD98]/10">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-[#1A3636] hover:bg-[#40534C] dark:bg-[#D6BD98] dark:hover:bg-[#B38F6F] text-[#F2F1ED] dark:text-[#161616] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl border border-[#40534C]/20 dark:border-[#D6BD98]/20 hover:border-[#1A3636] dark:hover:border-[#D6BD98] bg-white/70 dark:bg-[#1A3636]/40 text-slate-700 dark:text-slate-200 transition-all cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy Email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Card 2: LinkedIn Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="p-6 sm:p-7 rounded-[24px] bg-white/85 dark:bg-[#1A3636]/45 border border-[#40534C]/15 dark:border-[#D6BD98]/20 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-[#0077B5]/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#0077B5]/10 text-[#0077B5] dark:text-[#3babeb] flex items-center justify-center border border-[#0077B5]/20">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-[#0077B5] dark:text-[#3babeb] border border-blue-500/20">
                  Professional Network
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-brand-dark">
                  LinkedIn Profile
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Connect for professional updates, campaign case studies, and recommendations.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 text-xs font-mono font-medium text-slate-800 dark:text-slate-200 truncate">
                in/madhanprakashofficial
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#40534C]/10 dark:border-[#D6BD98]/10">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#0077B5] hover:bg-[#005c8d] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <span>View LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: YouTube Channel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="p-6 sm:p-7 rounded-[24px] bg-white/85 dark:bg-[#1A3636]/45 border border-[#40534C]/15 dark:border-[#D6BD98]/20 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-[#FF0000]/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FF0000]/10 text-[#FF0000] dark:text-[#ff4f4f] flex items-center justify-center border border-[#FF0000]/20">
                  <Youtube className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20">
                  93.5K+ Views
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-brand-dark">
                  YouTube Channel
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Classic Tamil (@classictamilofficial) — 48 gaming & tutorial videos produced.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 text-xs font-mono font-medium text-slate-800 dark:text-slate-200 truncate">
                @classictamilofficial
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#40534C]/10 dark:border-[#D6BD98]/10">
              <a
                href={personalInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#FF0000] hover:bg-[#d90000] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <span>Visit Channel</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 4: Instagram Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="p-6 sm:p-7 rounded-[24px] bg-white/85 dark:bg-[#1A3636]/45 border border-[#40534C]/15 dark:border-[#D6BD98]/20 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-[#E1306C]/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#E1306C]/10 text-[#E1306C] dark:text-[#ff5990] flex items-center justify-center border border-[#E1306C]/20">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-pink-500/10 text-pink-700 dark:text-pink-400 border border-pink-500/20">
                  Visual Media
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-brand-dark">
                  Instagram
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Creative marketing reels, live campaign content, and community updates.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 text-xs font-mono font-medium text-slate-800 dark:text-slate-200 truncate">
                @madhanprakash_5
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#40534C]/10 dark:border-[#D6BD98]/10">
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 5: Location & Mobility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.25 }}
            className="p-6 sm:p-7 rounded-[24px] bg-white/85 dark:bg-[#1A3636]/45 border border-[#40534C]/15 dark:border-[#D6BD98]/20 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-[#1A3636]/40 dark:hover:border-[#D6BD98]/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#40534C]/10 dark:bg-[#D6BD98]/15 text-[#1A3636] dark:text-[#D6BD98] flex items-center justify-center border border-[#40534C]/20 dark:border-[#D6BD98]/25">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  Open to Relocate
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-brand-dark">
                  Location & Availability
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Based in Tamil Nadu; open to on-site roles in Bangalore, Chennai, Hyderabad, Mumbai, or remote.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 text-xs font-medium text-slate-800 dark:text-slate-200">
                Sivakasi / Coimbatore, Tamil Nadu, India
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#40534C]/10 dark:border-[#D6BD98]/10">
              <div className="w-full py-2.5 px-3 rounded-xl bg-[#1A3636]/5 dark:bg-[#D6BD98]/5 border border-[#40534C]/10 dark:border-[#D6BD98]/15 text-[11px] font-semibold text-center text-brand-dark">
                ✓ Full-Time Availability for 2026 / 2027
              </div>
            </div>
          </motion.div>

          {/* Card 6: Resume & Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.3 }}
            className="p-6 sm:p-7 rounded-[24px] bg-white/85 dark:bg-[#1A3636]/45 border border-[#40534C]/15 dark:border-[#D6BD98]/20 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-[#1A3636]/40 dark:hover:border-[#D6BD98]/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#1A3636]/10 dark:bg-[#D6BD98]/15 text-[#1A3636] dark:text-[#D6BD98] flex items-center justify-center border border-[#1A3636]/20 dark:border-[#D6BD98]/25">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                  Verified Dossier
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-brand-dark">
                  Resume & Credentials
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Review complete academic transcripts, Google & HubSpot certifications, and live campaign records.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 text-xs font-mono font-medium text-slate-800 dark:text-slate-200 truncate">
                M_Madhan_Prakash_Resume.pdf
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#40534C]/10 dark:border-[#D6BD98]/10 flex items-center gap-2">
              <a
                href="https://drive.google.com/file/d/1hKQAfnb-ZlASN2FDcwzqt2wyeOMAqoIZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-[#1A3636] hover:bg-[#40534C] dark:bg-[#D6BD98] dark:hover:bg-[#B38F6F] text-[#F2F1ED] dark:text-[#161616] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <span>Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="px-3.5 py-2.5 rounded-xl border border-[#40534C]/20 dark:border-[#D6BD98]/20 hover:border-[#1A3636] dark:hover:border-[#D6BD98] bg-white/70 dark:bg-[#1A3636]/40 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Preview
                </button>
              )}
            </div>
          </motion.div>

        </div>

        {/* Recruiter Quick Status Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-white/60 dark:bg-[#1A3636]/30 border border-[#40534C]/15 dark:border-[#D6BD98]/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <h4 className="font-display font-bold text-sm text-brand-dark">
                Immediate Recruiter Availability
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Inquiries typically receive a response within 12–24 business hours.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${personalInfo.email}?subject=Interview%20Opportunity%20-%20MBA%20Marketing`}
            className="px-5 py-2.5 bg-[#1A3636] hover:bg-[#40534C] dark:bg-[#D6BD98] dark:hover:bg-[#B38F6F] text-[#F2F1ED] dark:text-[#161616] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm shrink-0 inline-flex items-center cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 mr-1.5" />
            <span>Send Direct Message</span>
          </a>
        </div>

      </div>
    </section>
  );
}
