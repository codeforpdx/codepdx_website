import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { secondaryPartnerList } from './secondaryPartnerList';

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

const SmallScreenComponent = ({
  index,
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
        <Typography variant="caption" p={'5% 5% 5% 5%'}>
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

const ResponsivePartnerDisplay = (props) => {
  const theme = useTheme();
  const isSmallAScreen = useMediaQuery(theme.breakpoints.down('md'));

  if (isSmallAScreen) {
    return <SmallScreenComponent {...props}></SmallScreenComponent>;
  } else {
    return <LargeScreenComponent {...props} />;
  }
};
const SecondaryPartners = () => {
  return (
    <Container>
      {secondaryPartnerList.map((partner, index) => (
        <ResponsivePartnerDisplay key={partner.company} {...partner} index={index} />
      ))}
    </Container>
  );
};

export default SecondaryPartners;
