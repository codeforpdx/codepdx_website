import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { secondaryPartnerList } from './secondaryPartnerList';

const partnerGridStyle = {
  xs: 6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
};

const displaySecondaryPartners = ({
  index,
  company,
  testimonial,
  testimonialName,
  partnerLogo,
  website
}) => {
  const gradientStyle =
    index % 2 === 0
      ? 'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
      : 'linear-gradient(270deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';

  return (
    <Grid
      sx={{
        background: gradientStyle,
        borderRadius: '40px',
        minHeight: '500px',
        marginBottom: '150px'
      }}
      container
      key={company}
    >
      <Grid item {...partnerGridStyle}>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Box
            component={'img'}
            alt={`${company} logo`}
            aria-label={`${partnerLogo} logo`}
            src={partnerLogo}
            mb={'80px'}
            width={'250px'}
          ></Box>
        </a>
      </Grid>
      <Grid item {...partnerGridStyle}>
        <Typography variant="body1" display={'flex'} p={'0 15% 3% 0'}>
          {testimonial}
        </Typography>
        <Typography>{testimonialName}</Typography>
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
