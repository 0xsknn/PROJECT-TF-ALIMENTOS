import { Medal, Users, Globe } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl mb-6">
              Tradição e Qualidade em Grãos
            </h1>
            <p className="text-gray-600 mb-6">
              A TF Alimentos nasceu da paixão pela agricultura e do compromisso com a qualidade. 
              Há mais de 20 anos, nos dedicamos ao cultivo, beneficiamento e comercialização de grãos premium 
              para indústrias e distribuidores em todo o Brasil.
            </p>
            <p className="text-gray-600 mb-6">
              Nossa missão é fornecer produtos que unem a tradição do campo com as mais modernas técnicas de produção, 
              garantindo alimentos seguros, nutritivos e de alto rendimento para nossos clientes.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary mr-3">
                  <Medal className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold">20+</h4>
                  <p className="text-gray-600 text-sm">Anos de Experiência</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary mr-3">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold">150+</h4>
                  <p className="text-gray-600 text-sm">Colaboradores</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary mr-3">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold">5</h4>
                  <p className="text-gray-600 text-sm">Estados Atendidos</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1598963938025-98c46f9a9899?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=500&q=80"
              alt="Plantação de arroz" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
