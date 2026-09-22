import { profile } from "../data/profile.js";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>Built with React + Vite</span>
    </footer>
  );
}
