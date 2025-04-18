import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import blackFarmerImage from "../assets/Pedro-Stropasolas-Brasil-de-Fato.jpeg";
import CurrentHarvest from "@/components/home/CurrentHarvest";
import QualityCertification from "@/components/home/QualityCertification";
import ContactCTA from "@/components/home/ContactCTA";
import { useState, useEffect, useCallback } from "react";

// Banner simplificado diretamente na página inicial
const SimpleBanner = () => {
  const [, navigate] = useLocation();
  
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      <img 
        src={blackFarmerImage}
        alt="Qualidade em Grãos para sua Indústria" 
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl text-white">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Qualidade em Grãos para sua Indústria
            </h1>
            <p className="text-lg mb-6">
              Selecionamos os melhores grãos para garantir o padrão que sua produção exige
            </p>
            <a 
              href="/produtos" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-heading font-semibold px-6 py-6 rounded-md"
            >
              Conheça Nossos Produtos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Segundo banner para produtos específicos
const SecondBanner = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      <img 
        src="/images/culitvoarroz.jpg"
        alt="Tecnologia e Tradição no Campo" 
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl text-white ml-auto">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Tecnologia e Tradição no Campo
            </h2>
            <p className="text-lg mb-6">
              Combinamos métodos tradicionais com tecnologia de ponta para oferecer produtos com a qualidade que seu negócio merece
            </p>
            <a 
              href="/qualidade" 
              className="inline-block bg-verde-lodo hover:bg-green-800 text-white font-heading font-semibold px-6 py-6 rounded-md"
            >
              Conheça Nosso Processo
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
      <SimpleBanner />
      <CurrentHarvest />
      <SecondBanner />
      <QualityCertification />
      <ContactCTA />
    </div>
  );
};

export default Home;
