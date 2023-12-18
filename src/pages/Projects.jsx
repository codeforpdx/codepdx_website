// React Router Imports
import { Link as ReactRouterLink } from 'react-router-dom';
// Material UI Imports
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
// React Icons Import
import { IconContext } from 'react-icons';
// Custom Imports
import Hero from '../components/global/Hero/Hero';
import projectsList from '../components/projects/projectsList';

const linkStyle = {
  color: '#000',
  textDecoration: 'none',
  display: 'flex',
  '&:hover': {
    color: 'primary.main'
  }
};

const boxStyle = (index) => ({
  mb: { xs: 5, sm: 10 },
  py: 2,
  px: 2,
  borderRadius: '25px',
  background: {
    md:
      index % 2 === 0
        ? 'linear-gradient(270deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
        : 'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)',
    xs: 'linear-gradient(0deg, rgba(217, 217, 217, 0) 18.54%, rgba(217, 217, 217, 0.4) 82.29%)'
  }
});

const projectGridLogo = (index, title, logo, links, isSmallScreen) => {
  const iconSize = isSmallScreen ? '30' : '45';

  return (
    <Grid item xs={12} md={6} order={{ xs: 0, md: index % 2 === 0 ? 2 : 1 }}>
      {logo && (
        <CardMedia
          component="img"
          image={logo}
          alt={title ? `${title} logo` : 'project logo'}
          sx={{
            mx: 'auto',
            objectFit: 'contain',
            maxWidth: '90%',
            height: '150px'
          }}
        />
      )}
      {links && (
        <Stack direction="row" justifyContent="space-evenly" pt={{ xs: 0, sm: '1rem' }}>
          <IconContext.Provider value={{ size: iconSize }}>
            {links.map(({ href, icon }) => (
              <Link
                component={ReactRouterLink}
                key={href}
                to={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={linkStyle}
              >
                {icon}
              </Link>
            ))}
          </IconContext.Provider>
        </Stack>
      )}
    </Grid>
  );
};

const projectGridContent = (index, description, title, status, techStack) => (
  <Grid maxWidth={'xl'} item xs={12} md={6} order={{ xs: 0, md: index % 2 === 0 ? 1 : 2 }}>
    <CardContent>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: '2rem'
        }}
      >
        {title && (
          <Typography variant="h4" component="h3" sx={{ display: { xs: 'none', sm: 'block' } }}>
            {title}
          </Typography>
        )}
        {status && (
          <Chip
            label={status}
            variant="outlined"
            sx={{ backgroundColor: '#DEDEDEB2', fontWeight: 'bold', minWidth: '120px' }}
          />
        )}
      </Stack>

      <Divider />

      {description && (
        <Stack textAlign={{ xs: 'center', sm: 'left' }} my={2} spacing={2}>
          <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
            Overview
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Stack>
      )}
      {techStack && (
        <Stack textAlign={{ xs: 'center', sm: 'left' }} my={2} spacing={2}>
          <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
            Technology Used
          </Typography>
          <Stack
            direction="row"
            justifyContent={{ xs: 'center', sm: 'left' }}
            spacing={{ xs: 1, sm: 2 }}
          >
            {techStack.map((tech) => (
              <Typography
                key={tech}
                variant="body1"
                sx={{
                  backgroundColor: 'primary.main',
                  borderRadius: '25px',
                  paddingX: '10px',
                  color: 'white'
                }}
              >
                {tech}
              </Typography>
            ))}
          </Stack>
        </Stack>
      )}
    </CardContent>
  </Grid>
);

const Projects = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Hero
        pageName={'projects'}
        heroImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/projectsHeroImage.png)`}
        heroText={`Our products blend innovation, quality, and user-centric design to meet today's needs and anticipate tomorrow's challenges`}
      />
      <Stack
        as="section"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          maxWidth: 'xl',
          mx: 'auto'
        }}
      >
        <Typography variant="h2" sx={{ m: 5, textAlign: 'center' }}>
          Our Projects
        </Typography>
        {projectsList
          // .slice(0, 2)
          .map(({ index, description, title, status, logo, links, techStack }) => (
            <Box key={title} sx={boxStyle(index)}>
              <Grid container spacing={{ xs: 1, md: 10 }}>
                {projectGridLogo(index, title, logo, links, isSmallScreen)}
                {projectGridContent(index, description, title, status, techStack)}
              </Grid>
            </Box>
          ))}
      </Stack>
    </>
  );
};

export default Projects;
