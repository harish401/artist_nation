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
    description: "Annual days, leadership galas, and corporate celebrations.",
    longDescription:
      "From boardroom-polished galas to enterprise award ceremonies across South India and the Middle East.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    keywords: ["corporate events", "event management"],
  },
  {
    id: "distributor-meets",
    title: "Distributor Meets",
    slug: "distributor-meets",
    description: "High-level distributor and partner conferences.",
    longDescription:
      "Strategic partner meets and incentive galas engineered for seamless executive engagement.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80",
    keywords: ["distributor meets", "partner conferences"],
  },
  {
    id: "product-launch",
    title: "Product Launch",
    slug: "product-launch",
    description: "Cinematic product reveals and launch theatre.",
    longDescription:
      "Dramatic 3D visual reveals, stage design, and digital AV production that turn launches into global headlines.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    keywords: ["product launch", "stage reveal"],
  },
  {
    id: "fashion-shows",
    title: "Fashion Shows",
    slug: "fashion-shows",
    description: "High-concept ramp production and runway styling.",
    longDescription:
      "Choreographed runways, high-fashion lighting rigs, and soundscapes designed for luxury fashion brands.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    keywords: ["fashion shows", "runway production"],
  },
  {
    id: "trade-shows",
    title: "Trade Shows & Exhibitions",
    slug: "trade-shows",
    description: "Large-scale trade show orchestration and stall fabrication.",
    longDescription:
      "End-to-end trade show management, 3D booth design, and interactive visitor experiences.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    keywords: ["trade shows", "exhibition stalls"],
  },
  {
    id: "brand-management",
    title: "Brand Management & BTL",
    slug: "brand-management",
    description: "Immersive BTL activations and brand experience zones.",
    longDescription:
      "Pop-ups, mall activations, and experiential campaigns that build emotional connections with consumers.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    keywords: ["brand management", "BTL activations"],
  },
  {
    id: "celebrity-management",
    title: "Celebrity & Talent Management",
    slug: "celebrity-management",
    description: "A-list star bookings, appearances, and hospitality.",
    longDescription:
      "Curating and managing film stars, artists, influencers, and sports personalities for brand events.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
    keywords: ["celebrity management", "artist booking"],
  },
  {
    id: "live-entertainment",
    title: "Live Entertainment & DJ Shows",
    slug: "live-entertainment",
    description: "Concerts, DJ performances, and musical stage shows.",
    longDescription:
      "Electrifying live music, international DJ acts, and festival-grade sound and laser production.",
    icon: Film,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
    keywords: ["DJ performances", "musical shows"],
  },
  {
    id: "mice-events",
    title: "MICE & Corporate Retreats",
    slug: "mice-events",
    description: "Meetings, Incentives, Conferences, and Exhibitions.",
    longDescription:
      "Complete destination MICE logistics, resort retreats, and international delegation management.",
    icon: TreePalm,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
    keywords: ["MICE", "corporate retreats"],
  },
  {
    id: "cinematography",
    title: "Digital Cinematography & Photography",
    slug: "cinematography",
    description: "4K live multi-cam coverage, film shoots, and event photography.",
    longDescription:
      "Broadcast-grade multi-cam video production, live streaming, and high-fashion event photography.",
    icon: Film,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
    keywords: ["digital cinematography", "photography"],
  },
];
