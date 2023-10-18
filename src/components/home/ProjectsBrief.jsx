// Material UI Imports
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Other Library Imports
// import { FaDiscord, FaGithub, FaHome } from 'react-icons/fa6';

const projectsGrid = [
  {
    title: 'RecordSponge',
    status: 'Live',
    logo: '',
    links: '',
    techStack: ''
  },
  {
    title: 'PASS',
    status: 'In Development',
    logo: '',
    links: '',
    techStack: ''
  }
];

const ProjectsBrief = () => {
  return (
    <Box
      as="section"
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography>Our Projects</Typography>
      <br />
      <Card>
        <Grid container>
          {projectsGrid.map(
            ({
              title,
              status, logo, links, techStack
            }) => (
              <Grid item key={title}>
                <Typography variant="body2">
                  {title ?? null}
                  {status ?? null}
                </Typography>
              </Grid>
            )
          )}
        </Grid>
      </Card>
    </Box>
  );
};

export default ProjectsBrief;
