// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Custom Imports
import rose_logo from '/assets/rose_logo.png';
// import projectsList from '../projects/projectsList';
import { FaDiscord, FaEarthAmericas, FaGithub } from 'react-icons/fa6';

const projectsList = [
  {
    title: 'RecordSponge',
    description:
      "RecordSponge is an app that helps community organizations quickly analyze an individual's criminal history to determine if they qualify to have their records expunged.",
    status: 'Live',
    logo: { image: '/assets/logoPlaceholder.svg', alt: 'RecordSponge logo' },
    links: <FaGithub />,
    techStack: 'Built with SOLID, React, Vite, JSDocs, MUI, NPM, ES Lint'
  },
  {
    title: 'PASS',
    description:
      'PASS is an open source digital wallet for providing home insecure individuals a safe place to store documents within their control. PASS additionally assists caseworkers with processing and providing documents needed to complete the housing assistance application process.',
    status: 'In Development',
    logo: { image: '/assets/logoPlaceholder.svg', alt: 'PASS logo' },
    links: <FaEarthAmericas />,
    techStack: 'Built with SOLID, React, Vite, JSDocs, MUI, NPM, ES Lint'
  },
  {
    title: 'CODE PDX',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repellat saepe vel unde animi nesciunt suscipit iure quas, delectus possimus officiis voluptatum provident voluptates dolores deserunt nemo cum. Quaerat, cupiditate ad eius vel voluptatem sapiente iure sunt magni alias repellat?',
    status: '',
    logo: { image: '/assets/logoPlaceholder.svg', alt: 'PASS logo' },
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
        flexDirection: 'column',
        alignItems: 'center',
        pb: 100,
        flexGrow: 1
      }}
    >
      <Typography variant="h3" component="h2">
        Our Projects
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={1} sx={{ margin: 0 }}>
        {projectsList.map(({ title, description, logo }) => (
          <Grid
            key={title}
            item
            xs={4}
            sx={{ alignItems: 'center', textAlign: 'justify', textJustify: 'inter-word' }}
          >
            <Card
              sx={{
                mx: 1,
                p: 4,
                background: 'lightgrey',
                borderRadius: '25px'
              }}
            >
              <Typography variant="h4" component="h3">
                {title ?? null}
              </Typography>
              {logo.image ?? null}
              {logo.alt ?? null}
              <Typography variant="body1">{description ?? null}</Typography>
              <Button
                variant="contained"
                href="/"
                target="_blank"
                rel="noopener"
                sx={{
                  mt: '2rem',
                  width: 1 / 3,
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsBrief;
