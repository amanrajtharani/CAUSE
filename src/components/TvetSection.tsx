import React, { useState } from 'react';
import { 
  GraduationCap, 
  Workflow, 
  Store, 
  Briefcase, 
  Users, 
  Building2, 
  Compass, 
  ArrowRight, 
  CheckCircle, 
  Lightbulb, 
  Share2, 
  TrendingUp, 
  Layers 
} from 'lucide-react';
import { TVET_STRATEGY } from '../data/causeData';

export const TvetSection: React.FC = () => {
  const [activeAudienceIndex, setActiveAudienceIndex] = useState(0);

  const currentAudience = TVET_STRATEGY.targetAudiences[activeAudienceIndex];

  return (
    <section id="tvet" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">
            <span>Methodology &amp; Sector Functioning</span>
            <span aria-hidden="true">·</span>
            <span>Non-Formal Education &amp; TVET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            TVET &amp; Skills Development Strategy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {TVET_STRATEGY.headline} — {TVET_STRATEGY.subheadline}. Our structured approach from community mobilization to enterprise startup and market absorption.
          </p>
        </div>

        {/* Narrative Box from PDF Page 24 */}
        <div className="bg-amber-50/40 border-l-4 border-amber-600 rounded-r-2xl p-6 sm:p-8 space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            TVET Strategic Mobilization Framework
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {TVET_STRATEGY.narrative}
          </p>
        </div>

        {/* 4 Target Audience Engagement Cycles (from PDF Pages 24-28) */}
        <div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
                Stakeholder Mobilization Cycles
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Four Target Audience Segments
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Explore the customized awareness, outreach, and engagement workflows for each target group.
            </p>
          </div>

          {/* Interactive Audience Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {TVET_STRATEGY.targetAudiences.map((aud, idx) => {
              const isSelected = activeAudienceIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveAudienceIndex(idx)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-950 text-white border-amber-500/60 shadow-md ring-2 ring-amber-500/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-amber-200'
                  }`}
                >
                  <div className={`text-[10px] font-mono uppercase tracking-wider mb-1 font-bold ${
                    isSelected ? 'text-amber-400' : 'text-amber-700'
                  }`}>
                    Segment 0{idx + 1}
                  </div>
                  <div className="text-xs sm:text-sm font-bold line-clamp-2">
                    {aud.segment}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Segment Display */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Target Segment Profile</span>
              <h4 className="text-xl font-bold text-slate-900 mt-1">{currentAudience.segment}</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 bg-white p-3.5 rounded-lg border border-slate-200">
                <strong>Audience Scope:</strong> {currentAudience.description}
              </p>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Continuous Engagement &amp; Verification Cycle:
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentAudience.cycleSteps.map((step, sidx) => (
                  <div 
                    key={sidx}
                    className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3.5 hover:border-amber-300 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {sidx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Functioning Constantly in TVET Sector (Verbatim from PDF Page 29) */}
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Operational Competence
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Functioning Constantly on TVET Sector
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Established institutes, technical outreach satellite centers, and market-linked curricula across rural Sindh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200">
            {TVET_STRATEGY.functioningSector.points.map((pt, pidx) => (
              <div 
                key={pidx}
                className="p-5 bg-slate-900/90 rounded-xl border border-slate-800 flex items-start gap-3 leading-relaxed hover:border-amber-500/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2"></div>
                <p>{pt}</p>
              </div>
            ))}
          </div>

          {/* Highlight Banner from Page 29 */}
          <div className="p-6 bg-amber-950/40 rounded-xl border border-amber-500/30 text-xs sm:text-sm text-amber-100 leading-relaxed font-medium">
            &ldquo;We have most competent Team, Master Trainers, Instructors, and Trade Experts also very strong Team for Enterprise Development, Market Linkages &amp; Development of Business Ideas and Great Network for Empowerment of Youth also a successful Mechanism of TVET sector&apos;s activities &amp; project implementation &amp; Rich Experience of Labor Market Survey.&rdquo;
          </div>
        </div>

        {/* Our Additionally Practices (Verbatim from PDF Page 30) */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              Holistic Implementation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Additionally Practices
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              The full 15-point standard operating practice applied across CAUSE technical and vocational institutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TVET_STRATEGY.additionalPractices.map((practice, idx) => (
              <div 
                key={idx}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:bg-white hover:border-amber-200 hover:shadow-sm transition-all flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {practice}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
