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
    image: "/showcase/image.png",
    alt: "Artist Nation full service event management and company profile",
  },
  {
    id: "2",
    title: "Client Roster & Partners",
    category: "Clients",
    image: "/showcase/image copy.png",
    alt: "Artist Nation client brand portfolio featuring Fortune 500 partners",
  },
  {
    id: "3",
    title: "Stage Production & AV",
    category: "Production",
    image: "/showcase/image copy 2.png",
    alt: "3D venue selection, LED walls and stage design production",
  },
  {
    id: "4",
    title: "Live Entertainment & Shows",
    category: "Entertainment",
    image: "/showcase/image copy 3.png",
    alt: "Live concert, celebrity management and award stage show production",
  },
  {
    id: "5",
    title: "Experiential Brand Zones",
    category: "Activation",
    image: "/showcase/image copy 4.png",
    alt: "Experiential brand activation and trade show exhibition setup",
  },
  {
    id: "6",
    title: "Grand Stage & Award Gala",
    category: "Conferences",
    image: "/showcase/image copy 5.png",
    alt: "Grand award ceremony, MICE event and arena production",
  },
  {
    id: "7",
    title: "Mercedes-Benz Showroom Launch",
    category: "Automotive",
    image: "/showcase/image copy 6.png",
    alt: "Mercedes-Benz inauguration and showroom lounge experience",
  },
  {
    id: "8",
    title: "Conquer '25 Corporate Summit",
    category: "Corporate",
    image: "/showcase/image copy 7.png",
    alt: "Conquer 25 thought leadership summit and executive stage management",
  },
  {
    id: "9",
    title: "Nykaa Beauty Bar Mall Activation",
    category: "Activation",
    image: "/showcase/image copy 8.png",
    alt: "Nykaa Beauty Bar experiential BTL  booth activation",
  },
  {
    id: "10",
    title: "Experiential Stage Production",
    category: "Production",
    image: "/showcase/image copy 9.png",
    alt: "Artist Nation high impact stage lighting and digital cinematography",
  },
  {
    id: "11",
    title: "Resort Retreat & Leadership Offsite",
    category: "Outings",
    image: "/showcase/image copy 10.png",
    alt: "Luxury resort team outing for corporate event management",
  },
  {
    id: "12",
    title: "Cinematic Concert Production",
    category: "Entertainment",
    image: "/showcase/image copy 11.png",
    alt: "Cinematic concert and live performance production",
  },
  {
    id: "13",
    title: "Leadership Summit & AV",
    category: "Corporate",
    image: "/showcase/image copy 12.png",
    alt: "Leadership summit and executive event management",
  },
  {
    id: "14",
    title: "Product Launch & Arena Reveal",
    category: "Launch",
    image: "/showcase/image copy 13.png",
    alt: "Product launch arena reveal and staging",
  },
  {
    id: "15",
    title: "Automotive Reveal Theatre",
    category: "Launch",
    image: "/showcase/image copy 14.png",
    alt: "Automotive reveal theatre and super car launch event",
  },
  {
    id: "16",
    title: "Resonance Executive Gala",
    category: "Corporate",
    image: "/showcase/image copy 15.png",
    alt: "Resonance executive gala stage and LED wall",
  },
  {
    id: "17",
    title: "Arena Stage Lighting Rigs",
    category: "Production",
    image: "/showcase/image copy 16.png",
    alt: "Arena stage lighting rigs and production setup",
  },
  {
    id: "18",
    title: "Celebrity Red Carpet Premiere",
    category: "Entertainment",
    image: "/showcase/image copy 17.png",
    alt: "Celebrity red carpet premiere and movie promotion",
  },
  {
    id: "19",
    title: "Lamborghini Huracán BeyondCars Reveal",
    category: "Automotive",
    image: "/showcase/image copy 19.png",
    alt: "Green Lamborghini Huracán BEYOND CARS hypercar reveal spectacle",
  },
  {
    id: "20",
    title: "Artist Nation Team & Leadership Gathering",
    category: "Corporate",
    image: "/showcase/image copy 18.png",
    alt: "Artist Nation core event team and leadership gathering",
  },
  {
    id: "21",
    title: "Conquer '25 Executive Summit Staging",
    category: "Corporate",
    image: "/showcase/image copy 20.png",
    alt: "Executive summit conference stage and lighting design",
  },
  {
    id: "22",
    title: "Experiential BTL Retail Booth & Activation",
    category: "Activation",
    image: "/showcase/image copy 21.png",
    alt: "Luxury brand experience zone and 3D booth fabrication",
  },
  {
    id: "23",
    title: "Arena Stage Lighting Rig & Concert Spectacle",
    category: "Entertainment",
    image: "/showcase/image copy 22.png",
    alt: "Grand arena stage lighting rig and live entertainment production",
  },
];

export const galleryCategories = ["All", "Corporate", "Launch", "Entertainment", "Activation", "Outings"] as const;
