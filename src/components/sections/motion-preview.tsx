"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const eventStills = {
  mainStage: "/media/profile-stills/14-1119x1124.jpg",
  lighting: "/media/profile-stills/17-1317x851.jpg",
  crowd: "/media/profile-stills/08-2420x1023.jpg",
  brand: "/media/profile-stills/16-1119x1118.jpg",
  panorama: "/media/profile-stills/12-2410x812.jpg",
};

const bgVideo = "/media/Luxury_architecture_premiere_event_202607181351.mp4";

const services = [
  {
    title: "Stage Design",
    desc: "Architectural blueprints that become living experiences.",
    media: "/media/Luxury_architecture_premiere_event_202607181351.mp4",
  },
  {
    title: "Lighting Cues",
    desc: "Precision timing that turns emotion into atmosphere.",
    media: "/media/Futuristic_corporate_event_stage_202607181352.mp4",
  },
  {
    title: "Crowd Flow",
    desc: "Orchestrating 50K+ journeys that feel effortless.",
    media: "/media/profile-stills/08-2420x1023.jpg",
  },
];

const works = [
  { id: 1, title: "Pixzen Summit", image: eventStills.mainStage, category: "Corporate" },
  { id: 2, title: "Wander Launch", image: eventStills.crowd, category: "Brand Experience" },
  { id: 3, title: "Agentify Gala", image: eventStills.lighting, category: "Luxury" },
  { id: 4, title: "Future Stage", image: eventStills.brand, category: "Product Launch" },
  { id: 5, title: "Genova Festival", image: eventStills.panorama, category: "Live Event" },
];

export function MotionPreviewSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeWork, setActiveWork] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });

  /* Background video: slow cinematic push-in + drift */
  const bgScale = useTransform(smoothProgress, [0, 1], [1.15, 1]);
  const bgY = useTransform(smoothProgress, [0, 1], ["-4%", "4%"]);

  /* Headline drifts up slightly as the deck resolves */
  const textY = useTransform(smoothProgress, [0, 0.6], ["0%", "-6%"]);

  /* Stacking cards: converge into a fanned deck */
  const card1Y = useTransform(smoothProgress, [0, 0.6], ["0%", "-13%"]);
  const card2Y = useTransform(smoothProgress, [0, 0.6], ["34%", "0%"]);
  const card3Y = useTransform(smoothProgress, [0, 0.6], ["68%", "13%"]);
  const card1R = useTransform(smoothProgress, [0, 0.6], [0, -3]);
  const card2R = useTransform(smoothProgress, [0, 0.6], [4, 0]);
  const card3R = useTransform(smoothProgress, [0, 0.6], [8, 3]);

  const cardY = [card1Y, card2Y, card3Y];
  const cardR = [card1R, card2R, card3R];

  return (
    <section
      id="motion-preview"
      ref={containerRef}
      className="relative overflow-clip bg-[#0a0a0a] text-white"
    >
      {/* ====================== OUR CORE EXPERTISE ====================== */}
      <div className="relative -mt-[100vh] h-[300vh]">
        <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
          {/* Full-bleed background video */}
          <motion.div
            style={{ scale: bgScale, y: bgY }}
            className="absolute inset-0 will-change-transform"
            aria-hidden="true"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
          </motion.div>
          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-[#0a0a0a]/70" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"
            aria-hidden="true"
          />
          {/* Blueprint grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            aria-hidden="true"
            style={{
              backgroundImage: `linear-gradient(to right, #c9a962 1px, transparent 1px),
                                linear-gradient(to bottom, #c9a962 1px, transparent 1px)`,
              backgroundSize: "90px 90px",
              animation: "gridMove 45s linear infinite",
            }}
          />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ y: textY }}
              className="max-w-lg"
            >
              <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-gold">
                Our Core Expertise
              </p>
              <h2 className="text-4xl font-black leading-[1.05] sm:text-6xl md:text-7xl">
                From blueprint
                <span className="block text-white/55">to live emotion.</span>
              </h2>
              <p className="mt-5 max-w-md text-base text-white/60 sm:text-lg">
                Every stage, light cue, and camera move is orchestrated months
                before the doors open.
              </p>

              {/* Deck progress */}
              <div className="mt-8 hidden items-center gap-3 md:flex" aria-hidden="true">
                {services.map((service, i) => (
                  <div key={service.title} className="h-[2px] w-14 overflow-hidden rounded-full bg-white/15">
                    <motion.div
                      className="h-full bg-gold"
                      style={{
                        scaleX: useTransform(
                          smoothProgress,
                          [i * 0.2, i * 0.2 + 0.2],
                          [0, 1]
                        ),
                        transformOrigin: "left",
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stacking Cards */}
            <div className="relative h-[320px] w-full sm:h-[440px] md:h-[520px]">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  style={{
                    y: cardY[i],
                    rotate: cardR[i],
                    scale: 1 - i * 0.05,
                    zIndex: 30 - i,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] will-change-transform"
                >
                  {service.media.endsWith(".mp4") ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover opacity-40"
                    >
                      <source src={service.media} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={service.media}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 40rem, 100vw"
                      className="object-cover opacity-40"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="mb-2 text-xs font-bold tracking-[0.3em] text-gold">
                      0{i + 1}
                    </p>
                    <h3 className="text-2xl font-black sm:text-3xl">{service.title}</h3>
                    <p className="mt-2 text-sm text-white/65 sm:mt-3 sm:text-base">
                      {service.desc}
                    </p>
                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 backdrop-blur-sm sm:right-6 sm:top-6 sm:h-12 sm:w-12">
                    <Play className="text-white" size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====================== OUR WORKS (Expanding Gallery) ====================== */}
      <div className="relative bg-[#111] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between md:mb-12">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Selected Works
              </p>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl md:text-6xl">
                Our Productions
              </h2>
            </div>
            <a
              href="#gallery"
              className="hidden items-center gap-2 text-sm uppercase tracking-widest transition hover:text-gold md:flex"
            >
              View All Projects <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex h-[560px] flex-col gap-3 md:h-[520px] md:flex-row">
            {works.map((project, index) => (
              <motion.div
                key={project.id}
                onHoverStart={() => setActiveWork(index)}
                onClick={() => setActiveWork(index)}
                className="group relative flex-1 cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 ease-[0.25,1,0.5,1]"
                style={{
                  flex: activeWork === index ? "5" : "1.2",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                  <p className="mb-2 text-xs uppercase tracking-widest text-gold">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-black leading-none sm:text-4xl">
                    {project.title}
                  </h3>

                  {activeWork === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 flex items-center gap-3 sm:mt-6"
                    >
                      <a
                        href="#gallery"
                        className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gold hover:text-white sm:px-6 sm:py-3"
                      >
                        View Case Study <ArrowRight size={16} />
                      </a>
                    </motion.div>
                  )}
                </div>

                <div className="absolute right-5 top-5 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-md sm:right-6 sm:top-6">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
