import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true
}) => {
  const isLight = variant === 'light';

  // Responsive scale sizes
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 44 : 38;
  const titleSize = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl';
  const subtitleSize = size === 'sm' ? 'text-[9px]' : 'text-[11px]';

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Brand Icon: Plate circle with copper rim & spice flame */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Outer Dish Rim */}
        <circle cx="22" cy="22" r="20" stroke="#C58B45" strokeWidth="2.5" strokeDasharray="3 2" />
        <circle cx="22" cy="22" r="16.5" fill={isLight ? '#20201E' : '#FAF6EF'} stroke="#C58B45" strokeWidth="1.5" />
        {/* Inner Bowl / Chilli Flame */}
        <circle cx="22" cy="22" r="11" fill="#B9382B" />
        {/* Spice Steam Wave */}
        <path
          d="M19 25C19 25 18 20 22 17C26 14 22 13 22 13"
          stroke="#FAF6EF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="25" cy="19" r="1.5" fill="#C58B45" />
      </svg>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif-display ${titleSize} font-bold tracking-wider leading-none transition-colors ${
            isLight ? 'text-white' : 'text-[#20201E]'
          }`}
        >
          PANASIA
        </span>
        {showSubtitle && (
          <span
            className={`${subtitleSize} uppercase font-medium tracking-[0.22em] mt-1 transition-colors ${
              isLight ? 'text-[#C58B45]' : 'text-[#B9382B]'
            }`}
          >
            Restaurant • Patna
          </span>
        )}
      </div>
    </div>
  );
};
