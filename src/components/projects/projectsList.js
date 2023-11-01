// import { FaDiscord, FaEarthAmericas, FaGithub } from 'react-icons/fa6';

const projectsList = [
  {
    title: 'RecordSponge',
    description:
      "RecordSponge is an app that helps community organizations quickly analyze an individual's criminal history to determine if they qualify to have their records expunged.",
    status: 'Live',
    logo: { image: '/assets/logoRecordSponge.svg', alt: 'RecordSponge logo' },
    links: [
      {
        href: 'https://github.com/codeforpdx/recordexpungPDX',
        // icon: 'FaGithub',
        // icon: <FaGithub size={45} />,
        icon: '<FaGithub size={45} />',
        ariaLabel: 'Github link'
      },
      {
        href: 'https://discord.gg/x6b573et',
        // icon: <FaDiscord size={45} />,
        ariaLabel: 'Discord link'
      },
      {
        href: 'https://codeforpdx.github.io/recordexpungPDX',
        // icon: <FaEarthAmericas size={45} />,
        ariaLabel: 'Deployed link'
      }
    ],
    techStack: 'tbd'
  },
  {
    title: 'PASS',
    description:
      'PASS is an open source digital wallet for providing home insecure individuals a safe place to store documents within their control. PASS additionally assists caseworkers with processing and providing documents needed to complete the housing assistance application process.',
    status: 'In Development',
    logo: { image: '/assets/logoPASS.svg', alt: 'PASS logo' },
    links: [
      {
        href: 'https://github.com/codeforpdx/PASS',
        // icon: <FaGithub size={45} />,
        ariaLabel: 'Github link'
      },
      {
        href: 'https://discord.gg/x6b573et',
        // icon: <FaDiscord size={45} />,
        ariaLabel: 'Discord link'
      },
      {
        href: 'https://passsmartwallet-967e217a2652.herokuapp.com/',
        // icon: <FaEarthAmericas size={45} />,
        ariaLabel: 'Deployed link'
      }
    ],
    techStack: 'SOLID, React, Vite, JSDocs, MUI, NPM, ES Lint'
  },
  {
    title: 'CODE PDX',
    description:
      'Code PDX itself is a project that requires constant upkeep and volunteers to maintain.',
    logo: { image: '/assets/rose_logo.png', alt: 'CODE PDX logo' }
  }
];

export default projectsList;
