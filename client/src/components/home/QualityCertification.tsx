import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { certifications } from "@/data/certifications";

const QualityCertification = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Certificações de Qualidade
            </h2>
            <p className="text-gray-600 mb-6">
              Na TF Alimentos, a qualidade não é apenas uma promessa, é uma garantia respaldada por rigorosos 
              processos de certificação. Nossos produtos atendem aos mais elevados padrões nacionais e internacionais.
            </p>
            
            <div className="space-y-4 mb-6">
              {certifications.slice(0, 3).map((cert) => (
                <div key={cert.id} className="flex items-start">
                  <div className="text-primary mr-3 mt-1">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">{cert.name}</h3>
                    <p className="text-gray-600">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/qualidade/certificacoes">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-6 py-6 h-auto"
              >
                Saiba Mais
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {certifications.slice(0, 4).map((cert) => (
              <div key={cert.id} className="bg-gray-100 p-8 rounded-lg flex flex-col items-center justify-center">
                <div className="h-20 w-20 flex items-center justify-center mb-4">
                  {cert.icon}
                </div>
                <h4 className="font-heading font-semibold text-center">{cert.shortName}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCertification;
