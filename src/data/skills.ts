
export type Skill = {
  name: string;
  level: "Estudando" | "Praticando" | "Projeto real";
  description: string;
};

export const skills: Skill[] = [
  {
    name: "JavaScript",
    level: "Praticando",
    description: "Manipulação de dados, funções, arrays, objetos e lógica.",
  },
  {
    name: "TypeScript",
    level: "Estudando",
    description: "Tipagem, interfaces, props, componentes e organização.",
  },
  {
    name: "React",
    level: "Praticando",
    description: "Componentes, estado, props, renderização e hooks.",
  },
  {
    name: "Flutter",
    level: "Projeto real",
    description: "Aplicações mobile, navegação, telas e integração com backend.",
  },
  {
    name: "Supabase",
    level: "Projeto real",
    description: "Auth, banco de dados, storage, policies e Edge Functions.",
  },
  {
    name: "SQL",
    level: "Praticando",
    description: "Consultas, relacionamentos, permissões e estrutura de dados.",
  },
];