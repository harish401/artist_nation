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

const logoImage = `${SITE_CONFIG.url}/AN Black.png`;
const ogImage = `${SITE_CONFIG.url}/AN Black.png`;
const seoDescription =
  "Artist Nation Entertainments is a 15+ year event management company for corporate events, movie promotions, product launches, brand activations, and IT company outings across India.";
const brandAliases = [
  "Artist Nation Entertainments",
  "Artist Nation Entertainments Bangalore",
  "Artist Nation Entertainments India",
  "Artist Nation Entertainments Event Management",
  "Artist Nation",
  "Artist Nation Bangalore",
  "Artist Nation Event Management",
  "Artist Nation Events",
];
const serviceKeywords = SEO_KEYWORDS.join(", ");

function logoObject() {
  return {
    "@type": "ImageObject",
    "@id": `${SITE_CONFIG.url}/#logo`,
    url: logoImage,
    contentUrl: logoImage,
    width: 512,
    height: 512,
    caption: "Artist Nation Entertainments official logo",
  };
}

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
    alternateName: brandAliases,
    legalName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: logoObject(),
    image: [logoImage, ogImage],
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
      logo: logoObject(),
    },
    description: seoDescription,
    slogan: SITE_CONFIG.tagline,
    foundingDate: "2011",
    foundingLocation: {
      "@type": "Place",
      name: "Bangalore, Karnataka, India",
    },
    knowsAbout: [
      "Corporate event management",
      "Movie promotions",
      "Product launch events",
      "Brand activation",
      "Celebrity management",
      "IT company outings",
    ],
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: postalAddress(),
    sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.linkedin, SITE_CONFIG.social.youtube],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "EventVenue", "ProfessionalService"],
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: "Artist Nation Entertainments Event Management",
    alternateName: brandAliases,
    description: seoDescription,
    logo: logoObject(),
    image: [logoImage, ogImage, `${SITE_CONFIG.url}/media/profile-stills/03-2200x826.jpg`],
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    hasMap: "https://maps.google.com/?q=Artist+Nation+Entertainments+Bangalore",
    keywords: serviceKeywords,
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
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Corporate Event Director" },
        datePublished: "2026-01-15",
        reviewBody: "Artist Nation Entertainments produced an extraordinary 2,000-person tech summit in Bangalore with zero technical hiccups.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Brand Marketing Lead" },
        datePublished: "2026-02-10",
        reviewBody: "The best product launch event management team in Bangalore. Exceptional production quality and stagecraft.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
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
    name: "Artist Nation Entertainments Event Management Services",
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
    name: "Artist Nation Entertainments Event Consultation Demo",
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
    alternateName: brandAliases,
    description: seoDescription,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

export function getWebPageSchema() {
  return {
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.url}/#webpage`,
    url: SITE_CONFIG.url,
    name: "Artist Nation Entertainments | Event Management Company in India",
    headline: "Artist Nation Entertainments Event Management Company",
    description: seoDescription,
    isPartOf: {
      "@id": `${SITE_CONFIG.url}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    primaryImageOfPage: logoObject(),
    breadcrumb: {
      "@id": `${SITE_CONFIG.url}/#breadcrumb`,
    },
    keywords: serviceKeywords,
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
        getWebPageSchema(),
        getOfferCatalogSchema(),
        getEventSchema(),
        getBreadcrumbSchema(),
        ...getServiceSchemas(),
      ],
    },
  ];
}

export function getDefaultMetadata() {
  const title = "Artist Nation Entertainments | Event Management Company in India";

  return {
    applicationName: SITE_CONFIG.name,
    title,
    description: seoDescription,
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
      icon: [
        { url: "/AN Black.png", sizes: "any" },
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
        { url: "/AN Black.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/AN Black.png",
      apple: [
        { url: "/AN Black.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
    openGraph: {
      title,
      description: seoDescription,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website" as const,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Artist Nation Entertainments premium event management company in India",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: seoDescription,
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
      "application-name": SITE_CONFIG.name,
      "apple-mobile-web-app-title": SITE_CONFIG.name,
      "msapplication-TileColor": "#000000",
      "msapplication-TileImage": "/AN Black.png",
      "og:logo": logoImage,
      "og:see_also": SITE_CONFIG.social.instagram,
      "geo.region": "IN-KA",
      "geo.placename": "Bangalore",
      "geo.position": "12.9716;77.5946",
      ICBM: "12.9716, 77.5946",
    },
  };
}
