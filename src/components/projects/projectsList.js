import {
  // FaDiscord,
  FaEarthAmericas,
  FaGithub
} from 'react-icons/fa6';

const projectsList = [
  {
    title: 'RecordSponge',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repellat saepe vel unde animi nesciunt suscipit iure quas, delectus possimus officiis voluptatum provident voluptates dolores deserunt nemo cum. Quaerat, cupiditate ad eius vel voluptatem sapiente iure sunt magni alias repellat?',
    status: 'Live',
    logo: { image: '/assets/logoPlaceholder.svg', alt: 'RecordSponge logo' },
    links: <FaGithub />,
    techStack: 'Built with SOLID, React, Vite, JSDocs, MUI, NPM, ES Lint'
  },
  {
    title: 'PASS',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repellat saepe vel unde animi nesciunt suscipit iure quas, delectus possimus officiis voluptatum provident voluptates dolores deserunt nemo cum. Quaerat, cupiditate ad eius vel voluptatem sapiente iure sunt magni alias repellat?',
    status: 'In Development',
    logo: '',
    links: <FaEarthAmericas />,
    techStack: 'Built with SOLID, React, Vite, JSDocs, MUI, NPM, ES Lint'
  }
];

export default projectsList;
