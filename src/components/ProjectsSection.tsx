import { Section } from './Section'
import type { Lang, Project } from '../types/profile'

interface ProjectsSectionProps {
  lang: Lang
  projects: Project[]
}

export function ProjectsSection({ lang, projects }: ProjectsSectionProps) {
  return (
    <Section id="projects" title={lang === 'vi' ? 'Dự án nhóm' : 'Group Projects'}>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-info">
              <h3 className="project-title">{project.title[lang]}</h3>
              <p className="project-desc">{project.description[lang]}</p>
            </div>
            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
