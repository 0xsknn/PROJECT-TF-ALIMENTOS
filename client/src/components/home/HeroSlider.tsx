import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: "https://images.pexels.com/photos/1459331/pexels-photo-1459331.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1",
    title: "Qualidade em Grãos para sua Indústria",
    description: "Selecionamos os melhores grãos para garantir o padrão que sua produção exige",
    buttonText: "Conheça Nossos Produtos",
    buttonLink: "/produtos"
  },
  {
    id: 2,
    imageUrl: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1",
    title: "Compromisso com a Agricultura Responsável",
    description: "Produção sustentável com respeito ao meio ambiente e às comunidades locais",
    buttonText: "Nossa Sustentabilidade",
    buttonLink: "/sobre"
  },
  {
    id: 3,
    imageUrl: "https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1",
    title: "Tecnologia e Tradição no Campo",
    description: "Combinamos métodos tradicionais com tecnologia de ponta para oferecer o melhor",
    buttonText: "Nosso Processo",
    buttonLink: "/qualidade"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="hero-slider relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slider container */}
      <div className="slider-container h-full relative">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`slide absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={slide.imageUrl}
              alt={slide.title} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-xl text-white">
                  <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg mb-6">
                    {slide.description}
                  </p>
                  <Link href={slide.buttonLink}>
                    <Button 
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-heading font-semibold px-6 py-6 rounded-md h-auto"
                    >
                      {slide.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Slider controls */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white" 
                : "bg-white bg-opacity-50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Slider arrows */}
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 flex items-center justify-center"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 flex items-center justify-center"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default HeroSlider;
