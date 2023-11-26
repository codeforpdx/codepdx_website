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
// Custom Imports
import Hero from '../components/global/Hero/Hero';
import projectsList from '../components/projects/projectsList';

const renderingLinks = (href, icon) => {
  return (
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
  );
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
    xs: 'linear-gradient(0deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
  }
});

const linkStyle = {
  color: '#000',
  textDecoration: 'none',
  display: 'flex',
  '&:hover': {
    color: 'primary.main'
  }
};

const projectGridLogo = (index, title, logo, links) => {
  return (
    <Grid item xs={12} md={6} order={{ xs: 0, md: index % 2 === 0 ? 2 : 1 }}>
      {/* Logo */}
      <CardMedia
        component="img"
        image={logo ?? null}
        alt={`${title} logo`}
        sx={{
          mx: 'auto',
          objectFit: 'contain',
          maxWidth: '90%',
          height: '150px'
        }}
      />
      {/* Logo ends */}
      {/* Links */}
      <Stack direction="row" justifyContent="space-evenly" pt={{ xs: 0, sm: '1rem' }}>
        {links.map(({ href, icon }) => renderingLinks(href, icon))}
      </Stack>
      {/* Links end */}
    </Grid>
  );
};

const projectGridContent = (index, description, title, status, techStack) => {
  return (
    <Grid maxWidth={'xl'} item xs={12} md={6} order={{ xs: 0, md: index % 2 === 0 ? 1 : 2 }}>
      <CardContent>
        {/* Title and status */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: '2rem'
          }}
        >
          <Typography variant="h4" component="h3" sx={{ display: { xs: 'none', sm: 'block' } }}>
            {title ?? null}
          </Typography>
          <Chip
            label={status ?? null}
            color="quaternary"
            variant="outlined"
            sx={{ backgroundColor: '#DEDEDEB2', fontWeight: 'bold' }}
          />
        </Stack>
        {/* Title and status end */}
        <Divider />
        {/* Content */}
        <Typography
          variant="h6"
          component="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            mt: 3,
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          Overview
        </Typography>
        <Typography variant="body1">{description ?? null}</Typography>
        <Typography
          variant="h6"
          component="h4"
          sx={{
            fontWeight: 'bold',
            my: 2,
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          Technology Used
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
          {techStack ?? null}
        </Typography>
        {/* Content ends */}
      </CardContent>
    </Grid>
  );
};

const Projects = () => {
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
          .slice(0, 2)
          .map(({ index, description, title, status, logo, links, techStack }) => (
            <Box key={title} sx={boxStyle(index)}>
              <Grid container spacing={{ xs: 1, md: 10 }}>
                {projectGridLogo(index, title, logo, links)}
                {projectGridContent(index, description, title, status, techStack)}
              </Grid>
            </Box>
          ))}
      </Stack>
    </>
  );
};

export default Projects;
