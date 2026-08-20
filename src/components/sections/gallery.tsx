import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { galleryItems } from "@/lib/data/gallery";

const projects = [
  {
    number: "01",
    category: "Corporate",
    title: "Corporate Excellence",
    description: "Leadership summits, annual days, award nights, and premium internal brand moments built with cinematic stage direction.",
    mainImage: galleryItems.find((item) => item.id === "16") || galleryItems[0],
    subImages: [galleryItems.find((item) => item.id === "1") || galleryItems[1], galleryItems.find((item) => item.id === "21") || galleryItems[2]],
    motion: {
      src: "/media/31d58427b9a831f5af3ea544c2bfbdcc.mp4",
      alt: "Animated corporate event crowd with cinematic red stage lighting",
    },
  },
  {
    number: "02",
    category: "Launch",
    title: "Product Reveal Theatre",
    description: "High-impact launch environments for technology, automotive, lifestyle, and ambitious product teams across India.",
    mainImage: galleryItems.find((item) => item.id === "19") || galleryItems[3],
    subImages: [galleryItems.find((item) => item.id === "7") || galleryItems[4], galleryItems.find((item) => item.id === "11") || galleryItems[5]],
    motion: {
      src: "/media/Product-Lauches.mp4",
      alt: "Animated product launch stage with dramatic lighting and reveal screens",
    },
  },
  {
    number: "03",
    category: "Entertainment",
    title: "Movie Promotions",
    description: "Premieres, red carpets, fan energy, celebrity movement, and touring activations designed for public attention.",
    mainImage: galleryItems.find((item) => item.id === "18") || galleryItems[6],
    subImages: [galleryItems.find((item) => item.id === "4") || galleryItems[7], galleryItems.find((item) => item.id === "8") || galleryItems[8]],
    motion: {
      src: "/media/5478867180baced059a833f54fc6d14b.mp4",
      alt: "Animated entertainment event crowd with confetti and stage energy",
    },
  },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="creator-projects relative z-[4] -mt-10 scroll-mt-20 rounded-t-[2.5rem] bg-[#0c0c0c] px-5 py-20 sm:-mt-12 sm:rounded-t-[3.2rem] sm:px-8 sm:py-24 md:px-10 md:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16 md:mb-20">
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gold">Selected Works</p>
          <h2 id="gallery-heading" className="creator-section-heading text-[clamp(3.5rem,13vw,10rem)]">
            Our Productions
          </h2>
        </div>

        <div className="space-y-8 md:space-y-0">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="creator-project-card"
              style={
                {
                  "--card-index": index,
                  "--card-top-mobile": `${4.85 + index * 0.72}rem`,
                  "--card-top-desktop": `${5.5 + index * 1.75}rem`,
                  "--card-scale": 1 - (projects.length - 1 - index) * 0.018,
                } as CSSProperties
              }
            >
              <div className="mb-5 grid gap-4 md:mb-7 md:grid-cols-[auto_1fr_auto] md:items-center">
                <p className="creator-project-number">{project.number}</p>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-light/85">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-black uppercase leading-none tracking-tight text-[#d7e2ea] sm:text-4xl md:text-5xl">
                    {project.title}
                  </h3>
                </div>
                <a href="#contact" className="creator-project-button">
                  Plan Similar
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[#d7e2ea]/65 sm:text-base md:text-lg">
                {project.description}
              </p>

              <div className="grid gap-3 md:grid-cols-[0.42fr_0.58fr] md:gap-4">
                {/* Main Large Image on Right */}
                <div className="creator-project-image min-h-40 sm:min-h-80 md:col-start-2 md:row-start-1 md:min-h-[clamp(20rem,35vw,34rem)]">
                  {project.mainImage?.image && (
                    <Image
                      src={project.mainImage.image}
                      alt={project.mainImage.alt || project.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="relative z-10">Experience</span>
                </div>

                {/* Two Sub-Images on Left */}
                <div className="grid gap-3 md:col-start-1 md:row-start-1 md:gap-4">
                  {project.subImages?.map((item, imageIndex) =>
                    item?.image ? (
                      <div key={item.id || `sub-${imageIndex}`} className="creator-project-image h-28 sm:h-52 md:h-[clamp(9rem,16vw,14rem)]">
                        <Image
                          src={item.image}
                          alt={item.alt || project.title}
                          fill
                          sizes="(min-width: 768px) 36vw, 100vw"
                          className="object-cover"
                          loading="lazy"
                        />
                        <span>{imageIndex === 0 ? "Production" : "Audience"}</span>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
