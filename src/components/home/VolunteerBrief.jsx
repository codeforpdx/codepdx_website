// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Other Library Imports
// import {
//   FaChartPie,
//   FaDatabase,
//   FaHandHoldingHeart,
//   FaHandshakeSimple,
//   FaLaptopCode,
//   FaPenRuler,
//   FaPeopleLine,
//   FaUser
// } from 'react-icons/fa6';

import BarChartIcon from '@mui/icons-material/BarChart';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
// import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity3Icon from '@mui/icons-material/Diversity3';
// import GroupsIcon from '@mui/icons-material/Groups';
// import DrawIcon from '@mui/icons-material/Draw';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LaptopIcon from '@mui/icons-material/Laptop';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import StorageIcon from '@mui/icons-material/Storage';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
// import TerminalIcon from '@mui/icons-material/Terminal';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const volunteerGrid = [
  {
    icon: <LaptopIcon fontSize="large" />,
    label: 'Developers',
    alt: 'Laptop with code'
  },
  {
    icon: <StorageIcon fontSize="large" />,
    label: 'Data Scientists',
    alt: 'Database'
  },
  {
    icon: <DesignServicesIcon fontSize="large" />,
    label: 'Designers',
    alt: 'Pen and ruler'
  },
  {
    icon: <Diversity3Icon fontSize="large" />,
    label: 'Project Managers',
    alt: 'People in a line'
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    label: 'Product Managers',
    alt: 'Pie chart'
  },
  {
    icon: <HandshakeIcon fontSize="large" />,
    label: 'Social Workers',
    alt: 'Handshake'
  },
  {
    icon: <VolunteerActivismIcon fontSize="large" />,
    label: 'Community Organizers',
    alt: 'Hand holding heart'
  },
  {
    icon: <PersonIcon fontSize="large" />,
    label: 'Anyone!',
    alt: 'User avatar'
  }
];

const VolunteerBrief = () => {
  return (
    <Box
      as="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        my: '40px'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ px: '2rem' }}>
        Volunteer With Us
      </Typography>
      <Card
        sx={{
          py: 5,
          my: 5,
          backgroundColor: 'rgba(217, 217, 217, 0.4',
          borderRadius: '10px'
        }}
      >
        <Typography variant="h6" component="h3" sx={{ px: '1rem' }}>
          Use your skills for the greater good or build your resume!
        </Typography>
        <Grid container rowSpacing={5} sx={{ margin: 0 }}>
          {volunteerGrid.map(({ icon, label, alt }) => (
            <Grid item xs={6} sm={3} key={alt}>
              <Typography variant="body2">
                {icon ?? null}
                <br />
                {label ?? null}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          href="mailto:hugh@codeforpdx.org"
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
          Volunteer
        </Button>
      </Card>
    </Box>
  );
};

export default VolunteerBrief;
