export interface MoviePromotion {
  id: string;
  title: string;
  poster: string;
  trailerUrl: string;
  celebrity: string;
  celebrityImage: string;
  description: string;
}

export const moviePromotions: MoviePromotion[] = [
  {
    id: "1",
    title: "Midnight Chronicles",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80",
    trailerUrl: "https://assets.mixkit.co/videos/preview/mixkit-film-reel-in-close-up-in-a-projection-room-34408-large.mp4",
    celebrity: "Arjun Kapoor",
    celebrityImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    description: "Pan-India promotional tour with red carpet premieres",
  },
  {
    id: "2",
    title: "The Last Horizon",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    trailerUrl: "https://assets.mixkit.co/videos/preview/mixkit-watching-a-movie-in-a-cinema-4640-large.mp4",
    celebrity: "Deepika Padukone",
    celebrityImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    description: "Celebrity-managed fan events across 12 cities",
  },
  {
    id: "3",
    title: "Urban Legends",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80",
    trailerUrl: "https://assets.mixkit.co/videos/preview/mixkit-person-watching-a-movie-on-a-couch-4641-large.mp4",
    celebrity: "Ranveer Singh",
    celebrityImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    description: "Immersive brand activation tied to movie release",
  },
];
