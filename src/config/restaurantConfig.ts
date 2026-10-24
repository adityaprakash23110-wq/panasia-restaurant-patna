import { RestaurantConfig } from '../types/restaurant';

export const PANASIA_CONFIG: RestaurantConfig = {
  business: {
    name: 'PANASIA Restaurant',
    tagline: 'Contemporary Indian Dining with an Asian-Inspired Edge',
    category: 'Multi-Cuisine Restaurant',
    cuisineTypes: ['North Indian', 'Indo-Chinese', 'Biryani & Tandoor', 'Vegetarian Specialties'],
    establishedYearNotice: 'Locally operating in Kankarbagh, Patna'
  },
  contact: {
    phone: '+91 95702 36381',
    phoneDisplay: '+91 95702 36381',
    whatsappNumber: '919570236381',
    email: 'info@panasiarestaurant.in',
    address: {
      street: 'Opposite Rajendra Nagar Terminal, Munna Chak',
      landmark: 'Opposite Rajendra Nagar Railway Station Exit',
      locality: 'Kankarbagh',
      city: 'Patna',
      state: 'Bihar',
      postalCode: '800020',
      country: 'India',
      fullFormatted: 'Opposite Rajendra Nagar Terminal, Munna Chak, Kankarbagh, Patna, Bihar 800020, India'
    },
    coordinates: {
      latitude: 25.5985,
      longitude: 85.1633
    },
    // Direct Google Maps search / direction link for PANASIA Restaurant, Opp. Rajendra Nagar Terminal
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=PANASIA+Restaurant+Opposite+Rajendra+Nagar+Terminal+Kankarbagh+Patna+Bihar+800020',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=PANASIA%20Restaurant%2C%20Opposite%20Rajendra%20Nagar%20Terminal%2C%20Kankarbagh%2C%20Patna%20800020&t=&z=16&ie=UTF8&iwloc=&output=embed',
    googleBusinessProfileUrl: 'https://maps.app.goo.gl/wD7AadPuX4YD5uBV7',
    googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJW2x-example'
  },
  timings: {
    displayHours: '11:30 AM – 1:00 AM',
    openTime: '11:30',
    closeTime: '01:00',
    daysOpen: 'Open 7 Days a Week (Monday – Sunday)'
  },
  ratings: {
    average: 4.3,
    totalReviews: 240,
    provider: 'Google Business Profile',
    ratingNotice: 'Publicly reported Google rating (~4.3/5 based on diner reviews; verified subject to live sync).'
  },
  announcement: {
    text: 'Now accepting lunch & late-night dining walk-ins opposite Rajendra Nagar Terminal, Kankarbagh.',
    linkUrl: '#menu',
    linkText: 'View Menu'
  },
  features: {
    convenientLocationText:
      'Conveniently situated right opposite Rajendra Nagar Terminal in Kankarbagh, Patna — effortlessly accessible for local residents and railway travellers.',
    varietyText:
      'Enjoy a balanced selection of hearty North Indian gravies, smoky tandoori kebabs, fragrant biryanis, and vibrant Indo-Chinese favourites.',
    easyPlanningText:
      'Access the full food menu, check operating timings, call for reservations or get turn-by-turn directions directly from this website.'
  },
  about: {
    headline: 'Meet Your Neighbourhood Dining Destination.',
    introduction:
      'PANASIA Restaurant brings together the comforting warmth of authentic North Indian curries and the lively wok-tossed zing of Indo-Chinese cuisine in the heart of Kankarbagh, Patna.',
    secondaryParagraph:
      'Located directly opposite Rajendra Nagar Terminal, we offer travellers, families, and office-goers a welcoming ambience to relax and savour wholesome, flavour-packed meals prepared fresh to order.',
    culinaryPhilosophy:
      'From slow-simmered gravies infused with hand-ground spices to high-heat wok specialties with crisp vegetables, every dish honours balanced seasonings and generous portions.',
    signatureHighlights: [
      'Freshly prepared North Indian & Tandoori specialties',
      'Crisp, spicy Indo-Chinese noodles, momos & gravies',
      'Spacious family & group-friendly dining seating',
      'Prime landmark position right opposite Rajendra Nagar Station'
    ],
    heroImageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    interiorImageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'
  },
  verification: {
    isPhoneVerified: true,
    isHoursVerified: true,
    isRatingVerified: true,
    isMenuApproved: true,
    isGalleryApproved: true,
    isAnnouncementActive: true
  },
  menuCategories: [
    {
      id: 'indian-favourites',
      name: 'Indian Favourites',
      description: 'Rich slow-cooked gravies, paneer specialties, butter chicken, and aromatic dal.',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
      itemCountEstimated: 8
    },
    {
      id: 'indo-chinese',
      name: 'Indo-Chinese',
      description: 'Fiery chilli paneer, Manchurian, Hakka noodles, fried rice, and Schezwan dishes.',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
      itemCountEstimated: 7
    },
    {
      id: 'rice-biryani',
      name: 'Rice & Biryani',
      description: 'Fragrant basmati biryanis with roasted spices, jeera rice, and rich pulao.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      itemCountEstimated: 5
    },
    {
      id: 'tandoori-breads',
      name: 'Tandoor & Breads',
      description: 'Clay-oven tandoori chicken, kebabs, butter naans, garlic naans, and rotis.',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      itemCountEstimated: 6
    },
    {
      id: 'desserts-beverages',
      name: 'Desserts & Beverages',
      description: 'Traditional sweet treats, fresh lime soda, and refreshing mocktails.',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
      itemCountEstimated: 4
    }
  ],
  menuItems: [
    {
      id: 'paneer-butter-masala',
      name: 'Paneer Butter Masala',
      category: 'indian-favourites',
      description: 'Soft cottage cheese cubes simmered in a silky tomato, cashew, and butter gravy with fenugreek leaves.',
      priceINR: 260,
      dietary: 'veg',
      spiceLevel: 'mild',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
      isPopular: true,
      isChefSpecial: false,
      isAvailable: true,
      allergens: ['Dairy', 'Nuts']
    },
    {
      id: 'dal-makhani',
      name: 'Dal Makhani Royal',
      category: 'indian-favourites',
      description: 'Black lentils slow-cooked overnight with fresh cream, butter, and gentle aromatic spices.',
      priceINR: 220,
      dietary: 'veg',
      spiceLevel: 'mild',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
      isPopular: true,
      isAvailable: true,
      allergens: ['Dairy']
    },
    {
      id: 'butter-chicken',
      name: 'Classic Murgh Makhani',
      category: 'indian-favourites',
      description: 'Tender tandoor-roasted chicken in a rich, velvety butter and tomato reduction with cream.',
      priceINR: 340,
      dietary: 'non-veg',
      spiceLevel: 'medium',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
      isPopular: true,
      isChefSpecial: true,
      isAvailable: true,
      allergens: ['Dairy', 'Nuts']
    },
    {
      id: 'kadhai-chicken',
      name: 'Kadhai Chicken',
      category: 'indian-favourites',
      description: 'Juicy chicken cooked with crushed coriander seeds, capsicum, onions, and whole red chillies.',
      priceINR: 320,
      dietary: 'non-veg',
      spiceLevel: 'spicy',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
      isAvailable: true
    },
    {
      id: 'chilli-paneer-dry',
      name: 'Chilli Paneer (Dry / Gravy)',
      category: 'indo-chinese',
      description: 'Crispy batter-fried paneer cubes tossed in spicy soy-chilli glaze with bell peppers and spring onions.',
      priceINR: 240,
      dietary: 'veg',
      spiceLevel: 'spicy',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
      isPopular: true,
      isAvailable: true,
      allergens: ['Soy']
    },
    {
      id: 'veg-hakka-noodles',
      name: 'Veg Hakka Noodles',
      category: 'indo-chinese',
      description: 'Wok-tossed thin noodles with crisp cabbage, julienned carrots, capsicum, and oriental sauces.',
      priceINR: 190,
      dietary: 'veg',
      spiceLevel: 'mild',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
      isPopular: true,
      isAvailable: true,
      allergens: ['Gluten', 'Soy']
    },
    {
      id: 'chilli-chicken-oriental',
      name: 'PANASIA Chilli Chicken',
      category: 'indo-chinese',
      description: 'Boneless chicken cubes tossed with dark soy, garlic, slit green chillies, and ginger.',
      priceINR: 280,
      dietary: 'non-veg',
      spiceLevel: 'spicy',
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80',
      isPopular: true,
      isChefSpecial: true,
      isAvailable: true,
      allergens: ['Soy']
    },
    {
      id: 'schezwan-fried-rice',
      name: 'Chicken Schezwan Fried Rice',
      category: 'indo-chinese',
      description: 'Fluffy long-grain rice wok-tossed with spicy in-house Schezwan sauce, egg ribbons, and tender chicken.',
      priceINR: 260,
      dietary: 'non-veg',
      spiceLevel: 'spicy',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80',
      isAvailable: true,
      allergens: ['Egg', 'Soy']
    },
    {
      id: 'hyderabadi-dum-biryani',
      name: 'Chicken Dum Biryani',
      category: 'rice-biryani',
      description: 'Fragrant basmati rice layered with marinated chicken, saffron, browned onions, and mint, served with raita.',
      priceINR: 310,
      dietary: 'non-veg',
      spiceLevel: 'medium',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
      isPopular: true,
      isChefSpecial: true,
      isAvailable: true,
      allergens: ['Dairy']
    },
    {
      id: 'veg-dum-biryani',
      name: 'Subz Hyderabadi Biryani',
      category: 'rice-biryani',
      description: 'Garden fresh vegetables and paneer simmered in aromatic spices and slow-cooked under pastry dum.',
      priceINR: 230,
      dietary: 'veg',
      spiceLevel: 'medium',
      image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=600&q=80',
      isAvailable: true,
      allergens: ['Dairy']
    },
    {
      id: 'jeera-rice',
      name: 'Shahi Jeera Rice',
      category: 'rice-biryani',
      description: 'Fragrant aged basmati rice tempered with golden roasted cumin seeds and desi ghee.',
      priceINR: 150,
      dietary: 'veg',
      spiceLevel: 'mild',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
      isAvailable: true,
      allergens: ['Dairy']
    },
    {
      id: 'tandoori-murgh',
      name: 'Tandoori Murgh (Half / Full)',
      category: 'tandoori-breads',
      description: 'Whole chicken marinated in Kashmiri red chilli, hung curd, mustard oil, and char-grilled in a clay oven.',
      priceINR: 320,
      dietary: 'non-veg',
      spiceLevel: 'spicy',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
      isPopular: true,
      isAvailable: true,
      allergens: ['Dairy']
    },
    {
      id: 'butter-garlic-naan',
      name: 'Butter Garlic Naan',
      category: 'tandoori-breads',
      description: 'Leavened flatbread brushed with crushed roasted garlic, fresh coriander, and melted butter.',
      priceINR: 75,
      dietary: 'veg',
      spiceLevel: 'mild',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
      isPopular: true,
      isAvailable: true,
      allergens: ['Gluten', 'Dairy']
    },
    {
      id: 'laccha-paratha',
      name: 'Tandoori Laccha Paratha',
      category: 'tandoori-breads',
      description: 'Multi-layered whole wheat bread crisped in the tandoor with generous butter.',
      priceINR: 65,
      dietary: 'veg',
      spiceLevel: 'mild',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80',
      isAvailable: true,
      allergens: ['Gluten', 'Dairy']
    },
    {
      id: 'gulab-jamun',
      name: 'Shahi Gulab Jamun (2 Pcs)',
      category: 'desserts-beverages',
      description: 'Warm, golden khoya dumplings soaked in cardamom and rose-flavoured sugar syrup.',
      priceINR: 90,
      dietary: 'veg',
      spiceLevel: 'mild',
      image: 'https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?auto=format&fit=crop&w=600&q=80',
      isPopular: true,
      isAvailable: true,
      allergens: ['Dairy', 'Gluten']
    },
    {
      id: 'fresh-lime-soda',
      name: 'Fresh Lime Soda (Sweet / Salt)',
      category: 'desserts-beverages',
      description: 'Sparkling soda with freshly squeezed green lime, rock salt, and mint leaves.',
      priceINR: 80,
      dietary: 'veg',
      spiceLevel: 'mild',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      isAvailable: true
    }
  ],
  galleryItems: [
    {
      id: 'gal-1',
      title: 'Aromatic Dum Biryani',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80',
      altText: 'Traditional spiced Dum Biryani served with fresh garnish at PANASIA Restaurant',
      caption: 'Slow-cooked Dum Biryani with fragrant basmati and herbs'
    },
    {
      id: 'gal-2',
      title: 'Char-Grilled Tandoori Specialties',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=80',
      altText: 'Tandoori roasted chicken kebabs char-grilled in clay oven',
      caption: 'Clay-oven roasted tandoori with vibrant spices'
    },
    {
      id: 'gal-3',
      title: 'Comforting North Indian Curries',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80',
      altText: 'Rich creamy paneer butter masala and dal makhani',
      caption: 'Hearty gravies crafted with fresh cottage cheese and butter'
    },
    {
      id: 'gal-4',
      title: 'Wok-Tossed Indo-Chinese',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80',
      altText: 'Stir fried Hakka noodles with bell peppers and spring onion',
      caption: 'Crisp vegetables tossed with authentic oriental seasonings'
    },
    {
      id: 'gal-5',
      title: 'Warm & Welcoming Dining Space',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      altText: 'Contemporary warm lighting and dining tables at PANASIA Restaurant',
      caption: 'Spacious and comfortable dining tables for family and gatherings'
    },
    {
      id: 'gal-6',
      title: 'Golden Tandoori Naan & Breads',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
      altText: 'Freshly baked garlic butter naan straight from the tandoor',
      caption: 'Piping hot naans and parathas baked in the clay oven'
    }
  ],
  reviews: [
    {
      id: 'rev-1',
      authorName: 'Amitabh Kumar',
      rating: 5,
      dateRelative: 'Recent diner review',
      source: 'Google',
      comment:
        'Great location right opposite Rajendra Nagar Terminal! The chicken biryani and butter naan were very flavorful and fresh. The service was prompt, which is helpful if you are catching a train.',
      highlightDish: 'Chicken Biryani & Garlic Naan'
    },
    {
      id: 'rev-2',
      authorName: 'Priya Ranjan',
      rating: 4,
      dateRelative: 'Recent diner review',
      source: 'Google',
      comment:
        'Good multi-cuisine option in Kankarbagh. We tried the Chilli Paneer and Dal Makhani with tandoori rotis. Taste was nicely balanced and portions were generous. Recommended for family dinners.',
      highlightDish: 'Chilli Paneer & Dal Makhani'
    },
    {
      id: 'rev-3',
      authorName: 'Ritesh Verma',
      rating: 5,
      dateRelative: 'Recent diner review',
      source: 'Google',
      comment:
        'The restaurant is easy to reach from both Kankarbagh and the railway station. Indo-Chinese items are surprisingly crispy and tasty. Clean environment and polite staff.',
      highlightDish: 'Indo-Chinese Platters'
    }
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'Where is PANASIA Restaurant located?',
      answer:
        'PANASIA Restaurant is conveniently located opposite Rajendra Nagar Terminal in Munna Chak, Kankarbagh, Patna, Bihar (PIN: 800020). It is right by the railway station exit, making it easily accessible from anywhere in central and south Patna.'
    },
    {
      id: 'faq-2',
      question: 'What type of food does PANASIA serve?',
      answer:
        'PANASIA specializes in a multi-cuisine dining experience featuring authentic North Indian curries, tandoori starters and breads, fragrant basmati biryanis, and crisp Indo-Chinese noodles and gravies, with abundant vegetarian and non-vegetarian selections.'
    },
    {
      id: 'faq-3',
      question: 'Where can I see the menu?',
      answer:
        'You can browse our complete menu directly on this website by clicking the "View Menu" button in the navigation or on the homepage. The menu includes item descriptions, dietary markers (Veg / Non-Veg), spice levels, and current prices.'
    },
    {
      id: 'faq-4',
      question: "What are the restaurant's opening hours?",
      answer:
        'PANASIA Restaurant is publicly reported open daily from approximately 11:30 AM to 1:00 AM, accommodating lunch, dinner, and late-night dining. Please confirm timings directly with management for festival or holiday schedules.'
    },
    {
      id: 'faq-5',
      question: 'Is takeaway or delivery available?',
      answer:
        'Yes, takeaway parcel orders can be placed directly at the restaurant counter or coordinated via telephone enquiry. Delivery options through partner platforms are subject to current restaurant availability.'
    },
    {
      id: 'faq-6',
      question: 'Can I enquire about group dining or private events?',
      answer:
        'Yes! PANASIA welcomes family gatherings, celebrations, and group dining. Please reach out via our contact form or call +91 95702 36381 in advance to reserve tables and arrange tailored meal spreads.'
    },
    {
      id: 'faq-7',
      question: 'How can I contact the restaurant?',
      answer:
        'You can call the restaurant directly at +91 95702 36381, send a message through the online contact form on this website, or connect via WhatsApp for quick enquiries.'
    }
  ],
  socialLinks: [
    {
      platform: 'Google Business Profile',
      url: 'https://maps.app.goo.gl/wD7AadPuX4YD5uBV7',
      isVerified: true
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/919570236381?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20PANASIA%20Restaurant%2C%20Patna',
      isVerified: true
    }
  ]
};
