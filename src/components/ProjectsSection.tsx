import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  Search, 
  Users, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  ChevronRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { PROJECTS_DATA, DETAILED_CASE_STUDIES, ProjectItem } from '../data/causeData';

export const ProjectsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<'all' | 'NFE & TVET' | 'TVET' | 'IT and Marketing'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string>('lngb');

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((proj) => {
      const matchesSector = selectedSector === 'all' || proj.sector.includes(selectedSector);
      const query = searchTerm.toLowerCase();
      const matchesSearch = 
        proj.project.toLowerCase().includes(query) ||
        proj.partner.toLowerCase().includes(query) ||
        proj.location.toLowerCase().includes(query) ||
        proj.trades.some(t => t.toLowerCase().includes(query)) ||
        proj.year.includes(query);
      return matchesSector && matchesSearch;
    });
  }, [searchTerm, selectedSector]);

  const totalFilteredTrainees = useMemo(() => {
    return filteredProjects.reduce((acc, curr) => acc + curr.trainees, 0);
  }, [filteredProjects]);

  const activeCase = DETAILED_CASE_STUDIES.find(c => c.id === selectedCaseStudy) || DETAILED_CASE_STUDIES[0];

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">
              <span>Field Experience &amp; Interventions</span>
              <span aria-hidden="true">·</span>
              <span>11 Completed Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Experience &amp; Projects Portfolio
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Comprehensive record of all technical, vocational, and non-formal education programs delivered in partnership with international donors, UN agencies, and government departments.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm shrink-0">
            <Users className="w-5 h-5 text-amber-600" />
            <div className="text-xs">
              <span className="text-slate-500 block">Total Certified Trainees</span>
              <span className="text-lg font-mono font-bold text-slate-900 tabular-nums">4,406</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar (Interactive Buttons) */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Sector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
            <button
              onClick={() => setSelectedSector('all')}
              className={`px-3.5 py-2 rounded-lg font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedSector === 'all'
                  ? 'bg-amber-600 text-slate-950 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Sectors ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setSelectedSector('NFE & TVET')}
              className={`px-3.5 py-2 rounded-lg font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedSector === 'NFE & TVET'
                  ? 'bg-amber-600 text-slate-950 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              NFE &amp; TVET
            </button>
            <button
              onClick={() => setSelectedSector('TVET')}
              className={`px-3.5 py-2 rounded-lg font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedSector === 'TVET'
                  ? 'bg-amber-600 text-slate-950 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              TVET
            </button>
            <button
              onClick={() => setSelectedSector('IT and Marketing')}
              className={`px-3.5 py-2 rounded-lg font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedSector === 'IT and Marketing'
                  ? 'bg-amber-600 text-slate-950 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              IT &amp; Marketing
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by trade, donor, or location..."
              className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50 text-slate-800"
            />
          </div>

        </div>

        {/* Master Projects Table (Exact details from PDF Pages 9 & 10) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Official Projects Register (Sr# 1 – 11)
              </h3>
              <p className="text-xs text-slate-500">
                Showing {filteredProjects.length} of {PROJECTS_DATA.length} projects · {totalFilteredTrainees.toLocaleString()} trainees represented
              </p>
            </div>
            <div className="text-xs text-emerald-700 font-semibold font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Status: 100% Successfully Completed</span>
            </div>
          </div>

          {/* Mobile Card List (< md) */}
          <div className="block md:hidden divide-y divide-slate-200">
            {filteredProjects.map((p) => (
              <div key={p.sr} className="p-4 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                    Sr# {p.sr} · {p.year}
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{p.remarks}</span>
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">{p.partner}</div>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5 leading-snug">{p.project}</h4>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{p.location}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Sector: {p.sector}</span>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Trades &amp; Training Areas</div>
                  <div className="flex flex-wrap gap-1">
                    {p.trades.map((trade, tidx) => (
                      <span key={tidx} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                        {trade}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Trainees Certified:</span>
                  <span className="font-mono font-bold text-base text-slate-900">{p.trainees.toLocaleString()} Students</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table (>= md) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-semibold uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-3 sm:px-4 w-12 text-center">Sr#</th>
                  <th className="py-3 px-4">Partner / Donor</th>
                  <th className="py-3 px-4">Project Title &amp; Description</th>
                  <th className="py-3 px-3">Year</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Trades &amp; Training Areas</th>
                  <th className="py-3 px-4 text-right">Trainees</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredProjects.map((p) => (
                  <tr key={p.sr} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-3.5 px-3 sm:px-4 text-center font-bold text-slate-500 font-mono">
                      {p.sr}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900 whitespace-nowrap sm:whitespace-normal max-w-[200px]">
                      {p.partner}
                    </td>
                    <td className="py-3.5 px-4 max-w-[320px]">
                      <div className="font-medium text-slate-900">{p.project}</div>
                      <div className="text-[11px] text-amber-700 mt-0.5 font-medium">Sector: {p.sector}</div>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-slate-600 whitespace-nowrap">
                      {p.year}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{p.location}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1 text-[11px] text-slate-600">
                        {p.trades.map((trade, tidx) => (
                          <span key={tidx} className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                            {trade}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900 tabular-nums">
                      {p.trainees.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>{p.remarks}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Case Studies Deep-Dive (from PDF Pages 11-23) */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-700 mb-1">
              <span>In-Depth Project Documentation</span>
              <span aria-hidden="true">·</span>
              <span>Extracted from PDF</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Featured Program Case Studies
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Detailed implementation methodologies, theory of change, and results for flagship multi-sectoral projects.
            </p>
          </div>

          {/* Case Study Selection Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
            {DETAILED_CASE_STUDIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCaseStudy(c.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCaseStudy === c.id
                    ? 'bg-slate-950 text-amber-400 border border-amber-500/40 shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {c.id === 'lngb' && 'Leave No Girls Behind (LNGB)'}
                {c.id === 'wwc' && 'Women Welfare Centers (200 Trainees)'}
                {c.id === 'human-appeal' && 'Flood-Affected Skills (Human Appeal)'}
                {c.id === 'sif-larkana' && 'Dokri Larkana Recovery (SIF & WFP)'}
                {c.id === 'qatar-charity' && 'Long Term Resilience (Qatar Charity)'}
              </button>
            ))}
          </div>

          {/* Active Case Study Detail View */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-amber-700">Project Spotlight</span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">{activeCase.title}</h4>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                  <span><strong>Partners:</strong> {activeCase.partners}</span>
                  {activeCase.locations && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span><strong>Location:</strong> {activeCase.locations}</span>
                    </>
                  )}
                  {activeCase.location && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span><strong>Location:</strong> {activeCase.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Case Study Specific Details */}
            {activeCase.id === 'lngb' && (
              <div className="space-y-6 text-sm text-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Target Beneficiaries</div>
                    <div className="text-sm font-semibold text-slate-900 mt-1">1,000 Girls in Jacobabad &amp; Kashmore</div>
                    <div className="text-xs text-slate-600 mt-1">
                      Ages 10-13 (ALP with life skills) &amp; Ages 14-19 (Literacy, numeracy &amp; livelihoods)
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Training Duration</div>
                    <div className="text-sm font-semibold text-slate-900 mt-1">3 Months Intensive</div>
                    <div className="text-xs text-slate-600 mt-1">
                      2.5 months technical classroom training + 15 days internship program
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Delivery Model</div>
                    <div className="text-sm font-semibold text-slate-900 mt-1">Temporary Satellite TVET Centres</div>
                    <div className="text-xs text-slate-600 mt-1">
                      Setup directly in rural communities for secure access
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-bold text-slate-900">Three Underpinning Outcomes:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeCase.threeOutcomes?.map((outcome, oidx) => (
                      <div key={oidx} className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/60 text-xs">
                        <span className="font-bold text-amber-900 block mb-0.5">Outcome {oidx + 1}</span>
                        <span className="text-slate-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-bold text-slate-900">Theory of Change &amp; Market Linkage:</h5>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                    {activeCase.theoryOfChange}
                  </p>
                  <p className="text-xs text-slate-600 pt-1">
                    {activeCase.placementAndLinkage}
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-slate-900 mb-2">Trades Offered (5 Tracks):</h5>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.trades?.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-md text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeCase.id === 'wwc' && (
              <div className="space-y-6 text-sm text-slate-700">
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
                  <div className="text-xs font-bold text-amber-900 uppercase">Primary Goal</div>
                  <p className="text-sm text-slate-800 mt-1">{activeCase.primaryGoal}</p>
                  <div className="text-xs text-amber-800 font-semibold mt-2">
                    Under the supervision of worthy Deputy Commissioner Kashmore@Kandhkot
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-slate-900">Documented Achievements &amp; Impacts:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeCase.achievementsOverview?.map((ach, aidx) => (
                      <div key={aidx} className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-slate-900 mb-2">Trades Taught:</h5>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.trades?.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-800 border border-slate-200 rounded-md text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeCase.id === 'human-appeal' && (
              <div className="space-y-6 text-sm text-slate-700">
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-800">Key Impact Highlight</div>
                  <div className="text-base font-bold mt-1">40% Enterprise Launch Rate</div>
                  <p className="text-xs text-amber-950 mt-1">
                    {activeCase.highlightResult}
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-slate-900">Four Trade Training Components:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeCase.tradesCovered?.map((tc, tcidx) => (
                      <div key={tcidx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                        <div className="font-bold text-sm text-slate-900">{tc.name}</div>
                        <p className="text-xs text-slate-600 leading-relaxed">{tc.curriculum}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeCase.id === 'sif-larkana' && (
              <div className="space-y-6 text-sm text-slate-700">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-500 uppercase">Demand-Led Methodology</div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1">
                    {activeCase.integratedModel}
                  </p>
                </div>

                <div className="space-y-2">
                  <h5 className="font-bold text-slate-900">Key Project Components &amp; Deliverables:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCase.keyComponents?.map((kc, kidx) => (
                      <div key={kidx} className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5"></div>
                        <span>{kc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-slate-900 mb-2">Demand-Driven Trades in Taluka Dokri:</h5>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.trades?.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-md text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeCase.id === 'qatar-charity' && (
              <div className="space-y-6 text-sm text-slate-700">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-500 uppercase">Methodology &amp; Strategy</div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeCase.methodology}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Two Main Centers</div>
                    <div className="text-sm font-semibold text-slate-900 mt-1">Jacobabad &amp; Qambar Shahdadkot</div>
                    <div className="text-xs text-slate-600 mt-1">Targeting 75 male and female beneficiaries</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase">Key Objectives</div>
                    <div className="text-sm font-semibold text-slate-900 mt-1">Disaster Risk Reduction &amp; Livelihoods</div>
                    <div className="text-xs text-slate-600 mt-1">Generously supported by WFP &amp; Norwegian MFA</div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-slate-900 mb-2">Curriculum Tracks:</h5>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.trades?.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-md text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
