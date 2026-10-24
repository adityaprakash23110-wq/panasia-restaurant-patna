import React from 'react';
import { MapPin, ArrowRight, Utensils, Star, ShieldCheck } from 'lucide-react';
import { RestaurantConfig } from '../types/restaurant';

interface HeroProps {
  config: RestaurantConfig;
  onOpenMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onOpenMenu }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-4 pb-12 md:py-16 lg:py-20 bg-[#FAF6EF]">
      {/* Subtle background ambient spice glow */}
      <div
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#C58B45]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-[#B9382B]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Pill: Location Landmark Tag */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#F0E5D7] border border-[#C58B45]/30 text-xs font-semibold text-[#20201E] mb-6 shadow-xs">
              <MapPin size={13} className="text-[#B9382B]" />
              <span>Opposite Rajendra Nagar Terminal • Kankarbagh</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#20201E] tracking-tight leading-[1.1] mb-6">
              A World of Flavour,{' '}
              <span className="italic font-normal text-[#B9382B]">Right Here</span> in Patna.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-[#625D56] leading-relaxed max-w-2xl mb-8">
              Explore a menu of Indian favourites and Indo-Chinese flavours at PANASIA Restaurant in Kankarbagh.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenMenu}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#B9382B] hover:bg-[#922B22] text-white font-medium text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Utensils size={18} />
                <span>Explore Our Menu</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={config.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#20201E] hover:bg-black text-[#FAF6EF] font-medium text-base transition-colors border border-transparent shadow-xs"
              >
                <MapPin size={18} className="text-[#C58B45]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick Proof Strip */}
            <div className="pt-6 border-t border-[#F0E5D7] grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#625D56] font-medium">Cuisine</span>
                <span className="font-serif-display text-base text-[#20201E] font-bold">North Indian & Asian</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#625D56] font-medium">Hours</span>
                <span className="font-serif-display text-base text-[#20201E] font-bold">11:30 AM – 1:00 AM</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-xs uppercase tracking-wider text-[#625D56] font-medium">Rating</span>
                <div className="flex items-center gap-1.5">
                  <Star size={15} className="fill-[#C58B45] text-[#C58B45]" />
                  <span className="font-serif-display text-base text-[#20201E] font-bold">
                    {config.ratings.average} / 5
                  </span>
                  <span className="text-[11px] text-[#625D56]">(Google)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Food Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative copper frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#C58B45]/40 -rotate-1 hidden sm:block pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#F0E5D7]">
                <img
                  src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=85"
                  alt="Aromatic Indian dishes and spices served at PANASIA Restaurant Patna"
                  className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Dish Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#F0E5D7] flex items-center justify-between gap-3">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#F0E5D7] text-[#B9382B] mb-0.5">
                      Chef's Multi-Cuisine
                    </span>
                    <h3 className="font-serif-display text-base font-bold text-[#20201E]">
                      Handcrafted Curries & Indo-Chinese
                    </h3>
                    <p className="text-xs text-[#625D56]">Prepared fresh with authentic spices & ingredients</p>
                  </div>
                  <button
                    onClick={onOpenMenu}
                    className="p-2.5 rounded-lg bg-[#B9382B] text-white hover:bg-[#922B22] transition-colors shrink-0"
                    aria-label="View dishes"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Verified Landmark Floating Pill */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-[#20201E] text-[#FAF6EF] px-3.5 py-2 rounded-xl shadow-lg border border-[#C58B45]/40 text-xs font-medium">
                <ShieldCheck size={16} className="text-[#C58B45]" />
                <span>Prime Kankarbagh Landmark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
