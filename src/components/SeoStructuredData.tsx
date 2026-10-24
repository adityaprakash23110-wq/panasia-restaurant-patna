import React, { useEffect } from 'react';
import { RestaurantConfig } from '../types/restaurant';

interface SeoStructuredDataProps {
  config: RestaurantConfig;
}

export const SeoStructuredData: React.FC<SeoStructuredDataProps> = ({ config }) => {
  useEffect(() => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: config.business.name,
      description: 'Multi-cuisine dining restaurant in Kankarbagh, Patna serving North Indian, Indo-Chinese and Biryani.',
      image: config.about.heroImageUrl,
      telephone: config.contact.phone,
      servesCuisine: config.business.cuisineTypes,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: config.contact.address.street,
        addressLocality: config.contact.address.locality,
        addressRegion: config.contact.address.state,
        postalCode: config.contact.address.postalCode,
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: config.contact.coordinates.latitude,
        longitude: config.contact.coordinates.longitude
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
          opens: config.timings.openTime,
          closes: config.timings.closeTime
        }
      ],
      aggregateRating: config.verification.isRatingVerified
        ? {
            '@type': 'AggregateRating',
            ratingValue: config.ratings.average.toString(),
            reviewCount: config.ratings.totalReviews.toString(),
            bestRating: '5',
            worstRating: '1'
          }
        : undefined,
      hasMenu: '#menu'
    };

    let scriptTag = document.getElementById('panasia-structured-data') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'panasia-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(jsonLd);

    return () => {
      // Keep script in head or update
    };
  }, [config]);

  return null;
};
