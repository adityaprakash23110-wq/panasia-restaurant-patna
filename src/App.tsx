/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PANASIA_CONFIG } from './config/restaurantConfig';
import { RestaurantConfig } from './types/restaurant';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickInfoStrip } from './components/QuickInfoStrip';
import { MenuPreview } from './components/MenuPreview';
import { WhyPanasia } from './components/WhyPanasia';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MenuModal } from './components/MenuModal';
import { MobileActionBar } from './components/MobileActionBar';
import { VerificationDrawer } from './components/VerificationDrawer';
import { SeoStructuredData } from './components/SeoStructuredData';

export default function App() {
  const [config, setConfig] = useState<RestaurantConfig>(PANASIA_CONFIG);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [initialMenuCategory, setInitialMenuCategory] = useState<string | undefined>(undefined);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);

  const handleOpenMenu = (categoryId?: string) => {
    setInitialMenuCategory(categoryId);
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setInitialMenuCategory(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#242321] selection:bg-[#B9382B] selection:text-white pb-16 lg:pb-0">
      {/* Schema.org Structured Data */}
      <SeoStructuredData config={config} />

      {/* Header & Sticky Navigation */}
      <Header
        config={config}
        onOpenMenu={() => handleOpenMenu()}
        onOpenVerification={() => setIsVerificationOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section C: Hero */}
        <Hero
          config={config}
          onOpenMenu={() => handleOpenMenu()}
        />

        {/* Section D: Quick Information Strip */}
        <QuickInfoStrip config={config} />

        {/* Section E: Menu Preview */}
        <MenuPreview
          config={config}
          onOpenMenuWithCategory={(catId) => handleOpenMenu(catId)}
          onOpenFullMenu={() => handleOpenMenu()}
        />

        {/* Section F: Why PANASIA */}
        <WhyPanasia config={config} />

        {/* Section G: About PANASIA */}
        <AboutSection
          config={config}
          onOpenMenu={() => handleOpenMenu()}
        />

        {/* Section H: Photo & Food Gallery */}
        <GallerySection config={config} />

        {/* Section I: Customer Reviews */}
        <ReviewsSection config={config} />

        {/* Section J: Location & Directions */}
        <LocationSection config={config} />

        {/* Section K: FAQ Accordion */}
        <FAQSection config={config} />

        {/* Contact Form & Table Enquiries */}
        <ContactSection config={config} />

        {/* Section L: Final Call to Action */}
        <FinalCTA
          config={config}
          onOpenMenu={() => handleOpenMenu()}
        />
      </main>

      {/* Section M: Footer */}
      <Footer
        config={config}
        onOpenMenu={() => handleOpenMenu()}
        onOpenVerification={() => setIsVerificationOpen(true)}
      />

      {/* Full Interactive Menu Modal / View */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        config={config}
        initialCategory={initialMenuCategory}
      />

      {/* Sticky Bottom Actions Bar on Mobile */}
      <MobileActionBar
        config={config}
        onOpenMenu={() => handleOpenMenu()}
      />

      {/* Owner / Presenter Verification Settings Drawer */}
      <VerificationDrawer
        isOpen={isVerificationOpen}
        onClose={() => setIsVerificationOpen(false)}
        config={config}
        onUpdateConfig={setConfig}
      />
    </div>
  );
}
