import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { ORGANIZATION_INFO } from '../data/causeData';
import { CauseLogo } from './CauseLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Projects' },
    { id: 'tvet', label: 'TVET' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'registrations', label: 'Registrations' },
    { id: 'partners', label: 'Partners' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'media', label: 'Media' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-200' 
        : 'bg-white border-b border-slate-200'
    }`}>
      {/* Top micro utility banner */}
      <div className="bg-slate-900 text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-3 text-slate-300 truncate">
            <span className="font-semibold text-amber-400 shrink-0">Govt Reg:</span>
            <span className="font-mono text-white truncate">F.DO/SW/KKot/2013/88</span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="hidden md:inline">SECP: <span className="font-mono text-white">0277301</span></span>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <span className="hidden lg:inline text-amber-300">STEVTA &amp; TTB Sindh Affiliated</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-slate-300">
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-amber-400 shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs select-all">{ORGANIZATION_INFO.contacts.emails[0]}</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-400 shrink-0" />
              <span className="font-mono text-xs select-all">{ORGANIZATION_INFO.contacts.phones[0]}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          
          {/* Zone 1: Brand title wordmark with responsive logo */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="text-left flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 shrink min-w-0 cursor-pointer"
            aria-label="CAUSE Development Organization Home"
          >
            <CauseLogo size="md" variant="light" showText={true} />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 2xl:gap-4 text-xs xl:text-sm font-semibold text-slate-600 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-1.5 px-2 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-amber-800 bg-amber-50 font-bold border-b-2 border-amber-600'
                      : 'hover:text-amber-800 hover:bg-amber-50/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action (Desktop) */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 text-xs font-extrabold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 text-slate-700 hover:text-amber-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-slate-100 text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-amber-50 text-amber-900 font-bold border border-amber-200'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-2.5 px-4 text-center text-xs sm:text-sm font-extrabold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm cursor-pointer"
            >
              Contact CAUSE Administration
            </button>
            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 pt-2 px-1 gap-1">
              <span>Tel: {ORGANIZATION_INFO.contacts.phones[0]}</span>
              <span className="font-mono">{ORGANIZATION_INFO.contacts.emails[0]}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
