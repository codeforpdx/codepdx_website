import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const sponsorValues = {
  display: 'flex',
  height: '50%',
  padding: '5% 4% 50px 5%'
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
        padding={{ xs: '0 0 100px 0', md: '15px 15% 100px 15%' }}
      >
        Empowering businesses and entrepreneurs TAO is creating and uniting a world-class innovation
        economy in Oregon and beyond.
      </Typography>
      <Box
        sx={{
          height: 'auto',
          pb: '100px'
        }}
      >
        <Box sx={sponsorValues}>
          {/* top 2 values */}
          <Typography variant="body1" sx={{ mr: '30%' }}>
            Advocacy
            <br />
            <br />
            We amplify your voice and bridge industry and government to drive policies that ensure
            the growth and success of the region's tech industry.
          </Typography>
          <Typography variant="body1">
            Community
            <br />
            <br />
            We bring the regional tech community together through in-person and online events to
            deepen relationships and build meaningful connections.
          </Typography>
        </Box>
        {/* bottom 2 values */}
        <Box sx={sponsorValues}>
          <Typography variant="body1" sx={{ mr: '22%' }}>
            Visibility
            <br />
            <br />
            We shine a spotlight on the companies and people that power the region’s innovation
            economy and leverage our platform to promote the local tech sector.
          </Typography>
          <Typography variant="body1">
            Resources
            <br />
            <br />
            We connect our members to resources to help their businesses grow and succeed through
            public and private sector partnerships.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default PrimaryPartner;
