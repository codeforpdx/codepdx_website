// Material UI Imports
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
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
        <Typography variant="body1" pb={'6%'} sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Grid>
  );
};

const PrimaryPartner = () => {
  const theme = useTheme();
  const isMinMd = useMediaQuery(theme.breakpoints.up('md'));
  const darkModeStyles = {
    backgroundImage:
      theme.palette.mode === 'dark' ? 'url(/assets/partnerLogos/technology-association-of-oregon-logo-500x114.webp)' : null,
    backgroundRepeat: theme.palette.mode === 'dark' ? 'no-repeat' : null,
    backgroundPosition: theme.palette.mode === 'dark' ? 'top' : null,
    backgroundSize: theme.palette.mode === 'dark' ? (isMinMd ? '850px 250px' : '200% 130px') : null
  };
  return (
    <Container
      sx={{
        mb: '100px',
        borderRadius: '30px',
        paddingTop: theme.palette.mode === 'dark' ? '10px' : '0px',
        background:
          theme.palette.mode === 'dark'
            ? `${theme.palette.primary.cardFill}`
            : 'linear-gradient(180deg, rgba(217, 217, 217, 0) 24.86%, rgba(217, 217, 217, 0.4) 70.55%)',
        ...darkModeStyles
      }}
    >
      <a href={"https://www.oregonif.org/"} target="_blank" rel="noopener noreferrer">
        <Box
          component="img"
          display={'flex'}
          maxWidth={'100%'}
          m={'auto'}
          alt="technology association of oregon logo"
          sx={{
            zIndex: 2,
            content: {
              xs: 'url(/assets/partnerLogos/technology-association-of-oregon-logo-366x105.webp)',
              md: 'url(/assets/partnerLogos/technology-association-of-oregon-logo-transparent.webp)'
            }
          }}
        />
      </a>

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
