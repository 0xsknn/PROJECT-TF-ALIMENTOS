import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { BlogPost } from "@shared/schema";
import { formatDate } from "@/lib/utils";

const LatestBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiRequest("GET", "/api/blog/latest", undefined);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar posts. Por favor, tente novamente mais tarde.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">Blog Técnico</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carregando conteúdo especializado sobre práticas agrícolas...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden p-6 animate-pulse">
                <div className="h-48 bg-gray-300 mb-4"></div>
                <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 w-full mb-4"></div>
                <div className="h-4 bg-gray-300 w-1/3"></div>
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">Blog Técnico</h2>
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">Blog Técnico</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conteúdo especializado sobre práticas agrícolas, mercado de grãos e novidades do setor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary font-heading font-semibold hover:underline flex items-center">
                  Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white font-heading font-semibold px-6 py-6 h-auto"
            >
              Ver Todos os Artigos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
