/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TvetSection } from './components/TvetSection';
import { AchievementsSection } from './components/AchievementsSection';
import { RegistrationsSection } from './components/RegistrationsSection';
import { PartnersSection } from './components/PartnersSection';
import { GallerySection } from './components/GallerySection';
import { MediaSection } from './components/MediaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle section scrolling
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Observe scroll position to highlight active section
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'experience',
      'tvet',
      'achievements',
      'registrations',
      'partners',
      'gallery',
      'media',
      'contact'
    ];

    const handleScrollObserver = () => {
      const scrollPos = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (id === 'home' && window.scrollY < 200) {
          setActiveSection('home');
          break;
        }

        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Fixed/Sticky Top Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        <div id="home">
          <Hero onNavigate={handleNavigate} />
        </div>
        <AboutSection />
        <ProjectsSection />
        <TvetSection />
        <AchievementsSection />
        <RegistrationsSection />
        <PartnersSection />
        <GallerySection />
        <MediaSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
