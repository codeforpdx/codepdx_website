// Material UI Imports
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const leftSidePaperStyles = {
  elevation: 3,
  sx: {
    mr: '30%',
    mb: '40px',
    borderRadius: '20px',
    background: 'rgba(217, 217, 217, 0.4)'
  }
};

const Events = () => {
  return (
    <Container maxWidth={false} as="section" id="events">
      <Grid pb={'40px'} container spacing={3} alignItems={'center'}>
        <Grid item xs={12} md={6}>
          <Typography component="h2" pb={'40px'} variant="h3" align="center" gutterBottom>
            Upcoming Events
          </Typography>
          <Paper {...leftSidePaperStyles}>
            <Typography p={2}>
              CODE PDX meets up in-person twice a month at GRAYBOX in Portland. Once for a project
              demo night and onboarding event and again for in person work session. We also
              occasionally do non working social meetups. Event times and details can be found on
              the calendar.
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              ml: '20%',
              mb: '40px',
              mr: '10%',
              borderRadius: '20px',
              background: 'rgba(217, 217, 217, 0.4)'
            }}
          >
            <Typography p={2}>
              Individual projects often meet online weekly with schedules being determined per
              group. Additionally there is a biweekly in person work session once a month.
            </Typography>
          </Paper>
          <Paper {...leftSidePaperStyles}></Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" align="center">
            CODE PDX Event Calendar
          </Typography>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=ae96d1ee5deb4350a31a490321125fd21a0845e9ee921581ce27b925d5d707c5%40group.calendar.google.com&ctz=America%2FLos_Angeles&showTitle=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&src=YWU5NmQxZWU1ZGViNDM1MGEzMWE0OTAzMjExMjVmZDIxYTA4NDVlOWVlOTIxNTgxY2UyN2I5MjVkNWQ3MDdjNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23A79B8E&color=%230B8043"
            width="100%"
            height="550px"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Events;
