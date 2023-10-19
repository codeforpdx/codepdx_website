// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Custom Imports
import projectsList from '';

const ProjectsBrief = () => {
  return (
    <Box as="section">
      <Typography variant="h2">Our Projects</Typography>
      {projectsList.map(({ title, description, logo }) => (
        <Card key={title}>
          <Grid container>
            <Grid item>
              <Typography variant="body1">{title}</Typography>
              {logo}
            </Grid>
            <Grid item>
              <Typography variant="body2">{description}</Typography>
            </Grid>
            <Button>Learn More</Button>
          </Grid>
        </Card>
      ))}
    </Box>
  );
};

export default ProjectsBrief;
