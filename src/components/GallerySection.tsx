import React, { useState } from 'react';
import { 
  Sun, 
  Wrench, 
  Scissors, 
  GraduationCap, 
  Layers, 
  CheckCircle2, 
  MapPin, 
  FileCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/causeData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    'all', 
    'TVET Training', 
    'Women Empowerment', 
    'Renewable Energy', 
    'Technical Trades', 
    'Certificates & Events'
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  // Thematic category icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Renewable Energy':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Women Empowerment':
        return <Scissors className="w-5 h-5 text-rose-500" />;
      case 'Technical Trades':
        return <Wrench className="w-5 h-5 text-amber-700" />;
      case 'Certificates & Events':
        return <GraduationCap className="w-5 h-5 text-emerald-600" />;
      default:
        return <Layers className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">
            <span>Field Activities &amp; Vocational Training Register</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Field Activity Documentation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Documented vocational workshops, women welfare centers, technical hands-on training, and graduation ceremonies conducted across Sindh.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 rounded-lg font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-600 text-slate-950 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Activities' : cat}
            </button>
          ))}
        </div>

        {/* Activity Documentation Cards Grid (Pure SVG/Vector-Driven: Zero Image Dependencies to Prevent Any Vercel Rendering Errors) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-amber-300 hover:shadow-md transition-all group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Sindh, Pakistan</span>
                  </span>
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Activity</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
