import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import CurrentHarvest from "@/components/home/CurrentHarvest";
import QualityCertification from "@/components/home/QualityCertification";
import ContactCTA from "@/components/home/ContactCTA";
import HeroSlider from "@/components/home/HeroSlider";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <CurrentHarvest />
      <QualityCertification />
      <ContactCTA />
    </div>
  );
};

export default Home;
