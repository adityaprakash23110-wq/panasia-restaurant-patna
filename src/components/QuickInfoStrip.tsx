import React from 'react';
import { MapPin, UtensilsCrossed, Clock, Star, ExternalLink } from 'lucide-react';
import { RestaurantConfig } from '../types/restaurant';

interface QuickInfoStripProps {
  config: RestaurantConfig;
}

export const QuickInfoStrip: React.FC<QuickInfoStripProps> = ({ config }) => {
  return (
    <section aria-label="Restaurant Quick Information" className="bg-white border-y border-[#F0E5D7] py-6 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* 1. Location */}
          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#FAF6EF]/60 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#FAF6EF] text-[#B9382B] border border-[#F0E5D7] shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-wider text-[#625D56] font-semibold">Location</h2>
              <p className="font-serif-display text-base font-bold text-[#20201E] mt-0.5">
                Opp. Rajendra Nagar Terminal
              </p>
              <p className="text-xs text-[#625D56] mt-0.5">Munna Chak, Kankarbagh, Patna</p>
            </div>
          </div>

          {/* 2. Cuisines */}
          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#FAF6EF]/60 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#FAF6EF] text-[#C58B45] border border-[#F0E5D7] shrink-0">
              <UtensilsCrossed size={22} />
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-wider text-[#625D56] font-semibold">Cuisine Specialties</h2>
              <p className="font-serif-display text-base font-bold text-[#20201E] mt-0.5">
                North Indian & Indo-Chinese
              </p>
              <p className="text-xs text-[#625D56] mt-0.5">Biryani, Tandoori & Vegetarian choices</p>
            </div>
          </div>

          {/* 3. Opening Hours */}
          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#FAF6EF]/60 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#FAF6EF] text-[#20201E] border border-[#F0E5D7] shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-xs uppercase tracking-wider text-[#625D56] font-semibold">Opening Hours</h2>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Open Today" />
              </div>
              <p className="font-serif-display text-base font-bold text-[#20201E] mt-0.5">
                {config.timings.displayHours}
              </p>
              <p className="text-xs text-[#625D56] mt-0.5">Open 7 days for lunch & dinner</p>
            </div>
          </div>

          {/* 4. Google Rating */}
          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#FAF6EF]/60 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#FAF6EF] text-[#C58B45] border border-[#F0E5D7] shrink-0">
              <Star size={22} className="fill-[#C58B45]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-xs uppercase tracking-wider text-[#625D56] font-semibold">Diner Rating</h2>
                <a
                  href={config.contact.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#625D56] hover:text-[#B9382B]"
                  title="View Google Reviews"
                >
                  <ExternalLink size={12} />
                </a>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="font-serif-display text-base font-bold text-[#20201E]">
                  {config.ratings.average} / 5.0
                </span>
                <span className="text-xs text-[#625D56]">({config.ratings.totalReviews}+ reviews)</span>
              </div>
              <p className="text-[11px] text-[#625D56] mt-0.5">Google Business verified listing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
