import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="bg-primary py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">
            Entre em Contato
          </h2>
          <p className="max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base mobile-text-fix">
            Quer saber mais sobre nossos produtos ou fazer um pedido? 
            Nossa equipe está pronta para atender às suas necessidades.
          </p>
          <Link href="/contato">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-heading font-semibold text-sm md:text-base px-6 py-3 md:px-8 md:py-4 h-auto">
              Fale Conosco
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
