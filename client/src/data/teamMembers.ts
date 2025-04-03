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

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Carlos Teixeira",
    position: "Diretor Presidente",
    bio: "Com mais de 30 anos de experiência no agronegócio, lidera a visão estratégica da empresa.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80",
    email: "carlos.teixeira@tfalimentos.com.br",
    linkedin: "https://linkedin.com/in/carlosteixeira"
  },
  {
    id: 2,
    name: "Ana Ferreira",
    position: "Diretora de Operações",
    bio: "Engenheira agrônoma responsável pela gestão da produção e processos de beneficiamento.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80",
    email: "ana.ferreira@tfalimentos.com.br",
    linkedin: "https://linkedin.com/in/anaferreira"
  },
  {
    id: 3,
    name: "Roberto Mendes",
    position: "Diretor Comercial",
    bio: "Especialista em comércio exterior, coordena estratégias de vendas e relações com clientes.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80",
    email: "roberto.mendes@tfalimentos.com.br",
    linkedin: "https://linkedin.com/in/robertomendes",
    twitter: "https://twitter.com/robertomendes"
  },
  {
    id: 4,
    name: "Juliana Costa",
    position: "Gerente de Qualidade",
    bio: "Lidera o laboratório de pesquisa e análise, garantindo os altos padrões dos produtos.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80",
    email: "juliana.costa@tfalimentos.com.br",
    linkedin: "https://linkedin.com/in/julianacosta"
  }
];
