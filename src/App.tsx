import { useState } from 'react'
import { CareerObjective } from './components/CareerObjective'
import { Divider } from './components/Divider'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { PersonalInfo } from './components/PersonalInfo'
import { ProfileCard } from './components/ProfileCard'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { profileData } from './data/profileData'
import './index.css'
import anhHuy from './assets/IMG_1204.jpeg'

export default function App() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi')
  const [showPersonalInfo, setShowPersonalInfo] = useState(false)

  return (
    <div className="container">
      <Header
        lang={lang}
        onToggleLang={() => setLang(lang === 'vi' ? 'en' : 'vi')}
        onTogglePersonalInfo={() => setShowPersonalInfo(!showPersonalInfo)}
      />
      <main className="main-content">
        <ProfileCard avatar={anhHuy} lang={lang} profile={profileData} />
        {showPersonalInfo && (
          <PersonalInfo items={profileData.personalInfo} lang={lang} />
        )}
        <Divider />
        <CareerObjective lang={lang} target={profileData.target} />
        <Divider />
        <SkillsSection lang={lang} skills={profileData.skills} />
        <Divider />
        <ProjectsSection lang={lang} projects={profileData.projects} />
      </main>
      <Footer lang={lang} profile={profileData} />
    </div>
  )
}
