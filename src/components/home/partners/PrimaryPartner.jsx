import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const sponsorValues = {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  height: '50%'
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
          height: '400px',
          mb: '100px'
        }}
      >
        <Box sx={sponsorValues}>
          <Typography>blah blah</Typography>
          <Typography>blah blah</Typography>
        </Box>
        <Box sx={sponsorValues}>
          <Typography>blah blah</Typography>
          <Typography>blah blah</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default PrimaryPartner;
