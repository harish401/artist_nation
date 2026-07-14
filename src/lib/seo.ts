import { SITE_CONFIG, SEO_KEYWORDS } from "./constants";
import { services } from "./data/services";

const serviceAreas = [
  "Bangalore",
  "Bengaluru",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "India",
];

const logoImage = `${SITE_CONFIG.url}/logo.svg`;
const ogImage = `${SITE_CONFIG.url}/og-image.svg`;

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: SITE_CONFIG.address.country,
  };
}

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: logoImage,
    image: ogImage,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: postalAddress(),
    sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.linkedin, SITE_CONFIG.social.youtube],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    image: ogImage,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: "$$$",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: serviceAreas.map((area) => ({
      "@type": area === "India" ? "Country" : "City",
      name: area,
    })),
    parentOrganization: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function getServiceSchemas() {
  return services.map((service) => ({
    "@type": "Service",
    "@id": `${SITE_CONFIG.url}/#service-${service.slug}`,
    name: service.title,
    description: service.longDescription,
    serviceType: service.title,
    provider: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    areaServed: serviceAreas,
    url: `${SITE_CONFIG.url}/#services`,
  }));
}

export function getOfferCatalogSchema() {
  return {
    "@type": "OfferCatalog",
    "@id": `${SITE_CONFIG.url}/#event-services`,
    name: "Artist Nation Event Management Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@id": `${SITE_CONFIG.url}/#service-${service.slug}`,
      },
    })),
  };
}

export function getEventSchema() {
  return {
    "@type": "BusinessEvent",
    "@id": `${SITE_CONFIG.url}/#early-access-demo`,
    name: "Artist Nation Event Consultation Demo",
    description:
      "Early-access consultation for corporate events, movie promotions, product launches, brand activations, and IT company outings in Bangalore and across India.",
    organizer: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    startDate: "2026-08-01T10:00:00+05:30",
    endDate: "2026-08-01T18:00:00+05:30",
    location: {
      "@type": "Place",
      name: SITE_CONFIG.name,
      address: postalAddress(),
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_CONFIG.url}/#contact`,
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

export function getBreadcrumbSchema() {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_CONFIG.url}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Event Management Services",
        item: `${SITE_CONFIG.url}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Early Access Demo",
        item: `${SITE_CONFIG.url}/#contact`,
      },
    ],
  };
}

export function getAllSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@graph": [
        getOrganizationSchema(),
        getLocalBusinessSchema(),
        getWebSiteSchema(),
        getOfferCatalogSchema(),
        getEventSchema(),
        getBreadcrumbSchema(),
        ...getServiceSchemas(),
      ],
    },
  ];
}

export function getDefaultMetadata() {
  const title = `${SITE_CONFIG.name} | Event Management Company in Bangalore & India`;

  return {
    applicationName: SITE_CONFIG.name,
    title,
    description:
      "Artist Nation creates corporate events, movie promotions, product launches, brand activations, and IT company outings in Bangalore and across India.",
    keywords: [...SEO_KEYWORDS],
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    category: "Event Management",
    classification: "Business",
    referrer: "origin-when-cross-origin" as const,
    formatDetection: {
      telephone: true,
      address: true,
      email: true,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
    openGraph: {
      title,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website" as const,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Artist Nation premium event management company in Bangalore",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: SITE_CONFIG.description,
      images: [ogImage],
    },
    alternates: {
      canonical: SITE_CONFIG.url,
      languages: {
        "en-IN": SITE_CONFIG.url,
        "en": SITE_CONFIG.url,
        "x-default": SITE_CONFIG.url,
      },
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
    other: {
      "geo.region": "IN-KA",
      "geo.placename": "Bangalore",
      "geo.position": "12.9716;77.5946",
      ICBM: "12.9716, 77.5946",
    },
  };
}
