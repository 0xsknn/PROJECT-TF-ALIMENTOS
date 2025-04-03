import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Award, Truck, Download } from "lucide-react";
import { ProductGallery } from "./ProductGallery";
import { Product } from "@shared/schema";

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

const ProductDetails = ({ product, relatedProducts }: ProductDetailsProps) => {
  const [selectedTab, setSelectedTab] = useState("description");

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <ProductGallery productName={product.name} />
          
          {/* Product Information */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <span className={`${product.isAvailable ? 'bg-yellow-500' : 'bg-red-500'} text-white text-xs px-2 py-1 rounded-full mr-2`}>
                  {product.isAvailable ? 'Disponível' : 'Limitado'}
                </span>
                <span className="text-gray-600 text-sm">Código: {product.id}</span>
              </div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Award className="text-yellow-500 mr-2 h-5 w-5" />
                  <span>Certificação ISO 22000</span>
                </div>
                <div className="flex items-center">
                  <Truck className="text-yellow-500 mr-2 h-5 w-5" />
                  <span>Entrega para todo Brasil</span>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Especificações Técnicas</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-300">
                        <td className="py-2 font-semibold">Classificação</td>
                        <td className="py-2">Tipo 1, Longo Fino</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-2 font-semibold">Umidade</td>
                        <td className="py-2">{product.moisture || "N/A"}</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-2 font-semibold">Impureza</td>
                        <td className="py-2">{product.impurity || "N/A"}</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-2 font-semibold">Rendimento</td>
                        <td className="py-2">95%</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-2 font-semibold">Grãos quebrados</td>
                        <td className="py-2">&lt; 2%</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">PH</td>
                        <td className="py-2">{product.ph || "N/A"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-lg mb-3">Disponibilidade</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-white border border-primary rounded-md px-4 py-2 text-primary font-semibold">
                    25kg
                  </div>
                  <div className="bg-white border border-primary rounded-md px-4 py-2 text-primary font-semibold">
                    50kg
                  </div>
                  <div className="bg-white border border-primary rounded-md px-4 py-2 text-primary font-semibold">
                    Big Bag 1000kg
                  </div>
                  <div className="bg-white border border-primary rounded-md px-4 py-2 text-primary font-semibold">
                    Granel
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-6 py-3 h-auto">
                    Solicitar Cotação
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-heading font-semibold px-6 py-3 h-auto"
                >
                  <Download className="mr-2 h-4 w-4" /> Baixar Laudo Técnico
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Description Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" onValueChange={setSelectedTab}>
            <TabsList className="border-b border-gray-300 w-full justify-start">
              <TabsTrigger 
                value="description" 
                className={`${selectedTab === 'description' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'} font-heading font-semibold px-4 py-2 mr-4`}
              >
                Descrição
              </TabsTrigger>
              <TabsTrigger 
                value="certifications" 
                className={`${selectedTab === 'certifications' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'} font-heading font-semibold px-4 py-2 mr-4`}
              >
                Certificações
              </TabsTrigger>
              <TabsTrigger 
                value="applications" 
                className={`${selectedTab === 'applications' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'} font-heading font-semibold px-4 py-2`}
              >
                Aplicações
              </TabsTrigger>
            </TabsList>
            
            <div className="py-6">
              <TabsContent value="description">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="font-heading font-semibold text-xl mb-4">Sobre o Produto</h3>
                    <p className="mb-4">
                      Nosso arroz beneficiado tipo 1 é um produto premium, resultado de cuidadoso processo de cultivo e 
                      beneficiamento. O processo de beneficiamento inclui as etapas de limpeza, descascamento, brunimento, 
                      polimento e classificação, garantindo grãos uniformes e de alta qualidade.
                    </p>
                    <p className="mb-4">
                      Cultivado em terras férteis e com controle rigoroso de temperatura e umidade, nosso arroz apresenta 
                      características superiores em termos de rendimento, aparência e sabor.
                    </p>
                    <p>
                      O baixo percentual de grãos quebrados e impurezas é resultado de técnicas avançadas de colheita e 
                      processamento, assegurando um produto final que atende às mais exigentes especificações do mercado.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-4">Destaques</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 h-5 w-5" />
                        <span>Alto rendimento após o cozimento</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 h-5 w-5" />
                        <span>Baixo índice de impurezas</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 h-5 w-5" />
                        <span>Grãos uniformes e soltos após o preparo</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 h-5 w-5" />
                        <span>Rastreabilidade completa da produção</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 h-5 w-5" />
                        <span>Produção com práticas agrícolas sustentáveis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="certifications">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 h-20 w-20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-primary">
                          <path d="M12 2L4 10l8 8 8-8-8-8z" />
                          <path d="M4 22h16" />
                          <path d="M12 18v4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-2">ISO 22000</h4>
                        <p className="text-gray-600">
                          Certificação internacional que garante que nosso sistema de gestão de segurança de alimentos 
                          atende aos padrões globais, assegurando produtos seguros para consumo.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 h-20 w-20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-primary">
                          <polyline points="9 11 12 14 22 4" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-2">HACCP</h4>
                        <p className="text-gray-600">
                          Sistema de Análise de Perigos e Pontos Críticos de Controle, garantindo que todos os riscos biológicos, 
                          químicos e físicos sejam preventivamente controlados no processo produtivo.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 h-20 w-20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-primary">
                          <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l4 4L7 17l-4-4L13 3z" />
                          <path d="M17 8l4 4" />
                          <path d="M16 15l2 2" />
                          <path d="M9 10l2 2" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-2">Boas Práticas Agrícolas</h4>
                        <p className="text-gray-600">
                          Certificação que atesta a utilização de práticas sustentáveis de produção, com respeito ao meio ambiente 
                          e às comunidades locais.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 h-20 w-20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-primary">
                          <rect x="3" y="4" width="18" height="16" rx="2" />
                          <path d="M7 8h10" />
                          <path d="M7 12h10" />
                          <path d="M7 16h10" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-2">Produto Brasileiro</h4>
                        <p className="text-gray-600">
                          Selo que identifica e valoriza produtos genuinamente brasileiros, produzidos com insumos nacionais e 
                          gerando empregos no país.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="applications">
                <h3 className="font-heading font-semibold text-xl mb-4">Aplicações e Usos</h3>
                <p className="mb-6">
                  O arroz beneficiado tipo 1 é versátil e pode ser utilizado em diversas aplicações na indústria alimentícia e no varejo:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="text-primary text-3xl mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                        <path d="M15 11h.01M11 15h.01M16 16h.01M10 11h.01M17 11h.01M11 11h.01M11 13h.01M13 15h.01M13 13h.01M15 15h.01M17 15h.01M17 13h.01M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
                        <path d="M3 7h18" />
                        <path d="M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
                      </svg>
                    </div>
                    <h4 className="font-heading font-semibold text-lg mb-2">Indústria Alimentícia</h4>
                    <ul className="space-y-2">
                      <li>• Refeições prontas congeladas</li>
                      <li>• Produção de cereais matinais</li>
                      <li>• Farinha de arroz para panificação</li>
                      <li>• Alimentos infantis</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="text-primary text-3xl mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                        <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                        <path d="M12 13v5" />
                        <path d="M8 13v2" />
                        <path d="M16 13v2" />
                      </svg>
                    </div>
                    <h4 className="font-heading font-semibold text-lg mb-2">Varejo e Distribuição</h4>
                    <ul className="space-y-2">
                      <li>• Empacotamento para venda direta</li>
                      <li>• Redes de supermercados</li>
                      <li>• Distribuidores de alimentos</li>
                      <li>• Mercados institucionais</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="text-primary text-3xl mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                        <path d="M2 20h20" />
                        <path d="M5 17h14v-5H5v5Z" />
                        <path d="M20 8H4a2 2 0 0 0-2 2v1h20v-1a2 2 0 0 0-2-2Z" />
                        <path d="M8 12h8" />
                        <path d="M12 12v5" />
                      </svg>
                    </div>
                    <h4 className="font-heading font-semibold text-lg mb-2">Food Service</h4>
                    <ul className="space-y-2">
                      <li>• Restaurantes comerciais</li>
                      <li>• Cozinhas industriais</li>
                      <li>• Hospitais e escolas</li>
                      <li>• Catering para eventos</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Produtos Relacionados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div 
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProduct.imageUrl} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-lg mb-1">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{relatedProduct.shortDescription}</p>
                    <Link href={`/produtos/${relatedProduct.slug}`}>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white font-heading font-semibold text-sm"
                      >
                        Ver Detalhes
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
