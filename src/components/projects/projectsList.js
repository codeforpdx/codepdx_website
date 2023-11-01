// import { FaDiscord, FaEarthAmericas, FaGithub } from 'react-icons/fa6';

const projectsList = [
  {
    title: 'RecordSponge',
    // backgroundStyle: 'linear-gradient(to right, white, lightgrey)',
    description:
      'Having been utilized by over 10,000 individuals and honored with the 2021 Achievement in Legal Technology Award by the Oregon State Bar, RecordSponge is an innovative tool with proven community impact. Designed to analyze an individuals criminal history and determine their eligibility for record expungement, RecordSponge reduces obstruction of costly legal services and assists in reduction of inequalities within our justice system.',
    status: 'Live',
    logo: { image: '/assets/logoRecordSponge.svg', alt: 'RecordSponge logo' },
    links: [
      {
        href: 'https://github.com/codeforpdx/recordexpungPDX',
        icon: '<FaGithub size={45} />',
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
    techStack:
      'TypeScript, React, Redux, NPM, Flask, Python, Pytest,  SCSS, CSS, Jinja, Makefile, Docker'
  },
  {
    title: 'PASS',
    // backgroundStyle: 'linear-gradient(to left, white, lightgrey)',
    description:
      'PASS is an open source digital wallet for providing home insecure individuals a safe place to store documents within their control. PASS additionally assists caseworkers with processing and providing documents needed to complete the housing assistance application process.',
    status: 'In Development',
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
