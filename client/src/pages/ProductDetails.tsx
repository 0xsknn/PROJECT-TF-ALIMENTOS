import { useState, useEffect } from "react";
import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import ProductDetailsComponent from "@/components/products/ProductDetails";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Product } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetails = () => {
  const { id } = useParams();
  
  const { data: product, isLoading, error } = useQuery({
    queryKey: [`/api/products/${id}`],
  });
  
  const { data: relatedProducts, isLoading: isLoadingRelated } = useQuery({
    queryKey: ['/api/products'],
    select: (data: Product[]) => 
      data
        .filter((p) => p.slug !== id)
        .filter((p) => p.category === product?.category)
        .slice(0, 4),
    enabled: !!product,
  });

  if (isLoading) {
    return (
      <div>
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Produtos", href: "/produtos" },
            { label: "Carregando..." },
          ]}
        />
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Skeleton className="h-[400px] w-full rounded-lg" />
              <div>
                <Skeleton className="h-8 w-1/3 mb-2" />
                <Skeleton className="h-12 w-3/4 mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-full mb-4" />
                
                <div className="space-y-4 mb-6">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-6 w-1/2" />
                </div>
                
                <Skeleton className="h-64 w-full mb-6" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div>
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Produtos", href: "/produtos" },
            { label: "Erro" },
          ]}
        />
        <div className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
            <p className="mb-6">Não foi possível encontrar o produto solicitado.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Produtos", href: "/produtos" },
          { label: product.name },
        ]}
      />
      <ProductDetailsComponent 
        product={product} 
        relatedProducts={relatedProducts || []} 
      />
    </div>
  );
};

export default ProductDetails;
