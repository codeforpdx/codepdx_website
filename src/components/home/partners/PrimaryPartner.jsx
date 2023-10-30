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

const displaySponsorValuesInGrid = (value, index) => {
  return (
    <Grid value xs={6} key={index}>
      <Typography variant="body1" pb={'18%'}>
        <Typography variant="body1" pb={'6%'}>
          {value.title}
        </Typography>
        <Typography variant="body1">{value.description}</Typography>
      </Typography>
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
          'linear-gradient(180deg, rgba(217, 217, 217, 0) 24.86%, rgba(217, 217, 217, 0.4) 104.55%)'
      }}
    >
      <Box
        component="img"
        display={'flex'}
        maxWidth={'100%'}
        m={'0 auto 100px auto'}
        alt="technology association of oregon logo"
        src={'/assets/TAOLogo.png'}
      />
      <Typography
        variant="h4"
        textAlign={'center'}
        padding={{ xs: '0 0 100px 0', md: '15px 15% 100px 15%' }}
      >
        Empowering businesses and entrepreneurs TAO is creating and uniting a world-class innovation
        economy in Oregon and beyond.
      </Typography>
      <Grid
        sx={{
          height: 'auto',
          pb: '50px'
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
