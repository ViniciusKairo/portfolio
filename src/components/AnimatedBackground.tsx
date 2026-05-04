import { motion } from "framer-motion";

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  size: Math.random() * 6 + 4,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 3,
}));

export function AnimatedBackground() {
  return (
    <div className="animated-background">
      <div className="gradient-orb orb-one" />
      <div className="gradient-orb orb-two" />
      <div className="grid-overlay" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}