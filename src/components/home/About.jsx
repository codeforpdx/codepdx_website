// Material UI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const About = () => {
  // Importing images
  const volunteerGrid = [
    { 
      image: 'https://www.tidmorevet.com/wp-content/uploads/2020/06/shutterstock_767854171-1.jpg',
      label: '',
      alt: 'kitten'
    },
    { 
      image: 'https://www.tidmorevet.com/wp-content/uploads/2020/06/shutterstock_767854171-1.jpg',
      label: '',
      alt: 'kitten'
    },
    { 
      image: 'https://www.tidmorevet.com/wp-content/uploads/2020/06/shutterstock_767854171-1.jpg',
      label: '',
      alt: 'kitten'
    },
    { 
      image: 'https://www.tidmorevet.com/wp-content/uploads/2020/06/shutterstock_767854171-1.jpg',
      label: '',
      alt: 'kitten'
    },
  ];

  return (
    <Grid container sx={{ width: '100vw', my: '40px' }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '10px', textAlign: 'center', px: '3rem' }}>
        <Typography variant="h3" component="h2" sx={{ px: '2rem' }}>
          Who is CODE PDX?
        </Typography>
        <Box sx={{ px: '2rem', textAlign: 'left', mt: '2rem' }}>
          <Typography variant="h6" component="h3">
            We are civic-minded residents committed to improving public services in Portland by working with local government to utilize open data, improve citizen knowledge, and implementing technological solutions. We are driven by our community for our community. 
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          {volunteerGrid.map(({ image, label, alt }) => (
            <Grid item key={alt}>
              <Box sx={{ display: 'inline-block', borderRadius: '10px', overflow: 'hidden', margin: '5px' }}>
                <img src={image} alt={alt} style={{ width: '200px', height: 'auto', borderRadius: '10px' }} />
              </Box>
              <Typography variant="body2" align="center">
                {label ?? null}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
