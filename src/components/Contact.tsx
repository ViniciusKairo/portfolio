import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const email = "viniciuskairo24@gmail.com";
const githubUrl = "https://github.com/ViniciusKairo";
const linkedinUrl = "https://www.linkedin.com/in/vinicius-kairo";

export function Contact() {
  return (
    <section className="container section contact-section">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>Contato</span>

        <h2>Vamos conversar?</h2>

        <p>
          Estou buscando oportunidades para iniciar minha atuação profissional
          como desenvolvedor e continuar evoluindo com projetos reais.
        </p>

        <div className="contact-links">
          <a href={`mailto:${email}`}>
            <MailIcon size={18} />
            Email
          </a>

          <a href={githubUrl} target="_blank" rel="noreferrer">
            <FaGithub size={18} />
            GitHub
          </a>

          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}