// Material UI Imports
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// Component Imports
import Hero from '../components/home/Hero';
import VolunteerSteps from '../components/volunteer/VolunteerSteps';
import VolunteerSteps2 from '../components/volunteer/VolunteerSteps2.jsx';
import VolunteerStepsMobile from '../components/volunteer/VolunteerStepsMobile.jsx';

const Volunteer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    // either make Hero reusable somehow (and move it to components/global)
    // or use <Box component="img" />
    <>
      <Hero />
      {/* or <Box component="img" /> */}
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" textAlign="center" sx={{ px: '2rem', my: '40px' }}>
          Regardless of skillset, background, or physical location, we welcome all to contribute to
          our community.
        </Typography>
        {/* {isLargeScreen && <VolunteerSteps />} */}
        {isLargeScreen && <VolunteerSteps2 />}
        {isSmallScreen && <VolunteerStepsMobile />}
      </Container>
    </>
  );
};

export default Volunteer;
