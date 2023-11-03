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
  flexDirection: 'column',
  mx: 2,
  p: 4,
  background: 'rgba(217, 217, 217, 0.4)',
  borderRadius: '40px',
  height: '100%'
};

const ProjectsBrief = () => {
  return (
    <Box
      as="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        m: { xs: '50px 0 100px 0', md: '50px 0 150px 0' },
        position: 'relative'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ mb: '40px' }}>
        Our Projects
      </Typography>
      <Grid container rowSpacing={3}>
        {projectsList.map(({ title, description, logo }) => (
          <Grid key={title} item xs={12} md={6} lg={4}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                image={logo ?? null}
                alt={`${title} logo`}
                sx={{
                  p: 1,
                  width: title === 'CODE PDX' ? '125px' : '100%'
                }}
              />
              <CardContent>
                <Typography variant="body1" sx={{ py: '1rem' }}>
                  {description ?? null}
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="/projects" size="large" color="quinary">
                  <strong>Learn More</strong>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsBrief;
