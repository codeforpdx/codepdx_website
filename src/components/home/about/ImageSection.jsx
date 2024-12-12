// Material UI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
// Component Imports
import { imageList } from './imageList';

const TopImages = () => {
  const theme = useTheme();

  const isMediumSmallScreen = useMediaQuery(theme.breakpoints.down('mds'));
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('es'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lsm'));
  const isTinyScreen = useMediaQuery(theme.breakpoints.down('ti'));

  return (
    <Grid
      container
      spacing={isMediumSmallScreen ? 3 : 4}
      columns={{ ti: 2 }}
      sx={{
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: isMediumSmallScreen ? '' : '10px'
      }}
    >
      {imageList.slice(0, 2).map(({ image, alt }) => (
        <Grid item key={alt}>
          <Box
            component="img"
            src={image}
            alt={alt}
            style={{
              width: isTinyScreen
                ? '50px'
                : isSmallerScreen
                ? '75px'
                : isSmallScreen
                ? '125px'
                : '200px',
              height: isTinyScreen
                ? '50px'
                : isSmallerScreen
                ? '75px'
                : isSmallScreen
                ? '125px'
                : isMediumSmallScreen
                ? '206px'
                : 'auto',
              borderRadius: '10px'
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const BottomImages = () => {
  // Shuffle array
  const shuffled = imageList.slice(2).sort(() => 0.5 - Math.random());

  // Get sub-array of first 3 elements after shuffled
  let selected = shuffled.slice(0, 3);

  const theme = useTheme();

  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('es'));
  const isTinyScreen = useMediaQuery(theme.breakpoints.down('ti'));
  const isMediumSmallScreen = useMediaQuery(theme.breakpoints.down('mds'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lsm'));

  // Bottom images are rechosen when switching btw medium and large
  const heights = ['206px', '274px', '206px'];
  return (
    <Grid
      container
      spacing={{ xs: 3, md: 4 }}
      columns={{ ti: 2, xs: 2, md: 3 }}
      sx={{ justifyContent: 'center', paddingTop: isSmallScreen ? '25px' : '20px' }}
    >
      {selected.map(({ image, alt }, index) => (
        <Grid item key={alt}>
          <Box
            component="img"
            src={image}
            alt={alt}
            style={{
              width: isTinyScreen
                ? '50px'
                : isSmallerScreen
                ? '75px'
                : isSmallScreen
                ? '125px'
                : '200px',
              height: isTinyScreen
                ? '50px'
                : isSmallerScreen
                ? '75px'
                : isSmallScreen
                ? '125px'
                : isMediumSmallScreen
                ? '206px'
                : heights[index],
              borderRadius: '10px',
              objectFit: 'cover',
              objectPosition: 'top'
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const ImageSection = () => (
  <Stack>
    <TopImages />
    <BottomImages />
  </Stack>
);

export default ImageSection;
