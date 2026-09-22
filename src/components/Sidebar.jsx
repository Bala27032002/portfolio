import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { profile, navLinks } from "../data/profile.js";
import styles from "./Sidebar.module.css";

export default function Sidebar({ active }) {
  const { contact } = profile;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <div className={styles.avatar} aria-hidden="true">
            {/* Replace with <img src="/profile.jpg" alt="" /> to show a photo */}
            <span>BM</span>
          </div>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.location}>
            <MapPin size={14} aria-hidden="true" /> {profile.location}
          </p>
          <p className={styles.headline}>{profile.headline}</p>
        </div>

        <nav className={styles.nav} aria-label="Sections">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? styles.active : undefined}
                  aria-current={active === link.id ? "true" : undefined}
                >
                  <span className={styles.marker} aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className={styles.links} aria-label="Contact">
          <li>
            <a href={`mailto:${contact.email}`} title="Email">
              <Mail size={18} aria-hidden="true" /> <span>Email</span>
            </a>
          </li>
          <li>
            <a href={contact.phoneHref} title="Phone">
              <Phone size={18} aria-hidden="true" /> <span>Call</span>
            </a>
          </li>
          <li>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
              <Linkedin size={18} aria-hidden="true" /> <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
