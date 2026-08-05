import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { getDefaultMetadata } from "@/lib/seo";
import {
  ThinkDesignHero,
  MultiCitySection,
  TrustedBySection,
  AboutSection,
  ProductLaunchSection,
  MoviePromotionsSection,
  ServicesSection,
  ProcessSection,
  WhyChooseUsSection,
  TestimonialsSection,
  GallerySection,
  CTASection,
} from "@/components/sections";
import { MarqueeSection } from "@/components/sections/marquee";

export const metadata: Metadata = getDefaultMetadata();

export default function Home() {
  return (
    <>
      <main className="creator-site overflow-x-clip bg-[#09090b]">
        {/* 1. NextGen Think Design Interactive Hero */}
        <ThinkDesignHero />

        {/* 2. Our Productions (Selected Works Gallery) */}
        <GallerySection />

        {/* 3. Event Worlds (Showreel Marquee) */}
        <MarqueeSection />

        {/* 4. Multi-City Regional Hubs: Bangalore, Chennai, Cochin */}
        <MultiCitySection />

        {/* 5. Brands & Client Logo Wall */}
        <TrustedBySection />

        {/* 6. Brand Story & Founder History */}
        <AboutSection />

        {/* 7. Specializations */}
        <ProductLaunchSection />
        <MoviePromotionsSection />

        {/* 8. Service Stack & Expertise */}
        <ServicesSection />

        {/* 9. Methodology, Trust & Reviews */}
        <ProcessSection />
        <WhyChooseUsSection />
        <TestimonialsSection />

        {/* 10. Final Call To Action */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
