
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ProductShowcase } from "@/components/ProductShowcase";
import { AboutPreview } from "@/components/AboutPreview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Sustainability } from "@/components/Sustainability";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <AboutPreview />
      <WhyChooseUs />
      <Sustainability />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
