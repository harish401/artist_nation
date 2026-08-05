export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Company Profile Spectacle",
    category: "Corporate",
    image: "/image copy.png",
    alt: "Artist Nation full service event management and company profile",
  },
  {
    id: "2",
    title: "Client Roster & Partners",
    category: "Clients",
    image: "/image copy 2.png",
    alt: "Artist Nation client brand portfolio featuring Fortune 500 partners",
  },
  {
    id: "3",
    title: "Stage Production & AV",
    category: "Production",
    image: "/image copy 3.png",
    alt: "3D venue selection, LED walls and stage design production",
  },
  {
    id: "4",
    title: "Live Entertainment & Shows",
    category: "Entertainment",
    image: "/image copy 4.png",
    alt: "Live concert, celebrity management and award stage show production",
  },
  {
    id: "5",
    title: "Experiential Brand Zones",
    category: "Activation",
    image: "/image copy 5.png",
    alt: "Experiential brand activation and trade show exhibition setup",
  },
  {
    id: "6",
    title: "Grand Stage & Award Gala",
    category: "Conferences",
    image: "/image copy 6.png",
    alt: "Grand award ceremony, MICE event and arena production",
  },
  {
    id: "7",
    title: "Mercedes-Benz Showroom Launch",
    category: "Automotive",
    image: "/image copy 14.png",
    alt: "Mercedes-Benz inauguration and showroom lounge experience",
  },
  {
    id: "8",
    title: "Conquer '25 Corporate Summit",
    category: "Corporate",
    image: "/image copy 15.png",
    alt: "Conquer 25 thought leadership summit and executive stage management",
  },
  {
    id: "9",
    title: "Nykaa Beauty Bar Mall Activation",
    category: "Activation",
    image: "/image copy 16.png",
    alt: "Nykaa Beauty Bar experiential BTL retail booth activation",
  },
  {
    id: "10",
    title: "Experiential Stage Production",
    category: "Production",
    image: "/image copy 17.png",
    alt: "Artist Nation high impact stage lighting and digital cinematography",
  },
  {
    id: "11",
    title: "Resort Retreat",
    category: "Outings",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    alt: "Luxury resort team outing for corporate event management",
  },
  {
    id: "12",
    title: "Cinematic Concert Production",
    category: "Entertainment",
    image: "/media/profile-stills/18-1317x728.jpg",
    alt: "Cinematic concert and live performance production",
  },
  {
    id: "13",
    title: "Leadership Summit & AV",
    category: "Corporate",
    image: "/media/profile-stills/10-1121x1120.jpg",
    alt: "Leadership summit and executive event management",
  },
];

export const galleryCategories = ["All", "Corporate", "Launch", "Entertainment", "Activation", "Outings"] as const;
