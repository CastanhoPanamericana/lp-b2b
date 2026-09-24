import { CourseData, AppliedCreativitySegment } from '../types';

/**
 * Cursos Oficiais da ESPM | Panamericana Escola de Arte e Design.
 * Apenas os cursos e módulos reais da escola são mantidos aqui.
 * (Pós-graduações em Design Estratégico e Design de Interiores foram retiradas conforme solicitação).
 */
export const rawCourses: CourseData[] = [
  {
    area: "Criatividade e Repertório",
    categoria: "pós-graduação",
    carreira: "pós-graduação",
    cursoMae: "Pós-Graduação em Criatividade & Inovação Ecossistêmicas",
    formacoesVinculadas: [],
    intensivos: [
      "Criando Pela Análise Crítica",
      "Criando Pela Visão Ecossistêmica",
      "Criando Pela Sensibilização Artística",
      "Criando Pela Imaginação Fantástica"
    ]
  },
  {
    area: "Animação e Games",
    categoria: "pós-graduação",
    carreira: "pós-graduação",
    cursoMae: "Pós-Graduação em Game Business: Estratégia, Criação e Negócios na Indústria de Jogos",
    formacoesVinculadas: [],
    intensivos: [
      "Da Ideia ao Investimentos: Movimentação e Financiamento de Games",
      "Da Experiência ao Engajamento: Design, Gamificação e Experiência do Usuário",
      "Do Arcade à Inteligência Artificial: História e Futuro da Indústria de Games",
      "Do Estúdio à Arena: Publicação, Distribuição e Negócios em eSports",
      "Do Dado ao Ativo: Mercado, Lançamentos e Propriedade Intelectual em Games"
    ]
  },
  {
    area: "Animação e Games",
    categoria: "formação livre",
    carreira: "formação livre",
    cursoMae: "Design de Animação e Games",
    formacoesVinculadas: ["Design de Animação 2D", "Design de Games"],
    intensivos: [
      "Animação Clássica",
      "Monetização e Mercado de Games",
      "Modelagem 3D de Personagens",
      "Storytelling Para Animação",
      "Game Design",
      "Direção Criativa para Jogos",
      "Produção Executiva Para Animação"
    ]
  },
  {
    area: "Fotografia e Áudiovisual",
    categoria: "pós-graduação",
    carreira: "pós-graduação",
    cursoMae: "Pós-Graduação em Gestão de Negócios e Estratégia de Conteúdo Audiovisual",
    formacoesVinculadas: [],
    intensivos: [
      "Ecossistema, Regras e Expansão em Negócios Audiovisual",
      "Mercado de Prestígio e Comercialização em Negócios Audiovisual",
      "Concepção, Público e Potência da Ideia em Negócios Audiovisual",
      "Arquitetura de Negócios e Viabilidade em Negócios Audiovisual"
    ]
  },
  {
    area: "Fotografia e Áudiovisual",
    categoria: "formação livre",
    carreira: "formação livre",
    cursoMae: "Fotografia Aplicada",
    formacoesVinculadas: [],
    intensivos: ["Fundamentos Fotográficos"]
  },
  {
    area: "Moda",
    categoria: "pós-graduação",
    carreira: "pós-graduação",
    cursoMae: "Pós-Graduação em Negócios da Moda: Marketing, Comunicação e Tendências",
    formacoesVinculadas: [],
    intensivos: [
      "Gestão de Produto e Desenvolvimento de Coleção de Moda",
      "Branding e Comunicação de Moda",
      "Cultura e Negócios da Moda: Brasil e Cenário Global",
      "Comunicação Estratégica e Criativa de Moda",
      "Modelos de Negócios e Estratégia de Precificação de produtos para Moda"
    ]
  },
  {
    area: "Moda",
    categoria: "formação livre",
    carreira: "formação livre",
    cursoMae: "Design de Moda",
    formacoesVinculadas: ["Desenho e Pintura: Técnica e Expressão Criativa"],
    intensivos: [
      "Branding e Estratégia de Moda Independente",
      "Matéria-Prima e Sustentabilidade na Moda: Laboratório Têxtil",
      "Processos Criativos de Moda: Do Croqui à Construção no Manequim",
      "Projeto de Coleção de Moda: Do Desenho à Customização",
      "Design de Superfície na Moda: Cor, Textura e Estamparia",
      "Cultura de Moda: Pesquisa, História e Imagem"
    ]
  },
  {
    area: "Design e Comunicação",
    categoria: "formação livre",
    carreira: "formação livre",
    cursoMae: "Design ao Cubo",
    formacoesVinculadas: ["Design UX/UI", "Design Gráfico", "Motion Design"],
    intensivos: [
      "Fundamentos do Design Gráfico",
      "Design de Experiência Para Produtos Digitais",
      "Designer Gráfico: Mercado e Carreira",
      "Design System",
      "Animação para Motion Design"
    ]
  },
  {
    area: "Design de Interiores",
    categoria: "pós-graduação",
    carreira: "pós-graduação",
    cursoMae: "Pós-Graduação em Planejamento e Gestão de Obras de Interiores",
    formacoesVinculadas: [],
    intensivos: [
      "Planejamento Econômico e Soluções Técnicas para Interiores: Orçamento, Precificação e Climatizacão de Ambientes",
      "Mobiliário e Iluminação: Projetos Executivos de Mobiliário e Iluminação para Interiores",
      "Gestão da Execução e Controle de Qualidade de Obras de Interiores",
      "Gestão Ambiental em Design de Interiores: Qualidade de vida e Bem estar",
      "Projetos Hidráulicos e Elétricos para Interiores: Infraestrutura e Sistemas Prediais"
    ]
  },
  {
    area: "Design de Interiores",
    categoria: "formação técnica",
    carreira: "formação técnica",
    cursoMae: "Design de Interiores",
    formacoesVinculadas: [],
    intensivos: [
      "Desenho Livre e Expressão Projetual em Desing de Interiores",
      "Lighting Design e Conforto Ambiental",
      "Gestão Profisssional e Mercado em Design de Interiores",
      "História do Design de Interiores e Mobiliário Contemporâneo"
    ]
  },
  {
    area: "Artes Plásticas",
    categoria: "formação livre",
    carreira: "formação livre",
    cursoMae: "Artes Plásticas",
    formacoesVinculadas: ["Desenho e Pintura: Técnica e Expressão Criativa"],
    intensivos: [
      "Linguagem Tridimensional: Fundamentos da Escultura",
      "Laboratório de Artes Plásticas: Fundamentos de Desenho e Pintura"
    ]
  }
];

