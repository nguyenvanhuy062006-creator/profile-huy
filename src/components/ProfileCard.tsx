import type { Lang, Profile } from '../types/profile'

interface ProfileCardProps {
  avatar: string
  lang: Lang
  profile: Profile
}

export function ProfileCard({ avatar, lang, profile }: ProfileCardProps) {
  return (
    <section className="profile-card">
      <div className="profile-image-wrap">
        <img src={avatar} alt={profile.name} className="profile-image" />
      </div>
      <div className="profile-info">
        <span className="profile-badge">
          {lang === 'vi' ? 'Frontend Intern' : 'Available for internship'}
        </span>
        <h1 className="prf-name">{profile.name}</h1>
        <p className="prf-title">{profile.title[lang]}</p>
        <p className="prf-about">{profile.aboutMe[lang]}</p>
        <div className="profile-actions">
          <a className="secondary-link" href="#projects">
            {lang === 'vi' ? 'Xem dự án' : 'View projects'}
          </a>
        </div>
      </div>
    </section>
  )
}
