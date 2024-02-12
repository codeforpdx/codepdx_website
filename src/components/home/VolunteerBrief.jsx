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
      <Card sx={{ p: 4, backgroundColor: 'rgba(217, 217, 217, 0.4)', borderRadius: '30px' }}>
        <Typography variant="h6" component="h3" sx={{ px: '1rem' }}>
          Volunteering is all about making a difference and having fun while doing it. You
          don&apos;t need to worry about being the perfect fit - just bring your willingness to help
          out, and you&apos;re good to go!
          <br />
          <br />
          We welcome people from all walks of life, whether you&apos;re a seasoned pro or just
          starting out. Maybe you&apos;re an engineer with a wealth of knowledge to share, or
          perhaps you&apos;re changing careers and looking to learn something new - either way,
          there&apos;s a place for you here.
          <br />
          <br />
          And don&apos;t stress about time commitments. We get it - life can be busy! Just
          contribute what you can, when you can, and know that your efforts are appreciated. If you
          need to take a break, no problem! We&apos;ll be here whenever you&apos;re ready to jump
          back in.
          <br />
          <br />
          So go ahead, dive into volunteering with enthusiasm, and let&apos;s make a positive impact
          together!
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
            mt: '2rem'
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
