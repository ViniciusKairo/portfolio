import { motion } from "framer-motion";

export function About() {
  return (
    <section className="container section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>Sobre mim</span>
        <h2>Perfil profissional</h2>
      </motion.div>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>
          Sou estudante em fase final de graduação e estou direcionando minha
          carreira para desenvolvimento de software. Tenho trabalhado em projetos
          acadêmicos e práticos envolvendo aplicações web e mobile, autenticação,
          banco de dados, regras de acesso e organização de interfaces.
        </p>

        <p>
          Meu principal projeto atual é o Estética View, uma aplicação mobile
          feita com Flutter e Supabase, com perfis de administrador, médico e
          paciente, controle de procedimentos, imagens e permissões de acesso.
        </p>
      </motion.div>
    </section>
  );
}