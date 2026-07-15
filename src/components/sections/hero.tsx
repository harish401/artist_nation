import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { StickerPeel } from "@/components/ui/sticker-peel";

const heroVideoMobile = "/media/artist-hero-mobile.mp4";
const heroVideoDesktop = "/media/artist-hero-desktop.mp4";
const heroPoster = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80";

function StageSketchModel() {
  return (
    <div className="creator-stage-model" aria-hidden="true">
      <div className="creator-stage-orbit creator-stage-orbit-a" />
      <div className="creator-stage-orbit creator-stage-orbit-b" />
      <div className="creator-stage-rig">
        <span className="creator-truss creator-truss-top" />
        <span className="creator-truss creator-truss-left" />
        <span className="creator-truss creator-truss-right" />
        <span className="creator-screen" />
        <span className="creator-beam creator-beam-a" />
        <span className="creator-beam creator-beam-b" />
        <span className="creator-beam creator-beam-c" />
        <span className="creator-platform" />
        <span className="creator-audience-dot dot-a" />
        <span className="creator-audience-dot dot-b" />
        <span className="creator-audience-dot dot-c" />
        <span className="creator-audience-dot dot-d" />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="creator-hero relative min-h-[100dvh] overflow-hidden bg-[#0c0c0c]"
      aria-label="Hero - Artist Nation Event Management"
    >
      <Image
        src={heroPoster}
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={58}
        sizes="100vw"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-28"
        aria-hidden="true"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-32"
        aria-hidden="true"
      >
        <source media="(max-width: 767px)" src={heroVideoMobile} type="video/mp4" />
        <source media="(min-width: 768px)" src={heroVideoDesktop} type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_46%,rgba(201,169,98,0.12),transparent_28%),linear-gradient(180deg,rgba(12,12,12,0.78)_0%,rgba(12,12,12,0.35)_44%,rgba(12,12,12,0.96)_100%)]" />
      <div className="creator-grid-overlay absolute inset-0 z-[2]" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-between px-5 pb-7 pt-24 sm:px-8 sm:pb-9 sm:pt-28 md:px-10 lg:pt-32">
        <div className="overflow-hidden">
          <p className="creator-eyebrow mb-3 inline-flex items-center gap-2">
            <Sparkles size={15} />
            Event Direction Studio
          </p>
          <h1 className="creator-hero-heading">Artist Nation</h1>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 flex -translate-y-1/2 justify-center sm:top-auto sm:bottom-0 sm:translate-y-0">
          <StageSketchModel />
        </div>

        <div className="creator-hero-sticker">
          <StickerPeel
            imageSrc="/stickers/artist-pass.svg"
            width="clamp(7.5rem, 18vw, 15rem)"
            peelDirection={8}
            peelBackHoverPct={24}
            peelBackActivePct={42}
            shadowIntensity={0.56}
            lightingIntensity={0.12}
            label="Artist Nation early access event pass"
          />
        </div>

        <div className="relative z-20 grid gap-6 sm:grid-cols-[minmax(0,20rem)_auto] sm:items-end sm:justify-between">
          <p className="max-w-[17rem] text-xs font-light uppercase leading-snug tracking-[0.16em] text-[#d7e2ea] sm:text-sm md:text-base">
            A cinematic event management company crafting corporate events, product launches, movie promotions, and luxury experiences across India.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="creator-contact-button">
              Book Consultation
              <ArrowRight size={16} />
            </a>
            <a href="#gallery" className="creator-ghost-button">
              Watch Showreel
              <Play size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
