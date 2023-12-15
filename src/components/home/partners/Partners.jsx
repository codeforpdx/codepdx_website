// Material UI Imports
import Typography from '@mui/material/Typography';
// Component Imports
import PrimaryPartner from './PrimaryPartner';
import SecondaryPartners from './SecondaryPartners';
import CallToAction from './CallToAction';

const Partners = () => {
  return (
    <section>
      <Typography
        component={'h2'}
        variant={'h3'}
        padding={{ xs: '50px 0 100px 0', md: '50px 50px 150px 50px' }}
        display={'flex'}
        textAlign={'center'}
      >
        Building a better tomorrow with a shared vision. Our mission would not be possible without
        our partners
      </Typography>
      <PrimaryPartner />
      <SecondaryPartners />
      <CallToAction />
    </section>
  );
};
export default Partners;
