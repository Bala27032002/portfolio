import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";
import Section from "./Section.jsx";
import { profile } from "../data/profile.js";
import styles from "./Contact.module.css";

export default function Contact() {
  const { contact } = profile;
  const rows = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
    { icon: Linkedin, label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin, external: true },
  ];

  return (
    <Section
      id="contact"
      title="Contact"
      intro="Open to Node.js backend roles. The fastest way to reach me is email."
    >
      <ul className={styles.list}>
        {rows.map(({ icon: Icon, label, value, href, external }) => (
          <li key={label}>
            <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
              <span className={styles.icon} aria-hidden="true"><Icon size={18} /></span>
              <span className={styles.label}>{label}</span>
              <span className={styles.value}>{value}</span>
              <ArrowUpRight size={16} className={styles.arrow} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
