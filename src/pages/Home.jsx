// Material UI Imports
import { Container } from '@mui/material';
// Component Imports
import Hero from '../components/global/Hero/Hero';
import About from '../components/home/About';
import VolunteerBrief from '../components/home/VolunteerBrief';
import Events from '../components/home/Events';
import ProjectsBrief from '../components/home/ProjectsBrief';
import Partners from '../components/home/partners/Partners';

const Home = () => {
  return (
    <>
      <Hero
        pageName={'home'}
        heroImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/heroImages/homeHeroImage.png)`}
        heroText={`Bridging Technology and Civil Services`}
      />
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
