// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import component specific styles
import { heroStyles } from './styles';

const Hero = (props) => {
  let h1Styles = '';
  let containerStyles = '';
  switch (props.pageName) {
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
    <Box sx={[heroStyles.heroBackground, { backgroundImage: props.heroImage }]}>
      <Box sx={containerStyles}>
        <Typography variant="h1" sx={h1Styles}>
          {props.heroText}
        </Typography>
        {props.pageName === 'home' && (
          <Button
            variant="contained"
            href="mailto:hugh@codeforpdx.org"
            target="_blank"
            rel="noopener"
            sx={heroStyles.contactBtnStyle}
          >
            Contact Us
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Hero;
