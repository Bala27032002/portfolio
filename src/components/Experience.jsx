import Section from "./Section.jsx";
import { TagList } from "./Tag.jsx";
import { experience } from "../data/experience.js";
import styles from "./Experience.module.css";

function ExperienceItem({ job }) {
  return (
    <li className={styles.item}>
      <div className={styles.when}>
        <span className={styles.period}>{job.period}</span>
        {job.current && <span className={styles.current}>Current</span>}
      </div>

      <article className={styles.card}>
        <header className={styles.head}>
          <h3 className={styles.role}>{job.role}</h3>
          <p className={styles.company}>
            {job.company} <span className={styles.dot}>·</span> {job.location}
          </p>
        </header>

        <ul className={styles.points}>
          {job.points.map((p) => (
            <li key={p.slice(0, 40)}>{p}</li>
          ))}
        </ul>

        <TagList items={job.tech} />
      </article>
    </li>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className={styles.timeline}>
        {experience.map((job) => (
          <ExperienceItem key={job.company} job={job} />
        ))}
      </ol>
    </Section>
  );
}
