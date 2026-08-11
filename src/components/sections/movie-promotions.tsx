"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function MoviePromotionsSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="movies"
      className="relative w-full h-[85vh] sm:h-screen overflow-hidden bg-black border-y border-gold/30"
      aria-label="Artist Nation Official Showreel Video Theater"
    >
      {isPlaying ? (
        <iframe
          src="https://drive.google.com/file/d/15-bxw1T9EKamSFytI05nCoQtiqikoIDH/preview?autoplay=1"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0 object-cover"
          title="Artist Nation Full Screen Official Showreel"
        />
      ) : (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black">
          {/* Poster Image */}
          <Image
            src="/image copy 9.png"
            alt="Artist Nation Showreel Preview"
            fill
            sizes="100vw"
            priority={false}
            className="object-cover opacity-60"
          />
          {/* Overlay Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />

          {/* Interactive Play Button */}
          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <button
              onClick={() => setIsPlaying(true)}
              className="group relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-gold bg-gold/20 backdrop-blur-md shadow-[0_0_50px_rgba(201,169,98,0.5)] transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-black active:scale-95"
              aria-label="Play Full Screen Showreel Video"
            >
              <Play className="h-8 w-8 sm:h-10 sm:w-10 text-gold group-hover:text-black fill-current translate-x-0.5" />
            </button>
            <p className="mt-4 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Click To Watch Official Showreel
            </p>
          </div>
        </div>
      )}

      {/* Floating Bottom Info Pill Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[92%] max-w-5xl text-center pointer-events-auto">
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 rounded-full border border-gold/40 bg-black/80 px-6 py-3 shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white">
            Events <span className="text-gold mx-1">|</span> Entertainment <span className="text-gold mx-1">|</span> Brand Management
          </span>
          <span className="hidden sm:inline text-gold/50">&bull;</span>
          <span className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.757zm5.547-4.103l.399.237c1.472.873 3.16 1.334 4.887 1.335 5.163 0 9.367-4.204 9.37-9.369 0-2.502-.974-4.855-2.747-6.627-1.772-1.773-4.127-2.748-6.629-2.748-5.166 0-9.37 4.204-9.373 9.37 0 1.796.516 3.53 1.493 5.035l.26.401-1.01 3.69 3.75-1.026z" />
            </svg>
            +91 94446 96130
          </span>
          <span className="hidden sm:inline text-gold/50">&bull;</span>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300">
            Bengaluru &bull; Chennai &bull; Kochi
          </span>
        </div>
      </div>
    </section>
  );
}
