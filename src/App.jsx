import Sidebar from "./components/Sidebar.jsx";
import MobileNav from "./components/MobileNav.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useActiveSection } from "./hooks/useActiveSection.js";
import { navLinks } from "./data/profile.js";
import styles from "./App.module.css";

export default function App() {
  const active = useActiveSection(navLinks.map((l) => l.id));

  return (
    <div className={styles.shell}>
      <Sidebar active={active} />
      <MobileNav active={active} />
      <main className={styles.main} id="main">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
