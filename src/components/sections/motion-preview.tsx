import { ArrowRight } from "lucide-react";

const architectureVideo = "/media/Luxury_architecture_premiere_event_202607181351.mp4";
const stageVideo = "/media/Futuristic_corporate_event_stage_202607181352.mp4";

export function MotionPreviewSection() {
  return (
    <section
      id="event-architecture"
      className="creator-motion-preview relative min-h-[100svh] overflow-hidden bg-[#0c0c0c]"
      aria-labelledby="motion-preview-heading"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="creator-motion-preview-media absolute inset-0 h-full w-full object-cover"
        aria-label="Animated cinematic event architecture blueprint with luxury premiere lighting"
      >
        <source media="(max-width: 767px)" src={stageVideo} type="video/mp4" />
        <source media="(min-width: 768px)" src={architectureVideo} type="video/mp4" />
      </video>
      <div className="creator-motion-preview-wash absolute inset-0" aria-hidden="true" />
      <div className="creator-motion-preview-frame absolute inset-3 sm:inset-6" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 md:px-10 lg:pb-14">
        <div className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.28em] text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md">
          Pure Event View
        </div>

        <div className="creator-motion-preview-panel max-w-md">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-gold-light/90">
            Artist Nation Production Map
          </p>
          <h2
            id="motion-preview-heading"
            className="mt-4 text-[clamp(2rem,7.8vw,4.2rem)] font-black uppercase leading-[0.9] tracking-tight text-white"
          >
            From blueprint to live emotion.
          </h2>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="max-w-sm text-sm leading-relaxed text-white/68 sm:text-base">
              A clean full-screen motion view for stages, lights, camera cues, and audience flow before the first guest walks in.
            </p>
            <a href="#gallery" className="creator-motion-preview-link">
              View Worlds
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
