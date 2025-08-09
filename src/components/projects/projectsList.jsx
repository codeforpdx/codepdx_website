// React Icons Imports
import { FaEarthAmericas, FaGithub } from 'react-icons/fa6';

const projectsList = [
  {
    index: 4,
    title: 'Tenant First Aid',
    description:
      `Tenant First Aid is an AI-powered chatbot designed to help tenants navigate rental issues, answer questions, and provide legal advice related to housing and eviction. Users may utilize Tenant First Aid's 24/7 chat support to get immediate assistance and guidance with regards to tenant rights and landlord obligations.`,
    status: 'Live',
    logo: '/assets/codePdx/tenant-first-aid-logo-light.svg',
    lightLogo: '/assets/codePdx/tenant-first-aid-logo.svg',
    links: [
      {
        href: 'https://github.com/codeforpdx/tenantfirstaid',
        icon: <FaGithub />
      },
      {
        href: 'https://tenantfirstaid.com/',
        icon: <FaEarthAmericas />
      }
    ],
    techStack: [
      'TypeScript',
      'React',
      'NPM',
      'Flask',
      'Python',
      'Pytest',
      'Valkey',
      'Tailwind CSS',
      'Gemini',
      'ESLint',
      'Makefile',
      'Docker'
    ]
  },
  {
    index: 1,
    title: 'RecordSponge',
    description:
      'Having been utilized by over 10,000 individuals and honored with the 2021 Achievement in Legal Technology Award by the Oregon State Bar, RecordSponge is an innovative tool with proven community impact. Designed to analyze an individuals criminal history and determine their eligibility for record expungement, RecordSponge reduces obstruction of costly legal services and assists in reduction of inequalities within our justice system.',
    status: 'Live',
    logo: '/assets/codePdx/logo-record-sponge-oregon.svg',
    lightLogo: null,
    links: [
      {
        href: 'https://github.com/codeforpdx/recordexpungPDX',
        icon: <FaGithub />
      },
      {
        href: 'https://recordsponge.com/',
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
    logo: '/assets/codePdx/pass-logo.svg',
    lightLogo: null,
    links: [
      {
        href: 'https://github.com/codeforpdx/PASS',
        icon: <FaGithub />
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
      'CODE PDX itself is a project that requires constant upkeep and volunteers to maintain. This ranges from project management, assisting with organizing events, or even updating this website! We are constantly improving to better help our community.',
    logo: '/assets/codePdx/code-pdx-rose-logo-green.svg',
    lightLogo: '/assets/codePdx/code-pdx-rose-logo-white.svg',
    links: [
      {
        href: 'https://github.com/codeforpdx',
        icon: <FaGithub />
      }
    ],
    techStack: ['Discord', 'GitHub', 'Google Meets']
  }
];

export default projectsList;
