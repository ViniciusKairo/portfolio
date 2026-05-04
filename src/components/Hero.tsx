import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const githubUrl = "https://github.com/seu-usuario";
const linkedinUrl = "https://www.linkedin.com/in/seu-usuario";

export function Hero() {
  return (
    <section className="hero container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-badge">Portfólio de Desenvolvimento</span>

        <h1>
          Desenvolvedor em formação, criando interfaces modernas com{" "}
          <span>React, TypeScript e Flutter.</span>
        </h1>

        <p>
          Estou em transição para a área de desenvolvimento, com foco em
          aplicações web e mobile, integração com banco de dados, autenticação,
          regras de negócio e experiência do usuário.
        </p>

        <div className="hero-actions">
          <a href="#projetos" className="btn primary">
            Ver projetos
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        className="code-card"
        initial={{ opacity: 0, x: 64, rotate: 2 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="code-header">
          <span />
          <span />
          <span />
        </div>

        <pre>
          <code>{`const developer = {
  name: "Vinicius Silva",
  focus: ["React", "TypeScript", "Flutter"],
  database: "Supabase",
  goal: "Primeira vaga dev",
};

function buildCareer() {
  return developer.focus.map((skill) => {
    return study(skill) + practice(skill);
  });
}`}</code>
        </pre>
      </motion.div>

      <motion.a
        href="#sobre"
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        aria-label="Ir para seção sobre"
      >
        <ArrowDownIcon size={24} />
      </motion.a>
    </section>
  );
}