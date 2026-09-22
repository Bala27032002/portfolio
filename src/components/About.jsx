import Section from "./Section.jsx";
import { profile } from "../data/profile.js";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className={styles.copy}>
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <dl className={styles.highlights}>
        {profile.highlights.map((h) => (
          <div key={h.label} className={styles.stat}>
            <dt>{h.label}</dt>
            <dd>{h.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
