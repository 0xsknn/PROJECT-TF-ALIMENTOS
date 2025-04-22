import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { certifications } from "@/data/certifications";

// Importar imagens de certificações
import iso22000Image from "@assets/iso22000.png";
import organicImage from "@assets/org1.webp";
import bpaImage from "@assets/BPA3141.jpg";
import haccpImage from "@assets/haccp.png";

const QualityCertification = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">
              Certificações de Qualidade
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base mobile-text-fix">
              Na TF Alimentos, a qualidade não é apenas uma promessa, é uma garantia respaldada por rigorosos 
              processos de certificação. Nossos produtos atendem aos mais elevados padrões nacionais e internacionais.
            </p>
            
            <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
              {certifications.slice(0, 3).map((cert) => (
                <div key={cert.id} className="flex items-start">
                  <div className="text-primary mr-2 md:mr-3 mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base md:text-lg">{cert.name}</h3>
                    <p className="text-gray-600 text-sm md:text-base mobile-text-fix">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/qualidade/certificacoes">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold text-sm md:text-base px-4 py-3 md:px-6 md:py-4 h-auto"
              >
                Saiba Mais
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-3 md:gap-6 mt-6 lg:mt-0">
            {/* ISO 22000 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 lg:p-8 rounded-lg flex flex-col items-center justify-center">
              <div className="h-14 w-14 md:h-20 md:w-20 flex items-center justify-center mb-2 md:mb-4">
                <img src={iso22000Image} alt="ISO 22000" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-heading font-semibold text-center text-sm md:text-base dark:text-white">ISO 22000</h4>
            </div>
            
            {/* Selo Orgânico */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 lg:p-8 rounded-lg flex flex-col items-center justify-center">
              <div className="h-14 w-14 md:h-20 md:w-20 flex items-center justify-center mb-2 md:mb-4">
                <img src={organicImage} alt="Selo Orgânico" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-heading font-semibold text-center text-sm md:text-base dark:text-white">Selo Orgânico</h4>
            </div>
            
            {/* BPA */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 lg:p-8 rounded-lg flex flex-col items-center justify-center">
              <div className="h-14 w-14 md:h-20 md:w-20 flex items-center justify-center mb-2 md:mb-4">
                <img src={bpaImage} alt="BPA" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-heading font-semibold text-center text-sm md:text-base dark:text-white">BPA</h4>
            </div>
            
            {/* HACCP */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 lg:p-8 rounded-lg flex flex-col items-center justify-center">
              <div className="h-14 w-14 md:h-20 md:w-20 flex items-center justify-center mb-2 md:mb-4">
                <img src={haccpImage} alt="HACCP" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-heading font-semibold text-center text-sm md:text-base dark:text-white">HACCP</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCertification;
