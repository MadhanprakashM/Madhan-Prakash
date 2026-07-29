import React from 'react';
import { Compass, MoveLeft, Home, MessageSquare } from 'lucide-react';

interface NotFoundProps {
  onBackToHome: () => void;
}

export default function NotFound({ onBackToHome }: NotFoundProps) {
  return (
    <div 
      id="not-found-screen"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 sm:p-6 font-sans transition-colors duration-300"
    >
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      <div 
        id="not-found-card"
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-2xl p-8 sm:p-12 text-center space-y-6"
      >
        {/* Animated Icon Container */}
        <div className="mx-auto w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center text-blue-900 dark:text-blue-400">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        {/* 404 Heading */}
        <div className="space-y-2">
          <div className="inline-block py-1 px-3 bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase rounded-full w-fit">
            Error 404
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-none">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
            The campaign route or resource directory you tried to access does not exist or has migrated to a different sector.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            id="not-found-home-btn"
            onClick={onBackToHome}
            className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-blue-900 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-all shadow-sm focus:outline-none"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </button>

          <a
            id="not-found-contact-btn"
            href="#contact"
            onClick={() => {
              onBackToHome();
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-white hover:bg-slate-50 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 font-bold rounded-xl text-xs transition-all shadow-xs focus:outline-none"
          >
            <MessageSquare className="w-4 h-4 mr-2 text-orange-500" />
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
