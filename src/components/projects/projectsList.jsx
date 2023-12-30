// React Icons Imports
import { FaDiscord, FaEarthAmericas, FaGithub } from 'react-icons/fa6';

const projectsList = [
  {
    index: 1,
    title: 'RecordSponge',
    description:
      'Having been utilized by over 10,000 individuals and honored with the 2021 Achievement in Legal Technology Award by the Oregon State Bar, RecordSponge is an innovative tool with proven community impact. Designed to analyze an individuals criminal history and determine their eligibility for record expungement, RecordSponge reduces obstruction of costly legal services and assists in reduction of inequalities within our justice system.',
    status: 'Live',
    logo: '/assets/codepdxImages/logoRecordSponge.svg',
    links: [
      {
        href: 'https://github.com/codeforpdx/recordexpungPDX',
        icon: <FaGithub />
      },
      {
        href: 'https://discord.gg/x6b573et',
        icon: <FaDiscord />
      },
      {
        href: 'https://codeforpdx.github.io/recordexpungPDX',
        icon: <FaEarthAmericas />
      }
    ],
    techStack: [
      'TypeScript',
      'React',
      'Redux',
      'NPM',
      'Flask',
      'Python',
      'Pytest',
      'SCSS',
      'CSS',
      'Jinja',
      'Makefile',
      'Docker'
    ]
  },
  {
    index: 2,
    title: 'PASS',
    description:
      'PASS is an open source digital wallet for providing home insecure individuals a safe place to store documents within their control. PASS additionally assists caseworkers with processing and providing documents needed to complete the housing assistance application process.',
    status: 'In Development',
    logo: '/assets/codepdxImages/PassLogo.png',
    links: [
      {
        href: 'https://github.com/codeforpdx/PASS',
        icon: <FaGithub />
      },
      {
        href: 'https://discord.gg/x6b573et',
        icon: <FaDiscord />
      },
      {
        href: 'https://passsmartwallet-967e217a2652.herokuapp.com/',
        icon: <FaEarthAmericas />
      }
    ],
    techStack: ['SOLID', 'React', 'Vite', 'JSDocs', 'MUI', 'NPM', 'ESLint']
  },
  {
    index: 3,
    title: 'CODE PDX',
    description:
      'Code PDX itself is a project that requires constant upkeep and volunteers to maintain. This ranges from project management, assisting with organizing events, or even updating this website! We are constantly improving to better help our community.',
    logo: '/assets/codepdxImages/roseLogoGreen.svg',
    links: [
      {
        href: 'https://github.com/codeforpdx',
        icon: <FaGithub />
      },
      {
        href: 'https://discord.gg/JcKBq7nXvf',
        icon: <FaDiscord />
      },
      {
        href: 'https://www.codeforpdx.org/',
        icon: <FaEarthAmericas />
      }
    ],
    techStack: ['Discord', 'GitHub', 'Google Meets']
  }
];

export default projectsList;
