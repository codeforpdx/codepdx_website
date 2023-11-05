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

const heroContainer = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  alignItems: { xs: 'center', md: 'flex-start' },
  width: { xs: '100%', md: '575px' },
  height: '100%'
};

const heroContainerRight = {
  display: 'flex',
  flexFlow: 'row',
  justifyContent: 'flex-end',
  alignItems: { xs: 'center', md: 'flex-start' },
  width: { xs: '100%', md: '575px' },
  height: '100%'
};

const homeH1 = {
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

const projectsH1 = {
  fontWeight: '400',
  color: '#ffff',
  textShadow: '0px 4px 4px #0000004D',
  alignSelf: 'flex-end',
  flexBasis: { xs: '100px', md: '160px' },
  fontSize: { xs: '16px', md: '48px' },
  pt: { xs: '25px', md: '113px' },
  pl: { xs: 0, md: '56px' },
  width: { xs: '80%', md: '100%' },
  textAlign: 'left'
};

const volunteerH1 = {
  fontWeight: '400',
  color: '#ffff',
  textShadow: '0px 4px 4px #0000004D',
  lineHeight: { xs: '45px', md: '80px' },
  flexBasis: { xs: '100px', md: '160px' },
  fontSize: { xs: '16px', md: '30px' },
  pt: { xs: '25px', md: '113px' },
  pl: { xs: 0, md: '56px' },
  width: { xs: '80%', md: '100%' },
  textAlign: 'center'
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
  let h1Style = '';
  switch (props.pageName) {
    case 'projects':
      h1Style = projectsH1;
      break;
    case 'volunteer':
      h1Style = volunteerH1;
      break;
    default:
      h1Style = homeH1;
  }

  return (
    <Box sx={[heroBackground, { backgroundImage: props.heroImage }]}>
      <Box sx={heroContainer}>
        <Typography variant="h1" sx={[h1Style]}>
          {props.heroText}
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
