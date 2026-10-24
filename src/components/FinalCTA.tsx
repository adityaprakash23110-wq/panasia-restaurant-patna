import React from 'react';
import { Utensils, MapPin, ArrowRight } from 'lucide-react';
import { RestaurantConfig } from '../types/restaurant';

interface FinalCTAProps {
  config: RestaurantConfig;
  onOpenMenu: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ config, onOpenMenu }) => {
  return (
    <section className="py-20 md:py-28 bg-[#20201E] text-[#FAF6EF] relative overflow-hidden">
      {/* Decorative copper circles */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-[#C58B45]/20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full border border-[#B9382B]/20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#C58B45] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#C58B45]/30">
          Welcome to PANASIA
        </span>

        <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Your Next Meal Starts Here.
        </h2>

        <p className="text-lg sm:text-xl text-[#FAF6EF]/80 max-w-2xl mx-auto leading-relaxed mb-10">
          Explore the menu, plan your route and get in touch with PANASIA Restaurant in Kankarbagh, Patna.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#B9382B] hover:bg-[#922B22] text-white font-medium text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Utensils size={18} />
            <span>Explore the Menu</span>
            <ArrowRight size={16} />
          </button>

          <a
            href={config.contact.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent hover:bg-white/10 text-[#FAF6EF] font-medium text-base border border-[#FAF6EF]/30 transition-colors"
          >
            <MapPin size={18} className="text-[#C58B45]" />
            <span>Get Directions</span>
          </a>
        </div>

        <p className="text-xs text-[#FAF6EF]/50 mt-8">
          Opposite Rajendra Nagar Terminal, Munna Chak, Kankarbagh, Patna • Open Daily 11:30 AM – 1:00 AM
        </p>
      </div>
    </section>
  );
};
