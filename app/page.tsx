import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import SearchJourney from "@/components/sections/SearchJourney";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonial from "@/components/sections/Testimonial";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SearchJourney />
        <Stats />
        <Services />
        <Process />
        <Testimonial />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
