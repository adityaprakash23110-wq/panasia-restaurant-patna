import React, { useState } from 'react';
import { X, Check, Copy, Settings, ShieldCheck, RefreshCw } from 'lucide-react';
import { RestaurantConfig } from '../types/restaurant';

interface VerificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: RestaurantConfig;
  onUpdateConfig: (updated: RestaurantConfig) => void;
}

export const VerificationDrawer: React.FC<VerificationDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleToggle = (key: keyof RestaurantConfig['verification']) => {
    onUpdateConfig({
      ...config,
      verification: {
        ...config.verification,
        [key]: !config.verification[key]
      }
    });
  };

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Client Verification Settings"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in"
    >
      <div className="bg-[#FAF6EF] w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#F0E5D7]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#F0E5D7]">
            <div className="flex items-center gap-2 text-[#20201E]">
              <div className="p-2 rounded-lg bg-[#20201E] text-[#C58B45]">
                <Settings size={18} />
              </div>
              <div>
                <h3 className="font-serif-display text-lg font-bold">Client Verification Panel</h3>
                <p className="text-[11px] text-[#625D56]">Demo configuration & proof controls</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#625D56] hover:text-[#20201E] hover:bg-[#F0E5D7]"
              aria-label="Close settings panel"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-white border border-[#F0E5D7] text-xs text-[#625D56] leading-relaxed">
            <span className="font-bold text-[#20201E] block mb-0.5">Presenter Mode:</span>
            Demonstrate to the PANASIA owner how unverified items (phone numbers, ratings, or hours) can be toggled on/off instantly without breaking site structure or layout.
          </div>

          {/* Verification Toggles */}
          <div className="mt-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#20201E]">
              Verification Toggles
            </h4>

            {/* Phone Number */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#F0E5D7]">
              <div>
                <span className="text-sm font-semibold text-[#20201E] block">Phone Verification</span>
                <span className="text-xs text-[#625D56]">
                  {config.verification.isPhoneVerified ? 'Visible across header, CTA & bar' : 'Hidden from public CTAs'}
                </span>
              </div>
              <button
                onClick={() => handleToggle('isPhoneVerified')}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                  config.verification.isPhoneVerified ? 'bg-[#B9382B]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                    config.verification.isPhoneVerified ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#F0E5D7]">
              <div>
                <span className="text-sm font-semibold text-[#20201E] block">Opening Hours</span>
                <span className="text-xs text-[#625D56]">
                  {config.verification.isHoursVerified ? 'Marked confirmed (11:30 AM – 1 AM)' : 'Marked pending verification'}
                </span>
              </div>
              <button
                onClick={() => handleToggle('isHoursVerified')}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                  config.verification.isHoursVerified ? 'bg-[#B9382B]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                    config.verification.isHoursVerified ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Rating Verification */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#F0E5D7]">
              <div>
                <span className="text-sm font-semibold text-[#20201E] block">Google Rating Display</span>
                <span className="text-xs text-[#625D56]">
                  {config.verification.isRatingVerified ? 'Displays 4.3★ badge' : 'Hides aggregate badge'}
                </span>
              </div>
              <button
                onClick={() => handleToggle('isRatingVerified')}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                  config.verification.isRatingVerified ? 'bg-[#B9382B]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                    config.verification.isRatingVerified ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Announcement Bar */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#F0E5D7]">
              <div>
                <span className="text-sm font-semibold text-[#20201E] block">Announcement Top Bar</span>
                <span className="text-xs text-[#625D56]">
                  {config.verification.isAnnouncementActive ? 'Active in header' : 'Hidden'}
                </span>
              </div>
              <button
                onClick={() => handleToggle('isAnnouncementActive')}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                  config.verification.isAnnouncementActive ? 'bg-[#B9382B]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                    config.verification.isAnnouncementActive ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Quick Config Overview */}
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#20201E] mb-2">
              Central File Status
            </h4>
            <div className="p-3 bg-[#20201E] text-white rounded-xl text-xs space-y-1 font-mono">
              <p className="text-emerald-400">File: src/config/restaurantConfig.ts</p>
              <p className="text-[#C58B45]">Name: {config.business.name}</p>
              <p className="text-gray-300">Postal: {config.contact.address.postalCode}</p>
              <p className="text-gray-300">Items: {config.menuItems.length} curated dishes</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-[#F0E5D7] space-y-3">
          <button
            onClick={handleCopyConfig}
            className="w-full py-2.5 px-4 rounded-lg bg-[#20201E] hover:bg-black text-[#FAF6EF] text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-400" />
                <span>JSON Configuration Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-[#C58B45]" />
                <span>Copy Current Config JSON</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-lg bg-[#F0E5D7] hover:bg-[#FAF6EF] text-[#20201E] text-xs font-semibold cursor-pointer"
          >
            Done Inspecting
          </button>
        </div>
      </div>
    </div>
  );
};
