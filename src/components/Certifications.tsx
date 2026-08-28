import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { certifications } from '../data/portfolioData';
import { 
  ShieldCheck, 
  ExternalLink, 
  GraduationCap, 
  Eye, 
  Search, 
  Filter, 
  Sparkles, 
  Award, 
  BookOpen, 
  Trophy, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import CertificationDetailModal from './CertificationDetailModal';
import { Certification } from '../types';

type CategoryFilter = 'all' | 'professional' | 'academic' | 'achievement';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [showAll, setShowAll] = useState<boolean>(false);

  // Filter certifications based on category and search query
  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory = 
        selectedCategory === 'all' || 
        cert.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const matchTitle = cert.title.toLowerCase().includes(query);
      const matchIssuer = cert.issuer.toLowerCase().includes(query);
      const matchYear = cert.year?.toString().includes(query) || cert.date?.toLowerCase().includes(query);
      const matchId = cert.credentialId?.toLowerCase().includes(query);
      const matchDesc = cert.description?.toLowerCase().includes(query);
      const matchSkills = cert.skills?.some(s => s.toLowerCase().includes(query));

      return matchTitle || matchIssuer || matchYear || matchId || matchDesc || matchSkills;
    });
  }, [selectedCategory, searchQuery]);

  // When viewing "all" category without a search filter, default to showing only the top 4 important certificates
  const isAllSectionLimited = selectedCategory === 'all' && !searchQuery.trim() && !showAll;
  const displayedCertifications = useMemo(() => {
    if (isAllSectionLimited) {
      return filteredCertifications.slice(0, 4);
    }
    return filteredCertifications;
  }, [filteredCertifications, isAllSectionLimited]);

  const hasMoreToView = selectedCategory === 'all' && !searchQuery.trim() && filteredCertifications.length > 4;
  const remainingCount = filteredCertifications.length - 4;

  const handleOpenCertificate = (cert: Certification) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  const handleImageError = (certId: string) => {
    setFailedImages((prev) => ({ ...prev, [certId]: true }));
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = {
      all: certifications.length,
      professional: certifications.filter(c => c.category === 'professional').length,
      academic: certifications.filter(c => c.category === 'academic').length,
      achievement: certifications.filter(c => c.category === 'achievement').length,
    };
    return counts;
  }, []);

  const categories: { key: CategoryFilter; label: string; icon: any }[] = [
    { key: 'all', label: 'All Key Credentials', icon: Award },
    { key: 'professional', label: 'Professional & Ad Strategy', icon: Sparkles },
    { key: 'academic', label: 'Academic & Research', icon: BookOpen },
    { key: 'achievement', label: 'Competitions & Awards', icon: Trophy },
  ];

  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-20 bg-transparent relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 matrix-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-8 md:mb-10 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-white/80 dark:bg-[#1A3636]/70 border border-[#40534C]/20 dark:border-[#D6BD98]/25 rounded-full text-[#1A3636] dark:text-[#D6BD98] text-xs font-semibold uppercase tracking-[0.24em] shadow-2xs backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#677D6A] dark:text-[#D6BD98]" />
            <span>VERIFIED CREDENTIALS & AWARDS ({certifications.length})</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-display font-bold text-brand-dark tracking-[-0.03em]">
            Certifications & Honors
          </h2>
          <div className="w-12 h-1 bg-[#1A3636] dark:bg-[#D6BD98] mx-auto rounded-full" />
          <p className="text-slate-700/85 dark:text-slate-300/85 text-[15px] sm:text-[17px] font-sans font-normal leading-relaxed max-w-[700px] mx-auto">
            Official accredited qualifications from Google, Coursera, AICTE ATAL Academy, Reliance Foundation, NISM, and Academic Paper Presentations.
          </p>
        </motion.div>

        {/* Filter & Search Bar */}
        <div className="mb-8 space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.key;
              const count = categoryCounts[cat.key];

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.key);
                  }}
                  className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A3636] dark:bg-[#D6BD98] text-white dark:text-[#1A3636] shadow-md shadow-[#1A3636]/20 scale-[1.02]'
                      : 'bg-white dark:bg-[#1A3636]/60 border border-[#40534C]/20 dark:border-[#D6BD98]/20 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1A3636]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 dark:bg-black/20 text-white dark:text-[#1A3636]' : 'bg-black/5 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              placeholder="Search by title, issuer (Google, AICTE, Reliance), skill, or ID..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-[#1A3636]/60 border border-[#40534C]/20 dark:border-[#D6BD98]/20 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1A3636]/30 dark:focus:ring-[#D6BD98]/30 focus:border-[#1A3636] dark:focus:border-[#D6BD98] transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-1 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Search result indicator if searching */}
          {searchQuery && (
            <div className="text-center text-xs text-slate-500 dark:text-slate-400">
              Found <span className="font-semibold text-[#1A3636] dark:text-[#D6BD98]">{filteredCertifications.length}</span> matching certificates for "<span className="text-slate-800 dark:text-slate-200">{searchQuery}</span>"
            </div>
          )}
        </div>

        {/* Certifications Grid */}
        {displayedCertifications.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl bg-white dark:bg-[#1A3636]/60 border border-[#40534C]/20 dark:border-[#D6BD98]/20">
            <Filter className="w-8 h-8 text-slate-400 mx-auto mb-3 opacity-60" />
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">No certificates match your query</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Try clearing your search term or selecting a different category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-1.5 rounded-lg bg-[#1A3636]/10 dark:bg-[#D6BD98]/10 text-[#1A3636] dark:text-[#D6BD98] text-xs font-semibold hover:bg-[#1A3636] hover:text-white dark:hover:bg-[#D6BD98] dark:hover:text-[#1A3636] transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 text-left">
              {displayedCertifications.map((cert) => {
                const hasImage = Boolean(cert.thumbnail && !failedImages[cert.id]);

                return (
                  <motion.div
                    id={`certification-card-${cert.id}`}
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => handleOpenCertificate(cert)}
                    className="rounded-2xl bg-white/90 dark:bg-[#1A3636]/50 border border-[#40534C]/15 dark:border-[#D6BD98]/20 hover:bg-white dark:hover:bg-[#1A3636]/80 hover:border-[#1A3636]/40 dark:hover:border-[#D6BD98]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group cursor-pointer relative backdrop-blur-md overflow-hidden"
                  >
                    {/* Card Image Thumbnail Header */}
                    <div className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-black/30 border-b border-[#40534C]/10 dark:border-[#D6BD98]/15 overflow-hidden flex items-center justify-center">
                      {hasImage ? (
                        <img
                          src={cert.thumbnail}
                          alt={`${cert.title} preview`}
                          referrerPolicy="no-referrer"
                          onError={() => handleImageError(cert.id)}
                          loading="lazy"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-linear-to-br from-[#1A3636]/5 to-[#D6BD98]/10 text-center">
                          <GraduationCap className="w-10 h-10 text-[#1A3636] dark:text-[#D6BD98] opacity-70 mb-2" />
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 line-clamp-1">{cert.issuer}</span>
                        </div>
                      )}

                      {/* Gradient Overlay & Category Badge */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                      
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#1A3636]/80 dark:bg-[#1A3636]/90 border border-white/20 backdrop-blur-md px-2 py-0.5 rounded-full shadow-xs">
                          {cert.categoryLabel || cert.category || 'Credential'}
                        </span>

                        <span className="flex items-center space-x-1 text-[10px] text-white font-bold bg-[#677D6A]/90 dark:bg-[#677D6A]/90 border border-white/20 backdrop-blur-md px-2 py-0.5 rounded-full shadow-xs">
                          <ShieldCheck className="w-3 h-3 text-[#D6BD98]" />
                          <span>Verified</span>
                        </span>
                      </div>

                      {/* Hover Quick View Overlay Action */}
                      <div className="absolute inset-0 bg-[#1A3636]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#D6BD98] text-[#1A3636] text-xs font-bold shadow-md inline-flex items-center space-x-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Document</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-[#A8B8AE]">
                          <span className="truncate max-w-[180px]">{cert.issuer}</span>
                          {cert.year && (
                            <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300">
                              {cert.year}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base tracking-tight leading-snug group-hover:text-[#1A3636] dark:group-hover:text-[#D6BD98] transition-colors duration-200 line-clamp-2">
                          {cert.title}
                        </h3>

                        {cert.description && (
                          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed font-normal">
                            {cert.description}
                          </p>
                        )}
                      </div>

                      {/* Skills pills */}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {cert.skills.slice(0, 3).map((skill, idx) => (
                            <span 
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-[#1A3636]/5 dark:bg-[#D6BD98]/10 text-[#1A3636] dark:text-[#D6BD98] font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-slate-500 font-medium">
                              +{cert.skills.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Action Footer */}
                      <div className="border-t border-[#40534C]/10 dark:border-[#D6BD98]/15 pt-3 mt-2 flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenCertificate(cert);
                          }}
                          className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-[#1A3636]/10 dark:bg-[#D6BD98]/15 text-[#1A3636] dark:text-[#D6BD98] group-hover:bg-[#1A3636] group-hover:text-white dark:group-hover:bg-[#D6BD98] dark:group-hover:text-[#1A3636] text-xs font-bold transition-all duration-200 cursor-pointer shadow-2xs"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Certificate</span>
                        </button>

                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-xl bg-slate-100 dark:bg-black/20 text-slate-500 hover:text-[#1A3636] dark:hover:text-[#D6BD98] transition-colors"
                            title="Verify on issuer portal"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* "View More" / "Show Less" Expand Action */}
            {hasMoreToView && (
              <motion.div 
                className="mt-10 flex flex-col items-center justify-center space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  id="certifications-view-more-btn"
                  type="button"
                  onClick={() => setShowAll((prev) => !prev)}
                  className="group inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl bg-[#1A3636] dark:bg-[#D6BD98] text-white dark:text-[#1A3636] font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#1A3636]/20 dark:shadow-[#D6BD98]/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <span>
                    {showAll 
                      ? 'Show Less (Top 4 Featured)' 
                      : `View More Certificates (+${remainingCount} More)`}
                  </span>
                  {showAll ? (
                    <ChevronUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
                  ) : (
                    <ChevronDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" />
                  )}
                </button>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {showAll ? 'Showing all verified credentials & research presentations' : `Showing 4 of ${filteredCertifications.length} verified credentials`}
                </p>
              </motion.div>
            )}
          </>
        )}

      </div>

      {/* Certification Detail & Document Modal */}
      <CertificationDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        certification={selectedCert}
      />
    </section>
  );
}
