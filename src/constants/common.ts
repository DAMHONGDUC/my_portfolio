import LogoJavascript from '/public/images/logos/icon-javascript.svg'
import LogoTypescript from '/public/images/logos/icon-typescript.svg'
import LogoReact from '/public/images/logos/icon-react.svg'
import LogoNextjs from '/public/images/logos/icon-nextjs.svg'
import LogoNodejs from '/public/images/logos/icon-nodejs.svg'
import LogoFigma from '/public/images/logos/icon-figma.svg'
import LogoGit from '/public/images/logos/icon-git.svg'
import LogoFlutter from '/public/images/logos/flutter.svg'

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
    SUB_TITLE: `I'm a front-end developer with over 1.5 YOE, specializing in JavaScript and TypeScript.
    I have the ability to create UI for web and mobile apps. 
    I'm well-versed in technologies like React Native, Flutter, Next.js and Jetpack Compose. 
    In addition, I also focus on researching and designing UI/UX using Figma.`,
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
    CONTENT: `I studied Information System at the University of Science - VNUHCM. 2019 - 2023.
            
              I have a passion for developing UI for web and mobile apps. I officially start my career as a mobile developer in July 2022.
            
              Regarding mobile app development, I have used frameworks: React Native, Xamarin Forms, and Flutter. In addition, I can also build native Android applications using Java, XML, or Jetpack Compose.

              Regarding web development, I have used frameworks: Next.js and React.js.
              `,
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
        label: 'Flutter',
        logo: LogoFlutter,
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
        logo: LogoGreenApex,
        logoAlt: 'TGL Solutions',
        companyName: 'TGL Solutions',
        position: 'Junior Mobile Developer',
        startDate: '2023',
        endDate: 'now',
        timeDetail: 'Mar 2023 - now',
        summary: [
          'Full-time',
          'Work as a front-end developer (mobile apps and web)',
          'Tech Stack: Next.js, GraphQL, React Native, Redux',
        ],
      },
      {
        logo: LogoDotnpixel,
        logoAlt: 'Flynk',
        companyName: 'Flynk',
        position: 'Fresher Mobile Developer',
        startDate: '2022',
        endDate: '2023',
        timeDetail: 'Jul 2022 - Feb 2023 (8 mos)',
        summary: [
          'Full-time',
          'Work as a mobile developer',
          'Tech Stack: Xamarin Forms, React Native, Redux',
        ],
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
  CONTACT_SECTION: {
    ID: 'contact',
    TAG: 'contact',
    EMAIL: 'hongduc001h@gmail.com',
    PHONE: '0355211xxx',
    TITLE: ` What’s next? Feel free to reach out to me if you are looking for a
            developer, have a query, or simply want to connect.`,
  },
}

export const DOCUMENT_TITLE = 'Hong Duc | Portfolio'

export const TagType = {
  HEADING: 0,
  CONTENT: 1,
}

export const FOOTER = {
  title: 'Portfolio',
  subTitle: 'Additional Contact',
  copyRight: '2023 | coded by Dam Hong Duc',
}
