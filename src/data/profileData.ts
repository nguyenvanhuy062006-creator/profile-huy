import type { Profile } from '../types/profile'

export const profileData: Profile = {
  name: 'Nguyễn Văn Huy',
  title: {
    vi: 'Thực tập sinh Front-end',
    en: 'Intern Front-end',
  },
  aboutMe: {
    vi: 'Xin chào! Tôi là Huy, hiện tại đang là sinh viên tại Trường Đại học Điện Lực. Mình có đam mê xây dựng trang web tối ưu, giao diện thân thiện và dễ tiếp cận.',
    en: 'Hello! I am Huy, currently an IT student at Electric Power University. I am passionate about building optimized web applications with friendly and accessible user interfaces.',
  },
  skills: [
    { name: 'HTML', level: 'Beginner' },
    { name: 'CSS', level: 'Beginner' },
    { name: 'Javascript', level: 'Beginner' },
  ],
  projects: [
    {
      id: 1,
      title: {
        vi: 'Web bán xe oto online',
        en: 'Online car sales website',
      },
      description: {
        vi: 'Hệ thống trang tin tức, khuyến mãi, hiện thông báo người dùng đăng kí khuyến mãi.',
        en: 'News and promotion system that displays notifications when users register for promotions.',
      },
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    },
  ],
  target: {
    vi: 'Em mong muốn được đào tạo trong môi trường chuyên nghiệp, có cơ hội tham gia vào các dự án thực tế để tìm tòi, học hỏi và phát triển thêm kiến thức mới.',
    en: 'I would like to be trained in a professional environment and have the opportunity to participate in real projects to explore, learn, and develop new knowledge.',
  },
  personalInfo: [
    {
      label: { vi: 'Họ và tên', en: 'Full name' },
      value: 'Nguyễn Văn Huy',
    },
    {
      label: { vi: 'Tuổi', en: 'Age' },
      value: '19',
    },
    {
      label: { vi: 'Năm sinh', en: 'Year of birth' },
      value: '2006',
    },
    {
      label: { vi: 'Quê quán', en: 'Hometown' },
      value: 'Hải Phòng, Việt Nam',
    },
    {
      label: { vi: 'Nơi học tập', en: 'Education' },
      value: 'Trường Đại học Điện Lực',
    },
    {
      label: { vi: 'Nơi làm việc', en: 'Workplace' },
      value: 'Thực tập sinh tại ETRON',
    },
    {
      label: { vi: 'Gmail', en: 'Gmail' },
      value: 'nguyenvanhuy062006@gmail.com',
    },
    {
      label: { vi: 'Số điện thoại', en: 'Phone' },
      value: '0329500326',
    },
  ],
}
