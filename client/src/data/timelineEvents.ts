export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 2002,
    title: "Fundação da Empresa",
    description: "A TF Alimentos inicia suas operações com foco no beneficiamento de arroz para o mercado regional, com uma pequena unidade no interior do Rio Grande do Sul."
  },
  {
    year: 2008,
    title: "Expansão para Soja",
    description: "Ampliação da linha de produtos com a entrada no mercado de soja, expandindo capacidade produtiva e iniciando exportações para países do Mercosul."
  },
  {
    year: 2013,
    title: "Certificação ISO 22000",
    description: "Conquista da certificação internacional de segurança alimentar, marcando um importante passo na garantia de qualidade e abrindo portas para novos mercados."
  },
  {
    year: 2018,
    title: "Centro de Pesquisa e Qualidade",
    description: "Inauguração do laboratório próprio para pesquisa e desenvolvimento de novos produtos, com foco em sustentabilidade e valor nutricional."
  },
  {
    year: 2023,
    title: "Modernização e Automação",
    description: "Investimento em tecnologias avançadas para automação do processo produtivo, aumentando a eficiência e reduzindo o impacto ambiental das operações."
  }
];
