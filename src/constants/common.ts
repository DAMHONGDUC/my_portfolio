import LogoJavascript from '/public/images/logos/icon-javascript.svg'
import LogoTypescript from '/public/images/logos/icon-typescript.svg'
import LogoReact from '/public/images/logos/icon-react.svg'
import LogoNextjs from '/public/images/logos/icon-nextjs.svg'
import LogoFigma from '/public/images/logos/icon-figma.svg'
import LogoGit from '/public/images/logos/icon-git.svg'
import LogoFlutter from '/public/images/logos/flutter.svg'

import LogoGreenApex from '/public/images/logos/logo-greenapex.svg'
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg'

export const USER_INFO = {
  HERO_SECTION: {
    ID: 'hero',
    IMAGE: 'images/avt_1.jpg',
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
      LINKEDIN: 'https://www.linkedin.com/in/dam-hong-duc/',
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
        label: 'Skills',
        href: '#skills',
      },
      {
        label: 'Experience',
        href: '#experience',
      },
      {
        label: 'Project',
        href: '#project',
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
    IMAGE: 'images/avt_2.jpg',
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
        url: 'https://reactnative.dev/',
      },
      {
        label: 'Flutter',
        logo: LogoFlutter,
        url: 'https://flutter.dev/',
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
        name: 'dSound',
        description: 'Stream and listen to music online for free with dSound',
        url: 'https://www.wingie.com',
        previewImage: 'images/dSound_logo.png',
        technologies: ['Javacript', 'Redux', 'Firebase', 'Zing MP3 API'],
        source: 'https://github.com/DAMHONGDUC/dSound',
        demo: 'https://www.youtube.com/watch?v=72bvRZppxw8&t=107s',
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
