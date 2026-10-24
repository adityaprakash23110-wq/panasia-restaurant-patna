import React from 'react';
import { MapPin, UtensilsCrossed, Compass } from 'lucide-react';
import { RestaurantConfig } from '../types/restaurant';

interface WhyPanasiaProps {
  config: RestaurantConfig;
}

export const WhyPanasia: React.FC<WhyPanasiaProps> = ({ config }) => {
  const cards = [
    {
      id: 'loc',
      title: 'Convenient Location',
      icon: <MapPin size={26} className="text-[#B9382B]" />,
      description: config.features.convenientLocationText,
      detail: 'Opposite Rajendra Nagar Terminal, Kankarbagh, Patna.'
    },
    {
      id: 'var',
      title: 'Variety on the Menu',
      icon: <UtensilsCrossed size={26} className="text-[#C58B45]" />,
      description: config.features.varietyText,
      detail: 'North Indian gravies, Tandoor starters, Biryani & Indo-Chinese.'
    },
    {
      id: 'plan',
      title: 'Easy Visit Planning',
      icon: <Compass size={26} className="text-[#20201E]" />,
      description: config.features.easyPlanningText,
      detail: 'Instant route directions, one-tap phone call, and menu exploration.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-y border-[#F0E5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FAF6EF] border border-[#F0E5D7] text-[#625D56] text-xs font-semibold tracking-wider uppercase mb-3">
            Why Choose PANASIA
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#20201E] tracking-tight">
            A Convenient Place to Plan Your Next Meal.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-8 rounded-2xl bg-[#FAF6EF] border border-[#F0E5D7] hover:border-[#C58B45]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 rounded-xl bg-white border border-[#F0E5D7] flex items-center justify-center mb-6 shadow-xs">
                  {card.icon}
                </div>
                <h3 className="font-serif-display text-2xl font-bold text-[#20201E] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#625D56] leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0E5D7]/80 text-xs text-[#20201E] font-medium">
                {card.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
