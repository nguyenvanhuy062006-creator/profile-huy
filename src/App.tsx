import { useState } from 'react'
import  './index.css'
import anhHuy from './assets/IMG_1204.jpeg'
interface MultiLang{
  vi: string;
  en:string;
}
interface Project{
  id: number;
  title: MultiLang;
  description: MultiLang;
  technologies: string[];
}
interface Skill{
  name: string;
  level: string;
}
interface Profile{
  name:string;
  title: MultiLang;
  aboutMe: MultiLang;
  skills: Skill[];
  projects: Project[];
}
const profileData: Profile={
  name:'Nguyễn Văn Huy',
  title:{
    vi: "Thực tập sinh Front-end",
    en: "Intern Front-end",
  },
  aboutMe:{
    vi: "Xin chào! Tôi là Huy, hiện tại đang là sinh viên tại Trường Đại học Điện Lực. Mình có đam mê xây dựng trang web tối ưu, giao diện thân thiện và dễ tiếp cận.",
    en: "Hello! I am Huy, currently an IT student at Electric Power University. I am passionate about building optimized web applications with friendly and accessible user interfaces."
  },
  skills: [
    {name: "HTML", level: "Beginner"},
    {name: "CSS", level: "Beginner"},
    {name: "Javascript", level: "Beginner"},
  ],
  projects: [{
    id:1,
    title: {
      vi: "Web bán xe oto online", en: "Online car sales website"},
    description:{
      vi:"Hệ thống trang tin tức, khuyến mãi, hiện thông báo người dùng đăng kí khuyến mãi.",
      en:"News and promotion system that displays notifications when users register for promotions.",
    },
    technologies: ["HTML","CSS","JAVASCRIPT"]
  },
]
};
export default function App(){
  const[lang, setLang]=useState<'vi' | 'en'>('vi');
  const[showPersonalInfo, setShowPersonalInfo]=useState(false);
  return (
    <div className='container'>
      {/*Header*/}
      <header className='header'>
        <div className="header-content">
          <span className="logo">Design by Huy Nguyen</span>
          <div className="header-actions">
            <button
              onClick={()=>setShowPersonalInfo(!showPersonalInfo)}
              className='header-info-btn'
            >
              {lang === 'vi' ? 'Thông tin cá nhân' : 'Personal Info'}
            </button>
            <button onClick={()=>setLang(lang==='vi' ? 'en':"vi")} className='lang-btn'>
              <span className={lang === 'vi' ? 'active-lang' : ''}>VI</span>
              <span>/</span>
              <span className={lang === 'en' ? 'active-lang' : ''}>EN</span>
            </button>
          </div>
        </div>
      </header>
      {/*Main */}
      <main className="main-content">
        {/*about me*/}
        <section className="profile-card">
          <div className="profile-image-wrap">
            <img src={anhHuy} alt={profileData.name} className="profile-image" />
          </div>
          <div className="profile-info">
            <h1 className="prf-name">{profileData.name}</h1>
            <p className='prf-title'>{profileData.title[lang]}</p>
            <p className='prf-about'>{profileData.aboutMe[lang]}</p>
          </div>
        </section>
        {showPersonalInfo && (
          <section className="personal-detail-card">
            <h2 className="section-title">
              {lang === 'vi' ? 'Thông tin cá nhân' : 'Personal Information'}
            </h2>
            <div className="personal-detail-grid">
              <div className="personal-detail-item">
                <span>{lang === 'vi' ? 'Họ và tên' : 'Full name'}</span>
                <strong>Nguyễn Văn Huy</strong>
              </div>
              <div className="personal-detail-item">
                <span>{lang === 'vi' ? 'Tuổi' : 'Age'}</span>
                <strong>19</strong>
              </div>
              <div className="personal-detail-item">
                <span>{lang === 'vi' ? 'Năm sinh' : 'Year of birth'}</span>
                <strong>2006</strong>
              </div>
              <div className="personal-detail-item">
                <span>{lang === 'vi' ? 'Quê quán' : 'Hometown'}</span>
                <strong>Hải Phòng, Việt Nam</strong>
              </div>
              <div className="personal-detail-item">
                <span>{lang === 'vi' ? 'Nơi học tập' : 'Education'}</span>
                <strong>Trường Đại học Điện Lực</strong>
              </div>
              <div className="personal-detail-item">
                <span>{lang === 'vi' ? 'Nơi làm việc' : 'Workplace'}</span>
                <strong>Thực tập sinh tại ETRON</strong>
              </div>
              <div className='personal-detail-item'>
                <span>{lang === 'vi' ? 'Gmail' : 'Gmail'}</span>
                <strong>nguyenvanhuy062006@gmail.com</strong>
              </div>
              <div className='personal-detail-item'>
                <span>{lang === 'vi' ? 'Số điện thoại' : 'Phone'}</span>
                <strong>0329500326</strong>
              </div>
            </div>
          </section>
        )}
        <section className="content-section">
          <h2 className='section-title'>{lang ==='vi'?'Các kỹ năng của tôi': 'My Skills'}</h2>
          <div className='skill-grid'>{profileData.skills.map((skill,index)=>(
            <div key={index} className='skill-item'>
              <p className="skill-name">{skill.name}</p>
              <span className='skill-level'>{skill.level}</span>
            </div>
          ))}
            </div>
        </section>
        <section className="content-section">
          <h2 className="section-title">{lang === 'vi' ? 'Dự án nhóm' : 'Group Projects'}</h2>
          <div className="projects-grid">
            {profileData.projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-info">
                  <h3 className="project-title">{project.title[lang]}</h3>
                  <p className="project-desc">{project.description[lang]}</p>
                </div>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>



      </main>


    </div>
  )
}
