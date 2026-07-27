import Image from "next/image";
import { ArrowRight, FileText, Play, Sparkles, VolumeX } from "lucide-react";
import { StickerPeel } from "@/components/ui/sticker-peel";

const heroVideoMobile = "/media/Futuristic_corporate_event_stage_202607181352.mp4";
const heroVideoDesktop = "/media/Luxury_architecture_premiere_event_202607181351.mp4";
const heroPoster = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80";
const heroLogo = "/brand/artist-nation-logo-transparent.png";
const profileDeck = "/media/artist-nation-profile-2026.pdf";

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
      className="creator-hero artist-hero-revamp relative min-h-[100dvh] overflow-hidden bg-[#080808]"
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
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-20"
        aria-hidden="true"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroPoster}
        className="artist-hero-video absolute inset-0 z-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source media="(max-width: 767px)" src={heroVideoMobile} type="video/mp4" />
        <source media="(min-width: 768px)" src={heroVideoDesktop} type="video/mp4" />
      </video>

      <div className="artist-hero-video-wash absolute inset-0 z-[1]" aria-hidden="true" />
      <div className="artist-hero-sketch-paper absolute inset-0 z-[2]" aria-hidden="true" />
      <div className="creator-grid-overlay absolute inset-0 z-[3]" aria-hidden="true" />
      <div className="artist-hero-pencil-lines absolute inset-0 z-[4]" aria-hidden="true">
        <span className="line line-a" />
        <span className="line line-b" />
        <span className="line line-c" />
        <span className="line line-d" />
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col px-5 pb-6 pt-24 sm:px-8 sm:pb-9 sm:pt-28 md:px-10 lg:pt-32">
        <div className="artist-hero-topbar">
          <div className="artist-hero-logo-lockup">
            <Image
              src={heroLogo}
              alt="Artist Nation"
              width={833}
              height={766}
              priority
              className="artist-hero-logo"
            />
          </div>
          <div className="artist-hero-audio-pill">
            <VolumeX size={14} />
            Silent reel
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[43%] z-0 flex -translate-y-1/2 justify-center sm:top-1/2 lg:left-[42%] lg:right-auto lg:w-[58%]">
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

        <div className="relative z-20 grid flex-1 items-end gap-6 pb-12 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.44fr)] lg:items-center lg:pb-20">
          <div className="artist-hero-copy max-w-5xl">
            <p className="creator-eyebrow mb-4 inline-flex items-center gap-2">
              <Sparkles size={15} />
              15+ Years In Motion
            </p>
            <h1 className="artist-hero-title">
              We Don&apos;t Organize Events.
              <span> We Draft The Moment.</span>
            </h1>
            <p className="artist-hero-subcopy">
              Artist Nation turns corporate events, product launches, movie promotions, and luxury brand experiences into cinematic productions across India.
            </p>

            <div className="artist-hero-proof-row" aria-label="Artist Nation proof points">
              <span><strong>1000+</strong> Events Produced</span>
              <span><strong>200+</strong> Brand Partners</span>
              <span><strong>500+</strong> Artists</span>
            </div>

            <div className="creator-hero-actions mt-6 flex w-full max-w-[20rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center">
              <a href="#contact" className="creator-contact-button artist-hero-primary">
                Book Consultation
                <ArrowRight size={16} />
              </a>
              <a href="#gallery" className="creator-ghost-button">
                Watch Showreel
                <Play size={16} />
              </a>
              <a href={profileDeck} className="artist-profile-link" target="_blank" rel="noopener noreferrer">
                <FileText size={15} />
                Profile Deck
              </a>
            </div>
          </div>

          <aside className="artist-hero-reel-card" aria-label="Artist Nation cinematic event reel">
            <div className="artist-hero-reel-media">
              <video autoPlay muted loop playsInline preload="metadata">
                <source src={heroVideoMobile} type="video/mp4" />
              </video>
              <div className="artist-hero-reel-badge">Live Preview</div>
            </div>
            <div className="artist-hero-reel-footer">
              <span>Blueprint</span>
              <ArrowRight size={16} />
              <span>Execution</span>
            </div>
          </aside>
        </div>
      </div>
      <div className="creator-hero-torn-edge" aria-hidden="true" />
    </section>
  );
}
