import styles from "./Tag.module.css";

/** Small mono chip for tech names. */
export default function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>;
}

export function TagList({ items }) {
  return (
    <ul className={styles.list} aria-label="Technologies">
      {items.map((t) => (
        <li key={t}><Tag>{t}</Tag></li>
      ))}
    </ul>
  );
}
