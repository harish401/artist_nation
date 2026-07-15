import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { InView } from "@/components/ui/in-view";

const itemReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="creator-services relative z-[3] scroll-mt-20 overflow-hidden rounded-t-[2.5rem] bg-[#f7f4ec] px-5 py-20 text-[#0c0c0c] sm:rounded-t-[3.2rem] sm:px-8 sm:py-24 md:px-10 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center sm:mb-20 md:mb-24">
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#8b7340]">Services</p>
          <h2 id="services-heading" className="font-black uppercase leading-none tracking-tight text-[clamp(3.5rem,13vw,10rem)]">
            Event Solutions
          </h2>
        </div>

        <div className="border-y border-black/15">
          {services.map((service, index) => (
            <InView
              key={service.id}
              variants={itemReveal}
              transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.4), ease: [0.25, 0.1, 0.25, 1] }}
              viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <article className="creator-service-row group">
                <p className="creator-service-number">{String(index + 1).padStart(2, "0")}</p>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[clamp(1.1rem,2.4vw,2.35rem)] font-semibold uppercase leading-tight tracking-tight">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="mt-1 shrink-0 opacity-40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" size={24} />
                  </div>
                  <p className="mt-3 max-w-3xl text-sm font-light leading-relaxed text-black/62 sm:text-base md:text-xl">
                    {service.longDescription}
                  </p>
                </div>
              </article>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
