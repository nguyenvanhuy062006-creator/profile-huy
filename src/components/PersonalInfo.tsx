import type { Lang, PersonalInfoItem } from '../types/profile'

interface PersonalInfoProps {
  items: PersonalInfoItem[]
  lang: Lang
}

export function PersonalInfo({ items, lang }: PersonalInfoProps) {
  return (
    <section className="personal-detail-card">
      <h2 className="section-title">
        {lang === 'vi' ? 'Thông tin cá nhân' : 'Personal Information'}
      </h2>
      <div className="personal-detail-grid">
        {items.map((item) => (
          <div key={item.label.en} className="personal-detail-item">
            <span>{item.label[lang]}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
