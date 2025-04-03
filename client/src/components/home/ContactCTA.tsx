import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Entre em Contato
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Quer saber mais sobre nossos produtos ou fazer um pedido? 
            Nossa equipe está pronta para atender às suas necessidades.
          </p>
          <Link href="/contato">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-heading font-semibold px-8 py-4 h-auto">
              Fale Conosco
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
