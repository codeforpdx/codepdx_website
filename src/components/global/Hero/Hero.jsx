// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
//import component specific styles
import { heroStyles } from './styles';

const Hero = ({ pageName, heroImage, heroText }) => {
  let h1Styles = '';
  let containerStyles = '';
  switch (pageName) {
    case 'projects':
      h1Styles = heroStyles.projectsH1;
      containerStyles = [heroStyles.heroContainerAlt, heroStyles.heroRightAlign];
      break;
    case 'volunteer':
      h1Styles = heroStyles.volunteerH1;
      containerStyles = [heroStyles.heroContainerAlt, heroStyles.heroCenterAlign];
      break;
    default:
      h1Styles = heroStyles.homeH1;
      containerStyles = [heroStyles.heroContainer];
  }

  return (
    <Box sx={[heroStyles.heroBackground, { backgroundImage: heroImage }]}>
      <Box sx={containerStyles}>
        <Typography variant="h1" sx={h1Styles}>
          {heroText}
        </Typography>
        {pageName === 'home' && (
          <Button
            variant="contained"
            href="mailto:hugh@codeforpdx.org"
            sx={heroStyles.contactBtnStyle}
          >
            Contact Us
          </Button>
        )}
      </Box>
    </Box>
  );
};

Hero.propTypes = {
  pageName: PropTypes.string,
  heroImage: PropTypes.string,
  heroText: PropTypes.string
};

export default Hero;
