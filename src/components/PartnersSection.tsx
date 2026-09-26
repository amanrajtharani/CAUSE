import React, { useState, useMemo } from 'react';
import { Handshake, Search, Globe, Building2, BookOpen, HeartHandshake } from 'lucide-react';
import { PARTNERS_LIST, PartnerItem } from '../data/causeData';

export const PartnersSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'all',
    'International & Bilateral',
    'Government & Statutory',
    'Technical & Academic',
    'Civil Society & Private'
  ];

  const filteredPartners = useMemo(() => {
    return PARTNERS_LIST.filter(p => {
      const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="partners" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">
            <span>Institutional Alliances &amp; Donors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Partners &amp; Working Relations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            All bilateral agencies, United Nations programs, government bodies, technical institutions, and civil society networks associated with CAUSE Development Organization.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-slate-950 shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? `All Partners (${PARTNERS_LIST.length})` : cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search partner organization..."
              className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 text-slate-800"
            />
          </div>

        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPartners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  {partner.category === 'International & Bilateral' && <Globe className="w-4 h-4" />}
                  {partner.category === 'Government & Statutory' && <Building2 className="w-4 h-4" />}
                  {partner.category === 'Technical & Academic' && <BookOpen className="w-4 h-4" />}
                  {partner.category === 'Civil Society & Private' && <HeartHandshake className="w-4 h-4" />}
                </div>
                <span className="text-[10px] font-mono text-slate-400">#{idx + 1}</span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {partner.name}
                </h4>
                <div className="text-[11px] text-amber-700 font-semibold mt-1">
                  {partner.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 text-slate-500 text-sm">
            No partner found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}

      </div>
    </section>
  );
};
