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
    logo: { image: '/assets/logoPlaceholder.svg', alt: 'RecordSponge logo' },
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
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h2">Our Projects</Typography>
      {projectsGrid.map(({ title, description, status, logo, links, techStack }) => (
        <Card
          key={title}
          sx={{
            mx: 10,
            p: 5,
            background: 'linear-gradient(to bottom, white, lightgrey)',
            borderRadius: '25px'
          }}
        >
          <Grid container rowSpacing={6}>
            <Grid item xs={6}>
              <img src={logo.image} alt={logo.alt ?? null} />
              {/* {links ?? null} */}
              <Stack direction="row" spacing={1}>
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
            <Grid item xs={6}>
              <Stack direction="row" spacing={5} sx={{ alignItems: 'center' }}>
                <Typography variant="h3">{title ?? null}</Typography>
                <Chip label={status ?? null} />
              </Stack>
              <br />
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                Overview
              </Typography>
              <Typography variant="body2">{description ?? null}</Typography>
              <br />
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                Technology Used
              </Typography>
              <Typography variant="body2">{techStack ?? null}</Typography>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
};

export default ProjectsBrief;
