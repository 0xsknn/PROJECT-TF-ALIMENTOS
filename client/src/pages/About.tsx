import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AboutHero from "@/components/about/AboutHero";
import CompanyValues from "@/components/about/CompanyValues";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import TeamSection from "@/components/about/TeamSection";
import ContactCTA from "@/components/home/ContactCTA";

const About = () => {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Sobre Nós" },
        ]}
      />
      <AboutHero />
      <CompanyValues />
      <CompanyTimeline />
      <TeamSection />
      <ContactCTA />
    </div>
  );
};

export default About;
