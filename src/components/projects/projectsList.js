import { FaDiscord, FaEarthAmericas, FaGithub } from 'react-icons/fa6';

const projectsList = [
  {
    title: 'RecordSponge',
    backgroundStyle: 'linear-gradient(to bottom, white, lightgrey)',
    description:
      "RecordSponge is an app that helps community organizations quickly analyze an individual's criminal history to determine if they qualify to have their records expunged.",
    status: { statusText: 'Live', statusColor: 'success' },
    logo: { image: '/assets/logoRecordSponge.svg', alt: 'RecordSponge logo' },
    links: [
      {
        href: 'https://github.com/codeforpdx/recordexpungPDX',
        icon: 'FaGithub',
        // icon: <FaGithub size={45} />,
        // icon: '<FaGithub size={45} />',
        ariaLabel: 'Github link'
      },
      {
        href: 'https://discord.gg/x6b573et',
        icon: '<FaDiscord size={45} />',
        ariaLabel: 'Discord link'
      },
      {
        href: 'https://codeforpdx.github.io/recordexpungPDX',
        icon: '<FaEarthAmericas size={45} />',
        ariaLabel: 'Deployed link'
      }
    ],
    techStack: 'tbd'
  },
  {
    title: 'PASS',
    backgroundStyle: 'linear-gradient(to left, white, lightgrey)',
    description:
      'PASS is an open source digital wallet for providing home insecure individuals a safe place to store documents within their control. PASS additionally assists caseworkers with processing and providing documents needed to complete the housing assistance application process.',
    status: { statusText: 'In Development', statusColor: 'error' },
    logo: { image: '/assets/logoPASS.svg', alt: 'PASS logo' },
    links: [
      {
        href: 'https://github.com/codeforpdx/PASS',
        icon: `<FaGithub size={45} />`,
        ariaLabel: 'Github link'
      },
      {
        href: 'https://discord.gg/x6b573et',
        icon: `<FaDiscord size={45} />`,
        ariaLabel: 'Discord link'
      },
      {
        href: 'https://passsmartwallet-967e217a2652.herokuapp.com/',
        icon: `<FaEarthAmericas size={45} />`,
        ariaLabel: 'Deployed link'
      }
    ],
    techStack: 'SOLID, React, Vite, JSDocs, MUI, NPM, ES Lint'
  },
  {
    title: 'CODE PDX',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repellat saepe vel unde animi nesciunt suscipit iure quas, delectus possimus officiis voluptatum provident voluptates dolores deserunt nemo cum. Quaerat, cupiditate ad eius vel voluptatem sapiente iure sunt magni alias repellat?',
    logo: { image: '/assets/rose_logo.png', alt: 'CODE PDX logo' }
  }
];

export default projectsList;
