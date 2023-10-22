import Typography from '@mui/material/Typography';
import Hero from '../components/home/Hero';
import ProjectBox from '../components/projects/ProjectBox';

const Projects = () => {
  // any logic needed
  return (
    // either make Hero reusable somehow (and move it to components/global)
    // or use <Box component="img" />
    <>
      <Hero />
      {/* or <Box component="img" /> */}
      <Typography />
      <ProjectBox />
      {/* <ProjectBox /> */}
    </>
  );
};

export default Projects;
