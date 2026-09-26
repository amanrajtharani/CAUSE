import React, { useState } from 'react';
import { 
  FileCheck2, 
  Award, 
  CheckCircle, 
  Building, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  FileText,
  BadgeCheck
} from 'lucide-react';
import { REGISTRATIONS_DATA } from '../data/causeData';

export const RegistrationsSection: React.FC = () => {
  return (
    <section id="registrations" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">
            <span>Statutory Compliance &amp; Accreditations</span>
            <span aria-hidden="true">·</span>
            <span>Government of Pakistan &amp; Sindh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Registration &amp; Recognition
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            CAUSE Development Organization and Institute Network holds full legal standing under federal and provincial authorities, ensuring all certifications awarded to students are officially recognized.
          </p>
        </div>

        {/* 5 Statutory Registrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. Social Welfare Department Govt of Sindh */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-amber-300 transition-colors shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Provincial Government</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Social Welfare Department</h3>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-600 font-semibold">
                Est. 2013
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <div className="text-slate-500 text-xs">Registration Number:</div>
                <div className="font-mono font-bold text-slate-900">F.DO/SW/KKot/2013/88</div>
                <div className="text-slate-500 text-xs">Registration Date: 06-02-2013</div>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed">
                <strong>Statutory Act:</strong> Voluntary Social Welfare Agencies Registration and Control Ordinance 1961 (XLVI of 1961). Issued under hand and seal of the District Officer Social Welfare Kashmore @ Kandhkot.
              </div>
              <div className="text-xs text-slate-600">
                <strong>Registered Entity:</strong> CAUSE DEVELOPMENT ORGANIZATION (CAUSE The Institute of Skills Development).
              </div>
            </div>
          </div>

          {/* 2. Securities and Exchange Commission of Pakistan (SECP) */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-amber-300 transition-colors shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Federal Commission</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Securities &amp; Exchange Commission</h3>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-600 font-semibold">
                Dec 2024
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <div className="text-slate-500 text-xs">Corporate Unique Identification No:</div>
                <div className="font-mono font-bold text-slate-900">0277301</div>
                <div className="text-slate-500 text-xs">Incorporation Date: 04 December 2024 (Islamabad Head Office)</div>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed">
                <strong>Statutory Law:</strong> Under Section 16 of the Companies Act, 2017 (XIX of 2017). Company is Limited by shares.
              </div>
              <div className="text-xs text-slate-600">
                <strong>Incorporated Name:</strong> CAUSE THE INSTITUTE OF SKILLS DEVELOPMENT (PRIVATE) LIMITED.
              </div>
            </div>
          </div>

        </div>

        {/* 3. STEVTA Full Accreditation Certificate & Trades Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Govt of Sindh Regulatory Body</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Sindh Technical Education &amp; Vocational Training Authority (STEVTA)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Certificate of Registration S.No: 000138 · Registration No: STEVTA/HQ/A&amp;T/PMI&apos;S/REG-04(09/537)/2024/809
              </p>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold whitespace-nowrap self-start sm:self-center">
              Validity: 15 Oct 2024 – 14 Oct 2027 (3 Years)
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-700 space-y-2">
            <p>
              Awarded to: <strong className="text-slate-900">&ldquo;CAUSE THE INSTITUTE OF SKILLS DEVELOPMENT &amp; ENTERPRISE ENHANCEMENT&rdquo;</strong>, 2nd Floor Bismillah Market, DC Office Road Kandhkot for the following registered trades and intake quotas:
            </p>
          </div>

          {/* STEVTA 8 Registered Trades Table (from PDF Page 37) */}
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 w-12 text-center">S.#</th>
                  <th className="py-2.5 px-4">Technology / Trade</th>
                  <th className="py-2.5 px-4">Shift</th>
                  <th className="py-2.5 px-4">Duration</th>
                  <th className="py-2.5 px-4 text-right">Intake Capacity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {REGISTRATIONS_DATA.find(r => r.id === 'stevta')?.trades?.map((t, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/30">
                    <td className="py-2.5 px-3 text-center font-mono font-bold text-slate-500">{idx + 1}</td>
                    <td className="py-2.5 px-4 font-semibold text-slate-900">{t.name}</td>
                    <td className="py-2.5 px-4 text-slate-600">{t.shift}</td>
                    <td className="py-2.5 px-4 font-mono text-slate-600">{t.duration}</td>
                    <td className="py-2.5 px-4 text-right font-mono font-bold text-amber-900 tabular-nums">{t.intake} Students</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-[11px] text-slate-500 italic text-right">
            Signed by Additional Director (A&amp;T), STEVTA Government of Sindh
          </div>
        </div>

        {/* 4. Trade Testing Board (TTB) Sindh Dual Affiliations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* TTB Kandhkot Campus */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-4 shadow-sm hover:border-amber-200 transition-colors">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">TTB Sindh Affiliation #1</span>
                <h4 className="text-base font-bold text-slate-900">Kandhkot Campus (9 Vocational Qualifications)</h4>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">
                Code: P-1295-22
              </span>
            </div>

            <div className="text-xs text-slate-600 space-y-1">
              <div><strong>Institute:</strong> Cause the Institute of Skills Development &amp; Enterprise Enhancement</div>
              <div><strong>Premises:</strong> 2nd Floor Bismillah Market DC Office Road, Kandhkot</div>
              <div><strong>Statutory Authority:</strong> Section 5 National Training Ordinance 1980</div>
              <div><strong>Validity:</strong> Upto 31st Dec, 2024 (Serial # 2748)</div>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-700 mb-2">Approved Qualification Trades:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                {REGISTRATIONS_DATA.find(r => r.id === 'ttb-kandhkot')?.trades?.map((tr, idx) => (
                  <div key={idx} className="p-2 bg-white rounded border border-slate-200 flex justify-between items-center">
                    <span className="font-medium text-slate-800 truncate mr-1">{tr.name}</span>
                    <span className="text-[10px] font-mono text-slate-500 shrink-0">{tr.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TTB Guddu Branch */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-4 shadow-sm flex flex-col justify-between hover:border-amber-200 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">TTB Sindh Affiliation #2</span>
                  <h4 className="text-base font-bold text-slate-900">Guddu Branch (Vocational Programs)</h4>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">
                  Code: P-1420-23
                </span>
              </div>

              <div className="text-xs text-slate-600 space-y-1">
                <div><strong>Institute:</strong> CAUSE Development Organization</div>
                <div><strong>Premises:</strong> Main Bazar Barrage Road, Guddu District Kashmore</div>
                <div><strong>Statutory Authority:</strong> Section 5 National Training Ordinance 1980</div>
                <div><strong>Validity:</strong> Upto 31st Dec, 2024 (Serial # 2355)</div>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-700 mb-2">Approved Qualification Trades:</div>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  {REGISTRATIONS_DATA.find(r => r.id === 'ttb-guddu')?.trades?.map((tr, idx) => (
                    <div key={idx} className="p-2.5 bg-white rounded border border-slate-200 flex justify-between items-center">
                      <span className="font-semibold text-slate-800">{tr.name}</span>
                      <span className="text-xs font-mono text-slate-500">{tr.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. SDC Islamabad note */}
            <div className="mt-4 p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950">
              <div className="font-bold flex items-center gap-1.5 mb-1">
                <BadgeCheck className="w-4 h-4 text-amber-700" />
                <span>Skill Development Council Islamabad (SDC)</span>
              </div>
              <p className="text-slate-600 text-[11px]">
                Recognized working affiliation with SDC Islamabad for national competence-based skills development framework delivery.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
