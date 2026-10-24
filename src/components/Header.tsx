import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ChevronRight, Sparkles, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { RestaurantConfig } from '../types/restaurant';
import { sanitizeTelUrl } from '../utils/validation';

interface HeaderProps {
  config: RestaurantConfig;
  onOpenMenu: () => void;
  onOpenVerification?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onOpenMenu, onOpenVerification }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu', onClick: onOpenMenu },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  const showAnnouncement =
    config.verification.isAnnouncementActive &&
    config.announcement.text &&
    !announcementDismissed;

  return (
    <>
      {/* SECTION A — ANNOUNCEMENT BAR */}
      {showAnnouncement && (
        <aside
          aria-label="Restaurant Announcement"
          className="bg-[#20201E] text-[#FAF6EF] text-xs py-2 px-4 border-b border-[#C58B45]/30 relative z-50 transition-all duration-300"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 mx-auto sm:mx-0">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#B9382B] text-white text-[10px] font-semibold uppercase tracking-wider">
                <Sparkles size={11} className="text-[#FAF6EF]" />
                Notice
              </span>
              <p className="text-[#FAF6EF]/90 line-clamp-1 sm:line-clamp-none font-medium">
                {config.announcement.text}
              </p>
              {config.announcement.linkUrl && (
                <button
                  onClick={onOpenMenu}
                  className="hidden md:inline-flex items-center gap-1 text-[#C58B45] hover:text-[#FAF6EF] underline font-semibold ml-2 text-xs"
                >
                  {config.announcement.linkText || 'View Details'} &rarr;
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {onOpenVerification && (
                <button
                  onClick={onOpenVerification}
                  className="text-[11px] text-[#C58B45] hover:underline hidden lg:inline-block font-medium"
                  title="Open Client Verification Settings"
                >
                  ⚙️ Client Settings
                </button>
              )}
              <button
                onClick={() => setAnnouncementDismissed(true)}
                className="text-[#FAF6EF]/60 hover:text-white p-1 rounded-sm focus:outline-none"
                aria-label="Dismiss announcement"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* SECTION B — STICKY NAVIGATION */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6EF]/95 backdrop-blur-md shadow-md py-3 border-b border-[#F0E5D7]'
            : 'bg-[#FAF6EF] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-[#B9382B] rounded">
              <Logo variant="dark" size="md" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className="text-sm font-medium text-[#242321] hover:text-[#B9382B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B9382B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Quick Actions (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              {config.verification.isPhoneVerified && config.contact.phone && (
                <a
                  href={sanitizeTelUrl(config.contact.phone)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#20201E] hover:text-[#B9382B] transition-colors py-2 px-3 rounded-md hover:bg-[#F0E5D7]/50"
                  title="Call PANASIA Restaurant"
                >
                  <Phone size={14} className="text-[#B9382B]" />
                  <span>{config.contact.phoneDisplay}</span>
                </a>
              )}

              <button
                onClick={onOpenMenu}
                className="bg-[#B9382B] hover:bg-[#922B22] text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                View Menu
              </button>
            </div>

            {/* Mobile Actions: Call Button + Hamburger */}
            <div className="flex items-center space-x-2 lg:hidden">
              {config.verification.isPhoneVerified && config.contact.phone && (
                <a
                  href={sanitizeTelUrl(config.contact.phone)}
                  className="p-2 rounded-lg bg-[#F0E5D7] text-[#B9382B] hover:bg-[#B9382B] hover:text-white transition-colors"
                  aria-label="Call restaurant"
                >
                  <Phone size={18} />
                </a>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#20201E] hover:bg-[#F0E5D7] focus:outline-none focus:ring-2 focus:ring-[#B9382B]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/60 z-50 animate-fade-in backdrop-blur-sm flex justify-end">
            <div className="bg-[#FAF6EF] w-full max-w-sm h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F0E5D7]">
                  <span className="font-serif-display text-lg font-bold text-[#20201E]">Navigation</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-md text-[#625D56] hover:text-[#20201E]"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="mt-4 flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        if (link.onClick) {
                          e.preventDefault();
                          link.onClick();
                        }
                      }}
                      className="flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium text-[#242321] hover:bg-[#F0E5D7] hover:text-[#B9382B] transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronRight size={16} className="text-[#625D56]" />
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-[#F0E5D7]">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenMenu();
                    }}
                    className="w-full bg-[#B9382B] hover:bg-[#922B22] text-white py-3 rounded-lg font-medium text-center shadow transition-all block mb-3"
                  >
                    View Full Menu
                  </button>
                  <a
                    href={config.contact.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#20201E] hover:bg-black text-[#FAF6EF] py-2.5 rounded-lg font-medium text-center text-sm flex items-center justify-center gap-2"
                  >
                    <MapPin size={16} className="text-[#C58B45]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Drawer Footer Info */}
              <div className="pt-6 border-t border-[#F0E5D7] text-xs text-[#625D56] space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-[#B9382B] shrink-0 mt-0.5" />
                  <span>{config.contact.address.fullFormatted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#C58B45] shrink-0" />
                  <span>{config.timings.displayHours} (Daily)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
