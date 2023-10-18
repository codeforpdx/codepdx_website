// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Other Library Imports
import { FaDiscord, FaEarthAmericas, FaGithub } from 'react-icons/fa6';

const projectsGrid = [
  {
    title: 'RecordSponge',
    status: 'Live',
    logo: '',
    links: <FaGithub />,
    techStack: 'Built with SOLID, React, Vite, JSDocs, MUI, NPM, ES Lint'
  },
  {
    title: 'PASS',
    status: 'In Development',
    logo: '',
    links: <FaEarthAmericas />,
    techStack: 'Built with SOLID, React, Vite, JSDocs, MUI, NPM, ES Lint'
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
      <Card sx={{ m: 10, p: 10 }}>
        <Grid container>
          {projectsGrid.map(({ title, status, logo, links, techStack }) => (
            <Grid item key={title}>
              <Typography>{title ?? null}</Typography>
              <Chip label={status} />
              {logo ?? null}
              {links ?? null}
              <Typography variant="body2">{techStack ?? null}</Typography>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
};

export default ProjectsBrief;
