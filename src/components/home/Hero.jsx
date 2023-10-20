// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Hero = () => {
  const heroStyle = {
    width: '100vw',
    height: '70vh',
    backgroundImage: 'url(/assets/stJohnsBridge.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const containerStyle = {
    display: 'flex',
    flexFlow: 'column',
    flexBasis: 1,
    justifyContent: 'flex-start',
    alignItems: { xs: 'center', md: 'flex-start' },
    width: { xs: '100%', md: 3 / 5 }
  };

  const h1Style = {
    fontSize: { xs: '8vw', md: '6vw' },
    pt: '1em',
    pl: '0.75em',
    width: { xs: '80%', md: '100%' },
    textAlign: 'center'
  };

  const contactBtnStyle = {
    alignSelf: 'center',
    mt: '2em',
    height: '2em',
    width: '17vh'
  };

  return (
    <Box sx={heroStyle}>
      <Box sx={containerStyle}>
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

export default Hero;
