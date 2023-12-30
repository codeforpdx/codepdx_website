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

const cardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  m: { md: '0 25px 0 25px' },
  p: { xs: 1, sm: 3 },
  background: 'rgba(217, 217, 217, 0.4)',
  borderRadius: '30px',
  height: { xs: 'auto', sm: '100%' },
  minHeight: { sm: '500px' }
};

const renderProjectBriefCard = ({ title, description, logo }) => (
  <Grid key={title} item xs={12} md={6} lg={4}>
    <Card sx={cardStyle}>
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
        <Button href="/projects" size="large" color="primary">
          <strong>Learn More</strong>
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

const ProjectsBrief = () => (
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

export default ProjectsBrief;
