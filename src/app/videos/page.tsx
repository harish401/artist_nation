"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ArrowLeft, Sparkles, Film } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const videoProductions = [
  {
    id: "lamborghini-reveal",
    title: "Lamborghini Huracán BeyondCars Supercar Launch",
    category: "Luxury Automotive",
    src: "/videos/lamborghini_compressed.mp4",
    poster: "/showcase/image copy 18.png",
    resolution: "HD 1080p Web Streamed",
    description: "High-octane green Lamborghini Huracán BEYOND CARS hypercar reveal spectacle with stage pyros, outdoor drive-through, and VIP media zones.",
    highlights: ["Hypercar Reveal", "Stage Pyros", "VIP Lounge"],
    featured: true,
  },
  {
    id: "out-1-showreel",
    title: "Product Launch & Keynote Staging",
    category: "Corporate Summits",
    src: "/videos/out_1_compressed.mp4",
    poster: "/showcase/image copy 20.png",
    resolution: "HD Stream",
    description: "Executive thought leadership keynote presentations, LED backdrop visuals, and high-level corporate summit staging.",
    highlights: ["Keynote Stage", "Executive AV", "Delegate Logistics"],
    featured: false,
  },
  {
    id: "out-2-showreel",
    title: "Experiential Brand Activation & Retail Booths",
    category: "Brand Activation",
    src: "/videos/out_2_compressed.mp4",
    poster: "/showcase/image copy 21.png",
    resolution: "HD Stream",
    description: "3D exhibition booth fabrications, interactive consumer touchpoints, and mall BTL brand experience zones.",
    highlights: ["3D Stalls", "BTL Activation", "Interactive Zones"],
    featured: false,
  },
  {
    id: "reel-2-showreel",
    title: "A-List Celebrity Red Carpet & Premiere Night",
    category: "Live Entertainment",
    src: "/videos/reel_2_compressed.mp4",
    poster: "/showcase/image copy 17.png",
    resolution: "HD Vertical Stream",
    description: "Star-studded red carpet movie premiere, fan energy, press interaction, and celebrity management.",
    highlights: ["Red Carpet", "Celebrity Booking", "Media Hub"],
    featured: false,
  },
  {
    id: "reel-3-showreel",
    title: "Live Arena Musical Concert & DJ Night",
    category: "Live Entertainment",
    src: "/videos/reel_3_compressed.mp4",
    poster: "/showcase/image copy 22.png",
    resolution: "HD Vertical Stream",
    description: "Festival-grade arena lighting rigs, 10,000+ attendee concert sound, and electrifying live musical performances.",
    highlights: ["Arena Concert", "Laser Rigs", "Live Sound"],
    featured: false,
  },
  {
    id: "arena-spectacle-out3",
    title: "Grand Stage Lighting & AV Production Showcase",
    category: "Corporate & Arena Staging",
    src: "/videos/out_3_compressed.mp4",
    poster: "/showcase/image copy 16.png",
    resolution: "HD Vertical Stream",
    description: "Cinematic arena stagecraft showcase featuring dynamic LED walls, concert sound rigs, and live audience energy.",
    highlights: ["Arena Lighting", "LED Backdrop", "Concert AV"],
    featured: false,
  },
  {
    id: "showreel-1",
    title: "Artist Nation Master Event Highlights",
    category: "Master Showreel",
    src: "/videos/WhatsApp Video 2026-08-06 at 17.06.06.mp4",
    poster: "/showcase/image copy 15.png",
    resolution: "HD 1080p",
    description: "An immersive journey through South India's grandest product reveals, corporate summits, and arena entertainment.",
    highlights: ["Stagecraft 3D", "LED Visuals", "Arena Audio"],
    featured: false,
  },
];

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<(typeof videoProductions)[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Luxury Automotive", "Corporate Summits", "Brand Activation", "Live Entertainment", "Master Showreel"];

  const filteredVideos = selectedCategory === "All"
    ? videoProductions
    : videoProductions.filter(v => v.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-gold selection:text-black">
      {/* Header Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-3 transition-colors hover:text-gold">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-transform group-hover:-translate-x-1">
              <ArrowLeft className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-gold">Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <Image src="/AN White.png" alt="Artist Nation" width={160} height={45} className="h-9 w-auto object-contain" />
          </Link>

          <a
            href="https://wa.me/919444696130"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-xs font-extrabold tracking-widest text-gold hover:bg-gold hover:text-black transition-all"
          >
            BOOK EVENT
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        {/* Title Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold mb-4 backdrop-blur-md">
            <Film className="h-4 w-4 text-gold" />
            High-Speed Web Streamed Motion Gallery
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Experiential <span className="gold-gradient">Video Showcase</span>
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
            Watch real live event productions, supercar reveals, corporate summits, and concert highlights managed by Artist Nation across Bengaluru, Chennai, and Kochi.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${selectedCategory === cat
                    ? "bg-gold text-black shadow-[0_0_20px_rgba(201,169,98,0.5)] scale-105"
                    : "border border-white/10 bg-white/5 text-gray-300 hover:border-gold/40 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Video Highlight (Large Card) */}
        {selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-16 overflow-hidden rounded-3xl border border-gold/30 bg-black/60 shadow-[0_0_60px_rgba(0,0,0,0.9)] group"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <video
                src={videoProductions[0].src}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Overlay Text & Controls */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-gold backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5" /> FEATURED SUPERCAR LAUNCH
                  </span>
                  <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-mono font-semibold text-gray-300 border border-white/10">
                    {videoProductions[0].resolution}
                  </span>
                </div>

                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                    {videoProductions[0].title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-base text-gray-300/90 font-light line-clamp-2 sm:line-clamp-none">
                    {videoProductions[0].description}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <button
                      onClick={() => setActiveVideo(videoProductions[0])}
                      className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-black shadow-[0_0_30px_rgba(201,169,98,0.6)] hover:bg-[#dfc480] hover:scale-105 transition-all"
                    >
                      <Play className="h-4 w-4 fill-current" /> PLAY FULL THEATRE WITH SOUND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <motion.div
              key={video.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-xl transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,169,98,0.25)] flex flex-col"
            >
              {/* Video Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 cursor-pointer" onClick={() => setActiveVideo(video)}>
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-black shadow-[0_0_25px_rgba(201,169,98,0.8)] transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Top Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full border border-white/20 bg-black/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold backdrop-blur-md">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-gold transition-colors">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-400 font-light leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <div className="flex items-center gap-2">
                    {video.highlights.slice(0, 2).map((h) => (
                      <span key={h} className="rounded bg-white/5 px-2 py-0.5 text-[0.65rem] text-gray-300">
                        {h}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="font-sans font-bold text-gold hover:underline uppercase text-[0.7rem] tracking-wider"
                  >
                    WATCH WITH SOUND &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Full Screen Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-2xl"
          >
            <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-gold/40 bg-zinc-950 shadow-[0_0_80px_rgba(201,169,98,0.3)]">
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 rounded-full bg-black/70 p-3 text-white hover:bg-gold hover:text-black transition-all border border-white/20"
                aria-label="Close Theatre"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <video
                  src={activeVideo.src}
                  autoPlay
                  controls
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Modal Info Footer */}
              <div className="p-6 sm:p-8 bg-zinc-950 border-t border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gold">{activeVideo.category}</span>
                    <h3 className="text-xl sm:text-3xl font-black uppercase text-white mt-1">{activeVideo.title}</h3>
                    <p className="mt-2 text-sm text-gray-300 font-light">{activeVideo.description}</p>
                  </div>
                  <a
                    href="https://wa.me/919444696130"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 rounded-full bg-gold px-7 py-3 text-xs font-extrabold uppercase tracking-widest text-black hover:bg-[#dfc480] transition-all text-center"
                  >
                    DISCUSS PROJECT
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
