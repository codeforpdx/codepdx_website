import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const leftSidePaperStyles = {
  elevation: 3,
  sx: {
    mr: '20%',
    mb: '40px',
    borderRadius: '30px',
    background: '#d9d9d9'
  }
};

const Events = () => {
  return (
    <Container maxWidth={false}>
      <Grid pb={'40px'} container spacing={3} alignItems={'center'}>
        <Grid item xs={12} md={6}>
          <Typography component="h2" pb={'40px'} variant="h3" align="center" gutterBottom>
            Upcoming Events
          </Typography>
          <Paper {...leftSidePaperStyles}>
            <Typography p={2}>
              CODE PDX meets up in-person once a month for a project demo night and onboarding
              event. We also occasionally do social meetups.
              <br></br>
              <br></br>not sure if we need three boxes. I Need to find more content to put here or
              remove a bubble and maybe toss in a blob since this will be mid page.
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{ ml: '20%', mb: '40px', borderRadius: '30px', background: '#d9d9d9' }}
          >
            <Typography p={2}>
              Individual projects often meet online weekly with schedules being determined per
              group. Additionally there is a biweekly in person work session once a month.
            </Typography>
          </Paper>
          <Paper {...leftSidePaperStyles}>
            <Typography p={2}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea delectus error expedita
              voluptates? Commodi nam proasdasdasdasddasd asd asvident velit quidem nostrum ! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero hic a voluptate
              ratione perferendis numquam quis eius laboriosam fugiat! Laboriosam velit magni
              tenetur pariatur blanditiis soluta sapiente ratione dolorum.
            </Typography>
          </Paper>
        </Grid>
        {/* box for calendar */}
        <Grid item xs={12} md={6}>
          {/* will be google calendar I promise*/}
          <Typography zIndex={1}>I AM GOOBLE CANDLER I MAKE LIFE EASY</Typography>
          <Box height={'400px'} pb={'100%'} mt={'40px'} width={'100%'} bgcolor={'#FD0E89'}>
            <Typography
              variant="h4"
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              zIndex={1}
            >
              PUT THE GOOGLE IN THE SQUARE
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Events;
