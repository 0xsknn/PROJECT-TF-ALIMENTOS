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
      <section className="py-8 md:py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-2 dark:text-white">Safra Atual</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Carregando produtos da nossa colheita mais recente...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-4 md:p-6 animate-pulse transition-colors duration-300">
                <div className="h-48 md:h-56 lg:h-64 bg-gray-300 dark:bg-gray-700 mb-4"></div>
                <div className="h-5 md:h-6 bg-gray-300 dark:bg-gray-700 w-3/4 mb-2"></div>
                <div className="h-3 md:h-4 bg-gray-300 dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-8 md:h-10 bg-gray-300 dark:bg-gray-700 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 md:py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-2 dark:text-white">Safra Atual</h2>
            <p className="text-red-500 dark:text-red-400 mb-4 text-sm md:text-base">{error}</p>
            <Button onClick={() => window.location.reload()} className="text-sm md:text-base px-4 py-2 md:px-6 md:py-3 h-auto">
              Tentar Novamente
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-2 dark:text-white">Safra Atual</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base mobile-text-fix">
            Conheça os produtos disponíveis da nossa colheita mais recente, selecionados com os mais altos padrões de qualidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg dark:shadow-gray-900"
            >
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-bold text-lg md:text-xl dark:text-white">{product.name}</h3>
                  <span className={`${product.isAvailable ? 'bg-yellow-500' : 'bg-red-500'} text-white text-xs px-2 py-1 rounded-full flex-shrink-0 ml-2`}>
                    {product.isAvailable ? 'Disponível' : 'Limitado'}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 text-xs md:text-sm mobile-text-fix">{product.shortDescription}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {product.moisture && (
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-0.5 md:py-1 rounded-full">
                      Umidade: {product.moisture}
                    </span>
                  )}
                  {product.impurity && (
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-0.5 md:py-1 rounded-full">
                      Impureza: {product.impurity}
                    </span>
                  )}
                </div>
                <Link href={`/produtos/${product.slug}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-heading font-semibold text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 h-auto">
                    Ver Detalhes
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Link href="/produtos">
            <Button 
              variant="outline" 
              className="border-primary text-primary dark:text-green-400 dark:border-green-400 hover:bg-primary hover:text-white dark:hover:bg-green-500 dark:hover:text-white font-heading font-semibold text-sm md:text-base px-4 py-2 md:px-6 md:py-3 h-auto"
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
