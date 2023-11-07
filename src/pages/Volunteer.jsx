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
        <Typography variant="h3" component="h1" textAlign="center" sx={{ px: '2rem', my: '40px' }}>
          Regardless of skillset, background, or physical location, we welcome all to contribute to
          our community.
        </Typography>
        <Steps />
      </Container>
    </>
  );
};

export default Volunteer;
