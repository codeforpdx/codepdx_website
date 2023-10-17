// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Other Library Imports
import {
  FaChartPie,
  FaDatabase,
  FaHandHoldingHeart,
  FaHandshakeSimple,
  FaLaptopCode,
  FaPenRuler,
  FaPeopleLine,
  FaUser
} from 'react-icons/fa6';

// react-icons source
// https://react-icons.github.io/react-icons/icons?name=fa6

const volunteerGrid = [
  {
    icon: <FaLaptopCode size={45} />,
    label: 'Developers',
    alt: 'Laptop with code'
  },
  {
    icon: <FaDatabase size={45} />,
    label: 'Data Scientists',
    alt: 'Database'
  },
  {
    icon: <FaPenRuler size={45} />,
    label: 'Designers',
    alt: 'Pen and ruler'
  },
  {
    icon: <FaPeopleLine size={45} />,
    label: 'Project Managers',
    alt: 'People in a line'
  },
  {
    icon: <FaChartPie size={45} />,
    label: 'Product Managers',
    alt: 'Pie chart'
  },
  {
    icon: <FaHandshakeSimple size={45} />,
    label: 'Social Workers',
    alt: 'Handshake'
  },
  {
    icon: <FaHandHoldingHeart size={45} />,
    label: 'Community Organizers',
    alt: 'Hand holding heart'
  },
  {
    icon: <FaUser size={45} />,
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
        width: '100vw',
        my: '40px'
      }}
    >
      <Typography variant="h3" component="h2">
        Volunteer with Us
      </Typography>
      <Card
        sx={{
          py: 5,
          my: 5,
          backgroundColor: 'lightgrey',
          borderRadius: '10px'
        }}
      >
        <Typography variant="h6" component="h3">
          Use your skills for the greater good or build your resume!
        </Typography>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 0 }} sx={{ margin: 0 }}>
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
