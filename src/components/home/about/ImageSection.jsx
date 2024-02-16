// React Imports
import { useState, useEffect } from 'react';
// Material UI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// Component Imports
import { imageList } from './imageList';

const shuffleImageList = (array) => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

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
  const [imagesToDisplay, setImagesToDisplay] = useState([]);

  useEffect(() => {
    const remainingImages = imageList.slice(2);
    const shuffledImages = shuffleImageList([...remainingImages]);
    const selectedImages = shuffledImages.slice(0, 3);
    setImagesToDisplay(selectedImages);
  }, []);

  return (
    <Grid container spacing={4} sx={{ justifyContent: 'center', paddingTop: '20px' }}>
      {imagesToDisplay.map(({ image, alt }) => (
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
