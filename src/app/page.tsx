import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import PropertyShowcase3D from "@/components/PropertyShowcase3D";
import WhyChooseUs from "@/components/WhyChooseUs";
import MarketStats from "@/components/MarketStats";
import Testimonials from "@/components/Testimonials";
import PropertySearch from "@/components/PropertySearch";
import AgentProfiles from "@/components/AgentProfiles";
import LifestyleGallery from "@/components/LifestyleGallery";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <PropertyShowcase3D />
      <WhyChooseUs />
      <MarketStats />
      <Testimonials />
      <PropertySearch />
      <AgentProfiles />
      <LifestyleGallery />
      <ContactForm />
    </>
  );
}
