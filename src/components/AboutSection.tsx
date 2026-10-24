import React from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';
import { RestaurantConfig } from '../types/restaurant';

interface AboutSectionProps {
  config: RestaurantConfig;
  onOpenMenu: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config, onOpenMenu }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main interior/dining ambiance photo */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#F0E5D7] bg-white">
                <img
                  src={config.about.interiorImageUrl}
                  alt="PANASIA Restaurant dining hall interior in Kankarbagh Patna"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Offset overlay card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#20201E] text-white p-5 rounded-xl shadow-xl max-w-xs border border-[#C58B45]/30 hidden sm:block">
                <div className="flex items-center gap-2 text-[#C58B45] text-xs font-semibold uppercase tracking-wider mb-1">
                  <MapPin size={14} />
                  <span>Kankarbagh Landmark</span>
                </div>
                <p className="text-xs text-[#FAF6EF]/90 leading-relaxed">
                  Located right across from Rajendra Nagar Terminal entrance — welcoming travellers and locals alike.
                </p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F0E5D7] text-[#B9382B] text-xs font-semibold tracking-wider uppercase mb-3">
              About PANASIA
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#20201E] tracking-tight mb-6">
              {config.about.headline}
            </h2>

            <div className="space-y-4 text-base text-[#625D56] leading-relaxed mb-8">
              <p>{config.about.introduction}</p>
              <p>{config.about.secondaryParagraph}</p>
              <div className="p-4 rounded-xl bg-white border border-[#F0E5D7]">
                <h3 className="font-serif-display text-lg font-bold text-[#20201E] mb-1">
                  Our Culinary Focus
                </h3>
                <p className="text-sm text-[#625D56]">{config.about.culinaryPhilosophy}</p>
              </div>
            </div>

            {/* Signature highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {config.about.signatureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-[#B9382B] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#20201E] font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenMenu}
                className="px-6 py-3 rounded-lg bg-[#B9382B] hover:bg-[#922B22] text-white text-sm font-medium shadow-sm transition-colors cursor-pointer"
              >
                Browse Our Menu Offerings
              </button>
              <a
                href="#location"
                className="px-6 py-3 rounded-lg bg-white hover:bg-[#FAF6EF] text-[#20201E] text-sm font-medium border border-[#F0E5D7] transition-colors"
              >
                Find Our Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
