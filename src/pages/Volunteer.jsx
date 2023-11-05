import Typography from '@mui/material/Typography';
import Hero from '../components/home/Hero';
import Steps from '../components/volunteer/Steps';
import { Container } from '@mui/material';

const Volunteer = () => {
  return (
    // either make Hero reusable somehow (and move it to components/global)
    // or use <Box component="img" />
    <>
      <Hero
        pageName={'volunteer'}
        heroImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/volunteerHeroImage.png)`}
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
