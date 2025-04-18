import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import blackFarmerImage from "../assets/Pedro-Stropasolas-Brasil-de-Fato.jpeg";
import CurrentHarvest from "@/components/home/CurrentHarvest";
import QualityCertification from "@/components/home/QualityCertification";
import ContactCTA from "@/components/home/ContactCTA";
import HeroSlider from "@/components/home/HeroSlider";
import { useState, useEffect, useCallback } from "react";

// Banner simplificado diretamente na página inicial
const SimpleBanner = () => {
  const [, navigate] = useLocation();
  
  return (
    <div className="relative h-[400px] md:h-[600px] overflow-hidden">
      <img 
        src={blackFarmerImage}
        alt="Qualidade em Grãos para sua Indústria" 
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
        <div className="px-4 w-full">
          <div className="max-w-xl text-white mx-auto">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Qualidade em Grãos para sua Indústria
            </h1>
            <p className="text-lg mb-6">
              Selecionamos os melhores grãos para garantir o padrão que sua produção exige
            </p>
            <a 
              href="/produtos" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-heading font-semibold px-6 py-3 rounded-md"
            >
              Conheça Nossos Produtos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <SimpleBanner />
        <HeroSlider />
      </div>
      <CurrentHarvest />
      <QualityCertification />
      <ContactCTA />
    </div>
  );
};

export default Home;
