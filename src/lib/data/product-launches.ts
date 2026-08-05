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
    title: "Lamborghini & BeyondCars Reveal",
    category: "Luxury Automotive",
    image: "/image copy 9.png",
    description: "High-octane luxury hypercar launch with stage lighting, outdoor arena reveal, and VIP experience zones.",
    features: ["Outdoor Stagecraft", "Drive-Through Reveal", "VIP Media Zone"],
  },
  {
    id: "2",
    title: "Business Standard Manthan Summit",
    category: "Thought Leadership Summit",
    image: "/image copy 8.png",
    description: "Inauguration & Opening Session featuring Union Minister Nirmala Sitharaman at India's premier thought leadership summit.",
    features: ["Ministerial Protocol", "Live Broadcast AV", "Executive Stage"],
  },
  {
    id: "3",
    title: "Lamborghini Brand Emblem Showcase",
    category: "Product Display",
    image: "/image copy 7.png",
    description: "Ultra-HD product display and brand detail presentation for elite luxury automobile events.",
    features: ["Precision Lighting", "Brand Identity Zone", "Interactive Display"],
  },
  {
    id: "4",
    title: "3D Holographic Product Reveal",
    category: "Experiential Tech",
    image: "/image copy 11.png",
    description: "Immersive 3D stage mapping, LED screen wall integration, and high-tech product launches.",
    features: ["3D Projection Mapping", "LED Wall Rigging", "Digital AV"],
  },
  {
    id: "5",
    title: "Grand Stage Production & Launch Arena",
    category: "Corporate Launch",
    image: "/image copy 12.png",
    description: "Large-scale arena staging and sound engineering for multinational product launches.",
    features: ["Arena Staging", "Concert AV Rig", "Delegate Logistics"],
  },
  {
    id: "6",
    title: "Experiential Brand Experience Zone",
    category: "Brand Activation",
    image: "/image copy 13.png",
    description: "Interactive brand installations, product display booths, and immersive audience touchpoints.",
    features: ["3D Booth Fabrications", "Interactive Touchpoints", "BTL Activations"],
  },
];
