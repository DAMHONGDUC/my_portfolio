import LogoJavascript from '/public/images/logos/icon-javascript.svg'
import LogoTypescript from '/public/images/logos/icon-typescript.svg'
import LogoReact from '/public/images/logos/icon-react.svg'
import LogoNextjs from '/public/images/logos/icon-nextjs.svg'
import LogoNodejs from '/public/images/logos/icon-nodejs.svg'
import LogoFigma from '/public/images/logos/icon-figma.svg'
import LogoGit from '/public/images/logos/icon-git.svg'

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
  },
}

export const DOCUMENT_TITLE = 'Hong Duc | Portfolio'
