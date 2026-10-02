import { Link } from 'react-router-dom';
// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
// Component Imports
import {boardMemberList} from './boardMemberList';
// Theme
import { useTheme } from '@emotion/react';

const cardStyle = (theme, isSmallScreen) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    m: { md: '0 25px 0 25px' },
    p: { xs: 1, sm: 3 },
    background: `${theme.palette.primary.cardFill}`,
    borderRadius: '30px',
    height: { xs: 'auto', sm: '100%' },
    border:
      theme.palette.mode === 'dark' ? `1px ${theme.palette.primary.boxOutline} solid` : 'none',
    minHeight: { sm: '500px' },
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'url(/assets/partnerLogos/backgroundBlobs/mobileBlob.webp)'
        : null,
    backgroundRepeat: theme.palette.mode === 'dark' ? 'no-repeat' : null,
    backgroundPosition: theme.palette.mode === 'dark' ? 'top' : null,
    backgroundSize:
      theme.palette.mode === 'dark' ? (isSmallScreen ? '120% 260px' : '140% 250px') : null
  };
};

const renderBoardCard = (name, bio, image, imgAlt, theme, isSmallScreen) => {
  return (
    <Grid key={name} item xs={12} md={6} lg={4}>
      <Card sx={cardStyle(theme, isSmallScreen)}>
        <CardContent>
          {image && (
            <CardMedia
              component="img"
              image={`${image}`}
              alt={`${imgAlt}`}
              sx={{
                mx: 'auto',
		my: '10px',
                objectFit: 'contain',
                width: '200px',
                height: 'auto',
		borderRadius: '10px'
              }}
            />
          )}
          {name && (
            <Typography variant="h4" component="h3" textAlign="center" sx={{ pb: { xs: '10px', sm: '20px' }, pt: { xs: '40px', sm: '40px' } }}>
              {name}
            </Typography>
          )}
          {bio && (
            <Typography variant="body1" textAlign="center" sx={{ py: { xs: '.5rem', sm: '1rem' } }}>
              {bio}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

const BoardDisplay = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      as="section"
      sx={{
        m: { xs: '50px 0 100px 0', md: '50px 0 150px 0' }
      }}
    >
      <Typography variant="h3" component="h2" textAlign={'center'} sx={{ mb: '60px' }}>
        Our Board Members
      </Typography>
      <Grid container rowSpacing={3}>
        {boardMemberList.map((el) =>
          renderBoardCard(
            el.name,
            el.bio,
            el.image,
            el.imgAlt,
            theme,
            isSmallScreen
          )
        )}
      </Grid>
    </Box>
  );
};

export default BoardDisplay;
