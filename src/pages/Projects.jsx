import Typography from '@mui/material/Typography';
import Hero from '../components/home/Hero';
import ProjectBox from '../components/projects/ProjectBox';
import { Container } from '@mui/material';

const Projects = () => {
  return (
    // either make Hero reusable somehow (and move it to components/global)
    // or use <Box component="img" />
    <>
      <Hero pageName={'projects'} />
      {/* or <Box component="img" /> */}
      <Container maxWidth="xl">
        <Typography />
        <ProjectBox />
        <ProjectBox />
      </Container>
    </>
  );
};

export default Projects;
