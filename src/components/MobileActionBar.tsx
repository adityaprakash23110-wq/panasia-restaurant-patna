import React from 'react';
import { Phone, Navigation, Utensils } from 'lucide-react';
import { RestaurantConfig } from '../types/restaurant';
import { sanitizeTelUrl } from '../utils/validation';

interface MobileActionBarProps {
  config: RestaurantConfig;
  onOpenMenu: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ config, onOpenMenu }) => {
  const showCall = config.verification.isPhoneVerified && Boolean(config.contact.phone);

  return (
    <div
      role="region"
      aria-label="Quick Mobile Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#20201E]/95 backdrop-blur-md border-t border-[#C58B45]/30 p-2.5 px-4 shadow-2xl animate-slide-up"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Menu Quick Button */}
        <button
          onClick={onOpenMenu}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#FAF6EF] text-[#20201E] font-medium text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-98 transition-transform"
        >
          <Utensils size={15} className="text-[#B9382B]" />
          <span>Menu</span>
        </button>

        {/* Call Button (if verified) */}
        {showCall && (
          <a
            href={sanitizeTelUrl(config.contact.phone)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#B9382B] text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-98 transition-transform"
          >
            <Phone size={15} />
            <span>Call</span>
          </a>
        )}

        {/* Directions Button */}
        <a
          href={config.contact.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#C58B45] text-[#20201E] font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-98 transition-transform"
        >
          <Navigation size={15} />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
};
