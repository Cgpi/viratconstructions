import { AboutSection } from "@/components/homepagecomponents/about-section";
import { ContactSection } from "@/components/homepagecomponents/contact-section";
import { FaqSection } from "@/components/homepagecomponents/faq-section";
import { HeroSection } from "@/components/homepagecomponents/hero-section";
import { IndustriesSection } from "@/components/homepagecomponents/industries-section";
import { ProcessSection } from "@/components/homepagecomponents/process-section";
import { ProjectCtaSection } from "@/components/homepagecomponents/project-cta-section";
import { ServicesSection } from "@/components/homepagecomponents/services-section";
import { WhyChooseUsSection } from "@/components/homepagecomponents/why-choose-us-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <FaqSection />
      <ProjectCtaSection />
      <ContactSection />
    </>
  );
}
