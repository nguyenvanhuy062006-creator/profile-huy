import { useState } from 'react'

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
      vi: "Hệ thống bán xe oto online", en: "Online car sales system"},
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
  return (
    <div className='container'>
      {/*Header*/}
      <header className='header'>
        <div className="header-content">
          <span className="logo">Huy profile</span>
          <button onClick={()=>setLang(lang==='vi' ? 'en':"vi")} className='lang-btn'>
            {lang ==='vi' ?"Switch to EN":"Chuyển sang VI"}
          </button>
        </div>
      </header>
      {/*Main */}
      <main className="main-content">
        {/*about me*/}
        <section className="profile-card">
          <h1 className="prf-name">{profileData.name}</h1>
          <p className='prf-title'>{profileData.title[lang]}</p>
          <p className='prf-about'>{profileData.aboutMe[lang]}</p>
        </section>
        <section>
          <h2 className='section-title'>{lang ==='vi'?'Kỹ năng của tôi': 'My skill'}</h2>
          <div className='skill-grid'>{profileData.skills.map((skill,index)=>(
            <div key={index} className='skill-item'>
              <p className="skill-name">{skill.name}</p>
              <span className='skill-level'>{skill.level}</span>
            </div>
          ))}
            </div>
        </section>
        <section>
          <h2 className="section-title">{lang === 'vi' ? 'Dự án tiêu biểu' : 'Featured Projects'}</h2>
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
