import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import {
  HeroSection,
  TrustedBySection,
  AboutSection,
  ServicesSection,
  ShowcaseSection,
  TimelineSection,
  WhyChooseUsSection,
  TestimonialsSection,
  MoviePromotionsSection,
  ProductLaunchSection,
  CorporateEventsSection,
  OutingsSection,
  GallerySection,
  ProcessSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TrustedBySection />
        <AboutSection />
        <ServicesSection />
        <ShowcaseSection />
        <TimelineSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <MoviePromotionsSection />
        <ProductLaunchSection />
        <CorporateEventsSection />
        <OutingsSection />
        <GallerySection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
