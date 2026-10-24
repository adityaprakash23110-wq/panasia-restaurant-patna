import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidPhoneNumber, isValidEmail, validateEnquiryForm, sanitizeTelUrl } from './validation';
import { filterMenuItems, formatINR, calculateMenuStats } from './menuUtils';
import { buildWhatsAppLink, WHATSAPP_TEMPLATES } from './whatsapp';
import { MenuItem } from '../types/restaurant';

test('phone number validation accepts valid Indian and standard phone formats', () => {
  assert.equal(isValidPhoneNumber('+91 95702 36381'), true);
  assert.equal(isValidPhoneNumber('9570236381'), true);
  assert.equal(isValidPhoneNumber('09570236381'), true);
  assert.equal(isValidPhoneNumber('+919570236381'), true);
  assert.equal(isValidPhoneNumber('123'), false);
  assert.equal(isValidPhoneNumber(''), false);
  assert.equal(isValidPhoneNumber('abcdefghij'), false);
});

test('email validation tests valid and invalid address structures', () => {
  assert.equal(isValidEmail('guest@example.com'), true);
  assert.equal(isValidEmail('patna.diner@gmail.com'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('@example.com'), false);
  assert.equal(isValidEmail(''), false);
});

test('sanitizeTelUrl creates clean tel link', () => {
  assert.equal(sanitizeTelUrl('+91 95702 36381'), 'tel:+919570236381');
  assert.equal(sanitizeTelUrl('0612 234567'), 'tel:0612234567');
});

test('validateEnquiryForm catches missing or invalid data accurately', () => {
  const invalidResult = validateEnquiryForm({
    fullName: '',
    contactMethod: 'phone',
    contactValue: '123',
    enquiryType: 'dining',
    message: ''
  });
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.contactValue);
  assert.ok(invalidResult.errors.message);

  const validResult = validateEnquiryForm({
    fullName: 'Rajesh Sharma',
    contactMethod: 'phone',
    contactValue: '+91 95702 36381',
    enquiryType: 'table-reservation',
    message: 'Table for 4 at 8:00 PM tonight'
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('filterMenuItems filters properly by category, dietary, and search terms', () => {
  const dummyItems: MenuItem[] = [
    {
      id: '1',
      name: 'Paneer Butter Masala',
      category: 'indian-favourites',
      description: 'Rich gravy',
      priceINR: 260,
      dietary: 'veg',
      isPopular: true,
      isAvailable: true
    },
    {
      id: '2',
      name: 'Butter Chicken',
      category: 'indian-favourites',
      description: 'Velvety chicken',
      priceINR: 340,
      dietary: 'non-veg',
      isPopular: true,
      isAvailable: true
    },
    {
      id: '3',
      name: 'Veg Hakka Noodles',
      category: 'indo-chinese',
      description: 'Wok tossed',
      priceINR: 190,
      dietary: 'veg',
      isPopular: false,
      isAvailable: true
    }
  ];

  // Category filter
  const chineseItems = filterMenuItems(dummyItems, { category: 'indo-chinese' });
  assert.equal(chineseItems.length, 1);
  assert.equal(chineseItems[0].name, 'Veg Hakka Noodles');

  // Dietary filter (veg only)
  const vegItems = filterMenuItems(dummyItems, { dietary: 'veg' });
  assert.equal(vegItems.length, 2);

  // Search filter
  const searched = filterMenuItems(dummyItems, { searchQuery: 'chicken' });
  assert.equal(searched.length, 1);
  assert.equal(searched[0].name, 'Butter Chicken');

  // Stats calculation
  const stats = calculateMenuStats(dummyItems);
  assert.equal(stats.total, 3);
  assert.equal(stats.vegCount, 2);
  assert.equal(stats.nonVegCount, 1);
});

test('formatINR formats currency with Indian locale', () => {
  assert.equal(formatINR(250), '₹ 250');
  assert.equal(formatINR(1200), '₹ 1,200');
});

test('buildWhatsAppLink formats correct URI encoded wa.me link', () => {
  const link = buildWhatsAppLink('+91 95702 36381', 'Hello PANASIA');
  assert.ok(link.startsWith('https://wa.me/919570236381?text='));
  assert.ok(link.includes('Hello%20PANASIA'));

  const template = WHATSAPP_TEMPLATES.dishEnquiry('Butter Chicken', 340);
  assert.ok(template.includes('Butter Chicken'));
  assert.ok(template.includes('340'));
});
