// Material UI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// Other Library Imports
import { PropTypes } from 'prop-types';
// Component Imports
import { secondaryPartnerList } from './secondaryPartnerList';

// Rename useTheme due to namespace clash
import { useTheme as useEmotionTheme } from '@emotion/react';

const secondaryPartnerProps = {
  index: PropTypes.number.isRequired,
  bulletedList: PropTypes.array,
  company: PropTypes.string.isRequired,
  partnerLogo: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  testimonialTwo: PropTypes.string,
  testimonialAuthor: PropTypes.string,
  testimonialAuthorTwo: PropTypes.string,
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
  bulletedList,
  company,
  partnerLogo,
  testimonial,
  testimonialTwo,
  testimonialAuthor,
  testimonialAuthorTwo,
  website
}) => {
  const theme = useEmotionTheme();
  const darkModeStyles = {
    backgroundImage:
      theme.palette.mode === 'dark' && company === 'CETI'
        ? 'url(/assets/partnerLogos/backgroundBlobs/blob3.webp)'
        : null,
    backgroundRepeat: theme.palette.mode === 'dark' ? 'no-repeat' : null,
    backgroundPosition: theme.palette.mode === 'dark' ? 'center' : null,
    backgroundSize: theme.palette.mode === 'dark' ? '360px 210px' : null
  };
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
        background:
          theme.palette.mode === 'dark' ? `${theme.palette.primary.cardFill}` : gradientStyle,
        borderRadius: '30px',
        minHeight: '450px',
        marginBottom: '100px',
        flexDirection: 'row'
      }}
      key={company}
    >
      <Grid item md={6} {...partnerGridStyle} order={logoOrder}>
        <Container
          sx={{
            ...darkModeStyles,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 210,
            width: 360
          }}
        >
          <a href={website} target="_blank" rel="noopener noreferrer">
            <Box
              component={'img'}
              alt={`${company} logo`}
              aria-label={`${company} logo`}
              src={partnerLogo}
              width={'250px'}
            ></Box>
          </a>
        </Container>
      </Grid>
      <Grid item pl={'6%'} {...partnerGridStyle} order={contentOrder}>
        <Typography variant="body1" p={'5% 15% 3% 0'}>
          {testimonial}
        </Typography>
        {bulletedList &&
          bulletedList.length > 0 &&
          bulletedList.map((listItem, itemIndex) => (
            <ListItem sx={{ display: 'list-item' }} key={itemIndex} variant="body2">
              {listItem}
            </ListItem>
          ))}
        <Typography variant="caption" sx={{ fontWeight: 'bold' }} p={'0 0 5% 0'}>
          {testimonialAuthor}
        </Typography>
        {testimonialTwo ? (
          <Typography variant="body1" display={'flex'} p={'3% 15% 3% 0'}>
            {testimonialTwo}
          </Typography>
        ) : null}
        {testimonialAuthorTwo ? (
          <Typography variant="caption" sx={{ fontWeight: 'bold' }} pb={'10%'}>
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
  bulletedList,
  mobilePartnerLogo,
  testimonial,
  testimonialTwo,
  testimonialAuthor,
  testimonialAuthorTwo,
  website
}) => {
  const theme = useEmotionTheme();
  const darkModeStyles = {
    backgroundImage:
      theme.palette.mode === 'dark' && company === 'CETI'
        ? 'url(/assets/partnerLogos/backgroundBlobs/mobileBlob.webp)'
        : null,
    backgroundRepeat: theme.palette.mode === 'dark' ? 'no-repeat' : null,
    backgroundPosition: theme.palette.mode === 'dark' ? 'center' : null,
    backgroundSize: theme.palette.mode === 'dark' ? '120% 90px' : null
  };
  return (
    <Grid
      container
      sx={{
        background:
          theme.palette.mode === 'dark'
            ? `${theme.palette.primary.cardFill}`
            : 'linear-gradient(180deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)',
        borderRadius: '30px',
        minHeight: 'auto',
        marginBottom: '15%',
        overflow: 'hidden'
      }}
      key={company}
    >
      <Grid item {...partnerGridStyle} pt={theme.palette.mode === 'dark' && '0px'}>
        <Container
          sx={{
            ...darkModeStyles,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 120,
            width: '100%',
            mt: theme.palette.mode === 'dark' && company === 'CETI' ? '-15px' : null
          }}
        >
          <a href={website} target="_blank" rel="noopener noreferrer">
            <Box
              component={'img'}
              alt={`${company} logo`}
              aria-label={`${company} logo`}
              src={mobilePartnerLogo}
              width={'100px'}
            ></Box>
          </a>
        </Container>
      </Grid>
      <Grid item {...partnerGridStyle}>
        <Typography variant="body1" p={'5% 5% 5% 5%'}>
          {testimonial}
        </Typography>
        {bulletedList &&
          bulletedList.length > 0 &&
          bulletedList.map((listItem, itemIndex) => (
            <ListItem sx={{ display: 'list-item' }} key={itemIndex} variant="body2">
              {listItem}
            </ListItem>
          ))}
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
