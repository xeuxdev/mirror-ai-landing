import { AboutSection } from "@/components/about";
import { FAQSection } from "@/components/faqs";
import { HeroSection } from "@/components/hero";
import { Products } from "@/components/products";
import { TeamSection } from "@/components/team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Products />
      <TeamSection />
      <FAQSection />
    </>
  );
}
