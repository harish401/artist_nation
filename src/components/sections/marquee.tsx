import Image from "next/image";
import { galleryItems } from "@/lib/data/gallery";

const half = Math.ceil(galleryItems.length / 2);
const topRow = [...galleryItems.slice(0, half), ...galleryItems.slice(0, half)];
const bottomRow = [...galleryItems.slice(half), ...galleryItems.slice(half)];

function MarqueeTile({ item, index }: { item: (typeof galleryItems)[number]; index: number }) {
  return (
    <article className="creator-marquee-tile">
      <Image
        src={item.image}
        alt={item.alt}
        width={520}
        height={330}
        sizes="(min-width: 1024px) 420px, (min-width: 640px) 320px, 240px"
        className="h-full w-full object-cover"
        loading={index < 2 ? "eager" : "lazy"}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,0.75)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-gold-light sm:text-xs">
          {item.category}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-white sm:text-base">{item.title}</h3>
      </div>
    </article>
  );
}

export function MarqueeSection() {
  return (
    <section className="creator-marquee-section" aria-label="Artist Nation event worlds">
      <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between gap-4 px-5 sm:mb-10 sm:px-8 md:px-10">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-gold">Showreel</p>
          <h2 className="creator-section-heading mt-2 text-4xl sm:text-6xl lg:text-8xl">Event Worlds</h2>
        </div>
        <p className="hidden max-w-xs text-right text-xs uppercase leading-relaxed tracking-[0.16em] text-[#d7e2ea]/55 sm:block">
          Corporate events, launch theatre, movie promotions, brand activations
        </p>
      </div>

      <div className="grid gap-3 overflow-hidden">
        <div className="creator-marquee-track creator-marquee-left">
          {topRow.map((item, index) => (
            <MarqueeTile key={`${item.id}-top-${index}`} item={item} index={index} />
          ))}
        </div>
        <div className="creator-marquee-track creator-marquee-right">
          {bottomRow.map((item, index) => (
            <MarqueeTile key={`${item.id}-bottom-${index}`} item={item} index={index + topRow.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
