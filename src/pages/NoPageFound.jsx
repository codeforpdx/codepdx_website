// React Imports
import { useEffect, useState } from 'react';
// React Router Imports
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
      })
      .catch((error) => console.error(error));
  }, [photoUrl]);

  const isPhotoFound = photoUrl !== null && photoUrl !== undefined;

  const primaryText = isPhotoFound
    ? 'You are lost in internet space!'
    : "We can't find that page even with this spotlight!";

  const buttonText = isPhotoFound ? 'Take me back to earth' : 'Take me back';

  return (
    <Box
      width="100vw"
      height="calc(100vh - 100px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: `${
          photoUrl ? `url(${photoUrl})` : `url(/assets/notfound.webp)`
        } center/cover no-repeat`
      }}
    >
      <Stack
        alignItems="center"
        textAlign="center"
        spacing={4}
        sx={{
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          backgroundColor: 'rgba(17, 25, 40, 0.5)',
          border: '1px solid rgba(236, 236, 236, 0.1)',
          borderRadius: '10px'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h2" color="primary" mb={2}>
            {primaryText}
          </Typography>
          {/* takes to previous page in browser history OR HOME.JSX if no previous browser history */}
          <Button size="large" variant="contained" onClick={() => navigate(-1) || navigate('/')}>
            {buttonText}
          </Button>
        </Container>
        <Typography color="primary">Error 404: Page Not Found</Typography>
      </Stack>
    </Box>
  );
};

export default NoPageFound;
