export interface ProductLaunch {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export const productLaunches: ProductLaunch[] = [
  {
    id: "1",
    title: "NovaPhone Pro",
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    description: "Cinematic smartphone launch with 3D holographic reveal",
    features: ["Holographic Stage", "Live Stream", "Influencer Zone"],
  },
  {
    id: "2",
    title: "Velocity EV",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1617788138011-80ad40651399?w=800&q=80",
    description: "Electric vehicle reveal with drive-through experience",
    features: ["Drive Experience", "Tech Demos", "VIP Lounge"],
  },
  {
    id: "3",
    title: "Aura Watch Series",
    category: "Wearable Tech",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    description: "Luxury wearable launch with interactive product zones",
    features: ["Product Zones", "Celebrity Endorsement", "Media Kit"],
  },
];
