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
    image: "/showcase/image.png",
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
    image: "/showcase/image copy 7.png",
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
    image: "/showcase/image copy 13.png",
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
    image: "/showcase/image copy 8.png",
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
    image: "/showcase/image copy 4.png",
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
    image: "/showcase/image copy 5.png",
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
    image: "/showcase/image copy 3.png",
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
    image: "/showcase/image copy 11.png",
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
    image: "/showcase/image copy 10.png",
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
    image: "/showcase/image copy 9.png",
    keywords: ["digital cinematography", "photography"],
  },
];
