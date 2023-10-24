// Material UI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Custom Imports
import projectsList from './projectsList';

const renderProjectLinks = projectsList.map(({ href, icon, ariaLabel }) => {
  <IconButton
    size="large"
    // onClick={handleLinksClick}
    sx={{ fontSize: 40 }}
    color="quinary"
    // href={links.url}
    key={href}
    href={href}
    ariaLabel={ariaLabel}
  >
    {icon}
  </IconButton>;
});

const ProjectBox = (e) => {
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
      {projectsList.map(({ title, description, status, logo, links, techStack }) => (
        <Card
          key={title}
          sx={{
            mx: 10,
            mb: 3,
            p: 5,
            background: 'linear-gradient(to bottom, white, lightgrey)',
            borderRadius: '25px'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                sx={
                  {
                    // p: '25%'
                  }
                }
                image={logo.image ?? null}
                alt={logo.alt ?? null}
              />
              <CardActions>
                <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
                  {/*  */}
                  {renderProjectLinks}
                  {/*  */}
                  {/* <IconButton
                    size="large"
                    onClick={handleLinksClick}
                    sx={{ fontSize: 40 }}
                    color="quinary"
                    // href={links.url}
                  >
                    <FaGithub />
                  </IconButton>
                  <IconButton
                    size="large"
                    onClick={handleLinksClick}
                    sx={{ fontSize: 40 }}
                    color="quinary"
                  >
                    <FaDiscord />
                  </IconButton>
                  <IconButton
                    size="large"
                    onClick={handleLinksClick}
                    sx={{ fontSize: 40 }}
                    color="quinary"
                  >
                    <FaEarthAmericas />
                  </IconButton> */}
                </Stack>
              </CardActions>
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
                  <Chip label={status ?? null} color="quinary" />
                </Stack>
                {/* <br /> */}
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Overview
                </Typography>
                <Typography variant="body2">{description ?? null}</Typography>
                {/* <br /> */}
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Technology Used
                </Typography>
                <Typography variant="body2">Built with {techStack ?? null}</Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
};

export default ProjectBox;
