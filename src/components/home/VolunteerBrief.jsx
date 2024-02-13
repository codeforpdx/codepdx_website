// React Router Imports
import { Link } from 'react-router-dom';
// Material UI Imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Material UI Icons Imports
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

const volunteerGrid = [
  {
    icon: <TerminalOutlinedIcon fontSize="large" />,
    label: 'Developers',
    alt: 'Laptop with code'
  },
  {
    icon: <StorageRoundedIcon fontSize="large" />,
    label: 'Data Scientists',
    alt: 'Database'
  },
  {
    icon: <DesignServicesOutlinedIcon fontSize="large" />,
    label: 'Designers',
    alt: 'Pen and ruler'
  },
  {
    icon: <GroupsOutlinedIcon fontSize="large" />,
    label: 'Project Managers',
    alt: 'People in a line'
  },
  {
    icon: <QueryStatsOutlinedIcon fontSize="large" />,
    label: 'Product Managers',
    alt: 'Pie chart'
  },
  {
    icon: <HandshakeOutlinedIcon fontSize="large" />,
    label: 'Social Workers',
    alt: 'Handshake'
  },
  {
    icon: <VolunteerActivismOutlinedIcon fontSize="large" />,
    label: 'Community Organizers',
    alt: 'Hand holding heart'
  },
  {
    icon: <PersonOutlinedIcon fontSize="large" />,
    label: 'Anyone!',
    alt: 'User avatar'
  }
];

const VolunteerBrief = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Stack
      as="section"
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        margin: { xs: '50px 0 100px 0', md: '50px 0 150px 0' }
      }}
    >
      <Typography variant="h3" component="h2" sx={{ mb: '40px' }}>
        Volunteer With Us
      </Typography>
      <Card
        component="section"
        sx={{
          p: { xs: 2, sm: 4 },
          backgroundColor: 'rgba(217, 217, 217, 0.4)',
          borderRadius: '30px'
        }}
      >
        <Typography variant="h6" component="article" sx={{ px: { xs: 0, md: '1rem' }, mb: '1em' }}>
          Volunteering is all about making a difference and having fun while doing it. You
          don&apos;t need to worry about being the perfect fit - just bring your passion and
          you&apos;re good to go! We welcome all kinds. Whether you&apos;re a seasoned pro, just
          starting out, or looking to learn something new, there&apos;s a place for you here.
        </Typography>
        <Typography variant="h6" component="article" sx={{ px: { xs: 0, md: '1rem' }, mb: '1em' }}>
          Let&apos;s make a positive impact together! Contribute what you can, when you can, and
          know that your efforts are appreciated.
        </Typography>
        <Grid
          container
          rowSpacing={3}
          sx={{
            pt: 3
          }}
        >
          {volunteerGrid.map(({ icon, label, alt }) => (
            <Grid item xs={6} sm={3} key={alt}>
              {icon ?? null}
              <Typography variant="body2">{label ?? null}</Typography>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          sx={{
            mt: { xs: '2em', md: '2em' },
            mb: { xs: '1em', md: 0 }
          }}
          onClick={scrollToTop}
        >
          <Link
            to="/volunteer"
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
            aria-label="Volunteer for CODE PDX"
          >
            Volunteer
          </Link>
        </Button>
      </Card>
    </Stack>
  );
};

export default VolunteerBrief;
