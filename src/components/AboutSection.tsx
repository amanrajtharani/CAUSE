import React from 'react';
import { Target, Compass, Award, Shield, HeartHandshake, Users, Scale, Sparkles, Building, UserCheck } from 'lucide-react';
import { 
  ORGANIZATION_INFO, 
  VISION_TEXT, 
  MISSION_TEXT, 
  GOALS_AND_OBJECTIVES, 
  CORE_VALUES,
  INTRODUCTION_TEXT 
} from '../data/causeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">
            <span>Organizational Profile</span>
            <span aria-hidden="true">·</span>
            <span>Since 2013</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About CAUSE Development Organization
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            CAUSE The Institute of Skills Development &amp; Enterprise Enhancement is dedicated to the social, technical, and economic advancement of vulnerable rural populations across Sindh, Pakistan.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/80 text-white rounded-2xl p-8 relative overflow-hidden shadow-sm flex flex-col justify-between border border-amber-500/25">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                <Compass className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Our Guiding Horizon
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                VISION
              </h3>
              <p className="text-base sm:text-lg text-slate-100 font-serif italic leading-relaxed border-l-2 border-amber-400 pl-4 py-1">
                &ldquo;{VISION_TEXT}&rdquo;
              </p>
            </div>
            <div className="text-xs text-amber-300/80 pt-6 mt-6 border-t border-white/10">
              Community Action for Unity &amp; Social Empowerment
            </div>
          </div>

          {/* Mission */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800">
                <Target className="w-6 h-6 text-amber-700" />
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                Our Core Purpose
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                MISSION
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-serif italic border-l-2 border-amber-600 pl-4 py-1">
                &ldquo;{MISSION_TEXT}&rdquo;
              </p>
            </div>
            <div className="text-xs text-slate-500 pt-6 mt-6 border-t border-slate-200">
              Technical, vocational, and participatory empowerment across rural Sindh
            </div>
          </div>

        </div>

        {/* Full Organizational Introduction Text (Verbatim from PDF Page 8) */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <Building className="w-6 h-6 text-amber-700" />
            <div>
              <h3 className="text-xl font-bold text-slate-900">Introduction &amp; Institutional Mandate</h3>
              <p className="text-xs text-slate-500">Documented from the official Organization Profile</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 space-y-4 leading-relaxed">
            <p>
              The <strong className="text-slate-900">CAUSE Development Organization (CAUSE The Institute of Skills Development)</strong> was established in 2013, since then the organization has been expanding continuously in terms of social development service. It has worked for the promotion of sustainable, equitable and participatory development, social welfare and social justice through different social activities, Trainings, field action and through other social research, dissemination of socially relevant knowledge, social intervention through, contribution to social and welfare policy and program at area.
            </p>
            <p>
              Especially focused on <strong className="text-slate-900">Formal/Non Formal Education, Technical and Vocational Education and Trainings (TVET), Environment, Gender Development, Social, Cultural and Economic matters</strong>. Ranging from sustainable rural and urban development to education, and Human Rights, in all case, the focus has been on the disadvantaged and marginalized section of societies, such as women, children and tribal.
            </p>
            <p>
              Organization declare its work as <strong className="text-slate-900">&ldquo;Non-Governmental Organization / Non-Profit Organization&rdquo;</strong> and the organization registered, since the Eleven Years we are working in Different sectors specially focused Non Formal Education and Technical and Vocational Education and Trainings TVET is Education and Training which providing Knowledge and Skills for Employment.
            </p>
          </div>

          {/* Statutory Recognition List from Introduction */}
          <div className="pt-4 border-t border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
              Official Recognitions Earned with Statutory Bodies:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px]">1</span>
                <span className="text-slate-800 font-medium">Social Welfare Dept Govt of Sindh (Ordinance 1961)</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px]">2</span>
                <span className="text-slate-800 font-medium">Securities and Exchange Commission of Pakistan (SECP)</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px]">3</span>
                <span className="text-slate-800 font-medium">Technical Education &amp; Vocational Training Authority (STEVTA)</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px]">4</span>
                <span className="text-slate-800 font-medium">Trade Testing Board (TTB) Sindh</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs flex items-center gap-2 sm:col-span-2 lg:col-span-1">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px]">5</span>
                <span className="text-slate-800 font-medium">Skill Development Council Islamabad (SDC)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Goals & Objectives (All 8 from PDF pages 5 & 6) */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              Institutional Framework
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Goal &amp; Objectives
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              The 8 strategic pillars guiding CAUSE&apos;s programs, interventions, and community commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GOALS_AND_OBJECTIVES.map((goal) => (
              <div 
                key={goal.number}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-sm transition-all flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-bold text-sm shrink-0">
                  {goal.number}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">
                    {goal.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values (All 7 from PDF page 7) */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              Ethical Foundation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Core Values
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Guiding principles observed across all organizational initiatives, field teams, and stakeholder interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-amber-200 hover:shadow-sm transition-all space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100/90 text-amber-900 flex items-center justify-center text-xs font-bold">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-slate-900">{val.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Directors / Leadership (from PDF Page 3) */}
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-10 border border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Institutional Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Board of Directors
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Providing strategic oversight, governance, and institutional direction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ORGANIZATION_INFO.leadership.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 flex items-start gap-4 hover:border-amber-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">{leader.name}</h4>
                  <div className="text-xs font-semibold text-amber-400">{leader.title}</div>
                  <div className="text-xs text-slate-400 font-mono pt-1">
                    Academic Background: {leader.qualification}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
