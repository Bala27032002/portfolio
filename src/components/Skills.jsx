import Section from "./Section.jsx";
import { skillGroups } from "../data/skills.js";
import styles from "./Skills.module.css";

function SkillGroup({ group }) {
  const GroupIcon = group.icon;
  return (
    <article className={styles.group}>
      <header className={styles.groupHead}>
        <span className={styles.groupIcon} aria-hidden="true">
          <GroupIcon size={16} strokeWidth={2.2} />
        </span>
        <h3 className={styles.groupTitle}>{group.title}</h3>
      </header>

      <ul className={styles.list}>
        {group.skills.map(({ name, icon: Icon }) => (
          <li key={name} className={styles.skill}>
            <span className={styles.icon} aria-hidden="true"><Icon size={16} /></span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className={styles.grid}>
        {skillGroups.map((g) => <SkillGroup key={g.title} group={g} />)}
      </div>
    </Section>
  );
}
