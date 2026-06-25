export type Lang = 'vi' | 'en'

export interface MultiLang {
  vi: string
  en: string
}

export interface Project {
  id: number
  title: MultiLang
  description: MultiLang
  technologies: string[]
}

export interface Skill {
  name: string
  level: string
}

export interface PersonalInfoItem {
  label: MultiLang
  value: string
}

export interface Profile {
  name: string
  title: MultiLang
  aboutMe: MultiLang
  skills: Skill[]
  projects: Project[]
  target: MultiLang
  personalInfo: PersonalInfoItem[]
}
