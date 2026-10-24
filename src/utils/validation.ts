import { EnquiryFormData, FormErrors } from '../types/restaurant';

/**
 * Validates an Indian or international phone number
 * Accepts formats: +91 95702 36381, 9570236381, 09570236381, +919570236381
 */
export function isValidPhoneNumber(phone: string): boolean {
  if (!phone) return false;
  // Strip spaces, dashes, parentheses
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // Matches 10 digit Indian number or +91 followed by 10 digits, or standard international format with 7-15 digits
  const indianPattern = /^(\+91|0)?[6-9]\d{9}$/;
  const generalPattern = /^\+?[0-9]{7,15}$/;
  return indianPattern.test(cleaned) || generalPattern.test(cleaned);
}

/**
 * Validates email address format
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email.trim());
}

/**
 * Validates enquiry form submission data
 */
export function validateEnquiryForm(data: EnquiryFormData): { isValid: boolean; errors: FormErrors } {
  const errors: FormErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  if (!data.contactValue || data.contactValue.trim().length === 0) {
    errors.contactValue = data.contactMethod === 'email' ? 'Please provide a valid email address.' : 'Please provide a valid phone number.';
  } else if (data.contactMethod === 'email') {
    if (!isValidEmail(data.contactValue)) {
      errors.contactValue = 'Please enter a valid email address (e.g. name@example.com).';
    }
  } else {
    if (!isValidPhoneNumber(data.contactValue)) {
      errors.contactValue = 'Please enter a valid 10-digit mobile number (e.g. +91 95702 36381).';
    }
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = 'Please provide brief details regarding your enquiry (at least 5 characters).';
  }

  if (!data.enquiryType) {
    errors.enquiryType = 'Please select the type of enquiry.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Formats a phone number for direct tel: links
 */
export function sanitizeTelUrl(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, '')}`;
}
