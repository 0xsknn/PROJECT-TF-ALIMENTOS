import { Product } from "@shared/schema";

export const mockProducts: Product[] = [
  {
    id: 2,
    name: "Soja Grão",
    slug: "soja-grao",
    description: "Soja não transgênica, cultivada com práticas sustentáveis. Ideal para processamento industrial. Grãos uniformes de alto valor nutricional, produzidos com técnicas avançadas de cultivo e colheita.",
    shortDescription: "Soja não transgênica, cultivada com práticas sustentáveis. Ideal para processamento industrial.",
    category: "soja",
    imageUrl: "/images/shieahieax.png",
    isAvailable: true,
    isHighlighted: true,
    moisture: "14%",
    impurity: "1%",
    ph: "6.5",
    createdAt: new Date()
  },
  {
    id: 3,
    name: "Arroz com Casca",
    slug: "arroz-com-casca",
    description: "Arroz com casca de alta qualidade, utilizado como matéria-prima para diversos produtos e subprodutos. Pode ser processado para obtenção de outros tipos de arroz conforme a necessidade da indústria.",
    shortDescription: "Arroz com casca de alta qualidade, matéria-prima para diversos produtos e subprodutos da indústria alimentícia.",
    category: "arroz",
    imageUrl: "/images/arrozcasca.jpg",
    isAvailable: true,
    isHighlighted: true,
    moisture: "12.5%",
    impurity: "0.8%",
    ph: "6.9",
    createdAt: new Date()
  },
  {
    id: 4,
    name: "Milho",
    slug: "milho",
    description: "Milho de alta qualidade, cultivado com técnicas sustentáveis e modernas. Ideal para processamento industrial e alimentação animal. Grãos uniformes com excelente valor nutricional.",
    shortDescription: "Milho de alta qualidade para processamento industrial e alimentação animal, cultivado com práticas sustentáveis.",
    category: "milho",
    imageUrl: "/images/milho11.png",
    isAvailable: true,
    isHighlighted: true,
    moisture: "13.2%",
    impurity: "0.9%",
    ph: "6.7",
    createdAt: new Date()
  }
];
