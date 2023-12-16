// Material UI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// TODO: find out exact pictures to use
const volunteerGrid = [
  {
    image:
      'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMzI0NzU5Ni9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczNzI1Nzg5MH0.PrIBXmpEeLrVe--JDq6kE2HF-DPuyzaLgfC1tnQ10Eo/img.jpg?width=742&quality=80',
    alt: 'Volunteer image one'
  },
  {
    image:
      'https://www.petmax.ca/cdn/shop/articles/tuqa-nabi-uhnZZUaTIOs-unsplash.jpg?v=1672753494',
    alt: 'Volunteer image two'
  },
  {
    image:
      'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMzI0NzU5Ni9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczNzI1Nzg5MH0.PrIBXmpEeLrVe--JDq6kE2HF-DPuyzaLgfC1tnQ10Eo/img.jpg?width=742&quality=80',
    alt: 'Volunteer image three'
  },

  {
    image:
      'https://media.istockphoto.com/id/1392163011/photo/cute-female-kitten-walking-towards-and-looking-in-the-camera-on-a-pink-background.jpg?s=612x612&w=0&k=20&c=y8qTH_C8CUOM17fVIxnpnTJljzsJaHMgfzGh6AZ2TwU=',
    alt: 'Volunteer image four'
  },
  {
    image:
      'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMzI0NzU5Ni9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczNzI1Nzg5MH0.PrIBXmpEeLrVe--JDq6kE2HF-DPuyzaLgfC1tnQ10Eo/img.jpg?width=742&quality=80',
    alt: 'Volunteer image five'
  }
];

const renderTopImages = ({ image, alt }) => {
  return (
    <Grid item key={alt}>
      <Box
        sx={{
          borderRadius: '1px',
          margin: '20px'
        }}
      >
        <img
          src={`${image}`}
          alt={alt}
          style={{ width: '200px', height: 'auto', borderRadius: '10px' }}
        />
      </Box>
    </Grid>
  );
};

const TopImages = () => {
  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'flex-end' }}>
      {volunteerGrid.slice(0, 2).map(renderTopImages)}
    </Grid>
  );
};

const renderBottomImages = ({ image, alt }) => {
  return (
    <Grid item key={alt}>
      <Box sx={{ borderRadius: '1px', margin: '20px' }}>
        <img src={image} alt={alt} style={{ width: '200px', borderRadius: '10px' }} />
      </Box>
    </Grid>
  );
};

const BottomImages = () => {
  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
      {volunteerGrid.slice(2, 6).map(renderBottomImages)}
    </Grid>
  );
};
const About = () => {
  return (
    <Grid container maxWidth={'xl'} pt={'5%'}>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant="h3" component="h2" pt="40px" textAlign={'center'}>
          Who is CODE PDX?
        </Typography>
        <Typography variant="h5" component="h3" textAlign="center" p={'8% 0 8% 5%'}>
          We are civic-minded residents committed to improving public services in Portland by
          working with local government to utilize open data, improve citizen knowledge, and
          implementing technological solutions. We are driven by our community for our community.
        </Typography>
      </Grid>
      {/* images */}
      <Grid item xs={12} md={7}>
        {/* top */}
        <TopImages />
        {/*  */}
        <BottomImages />
      </Grid>
    </Grid>
  );
};

export default About;
