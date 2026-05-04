import { About } from "./components/About";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main className="app">
      <AnimatedBackground />

      <Header />

      <section id="inicio">
        <Hero />
      </section>

      <section id="sobre">
        <About />
      </section>

      <section id="tecnologias">
        <Skills />
      </section>

      <section id="projetos">
        <Projects />
      </section>

      <section id="contato">
        <Contact />
      </section>
    </main>
  );
}

export default App;