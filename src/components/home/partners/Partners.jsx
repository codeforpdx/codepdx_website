import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryPartner from './PrimaryPartner';
import SecondaryPartner from './SecondaryPartner';
import CallToAction from './CallToAction';

const Partners = () => {
  return (
    <>
      <Box>
        <Typography
          component={'h2'}
          variant="h3"
          padding={{ xs: '50px 0 100px 0', md: '50px 50px 150px 50px' }}
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
export default Partners;
