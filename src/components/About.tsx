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
          Estou no último período de Engenharia de Software na UniRV (Rio Verde – GO)
          e direcionando minha carreira para o desenvolvimento de software. Trabalho
          desde os 17 anos em diferentes setores — estoque, vendas e,
          atualmente, análise de cadastro no Sicoob Unicidades — o que me deu
          disciplina, visão de processo e atenção a dados que levo para o código.
        </p>

        <p>
          No desenvolvimento, tenho foco em aplicações web com React e TypeScript e
          mobile com Flutter. Meu projeto mais completo até agora é o Estética View,
          um aplicativo mobile com perfis de acesso diferenciados, controle de
          procedimentos, imagens e integração com Supabase. Estou construindo este
          portfólio como espaço central para os projetos criados.
        </p>
      </motion.div>
    </section>
  );
}