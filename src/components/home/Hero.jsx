// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Hero = () => {
  const heroStyle = {
    display: 'flex',
    flexFlow: 'column no-wrap',
    justifyContent: { xs: 'center', md: 'flex-start' },
    alignItems: 'flex-start',
    width: '100vw',
    height: '70vh',
    backgroundImage: 'url(/assets/stJohnsBridge.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const h1Style = {
    fontSize: '6vw',
    pt: '1em',
    pl: '0.75em',
    height: '35vh',
    width: 3 / 5,
    textAlign: 'center'
  };

  const contactBtnStyle = {
    mt: '2em',
    height: '2em',
    width: '15vh'
  };

  return (
    <Box sx={heroStyle}>
      <Typography variant="h1" component="h1" sx={h1Style}>
        Bridging Technology and Civil Services
        <Button
          variant="contained"
          href="mailto:hugh@codeforpdx.org"
          target="_blank"
          rel="noopener"
          sx={contactBtnStyle}
        >
          Contact Us
        </Button>
      </Typography>
    </Box>
  );
};

export default Hero;
