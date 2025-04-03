export interface Certification {
  id: number;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  renewalDate: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Certificação ISO 22000",
    shortName: "ISO 22000",
    description: "Sistema de gestão de segurança alimentar que garante o controle de riscos em toda a cadeia produtiva.",
    icon: "ISO",
    renewalDate: "23/03/2023"
  },
  {
    id: 2,
    name: "Certificação Orgânica",
    shortName: "Selo Orgânico",
    description: "Para produtos cultivados sem o uso de agrotóxicos, fertilizantes químicos ou organismos geneticamente modificados.",
    icon: "ORG",
    renewalDate: "15/06/2023"
  },
  {
    id: 3,
    name: "Boas Práticas Agrícolas (BPA)",
    shortName: "BPA",
    description: "Conjunto de princípios aplicados à produção e ao processamento de alimentos visando a saúde humana e a proteção ao meio ambiente.",
    icon: "BPA",
    renewalDate: "10/04/2023"
  },
  {
    id: 4,
    name: "Análise de Perigos e Pontos Críticos de Controle",
    shortName: "HACCP",
    description: "Sistema preventivo que identifica, avalia e controla perigos significativos para a segurança dos alimentos.",
    icon: "HACCP",
    renewalDate: "05/02/2023"
  },
  {
    id: 5,
    name: "Rain Forest Alliance",
    shortName: "RFA",
    description: "Certificação que atesta o compromisso com a conservação da biodiversidade e meios de vida sustentáveis.",
    icon: "RFA",
    renewalDate: "30/05/2023"
  },
  {
    id: 6,
    name: "Selo Mais Integridade",
    shortName: "Mais Integridade",
    description: "Reconhecimento do Ministério da Agricultura para empresas que adotam práticas de integridade, responsabilidade social e sustentabilidade.",
    icon: "MI",
    renewalDate: "12/01/2023"
  }
];