/**
 * Cursos OnDemand Oficiais da Escola (conforme imagem de referência do usuário)
 */
export interface OnDemandCourse {
  title: string;
  area: string;
  categoria: 'on-demand';
}

export const onDemandCourses: OnDemandCourse[] = [
  {
    title: "DESIGN DE EXPERIÊNCIA E INTERFACE DIGITAL",
    area: "Design e Comunicação",
    categoria: "on-demand"
  },
  {
    title: "DESIGN DE PRODUTOS DIGITAIS",
    area: "Design e Comunicação",
    categoria: "on-demand"
  },
  {
    title: "GAME ART: ILUSTRAÇÃO DIGITAL E MODELAGEM 3D",
    area: "Animação e Games",
    categoria: "on-demand"
  },
  {
    title: "GAME DESIGN E NARRATIVA INTERATIVA — MECÂNICAS, ROTEIRO E PROTOTIPAÇÃO",
    area: "Animação e Games",
    categoria: "on-demand"
  },
  {
    title: "SOFTWARES ESSENCIAIS DE DESIGN DIGITAL — PHOTOSHOP, ILLUSTRATOR, FIGMA, BLENDER E REAPER",
    area: "Design e Comunicação",
    categoria: "on-demand"
  },
  {
    title: "STORYTELLING VISUAL PARA CONTEÚDO — ROTEIRO E DESIGN DIGITAL",
    area: "Design e Comunicação",
    categoria: "on-demand"
  },
  {
    title: "TECH ART PARA GAME ENGINE — ASSETS, PIPELINE E IMPLEMENTAÇÃO",
    area: "Animação e Games",
    categoria: "on-demand"
  }
];

// Helper para extrair todos os intensivos reais da escola agrupados por área
export interface RealIntensiveModule {
  title: string;
  area: string;
  origemCursoMae: string;
}

export function getRealSchoolIntensives(): RealIntensiveModule[] {
  const intensivesList: RealIntensiveModule[] = [];
  rawCourses.forEach((course) => {
    course.intensivos.forEach((mod) => {
      intensivesList.push({
        title: mod,
        area: course.area,
        origemCursoMae: course.cursoMae,
      });
    });
  });
  return intensivesList;
}

