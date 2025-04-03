import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { Product } from "@shared/schema";

const CurrentHarvest = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiRequest("GET", "/api/products/highlighted", undefined);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar produtos. Por favor, tente novamente mais tarde.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">Safra Atual</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carregando produtos da nossa colheita mais recente...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden p-6 animate-pulse">
                <div className="h-64 bg-gray-300 mb-4"></div>
                <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 w-full mb-4"></div>
                <div className="h-10 bg-gray-300 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">Safra Atual</h2>
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>Tentar Novamente</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">Safra Atual</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os produtos disponíveis da nossa colheita mais recente, selecionados com os mais altos padrões de qualidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-bold text-xl">{product.name}</h3>
                  <span className={`${product.isAvailable ? 'bg-yellow-500' : 'bg-red-500'} text-white text-xs px-2 py-1 rounded-full`}>
                    {product.isAvailable ? 'Disponível' : 'Limitado'}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.moisture && (
                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                      Umidade: {product.moisture}
                    </span>
                  )}
                  {product.impurity && (
                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                      Impureza: {product.impurity}
                    </span>
                  )}
                </div>
                <Link href={`/produtos/${product.slug}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-heading font-semibold">
                    Ver Detalhes
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/produtos">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white font-heading font-semibold px-6 py-6 h-auto"
            >
              Ver Todos os Produtos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurrentHarvest;
