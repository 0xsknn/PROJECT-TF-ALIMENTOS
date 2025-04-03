import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AboutHero from "@/components/about/AboutHero";
import CompanyValues from "@/components/about/CompanyValues";
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
      <ContactCTA />
    </div>
  );
};

export default About;
