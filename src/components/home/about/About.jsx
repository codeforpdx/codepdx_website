// Material UI Imports
import Stack from '@mui/material/Stack';
// Component Imports
import ImageSection from './ImageSection';
import TextSection from './TextSection';

const About = () => (
  <Stack
    component="section"
    direction={{ xs: 'column', lg: 'row' }}
    spacing={6}
    alignItems="center"
    justifyContent="center"
    maxWidth="xl"
    py={{ xs: '10%', lg: '2%' }}
  >
    <TextSection />
    <ImageSection />
  </Stack>
);

export default About;
