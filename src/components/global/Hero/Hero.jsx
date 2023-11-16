// Material UI Imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
// Component Style Imports
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
        {heroText && (
          <Typography variant="h1" sx={h1Styles}>
            {heroText}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

Hero.propTypes = {
  pageName: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  heroText: PropTypes.string
};

export default Hero;
