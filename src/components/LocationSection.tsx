import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Train, ShieldCheck } from 'lucide-react';
import { RestaurantConfig } from '../types/restaurant';
import { sanitizeTelUrl } from '../utils/validation';

interface LocationSectionProps {
  config: RestaurantConfig;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ config }) => {
  return (
    <section id="location" className="py-16 md:py-24 bg-white border-t border-[#F0E5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FAF6EF] text-[#B9382B] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#F0E5D7]">
            Visit Us
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#20201E] tracking-tight mb-4">
            Find Us in Kankarbagh.
          </h2>
          <p className="text-base sm:text-lg text-[#625D56] leading-relaxed">
            Conveniently located right opposite Rajendra Nagar Terminal, easily accessible from across Patna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Details & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAF6EF] p-8 rounded-2xl border border-[#F0E5D7]">
            <div className="space-y-6">
              {/* Address Card */}
              <div>
                <div className="flex items-center gap-2 text-[#B9382B] text-xs font-semibold uppercase tracking-wider mb-2">
                  <MapPin size={16} />
                  <span>Restaurant Address</span>
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#20201E] mb-1">
                  PANASIA Restaurant
                </h3>
                <p className="text-sm text-[#242321] leading-relaxed">
                  {config.contact.address.street}
                </p>
                <p className="text-sm text-[#625D56] mt-0.5">
                  {config.contact.address.locality}, {config.contact.address.city}, {config.contact.address.state} — {config.contact.address.postalCode}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#F0E5D7] text-xs font-medium text-[#20201E]">
                  <Train size={14} className="text-[#C58B45]" />
                  <span>Landmark: {config.contact.address.landmark}</span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-[#F0E5D7]">
                <div className="flex items-center gap-2 text-[#C58B45] text-xs font-semibold uppercase tracking-wider mb-2">
                  <Clock size={16} />
                  <span>Timings & Days</span>
                </div>
                <p className="font-serif-display text-lg font-bold text-[#20201E]">
                  {config.timings.displayHours}
                </p>
                <p className="text-xs text-[#625D56] mt-0.5">{config.timings.daysOpen}</p>
              </div>

              {/* Contact Phone */}
              {config.verification.isPhoneVerified && config.contact.phone && (
                <div className="pt-4 border-t border-[#F0E5D7]">
                  <div className="flex items-center gap-2 text-[#20201E] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Phone size={16} className="text-[#B9382B]" />
                    <span>Direct Telephone</span>
                  </div>
                  <a
                    href={sanitizeTelUrl(config.contact.phone)}
                    className="font-serif-display text-xl font-bold text-[#B9382B] hover:underline block"
                  >
                    {config.contact.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#625D56] mt-0.5">
                    Call for dining enquiries, takeaway parcels, or large group reservations
                  </p>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="pt-8 mt-6 border-t border-[#F0E5D7] flex flex-col sm:flex-row gap-3">
              <a
                href={config.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#B9382B] hover:bg-[#922B22] text-white text-sm font-medium shadow-xs transition-colors"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>

              {config.verification.isPhoneVerified && config.contact.phone && (
                <a
                  href={sanitizeTelUrl(config.contact.phone)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#20201E] hover:bg-black text-[#FAF6EF] text-sm font-medium transition-colors"
                >
                  <Phone size={16} className="text-[#C58B45]" />
                  <span>Call Restaurant</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Clean Fallback */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border border-[#F0E5D7] shadow-sm bg-[#FAF6EF] min-h-[380px]">
            <div className="relative w-full h-full min-h-[380px] flex-1">
              {/* Responsive Google Maps Iframe */}
              <iframe
                title="PANASIA Restaurant Patna Location Map"
                src={config.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Maps Overlay Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#F0E5D7] shadow-lg flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-[#20201E] block">Opp. Rajendra Nagar Terminal</span>
                  <span className="text-[#625D56]">Munna Chak, Kankarbagh • Patna 800020</span>
                </div>
                <a
                  href={config.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#20201E] text-white hover:bg-[#B9382B] transition-colors font-medium shrink-0"
                >
                  <span>Open in Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
