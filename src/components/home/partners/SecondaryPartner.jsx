import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { secondaryPartnerList } from './secondaryPartnerList';

const partnerGridStyle = {
  xs: 12,
  md: 6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  pt: { xs: '40px', md: 0 }
};

const displaySecondaryPartners = ({
  index,
  company,
  testimonial,
  testimonialTwo,
  testimonialAuthorTwo,
  testimonialAuthor,
  partnerLogo,
  website
}) => {
  const gradientStyle =
    index % 2 === 0
      ? 'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
      : 'linear-gradient(270deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';

  const logoOrder = index % 2 === 1 ? 2 : 1;
  const contentOrder = index % 2 === 1 ? 1 : 2;

  return (
    <Grid
      container
      sx={{
        background: gradientStyle,
        borderRadius: '40px',
        minHeight: '500px',
        marginBottom: '100px',
        flexDirection: { xs: 'column', md: 'row' }
      }}
      key={company}
    >
      <Grid item xs={12} md={6} {...partnerGridStyle} order={logoOrder}>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Box
            component={'img'}
            alt={`${company} logo`}
            aria-label={`${partnerLogo} logo`}
            src={partnerLogo}
            mb={{ xs: '25px', md: '150px' }}
            width={{ xs: '100px', md: '250px' }}
          ></Box>
        </a>
      </Grid>
      <Grid item pl={'6%'} {...partnerGridStyle} order={contentOrder}>
        <Typography variant="body1" p={{ xs: '0 0 0 0 ', md: '0 15% 3% 0' }}>
          {testimonial}
        </Typography>
        <Typography pb={'40px'}>{testimonialAuthor}</Typography>
        <Typography variant="body1" display={'flex'} p={'0 15% 3% 0'}>
          {testimonialTwo}
        </Typography>
        <Typography>{testimonialAuthorTwo}</Typography>
      </Grid>
    </Grid>
  );
};

const SecondaryPartner = () => {
  return (
    <Container>
      {secondaryPartnerList.map((partner, index) =>
        displaySecondaryPartners({ ...partner, index })
      )}
    </Container>
  );
};

export default SecondaryPartner;
