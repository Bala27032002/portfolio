import Section from "./Section.jsx";
import { TagList } from "./Tag.jsx";
import { projects } from "../data/projects.js";
import styles from "./Projects.module.css";

function ProjectCard({ project, featured }) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <header className={styles.head}>
        <div>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.tagline}>{project.tagline}</p>
        </div>
        <span className={styles.company}>{project.company}</span>
      </header>

      <p className={styles.surfaces}>{project.surfaces}</p>

      {project.metric && <p className={styles.metric}>{project.metric}</p>}

      <ul className={styles.points}>
        {project.points.map((p) => (
          <li key={p.slice(0, 40)}>{p}</li>
        ))}
      </ul>

      <TagList items={project.stack} />
    </article>
  );
}

export default function Projects() {
  const featured = projects.slice(0, 3);
  const others = projects.slice(3);

  return (
    <Section
      id="projects"
      title="Projects"
      intro="Production systems I've built end to end. The first three are current work at Applaunch."
    >
      <div className={styles.featuredGrid}>
        {featured.map((p) => <ProjectCard key={p.name} project={p} featured />)}
      </div>
      <div className={styles.grid}>
        {others.map((p) => <ProjectCard key={p.name} project={p} />)}
      </div>
    </Section>
  );
}
