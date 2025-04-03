import { useState } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";
import { certifications } from "@/data/certifications";
import ContactCTA from "@/components/home/ContactCTA";

const QualityCenter = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Centro de Qualidade" },
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Centro de Qualidade
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Na TF Alimentos, a qualidade não é apenas um compromisso, é nossa essência. 
            Conheça nossos processos, certificações e laudos técnicos.
          </p>
        </div>

        <Tabs defaultValue="certifications" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full flex justify-center mb-8">
            <TabsTrigger value="certifications" className="px-6 py-3">Certificações</TabsTrigger>
            <TabsTrigger value="laboratory" className="px-6 py-3">Laboratório</TabsTrigger>
            <TabsTrigger value="reports" className="px-6 py-3">Laudos Técnicos</TabsTrigger>
          </TabsList>

          <TabsContent value="certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {certifications.map((cert) => (
                <Card key={cert.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-primary/5 p-6 flex items-center justify-center md:w-1/3">
                        <div className="h-24 w-24 flex items-center justify-center">
                          {cert.icon}
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="font-heading font-semibold text-xl mb-2">{cert.name}</h3>
                        <p className="text-gray-600 mb-4">{cert.description}</p>
                        <p className="text-sm text-gray-500">Última renovação: {cert.renewalDate}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3 className="font-heading font-semibold text-2xl mb-4">
                    Compromisso com a Excelência
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Nossas certificações são resultado de um rigoroso processo de adequação às normas 
                    nacionais e internacionais. Todos os nossos processos são auditados regularmente 
                    para garantir a conformidade e melhoria contínua.
                  </p>
                  <p className="text-gray-600">
                    Solicite a cópia digital de qualquer uma de nossas certificações para verificação.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Download className="mr-2 h-5 w-5" /> Solicitar Certificações
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="laboratory">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80" 
                  alt="Laboratório de Qualidade" 
                  className="w-full h-auto rounded-lg shadow-lg mb-6"
                />
                <h3 className="font-heading font-semibold text-2xl mb-4">
                  Laboratório de Análises
                </h3>
                <p className="text-gray-600 mb-4">
                  Nosso laboratório próprio realiza análises físico-químicas completas em todas as etapas 
                  do processo produtivo, garantindo a rastreabilidade e a qualidade dos nossos produtos.
                </p>
                <p className="text-gray-600">
                  Equipado com tecnologia de ponta, nosso laboratório possibilita o monitoramento contínuo 
                  dos parâmetros de qualidade estabelecidos pelas normas nacionais e internacionais.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-2xl mb-6">
                  Análises Realizadas
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Análise de Umidade",
                      description: "Determinação do teor de umidade do grão, essencial para garantir a conservação adequada e evitar o desenvolvimento de fungos e micotoxinas."
                    },
                    {
                      title: "Análise de Impurezas",
                      description: "Quantificação e classificação de materiais estranhos e impurezas presentes nos lotes de grãos."
                    },
                    {
                      title: "Análise de Grãos Quebrados",
                      description: "Determinação do percentual de grãos quebrados, indicador importante para a qualidade e rendimento no beneficiamento."
                    },
                    {
                      title: "Determinação de pH",
                      description: "Medição do pH dos grãos e seus derivados, garantindo a acidez adequada para segurança alimentar."
                    },
                    {
                      title: "Análise Microbiológica",
                      description: "Identificação e quantificação de micro-organismos, garantindo a segurança do produto final."
                    }
                  ].map((analysis, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <CheckCircle className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-heading font-semibold text-lg mb-1">{analysis.title}</h4>
                          <p className="text-gray-600 text-sm">{analysis.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <div className="mb-8">
              <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
                Disponibilizamos laudos técnicos detalhados para todos os nossos produtos. Esses documentos 
                atestam a conformidade dos nossos grãos com os padrões de qualidade estabelecidos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Arroz Beneficiado",
                    code: "LAU-ARZ-001",
                    date: "15/04/2023",
                    icon: "📄"
                  },
                  {
                    title: "Arroz Integral",
                    code: "LAU-ARZ-002",
                    date: "22/04/2023",
                    icon: "📄"
                  },
                  {
                    title: "Arroz Parboilizado",
                    code: "LAU-ARZ-003",
                    date: "05/05/2023",
                    icon: "📄"
                  },
                  {
                    title: "Soja Grão",
                    code: "LAU-SOJ-001",
                    date: "18/03/2023",
                    icon: "📄"
                  },
                  {
                    title: "Soja Não Transgênica",
                    code: "LAU-SOJ-002",
                    date: "10/04/2023",
                    icon: "📄"
                  },
                  {
                    title: "Análise de Micotoxinas",
                    code: "LAU-MIC-001",
                    date: "30/03/2023",
                    icon: "📄"
                  }
                ].map((report, index) => (
                  <Card key={index} className="transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{report.icon}</div>
                        <div>
                          <h4 className="font-heading font-semibold">{report.title}</h4>
                          <p className="text-gray-500 text-sm">Código: {report.code}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Data: {report.date}</span>
                        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                          <Download className="h-4 w-4 mr-1" /> Baixar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Solicitar Laudo Específico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Não encontrou o laudo que precisa? Entre em contato conosco informando o produto e o 
                  tipo de análise desejada. Nossa equipe técnica providenciará o documento solicitado.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Solicitar Laudo
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <ContactCTA />
    </div>
  );
};

export default QualityCenter;
