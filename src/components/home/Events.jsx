// Material UI Imports
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
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

const DiscordLink = () => {
  return (
    <Link
      href="https://discord.gg/h2pTvDbJeu"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      Discord
    </Link>
  );
};

const GrayboxLink = () => {
  return (
    <Link
      href="https://graybox.co"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      GrayBox
    </Link>
  );
};

const MeetupLink = () => {
  return (
    <Link
      href="https://www.meetup.com/code-for-pdx/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      Meetup
    </Link>
  );
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
              CODE PDX meets up in-person twice a month at <GrayboxLink /> in Portland. Once for a
              project demo night and onboarding event and again for in person work session at a
              bi-weekly cadence. We also occasionally do non working social meetups. Event times and
              details can be found on the calendar, <MeetupLink /> or in our <DiscordLink /> through
              the events section.
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
              Individual projects meet online weekly in Google meet with schedules being determined
              per group. Meeting Links are found in the events on <DiscordLink />. Additionally
              there is a biweekly in person work session once a month.
            </Typography>
          </Paper>
          <Paper {...leftSidePaperStyles}></Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" align="center">
            CODE PDX Event Calendar
          </Typography>
          <Container
            maxWidth={'100%'}
            sx={{
              overflow: 'hidden',
              mt: '50px'
            }}
          >
            <CardMedia
              component="iframe"
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showNav=1&showTitle=0&showDate=1&showPrint=0&showTabs=0&src=YWU5NmQxZWU1ZGViNDM1MGEzMWE0OTAzMjExMjVmZDIxYTA4NDVlOWVlOTIxNTgxY2UyN2I5MjVkNWQ3MDdjNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23A79B8E&color=%230B8043"
              sx={{
                width: '100%',
                height: { xs: '300px', md: '550px' },
                border: 'none'
              }}
            ></CardMedia>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Events;
