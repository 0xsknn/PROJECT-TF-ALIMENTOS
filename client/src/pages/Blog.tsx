import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@shared/schema";
import { formatDate } from "@/lib/utils";

const Blog = () => {
  const [, setLocation] = useLocation();
  
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  if (isLoading) {
    return (
      <div>
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Blog" },
          ]}
        />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl mb-4">Blog Técnico</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carregando conteúdo especializado sobre práticas agrícolas, mercado de grãos e novidades do setor...
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="p-0">
                  <div className="h-48 bg-gray-300"></div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="h-4 bg-gray-300 w-1/3 mb-2"></div>
                  <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 w-full mb-2"></div>
                </CardContent>
                <CardFooter>
                  <div className="h-5 bg-gray-300 w-1/3"></div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !posts) {
    return (
      <div>
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Blog" },
          ]}
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-heading font-bold text-4xl mb-4">Blog Técnico</h1>
          <p className="text-red-500 mb-6">Ocorreu um erro ao carregar os artigos.</p>
          <Button onClick={() => window.location.reload()}>Tentar Novamente</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Blog" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl mb-4">Blog Técnico</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conteúdo especializado sobre práticas agrícolas, mercado de grãos e novidades do setor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
                <CardTitle className="font-heading font-bold text-xl mb-2">{post.title}</CardTitle>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-primary font-heading font-semibold hover:underline flex items-center"
                >
                  Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
