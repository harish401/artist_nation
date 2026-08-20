export interface ProductLaunch {
  id: string;
  title: string;
  category: string;
  image: string;
  video?: string;
  description: string;
  features: string[];
}

export const productLaunches: ProductLaunch[] = [
  {
    id: "1",
    title: "Lamborghini Huracán BeyondCars Reveal",
    category: "Luxury Automotive",
    image: "/showcase/image copy 19.png",
    video: "/videos/lamborghini_compressed.mp4",
    description: "High-octane luxury hypercar reveal with stage lighting, outdoor arena reveal, and VIP experience zones.",
    features: ["Outdoor Stagecraft", "Drive-Through Reveal", "VIP Media Zone"],
  },
  {
    id: "2",
    title: "Mankind Pharma Trade Exhibition Stall",
    category: "Trade Show & Exhibitions",
    image: "/showcase/image copy 9.png",
    description: "Custom 3D booth fabrication, LED display integration, and interactive BTL booth setup.",
    features: ["3D Booth Fabrications", "Exhibition stalls", "Innovative designs"],
  },
  {
    id: "3",
    title: "KS Harisankar Live Arena Concert",
    category: "Live Entertainment",
    image: "/showcase/image copy 8.png",
    description: "Festival-grade stage lighting rigs, arena sound engineering, and high-energy live celebrity performance.",
    features: ["Concert Sound Rigs", "Laser & Lighting", "Artist Management"],
  },
  {
    id: "4",
    title: "Mercedes Benz Financial services",
    category: "Corporate Conference",
    image: "/showcase/image copy 12.png",
    description: "Leadership keynote presentations, LED backdrop visuals, and executive corporate conference staging.",
    features: ["Executive Keynote", "Live Broadcast AV", "Delegate Logistics"],
  },
  {
    id: "5",
    title: "Live Band & Musical Performance",
    category: "Celebrity & Talent Management",
    image: "/showcase/image copy 7.png",
    description: "Live musical band performance, stage audio setup, and artist coordination across South India.",
    features: ["Live Band Audio", "Stage Management", "VIP Guest Experience"],
  },
  {
    id: "6",
    title: "ACC Cements International dealer meet at Thailand",
    category: "Outdoor Staging & Event Setup",
    image: "/showcase/image copy 13.png",
    description: "Large scale event setup in three cities , Public attractions .",
    features: ["LED Wall stage setup", "International artist performance", "Large groups for tourist destination"],
  },
];
