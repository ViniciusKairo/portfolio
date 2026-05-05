export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  deployUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Estética View",
    description:
      "Aplicativo mobile para clínicas estéticas com três perfis de acesso — administrador, médico e paciente. Controla procedimentos, imagens, solicitações de acesso e permissões por perfil.",
    technologies: ["Flutter", "Dart", "Supabase", "SQL"],
    image: "/projetos/estetica-view.png",
    githubUrl: "https://github.com/ViniciusKairo/estetica-view.git", // coloque o link real
  },
  {
    title: "Portfólio Web",
    description:
      "Site de portfólio desenvolvido com React e TypeScript para apresentar projetos e habilidades a recrutadores. Design responsivo com animações via Framer Motion.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    image: "/projetos/portfolio.png",
    githubUrl: "https://github.com/ViniciusKairo/portfolio",
  },
];