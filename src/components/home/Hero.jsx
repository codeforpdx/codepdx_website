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
  height: { xs: '50vh', md: '80vh' },
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
  width: { xs: '100%', md: '575px' },
  height: '100%'
};

const h1Style = {
  fontWeight: '400',
  textShadow: '0px 4px 4px #0000004D',
  lineHeight: { xs: '45px', sm: '80px' },
  flexBasis: { xs: '100px', sm: '160px' },
  flexShrink: 1,
  fontSize: { xs: '30px', sm: '56px' },
  pt: { xs: '25px', sm: '50px', md: '113px' },
  pl: { xs: 0, md: '56px' },
  width: { xs: '80%', md: '100%' },
  textAlign: 'center'
};

const contactBtnStyle = {
  textTransform: 'capitalize',
  fontWeight: '200',
  color: 'black',
  textShadow: '0px 4px 4px #0000004D',
  flexShrink: 1,
  alignSelf: 'center',
  mt: '2em',
  fontSize: { xs: '12px', sm: '15px', md: '18px' },
  width: { xs: '103px', sm: '150px', md: '310px' },
  height: { xs: '25px', sm: '50px', md: '84px' },
  borderRadius: '5px'
};

export default Hero;
