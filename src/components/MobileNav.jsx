import { navLinks } from "../data/profile.js";
import styles from "./MobileNav.module.css";

/** Horizontal sticky nav shown only below 960px (sidebar nav is hidden there). */
export default function MobileNav({ active }) {
  return (
    <nav className={styles.nav} aria-label="Sections">
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} className={active === link.id ? styles.active : undefined}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
