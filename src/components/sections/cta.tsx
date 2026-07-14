export function CTASection() {
  return (
    <section id="contact" className="relative flex min-h-[80svh] scroll-mt-20 items-center overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="cta-heading">
      <div className="relative mx-auto max-w-4xl px-0 text-center sm:px-6">
        <div className="mb-6">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold sm:text-xs sm:tracking-[0.3em]">Early Access</p>
        </div>

        <h2 id="cta-heading" className="heading-display text-3xl text-glow sm:text-4xl md:text-5xl lg:text-7xl">
          Preview the Experience Before the Launch
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base md:mt-8 md:text-xl">
          Artist Nation is opening limited demo consultations for brands planning corporate events,
          product launches, movie promotions, and premium team experiences.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-12">
          <a
            href="mailto:hello@artistnation.in"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors duration-200 hover:bg-gray-100 sm:w-auto sm:px-10 sm:py-4 sm:text-base"
          >
            Request Demo Access
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass w-full rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-black sm:w-auto sm:px-10 sm:py-4 sm:text-base"
          >
            WhatsApp Us
          </a>
        </div>

        <div className="mt-10 inline-block md:mt-16">
          <div className="liquid-glass rounded-full border border-white/10 px-4 py-3 sm:px-8">
            <p className="text-xs leading-relaxed text-white/60 sm:text-sm">
              Bangalore&apos;s premier event management company · India-wide delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
