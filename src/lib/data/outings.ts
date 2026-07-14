export interface Outing {
  id: string;
  title: string;
  type: string;
  image: string;
  description: string;
  location: string;
}

export const outings: Outing[] = [
  {
    id: "1",
    title: "Himalayan Adventure",
    type: "Adventure",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Trekking, rafting, and team-building in the Himalayas",
    location: "Manali, Himachal Pradesh",
  },
  {
    id: "2",
    title: "Coorg Resort Retreat",
    type: "Resorts",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    description: "Luxury resort stay with curated team activities",
    location: "Coorg, Karnataka",
  },
  {
    id: "3",
    title: "Goa Beach Escape",
    type: "Beach",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    description: "Sun, sand, and corporate bonding on pristine beaches",
    location: "Goa",
  },
  {
    id: "4",
    title: "Udaipur Luxury Retreat",
    type: "Luxury Retreats",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    description: "Palace stays and exclusive dining experiences",
    location: "Udaipur, Rajasthan",
  },
];
