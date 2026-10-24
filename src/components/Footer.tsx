import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, MessageSquare, Heart, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { RestaurantConfig } from '../types/restaurant';
import { sanitizeTelUrl } from '../utils/validation';
import { buildWhatsAppLink, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

interface FooterProps {
  config: RestaurantConfig;
  onOpenMenu: () => void;
  onOpenVerification?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenMenu, onOpenVerification }) => {
  return (
    <footer className="bg-[#20201E] text-[#FAF6EF] pt-16 pb-24 lg:pb-12 border-t border-[#C58B45]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Brief */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <Logo variant="light" size="md" />
            </div>
            <p className="text-sm text-[#FAF6EF]/70 leading-relaxed max-w-sm mb-6">
              Contemporary multi-cuisine dining in Kankarbagh, Patna. Celebrating slow-cooked North Indian curries, tandoori grills, fragrant biryanis, and crisp Indo-Chinese specialties.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={buildWhatsAppLink(config.contact.whatsappNumber, WHATSAPP_TEMPLATES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 transition-colors inline-flex items-center gap-1.5 text-xs font-semibold"
                aria-label="Connect on WhatsApp"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
              <a
                href={config.contact.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#C58B45]/20 text-[#C58B45] border border-[#C58B45]/30 transition-colors inline-flex items-center gap-1.5 text-xs font-semibold"
                aria-label="Google Business Profile"
              >
                <ExternalLink size={16} />
                <span>Google Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-serif-display text-base font-bold text-white mb-4 tracking-wide uppercase text-xs">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAF6EF]/70">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <button onClick={onOpenMenu} className="hover:text-white transition-colors cursor-pointer text-left">
                  Food Menu
                </button>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Directions */}
          <div className="lg:col-span-3">
            <h3 className="font-serif-display text-base font-bold text-white mb-4 tracking-wide uppercase text-xs">
              Location & Landmark
            </h3>
            <div className="space-y-3 text-sm text-[#FAF6EF]/70">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#B9382B] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white block font-medium">PANASIA Restaurant</strong>
                  {config.contact.address.street}, {config.contact.address.locality}, {config.contact.address.city}, {config.contact.address.state} — {config.contact.address.postalCode}
                </p>
              </div>
              <p className="text-xs text-[#C58B45]">
                Landmark: Directly opposite Rajendra Nagar Terminal entrance.
              </p>
              <div className="pt-2">
                <a
                  href={config.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#C58B45] hover:text-white underline inline-flex items-center gap-1"
                >
                  <span>Open Route in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-serif-display text-base font-bold text-white mb-4 tracking-wide uppercase text-xs">
              Hours & Telephone
            </h3>
            <div className="space-y-3 text-sm text-[#FAF6EF]/70">
              <div className="flex items-start gap-2.5">
                <Clock size={18} className="text-[#C58B45] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Daily Timings</span>
                  <span>{config.timings.displayHours}</span>
                  <span className="block text-xs text-[#FAF6EF]/50">{config.timings.daysOpen}</span>
                </div>
              </div>

              {config.verification.isPhoneVerified && config.contact.phone && (
                <div className="flex items-start gap-2.5 pt-2">
                  <Phone size={18} className="text-[#B9382B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium">Phone Support</span>
                    <a
                      href={sanitizeTelUrl(config.contact.phone)}
                      className="text-sm font-semibold text-white hover:text-[#C58B45] transition-colors"
                    >
                      {config.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Verification Status */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF6EF]/50">
          <div>
            <p>
              &copy; {new Date().getFullYear()} PANASIA Restaurant. All rights reserved.
            </p>
            <p className="text-[11px] mt-0.5">
              Opposite Rajendra Nagar Terminal, Kankarbagh, Patna, Bihar, India.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            {onOpenVerification && (
              <button
                onClick={onOpenVerification}
                className="text-[#C58B45] hover:underline flex items-center gap-1 font-medium"
              >
                <ShieldCheck size={14} />
                <span>Verification & Client Controls</span>
              </button>
            )}
            <span className="text-[#FAF6EF]/30">•</span>
            <span>Local Business Demo Concept</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
