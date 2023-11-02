// Material UI Imports
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// Component Imports
import Hero from '../components/home/Hero';
import VolunteerSteps from '../components/volunteer/VolunteerSteps.jsx';

const Volunteer = () => {
  return (
    // either make Hero reusable somehow (and move it to components/global)
    // or use <Box component="img" />
    <>
      <Hero />
      {/* or <Box component="img" /> */}
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
