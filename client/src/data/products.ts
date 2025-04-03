import { Product } from "@shared/schema";

export const mockProducts: Product[] = [
  {
    id: 2,
    name: "Soja Grão",
    slug: "soja-grao",
    description: "Soja não transgênica, cultivada com práticas sustentáveis. Ideal para processamento industrial. Grãos uniformes de alto valor nutricional, produzidos com técnicas avançadas de cultivo e colheita.",
    shortDescription: "Soja não transgênica, cultivada com práticas sustentáveis. Ideal para processamento industrial.",
    category: "soja",
    imageUrl: "/images/sojaaa1.png",
    isAvailable: true,
    isHighlighted: true,
    moisture: "14%",
    impurity: "1%",
    ph: "6.5",
    createdAt: new Date().toISOString()
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
    createdAt: new Date().toISOString()
  },
  {
    id: 5,
    name: "Soja Não Transgênica",
    slug: "soja-nao-transgenica",
    description: "Soja certificada como não transgênica, cultivada sem modificação genética e com práticas sustentáveis. Rastreabilidade completa desde o plantio até a colheita.",
    shortDescription: "Soja certificada como não transgênica, com rastreabilidade completa.",
    category: "soja",
    imageUrl: "https://images.pexels.com/photos/2868911/pexels-photo-2868911.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    isAvailable: true,
    isHighlighted: false,
    moisture: "13.5%",
    impurity: "0.9%",
    ph: "6.6",
    createdAt: new Date().toISOString()
  }
];
