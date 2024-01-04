// Material UI Imports
import Container from '@mui/material/Container';
import Hero from '../components/global/Hero/Hero';
import Typography from '@mui/material/Typography';
// Component Imports
import VolunteerSteps from '../components/volunteer/VolunteerSteps';

const Volunteer = () => {
  return (
    <>
      <Hero
        pageName="volunteer"
        heroImage="linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/code-pdx-volunteer-meeting-1680x758.webp)"
        heroText="How to Join CODE PDX"
      />
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" textAlign="center" sx={{ px: '2rem', my: '40px' }}>
          Regardless of skillset, background, or physical location, we welcome all to contribute to
          our community.
        </Typography>
        <VolunteerSteps />
      </Container>
    </>
  );
};

export default Volunteer;
