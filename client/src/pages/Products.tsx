import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactCTA from "@/components/home/ContactCTA";
import type { Product } from "@shared/schema";

// Import product images
import arrozComCascaImg from "@assets/arroz3333.jpg";
import sojaGraoImg from "@assets/inteirosoja.png";
import milhoImg from "@assets/milho11.png";

// Mapeamento de imagens para cada produto
const productImages: Record<string, string> = {
  "arroz-com-casca": arrozComCascaImg,
  "soja-grao": sojaGraoImg,
  "milho": milhoImg
};

const Products = () => {
  // Consulta para obter todos os produtos da API
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Produtos" },
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Nossos Produtos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossa linha de grãos de alta qualidade, desenvolvidos com os mais rigorosos padrões de cultivo e processamento.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">Erro ao carregar produtos. Por favor, tente novamente.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.map((product) => (
              <Card key={product.id} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={productImages[product.slug] || ""}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="font-heading font-bold text-2xl mb-3">{product.name}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.shortDescription}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <Button 
                      asChild
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Link href={`/produtos/${product.slug}`}>
                        Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-16 bg-gray-100 rounded-lg p-8">
          <div className="text-center mb-6">
            <h2 className="font-heading font-bold text-2xl">Precisa de Informações Específicas?</h2>
            <p className="text-gray-600 mt-2">
              Nossa equipe técnica está à disposição para fornecer informações detalhadas sobre 
              especificações, disponibilidade e aplicações dos nossos produtos.
            </p>
          </div>
          <div className="flex justify-center">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/contato">
                Fale com um Especialista
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <ContactCTA />
    </div>
  );
};

export default Products;