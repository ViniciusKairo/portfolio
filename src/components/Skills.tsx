import { motion } from "framer-motion";
import { skills } from "../data/skills";

export function Skills() {
  return (
    <section className="container section">
      <div className="section-title">
        <span>Tecnologias</span>
        <h2>Conhecimentos em evolução</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.article
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <h3>{skill.name}</h3>
            <span>{skill.level}</span>
            <p>{skill.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}