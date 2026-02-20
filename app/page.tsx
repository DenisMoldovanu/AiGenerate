import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImageStripSection } from "@/components/sections/ImageStripSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { OurSolutionsSection } from "@/components/sections/OurSolutionsSection";
import { CorePackagesSection } from "@/components/sections/CorePackagesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { OurProcessSection } from "@/components/sections/OurProcessSection";
import { OurTeamSection } from "@/components/sections/OurTeamSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";
import { JoinUsSection } from "@/components/sections/JoinUsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ImageStripSection />
      <PartnersSection />
      <OurSolutionsSection />
      <CorePackagesSection />
      <CaseStudiesSection />
      <OurProcessSection />
      <OurTeamSection />
      <BlogSection />
      <TestimonialsSection />
      <CTABannerSection />
      <JoinUsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
