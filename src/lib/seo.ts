import { SITE_CONFIG, SEO_KEYWORDS } from "./constants";
import { testimonials } from "./data/testimonials";
import { services } from "./data/services";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.youtube,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
  };
}

export function getServiceSchemas() {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    areaServed: "Bangalore, India",
    serviceType: service.title,
  }));
}

export function getEventSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Artist Nation Premium Event Services",
    description: SITE_CONFIG.description,
    organizer: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: SITE_CONFIG.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        addressCountry: SITE_CONFIG.address.country,
      },
    },
  };
}

export function getReviewSchemas() {
  return testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.quote,
    itemReviewed: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
  }));
}

export function getAllSchemas() {
  return [
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getEventSchema(),
    ...getServiceSchemas(),
    ...getReviewSchemas(),
  ];
}

export function getDefaultMetadata() {
  return {
    title: `${SITE_CONFIG.name} | Best Event Management Company in Bangalore`,
    description: SITE_CONFIG.description,
    keywords: SEO_KEYWORDS.join(", "),
    openGraph: {
      title: `${SITE_CONFIG.name} | Premium Event Organizers`,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website" as const,
      images: [
        {
          url: `${SITE_CONFIG.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Artist Nation - Premium Event Management Company Bangalore",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${SITE_CONFIG.name} | Premium Event Organizers`,
      description: SITE_CONFIG.description,
      images: [`${SITE_CONFIG.url}/og-image.jpg`],
    },
    alternates: {
      canonical: SITE_CONFIG.url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}
