import Image from "next/image";
import { galleryItems, galleryCategories } from "@/lib/data/gallery";
import { InView } from "@/components/ui/in-view";

const sectionReveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const cardReveal = {
  hidden: { opacity: 0, scale: 0.86, y: 34, filter: "blur(12px)" },
  visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
};

export function GallerySection() {
  return (
    <section id="gallery" className="section-padding min-h-[100svh] scroll-mt-20" aria-labelledby="gallery-heading">
      <InView
        variants={sectionReveal}
        transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
        viewOptions={{ once: true, margin: "0px 0px -120px 0px" }}
      >
        <div className="mx-auto mb-8 max-w-7xl text-center sm:mb-12">
          <p className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-gold sm:text-sm sm:tracking-[0.3em]">Gallery</p>
          <h2 id="gallery-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
            Moments <span className="gold-gradient">Captured</span>
          </h2>
        </div>
      </InView>

      <InView
        variants={sectionReveal}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        viewOptions={{ once: true, margin: "0px 0px -120px 0px" }}
      >
        <div className="mx-auto mb-8 flex max-w-7xl flex-wrap justify-center gap-2 px-0 sm:mb-12 sm:gap-3 sm:px-6">
          {galleryCategories.map((cat) => (
            <span
              key={cat}
              className="glass inline-flex min-h-10 items-center rounded-full px-3.5 py-2 text-xs text-muted transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:text-white sm:px-5 sm:text-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </InView>

      <div className="mx-auto max-w-7xl columns-1 gap-3 px-0 sm:columns-2 sm:px-6 lg:columns-3 lg:gap-4 lg:px-8">
        {galleryItems.map((item, index) => (
          <div key={item.id} className="mb-3 break-inside-avoid sm:mb-4">
            <InView
              variants={cardReveal}
              transition={{
                duration: 0.72,
                delay: Math.min(index * 0.045, 0.32),
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewOptions={{ once: true, margin: "0px 0px -180px 0px" }}
            >
              <article className="gallery-cinematic-card group relative overflow-hidden rounded-xl transition duration-500 hover:-translate-y-1 hover:scale-[1.01] sm:rounded-2xl">
                {item.videoUrl ? (
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block"
                    aria-label={`Watch ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={600}
                      height={index % 3 === 0 ? 400 : index % 3 === 1 ? 500 : 350}
                      className="gallery-cinematic-image h-56 w-full object-cover sm:h-auto"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-black/10 transition group-hover:bg-black/25">
                      <span className="liquid-glass rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white">
                        Play Film
                      </span>
                    </span>
                  </a>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={600}
                    height={index % 3 === 0 ? 400 : index % 3 === 1 ? 500 : 350}
                    className="gallery-cinematic-image h-56 w-full object-cover sm:h-auto"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4">
                  <div className="liquid-glass translate-y-0 rounded-xl px-3 py-2 opacity-100 transition duration-500 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    <p className="text-[0.62rem] uppercase tracking-[0.18em] text-gold/80">Artist Nation</p>
                    <h3 className="mt-1 text-sm font-medium">{item.title}</h3>
                  </div>
                </div>
              </article>
            </InView>
          </div>
        ))}
      </div>
    </section>
  );
}
