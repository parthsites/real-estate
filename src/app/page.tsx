import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Location from "@/components/Location";
import FloorPlans from "@/components/FloorPlans";
import Amenities from "@/components/Amenities";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import SectionDivider from "@/components/Decorative";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectShowcase />
      <SectionDivider />
      <Location />
      <FloorPlans />
      <Amenities />
      <About />
      <Testimonials />
      <SectionDivider />
      <FAQ />
      <ContactForm />
    </>
  );
}
