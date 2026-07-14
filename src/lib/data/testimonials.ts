export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  quote: string;
  rating: number;
  image: string;
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "VP Marketing",
    company: "TechCorp India",
    companyLogo: "https://logo.clearbit.com/infosys.com",
    quote:
      "Artist Nation transformed our product launch into a cinematic experience. The attention to detail and 3D staging was unlike anything we'd seen in Bangalore.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    role: "CEO",
    company: "StartupX",
    companyLogo: "https://logo.clearbit.com/flipkart.com",
    quote:
      "From corporate events to brand activations, they've been our go-to event management partner for 5 years. 1000+ events worth of expertise shows.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: "3",
    name: "Ananya Reddy",
    role: "Brand Director",
    company: "Luxury Brands Co",
    companyLogo: "https://logo.clearbit.com/tata.com",
    quote:
      "Their celebrity management and movie promotion events are world-class. Fortune 500 quality with the soul of a creative studio.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    id: "4",
    name: "Vikram Patel",
    role: "HR Head",
    company: "Global Finance Ltd",
    companyLogo: "https://logo.clearbit.com/wipro.com",
    quote:
      "Team outings organized by Artist Nation boosted our morale tremendously. Adventure, luxury retreats — they nail every format.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];
