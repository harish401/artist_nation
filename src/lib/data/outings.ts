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
    image: "/showcase/image copy 10.png",
    description: "Trekking, rafting, and team-building in the Himalayas",
    location: "Manali, Himachal Pradesh",
  },
  {
    id: "2",
    title: "Coorg Resort Retreat",
    type: "Resorts",
    image: "/showcase/image copy 8.png",
    description: "Luxury resort stay with curated team activities",
    location: "Coorg, Karnataka",
  },
  {
    id: "3",
    title: "Goa Beach Escape",
    type: "Beach",
    image: "/showcase/image copy 4.png",
    description: "Sun, sand, and corporate bonding on pristine beaches",
    location: "Goa",
  },
  {
    id: "4",
    title: "Udaipur Luxury Retreat",
    type: "Luxury Retreats",
    image: "/showcase/image copy 6.png",
    description: "Palace stays and exclusive dining experiences",
    location: "Udaipur, Rajasthan",
  },
];
