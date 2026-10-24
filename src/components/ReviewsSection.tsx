import React from 'react';
import { Star, ExternalLink, ShieldCheck, MessageSquare } from 'lucide-react';
import { RestaurantConfig } from '../types/restaurant';

interface ReviewsSectionProps {
  config: RestaurantConfig;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ config }) => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F0E5D7] text-[#B9382B] text-xs font-semibold tracking-wider uppercase mb-3">
            Diner Experiences
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#20201E] tracking-tight mb-4">
            What Diners Are Saying.
          </h2>
          <p className="text-base sm:text-lg text-[#625D56] leading-relaxed">
            Authentic guest feedback from diners visiting PANASIA Restaurant in Kankarbagh, Patna.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#F0E5D7] shadow-sm max-w-4xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#C58B45] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    className={
                      i < Math.floor(config.ratings.average)
                        ? 'fill-[#C58B45]'
                        : 'fill-[#C58B45]/30'
                    }
                  />
                ))}
              </div>
              <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                <span className="font-serif-display text-4xl font-bold text-[#20201E]">
                  {config.ratings.average}
                </span>
                <span className="text-sm text-[#625D56]">out of 5 stars</span>
              </div>
              <p className="text-xs text-[#625D56] mt-1">
                Based on {config.ratings.totalReviews}+ public Google ratings
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={config.contact.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#20201E] hover:bg-black text-[#FAF6EF] text-sm font-medium transition-colors shadow-xs"
            >
              <span>Read Our Google Reviews</span>
              <ExternalLink size={16} className="text-[#C58B45]" />
            </a>
          </div>
        </div>

        {/* Curated Authentic Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {config.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-[#F0E5D7] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className={i < rev.rating ? 'fill-[#C58B45] text-[#C58B45]' : 'text-gray-200'}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#625D56] bg-[#FAF6EF] px-2 py-0.5 rounded border border-[#F0E5D7]">
                    {rev.source}
                  </span>
                </div>

                <p className="text-sm text-[#242321] leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0E5D7] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[#20201E]">{rev.authorName}</h3>
                  <p className="text-[11px] text-[#625D56]">{rev.dateRelative}</p>
                </div>
                {rev.highlightDish && (
                  <span className="text-[10px] bg-[#F0E5D7] text-[#B9382B] px-2 py-0.5 rounded font-medium">
                    {rev.highlightDish}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="max-w-xl mx-auto text-center flex items-center justify-center gap-2 text-xs text-[#625D56]">
          <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
          <span>
            {config.ratings.ratingNotice}
          </span>
        </div>
      </div>
    </section>
  );
};
