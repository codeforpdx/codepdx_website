// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Hero = () => {
  return (
    <Box sx={heroBackground}>
      <Box sx={heroContainer}>
        <Typography variant="h1" component="h1" sx={h1Style}>
          Bridging Technology and Civil Services
        </Typography>
        <Button
          variant="contained"
          href="mailto:hugh@codeforpdx.org"
          target="_blank"
          rel="noopener"
          sx={contactBtnStyle}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

const heroBackground = {
  width: '100%',
  height: { xs: '40vh', md: '50vh' },
  backgroundImage: 'url(/assets/stJohnsBridge.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};

const heroContainer = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  alignItems: { xs: 'center', md: 'flex-start' },
  width: { xs: '100%', md: 3 / 5 },
  height: '100%'
};

const h1Style = {
  fontWeight: '400',
  flexBasis: { xs: '100px', md: '200px' },
  flexShrink: 1,
  fontSize: 'calc(28px + 2.5vw)',
  pt: '1em',
  pl: { xs: 0, md: '0.75em' },
  width: { xs: '80%', md: '100%' },
  textAlign: 'center'
};

const contactBtnStyle = {
  flexBasis: '30px',
  flexShrink: 1,
  alignSelf: 'center',
  mt: '2em',
  fontSize: 'calc(.5rem + .5vw)',
  width: 'calc(6rem + 3vw)'
};

export default Hero;
