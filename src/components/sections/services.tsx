import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { InView } from "@/components/ui/in-view";
import { OptionWheel } from "@/components/ui/option-wheel";

const itemReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section
      id="solutions"
      className="creator-services relative z-[3] scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#0c0c0c] px-5 py-20 text-white sm:px-8 sm:py-24 md:px-10 md:py-32"
      aria-labelledby="services-heading"
    >
      <div id="services" className="scroll-mt-24" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center sm:mb-20 md:mb-24">
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gold">Services</p>
          <h2 id="services-heading" className="font-black uppercase leading-none tracking-tight text-[clamp(3.5rem,13vw,10rem)] text-white">
            Event Solutions
          </h2>
        </div>

        <div className="creator-service-picker mb-12 grid gap-5 md:mb-16 md:grid-cols-[0.72fr_1fr] md:items-stretch">
          <div className="flex flex-col justify-between rounded-[2rem] border border-gold/30 bg-black/80 px-5 py-6 text-white sm:px-7 sm:py-8 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">Spin the brief</p>
              <h3 className="mt-5 text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl text-white">
                Pick the energy. We build the event around it.
              </h3>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-gray-300">
              Use the wheel to browse Artist Nation&apos;s core event formats, from boardroom-polished conferences to cinematic public launches.
            </p>
          </div>

          <OptionWheel
            items={services.map((service) => service.title)}
            defaultSelected={1}
            fontSize={2.05}
            inset={44}
            className="min-h-[13rem] md:min-h-[22rem]"
          />
        </div>

        <div className="border-y border-white/10 divide-y divide-white/10">
          {services.map((service, index) => (
            <InView
              key={service.id}
              variants={itemReveal}
              transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.4), ease: [0.25, 0.1, 0.25, 1] }}
              viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <article className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 py-8 sm:py-12 transition-all hover:bg-white/[0.02] px-4 rounded-2xl">
                {/* Big Bright Red Font Number */}
                <p className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-red-500 shrink-0 drop-shadow-[0_0_25px_rgba(239,68,68,0.5)] select-none">
                  {String(index + 1).padStart(2, "0")}
                </p>
                
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="shrink-0 text-gold opacity-50 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" size={32} />
                  </div>
                  <p className="mt-3 max-w-3xl text-sm sm:text-base md:text-lg font-light leading-relaxed text-gray-300/80">
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
