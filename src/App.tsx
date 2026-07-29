import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PersonalBrand from './components/PersonalBrand';
import Academic from './components/Academic';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumePreviewModal from './components/ResumePreviewModal';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';
import PremiumBackground from './components/PremiumBackground';

export default function App() {
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [is404, setIs404] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Monitor location hash to support simulated 404 views
  useEffect(() => {
    const checkHash = () => {
      setIs404(window.location.hash === '#404');
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Set the correct page title and metadata
  useEffect(() => {
    document.title = 'M. Madhan Prakash | MBA Portfolio & Featured Work';
  }, []);

  // Set up Intersection Observer to track scroll positions and activate the correct sticky navigation tab
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'brand',
      'academic',
      'experience',
      'skills',
      'certifications',
      'achievements',
      'testimonials',
      'contact',
    ];

    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-80px 0px -50% 0px',
          threshold: 0.15,
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  return (
    <ErrorBoundary>
      {is404 ? (
        <NotFound
          onBackToHome={() => {
            window.location.hash = '';
            setIs404(false);
          }}
        />
      ) : (
        <div className="text-brand-dark min-h-screen relative font-sans antialiased selection:bg-brand-purple/15 selection:text-brand-dark overflow-x-hidden">
          {/* Layered luxury animated cinematic background */}
          <PremiumBackground />
          
          {/* Sticky responsive Navbar */}
          <Navbar
            activeSection={activeSection}
            onOpenResume={() => setShowResumeModal(true)}
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />

          {/* Page Sections */}
          <main id="portfolio-scroll-container" className="space-y-0">
            
            {/* 1. Hero / Home Section */}
            <Hero onOpenResumeModal={() => setShowResumeModal(true)} />

            {/* 2. About Me Section */}
            <About />

            {/* Personal Brand Section */}
            <PersonalBrand />

            {/* 3. Academic Profile Qualifications Section */}
            <Academic />

            {/* 4. Career Milestones timeline */}
            <Experience />

            {/* 5. Tool & Strategic Competencies Matrix */}
            <Skills />

            {/* 6. Academic & Vocational Credentials */}
            <Certifications />

            {/* 7. Research Publications & Leadership Stats */}
            <Achievements />

            {/* Testimonials Endorsements Section */}
            <Testimonials />

            {/* 8. Let's Build Something Meaningful Contact Form */}
            <Contact onOpenResume={() => setShowResumeModal(true)} />

          </main>

          {/* Elegant Recruiter Footer */}
          <Footer />

          {/* Interactive Resume Sheet Modal */}
          {showResumeModal && (
            <ResumePreviewModal onClose={() => setShowResumeModal(false)} />
          )}
          
        </div>
      )}
    </ErrorBoundary>
  );
}
