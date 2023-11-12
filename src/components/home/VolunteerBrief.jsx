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

// import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
// import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
// import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
// import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
// import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
// import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
// import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
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

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  m: { xs: '50px 0 100px 0', md: '50px 0 150px 0' }
};

const cardStyle = {
  // display: 'flex',
  // justifyContent: 'space-between',
  // flexDirection: 'column',
  m: { xs: '10px 0 10px 0', md: '0 25px 20px 25px' },
  p: { xs: '0 0 0 0', sm: 3 },
  // py: 5,
  // my: 5,
  backgroundColor: 'rgba(217, 217, 217, 0.4)',
  borderRadius: '30px'
  // height: '100%'
};

const VolunteerBrief = () => {
  return (
    <Box as="section" sx={boxStyle}>
      <Typography variant="h3" component="h2" sx={{ mb: '40px' }}>
        Volunteer With Us
      </Typography>
      <Card sx={cardStyle}>
        <Typography variant="h6" component="h3" sx={{ px: '1rem' }}>
          Use your skills for the greater good or build your resume!
        </Typography>
        <Box>
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
        </Box>
        <Button
          variant="contained"
          href="mailto:hugh@codeforpdx.org"
          target="_blank"
          rel="noopener"
          sx={{
            mt: '2rem'
          }}
        >
          Volunteer
        </Button>
      </Card>
    </Box>
  );
};

export default VolunteerBrief;
