
export type Skill = {
  name: string;
  level: "Estudando" | "Praticando" | "Projeto real";
  description: string;
};

export const skills: Skill[] = [
  {
    name: "JavaScript",
    level: "Praticando",
    description: "Lógica, manipulação de dados, funções assíncronas e integração com APIs.",
  },
  {
    name: "TypeScript",
    level: "Estudando",
    description: "Tipagem estática, interfaces e organização de componentes React.",
  },
  {
    name: "React",
    level: "Praticando",
    description: "Componentes, hooks, estado, props e estrutura de SPAs.",
  },
  {
    name: "Flutter",
    level: "Projeto real",
    description: "Aplicações mobile com navegação, múltiplos perfis e integração com backend.",
  },
  {
    name: "Supabase",
    level: "Projeto real",
    description: "Autenticação, banco de dados relacional, storage, policies e RLS.",
  },
  {
    name: "SQL",
    level: "Praticando",
    description: "Modelagem de dados, consultas, relacionamentos e controle de permissões.",
  },
];