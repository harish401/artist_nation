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
            href="mailto:George@artistnation.in"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors duration-200 hover:bg-gray-100 sm:w-auto sm:px-10 sm:py-4 sm:text-base"
          >
            Request Demo Access
          </a>
          <a
            href="https://wa.me/919444696130"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300 hover:bg-[#20ba5a] hover:scale-105 hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] active:scale-95 sm:w-auto sm:px-10 sm:py-4 sm:text-base"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.757zm5.547-4.103l.399.237c1.472.873 3.16 1.334 4.887 1.335 5.163 0 9.367-4.204 9.37-9.369 0-2.502-.974-4.855-2.747-6.627-1.772-1.773-4.127-2.748-6.629-2.748-5.166 0-9.37 4.204-9.373 9.37 0 1.796.516 3.53 1.493 5.035l.26.401-1.01 3.69 3.75-1.026z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        <div className="mt-10 inline-block md:mt-16">
          <div className="liquid-glass rounded-full border border-white/10 px-4 py-3 sm:px-8">
            <p className="text-xs leading-relaxed text-white/60 sm:text-sm">
              Artist Nation premier event management company · India-wide delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
