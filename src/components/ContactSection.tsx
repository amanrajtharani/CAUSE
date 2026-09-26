import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Building, 
  UserCheck 
} from 'lucide-react';
import { ORGANIZATION_INFO } from '../data/causeData';
import { CauseLogo } from './CauseLogo';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">
            <span>Official Communications &amp; Locations</span>
            <span aria-hidden="true">·</span>
            <span>Contact Information</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Details
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Official contact details, verified telephone lines, email address, and campus locations of CAUSE Development Organization &amp; Institute Network in District Kashmore and across Sindh.
          </p>
        </div>

        {/* 2-Column Institutional Contact Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels & Campuses (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Communication Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Official Email Detail */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 shadow-sm hover:border-amber-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Official Email Address
                </div>
                <div className="font-mono text-base font-bold text-slate-900 select-all break-all">
                  {ORGANIZATION_INFO.contacts.emails[0]}
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  For formal inquiries, correspondence, and institutional proposals.
                </p>
              </div>

              {/* Status / Administrative Info */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 shadow-sm hover:border-amber-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Operational Jurisdiction
                </div>
                <div className="text-base font-bold text-slate-900">
                  Sindh, Pakistan
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  Kashmore, Jacobabad, Larkana, Qambar Shahdadkot, Umerkot, Dadu, Jamshoro.
                </p>
              </div>

            </div>

            {/* Telephone & Mobile Lines Display */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm hover:border-amber-200 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    Official Contact &amp; Mobile Numbers
                  </h3>
                  <p className="text-xs text-slate-500">
                    Direct phone lines for administration, operations, and programs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {ORGANIZATION_INFO.contacts.phones.map((phone, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-xs hover:border-amber-300 transition-colors"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Contact Line 0{idx + 1}
                    </span>
                    <div className="font-mono text-sm sm:text-base font-bold text-slate-900 select-all">
                      {phone}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Physical Locations Display */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-700" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Official Campuses &amp; Office Locations
                </h3>
              </div>
              
              <div className="space-y-3">
                {ORGANIZATION_INFO.contacts.addresses.map((addr, idx) => (
                  <div 
                    key={idx}
                    className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3.5 shadow-sm hover:border-amber-200 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Building className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase text-amber-800 tracking-wider">
                          {addr.type}
                        </span>
                        {idx === 0 && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                            Principal Office
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium select-all">
                        {addr.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Institutional Proforma & Leadership Register (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Complete Official Proforma Card (from Page 3 of the PDF) */}
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/80 text-white p-6 sm:p-8 rounded-2xl border border-amber-500/30 space-y-6 shadow-xl">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Official Proforma Register
                  </span>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Documented from PDF Page #2
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold">
                  Verified
                </span>
              </div>

              {/* Visual Logo Badge */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <CauseLogo size="md" variant="dark" showText={true} />
              </div>

              {/* Data Rows */}
              <div className="space-y-3.5 text-xs">
                
                <div className="border-b border-white/10 pb-2.5">
                  <span className="text-slate-400 text-[11px] block">Organization Name:</span>
                  <span className="font-bold text-white text-sm select-all">CAUSE DEVELOPMENT ORGANIZATION</span>
                </div>

                <div className="border-b border-white/10 pb-2.5">
                  <span className="text-slate-400 text-[11px] block">Institute Network:</span>
                  <span className="font-medium text-slate-200 select-all">
                    CAUSE The Institute of Skills Development &amp; Enterprise Enhancement
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 border-b border-white/10 pb-2.5">
                  <div>
                    <span className="text-slate-400 text-[11px] block">Established In:</span>
                    <span className="font-mono font-bold text-amber-400 text-sm">2013</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Legal Status:</span>
                    <span className="font-medium text-white">Registered NGO / NPO</span>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-2.5 space-y-1">
                  <span className="text-slate-400 text-[11px] block">Board of Directors &amp; Leadership:</span>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-start gap-2">
                      <UserCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">Mr. Riaz Ahmed Magsi</span>
                        <span className="text-slate-400 text-[11px]"> (President)</span>
                        <div className="text-[10px] text-slate-400 font-mono">MA Sociology, LLB</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 pt-1">
                      <UserCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">Mr. Khawar Khan Khilji</span>
                        <span className="text-slate-400 text-[11px]"> (CEO-CAUSE)</span>
                        <div className="text-[10px] text-slate-400 font-mono">MA Sociology</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-slate-400 text-[11px] block">Statutory Registrations:</span>
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">
                        <strong className="text-white">Social Welfare:</strong> F.DO/SW/KKot/2013/88 (06-02-2013)
                      </span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">
                        <strong className="text-white">SECP:</strong> Corporate ID 0277301
                      </span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">
                        <strong className="text-white">STEVTA:</strong> REG-04(09/537)/2024/809
                      </span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">
                        <strong className="text-white">TTB Sindh:</strong> Codes P-1295-22 &amp; P-1420-23
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
