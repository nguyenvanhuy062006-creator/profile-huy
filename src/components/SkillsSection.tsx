import { Section } from './Section'
import type { Lang, Skill } from '../types/profile'

interface SkillsSectionProps {
  lang: Lang
  skills: Skill[]
}

export function SkillsSection({ lang, skills }: SkillsSectionProps) {
  return (
    <Section title={lang === 'vi' ? 'Các kỹ năng của tôi' : 'My Skills'}>
      <div className="skill-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <p className="skill-name">{skill.name}</p>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
