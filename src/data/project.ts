import PROJECT12 from '/public/image/project12.jpg';
import PROJECT11 from '/public/image/project11.jpeg';
import PROJECT0 from '/public/image/project0.jpg';


export const project: TProject = [
  {
    key: 12,
    title: 'KT UMS',
    subtitle: '통신사 통합메세징시스템 개발',
    thumb: PROJECT12.src,
    category: 'OFFICIAL PROJECT',
    link: 'https://communis.kt.co.kr/',
    tags: ['Server', 'REST API', 'Spring', 'Spring Data JPA', 'Spring Batch', 'JWT', 'Altibase', 'Redis'],
    // notion: '',
    desc: '인터랙티브 구현에 중점을 둔 클론 코딩',
    duration: '2024.01 ~ 2024.07',
    section: 'CYLNDR 메인 페이지 클론코딩',
    tool: 'Spring, Spring Data JPA, Spring Batch, JWT, Altibase, Redis',
  },
  {
    key: 11,
    title: '마니또 프로젝트',
    subtitle: '온라인 롤링페이퍼 서비스',
    thumb: PROJECT11.src,
    category: '토이 프로젝트',
    link: 'https://manito.my',
    tags: ['WEB', 'Server', 'REST API', 'Spring', 'Spring Data JPA', 'MySQL', 'AWS'],
    // notion: '',
    desc: '인터랙티브 구현에 중점을 둔 클론 코딩',
    duration: '2024.01 ~ 2024.06',
    section: 'CYLNDR 메인 페이지 클론코딩',
    tool: 'Spring, Spring Data JPA, MySQL, AWS',
  },
  {
    key: 4,
    title: 'WITHUS',
    // thumb: PROJECT05.src,
    subtitle: '중앙대학교 간호대학원 환자관리플랫폼',
    category: '기업 사이트 제작',
    // link: '',
    tags: ['WEB', 'APP', 'Android', 'Spring', 'Spring Data JPA', 'Spring Security', 'Spring Batch', 'Thymeleaf', 'HTML', 'CSS', 'JavaScript(ES6+)'],
    desc: '중앙대학교 간호대학원 환자관리플랫폼',
    duration: '2023.06 ~ 2023.12',
    section: '중앙대학교 간호대학원 환자관리플랫폼',
    tool: 'WEB, APP, Android, Spring, Spring Data JPA, Spring Security, Spring Batch, MySQL, Thymeleaf, HTML, CSS, JavaScript(ES6+)',
  },
  {
    key: 3,
    title: 'SQL INJECTION SPRING',
    subtitle: 'Spring으로 개발한 모의 SQL 인젝션 웹사이트',
    //  thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work06.jpg`,
    category: 'CAPSOTNE DESIGN',
    link: 'https://github.com/k1mjunyoung/sql-injection-spring',
    tags: ['WEB', 'Spring', 'Spring Data JPA', 'Spring Security', 'MySQL', 'HTML', 'CSS', 'JavaScript(ES6+)'],
    desc: 'Spring으로 개발한 모의 SQL 인젝션 웹사이트',
    duration: '2023.03 ~ 2023.12',
    section: 'Spring으로 개발한 모의 SQL 인젝션 웹사이트',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  {
    key: 2,
    title: 'Qshing Detector',
    subtitle: '큐싱 탐지 어플리케이션',
    // thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work12.jpg`,
    category: 'CAPSOTNE DESIGN',
    link: 'https://github.com/teamSCV/qshing-detector',
    tags: ['App', 'Android', 'MySQL'],
    desc: '큐싱 탐지 어플리케이션',
    duration: '2023.01 ~ 2023.06',
    section: '기획, 디자인, 퍼블리싱 등 전반적인 사이트 제작 업무 담당',
    tool: 'Android, Server, MySQL ,App',
  },
  {
    key: 1,
    title: 'SCV',
    subtitle: '오픈소스 VPN 프로젝트',
    // thumb: PROJECT15.src,
    category: 'CAPSOTNE DESIGN',
    // link: '',
    tags: ['App', 'Android', 'Server', 'AWS'],
    notion: '',
    desc: '오픈소스를 활용한 신뢰성 있는 VPN 구축',
    duration: '2022.07 ~ 2022.12',
    section: 'P오픈소스를 활용한 신뢰성 있는 VPN 구축',
    tool: 'Android, AWS',
  },
  {
    key: 0,
    title: 'Soongle',
    subtitle: '교내 중고거래플랫폼',
    thumb: PROJECT0.src,
    category: 'TOY PROJECT',
    link: 'https://github.com/k1mjunyoung/soongle-django',
    tags: ['WEB', 'Django', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript(ES6+)'],
    notion: '',
    desc: 'PHP와 Django로 개발한 교내 중고거래플랫폼 웹 서비스',
    duration: '2022.01 ~ 2022.06',
    section: 'PHP와 Django로 구현한 교내 중고거래플랫폼 웹 서비스',
    tool: 'Django, PHP, MySQL, HTML, CSS, JavaScript(ES6+)',
  },
];

export type TProject = IProjectItem[];
export interface IProjectItem {
  key: number;
  title: string;
  subtitle: string;
  link?: string;
  desc: string;
  thumb?: string;
  category: string;
  tags?: string[];
  duration: string;
  section: string;
  tool: string;
  notion?: string;
  isProgress?: boolean;
}
