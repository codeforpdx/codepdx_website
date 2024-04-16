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
// Component Imports
import projectsList from '../projects/projectsList';
// Theme
import { useTheme } from '@emotion/react';

const cardStyle = (theme) => {
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
    minHeight: { sm: '500px' }
  };
};

const renderProjectBriefCard = (title, description, logo, theme) => (
  <Grid key={title} item xs={12} md={6} lg={4}>
    <Card sx={cardStyle(theme)}>
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
        {projectsList.map((el) => renderProjectBriefCard(el.title, el.description, el.logo, theme))}
      </Grid>
    </Box>
  );
};

export default ProjectsBrief;
