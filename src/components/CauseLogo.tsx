import React from 'react';

interface CauseLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark';
  className?: string;
}

export const CauseLogo: React.FC<CauseLogoProps> = ({ 
  size = 'md', 
  showText = true, 
  variant = 'light',
  className = ''
}) => {
  const isDark = variant === 'dark';

  // Sizing definitions: Compact, well-proportioned dimensions (aspect ratio ~1.55:1)
  // "its size is very big decrease its size a lil bit and embed it in website"
  const emblemSizeClasses = {
    sm: 'h-6 sm:h-7 w-auto min-w-[36px]',
    md: 'h-7 sm:h-8 md:h-9 w-auto min-w-[44px]',
    lg: 'h-9 sm:h-10 md:h-11 w-auto min-w-[56px]',
    xl: 'h-11 sm:h-12 md:h-14 w-auto min-w-[68px]',
  }[size];

  const textColor = isDark ? '#FFFFFF' : '#0A0A0A';
  const stripeColor = isDark ? '#64748B' : '#CBD5E1';
  const stripeBarColor = isDark ? '#94A3B8' : '#94A3B8';
  const goldColor = '#F5A623';

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 shrink-0 select-none max-w-full ${className}`}>
      {/* Official Authentic CAUSE Emblem (SVG vector: 100% reliable for Vercel deployment with zero latency or 404 risk) */}
      <div className={`shrink-0 flex items-center justify-center ${emblemSizeClasses}`}>
        <svg
          viewBox="0 0 340 220"
          className="h-full w-auto drop-shadow-xs overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="CAUSE Emblem Logo"
        >
          {/* Golden Crescent Arc (Wrapping around top, right, and bottom) */}
          <path 
            d="M 124,34 
               C 172,14 242,12 288,42 
               C 328,68 340,108 335,138 
               C 328,174 294,206 242,216 
               C 186,224 142,206 124,190 
               C 148,198 190,204 232,194 
               C 278,182 308,148 310,114 
               C 312,78 282,46 234,34 
               C 188,24 148,28 124,34 Z" 
            fill={goldColor} 
          />

          {/* Golden Sun Disc (Behind AUSE) */}
          <circle cx="204" cy="110" r="46" fill={goldColor} />

          {/* Horizontal Silver/Gray Stripe Band */}
          <g>
            {/* Top framing bar */}
            <line x1="90" y1="64" x2="288" y2="64" stroke={stripeBarColor} strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Interior horizontal stripes */}
            <line x1="90" y1="73" x2="288" y2="73" stroke={stripeColor} strokeWidth="1.8" />
            <line x1="90" y1="82" x2="288" y2="82" stroke={stripeColor} strokeWidth="1.8" />
            <line x1="90" y1="91" x2="288" y2="91" stroke={stripeColor} strokeWidth="1.8" />
            <line x1="90" y1="100" x2="288" y2="100" stroke={stripeColor} strokeWidth="1.8" />
            <line x1="90" y1="109" x2="288" y2="109" stroke={stripeColor} strokeWidth="1.8" />
            <line x1="90" y1="118" x2="288" y2="118" stroke={stripeColor} strokeWidth="1.8" />
            <line x1="90" y1="127" x2="288" y2="127" stroke={stripeColor} strokeWidth="1.8" />
            <line x1="90" y1="136" x2="288" y2="136" stroke={stripeColor} strokeWidth="1.8" />
            <line x1="90" y1="145" x2="288" y2="145" stroke={stripeColor} strokeWidth="1.8" />
            <line x1="90" y1="154" x2="288" y2="154" stroke={stripeColor} strokeWidth="1.8" />

            {/* Bottom framing bar */}
            <line x1="90" y1="163" x2="288" y2="163" stroke={stripeBarColor} strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Big Bold Letter "C" (Precisely proportioned with horizontal cut ends) */}
          <path 
            d="M 148,64 
               A 86 86 0 1 0 148,163 
               L 115,163 
               A 51 51 0 1 1 115,64 
               Z" 
            fill={textColor} 
          />

          {/* Bold Letter "A" (Nestled seamlessly inside the opening of C) */}
          <path 
            d="M 102,77 
               L 124,149 
               L 108,149 
               L 103,132 
               L 87,132 
               L 82,149 
               L 66,149 
               L 89,77 
               Z
               M 95,95 
               L 90,118 
               L 100,118 
               Z" 
            fill={textColor} 
          />

          {/* Bold Letter "U" */}
          <path 
            d="M 132,76 
               L 149,76 
               L 149,124 
               C 149,133 154,137 160,137 
               C 166,137 171,133 171,124 
               L 171,76 
               L 188,76 
               L 188,124 
               C 188,143 176,151 160,151 
               C 144,151 132,143 132,124 
               Z" 
            fill={textColor} 
          />

          {/* Bold & Highly Legible Letter "S" (Clear, open counters, robust bold spine) */}
          <path 
            d="M 244,98 
               L 227,98 
               C 227,92 222,88 215,88 
               C 208,88 203,91 203,96 
               C 203,103 210,107 222,110 
               C 238,114 249,121 249,134 
               C 249,145 238,151 219,151 
               C 201,151 190,143 189,129 
               L 206,129 
               C 207,136 212,140 219,140 
               C 227,140 232,136 232,131 
               C 232,124 225,120 213,116 
               C 198,112 188,105 188,94 
               C 188,83 199,76 215,76 
               C 232,76 243,84 244,98 
               Z" 
            fill={textColor} 
          />

          {/* Bold Letter "E" */}
          <path 
            d="M 256,76 
               L 292,76 
               L 292,90 
               L 274,90 
               L 274,107 
               L 289,107 
               L 289,120 
               L 274,120 
               L 274,137 
               L 293,137 
               L 293,151 
               L 256,151 
               Z" 
            fill={textColor} 
          />
        </svg>
      </div>

      {/* Brand Text Block — Highly legible typography matching the official NGO profile */}
      {showText && (
        <div className="flex flex-col justify-center min-w-0 text-left">
          <div className="flex flex-col xs:flex-row xs:items-baseline xs:gap-1.5 sm:gap-2">
            <span className={`font-black tracking-tight leading-none text-sm sm:text-base lg:text-lg shrink-0 ${isDark ? 'text-white' : 'text-slate-950'}`}>
              CAUSE
            </span>
            <span className={`font-extrabold tracking-wider uppercase text-[8px] xs:text-[9px] sm:text-[10px] leading-none shrink-0 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
              DEVELOPMENT ORGANIZATION
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1 text-[8px] sm:text-[10px] leading-tight">
            <span className={`font-medium tracking-tight truncate max-w-[150px] xs:max-w-[200px] sm:max-w-none ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Organization &amp; Institutes Network
            </span>
            <span className={`hidden sm:inline ${isDark ? 'text-slate-600' : 'text-slate-300'}`}>|</span>
            <span className={`hidden sm:inline font-semibold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
              Est. 2013
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
