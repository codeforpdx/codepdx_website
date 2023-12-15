import Typography from '@mui/material/Typography';
import PrimaryPartner from './PrimaryPartner';
import SecondaryPartners from './SecondaryPartners';
import CallToAction from './CallToAction';

const Partners = () => {
  return (
    <section>
      <Typography
        component={'h2'}
        padding={{ xs: '25px 0 100px 0', md: '50px 50px 100px 50px' }}
        display={'flex'}
        textAlign={'center'}
        sx={{ typography: { xs: 'h4', sm: 'h3' } }}
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
