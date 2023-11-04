import LogoJavascript from '/public/images/logos/icon-javascript.svg'
import LogoTypescript from '/public/images/logos/icon-typescript.svg'
import LogoReact from '/public/images/logos/icon-react.svg'
import LogoNextjs from '/public/images/logos/icon-nextjs.svg'
import LogoNodejs from '/public/images/logos/icon-nodejs.svg'
import LogoFigma from '/public/images/logos/icon-figma.svg'
import LogoGit from '/public/images/logos/icon-git.svg'

import LogoUpwork from '/public/images/logos/logo-upwork.svg'
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg'
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg'

import ProjectFiskil from '/public/images/project-fiskil.png'
import ProjectWingie from '/public/images/project-wingie.png'
import ProjectPepehousing from '/public/images/project-pepehousing.png'

export const USER_INFO = {
  HERO_SECTION: {
    ID: 'hero',
    IMAGE: 'images/sagar-headshot.jpg',
    MAIN_TITLE: "Hi, I'm Duc",
    SUB_TITLE: `I am a front-end developer (Javascript/Typescript) with over 1 YOE. I have a passion for designing UI for web and mobile apps. The technologies I use are React Native, Next.js, and Jetpack Compose. Besides that, I also focus on interface design (UI/UX) using Figma.`,
    LOCATION: 'Ho Chi Minh City, Viet Nam',
    STATUS: 'Available for new projects',
    SOCIAL: {
      GITHUB: 'https://github.com/DAMHONGDUC',
      FACEBOOK: 'https://www.facebook.com/',
      INSTAGRAM: 'https://www.instagram.com/',
      FIGMA: 'https://www.figma.com/@hongdduc',
    },
  },
  NAV_BAR: {
    LOGO: '<html>',
    NAV_LINKS: [
      {
        label: 'About',
        href: '#about-me',
      },
      {
        label: 'Work',
        href: '#work',
      },
      {
        label: 'Testimonials',
        href: '#testimonials',
      },
      {
        label: 'Contact',
        href: '#contact',
      },
    ],
    DOWNLOAD_CV: {
      title: 'Download CV',
      file: '/files/file-sample_100kB.docx',
    },
  },
  ABOUT_ME_SECTION: {
    ID: 'about-me',
    TAG: 'About me',
    TITLE: 'Curious about me? Here you have it:',
    CONTENT: `who specializes in full stack development (React.js & Node.js). I
              am enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to me.
              who specializes in full stack development (React.js & Node.js). I
              am enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to me.
              who specializes in full stack development (React.js & Node.js). I
              am enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to me.`,
  },
  SKILL_SECTION: {
    ID: 'skills',
    TAG: 'Skills',
    SKILLS: [
      {
        label: 'Javascript',
        logo: LogoJavascript,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        label: 'Typescript',
        logo: LogoTypescript,
        url: 'https://www.typescriptlang.org/',
      },
      {
        label: 'Next.js',
        logo: LogoNextjs,
        url: 'https://nextjs.org/',
      },
      {
        label: 'React Native',
        logo: LogoReact,
        url: 'https://react.dev/',
      },
      {
        label: 'Node.js',
        logo: LogoNodejs,
        url: 'https://nodejs.org/en',
      },
      {
        label: 'Figma',
        logo: LogoFigma,
        url: 'https://www.figma.com/',
      },
      {
        label: 'Git',
        logo: LogoGit,
        url: 'https://git-scm.com/',
      },
    ],
  },
  EXPERIENCE_SECTION: {
    ID: 'experience',
    TAG: 'Experience',
    EXPERIENCES: [
      {
        logo: LogoUpwork,
        logoAlt: 'Upwork logo',
        position: 'Independent Freelancer',
        startDate: '2021',
        endDate: 'now',
        summary: [
          'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
          'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
        ],
      },
      {
        logo: LogoGreenApex,
        logoAlt: 'Greenapex logo',
        position: 'Team Lead',
        startDate: '2020',
        endDate: '2021',
        summary: [
          'Acted as team lead in different projects.',
          'Brainstormed new ideas & gathered requirements for internal projects.',
          'Designed architecture of different projects (frontend + backend).',
          'Worked on enterprise-level projects for a variety of clients.',
          'Handled sprint planning & task distribution.',
        ],
      },
      {
        logo: LogoDotnpixel,
        logoAlt: 'Dotnpixel logo',
        position: 'Full Stack Developer',
        startDate: '2020',
        endDate: '2021',
        summary: ['Worked as a full stack developer (React / Laravel).'],
      },
    ],
  },
  PROJECT_SECTION: {
    ID: 'project',
    TAG: 'Project',
    PROJECT_DETAIL: [
      {
        name: 'Wingie',
        description:
          'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
        url: 'https://www.wingie.com',
        previewImage: ProjectWingie,
        technologies: [
          'React',
          'Typescript',
          'React Bootstrap',
          'Firebase',
          'Express.js',
          'PostgreSQL',
          'Styled Components',
          'Redux',
        ],
        source: 'https://www.youtube.com/',
        demo: 'https://www.youtube.com/',
      },
      {
        name: 'Fiskil',
        description:
          'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
        url: 'https://fiskil.com.au',
        previewImage: ProjectFiskil,
        technologies: [
          'React',
          'Next.js',
          'Typescript',
          'Tailwindcss',
          'Material UI',
          'Redux Toolkit',
          'React Query',
        ],
        source: 'https://www.youtube.com/',
        demo: 'https://www.youtube.com/',
      },
      {
        name: 'Pepehousing',
        description:
          'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
        url: 'https://pepehousing.com',
        previewImage: ProjectPepehousing,
        technologies: [
          'React',
          'Next.js',
          'Typescript',
          'Tailwindcss',
          'Redux Toolkit',
          'React Query',
          'Storybook',
        ],
        source: 'https://www.youtube.com/',
        demo: 'https://www.youtube.com/',
      },
    ],
  },
}

export const DOCUMENT_TITLE = 'Hong Duc | Portfolio'

export const TagType = {
  HEADING: 0,
  CONTENT: 1,
}
