import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { ORGANIZATION_INFO } from '../data/causeData';
import { CauseLogo } from './CauseLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t-2 border-amber-500/80 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <CauseLogo size="lg" variant="dark" showText={true} />

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm pt-1">
              &ldquo;{ORGANIZATION_INFO.tagline}&rdquo; — Registered Non-Governmental Organization / Non-Profit Organization operating continuously since 2013 across Sindh, Pakistan.
            </p>

            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div><strong className="text-slate-300">Social Welfare Reg:</strong> <span className="font-mono text-amber-300">F.DO/SW/KKot/2013/88</span></div>
              <div><strong className="text-slate-300">SECP Incorporation:</strong> <span className="font-mono text-amber-300">0277301</span></div>
              <div><strong className="text-slate-300">STEVTA Registration:</strong> <span className="font-mono text-amber-300">REG-04(09/537)/2024/809</span></div>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Institutional Sections
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home &amp; Profile Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About Us, Vision &amp; Objectives
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('experience')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Experience &amp; 11 Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('tvet')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  TVET Strategy &amp; Implementation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('achievements')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Institutional Achievements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('registrations')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Statutory Registrations (STEVTA, TTB, SECP)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('partners')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Donors &amp; Working Partners
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('gallery')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Field Activity Documentation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('media')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Press Coverage &amp; Media Updates
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Official Head Office
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {ORGANIZATION_INFO.contacts.addresses[0].address}
            </p>

            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-300 font-mono select-all">
                  {ORGANIZATION_INFO.contacts.emails[0]}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono text-slate-300 select-all">
                  {ORGANIZATION_INFO.contacts.phones[0]} / {ORGANIZATION_INFO.contacts.phones[1]}
                </span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2013–{new Date().getFullYear()} {ORGANIZATION_INFO.name}. All institutional information derived directly from the official organization profile.
          </div>
          <div className="flex items-center gap-3">
            <span>Kandhkot, Kashmore, Sindh, Pakistan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
