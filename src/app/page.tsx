import {
  AboutSection,
  FooterSection,
  HeroSection,
  PricingSection,
  ProgramSection,
  QuestionsSection,
  TestimonialsSection,
  UniquenessSection
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <main className="relative flex-1">
        <HeroSection />
        <UniquenessSection />
        <ProgramSection />
        <AboutSection />
        <PricingSection />
        <TestimonialsSection />
        <QuestionsSection />
      </main>
      <FooterSection />
    </>
  );
}
