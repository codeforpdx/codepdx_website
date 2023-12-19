import Typography from '@mui/material/Typography';
import PrimaryPartner from './PrimaryPartner';
import SecondaryPartners from './SecondaryPartners';
import CallToAction from './CallToAction';
// Other Library Imports
import { PropTypes } from 'prop-types';

const Partners = (handleContactForm) => {
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
      <CallToAction handleContactForm={handleContactForm} />
    </section>
  );
};

Partners.propTypes = {
  handleContactForm: PropTypes.func
};

export default Partners;
