import HeroSection from "../pages/HeroSection";
import ChooseSection from "../pages/ChooseSection";
import Testimonials from "../pages/Testimonials";
import Faqus from "../pages/Faqs";
import ServicesSection from "./ServicesSection";
import Whyus from "../pages/Whyus";
import SolutionSector from "./SolutionSector";
import ContactCard from "./ContactCard";
import Courosel from "./Courosel";
const Home = () => {
  return (
    <>
      <HeroSection />
      <ChooseSection />
      <Whyus />
      <Courosel/>
      <ServicesSection />
      
      <Testimonials />

      <SolutionSector />
      
      
      <Faqus />
      {/* <ContactCard /> */}
    </>
  );
};

export default Home;
