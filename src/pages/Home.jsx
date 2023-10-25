import Hero from '../components/home/Hero';
import About from '../components/home/About';
import VolunteerBrief from '../components/home/VolunteerBrief';
import Events from '../components/home/Events';
import ProjectsBrief from '../components/home/ProjectsBrief';
import Partners from '../components/home/partners/Partners';
import { Container } from '@mui/material';

const Home = () => {
  return (
    <>
      <Hero />
      <Container maxWidth="xl">
        <About />
        <VolunteerBrief />
        <Events />
        <ProjectsBrief />
        <Partners />
      </Container>
    </>
  );
};

export default Home;
