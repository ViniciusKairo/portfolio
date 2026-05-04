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
      "Aplicativo mobile para controle de procedimentos estéticos, usuários por perfil, imagens, permissões e solicitações de acesso.",
    technologies: ["Flutter", "Dart", "Supabase", "SQL"],
    image: "/projetos/estetica-view.png",
    githubUrl: "https://github.com/",
  },
  {
    title: "Controle de Finanças Pessoais",
    description:
      "Projeto web para cadastro de gastos mensais, dashboards financeiros, categorias e análise de despesas.",
    technologies: ["React", "TypeScript", "JavaScript"],
    image: "/projetos/financas.png",
    githubUrl: "https://github.com/",
  },
];