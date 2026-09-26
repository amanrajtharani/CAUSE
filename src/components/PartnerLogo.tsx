import React from 'react';

interface PartnerLogoProps {
  name: string;
  category?: string;
  className?: string;
}

export const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, category, className = 'w-full h-full' }) => {
  // 1. USAID (From the American People)
  if (name.includes('USAID')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#002F6C" />
          {/* Clasped Hands Symbol & Stars Shield */}
          <g transform="translate(10, 8)">
            <path d="M12 18 C16 12, 22 12, 26 18 C30 12, 36 12, 40 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16 16 L22 22 L32 12" stroke="#BA0C2F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="15" cy="8" r="1.5" fill="#FFFFFF" />
            <circle cx="26" cy="6" r="1.5" fill="#FFFFFF" />
            <circle cx="37" cy="8" r="1.5" fill="#FFFFFF" />
          </g>
          {/* Bold USAID text */}
          <text x="65" y="27" fill="#FFFFFF" fontSize="20" fontWeight="900" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="0.5">
            USAID
          </text>
          <text x="65" y="40" fill="#BA0C2F" fontSize="6.5" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="0.8">
            FROM THE AMERICAN PEOPLE
          </text>
        </svg>
      </div>
    );
  }

  // 2. UK Aid (From the British People)
  if (name.includes('UK Aid')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#00247D" />
          {/* Union Jack Shield */}
          <g transform="translate(10, 8)">
            <rect width="36" height="38" rx="4" fill="#00247D" stroke="#FFFFFF" strokeWidth="1" />
            <path d="M0 0 L36 38 M36 0 L0 38" stroke="#FFFFFF" strokeWidth="4" />
            <path d="M0 0 L36 38 M36 0 L0 38" stroke="#CF142B" strokeWidth="2" />
            <path d="M18 0 L18 38 M0 19 L36 19" stroke="#FFFFFF" strokeWidth="8" />
            <path d="M18 0 L18 38 M0 19 L36 19" stroke="#CF142B" strokeWidth="4.5" />
          </g>
          {/* Official UK Aid Typography */}
          <text x="56" y="27" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="-0.5">
            ukaid
          </text>
          <text x="56" y="40" fill="#CF142B" fontSize="6.8" fontWeight="700" fontFamily="Arial, sans-serif">
            from the British people
          </text>
        </svg>
      </div>
    );
  }

  // 3. European Union Humanitarian Aid (ECHO)
  if (name.includes('European Union')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#003399" />
          {/* 12 Stars of Europe */}
          <g transform="translate(28, 27)">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const cx = 17 * Math.cos(rad);
              const cy = 17 * Math.sin(rad);
              return <circle key={i} cx={cx} cy={cy} r="2.2" fill="#FFCC00" />;
            })}
          </g>
          <text x="58" y="23" fill="#FFFFFF" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
            Humanitarian Aid
          </text>
          <text x="58" y="34" fill="#FFCC00" fontSize="8" fontWeight="700" fontFamily="sans-serif">
            European Commission
          </text>
          <text x="58" y="44" fill="#93C5FD" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">
            ECHO PROGRAMME
          </text>
        </svg>
      </div>
    );
  }

  // 4. World Food Programme (WFP)
  if (name.includes('World Food Programme') || name.includes('WFP')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#0A6CBA" />
          {/* Grain of Wheat & Hand UN Symbol */}
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 1.5" fill="none" />
            <path d="M12 28 C12 16, 22 14, 22 7" stroke="#FFCC00" strokeWidth="3" strokeLinecap="round" />
            <circle cx="20" cy="12" r="2.2" fill="#FFCC00" />
            <circle cx="15" cy="18" r="2.2" fill="#FFCC00" />
            <circle cx="20" cy="24" r="2.2" fill="#FFCC00" />
          </g>
          <text x="56" y="26" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif">
            WFP
          </text>
          <text x="56" y="38" fill="#FFFFFF" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            World Food Programme
          </text>
        </svg>
      </div>
    );
  }

  // 5. Secours Islamique France (SIF)
  if (name.includes('Secours Islamique') || name.includes('SIF')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#007A3D" />
          <g transform="translate(14, 10)">
            <path d="M18 4 A 14 14 0 1 0 32 18 A 16 16 0 1 1 18 4 Z" fill="#FFFFFF" />
            <circle cx="22" cy="18" r="3" fill="#E65100" />
          </g>
          <text x="58" y="25" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            SIF
          </text>
          <text x="58" y="37" fill="#FFFFFF" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">
            Secours Islamique France
          </text>
        </svg>
      </div>
    );
  }

  // 6. Human Appeal International
  if (name.includes('Human Appeal')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#581845" />
          <g transform="translate(14, 11)">
            <path d="M10 16 C6 10, 16 6, 18 12 C20 6, 30 10, 26 16 C22 22, 18 26, 18 26 C18 26, 14 22, 10 16 Z" fill="#90EE90" />
            <circle cx="18" cy="7" r="3" fill="#FFFFFF" />
          </g>
          <text x="54" y="25" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            HUMAN APPEAL
          </text>
          <text x="54" y="38" fill="#90EE90" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">
            International NGO
          </text>
        </svg>
      </div>
    );
  }

  // 7. Qatar Charity (QC)
  if (name.includes('Qatar Charity')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#8A1538" />
          <g transform="translate(14, 10)">
            <circle cx="17" cy="17" r="16" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
            <path d="M10 17 C13 10, 21 10, 24 17" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="17" cy="20" r="3" fill="#F59E0B" />
          </g>
          <text x="56" y="25" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            QATAR CHARITY
          </text>
          <text x="56" y="37" fill="#F59E0B" fontSize="8" fontWeight="700" fontFamily="sans-serif">
            جمعية قطر الخيرية
          </text>
        </svg>
      </div>
    );
  }

  // 8. ACTED Pakistan
  if (name.includes('ACTED')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#0A192F" />
          {/* Blue Block & Orange Arrow */}
          <rect x="12" y="12" width="136" height="31" rx="4" fill="#0055A5" />
          <path d="M110 12 L148 27.5 L110 43 Z" fill="#E65100" />
          <text x="60" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="Arial Black, sans-serif" letterSpacing="2">
            ACTED
          </text>
        </svg>
      </div>
    );
  }

  // 9. Norwegian Ministry of Foreign Affairs
  if (name.includes('Norwegian')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#BA0C2F" />
          <g transform="translate(12, 11)">
            <rect width="32" height="32" rx="4" fill="#BA0C2F" stroke="#FFFFFF" strokeWidth="1" />
            <path d="M10 0 L10 32 M0 16 L32 16" stroke="#FFFFFF" strokeWidth="7" />
            <path d="M10 0 L10 32 M0 16 L32 16" stroke="#00205B" strokeWidth="3.5" />
          </g>
          <text x="52" y="25" fill="#FFFFFF" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
            NORWEGIAN EMBASSY
          </text>
          <text x="52" y="37" fill="#F8FAFC" fontSize="7" fontWeight="600" fontFamily="sans-serif">
            Ministry of Foreign Affairs
          </text>
        </svg>
      </div>
    );
  }

  // 10. Government of Sindh & Social Welfare
  if (name.includes('Government of Sindh') || name.includes('Govt of Sindh') || name.includes('Social Welfare Department')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#0A5C36" />
          {/* Sindh Provincial Seal */}
          <g transform="translate(12, 9)">
            <circle cx="18" cy="18" r="16" stroke="#F59E0B" strokeWidth="2" fill="#0E4D34" />
            <path d="M12 12 A 8 8 0 1 0 24 20 A 10 10 0 1 1 12 12 Z" fill="#F59E0B" />
            <circle cx="21" cy="14" r="2" fill="#FFFFFF" />
            <path d="M6 30 Q18 24 30 30" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
          </g>
          <text x="54" y="24" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            GOVERNMENT OF SINDH
          </text>
          <text x="54" y="36" fill="#F59E0B" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            {name.includes('Social Welfare') ? 'Social Welfare Department' : 'Sindh Provincial Authority'}
          </text>
        </svg>
      </div>
    );
  }

  // 11. Sindh Education Foundation (SEF)
  if (name.includes('Sindh Education Foundation') || name.includes('SEF')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#0D47A1" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="17" r="16" fill="#1565C0" stroke="#FFC107" strokeWidth="2" />
            <path d="M10 24 Q 18 16 26 24" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            <path d="M18 10 L18 20" stroke="#FFC107" strokeWidth="2.5" />
            <circle cx="18" cy="8" r="2" fill="#FFC107" />
          </g>
          <text x="54" y="25" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif">
            SEF
          </text>
          <text x="54" y="37" fill="#FFC107" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Sindh Education Foundation
          </text>
        </svg>
      </div>
    );
  }

  // 12. STEVTA
  if (name.includes('STEVTA')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#004D40" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" stroke="#F59E0B" strokeWidth="3" strokeDasharray="5 2.5" fill="#00382E" />
            <circle cx="18" cy="18" r="9" fill="#F59E0B" />
            <path d="M13 18 L23 18 M18 13 L18 23" stroke="#004D40" strokeWidth="2.5" />
          </g>
          <text x="54" y="25" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            STEVTA
          </text>
          <text x="54" y="37" fill="#F59E0B" fontSize="6.8" fontWeight="700" fontFamily="sans-serif">
            Technical Education &amp; Vocational Authority
          </text>
        </svg>
      </div>
    );
  }

  // 13. Trade Testing Board (TTB) Sindh
  if (name.includes('Trade Testing Board') || name.includes('TTB')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#0F172A" stroke="#F59E0B" strokeWidth="1" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" stroke="#F59E0B" strokeWidth="2.5" fill="#1E293B" />
            <path d="M9 18 L27 18 M18 10 L18 26 M12 25 L24 25" stroke="#F59E0B" strokeWidth="2" />
          </g>
          <text x="54" y="25" fill="#F59E0B" fontSize="15" fontWeight="900" fontFamily="sans-serif">
            TTB SINDH
          </text>
          <text x="54" y="37" fill="#FFFFFF" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Trade Testing Board Karachi
          </text>
        </svg>
      </div>
    );
  }

  // 14. NAVTTC
  if (name.includes('NAVTTC')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#004B23" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" fill="#004B23" stroke="#F59E0B" strokeWidth="2.5" />
            <circle cx="18" cy="18" r="7" fill="#F59E0B" />
            <circle cx="18" cy="18" r="4" fill="#FFFFFF" />
          </g>
          <text x="54" y="25" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
            NAVTTC
          </text>
          <text x="54" y="37" fill="#F59E0B" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            National Vocational &amp; Technical Commission
          </text>
        </svg>
      </div>
    );
  }

  // 15. BBSHRRDB / BBSYDP
  if (name.includes('BBSHRRDB') || name.includes('BBSYDP') || name.includes('Benazir Bhutto')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#4A0E17" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" stroke="#F59E0B" strokeWidth="2" fill="#2E0810" />
            <path d="M8 18 Q18 8 28 18 Q18 28 8 18" fill="#F59E0B" />
          </g>
          <text x="54" y="24" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            {name.includes('BBSYDP') ? 'BBSYDP' : 'BBSHRRDB'}
          </text>
          <text x="54" y="36" fill="#F59E0B" fontSize="6.8" fontWeight="700" fontFamily="sans-serif">
            Shaheed Benazir Bhutto Board (Govt Sindh)
          </text>
        </svg>
      </div>
    );
  }

  // 16. Skill Development Council Islamabad (SDC)
  if (name.includes('Skill Development Council') || name.includes('SDC')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#0C2340" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" stroke="#F59E0B" strokeWidth="2.5" fill="#1D3557" />
            <text x="18" y="24" textAnchor="middle" fill="#F59E0B" fontSize="14" fontWeight="900">S</text>
          </g>
          <text x="54" y="24" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            SDC ISLAMABAD
          </text>
          <text x="54" y="36" fill="#F59E0B" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Skill Development Council
          </text>
        </svg>
      </div>
    );
  }

  // 17. Sukkur IBA University
  if (name.includes('Sukkur IBA')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#002855" />
          <g transform="translate(12, 9)">
            <polygon points="18,3 33,18 18,33 3,18" stroke="#F59E0B" strokeWidth="2.5" fill="#0A3663" />
            <circle cx="18" cy="18" r="5" fill="#F59E0B" />
          </g>
          <text x="54" y="24" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">
            SUKKUR IBA UNIVERSITY
          </text>
          <text x="54" y="36" fill="#F59E0B" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Merit - Quality - Excellence
          </text>
        </svg>
      </div>
    );
  }

  // 18. DESCON
  if (name.includes('DESCON')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#B71C1C" />
          <g transform="translate(12, 10)">
            <polygon points="18,3 33,11 33,26 18,34 3,26 3,11" stroke="#FFFFFF" strokeWidth="2.5" fill="#880E4F" />
            <text x="18" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900">D</text>
          </g>
          <text x="54" y="27" fill="#FFFFFF" fontSize="17" fontWeight="900" fontFamily="Arial Black, sans-serif" letterSpacing="1">
            DESCON
          </text>
          <text x="54" y="39" fill="#FFCDD2" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Engineering &amp; Technical Services
          </text>
        </svg>
      </div>
    );
  }

  // 19. TUSDEC
  if (name.includes('TUSDEC')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#006064" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" stroke="#00E5FF" strokeWidth="2.5" strokeDasharray="4 2" fill="#004D40" />
            <circle cx="18" cy="18" r="7" fill="#00E5FF" />
          </g>
          <text x="54" y="25" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            TUSDEC
          </text>
          <text x="54" y="37" fill="#80DEEA" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">
            Technology Upgradation &amp; Skill Dev
          </text>
        </svg>
      </div>
    );
  }

  // 20. EFU Life
  if (name.includes('EFU Life')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#1B5E20" />
          <g transform="translate(12, 10)">
            <path d="M6 18 C6 8, 30 8, 30 18 L18 30 Z" fill="#D32F2F" stroke="#FFFFFF" strokeWidth="1.5" />
          </g>
          <text x="54" y="26" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            efu LIFE
          </text>
          <text x="54" y="38" fill="#C8E6C9" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Insurance &amp; Financial Linkages
          </text>
        </svg>
      </div>
    );
  }

  // 21. Pakistan Microfinance Network (PMN)
  if (name.includes('Microfinance Network') || name.includes('PMN')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#004D40" />
          <g transform="translate(12, 10)">
            <circle cx="10" cy="12" r="5" fill="#4DB6AC" />
            <circle cx="26" cy="12" r="5" fill="#4DB6AC" />
            <circle cx="18" cy="26" r="6" fill="#80CBC4" />
            <line x1="10" y1="12" x2="18" y2="26" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="26" y1="12" x2="18" y2="26" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="10" y1="12" x2="26" y2="12" stroke="#FFFFFF" strokeWidth="2" />
          </g>
          <text x="54" y="24" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">
            PMN
          </text>
          <text x="54" y="36" fill="#80CBC4" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Pakistan Microfinance Network
          </text>
        </svg>
      </div>
    );
  }

  // 22. Pakistan Sports Board
  if (name.includes('Pakistan Sports Board')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#01411C" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" stroke="#F59E0B" strokeWidth="2" fill="#002910" />
            <path d="M12 14 A 6 6 0 1 0 24 22 A 8 8 0 1 1 12 14 Z" fill="#FFFFFF" />
            <circle cx="21" cy="16" r="1.8" fill="#F59E0B" />
          </g>
          <text x="54" y="25" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">
            PAKISTAN SPORTS BOARD
          </text>
          <text x="54" y="37" fill="#F59E0B" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Government of Pakistan
          </text>
        </svg>
      </div>
    );
  }

  // 23. Body Building Federations (PBBF, IFBB, SBBA, Larkana)
  if (name.includes('Body Building') || name.includes('PBBF') || name.includes('IFBB') || name.includes('SBBA')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#0F172A" stroke="#F59E0B" strokeWidth="1" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" stroke="#F59E0B" strokeWidth="2" fill="#1E293B" />
            <path d="M7 18 L29 18" stroke="#F59E0B" strokeWidth="3" />
            <circle cx="7" cy="18" r="3.5" fill="#FFFFFF" />
            <circle cx="29" cy="18" r="3.5" fill="#FFFFFF" />
          </g>
          <text x="54" y="24" fill="#F59E0B" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            {name.includes('IFBB') ? 'IFBB' : name.includes('PBBF') ? 'PBBF' : 'SBBA SINDH'}
          </text>
          <text x="54" y="36" fill="#FFFFFF" fontSize="6.8" fontWeight="700" fontFamily="sans-serif">
            Bodybuilding &amp; Fitness Federation
          </text>
        </svg>
      </div>
    );
  }

  // 24. Thul Institute of Information Technology
  if (name.includes('Thul Institute')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#1E1B4B" />
          <g transform="translate(12, 10)">
            <rect x="4" y="6" width="28" height="20" rx="3" fill="#312E81" stroke="#818CF8" strokeWidth="2" />
            <line x1="18" y1="26" x2="18" y2="32" stroke="#818CF8" strokeWidth="3" />
            <line x1="10" y1="32" x2="26" y2="32" stroke="#818CF8" strokeWidth="3" />
          </g>
          <text x="54" y="24" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">
            THUL INSTITUTE
          </text>
          <text x="54" y="36" fill="#A5B4FC" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Information Technology (TIIT)
          </text>
        </svg>
      </div>
    );
  }

  // 25. Society for Alternative Media and Research (SAMAR)
  if (name.includes('Alternative Media') || name.includes('SAMAR')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#311042" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" stroke="#D8B4FE" strokeWidth="2" fill="#4A154B" />
            <path d="M12 24 L18 8 L24 24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="18" cy="8" r="2.5" fill="#F59E0B" />
          </g>
          <text x="54" y="25" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">
            SAMAR
          </text>
          <text x="54" y="37" fill="#E9D5FF" fontSize="6.8" fontWeight="700" fontFamily="sans-serif">
            Alternative Media &amp; Research
          </text>
        </svg>
      </div>
    );
  }

  // 26. Coalition For Tobacco Control (CTc)
  if (name.includes('Tobacco Control') || name.includes('CTc')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#7F1D1D" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" stroke="#F87171" strokeWidth="2.5" fill="#991B1B" />
            <line x1="6" y1="6" x2="30" y2="30" stroke="#FFFFFF" strokeWidth="3" />
          </g>
          <text x="54" y="25" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            CTc PAKISTAN
          </text>
          <text x="54" y="37" fill="#FECACA" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Coalition For Tobacco Control
          </text>
        </svg>
      </div>
    );
  }

  // 27. Unique Digital Creation
  if (name.includes('Unique Digital')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#0F172A" />
          <g transform="translate(12, 10)">
            <polygon points="18,4 32,28 4,28" stroke="#F59E0B" strokeWidth="2.5" fill="#F59E0B" fillOpacity="0.2" />
            <circle cx="18" cy="20" r="4" fill="#38BDF8" />
          </g>
          <text x="54" y="24" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">
            UNIQUE DIGITAL
          </text>
          <text x="54" y="36" fill="#38BDF8" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Digital Agency &amp; Media
          </text>
        </svg>
      </div>
    );
  }

  // 28. Al-Ubed Welfare Association
  if (name.includes('Al-Ubed')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#064E3B" />
          <g transform="translate(12, 10)">
            <circle cx="18" cy="18" r="16" stroke="#F59E0B" strokeWidth="2" fill="#047857" />
            <path d="M12 24 C12 16, 24 16, 24 24" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
            <circle cx="18" cy="14" r="3" fill="#F59E0B" />
          </g>
          <text x="54" y="24" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">
            AL-UBED WELFARE
          </text>
          <text x="54" y="36" fill="#A7F3D0" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Jacobabad Welfare Association
          </text>
        </svg>
      </div>
    );
  }

  // 29. DUA Rent-A-Car Services
  if (name.includes('DUA') || name.includes('Rent-A-Car')) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
          <rect width="160" height="55" rx="6" fill="#18181B" />
          <g transform="translate(12, 10)">
            <rect x="4" y="10" width="28" height="16" rx="4" fill="#27272A" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="10" cy="28" r="3" fill="#F59E0B" />
            <circle cx="26" cy="28" r="3" fill="#F59E0B" />
          </g>
          <text x="54" y="25" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">
            DUA SERVICES
          </text>
          <text x="54" y="37" fill="#F59E0B" fontSize="7" fontWeight="700" fontFamily="sans-serif">
            Fleet &amp; Logistics Partner
          </text>
        </svg>
      </div>
    );
  }

  // Clean, official institutional monogram badge for any remaining partner
  const initials = name
    .replace(/\(.*?\)/g, '')
    .trim()
    .split(' ')
    .filter(Boolean)
    .slice(0, 3)
    .map(w => w[0])
    .join('')
    .toUpperCase() || 'ORG';

  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 160 55" className="w-full h-full max-h-16" fill="none">
        <rect width="160" height="55" rx="6" fill="#090D16" stroke="#F59E0B" strokeWidth="1" />
        <g transform="translate(12, 10)">
          <circle cx="18" cy="18" r="16" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 1.5" fill="#1E293B" />
          <text x="18" y="23" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="900" fontFamily="monospace">
            {initials}
          </text>
        </g>
        <text x="54" y="24" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">
          {name.split(' ')[0]}
        </text>
        <text x="54" y="36" fill="#94A3B8" fontSize="7" fontWeight="700" fontFamily="sans-serif">
          {category || 'Development Partner'}
        </text>
      </svg>
    </div>
  );
};
