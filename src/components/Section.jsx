import { useEffect, useRef, useState } from "react";
import styles from "./Section.module.css";

/** Consistent section wrapper: id for nav, heading, optional intro line. */
export default function Section({ id, title, intro, children }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <header className={styles.header}>
        <h2 id={`${id}-title`} className={styles.title}>{title}</h2>
        {intro && <p className={styles.intro}>{intro}</p>}
      </header>
      {children}
    </section>
  );
}
