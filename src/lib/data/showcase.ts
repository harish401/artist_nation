export interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
  description: string;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "1",
    title: "Tech Summit 2025",
    category: "Corporate Events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    description: "Fortune 500 tech summit with immersive 3D staging",
  },
  {
    id: "2",
    title: "Smartphone X Launch",
    category: "Product Launch",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-phone-with-the-screen-on-34513-large.mp4",
    description: "Apple-style product reveal event",
  },
  {
    id: "3",
    title: "Blockbuster Premiere",
    category: "Movie Promotions",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    description: "Red carpet movie promotion with celebrity appearances",
  },
  {
    id: "4",
    title: "Luxury Brand Pop-up",
    category: "Brand Activation",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    description: "Immersive brand activation experience",
  },
  {
    id: "5",
    title: "Leadership Conference",
    category: "Conferences",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    description: "Multi-day conference management",
  },
  {
    id: "6",
    title: "Goa Team Retreat",
    category: "Team Outings",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    description: "Luxury beach retreat for corporate team",
  },
];
