import Typography from '@mui/material/Typography';
import Hero from '../components/global/Hero/Hero';
import ProjectBox from '../components/projects/ProjectBox';
import { Container } from '@mui/material';

const Projects = () => {
  return (
    <>
      <Hero
        pageName={'projects'}
        heroImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/projectsHeroImage.png)`}
        heroText={`Our products blend innovation, quality, and user-centric design to meet today's needs and anticipate tomorrow's challenges`}
      />
      <Container maxWidth="xl">
        <Typography />
        <ProjectBox />
        <ProjectBox />
      </Container>
    </>
  );
};

export default Projects;
