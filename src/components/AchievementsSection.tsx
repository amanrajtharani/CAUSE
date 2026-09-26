import React from 'react';
import { 
  Trophy, 
  Users, 
  Sparkles, 
  TrendingUp, 
  GraduationCap, 
  CheckCircle2, 
  Building2, 
  ShoppingBag, 
  HeartHandshake 
} from 'lucide-react';
import { KEY_STATISTICS } from '../data/causeData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">
            <span>Demonstrated Impact</span>
            <span aria-hidden="true">·</span>
            <span>Measurable Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Institutional Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Tangible results documented across training completion, community resilience, women&apos;s financial independence, and youth market linkages throughout Sindh.
          </p>
        </div>

        {/* 4 Pillars of Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. Training & Certification Achievements */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-amber-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Training &amp; Certification Achievements
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">4,406 Certified Graduates:</strong> Across 11 major completed interventions funded by ACTED, UK Aid, EU, WFP, SIF, Qatar Charity, and Government of Sindh.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">100% Completion Rate in WWC:</strong> All 200 enrolled women (100 in Kandhkot, 100 in Guddu) successfully graduated with certificates.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Standardized Curricula:</strong> All modules aligned and recognized by STEVTA, Trade Testing Board (TTB), and NAVTTC.</span>
              </li>
            </ul>
          </div>

          {/* 2. Women Empowerment Achievements */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-amber-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Women Empowerment Achievements
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Leave No Girl Behind (LNGB):</strong> Reached 800+ marginalized girls in Jacobabad and Kashmore with ALP literacy, numeracy, and vocational trades.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">E-Commerce &amp; Digital Marketing:</strong> Women artisans trained to sell handmade embroidery and crafts directly on platforms including Daraz, Shophive, Cybermart, Guruapp, and Chikoo.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Safe Satellite Learning:</strong> Established temporary TVET satellite centers directly within rural villages, overcoming transportation and cultural mobility barriers.</span>
              </li>
            </ul>
          </div>

          {/* 3. Youth Empowerment & Market Absorption */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-amber-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Youth Empowerment &amp; Market Absorption
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">BBSHRRDB Youth Skill Sets:</strong> Empowered 850 youth (aged 18–35 years) with marketable trades under the Act of Assembly Sindh 2013 across Kashmore, Umerkot, and Jamshoro.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">High-Demand Technical Trades:</strong> Imparted skills in Motorcycle Mechanics, Solar &amp; UPS Technician, Car Driving &amp; Digital Applications, and CIT.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Healthy Youth Lifestyle:</strong> Hosted division-level sports and bodybuilding competitions in partnership with Sindh &amp; Pakistan Bodybuilding Federation (PBBF/IFBB).</span>
              </li>
            </ul>
          </div>

          {/* 4. Enterprise Development & Community Resilience */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-amber-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Enterprise Development &amp; Community Impact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">40% Enterprise Startup Rate:</strong> Documented in flood-affected districts with Human Appeal, where 40% of 258 graduates established their own small workshops and businesses.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Post-Disaster Recovery:</strong> Implemented food security and livelihood programs in flood-devastated areas of Larkana (Dokri), Dadu, Jacobabad, and drought-hit Umerkot.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Preservation of Cultural Heritage:</strong> Revived traditional Sindhi handcrafts, Sindhi caps, rali making, and applique work while securing contemporary market buyers.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Quantified Footprint Bar */}
        <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-500/30 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold">Documented Milestone</div>
            <div className="text-xl sm:text-2xl font-bold">11 Successfully Executed Projects Across Sindh</div>
            <p className="text-xs text-slate-300">Covering Kashmore, Jacobabad, Larkana, Qambar Shahdadkot, Umerkot, Dadu, and Jamshoro.</p>
          </div>
          <div className="flex items-center gap-6 divide-x divide-slate-800 text-center shrink-0">
            <div className="px-3">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">4,406</div>
              <div className="text-[11px] text-amber-200/80 font-medium">Trainees Trained</div>
            </div>
            <div className="px-3">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">100%</div>
              <div className="text-[11px] text-slate-400 font-medium">Project Delivery</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
