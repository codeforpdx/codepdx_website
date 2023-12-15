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
// Other Library Imports
import { PropTypes } from 'prop-types';

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

const VolunteerBrief = ({ handleContactForm }) => {
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
          Use your skills for the greater good or build your resume!
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
          onClick={() => handleContactForm()}
          sx={{
            mt: '2rem'
          }}
        >
          Volunteer
        </Button>
      </Card>
    </Stack>
  );
};

VolunteerBrief.propTypes = {
  handleContactForm: PropTypes.func
};

export default VolunteerBrief;
