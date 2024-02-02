// Material UI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
  testimonialAuthorTwo: PropTypes.string,
  testimonialAuthor: PropTypes.string,
  partnerLogo: PropTypes.string.isRequired,
  mobilePartnerLogo: PropTypes.string.isRequired,
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
        minHeight: '450px',
        marginBottom: '100px',
        flexDirection: 'row'
      }}
      key={company}
    >
      <Grid item {...partnerGridStyle} md={5} order={logoOrder}>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Box
            component={'img'}
            alt={`${company} logo`}
            aria-label={`${company} logo`}
            src={partnerLogo}
            width={'250px'}
          ></Box>
        </a>
      </Grid>
      <Grid item {...partnerGridStyle} md={7} order={contentOrder}>
        <Typography variant="body1" p={'5% 10% 3% 10%'}>
          {testimonial}
        </Typography>
        {testimonialAuthor && (
          <Typography variant="caption" sx={{ fontWeight: 'bold' }} p={'0 0 0 0'}>
            {testimonialAuthor}
          </Typography>
        )}
        {testimonialTwo && (
          <Typography variant="body1" display={'flex'} p={'5% 10% 3% 10%'}>
            {testimonialTwo}
          </Typography>
        )}
        {testimonialAuthorTwo && (
          <Typography variant="caption" sx={{ fontWeight: 'bold' }} pb={'10%'}>
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
  mobilePartnerLogo,
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
            src={mobilePartnerLogo}
            width={'100px'}
          ></Box>
        </a>
      </Grid>
      <Grid item {...partnerGridStyle}>
        <Typography variant="body1" p={'5% 5% 5% 5%'}>
          {testimonial}
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 'bold' }} p={'0 5% 8% 5%'}>
          {testimonialAuthor}
        </Typography>
        {testimonialTwo ? (
          <Typography variant="body1" display={'flex'} p={'5% 5% 5% 5%'}>
            {testimonialTwo}
          </Typography>
        ) : null}
        {testimonialAuthorTwo ? (
          <Typography variant="caption" sx={{ fontWeight: 'bold' }} p={'0 5% 10% 5%'}>
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
      {secondaryPartnerList.map((partner, index) =>
        isSmallScreen ? (
          <SmallScreenComponent key={partner.company} index={index} {...partner} />
        ) : (
          <LargeScreenComponent key={partner.company} index={index} {...partner} />
        )
      )}
    </Container>
  );
};

export default SecondaryPartners;
