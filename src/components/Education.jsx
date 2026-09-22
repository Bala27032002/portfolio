import { GraduationCap } from "lucide-react";
import Section from "./Section.jsx";
import { profile } from "../data/profile.js";
import styles from "./Education.module.css";

export default function Education() {
  const { education } = profile;
  return (
    <Section id="education" title="Education">
      <article className={styles.card}>
        <span className={styles.icon} aria-hidden="true"><GraduationCap size={20} /></span>
        <div>
          <h3 className={styles.degree}>{education.degree}</h3>
          <p className={styles.school}>{education.school}</p>
        </div>
        <span className={styles.period}>{education.period}</span>
      </article>
    </Section>
  );
}
