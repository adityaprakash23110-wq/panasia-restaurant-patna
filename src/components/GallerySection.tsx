import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { RestaurantConfig, GalleryItem } from '../types/restaurant';

interface GallerySectionProps {
  config: RestaurantConfig;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ config }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'food' | 'interior'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = config.galleryItems.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'food') return item.category === 'food' || item.category === 'specials';
    if (selectedCategory === 'interior') return item.category === 'interior' || item.category === 'ambience';
    return true;
  });

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-t border-[#F0E5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FAF6EF] text-[#B9382B] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#F0E5D7]">
              Visual Showcase
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#20201E] tracking-tight">
              A Closer Look at PANASIA.
            </h2>
            <p className="text-base text-[#625D56] mt-2 max-w-xl">
              From fresh tandoori specialties to aromatic biryanis and comfortable dining seating.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#FAF6EF] p-1.5 rounded-xl border border-[#F0E5D7] self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#20201E] text-white shadow-xs'
                  : 'text-[#625D56] hover:text-[#20201E]'
              }`}
            >
              All Images
            </button>
            <button
              onClick={() => setSelectedCategory('food')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'food'
                  ? 'bg-[#20201E] text-white shadow-xs'
                  : 'text-[#625D56] hover:text-[#20201E]'
              }`}
            >
              Food & Dishes
            </button>
            <button
              onClick={() => setSelectedCategory('interior')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'interior'
                  ? 'bg-[#20201E] text-white shadow-xs'
                  : 'text-[#625D56] hover:text-[#20201E]'
              }`}
            >
              Dining Space
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#FAF6EF] border border-[#F0E5D7] cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] uppercase tracking-wider text-[#C58B45] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif-display text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                {item.caption && <p className="text-xs text-white/80 line-clamp-2">{item.caption}</p>}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white">
                  <ZoomIn size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-[#625D56] mt-8">
          * Representative high-definition gallery for presentation. Easily replaceable with official photography upon restaurant onboarding.
        </p>

        {/* Accessible Lightbox Modal */}
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex(null);
              }}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label="Close image viewer"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex(
                  (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
                );
              }}
              className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Lightbox Content Container */}
            <div
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].altText}
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
              <div className="mt-4 text-center text-white max-w-xl">
                <h4 className="font-serif-display text-xl font-bold">
                  {filteredItems[activeLightboxIndex].title}
                </h4>
                {filteredItems[activeLightboxIndex].caption && (
                  <p className="text-sm text-white/80 mt-1">
                    {filteredItems[activeLightboxIndex].caption}
                  </p>
                )}
                <span className="text-xs text-white/50 mt-2 block">
                  Image {activeLightboxIndex + 1} of {filteredItems.length} • Use Arrow Keys to navigate
                </span>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
              }}
              className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
