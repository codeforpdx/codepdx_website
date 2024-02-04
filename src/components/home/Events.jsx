// Material UI Imports
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const mobileStyle = {
  position: 'relative',
  paddingBottom: '100%', 
  height: 0,
  overflow: 'hidden'
};

const desktopStyle = {
  position: 'relative',
  paddingBottom: '75%', 
  height: 0,
  overflow: 'hidden'
};
const leftSidePaperStyles = {
  elevation: 3,
  sx: {
    mr: { xs: '0%', md: '30%' },
    mb: '40px',
    borderRadius: '20px',
    background: 'rgba(217, 217, 217, 0.4)',
    width: { xs: '100%', md: 'auto' }
  }
};
const rightSidePaperStyles = {
  elevation: 3,
  sx: {
    ml: { xs: '0%', md: '20%' },
    mb: '40px',
    mr: { xs: '0%', md: '10%' },
    borderRadius: '20px',
    background: 'rgba(217, 217, 217, 0.4)',
    width: { xs: '100%', md: 'auto' }
  }
};

const responsiveTextAlign = {
  textAlign: { xs: 'center', md: 'left' }
};

const DiscordLink = () => {
  return (
    <Link
      href="https://discord.gg/h2pTvDbJeu"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', fontWeight: 600 }}
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
      style={{ textDecoration: 'none', fontWeight: 600 }}
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
      style={{ textDecoration: 'none', fontWeight: 600 }}
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
          <Typography
            component="h2"
            pb={'40px'}
            variant="h3"
            gutterBottom
            sx={{
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            Upcoming Events
          </Typography>
          <Paper {...leftSidePaperStyles}>
            <Typography p={2} sx={responsiveTextAlign}>
              CODE PDX meets up in-person twice a month at <GrayboxLink /> in Portland. Once for a
              project demo night and onboarding event and again for in person work session at a
              bi-weekly cadence. We also occasionally do non working social meetups. Event times and
              details can be found on the calendar, <MeetupLink /> or in our <DiscordLink /> through
              the events section.
            </Typography>
          </Paper>
          <Paper {...rightSidePaperStyles}>
            <Typography p={2} sx={responsiveTextAlign}>
              Individual projects meet online weekly in Google meet with schedules being determined
              per group. Meeting links are found in the events on <DiscordLink />. Additionally
              there is a biweekly in person work session that all project groups can attend.
            </Typography>
          </Paper>
          <Paper {...leftSidePaperStyles}></Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 8 
            }}
          >
            CODE PDX Event Calendar
          </Typography>
          <div
            style={{
              position: 'relative',
              paddingBottom: '75%',
              paddingTop: '15%',
              height: 0,
              overflow: 'hidden'
            }}
          >
            <CardMedia
              component="iframe"
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showNav=1&showTitle=0&showDate=1&showPrint=0&showTabs=0&src=YWU5NmQxZWU1ZGViNDM1MGEzMWE0OTAzMjExMjVmZDIxYTA4NDVlOWVlOTIxNTgxY2UyN2I5MjVkNWQ3MDdjNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23A79B8E&color=%230B8043"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Events;

