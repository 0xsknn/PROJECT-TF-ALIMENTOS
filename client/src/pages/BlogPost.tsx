import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Tag } from "lucide-react";
import { BlogPost } from "@shared/schema";
import { formatDate } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPostPage = () => {
  const { id } = useParams();
  
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${id}`],
  });

  if (isLoading) {
    return (
      <div>
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Carregando..." },
          ]}
        />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-10 w-3/4 mb-4" />
            <div className="flex items-center space-x-6 mb-6">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-32" />
            </div>
            <Skeleton className="h-80 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div>
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Erro" },
          ]}
        />
        <div className="container mx-auto px-4 py-12 text-center">
          <Card>
            <CardContent className="pt-6">
              <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
              <p>O artigo que você está procurando não está disponível.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-8">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <User className="mr-2 h-4 w-4" />
              <span>Equipe TF Alimentos</span>
            </div>
            <div className="flex items-center mb-2">
              <Tag className="mr-2 h-4 w-4" />
              <span>Agricultura, Grãos</span>
            </div>
          </div>
          
          <div className="mb-8">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="font-heading font-semibold text-xl mb-4">Compartilhe este artigo</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-sky-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
