export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  email: string;
  linkedin?: string;
  twitter?: string;
}

// Importar a imagem local disponível
import memberImage from "@assets/Pedro-Stropasolas-Brasil-de-Fato.jpeg";
import arrozImage from "@assets/arrozcasca.jpg";
import arrozCascaImage from "@assets/Casca-de-arroz-caida.webp";
import cultivoArrozImage from "@assets/culitvoarroz.jpg";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Carlos Teixeira",
    position: "Diretor Presidente",
    bio: "Com mais de 30 anos de experiência no agronegócio, lidera a visão estratégica da empresa.",
    imageUrl: memberImage,
    email: "carlos.teixeira@tfalimentos.com.br",
    linkedin: "https://linkedin.com/in/carlosteixeira"
  },
  {
    id: 2,
    name: "Ana Ferreira",
    position: "Diretora de Operações",
    bio: "Engenheira agrônoma responsável pela gestão da produção e processos de beneficiamento.",
    imageUrl: arrozCascaImage,
    email: "ana.ferreira@tfalimentos.com.br",
    linkedin: "https://linkedin.com/in/anaferreira"
  },
  {
    id: 3,
    name: "Roberto Mendes",
    position: "Diretor Comercial",
    bio: "Especialista em comércio exterior, coordena estratégias de vendas e relações com clientes.",
    imageUrl: arrozImage,
    email: "roberto.mendes@tfalimentos.com.br",
    linkedin: "https://linkedin.com/in/robertomendes",
    twitter: "https://twitter.com/robertomendes"
  },
  {
    id: 4,
    name: "Juliana Costa",
    position: "Gerente de Qualidade",
    bio: "Lidera o laboratório de pesquisa e análise, garantindo os altos padrões dos produtos.",
    imageUrl: cultivoArrozImage,
    email: "juliana.costa@tfalimentos.com.br",
    linkedin: "https://linkedin.com/in/julianacosta"
  }
];
