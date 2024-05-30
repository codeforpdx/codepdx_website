// Material UI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// Component Imports
import { imageList } from './imageList';

const TopImages = () => (
  <Grid
    container
    spacing={4}
    sx={{ justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '10px' }}
  >
    {imageList.slice(0, 2).map(({ image, alt }) => (
      <Grid item key={alt}>
        <Box
          component="img"
          src={image}
          alt={alt}
          style={{ width: '200px', height: 'auto', borderRadius: '10px' }}
        />
      </Grid>
    ))}
  </Grid>
);

const BottomImages = () => {
  // Shuffle array
  const shuffled = imageList.slice(2).sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 3);

  return (
    <Grid container spacing={4} sx={{ justifyContent: 'center', paddingTop: '20px' }}>
      {selected.map(({ image, alt }) => (
        <Grid item key={alt}>
          <Box
            component="img"
            src={image}
            alt={alt}
            style={{ width: '200px', borderRadius: '10px' }}
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
