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

const ProjectsBrief = () => {
  return (
    <Box
      as="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        m: { xs: 1, sm: 4 }
      }}
    >
      <Typography variant="h3" component="h2" sx={{ mb: '40px' }}>
        Our Projects
      </Typography>
      <Grid container rowSpacing={3}>
        {projectsList.map(({ title, description, logo }) => (
          <Grid
            key={title}
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              textAlign: 'justify'
            }}
          >
            <Card
              sx={{
                mx: 2,
                p: 4,
                background: 'lightgrey',
                borderRadius: '10px',
                height: '100%'
              }}
            >
              <CardMedia
                component="img"
                sx={
                  {
                    // p: '25%',
                  }
                }
                image={logo.image ?? null}
                alt={logo.alt ?? null}
              />
              <CardContent>
                <Typography variant="body1" sx={{ py: '1rem' }}>
                  {description ?? null}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" href="/projects" size="large">
                  Learn More
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
