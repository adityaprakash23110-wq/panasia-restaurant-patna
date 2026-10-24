import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { RestaurantConfig } from '../types/restaurant';

interface FAQSectionProps {
  config: RestaurantConfig;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ config }) => {
  // Default open first FAQ item
  const [openId, setOpenId] = useState<string | null>(config.faqs[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF6EF] border-t border-[#F0E5D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F0E5D7] text-[#B9382B] text-xs font-semibold tracking-wider uppercase mb-3">
            Helpful Information
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#20201E] tracking-tight mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-base sm:text-lg text-[#625D56] leading-relaxed">
            Quick answers about dining, menus, timings, and reaching PANASIA Restaurant.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {config.faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-[#C58B45]/40 shadow-md'
                    : 'bg-white/80 hover:bg-white border-[#F0E5D7] shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9382B] rounded-2xl cursor-pointer"
                >
                  <span className="font-serif-display text-lg sm:text-xl font-bold text-[#20201E] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#B9382B] text-white rotate-180'
                        : 'bg-[#FAF6EF] text-[#20201E]'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#625D56] leading-relaxed border-t border-[#F0E5D7]/50 mt-1 animate-fade-in"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#F0E5D7] text-center max-w-xl mx-auto shadow-xs">
          <HelpCircle size={24} className="text-[#B9382B] mx-auto mb-2" />
          <h4 className="font-serif-display text-base font-bold text-[#20201E]">
            Have a different enquiry?
          </h4>
          <p className="text-xs text-[#625D56] mt-1 mb-4">
            Feel free to give us a direct call or drop a message via our contact form below.
          </p>
          <a
            href="#contact"
            className="inline-block px-5 py-2.5 rounded-lg bg-[#20201E] hover:bg-black text-[#FAF6EF] text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Contact PANASIA
          </a>
        </div>
      </div>
    </section>
  );
};
