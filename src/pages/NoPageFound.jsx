// React Imports
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const NoPageFound = () => {
  const navigate = useNavigate();
  const [photoUrl, setPhotoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((response) => response.json())
      .then((data) => {
        // Check if the URL is a video
        const urlIsVideo = data.media_type === 'video';
        // If it isn't a video, set the photoUrl
        if (!urlIsVideo) {
          setPhotoUrl(data.url);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const isPhotoFound = photoUrl !== null && photoUrl !== undefined;

  const primaryText = isPhotoFound
    ? 'You are lost in space!'
    : "We can't find that page even with this spotlight!";

  const buttonText = isPhotoFound ? 'Take me back to earth' : 'Take me back';

  let backgroundStyle;

  if (isLoading) {
    backgroundStyle = 'rgba(0, 0, 0, 0.87)';
  } else if (photoUrl) {
    backgroundStyle = `url(${photoUrl}) center/cover no-repeat`;
  } else {
    backgroundStyle = 'url(/assets/searchlight-in-night-sky.webp) center/cover no-repeat';
  }

  return (
    <Box
      width="100vw"
      height="calc(100vh - 100px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: backgroundStyle
      }}
    >
      <Stack
        alignItems="center"
        textAlign="center"
        spacing={4}
        p="25px"
        sx={{
          backdropFilter: 'blur(5px) saturate(180%)',
          WebkitBackdropFilter: 'blur(5px) saturate(180%)',
          backgroundColor: 'rgba(17, 25, 40, 0.5)',
          border: '1px solid rgba(236, 236, 236, 0.1)',
          borderRadius: '30px'
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="body1"
            component="h1"
            color="secondary"
            fontSize="24px"
            sx={{ textShadow: '0px 4px 4px #0000004D' }}
          >
            Error 404:
            <br />
            Page Not Found
          </Typography>
          <Typography
            variant="h4"
            component="p"
            color="secondary"
            my="2rem"
            sx={{ textShadow: '0px 4px 4px #0000004D' }}
          >
            {primaryText}
          </Typography>
          {/* takes to previous page in browser history OR HOME.JSX if no previous browser history */}
          <Button size="large" variant="contained" onClick={() => navigate(-1) || navigate('/')}>
            {buttonText}
          </Button>
        </Container>
      </Stack>
    </Box>
  );
};

export default NoPageFound;
