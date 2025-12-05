import { AboutSection } from "@/components/about";
import { FAQSection } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Loader } from "@/components/loader";
import { Navbar } from "@/components/navbar";
import { Products } from "@/components/products";
import { TeamSection } from "@/components/team";

export default function Home() {
  return (
    <Loader>
      <div className="max-w-screen-2xl mx-auto w-full">
        {/* navbar */}

        <Navbar />

        <main className="min-h-screen mx-auto md:w-full h-full flex flex-col">
          <HeroSection />
          <AboutSection />
          <Products />
          <TeamSection />
          <FAQSection />
          <Footer />
        </main>
      </div>
    </Loader>
  );
}
