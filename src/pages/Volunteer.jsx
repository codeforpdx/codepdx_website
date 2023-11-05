import Typography from '@mui/material/Typography';
import Hero from '../components/global/Hero/Hero';
import Steps from '../components/volunteer/Steps';
import { Container } from '@mui/material';

const Volunteer = () => {
  return (
    <>
      <Hero
        pageName={'volunteer'}
        heroImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/volunteerHeroImage.png)`}
        heroText={`How to Join CODE PDX`}
      />
      <Container maxWidth="xl">
        <Typography />
        <Steps />
      </Container>
    </>
  );
};

export default Volunteer;
