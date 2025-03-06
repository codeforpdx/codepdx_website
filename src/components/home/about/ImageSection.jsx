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

  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      spacing={4}
      sx={{
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: '10px'
      }}
    >
      {imageList.slice(0, 2).map(({ image, alt }) => (
        <Grid item key={alt}>
          <Box
            component="img"
            src={image}
            alt={alt}
            style={{
              width: isMediumScreen ? '125px' : '200px',
              height: isMediumScreen ? '125px' : 'auto',
              borderRadius: '10px'
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const BottomImages = ({ shuffledImages }) => {
  const theme = useTheme();

  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const heights = ['206px', '274px', '206px'];
  return (
    <Grid
      container
      spacing={4}
      sx={{ justifyContent: 'center', paddingTop: '20px' }}
    >
      {shuffledImages.slice(0, 3).map(({ image, alt }, index) => (
        <Grid item key={alt}>
          <Box
            component="img"
            src={image}
            alt={alt}
            style={{
              width: isMediumScreen ? '125px' : '200px',
              height: isMediumScreen ? '125px' : heights[index],
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

const ImageSection = () => {
  // Shuffle array, first two images will be shown in TopImages
  const shuffledImages = imageList.slice(2).sort(() => 0.5 - Math.random());
  return (
    <Stack>
      <TopImages />
      <BottomImages shuffledImages={shuffledImages} />
    </Stack>
  )
};

export default ImageSection;
