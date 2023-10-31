// Material UI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const About = () => {
  // Importing images
  const volunteerGrid = [
    { 
      image: 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMzI0NzU5Ni9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczNzI1Nzg5MH0.PrIBXmpEeLrVe--JDq6kE2HF-DPuyzaLgfC1tnQ10Eo/img.jpg?width=742&quality=80',
      label: '',
      alt: 'kitten'
    },
    {image: 'https://www.petmax.ca/cdn/shop/articles/tuqa-nabi-uhnZZUaTIOs-unsplash.jpg?v=1672753494',
    label: '',
    alt: 'kitten'
  },
    { 
      image: 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMzI0NzU5Ni9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczNzI1Nzg5MH0.PrIBXmpEeLrVe--JDq6kE2HF-DPuyzaLgfC1tnQ10Eo/img.jpg?width=742&quality=80',
      label: '',
      alt: 'kitten'
    },
    
    { 
      image: 'https://media.istockphoto.com/id/1392163011/photo/cute-female-kitten-walking-towards-and-looking-in-the-camera-on-a-pink-background.jpg?s=612x612&w=0&k=20&c=y8qTH_C8CUOM17fVIxnpnTJljzsJaHMgfzGh6AZ2TwU=',
      label: '',
      alt: 'kitten'
    },
    { 
      image: 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMzI0NzU5Ni9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczNzI1Nzg5MH0.PrIBXmpEeLrVe--JDq6kE2HF-DPuyzaLgfC1tnQ10Eo/img.jpg?width=742&quality=80',
      label: '',
      alt: 'kitten'
    }
  ];
  return (
    <Grid container sx={{ width: '100vw', my: '10px' }}>
      <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px', textAlign: 'center', px: '3rem' }}>
        <Typography variant="h3" component="h2" sx={{ px: '1rem'}}>
          Who is CODE PDX?
        </Typography>
        <Box sx={{ px: '2rem', textAlign: 'left', mt: '2rem' }}>
          <Typography variant="h5" component="h3">
            We are civic-minded residents committed to improving public services in Portland by working with local government to utilize open data, improve citizen knowledge, and implementing technological solutions. We are driven by our community for our community. 
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
      <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'flex-end' }}>
          {volunteerGrid.slice(0,2).map(({ image, label, alt }) => (
            <Grid item key={alt}>
              <Box sx={{ display: 'inline-block', borderRadius: '1px', overflow: 'hidden', margin: '20px', alignSelf: 'flex-end' }}>
                <img src={image} alt={alt} style={{ width: '200px', height: 'auto', borderRadius: '10px' }} />
              </Box>
              <Typography variant="body2" align="center">
                {label ?? null}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          {volunteerGrid.slice(2, 6).map(({ image, label, alt }) => (
            <Grid item key={alt}>
              <Box sx={{ display: 'inline-block', borderRadius: '1px', overflow: 'hidden', margin: '20px' }}>
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