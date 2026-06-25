import { Section } from './Section'
import type { Lang, MultiLang } from '../types/profile'

interface CareerObjectiveProps {
  lang: Lang
  target: MultiLang
}

export function CareerObjective({ lang, target }: CareerObjectiveProps) {
  return (
    <Section title={lang === 'vi' ? 'Mục tiêu nghề nghiệp' : 'Career Objective'}>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-info">
            <p className="project-desc">{target[lang]}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
