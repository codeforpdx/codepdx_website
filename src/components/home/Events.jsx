// Material UI Imports
import { useTheme } from '@emotion/react';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// PropTypes
import PropTypes from 'prop-types';

const responsiveTextAlign = {
  textAlign: { xs: 'center', md: 'left' }
};

const DiscordLink = ({ theme }) => {
  return (
    <Link
      href="https://discord.gg/h2pTvDbJeu"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', fontWeight: 600, color: `${theme.palette.senary.main}` }}
    >
      Discord
    </Link>
  );
};

const GrayboxLink = ({ theme }) => {
  return (
    <Link
      href="https://graybox.co"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', fontWeight: 600, color: `${theme.palette.senary.main}` }}
    >
      GrayBox
    </Link>
  );
};

const MeetupLink = ({ theme }) => {
  return (
    <Link
      href="https://www.meetup.com/code-for-pdx/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: 'none',
        fontWeight: 600,
        color: `${theme.palette.senary.main}`
      }}
    >
      Meetup
    </Link>
  );
};

const Events = () => {
  const theme = useTheme();
  const leftSidePaperStyles = {
    elevation: 3,
    sx: {
      mr: { xs: '0%', md: '30%' },
      mb: '40px',
      borderRadius: '20px',
      background: theme.palette.primary.cardFill,
      border:
        theme.palette.mode === 'dark' ? `1px ${theme.palette.primary.boxOutline} solid` : 'none',
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
      border:
        theme.palette.mode === 'dark' ? `1px ${theme.palette.primary.boxOutline} solid` : 'none',
      background: theme.palette.primary.cardFill,
      width: { xs: '100%', md: 'auto' }
    }
  };

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
              CODE PDX meets up in-person twice a month at <GrayboxLink theme={theme} /> in
              Portland. Once for a project demo night and onboarding event and again for in person
              work session at a bi-weekly cadence. We also occasionally do non working social
              meetups. Event times and details can be found on the calendar,{' '}
              <MeetupLink theme={theme} /> or in our <DiscordLink theme={theme} /> through the
              events section.
            </Typography>
          </Paper>
          <Paper {...rightSidePaperStyles}>
            <Typography p={2} sx={responsiveTextAlign}>
              Individual projects meet online weekly in Google meet with schedules being determined
              per group. Meeting links are found in the events on <DiscordLink theme={theme} />.
              Additionally there is a biweekly in person work session that all project groups can
              attend.
            </Typography>
          </Paper>
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
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=Y29kZXBkeEBjaXZ0ZWNob3JlZ29uLm9yZw&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                opacity: theme.palette.mode === 'dark' ? 0.85 : null,
                filter: theme.palette.mode === 'dark' ? 'invert(80%) hue-rotate(180deg)' : null,
                transition: theme.palette.mode === 'dark' ? 'opacity 0.2s ease-in-out' : null
              }}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
DiscordLink.propTypes = {
  theme: PropTypes.object.isRequired
};
MeetupLink.propTypes = {
  theme: PropTypes.object.isRequired
};
GrayboxLink.propTypes = {
  theme: PropTypes.object.isRequired
};
export default Events;
