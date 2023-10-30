import PrimaryPartner from './PrimaryPartner';
import SecondaryPartner from './SecondaryPartner';
import CallToAction from './CallToAction';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Partners = () => {
  return (
    <>
      <Box>
        <Typography
          component={'h2'}
          variant="h3"
          padding={{ sm: '50px 0 150px 0', md: '50px 3rem 150px 3rem' }}
          display={'flex'}
          textAlign={'center'}
        >
          Building a Better Tomorrow. With a shared vision, our mission would not be possible
          without our partners
        </Typography>
      </Box>
      <PrimaryPartner />
      <SecondaryPartner />
      <SecondaryPartner />
      <CallToAction />
    </>
  );
};
console.log('working');
export default Partners;
