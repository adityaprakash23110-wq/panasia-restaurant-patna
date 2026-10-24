import React, { useState, useMemo } from 'react';
import { X, Search, Utensils, MessageSquare, Filter, AlertCircle, Flame, Check } from 'lucide-react';
import { RestaurantConfig, DietaryType } from '../types/restaurant';
import { filterMenuItems, formatINR } from '../utils/menuUtils';
import { buildWhatsAppLink, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: RestaurantConfig;
  initialCategory?: string;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  config,
  initialCategory
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedDietary, setSelectedDietary] = useState<'all' | DietaryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | string>('all');

  const filteredDishes = useMemo(() => {
    return filterMenuItems(config.menuItems, {
      category: selectedCategory === 'all' ? undefined : selectedCategory,
      dietary: selectedDietary,
      searchQuery: searchQuery
    });
  }, [config.menuItems, selectedCategory, selectedDietary, searchQuery]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full Restaurant Menu"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 md:p-6 animate-fade-in"
    >
      <div className="bg-[#FAF6EF] w-full max-w-5xl h-[95vh] sm:h-[90vh] rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#F0E5D7]">
        {/* Modal Top Bar */}
        <div className="bg-[#20201E] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#B9382B] text-white">
              <Utensils size={20} />
            </div>
            <div>
              <h2 className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight">
                PANASIA Restaurant Menu
              </h2>
              <p className="text-xs text-[#C58B45]">
                North Indian Curries, Indo-Chinese & Biryani Specialities
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close menu window"
          >
            <X size={22} />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white px-4 sm:px-6 py-4 border-b border-[#F0E5D7] shrink-0 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search dishes (e.g. Biryani, Paneer, Noodles, Chicken)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF6EF] border border-[#F0E5D7] text-sm text-[#242321] placeholder:text-gray-400 focus:outline-none focus:border-[#B9382B]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter (All / Veg / Non-Veg) */}
            <div className="flex items-center gap-1.5 bg-[#FAF6EF] p-1 rounded-xl border border-[#F0E5D7] shrink-0">
              <button
                onClick={() => setSelectedDietary('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedDietary === 'all'
                    ? 'bg-[#20201E] text-white'
                    : 'text-[#625D56] hover:text-[#20201E]'
                }`}
              >
                All Items
              </button>
              <button
                onClick={() => setSelectedDietary('veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  selectedDietary === 'veg'
                    ? 'bg-emerald-700 text-white'
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Pure Veg
              </button>
              <button
                onClick={() => setSelectedDietary('non-veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  selectedDietary === 'non-veg'
                    ? 'bg-[#B9382B] text-white'
                    : 'text-[#B9382B] hover:bg-red-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#B9382B]" />
                Non-Veg
              </button>
            </div>
          </div>

          {/* Category Pills Slider */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#B9382B] text-white shadow-xs'
                  : 'bg-[#FAF6EF] text-[#625D56] hover:bg-[#F0E5D7]'
              }`}
            >
              All Categories ({config.menuItems.length})
            </button>
            {config.menuCategories.map((cat) => {
              const count = config.menuItems.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#B9382B] text-white shadow-xs'
                      : 'bg-[#FAF6EF] text-[#625D56] hover:bg-[#F0E5D7]'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Dishes List / Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF6EF]">
          {filteredDishes.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#F0E5D7] flex items-center justify-center mx-auto mb-4 text-[#B9382B]">
                <Utensils size={28} />
              </div>
              <h3 className="font-serif-display text-xl font-bold text-[#20201E] mb-1">
                No matching dishes found
              </h3>
              <p className="text-sm text-[#625D56] mb-4">
                Try clearing your search query or switching dietary filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDietary('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-lg bg-[#20201E] text-white text-xs font-medium"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#F0E5D7] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="flex gap-4">
                    {/* Dish image thumbnail */}
                    {dish.image && (
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-[#FAF6EF] border border-[#F0E5D7]">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Dish Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          {/* Veg/Non-Veg Badge */}
                          <span
                            className={`w-3.5 h-3.5 border flex items-center justify-center rounded-xs shrink-0 ${
                              dish.dietary === 'veg'
                                ? 'border-emerald-600'
                                : 'border-[#B9382B]'
                            }`}
                            title={dish.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                dish.dietary === 'veg' ? 'bg-emerald-600' : 'bg-[#B9382B]'
                              }`}
                            />
                          </span>

                          <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#20201E] leading-snug">
                            {dish.name}
                          </h3>
                        </div>

                        {/* Price */}
                        <div className="text-base sm:text-lg font-bold text-[#B9382B] whitespace-nowrap flex items-baseline gap-0.5">
                          <span className="font-sans font-bold text-sm">₹</span>
                          <span className="font-serif-display">{dish.priceINR}</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#625D56] leading-relaxed line-clamp-2 mb-2">
                        {dish.description}
                      </p>

                      {/* Tags (Spicy, Popular, Allergens) */}
                      <div className="flex items-center gap-2 flex-wrap text-[10px]">
                        {dish.isPopular && (
                          <span className="bg-[#FAF6EF] text-[#C58B45] font-semibold px-2 py-0.5 rounded border border-[#C58B45]/30">
                            ★ Popular
                          </span>
                        )}
                        {dish.isChefSpecial && (
                          <span className="bg-[#F0E5D7] text-[#B9382B] font-semibold px-2 py-0.5 rounded">
                            Chef's Special
                          </span>
                        )}
                        {dish.spiceLevel === 'spicy' && (
                          <span className="flex items-center gap-0.5 text-red-700 font-medium">
                            <Flame size={11} /> Spicy
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card bottom bar: WhatsApp order / enquiry */}
                  <div className="mt-3 pt-3 border-t border-[#F0E5D7] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#625D56]">
                      {dish.allergens && dish.allergens.length > 0 ? `Contains: ${dish.allergens.join(', ')}` : 'Freshly made to order'}
                    </span>

                    <a
                      href={buildWhatsAppLink(
                        config.contact.whatsappNumber,
                        WHATSAPP_TEMPLATES.dishEnquiry(dish.name, dish.priceINR)
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold"
                    >
                      <MessageSquare size={13} />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-white px-6 py-3.5 border-t border-[#F0E5D7] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#625D56] shrink-0">
          <p className="text-center sm:text-left">
            * Prices and availability are subject to restaurant confirmation at the counter.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#FAF6EF] hover:bg-[#F0E5D7] text-[#20201E] font-medium"
            >
              Close Menu
            </button>
            <a
              href={`tel:${config.contact.phone.replace(/[^\d+]/g, '')}`}
              className="px-4 py-2 rounded-lg bg-[#B9382B] hover:bg-[#922B22] text-white font-medium shadow-xs"
            >
              Call to Order: {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
