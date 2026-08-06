export interface CorporateEvent {
  id: string;
  title: string;
  image: string;
  description: string;
  scale: string;
}

export const corporateEvents: CorporateEvent[] = [
  {
    id: "1",
    title: "Annual Leadership Summit",
    image: "/showcase/image.png",
    description: "3-day Fortune 500 leadership conference",
    scale: "2000+ Delegates",
  },
  {
    id: "2",
    title: "Tech Innovation Day",
    image: "/showcase/image copy 7.png",
    description: "Product demos and keynote presentations",
    scale: "1500+ Attendees",
  },
  {
    id: "3",
    title: "Awards Night Gala",
    image: "/showcase/image copy 5.png",
    description: "Black-tie corporate awards ceremony",
    scale: "800+ Guests",
  },
  {
    id: "4",
    title: "Town Hall Meeting",
    image: "/showcase/image copy 2.png",
    description: "Company-wide town hall with live streaming",
    scale: "5000+ Virtual + Live",
  },
  {
    id: "5",
    title: "Partner Conference",
    image: "/showcase/image copy 12.png",
    description: "B2B partner networking and showcase event",
    scale: "1200+ Partners",
  },
];
