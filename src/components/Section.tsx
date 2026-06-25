import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  title: string
}

export function Section({ children, id, title }: SectionProps) {
  return (
    <section id={id} className="content-section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}
