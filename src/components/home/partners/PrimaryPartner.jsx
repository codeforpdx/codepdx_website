import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PrimaryPartner = () => {
  return (
    <Container>
      <Box
        component="img"
        display={'flex'}
        maxWidth={'100%'}
        m={'0 auto 100px auto'}
        src={'/assets/TAOLogo.png'}
      />
      <Typography
        component={'h4'}
        variant="h4"
        textAlign={'center'}
        padding={{ sm: '0 0 150px 0', md: '50px 200px 150px 200px' }}
      >
        Empowering businesses and entrepreneurs TAO is creating and uniting a world-class innovation
        economy in Oregon and beyond.
      </Typography>
      <Box
        sx={{
          width: '80%',
          height: '800px',
          display: 'flex',
          margin: 'auto',
          mb: '100px',
          borderRadius: '40px',
          background:
            'linear-gradient(180deg, rgba(217, 217, 217, 0) 24.86%, rgba(217, 217, 217, 0.4) 104.55%)'
        }}
      ></Box>
    </Container>
  );
};

export default PrimaryPartner;
