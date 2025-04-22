import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define um tipo para os slides
interface SlideItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// Dados dos slides
const bannerSlides: SlideItem[] = [
  {
    id: 1,
    imageUrl: "/images/ppearpp.bmp",
    title: "Qualidade em Grãos para sua Indústria",
    description: "Selecionamos os melhores grãos para garantir o padrão que sua produção exige",
    buttonText: "Conheça Nossos Produtos",
    buttonLink: "/produtos"
  },
  {
    id: 3,
    imageUrl: "/images/tratormilhooo.jpeg",
    title: "Tecnologia e Tradição no Campo",
    description: "Combinamos métodos tradicionais com tecnologia de ponta para oferecer o melhor",
    buttonText: "Nosso Processo",
    buttonLink: "/qualidade"
  }
];

const HeroSlider = () => {
  // Estado para controlar qual slide está ativo
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para avançar para o próximo slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
  }, []);

  // Função para voltar para o slide anterior
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
  }, []);

  // Função para ir para um slide específico
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Efeito para mudar slides automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Container de slides */}
      <div className="h-full relative">
        {bannerSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Imagem de fundo */}
            <img 
              src={slide.imageUrl}
              alt={slide.title} 
              className="object-cover w-full h-full"
            />
            
            {/* Overlay com conteúdo */}
            <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-40 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-[90%] sm:max-w-[80%] md:max-w-xl text-white mobile-text-fix">
                  <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-1 sm:mb-2 md:mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg mb-3 md:mb-6 mobile-text-fix max-w-[90%] md:max-w-full">
                    {slide.description}
                  </p>
                  
                  {/* Links diretos sem depender de JavaScript */}
                  <a 
                    href={slide.buttonLink}
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-heading font-semibold px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 text-xs sm:text-sm md:text-base rounded-md"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicadores de slide */}
      <div className="absolute bottom-4 md:bottom-5 left-0 right-0 flex justify-center space-x-2">
        {bannerSlides.map((_, index) => (
          <button 
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Botões de navegação */}
      <button 
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 md:bg-opacity-50 md:hover:bg-opacity-75 flex items-center justify-center focus:outline-none"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </button>
      <button 
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 md:bg-opacity-50 md:hover:bg-opacity-75 flex items-center justify-center focus:outline-none"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </button>
      
      {/* Paginação de slide para visualização em telas menores */}
      <div className="absolute bottom-1 left-0 right-0 text-center text-white text-xs opacity-70 md:hidden">
        <span>{currentSlide + 1} / {bannerSlides.length}</span>
      </div>
    </div>
  );
};

export default HeroSlider;
