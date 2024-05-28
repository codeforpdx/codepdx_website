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
import projectsList from '../projects/projectsList';
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
      theme.palette.mode === 'dark' ? (isSmallScreen ? '120% 110px' : '120% 140px') : null
  };
};

const renderProjectBriefCard = (title, description, logo, theme, isSmallScreen) => (
  <Grid key={title} item xs={12} md={6} lg={4}>
    <Card sx={cardStyle(theme, isSmallScreen)}>
      <CardContent>
        {logo && (
          <CardMedia
            component="img"
            image={logo}
            alt={`${title} logo`}
            sx={{
              mx: 'auto',
              objectFit: 'contain',
              maxWidth: '90%',
              height: '70px'
            }}
          />
        )}
        {description && (
          <Typography variant="body1" textAlign="center" sx={{ py: { xs: '1rem', sm: '2rem' } }}>
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Link
          to={`/projects#${title
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9-_]/g, '')
            .toLowerCase()}`}
        >
          <Button size="large" color="senary">
            <strong>Learn More</strong>
          </Button>
        </Link>
      </CardActions>
    </Card>
  </Grid>
);

const ProjectsBrief = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      as="section"
      sx={{
        m: { xs: '50px 0 100px 0', md: '50px 0 150px 0' }
      }}
    >
      <Typography variant="h3" component="h2" textAlign={'center'} sx={{ mb: '40px' }}>
        Our Projects
      </Typography>
      <Grid container rowSpacing={3}>
        {projectsList.map((el) =>
          renderProjectBriefCard(el.title, el.description, el.logo, theme, isSmallScreen)
        )}
      </Grid>
    </Box>
  );
};

export default ProjectsBrief;
