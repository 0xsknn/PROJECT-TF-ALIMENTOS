import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { insertContactSubmissionSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Extend the schema with additional validation
const contactFormSchema = insertContactSubmissionSchema.extend({
  name: z.string().min(3, {
    message: "O nome deve ter pelo menos 3 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, informe um email válido.",
  }),
  phone: z.string().min(8, {
    message: "Por favor, informe um telefone válido.",
  }).optional(),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define the form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Define the mutation
  const mutation = useMutation({
    mutationFn: (values: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
        variant: "default",
      });
      setIsSubmitted(true);
      // Reset the form
      form.reset();
      // Invalidate queries to refresh data
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
      console.error("Error submitting contact form:", error);
    },
  });

  // Define form submission handler
  function onSubmit(values: ContactFormValues) {
    mutation.mutate(values);
  }

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Contato" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-5xl mb-3 md:mb-4">
            Entre em Contato
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base mobile-text-fix">
            Estamos à disposição para responder suas dúvidas, receber feedback ou discutir oportunidades de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-4 md:p-8">
                <h2 className="font-heading font-bold text-xl md:text-2xl mb-4 md:mb-6">Envie uma Mensagem</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 md:p-6 text-center">
                    <h3 className="font-heading font-semibold text-lg md:text-xl mb-2">Mensagem Enviada!</h3>
                    <p className="text-sm md:text-base">Agradecemos seu contato. Nossa equipe retornará em breve.</p>
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      className="mt-4 bg-primary hover:bg-primary/90 text-sm md:text-base px-4 py-2 md:px-6 md:py-3 h-auto"
                    >
                      Enviar Outra Mensagem
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm md:text-base">Nome</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome completo" {...field} className="text-sm md:text-base" />
                              </FormControl>
                              <FormMessage className="text-xs md:text-sm" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm md:text-base">Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Seu email" {...field} className="text-sm md:text-base" />
                              </FormControl>
                              <FormMessage className="text-xs md:text-sm" />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm md:text-base">Telefone</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu telefone (opcional)" {...field} className="text-sm md:text-base" />
                            </FormControl>
                            <FormMessage className="text-xs md:text-sm" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm md:text-base">Mensagem</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Como podemos ajudar?" 
                                className="min-h-[120px] md:min-h-[150px] text-sm md:text-base" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-xs md:text-sm" />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-primary hover:bg-primary/90 text-sm md:text-base px-4 py-2 md:px-6 md:py-3 h-auto"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-4 md:p-8">
                <h2 className="font-heading font-bold text-xl md:text-2xl mb-4 md:mb-6">Informações de Contato</h2>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-base md:text-lg">Endereço</h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        Rodovia BR-153 Parte Desmembrada 11 Remanescente Area 1 - Zona de Extensao Urbana<br />
                        Cariri do Tocantins, TO - CEP 77453-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-base md:text-lg">Telefone</h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        (63) 98125-0698
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-base md:text-lg">Email</h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        tfalimentosltda1@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-base md:text-lg">Horário de Atendimento</h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8">
                  <h3 className="font-heading font-semibold text-base md:text-lg mb-3 md:mb-4">Siga-nos</h3>
                  <div className="flex space-x-3 md:space-x-4">
                    <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition">
                      <i className="fab fa-facebook-f w-4 h-4 md:w-5 md:h-5 flex items-center justify-center"></i>
                    </a>
                    <a href="https://www.instagram.com/tfalimentos/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition">
                      <i className="fab fa-instagram w-4 h-4 md:w-5 md:h-5 flex items-center justify-center"></i>
                    </a>
                    <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition">
                      <i className="fab fa-linkedin-in w-4 h-4 md:w-5 md:h-5 flex items-center justify-center"></i>
                    </a>
                    <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition">
                      <i className="fab fa-youtube w-4 h-4 md:w-5 md:h-5 flex items-center justify-center"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 md:mt-6">
              <Card>
                <CardContent className="p-4 md:p-8">
                  <h3 className="font-heading font-semibold text-base md:text-lg mb-3 md:mb-4">Departamentos</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h4 className="font-heading font-semibold text-sm md:text-base">Vendas Corporativas</h4>
                      <p className="text-gray-600 text-xs md:text-sm">tfalimentosltda1@gmail.com</p>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm md:text-base">Recursos Humanos</h4>
                      <p className="text-gray-600 text-xs md:text-sm">tfalimentosltda1@gmail.com</p>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm md:text-base">Suporte Técnico</h4>
                      <p className="text-gray-600 text-xs md:text-sm">tfalimentosltda1@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <h2 className="font-heading font-bold text-xl md:text-2xl mb-4 md:mb-6 text-center">Nossa Localização</h2>
          <div className="h-[250px] md:h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8879125647695!2d-48.69483208953723!3d-11.284374747747286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x934304e38f3b4033%3A0x84c36ea2a5b93181!2sCariri%20do%20Tocantins%2C%20TO%2C%2077453-000!5e0!3m2!1spt-BR!2sbr!4v1713022225358!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da localização da TF Alimentos em Cariri do Tocantins"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
