// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Hero = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '70vh',
        backgroundImage: 'url(/assets/stJohnsBridge.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Typography variant="h1" component="h1">
        Bridging Technology and Civil Services
      </Typography>
      <Button
        variant="contained"
        href="mailto:hugh@codeforpdx.org"
        target="_blank"
        rel="noopener"
        sx={{
          mt: '2rem',
          width: 1 / 3,
          '&:hover': {
            color: 'white'
          }
        }}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default Hero;
