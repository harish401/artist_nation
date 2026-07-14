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
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    description: "3-day Fortune 500 leadership conference",
    scale: "2000+ Delegates",
  },
  {
    id: "2",
    title: "Tech Innovation Day",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    description: "Product demos and keynote presentations",
    scale: "1500+ Attendees",
  },
  {
    id: "3",
    title: "Awards Night Gala",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    description: "Black-tie corporate awards ceremony",
    scale: "800+ Guests",
  },
  {
    id: "4",
    title: "Town Hall Meeting",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    description: "Company-wide town hall with live streaming",
    scale: "5000+ Virtual + Live",
  },
  {
    id: "5",
    title: "Partner Conference",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
    description: "B2B partner networking and showcase event",
    scale: "1200+ Partners",
  },
];
