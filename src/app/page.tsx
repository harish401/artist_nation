import type { Metadata } from "next";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { getDefaultMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { GallerySection } from "@/components/sections/gallery";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = getDefaultMetadata();

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-black">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
