import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { secondaryPartnerList } from './secondaryPartnerList';
import { PropTypes } from 'prop-types';

const secondaryPartnerProps = {
  index: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  testimonialTwo: PropTypes.string,
  testimonialAuthorTwo: PropTypes.string,
  testimonialAuthor: PropTypes.string.isRequired,
  partnerLogo: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};

const partnerGridStyle = {
  xs: 12,
  md: 6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  pt: '20px'
};

const LargeScreenComponent = ({
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
        borderRadius: '30px',
        minHeight: '500px',
        marginBottom: '100px',
        flexDirection: 'row'
      }}
      key={company}
    >
      <Grid item md={6} {...partnerGridStyle} order={logoOrder}>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Box
            component={'img'}
            alt={`${company} logo`}
            aria-label={`${company} logo`}
            src={partnerLogo}
            mb={'150px'}
            width={'250px'}
          ></Box>
        </a>
      </Grid>
      <Grid item pl={'6%'} {...partnerGridStyle} order={contentOrder}>
        <Typography variant="body1" p={'5% 15% 3% 0'}>
          {testimonial}
        </Typography>
        <Typography variant="caption" p={'15px 0 5% 0'}>
          {testimonialAuthor}
        </Typography>
        {testimonialTwo ? (
          <Typography variant="body1" display={'flex'} p={'40px 15% 15% 0'}>
            {testimonialTwo}
          </Typography>
        ) : null}
        {testimonialAuthorTwo ? (
          <Typography variant="caption" pb={'5%'}>
            {testimonialAuthorTwo}
          </Typography>
        ) : null}
      </Grid>
    </Grid>
  );
};

LargeScreenComponent.propTypes = secondaryPartnerProps;

const SmallScreenComponent = ({
  company,
  testimonial,
  testimonialTwo,
  testimonialAuthorTwo,
  testimonialAuthor,
  partnerLogo,
  website
}) => {
  return (
    <Grid
      container
      sx={{
        background:
          'linear-gradient(180deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)',
        borderRadius: '30px',
        minHeight: 'auto',
        marginBottom: '15%'
      }}
      key={company}
    >
      <Grid item {...partnerGridStyle}>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Box
            component={'img'}
            alt={`${company} logo`}
            aria-label={`${company} logo`}
            src={partnerLogo}
            width={'100px'}
          ></Box>
        </a>
      </Grid>
      <Grid item {...partnerGridStyle}>
        <Typography variant="body1" p={'5% 5% 5% 5%'}>
          {testimonial}
        </Typography>
        <Typography variant="caption" p={'0 5% 8% 5%'}>
          {testimonialAuthor}
        </Typography>
        {testimonialTwo ? (
          <Typography variant="body1" display={'flex'} p={'5% 5% 5% 5%'}>
            {testimonialTwo}
          </Typography>
        ) : null}
        {testimonialAuthorTwo ? (
          <Typography variant="caption" p={'5% 5% 5% 5%'}>
            {testimonialAuthorTwo}
          </Typography>
        ) : null}
      </Grid>
    </Grid>
  );
};

SmallScreenComponent.propTypes = secondaryPartnerProps;

const SecondaryPartners = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container>
      {secondaryPartnerList.map((partner) =>
        isSmallScreen ? (
          <SmallScreenComponent key={partner.company} {...partner} />
        ) : (
          <LargeScreenComponent key={partner.company} {...partner} />
        )
      )}
    </Container>
  );
};

export default SecondaryPartners;
