import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Building2, PhoneCall, Award } from 'lucide-react';
import { ORGANIZATION_INFO, KEY_STATISTICS } from '../data/causeData';
import { CauseLogo } from './CauseLogo';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Image with High-Contrast Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_cause_tvet_1790344847800.jpg"
          alt="CAUSE TVET and Vocational Skills Training in Sindh"
          className="w-full h-full object-cover object-center brightness-50"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-amber-950/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.18),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Narrative */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Prominent Official Brand Seal & Trust bar */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-slate-950/90 backdrop-blur-md p-2 sm:p-2.5 rounded-xl border border-amber-500/30 inline-flex items-center gap-2.5 sm:gap-3 max-w-full shadow-lg">
                <CauseLogo size="md" variant="dark" showText={false} />
                <div className="pr-1 sm:pr-2 min-w-0">
                  <div className="text-[10px] sm:text-[11px] font-bold text-amber-400 uppercase tracking-wider leading-tight">
                    Community Action for Unity &amp; Social Empowerment
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-slate-300 font-mono mt-0.5 truncate">
                    Reg: F.DO/SW/KKot/2013/88 · SECP: 0277301
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans text-balance">
                CAUSE <span className="text-amber-400">DEVELOPMENT</span> ORGANIZATION
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-amber-200/90 font-medium tracking-tight">
                CAUSE The Institute of Skills Development &amp; Enterprise Enhancement
              </p>
            </div>

            {/* Tagline & Motto */}
            <div className="border-l-4 border-amber-400 pl-3 sm:pl-4 py-1">
              <p className="text-xs sm:text-base italic text-amber-200 font-serif">
                &ldquo;{ORGANIZATION_INFO.tagline}&rdquo;
              </p>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1">
                Organization &amp; Institutes Network · Serving rural communities since 2013
              </p>
            </div>

            <p className="text-xs sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              Committed to basic human rights, capacity building, and empowering marginalized rural communities in Sindh. Providing market-driven Technical &amp; Vocational Education &amp; Training (TVET), Non-Formal Education, and enterprise linkages for sustainable livelihoods.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={() => onNavigate('experience')}
                className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-extrabold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>View Projects &amp; Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('tvet')}
                className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer text-center"
              >
                TVET Strategy &amp; Implementation
              </button>
              <button
                onClick={() => onNavigate('registrations')}
                className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-amber-200 hover:text-white border border-amber-400/40 hover:border-amber-400 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Registrations</span>
              </button>
            </div>

            {/* Micro Location badge */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-3 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Head Office: Kandhkot, District Kashmore, Sindh, Pakistan</span>
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>President: {ORGANIZATION_INFO.leadership[0].name} | CEO: {ORGANIZATION_INFO.leadership[1].name}</span>
              </span>
            </div>

          </div>

          {/* Quick Institutional Proforma Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-amber-500/30 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-400">Official Profile Summary</span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold">Est. 2013</span>
              </div>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex justify-between items-start border-b border-white/5 pb-2">
                  <span className="text-slate-400">Legal Status:</span>
                  <span className="font-medium text-right text-white">Registered NGO / NPO</span>
                </div>
                <div className="flex justify-between items-start border-b border-white/5 pb-2">
                  <span className="text-slate-400">Social Welfare Reg:</span>
                  <span className="font-mono text-right text-amber-300">F.DO/SW/KKot/2013/88</span>
                </div>
                <div className="flex justify-between items-start border-b border-white/5 pb-2">
                  <span className="text-slate-400">SECP Corp ID:</span>
                  <span className="font-mono text-right text-amber-300">0277301</span>
                </div>
                <div className="flex justify-between items-start border-b border-white/5 pb-2">
                  <span className="text-slate-400">STEVTA Reg:</span>
                  <span className="font-mono text-right text-amber-300">REG-04(09/537)/2024/809</span>
                </div>
                <div className="flex justify-between items-start border-b border-white/5 pb-2">
                  <span className="text-slate-400">Affiliations:</span>
                  <span className="font-medium text-right text-white">TTB Sindh &amp; SDC Islamabad</span>
                </div>
                <div className="flex justify-between items-start pb-1">
                  <span className="text-slate-400">Primary Focus:</span>
                  <span className="font-medium text-right text-white">NFE, TVET, Enterprise Linkages</span>
                </div>
              </div>

              <div className="bg-amber-950/40 rounded-xl p-3 border border-amber-500/25 text-xs">
                <p className="text-slate-300 text-center leading-relaxed">
                  Official partner for TVET programs with ACTED, UK Aid, European Union, SIF, Qatar Charity, and WFP.
                </p>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 px-4 bg-amber-500 text-slate-950 hover:bg-amber-400 font-extrabold text-xs rounded-lg transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-slate-950" />
                <span>Get in Touch with Administration</span>
              </button>
            </div>
          </div>

        </div>

        {/* Quantified Statistics Grid (Derived Strictly from PDF Project Table & Content) */}
        <div className="mt-14 pt-10 border-t border-slate-800">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-400/90 font-semibold">
              Verified Program Metrics &amp; Institutional Footprint
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {KEY_STATISTICS.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-xl p-4 text-center hover:border-amber-500/50 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
