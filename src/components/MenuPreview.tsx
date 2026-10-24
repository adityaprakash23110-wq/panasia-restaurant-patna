import React from 'react';
import { ArrowRight, Utensils } from 'lucide-react';
import { RestaurantConfig } from '../types/restaurant';

interface MenuPreviewProps {
  config: RestaurantConfig;
  onOpenMenuWithCategory?: (categoryId: string) => void;
  onOpenFullMenu: () => void;
}

export const MenuPreview: React.FC<MenuPreviewProps> = ({
  config,
  onOpenMenuWithCategory,
  onOpenFullMenu
}) => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F0E5D7] text-[#B9382B] text-xs font-semibold tracking-wider uppercase mb-3">
            Culinary Offerings
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#20201E] tracking-tight mb-4">
            Find Your Next Favourite.
          </h2>
          <p className="text-base sm:text-lg text-[#625D56] leading-relaxed">
            Explore the menu and discover a variety of flavours for your next meal.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {config.menuCategories.slice(0, 4).map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#F0E5D7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                {/* Category Image with aspect ratio 4:3 */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF6EF]">
                  <img
                    src={category.image}
                    alt={`${category.name} at PANASIA Restaurant`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[#20201E] text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs">
                    {category.name}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-serif-display text-xl font-bold text-[#20201E] mb-2 group-hover:text-[#B9382B] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[#625D56] leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    if (onOpenMenuWithCategory) {
                      onOpenMenuWithCategory(category.id);
                    } else {
                      onOpenFullMenu();
                    }
                  }}
                  className="w-full inline-flex items-center justify-between text-sm font-semibold text-[#B9382B] group-hover:text-[#922B22] border-t border-[#F0E5D7] pt-4 cursor-pointer"
                >
                  <span>Explore Menu</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA button */}
        <div className="text-center">
          <button
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#B9382B] hover:bg-[#922B22] text-white font-medium text-base shadow hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <Utensils size={18} />
            <span>View Full Menu with Prices</span>
            <ArrowRight size={16} />
          </button>
          <p className="text-xs text-[#625D56] mt-3">
            * Menu dishes, dietary options & pricing can be verified and updated in real-time.
          </p>
        </div>
      </div>
    </section>
  );
};
