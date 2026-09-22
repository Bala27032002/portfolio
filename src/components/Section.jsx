import styles from "./Section.module.css";

/** Consistent section wrapper: id for nav, heading, optional intro line. */
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <header className={styles.header}>
        <h2 id={`${id}-title`} className={styles.title}>{title}</h2>
        {intro && <p className={styles.intro}>{intro}</p>}
      </header>
      {children}
    </section>
  );
}
