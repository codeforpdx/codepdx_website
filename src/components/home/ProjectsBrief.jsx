// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Custom Imports
import projectsList from '../projects/projectsList';

const cardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  m: { xs: '10px 0 10px 0', md: '0 25px 20px 25px' },
  // mx: { xs: 1, md: 4 },
  p: { xs: '0 0 0 0', sm: 3 },
  background: 'rgba(217, 217, 217, 0.4)',
  borderRadius: '30px',
  height: '100%'
};

const renderProjectBriefCard = ({ title, description, logo }) => {
  return (
    <Grid key={title} item xs={12} md={6} lg={4}>
      <Card sx={cardStyle}>
        <CardContent>
          <CardMedia
            component="img"
            image={logo ?? null}
            alt={`${title} logo`}
            sx={{
              mx: 'auto',
              objectFit: 'contain',
              maxWidth: '90%',
              height: '70px',
              mb: '15%'
            }}
          />
          <Typography variant="body1" sx={{ py: '1rem' }}>
            {description ?? null}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/projects" size="large" color="primary">
            <strong>Learn More</strong>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const ProjectsBrief = () => {
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
        {projectsList.map(renderProjectBriefCard)}
      </Grid>
    </Box>
  );
};

export default ProjectsBrief;
