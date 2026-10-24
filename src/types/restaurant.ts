export type DietaryType = 'veg' | 'non-veg' | 'egg';
export type SpiceLevel = 'mild' | 'medium' | 'spicy';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  priceINR: number;
  dietary: DietaryType;
  spiceLevel?: SpiceLevel;
  image?: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  isAvailable: boolean;
  allergens?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCountEstimated?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'interior' | 'ambience' | 'specials';
  imageUrl: string;
  altText: string;
  caption?: string;
}

export interface CustomerReview {
  id: string;
  authorName: string;
  rating: number;
  dateRelative: string;
  source: 'Google' | 'Verified Diner';
  comment: string;
  highlightDish?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BusinessVerificationStatus {
  isPhoneVerified: boolean;
  isHoursVerified: boolean;
  isRatingVerified: boolean;
  isMenuApproved: boolean;
  isGalleryApproved: boolean;
  isAnnouncementActive: boolean;
}

export interface RestaurantConfig {
  business: {
    name: string;
    tagline: string;
    category: string;
    cuisineTypes: string[];
    establishedYearNotice?: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    email: string;
    address: {
      street: string;
      landmark: string;
      locality: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      fullFormatted: string;
    };
    coordinates: {
      latitude: number;
      longitude: number;
    };
    googleMapsDirectionsUrl: string;
    googleMapsEmbedUrl: string;
    googleBusinessProfileUrl: string;
    googleReviewUrl: string;
  };
  timings: {
    displayHours: string;
    openTime: string;
    closeTime: string;
    daysOpen: string;
  };
  ratings: {
    average: number;
    totalReviews: number;
    provider: string;
    ratingNotice: string;
  };
  announcement: {
    text: string;
    linkUrl?: string;
    linkText?: string;
  };
  features: {
    convenientLocationText: string;
    varietyText: string;
    easyPlanningText: string;
  };
  about: {
    headline: string;
    introduction: string;
    secondaryParagraph: string;
    culinaryPhilosophy: string;
    signatureHighlights: string[];
    heroImageUrl: string;
    interiorImageUrl: string;
  };
  verification: BusinessVerificationStatus;
  menuCategories: MenuCategory[];
  menuItems: MenuItem[];
  galleryItems: GalleryItem[];
  reviews: CustomerReview[];
  faqs: FAQItem[];
  socialLinks: {
    platform: string;
    url: string;
    isVerified: boolean;
  }[];
}

export interface EnquiryFormData {
  fullName: string;
  contactMethod: 'phone' | 'email';
  contactValue: string;
  enquiryType: 'dining' | 'table-reservation' | 'banquet-event' | 'takeaway' | 'feedback' | 'other';
  guestsCount?: string;
  preferredDate?: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  contactValue?: string;
  message?: string;
  enquiryType?: string;
}
