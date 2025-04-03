import HeroSlider from "@/components/home/HeroSlider";
import CurrentHarvest from "@/components/home/CurrentHarvest";
import QualityCertification from "@/components/home/QualityCertification";
import LatestBlogPosts from "@/components/home/LatestBlogPosts";
import ContactCTA from "@/components/home/ContactCTA";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <CurrentHarvest />
      <QualityCertification />
      <LatestBlogPosts />
      <ContactCTA />
    </div>
  );
};

export default Home;
