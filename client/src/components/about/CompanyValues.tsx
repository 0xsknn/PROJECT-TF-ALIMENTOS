import { Leaf, CheckCircle, Handshake, Lightbulb } from "lucide-react";

const values = [
  {
    id: 1,
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "Sustentabilidade",
    description: "Compromisso com práticas agrícolas responsáveis que preservam o meio ambiente para as futuras gerações."
  },
  {
    id: 2,
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Qualidade",
    description: "Excelência em cada etapa do processo, do plantio à entrega, garantindo produtos que superam expectativas."
  },
  {
    id: 3,
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "Integridade",
    description: "Atuação ética e transparente em todas as relações comerciais, gerando confiança e parcerias duradouras."
  },
  {
    id: 4,
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Inovação",
    description: "Busca constante por novas tecnologias e processos que aprimorem nossos produtos e serviços."
  }
];

const CompanyValues = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
            Nossos Valores
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Princípios que norteiam nossas operações e relacionamentos com clientes, colaboradores e comunidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.id} className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
