// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const heroBackground = {
  width: '100%',
  height: { xs: '35vh', md: '70vh' },
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};

const homeHeroImage = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/stJohnsBridge.png)`
};

const projectsHeroImage = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/projectsHeroImage.png)`
};

const volunteerHeroImage = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/volunteerHeroImage.png)`
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
  color: '#ffff',
  textShadow: '0px 4px 4px #0000004D',
  lineHeight: { xs: '45px', md: '80px' },
  flexBasis: { xs: '100px', md: '160px' },
  fontSize: { xs: '30px', md: '56px' },
  pt: { xs: '25px', md: '113px' },
  pl: { xs: 0, md: '56px' },
  width: { xs: '80%', md: '100%' },
  textAlign: 'center'
};

const h1StyleOverride = {
  fontSize: '15px'
};

const contactBtnStyle = {
  textTransform: 'capitalize',
  fontWeight: '200',
  color: 'black',
  textShadow: '0px 4px 4px #0000004D',
  alignSelf: 'center',
  mt: '2em',
  fontSize: { xs: '15px', md: '18px' },
  width: { xs: '115px', md: '310px' },
  height: { xs: '25px', md: '84px' },
  borderRadius: '5px'
};

const Hero = (props) => {
  let heroImage = {};
  let heroText = '';
  switch (props.pageName) {
    case 'projects':
      heroImage = projectsHeroImage;
      heroText = `Our products blend innovation, quality, and user-centric design to meet today's needs and anticipate tomorrow's challenges`;
      break;
    case 'volunteer':
      heroImage = volunteerHeroImage;
      heroText = `How to Join CODE PDX`;
      break;
    default:
      heroImage = homeHeroImage;
      heroText = `Bridging Technology and Civil Services`;
  }

  return (
    <Box sx={[heroBackground, heroImage]}>
      <Box sx={heroContainer}>
        <Typography variant="h1" sx={[h1Style, h1StyleOverride]}>
          {heroText}
        </Typography>
        {props.pageName === 'home' && (
          <Button
            variant="contained"
            href="mailto:hugh@codeforpdx.org"
            target="_blank"
            rel="noopener"
            sx={contactBtnStyle}
          >
            Contact Us
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Hero;