// Atividades simuladas EXCLUSIVAMENTE para a categoria Experiências de Criatividade Aplicada (conforme solicitado pelo usuário)
export const appliedCreativitySegments: AppliedCreativitySegment[] = [
  {
    type: "masterclass",
    title: "Masterclasses de Repertório & Inspiração",
    badgeLabel: "MASTERCLASS",
    formatDescription: "Formato Palestra (sem ação prática dos participantes)",
    detailedDescription:
      "Apresentações e palestras imersivas conduzidas por mestres e especialistas renomados da ESPM e Panamericana. Focadas na expansão de repertório, tendências de mercado, reflexão crítica e inspiração executiva, sem exigir atividades práticas dos participantes.",
    activities: [
      "Futuro do Design e Inteligência Artificial nas Organizações",
      "Economia Criativa e Novos Modelos de Negócio",
      "Storytelling Corporativo: Do Conceito à Conexão Emocional",
      "Tendências Globais em Comunicação Visual e Semiótica de Marca",
      "Cultura de Inovação: Como Desbloquear o Pensamento Divergente",
      "Liderança Criativa: Conduzindo Equipes de Alta Performance",
      "Design Estratégico e Tomada de Decisão Baseada em Valor",
      "Arte Contemporânea e Sensibilização Sensorial nos Negócios",
      "Arquitetura de Experiências e o Futuro dos Espaços Corporativos",
      "Neuroestética: A Ciência da Percepção Visual e Impacto de Marca"
    ]
  },
  {
    type: "workshop",
    title: "Workshops Práticos & Cocriação Hands-On",
    badgeLabel: "WORKSHOP",
    formatDescription: "Ação Prática & Hands-On (onde os participantes terão ação prática)",
    detailedDescription:
      "Laboratórios práticos e colaborativos em que os participantes colocam ativamente a mão na massa. As equipes vivenciam metodologias criativas, realizam dinâmicas ativas, testam ferramentas visuais e constroem soluções e protótipos tangíveis para desafios reais da empresa.",
    activities: [
      "Laboratório de Prototipagem Rápida e Design Sprint Corporativo",
      "Cocriação e Design Thinking na Resolução de Gargalos Operacionais",
      "Workshop Prático de Gamificação Aplicada a Processos Internos",
      "Imersão em Visual Thinking: Facilitação Gráfica e Mapas Mentais",
      "Mão na Massa: Modelagem de Novos Serviços Centrados no Usuário",
      "Oficina de Prompt Crafting e Geração Visual com IA Generativa",
      "Laboratório de Identidade de Marca e Brand Voice na Prática",
      "Design de Apresentações de Alto Impacto para Tomadores de Decisão",
      "Workshop de Escrita Criativa e Storytelling para Campanhas B2B",
      "Hackathon Criativo: Da Ideação ao Pitch em 4 Horas"
    ]
  }
];

export const categoryOrdering: string[] = [
  'pós-graduação',
  'formação técnica',
  'formação livre',
  'intensivo',
  'on-demand',
  'experiências de criatividade aplicada'
];

export const careerOrdering = categoryOrdering;

export const allAreas: string[] = [
  "Animação e Games",
  "Artes Plásticas",
  "Criatividade e Repertório",
  "Design de Interiores",
  "Design e Comunicação",
  "Fotografia e Áudiovisual",
  "Moda"
];

export function getCategoryDisplayName(cat: string): string {
  const normalized = cat.toLowerCase().trim();
  switch (normalized) {
    case 'pós-graduação':
      return 'Pós-Graduação';
    case 'formação técnica':
      return 'Formação Técnica';
    case 'formação livre':
      return 'Formação Livre';
    case 'intensivo':
      return 'Intensivo';
    case 'on-demand':
    case 'ondemand':
      return 'OnDemand';
    case 'experiências de criatividade aplicada':
      return 'Experiências de Criatividade Aplicada';
    default:
      return cat.charAt(0).toUpperCase() + cat.slice(1);
  }
}

export function getCategoryDescription(cat: string): string {
  const normalized = cat.toLowerCase().trim();
  switch (normalized) {
    case 'pós-graduação':
      return 'Formações avançadas para quem busca ampliar repertório, desenvolver visão estratégica e transformar sua forma de atuar no mercado.';
    case 'formação técnica':
      return 'Formação profissional regulamentada, que desenvolve competências técnicas e práticas para atuar no mercado e obter habilitação para exercer a profissão.';
    case 'formação livre':
      return 'Cursos de longa duração para construir uma nova carreira ou desenvolver uma formação consistente, com aprendizado progressivo e intensa prática ao longo do percurso.';
    case 'intensivo':
      return 'Cursos intensivos e módulos avulsos de curta duração (12h a 36h) das matrizes da ESPM e Panamericana, ideais para capacitações ágeis.';
    case 'on-demand':
    case 'ondemand':
      return 'Cursos OnDemand da ESPM e Panamericana disponíveis para contratação corporativa imediata, no ritmo e tempo da sua equipe.';
    case 'experiências de criatividade aplicada':
      return 'Formatos executivos dinâmicos desenvolvidos sob medida para encontros de liderança, convenções, offsites e treinamentos imersivos.';
    default:
      return '';
  }
}
