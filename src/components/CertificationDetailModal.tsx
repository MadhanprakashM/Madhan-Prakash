import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  Calendar, 
  Copy, 
  Check, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Maximize2, 
  Minimize2, 
  FileText, 
  Download, 
  Sparkles,
  Share2,
  CheckCircle2,
  Building2,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import { Certification } from '../types';
import { personalInfo } from '../data/portfolioData';

interface CertificationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  certification: Certification | null;
}

export default function CertificationDetailModal({
  isOpen,
  onClose,
  certification
}: CertificationDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'details'>('preview');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Reset controls when a new certificate is loaded or opened
  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
      setRotation(0);
      setIsFullscreen(false);
      setCopiedId(false);
      setCopiedLink(false);
      setImageError(false);
      setActiveTab('preview');
    }
  }, [isOpen, certification?.id]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else if (isOpen) {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isFullscreen, onClose]);

  if (!isOpen || !certification) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);
  const handleResetView = () => {
    setZoomLevel(1);
    setRotation(0);
  };

  const handleCopyCredentialId = () => {
    if (certification.credentialId) {
      navigator.clipboard.writeText(certification.credentialId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleCopyShareLink = () => {
    const shareUrl = certification.link || window.location.href;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownloadImageOrFile = () => {
    const url = certification.certificateUrl || certification.thumbnail;
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = `${certification.title.replace(/[^a-zA-Z0-9]/g, '_')}_Certificate`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (certification.link) {
      window.open(certification.link, '_blank');
    } else {
      window.print();
    }
  };

  const isPdf = certification.fileType === 'pdf' || 
                Boolean(certification.certificateUrl && certification.certificateUrl.toLowerCase().endsWith('.pdf'));

  const imageUrl = certification.certificateUrl || certification.thumbnail;

  return (
    <AnimatePresence>
      <div 
        id="cert-modal-overlay" 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
        onClick={(e) => {
          if ((e.target as HTMLElement).id === 'cert-modal-overlay') {
            onClose();
          }
        }}
      >
        <motion.div
          id="cert-modal-window"
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full ${
            isFullscreen ? 'max-w-[98vw] h-[95vh]' : 'max-w-5xl max-h-[92vh]'
          } bg-white dark:bg-[#1A3636] rounded-2xl md:rounded-3xl border border-slate-200 dark:border-[#40534C] shadow-2xl flex flex-col overflow-hidden transition-all duration-300`}
        >
          {/* Header Bar */}
          <div className="px-5 py-4 border-b border-slate-100 dark:border-[#40534C]/40 flex items-center justify-between bg-slate-50/80 dark:bg-[#1A3636]/90 backdrop-blur-sm shrink-0">
            <div className="flex items-center space-x-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#1A3636]/10 dark:bg-[#D6BD98]/10 text-[#1A3636] dark:text-[#D6BD98] border border-[#1A3636]/20 dark:border-[#D6BD98]/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A3636] dark:text-[#D6BD98] bg-[#1A3636]/10 dark:bg-[#D6BD98]/15 px-2 py-0.5 rounded-full">
                    {certification.categoryLabel || 'Verified Credential'}
                  </span>
                  <span className="hidden sm:inline-flex items-center text-[10px] font-semibold text-[#677D6A] dark:text-[#D6BD98] bg-[#677D6A]/10 dark:bg-[#677D6A]/20 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    Official Certificate
                  </span>
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate max-w-md md:max-w-xl">
                  {certification.title}
                </h3>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
              {/* Fullscreen Toggle */}
              <button
                id="cert-modal-fullscreen-btn"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 text-slate-500 dark:text-slate-300 hover:text-[#1A3636] dark:hover:text-[#D6BD98] hover:bg-slate-100 dark:hover:bg-[#40534C]/40 rounded-xl transition-colors hidden md:inline-flex cursor-pointer"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Preview'}
                aria-label="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Share/Copy link button */}
              <button
                id="cert-modal-share-btn"
                onClick={handleCopyShareLink}
                className="p-2 text-slate-500 dark:text-slate-300 hover:text-[#1A3636] dark:hover:text-[#D6BD98] hover:bg-slate-100 dark:hover:bg-[#40534C]/40 rounded-xl transition-colors relative cursor-pointer"
                title="Copy Credential Share Link"
                aria-label="Copy Link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
              </button>

              {/* Close Button */}
              <button
                id="cert-modal-close-btn"
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#40534C]/40 rounded-xl transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tab Switcher (Visible on Mobile/Tablet) */}
          <div className="flex md:hidden border-b border-slate-100 dark:border-[#40534C]/40 bg-slate-50/50 dark:bg-[#1A3636]/50 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex-1 py-2.5 text-center border-b-2 transition-colors ${
                activeTab === 'preview'
                  ? 'border-[#1A3636] dark:border-[#D6BD98] text-[#1A3636] dark:text-[#D6BD98] bg-white dark:bg-[#40534C]/30'
                  : 'border-transparent text-slate-500 dark:text-slate-400'
              }`}
            >
              Certificate Document
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`flex-1 py-2.5 text-center border-b-2 transition-colors ${
                activeTab === 'details'
                  ? 'border-[#1A3636] dark:border-[#D6BD98] text-[#1A3636] dark:text-[#D6BD98] bg-white dark:bg-[#40534C]/30'
                  : 'border-transparent text-slate-500 dark:text-slate-400'
              }`}
            >
              Credential Info & Skills
            </button>
          </div>

          {/* Main Modal Body */}
          <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-[#40534C]/40">
            
            {/* Left Preview Column (Document & Image / PDF Viewer) */}
            <div className={`md:col-span-7 lg:col-span-8 flex flex-col bg-slate-900/[0.03] dark:bg-black/30 p-4 sm:p-6 ${
              activeTab === 'details' ? 'hidden md:flex' : 'flex'
            }`}>
              
              {/* Document Toolbar Controls */}
              <div className="flex items-center justify-between mb-3 bg-white dark:bg-[#1A3636]/80 border border-slate-200/80 dark:border-[#40534C]/40 px-3.5 py-2 rounded-xl shadow-2xs">
                <div className="flex items-center space-x-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center text-[#1A3636] dark:text-[#D6BD98] font-semibold">
                    {isPdf ? <FileText className="w-3.5 h-3.5 mr-1" /> : <ImageIcon className="w-3.5 h-3.5 mr-1" />}
                    {isPdf ? 'PDF Document' : 'Official Certificate Document'}
                  </span>
                  <span>•</span>
                  <span>{Math.round(zoomLevel * 100)}%</span>
                </div>

                {/* Zoom and Rotation Control Buttons */}
                <div className="flex items-center space-x-1">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.5}
                    className="p-1.5 text-slate-500 dark:text-slate-300 hover:text-[#1A3636] dark:hover:text-[#D6BD98] disabled:opacity-30 rounded hover:bg-slate-100 dark:hover:bg-[#40534C]/40 transition-colors cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 2.5}
                    className="p-1.5 text-slate-500 dark:text-slate-300 hover:text-[#1A3636] dark:hover:text-[#D6BD98] disabled:opacity-30 rounded hover:bg-slate-100 dark:hover:bg-[#40534C]/40 transition-colors cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleRotate}
                    className="p-1.5 text-slate-500 dark:text-slate-300 hover:text-[#1A3636] dark:hover:text-[#D6BD98] rounded hover:bg-slate-100 dark:hover:bg-[#40534C]/40 transition-colors cursor-pointer"
                    title="Rotate 90°"
                  >
                    <RotateCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetView}
                    className="px-2 py-1 text-[10px] font-bold text-slate-500 dark:text-slate-300 hover:text-[#1A3636] dark:hover:text-[#D6BD98] hover:bg-slate-100 dark:hover:bg-[#40534C]/40 rounded transition-colors cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Viewport Canvas Frame */}
              <div 
                ref={previewContainerRef}
                className="flex-1 min-h-[340px] sm:min-h-[440px] rounded-2xl border border-slate-200/80 dark:border-[#40534C]/40 bg-slate-100 dark:bg-black/50 overflow-auto flex items-center justify-center p-4 relative"
              >
                {/* Background matrix pattern */}
                <div className="absolute inset-0 matrix-grid-pattern opacity-30 pointer-events-none" />

                {/* Main Interactive Certificate Renderer */}
                <div 
                  className="transition-transform duration-200 ease-out origin-center select-none"
                  style={{
                    transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                  }}
                >
                  {/* If an image URL exists and hasn't errored */}
                  {imageUrl && !isPdf && !imageError ? (
                    <img
                      src={imageUrl}
                      alt={`${certification.title} Certificate`}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="max-w-full max-h-[520px] object-contain rounded-lg shadow-2xl border border-slate-300 dark:border-[#40534C] bg-white"
                    />
                  ) : isPdf && certification.certificateUrl ? (
                    /* PDF Embedded or Fallback Card */
                    <div className="w-[340px] sm:w-[480px] bg-white dark:bg-[#1A3636] rounded-xl shadow-xl border border-slate-300 dark:border-[#40534C] overflow-hidden text-center p-6 space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#710014]/10 border border-[#710014]/20 text-[#710014] dark:text-[#D6BD98] flex items-center justify-center mx-auto">
                        <FileText className="w-8 h-8" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">{certification.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-300">Official PDF Document • Issued by {certification.issuer}</p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-black/20 rounded-lg text-xs text-slate-600 dark:text-slate-300 font-mono">
                        Credential ID: {certification.credentialId || 'Verified Record'}
                      </div>
                      <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                        <a
                          href={certification.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#1A3636] dark:bg-[#D6BD98] text-white dark:text-[#1A3636] rounded-xl text-xs font-bold shadow-xs hover:bg-[#40534C] transition-colors"
                        >
                          <span>Open Full PDF</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* High-Fidelity Official Digital Plaque / Certificate Mockup */
                    <div className="w-[320px] sm:w-[460px] md:w-[520px] aspect-[1.414/1] bg-linear-to-br from-[#F2F1ED] via-white to-slate-50 dark:from-[#1A3636] dark:via-[#1A3636] dark:to-[#40534C]/40 rounded-xl shadow-2xl border-4 border-double border-[#D6BD98]/80 dark:border-[#D6BD98]/40 p-5 sm:p-7 flex flex-col justify-between relative text-slate-800 dark:text-slate-100">
                      
                      {/* Guilloche Corner Accents */}
                      <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#D6BD98]" />
                      <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#D6BD98]" />
                      <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#D6BD98]" />
                      <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#D6BD98]" />

                      {/* Plaque Header */}
                      <div className="text-center space-y-1">
                        <div className="flex items-center justify-center space-x-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B38F6F] dark:text-[#D6BD98]">
                          <Sparkles className="w-3 h-3" />
                          <span>Official Certificate of Completion</span>
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <h4 className="font-serif italic text-lg sm:text-xl text-slate-900 dark:text-white font-bold tracking-tight">
                          {certification.issuer}
                        </h4>
                      </div>

                      {/* Recipient & Award Subject */}
                      <div className="text-center my-auto space-y-1.5 sm:space-y-2">
                        <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-sans">
                          This is to formally certify that
                        </p>
                        <h3 className="font-display font-extrabold text-base sm:text-xl text-[#1A3636] dark:text-[#D6BD98] tracking-tight underline decoration-[#D6BD98]/60 underline-offset-4">
                          {certification.issuedTo || personalInfo.name}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-sans">
                          has successfully met all examination and competency requirements for
                        </p>
                        <p className="font-display font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 px-3">
                          {certification.title}
                        </p>
                      </div>

                      {/* Plaque Footer & Verified Seal */}
                      <div className="flex items-end justify-between pt-3 border-t border-slate-200 dark:border-[#40534C]/40 text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400">
                        <div>
                          <p className="font-semibold">Issued: {certification.date || certification.year || '2024'}</p>
                          <p className="font-mono text-[9px] text-slate-500">ID: {certification.credentialId || 'VERIFIED-01'}</p>
                        </div>

                        {/* Seal Stamp */}
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#D6BD98] bg-[#D6BD98]/10 flex items-center justify-center text-[#B38F6F] dark:text-[#D6BD98] shrink-0">
                          <ShieldCheck className="w-6 h-6" />
                        </div>

                        <div className="text-right">
                          <p className="font-serif italic font-bold">Verified Digital</p>
                          <p className="text-[9px] text-[#677D6A] dark:text-[#D6BD98] font-semibold flex items-center justify-end">
                            <CheckCircle2 className="w-2.5 h-2.5 mr-1" />
                            Authentic
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* View hints */}
              <div className="mt-2 text-center text-[11px] text-slate-400 dark:text-slate-400">
                Use controls above to zoom, rotate, or switch to fullscreen view.
              </div>
            </div>

            {/* Right Information & Skills Column */}
            <div className={`md:col-span-5 lg:col-span-4 p-5 sm:p-6 flex flex-col justify-between space-y-6 ${
              activeTab === 'preview' ? 'hidden md:flex' : 'flex'
            }`}>
              
              <div className="space-y-5">
                {/* Meta details list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                    Credential Overview
                  </h4>

                  {/* Issuer Card */}
                  <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200/80 dark:border-[#40534C]/40">
                    <div className="w-8 h-8 rounded-lg bg-[#1A3636]/10 dark:bg-[#D6BD98]/10 text-[#1A3636] dark:text-[#D6BD98] flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Issuing Organization</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{certification.issuer}</p>
                    </div>
                  </div>

                  {/* Date & Validity */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200/80 dark:border-[#40534C]/40">
                      <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 mb-1">
                        <Calendar className="w-3.5 h-3.5 text-[#1A3636] dark:text-[#D6BD98]" />
                        <span className="text-[11px] font-medium">Issue Date</span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{certification.date || certification.year || 'Completed 2024'}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200/80 dark:border-[#40534C]/40">
                      <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#677D6A] dark:text-[#D6BD98]" />
                        <span className="text-[11px] font-medium">Status</span>
                      </div>
                      <p className="text-xs font-bold text-[#677D6A] dark:text-[#D6BD98]">Verified & Active</p>
                    </div>
                  </div>

                  {/* Credential ID with Copy */}
                  {certification.credentialId && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200/80 dark:border-[#40534C]/40">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Credential ID</span>
                        <button
                          onClick={handleCopyCredentialId}
                          className="text-[10px] text-[#1A3636] dark:text-[#D6BD98] hover:underline flex items-center font-bold cursor-pointer"
                        >
                          {copiedId ? (
                            <span className="text-emerald-500 flex items-center"><Check className="w-3 h-3 mr-0.5" /> Copied</span>
                          ) : (
                            <span className="flex items-center"><Copy className="w-3 h-3 mr-0.5" /> Copy ID</span>
                          )}
                        </button>
                      </div>
                      <p className="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100 break-all bg-white dark:bg-[#1A3636] px-2 py-1 rounded border border-slate-200/60 dark:border-[#40534C]/40">
                        {certification.credentialId}
                      </p>
                    </div>
                  )}
                </div>

                {/* Course/Certificate Description */}
                {certification.description && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                      Certification Focus
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50/50 dark:bg-black/20 p-3 rounded-xl border border-slate-200/60 dark:border-[#40534C]/40">
                      {certification.description}
                    </p>
                  </div>
                )}

                {/* Skills Covered */}
                {certification.skills && certification.skills.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                      Skills & Competencies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {certification.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-[#1A3636]/5 dark:bg-[#D6BD98]/10 border border-[#1A3636]/15 dark:border-[#D6BD98]/20 text-[#1A3636] dark:text-[#D6BD98] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Primary Call to Action buttons */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-[#40534C]/40">
                {/* Download / Print button */}
                <button
                  onClick={handleDownloadImageOrFile}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 bg-[#1A3636] hover:bg-[#40534C] dark:bg-[#D6BD98] dark:hover:bg-[#B38F6F] text-white dark:text-[#1A3636] rounded-xl text-xs font-bold shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Download className="w-4 h-4 mr-1" />
                  <span>Download Certificate Image</span>
                </button>

                {certification.link && (
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-slate-100 dark:bg-[#40534C]/40 hover:bg-slate-200 dark:hover:bg-[#40534C] text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>Verify on Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={handleCopyCredentialId}
                    disabled={!certification.credentialId}
                    className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-slate-100 dark:bg-[#40534C]/40 hover:bg-slate-200 dark:hover:bg-[#40534C] text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold transition-colors disabled:opacity-40 cursor-pointer"
                  >
                    {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId ? 'Copied' : 'Copy ID'}</span>
                  </button>

                  <button
                    onClick={handleCopyShareLink}
                    className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-slate-100 dark:bg-[#40534C]/40 hover:bg-slate-200 dark:hover:bg-[#40534C] text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>Share</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
