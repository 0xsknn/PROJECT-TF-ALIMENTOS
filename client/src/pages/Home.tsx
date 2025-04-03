import HeroSlider from "@/components/home/HeroSlider";
import CurrentHarvest from "@/components/home/CurrentHarvest";
import QualityCertification from "@/components/home/QualityCertification";
import ContactCTA from "@/components/home/ContactCTA";

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
