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
    title: "Corporate Gala",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    alt: "Corporate event management gala in Bangalore with luxury staging",
  },
  {
    id: "2",
    title: "Product Reveal",
    category: "Launch",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    alt: "Product launch event with dramatic lighting and stage design",
  },
  {
    id: "3",
    title: "Movie Premiere",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80",
    alt: "Movie promotion event with red carpet and celebrity management",
  },
  {
    id: "4",
    title: "Brand Pop-up",
    category: "Activation",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    alt: "Brand activation experiential zone for premium event organizers",
  },
  {
    id: "5",
    title: "Conference Hall",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80",
    alt: "Conference management setup with professional AV and seating",
  },
  {
    id: "6",
    title: "Beach Outing",
    category: "Outings",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    alt: "Team outing beach retreat organized by event management company",
  },
  {
    id: "7",
    title: "Celebrity Event",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
    alt: "Celebrity management luxury event with live performance",
  },
  {
    id: "8",
    title: "Tech Launch",
    category: "Launch",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-phone-with-the-screen-on-34513-large.mp4",
    alt: "Technology product launch event with smartphone reveal",
  },
  {
    id: "9",
    title: "Resort Retreat",
    category: "Outings",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    alt: "Luxury resort team outing for corporate event management",
  },
];

export const galleryCategories = ["All", "Corporate", "Launch", "Entertainment", "Activation", "Outings"] as const;
