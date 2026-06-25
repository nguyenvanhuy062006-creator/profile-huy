import type { Lang } from '../types/profile'

interface HeaderProps {
  lang: Lang
  onToggleLang: () => void
  onTogglePersonalInfo: () => void
}

export function Header({
  lang,
  onToggleLang,
  onTogglePersonalInfo,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <span className="logo">Design by Huy Nguyen</span>
        <div className="header-actions">
          <button onClick={onTogglePersonalInfo} className="header-info-btn">
            {lang === 'vi' ? 'Thông tin cá nhân' : 'Personal Information'}
          </button>
          <button onClick={onToggleLang} className="lang-btn">
            <span className={lang === 'vi' ? 'active-lang' : ''}>VI</span>
            <span>/</span>
            <span className={lang === 'en' ? 'active-lang' : ''}>EN</span>
          </button>
        </div>
      </div>
    </header>
  )
}
