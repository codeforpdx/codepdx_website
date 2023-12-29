// Material UI Imports
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const TextSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Stack spacing={3} justifyContent="center" maxWidth={{ xs: '100%', lg: '33%' }}>
      <Typography variant="h3" component="h2" textAlign={'center'}>
        {/* Who is CODE PDX? */}
        {isSmallScreen ? 'About CODE PDX' : 'CODE PDX'}
      </Typography>
      <Typography variant="h5" component="h3" textAlign="center">
        We are civic-minded residents committed to improving public services in Portland by working
        with local government to utilize open data, improve citizen knowledge, and implementing
        technological solutions. We are driven by our community for our community.
      </Typography>
    </Stack>
  );
};

export default TextSection;
