// Material UI Imports
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Custom Imports
import projectsList from './projectsList';

const ProjectBox = () => {
  const handleLinksClick = () => {
    // Add logic here
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
      {projectsList
        .slice(0, 2)
        .map(({ title, backgroundStyle, description, status, logo, links, techStack }) => (
          <Box
            key={title}
            sx={{
              mx: 10,
              mb: 3,
              p: 5,
              background: backgroundStyle,
              borderRadius: '25px',
              minWidth: { xs: '95vw', sm: '80vw' },
              maxWidth: { sm: '85vw' }
            }}
          >
            <Grid
              container
              spacing={2}
            >
              <Grid item xs={12} md={6}>
                <CardMedia component="img" image={logo.image ?? null} alt={logo.alt ?? null} />
                <Stack
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  sx={{ pt: 5 }}
                >
                  {links.map(({ href, icon, ariaLabel }) => (
                    <IconButton
                      size="large"
                      onClick={handleLinksClick}
                      color="quinary"
                      key={href}
                      href={href}
                      aria-label={ariaLabel}
                    >
                      <Icon href={href} aria-label={ariaLabel}>
                        {icon}
                      </Icon>
                    </IconButton>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={12} md={6}>
                <CardContent>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant="h3">{title ?? null}</Typography>
                    <Chip label={status.statusText ?? null} color={status.statusColor} />
                  </Stack>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', my: 1 }}>
                    Overview
                  </Typography>
                  <Typography variant="body2">{description ?? null}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', my: 1 }}>
                    Technology Used
                  </Typography>
                  <Typography variant="body2">Built with {techStack ?? null}</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Box>
        ))}
    </Box>
  );
};

export default ProjectBox;
