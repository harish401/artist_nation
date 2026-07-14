import {
  Building2,
  Rocket,
  Film,
  Star,
  Sparkles,
  Users,
  TreePalm,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    id: "corporate-events",
    title: "Corporate Events",
    slug: "corporate-events",
    description: "Fortune 500-grade corporate event management in Bangalore.",
    longDescription:
      "From annual galas to leadership summits, we orchestrate corporate events that elevate your brand and inspire your teams.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    keywords: ["corporate event management", "Fortune 500 event management", "conference management"],
  },
  {
    id: "product-launch",
    title: "Product Launch",
    slug: "product-launch",
    description: "Apple-style product launch events that create global buzz.",
    longDescription:
      "We craft cinematic product reveals for phones, cars, and tech — turning launches into cultural moments.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    keywords: ["product launch events", "premium event organizers"],
  },
  {
    id: "movie-promotions",
    title: "Movie Promotions",
    slug: "movie-promotions",
    description: "Blockbuster movie promotion events with celebrity management.",
    longDescription:
      "Red carpet premieres, fan events, and nationwide promotional tours that make every release unforgettable.",
    icon: Film,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
    keywords: ["movie promotion events", "celebrity management"],
  },
  {
    id: "celebrity-management",
    title: "Celebrity Management",
    slug: "celebrity-management",
    description: "End-to-end celebrity management for luxury events.",
    longDescription:
      "Access India's top talent for brand endorsements, appearances, and exclusive event experiences.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    keywords: ["celebrity management", "luxury events"],
  },
  {
    id: "brand-activation",
    title: "Brand Activation",
    slug: "brand-activation",
    description: "Immersive brand activations that drive engagement.",
    longDescription:
      "Pop-ups, experiential zones, and interactive installations that turn audiences into advocates.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    keywords: ["brand activation", "event organizers"],
  },
  {
    id: "conferences",
    title: "Conferences",
    slug: "conferences",
    description: "World-class conference management from planning to execution.",
    longDescription:
      "Multi-day conferences with flawless logistics, cutting-edge AV, and seamless delegate experiences.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80",
    keywords: ["conference management", "event conductors"],
  },
  {
    id: "team-outings",
    title: "Team Outings",
    slug: "team-outings",
    description: "Curated team outings and corporate retreats.",
    longDescription:
      "Adventure, resorts, beaches, and luxury retreats designed to strengthen teams and create memories.",
    icon: TreePalm,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
    keywords: ["team outings", "Bangalore event management"],
  },
];
