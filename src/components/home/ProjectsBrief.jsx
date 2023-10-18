// Material UI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Other Library Imports
import { FaDiscord, FaEarthAmericas, FaGithub } from 'react-icons/fa6';

const projectsGrid = [
  {
    title: 'RecordSponge',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repellat saepe vel unde animi nesciunt suscipit iure quas, delectus possimus officiis voluptatum provident voluptates dolores deserunt nemo cum. Quaerat, cupiditate ad eius vel voluptatem sapiente iure sunt magni alias repellat?',
    status: 'Live',
    logo: '',
    links: <FaGithub />,
    techStack: 'Built with SOLID, React, Vite, JSDocs, MUI, NPM, ES Lint'
  },
  {
    title: 'PASS',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repellat saepe vel unde animi nesciunt suscipit iure quas, delectus possimus officiis voluptatum provident voluptates dolores deserunt nemo cum. Quaerat, cupiditate ad eius vel voluptatem sapiente iure sunt magni alias repellat?',
    status: 'In Development',
    logo: '',
    links: <FaEarthAmericas />,
    techStack: 'Built with SOLID, React, Vite, JSDocs, MUI, NPM, ES Lint'
  }
];

const ProjectsBrief = (e) => {
  const handleLinksClick = () => {
    console.log(`${e} CLICKED!`);
  };
  return (
    <Box
      as="section"
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography variant="h2">Our Projects</Typography>
      <br />
      <Card sx={{ m: 10, p: 1, backgroundColor: 'azure' }}>
        <Grid container>
          {projectsGrid.map(({ title, description, status, logo, links, techStack }) => (
            <Grid item key={title}>
              <Typography variant="h3">{title ?? null}</Typography>
              <Chip label={status} />
              <Typography variant="body2">{description ?? null}</Typography>
              {logo ?? null}
              <Typography variant="body2">{techStack ?? null}</Typography>
              {/* {links ?? null} */}
              <Stack>
                <IconButton size="large" onClick={handleLinksClick}>
                  <FaGithub />
                </IconButton>
                <IconButton size="large" onClick={handleLinksClick}>
                  <FaDiscord />
                </IconButton>
                <IconButton size="large" onClick={handleLinksClick}>
                  <FaEarthAmericas />
                </IconButton>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
};

export default ProjectsBrief;
