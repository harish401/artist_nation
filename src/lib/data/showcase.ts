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
    image: "/showcase/image.png",
    description: "Fortune 500 tech summit with immersive 3D staging",
  },
  {
    id: "2",
    title: "Smartphone X Launch",
    category: "Product Launch",
    image: "/showcase/image copy 13.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-phone-with-the-screen-on-34513-large.mp4",
    description: "Apple-style product reveal event",
  },
  {
    id: "3",
    title: "Blockbuster Premiere",
    category: "Movie Promotions",
    image: "/showcase/image copy 3.png",
    description: "Red carpet movie promotion with celebrity appearances",
  },
  {
    id: "4",
    title: "Luxury Brand Pop-up",
    category: "Brand Activation",
    image: "/showcase/image copy 4.png",
    description: "Immersive brand activation experience",
  },
  {
    id: "5",
    title: "Leadership Conference",
    category: "Conferences",
    image: "/showcase/image copy 7.png",
    description: "Multi-day conference management",
  },
  {
    id: "6",
    title: "Goa Team Retreat",
    category: "Team Outings",
    image: "/showcase/image copy 10.png",
    description: "Luxury beach retreat for corporate team",
  },
];
