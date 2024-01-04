import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const sponsorValues = [
  {
    title: 'Advocacy',
    description:
      "We amplify your voice and bridge industry and government to drive policies that ensure the growth and success of the region's tech industry."
  },
  {
    title: 'Community',
    description:
      'We bring the regional tech community together through in-person and online events to deepen relationships and build meaningful connections.'
  },
  {
    title: 'Visibility',
    description:
      'We shine a spotlight on the companies and people that power the region’s innovation economy and leverage our platform to promote the local tech sector.'
  },
  {
    title: 'Resources',
    description:
      'We connect our members to resources to help their businesses grow and succeed through public and private sector partnerships.'
  }
];

const displaySponsorValuesInGrid = ({ title, description }) => {
  return (
    <Grid item xs={12} sm={6} key={title}>
      <Box p={'0 6% 10% 6%'}>
        <Typography variant="body1" pb={'6%'}>
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Grid>
  );
};

const PrimaryPartner = () => {
  return (
    <Container
      sx={{
        mb: '100px',
        borderRadius: '40px',
        background:
          'linear-gradient(180deg, rgba(217, 217, 217, 0) 24.86%, rgba(217, 217, 217, 0.4) 70.55%)'
      }}
    >
      <Box
        component="img"
        display={'flex'}
        maxWidth={'100%'}
        m={'auto'}
        alt="Technology Association of Oregon logo"
        src={'/assets/TAOLogo.png'}
      />
      <Typography
        component="h3"
        textAlign={'center'}
        p={{ xs: '50px 0 50px 0', md: '75px 15% 75px 15%' }}
        sx={{ typography: { xs: 'h5', sm: 'h4' } }}
      >
        Empowering businesses and entrepreneurs, the TAO Foundation is creating and uniting a
        world-class innovation economy in Oregon and beyond.
      </Typography>
      <Grid
        sx={{
          height: 'auto',
          pb: '15px'
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {sponsorValues.map(displaySponsorValuesInGrid)}
      </Grid>
    </Container>
  );
};

export default PrimaryPartner;
