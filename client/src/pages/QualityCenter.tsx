import { useState } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";
import { certifications } from "@/data/certifications";
import ContactCTA from "@/components/home/ContactCTA";
import labImage from "@assets/Tecnico-agricola_.jpg";

// Importar imagens de certificações
import iso22000Image from "@assets/iso22000.png";
import organicImage from "@assets/org1.webp";
import bpaImage from "@assets/BPA3141.jpg";
import haccpImage from "@assets/haccp.png";
import rfaImage from "@assets/RainForest.png";
import miImage from "@assets/maisintegridade.webp";

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
              {/* ISO 22000 */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 flex items-center justify-center md:w-1/3">
                      <div className="h-24 w-24 flex items-center justify-center">
                        <img src={iso22000Image} alt="ISO 22000" className="max-h-full max-w-full object-contain" />
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="font-heading font-semibold text-xl mb-2 dark:text-white">Certificação ISO 22000</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">Sistema de gestão de segurança alimentar que garante o controle de riscos em toda a cadeia produtiva.</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Última renovação: 23/03/2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Selo Orgânico */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 flex items-center justify-center md:w-1/3">
                      <div className="h-24 w-24 flex items-center justify-center">
                        <img src={organicImage} alt="Selo Orgânico" className="max-h-full max-w-full object-contain" />
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="font-heading font-semibold text-xl mb-2 dark:text-white">Certificação Orgânica</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">Para produtos cultivados sem o uso de agrotóxicos, fertilizantes químicos ou organismos geneticamente modificados.</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Última renovação: 15/06/2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* BPA */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 flex items-center justify-center md:w-1/3">
                      <div className="h-24 w-24 flex items-center justify-center">
                        <img src={bpaImage} alt="BPA" className="max-h-full max-w-full object-contain" />
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="font-heading font-semibold text-xl mb-2 dark:text-white">Boas Práticas Agrícolas (BPA)</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">Conjunto de princípios aplicados à produção e ao processamento de alimentos visando a saúde humana e a proteção ao meio ambiente.</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Última renovação: 10/04/2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* HACCP */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 flex items-center justify-center md:w-1/3">
                      <div className="h-24 w-24 flex items-center justify-center">
                        <img src={haccpImage} alt="HACCP" className="max-h-full max-w-full object-contain" />
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="font-heading font-semibold text-xl mb-2 dark:text-white">Análise de Perigos e Pontos Críticos de Controle</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">Sistema preventivo que identifica, avalia e controla perigos significativos para a segurança dos alimentos.</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Última renovação: 05/02/2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Rain Forest Alliance */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 flex items-center justify-center md:w-1/3">
                      <div className="h-24 w-24 flex items-center justify-center">
                        <img src={rfaImage} alt="Rain Forest Alliance" className="max-h-full max-w-full object-contain" />
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="font-heading font-semibold text-xl mb-2 dark:text-white">Rain Forest Alliance</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">Certificação que atesta o compromisso com a conservação da biodiversidade e meios de vida sustentáveis.</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Última renovação: 30/05/2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Selo Mais Integridade */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 flex items-center justify-center md:w-1/3">
                      <div className="h-24 w-24 flex items-center justify-center">
                        <img src={miImage} alt="Selo Mais Integridade" className="max-h-full max-w-full object-contain" />
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="font-heading font-semibold text-xl mb-2 dark:text-white">Selo Mais Integridade</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">Reconhecimento do Ministério da Agricultura para empresas que adotam práticas de integridade, responsabilidade social e sustentabilidade.</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Última renovação: 12/01/2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                  src={labImage} 
                  alt="Técnico Agrícola Monitorando Plantação" 
                  className="w-full h-auto rounded-lg shadow-lg mb-6"
                />
                <h3 className="font-heading font-semibold text-2xl mb-4">
                  Controle de Qualidade em Campo
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nossa equipe técnica realiza monitoramento constante diretamente no campo, 
                  utilizando tecnologia de ponta para garantir a qualidade dos grãos desde a origem.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  O acompanhamento digital permite análises em tempo real das condições de cultivo, 
                  colheita e armazenamento, assegurando a rastreabilidade completa de nossos produtos.
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
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <CheckCircle className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-heading font-semibold text-lg mb-1 dark:text-white">{analysis.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{analysis.description}</p>
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
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-3xl mx-auto">
                Disponibilizamos laudos técnicos detalhados para todos os nossos produtos. Esses documentos 
                atestam a conformidade dos nossos grãos com os padrões de qualidade estabelecidos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Arroz com Casca",
                    code: "LAU-ARZ-001",
                    date: "15/04/2023",
                    icon: "📄"
                  },
                  {
                    title: "Soja Grão",
                    code: "LAU-SOJ-001",
                    date: "18/03/2023",
                    icon: "📄"
                  },
                  {
                    title: "Milho",
                    code: "LAU-MIL-001",
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
                <p className="text-gray-600 dark:text-gray-300 mb-4">
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
