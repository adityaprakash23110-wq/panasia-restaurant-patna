/**
 * Creates a formatted, URI-encoded WhatsApp link
 * @param phone Clean phone number with country code (e.g. 919570236381)
 * @param message Pre-filled message string
 */
export function buildWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^\d]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Standard pre-filled messages for PANASIA Restaurant
 */
export const WHATSAPP_TEMPLATES = {
  general: 'Hello! I would like to know more about the menu and dining at PANASIA Restaurant, Patna.',
  dishEnquiry: (dishName: string, price: number) =>
    `Hello PANASIA Restaurant, I am interested in ordering/enquiring about '${dishName}' (₹${price}). Can you confirm availability?`,
  tableReservation: (guests?: string, date?: string) =>
    `Hello! I'd like to enquire about table reservations at PANASIA Restaurant${guests ? ` for ${guests} guests` : ''}${date ? ` on ${date}` : ''}.`,
  partyEnquiry: 'Hello PANASIA Restaurant! I would like to enquire about group dining / celebration arrangements.'
};
