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

const Steps = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100vw'
      }}
    >
      <Typography variant="h3">Volunteer with Us</Typography>
      <Card
        sx={{
          py: 5,
          mt: 5,
          mb: 5,
          backgroundColor: 'lightgrey'
        }}
      >
        <Typography variant="h6">
          Looking to use your skills for the greater good or build your resume?
        </Typography>
        <>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 0 }} sx={{ margin: 0 }}>
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
        </>
        <Button
          variant="contained"
          aria-label="volunteer"
          color="primary"
          href="mailto:hugh@codeforpdx.org"
          target="_blank"
          rel="noopener"
          sx={{
            my: '1rem',
            width: 1 / 3
          }}
        >
          Volunteer
        </Button>
      </Card>
    </Box>
  );
};

export default Steps;
