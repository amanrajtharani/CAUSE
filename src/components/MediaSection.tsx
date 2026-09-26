import React from 'react';
import { Newspaper, Calendar, MapPin, User, CheckCircle2 } from 'lucide-react';
import { MEDIA_UPDATES } from '../data/causeData';

export const MediaSection: React.FC = () => {
  return (
    <section id="media" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">
            <span>Press Coverage &amp; Public Updates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Media Updates &amp; Publications
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Newspaper reports and media coverage documenting CAUSE&apos;s seminars, e-commerce workshops, certificate distributions, and youth engagement initiatives.
          </p>
        </div>

        {/* Media Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MEDIA_UPDATES.map((article, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-amber-300 hover:shadow-sm transition-all"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 border border-amber-200 px-2.5 py-1 rounded">
                    {article.publication}
                  </span>
                  {article.date && (
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.date}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {article.headline}
                </h3>

                {(article.reporter || article.location) && (
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    {article.reporter && (
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>{article.reporter}</span>
                      </span>
                    )}
                    {article.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{article.location}</span>
                      </span>
                    )}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {article.summary}
                </p>
              </div>

              {/* Highlights List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-900 block">Report Highlights:</span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {article.highlights.map((h, hidx) => (
                    <li key={hidx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
