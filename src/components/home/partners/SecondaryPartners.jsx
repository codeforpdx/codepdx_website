// Material UI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// Other Library Imports
import { PropTypes } from 'prop-types';
// Component Imports
import { secondaryPartnerList } from './secondaryPartnerList';

const secondaryPartnerProps = {
  index: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  testimonialTwo: PropTypes.string,
  testimonialAuthor: PropTypes.string,
  testimonialAuthorTwo: PropTypes.string,
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
  p: { xs: '10px', md: '50px' }
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
        minHeight: '350px',
        marginBottom: '100px'
      }}
      key={company}
    >
      <Grid item md={6} {...partnerGridStyle} order={logoOrder}>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Box component={'img'} alt={`${company} logo`} src={partnerLogo} width={'250px'} />
        </a>
      </Grid>
      <Grid item {...partnerGridStyle} order={contentOrder}>
        <Typography variant="body1" p={'5% 0 3% 0'}>
          {testimonial}
        </Typography>
        <Typography variant="caption" p={'5% 0 3% 0'} sx={{ fontWeight: 'bold' }}>
          {testimonialAuthor}
        </Typography>
        {testimonialTwo && (
          <Typography variant="body1" p={'5% 0 3% 0'}>
            {testimonialTwo}
          </Typography>
        )}
        {testimonialAuthorTwo && (
          <Typography variant="caption" p={'5% 0 3% 0'} sx={{ fontWeight: 'bold' }}>
            {testimonialAuthorTwo}
          </Typography>
        )}
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
          />
        </a>
      </Grid>
      <Grid item {...partnerGridStyle}>
        <Typography variant="body1" p={'0 6% 20px 6%'}>
          {testimonial}
        </Typography>
        <Typography
          variant="caption"
          p={'0 6% 20px 6%'}
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          {testimonialAuthor}
        </Typography>
        {testimonialTwo && (
          <Typography variant="body1" p={'0 6% 20px 6%'}>
            {testimonialTwo}
          </Typography>
        )}
        {testimonialAuthorTwo && (
          <Typography
            variant="caption"
            p={'0 6% 20px 6%'}
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            {testimonialAuthorTwo}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

SmallScreenComponent.propTypes = secondaryPartnerProps;

const SecondaryPartners = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {secondaryPartnerList.map((partner, index) =>
        isSmallScreen ? (
          <SmallScreenComponent key={partner.company} index={index} {...partner} />
        ) : (
          <LargeScreenComponent key={partner.company} index={index} {...partner} />
        )
      )}
    </>
  );
};

export default SecondaryPartners;
