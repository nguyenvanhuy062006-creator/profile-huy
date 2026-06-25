import type { Lang, Profile } from '../types/profile'

interface FooterProps {
  lang: Lang
  profile: Profile
}

export function Footer({ lang, profile }: FooterProps) {

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-main">
          <span className="footer-kicker">
            {lang === 'vi' ? 'Sẵn sàng học hỏi' : 'Ready to learn'}
          </span>
          <h2>{lang === 'vi' ? 'Cùng kết nối nhé.' : "Let's connect."}</h2>
          <p>
            {lang === 'vi'
              ? 'Em luôn sẵn sàng trao đổi về cơ hội thực tập Front-end và các dự án web thực tế.'
              : 'I am open to Front-end internship opportunities and practical web projects.'}
          </p>
        </div>


      </div>

      <div className="footer-bottom">
        <span>© 2026 {profile.name}</span>
        <span>{lang === 'vi' ? 'Thiết kế và xây dựng bởi Huy' : 'Designed and built by Huy'}</span>
      </div>
    </footer>
  )
}
