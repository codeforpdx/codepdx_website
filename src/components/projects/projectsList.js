import { FaDiscord, FaEarthAmericas, FaGithub } from 'react-icons/fa6';

const projectsList = [
  {
    title: 'RecordSponge',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repellat saepe vel unde animi nesciunt suscipit iure quas, delectus possimus officiis voluptatum provident voluptates dolores deserunt nemo cum. Quaerat, cupiditate ad eius vel voluptatem sapiente iure sunt magni alias repellat?',
    status: 'Live',
    logo: { image: '/assets/logoRecordSponge.svg', alt: 'RecordSponge logo' },
    links: [
      {
        href: 'https://github.com/codeforpdx/recordexpungPDX',
        // icon: <FaGithub size={45} />,
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
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repellat saepe vel unde animi nesciunt suscipit iure quas, delectus possimus officiis voluptatum provident voluptates dolores deserunt nemo cum. Quaerat, cupiditate ad eius vel voluptatem sapiente iure sunt magni alias repellat?',
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
  }
];

export default projectsList;
