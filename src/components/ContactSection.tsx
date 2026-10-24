import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle, AlertCircle, RefreshCw, Mail } from 'lucide-react';
import { RestaurantConfig, EnquiryFormData, FormErrors } from '../types/restaurant';
import { validateEnquiryForm } from '../utils/validation';
import { buildWhatsAppLink, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

interface ContactSectionProps {
  config: RestaurantConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    contactMethod: 'phone',
    contactValue: '',
    enquiryType: 'dining',
    guestsCount: '',
    preferredDate: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateEnquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      contactMethod: 'phone',
      contactValue: '',
      enquiryType: 'dining',
      guestsCount: '',
      preferredDate: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
    setSubmittedData(null);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Website Enquiry - PANASIA Restaurant*\n*Name:* ${formData.fullName}\n*Contact:* ${formData.contactValue}\n*Enquiry Type:* ${formData.enquiryType}\n*Details:* ${formData.message}`;
    const url = buildWhatsAppLink(config.contact.whatsappNumber, text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-[#F0E5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Alternative Channels */}
          <div className="lg:col-span-5">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FAF6EF] text-[#B9382B] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#F0E5D7]">
              Get in Touch
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#20201E] tracking-tight mb-4">
              Send an Enquiry.
            </h2>
            <p className="text-base text-[#625D56] leading-relaxed mb-8">
              Planning a family meal, inquiring about catering, or have a question for PANASIA Restaurant? Drop us a note and we will assist promptly.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-4 mb-8">
              {config.verification.isPhoneVerified && config.contact.phone && (
                <div className="p-4 rounded-xl bg-[#FAF6EF] border border-[#F0E5D7] flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#B9382B] text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-[#625D56] font-semibold block">Phone Call</span>
                    <a
                      href={`tel:${config.contact.phone.replace(/[^\d+]/g, '')}`}
                      className="font-serif-display text-lg font-bold text-[#20201E] hover:text-[#B9382B]"
                    >
                      {config.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              )}

              <div className="p-4 rounded-xl bg-[#FAF6EF] border border-[#F0E5D7] flex items-center gap-4">
                <div className="p-3 rounded-lg bg-emerald-600 text-white">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase text-[#625D56] font-semibold block">WhatsApp Chat</span>
                  <a
                    href={buildWhatsAppLink(config.contact.whatsappNumber, WHATSAPP_TEMPLATES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif-display text-lg font-bold text-[#20201E] hover:text-emerald-700"
                  >
                    Chat on WhatsApp &rarr;
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF6EF] border border-[#F0E5D7] flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#C58B45] text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase text-[#625D56] font-semibold block">Email</span>
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="font-serif-display text-base font-bold text-[#20201E] hover:text-[#B9382B]"
                  >
                    {config.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Client Presentation Note */}
            <div className="p-4 rounded-xl bg-[#FAF6EF]/60 border border-dashed border-[#C58B45]/50 text-xs text-[#625D56]">
              <span className="font-bold text-[#20201E] block mb-1">Presentation Ready:</span>
              This form includes real-time client validation. Upon restaurant approval, submissions can route directly to the manager's email, WhatsApp API, or restaurant POS.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#FAF6EF] p-6 sm:p-10 rounded-2xl border border-[#F0E5D7] shadow-sm">
            {isSuccess ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-serif-display text-2xl font-bold text-[#20201E] mb-2">
                  Enquiry Received!
                </h3>
                <p className="text-sm text-[#625D56] max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-[#20201E]">{submittedData?.fullName}</strong>. Your enquiry for{' '}
                  <strong className="text-[#20201E]">{submittedData?.enquiryType}</strong> has been logged in demo mode.
                </p>

                {/* Instant WhatsApp Hand-off Option */}
                <div className="p-5 bg-white rounded-xl border border-[#F0E5D7] max-w-md mx-auto mb-6 text-left">
                  <span className="text-xs font-semibold text-[#20201E] block mb-1">
                    Instant WhatsApp Dispatch (Optional):
                  </span>
                  <p className="text-xs text-[#625D56] mb-3">
                    You can also push these details straight to the restaurant's WhatsApp with one tap:
                  </p>
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <MessageSquare size={16} />
                    <span>Send this Enquiry to Restaurant WhatsApp</span>
                  </button>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-sm text-[#B9382B] hover:underline font-semibold cursor-pointer"
                >
                  <RefreshCw size={14} />
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#20201E] mb-1.5">
                    Full Name <span className="text-[#B9382B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#242321] placeholder:text-gray-400 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-[#F0E5D7] focus:border-[#B9382B]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Contact Method Selection & Input */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-4">
                    <label htmlFor="contactMethod" className="block text-xs font-semibold uppercase tracking-wider text-[#20201E] mb-1.5">
                      Contact Via
                    </label>
                    <select
                      id="contactMethod"
                      value={formData.contactMethod}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactMethod: e.target.value as 'phone' | 'email',
                          contactValue: ''
                        })
                      }
                      className="w-full px-3 py-3 rounded-lg bg-white border border-[#F0E5D7] text-sm text-[#242321] focus:outline-none focus:border-[#B9382B]"
                    >
                      <option value="phone">Mobile Phone</option>
                      <option value="email">Email Address</option>
                    </select>
                  </div>

                  <div className="sm:col-span-8">
                    <label htmlFor="contactValue" className="block text-xs font-semibold uppercase tracking-wider text-[#20201E] mb-1.5">
                      {formData.contactMethod === 'phone' ? 'Phone Number' : 'Email Address'}{' '}
                      <span className="text-[#B9382B]">*</span>
                    </label>
                    <input
                      type={formData.contactMethod === 'phone' ? 'tel' : 'email'}
                      id="contactValue"
                      name="contactValue"
                      value={formData.contactValue}
                      onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                      placeholder={
                        formData.contactMethod === 'phone' ? '+91 95702 36381' : 'name@example.com'
                      }
                      className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#242321] placeholder:text-gray-400 focus:outline-none transition-colors ${
                        errors.contactValue
                          ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                          : 'border-[#F0E5D7] focus:border-[#B9382B]'
                      }`}
                    />
                    {errors.contactValue && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.contactValue}
                      </p>
                    )}
                  </div>
                </div>

                {/* Enquiry Type & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="enquiryType" className="block text-xs font-semibold uppercase tracking-wider text-[#20201E] mb-1.5">
                      Enquiry Purpose <span className="text-[#B9382B]">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          enquiryType: e.target.value as any
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white border border-[#F0E5D7] text-sm text-[#242321] focus:outline-none focus:border-[#B9382B]"
                    >
                      <option value="dining">Dining & Menu Query</option>
                      <option value="table-reservation">Table Reservation</option>
                      <option value="banquet-event">Group / Family Gathering</option>
                      <option value="takeaway">Takeaway Parcel Order</option>
                      <option value="feedback">Guest Feedback</option>
                      <option value="other">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="guestsCount" className="block text-xs font-semibold uppercase tracking-wider text-[#20201E] mb-1.5">
                      Estimated Guests (Optional)
                    </label>
                    <input
                      type="text"
                      id="guestsCount"
                      value={formData.guestsCount}
                      onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                      placeholder="e.g. 2, 4, 10+ people"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-[#F0E5D7] text-sm text-[#242321] placeholder:text-gray-400 focus:outline-none focus:border-[#B9382B]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#20201E] mb-1.5">
                    Your Message / Special Requests <span className="text-[#B9382B]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your timing, food preferences, or specific questions..."
                    className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#242321] placeholder:text-gray-400 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-[#F0E5D7] focus:border-[#B9382B]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#B9382B] hover:bg-[#922B22] text-white font-medium text-base shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit Restaurant Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
