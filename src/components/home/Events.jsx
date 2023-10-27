import { Container, Grid, Typography, Paper, Box } from '@mui/material';

const paperStyle = {
  mb: '40px',
  borderRadius: '40px'
};

const Events = () => {
  return (
    <Container maxWidth={false}>
      <Grid pb={'40px'} container spacing={3} alignItems={'center'}>
        {/* box for text */}
        <Grid item xs={12} md={6}>
          {/* <Grid item xs={12} md={6}>
            Upcoming Events
          </Grid> */}
          <Typography pb={'40px'} variant="h4" align="center" gutterBottom>
            Upcoming Events
          </Typography>
          <Paper elevation={3} sx={{ mr: '20%', mb: '40px', borderRadius: '40px' }}>
            <Box p={2}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab consequuntur, officiis
                quis quasi voluptatem obcaecati ut reiciendis corporis. Doloremque laboriosam esse
                ea dolore iusto. A cum veritatis ex sequi soluta?.
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{ ml: '20%', mb: '40px', borderRadius: '40px' }}>
            <Box p={2}>
              <Typography>
                blah blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, et eius. Repudiandae quidem cum harum fugiat. Hic, molestias obcaecati
                officiis minima atque laboriosam expedita dolorem, maiores voluptatum repellendus
                repellat pariatur.
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{ mr: '20%', mb: '40px', borderRadius: '40px' }}>
            <Box p={2}>
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea delectus error expedita
                voluptates? Commodi nam proasdasdasdasddasd asd asvident velit quidem nostrum !
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero hic a
                voluptate ratione perferendis numquam quis eius laboriosam fugiat! Laboriosam velit
                magni tenetur pariatur blanditiis soluta sapiente ratione dolorum.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        {/* box for calendar */}
        <Grid item xs={12} md={6}>
          {/* will be google calendar */}
          <Box mt={'40px'} height={'700px'} width={'700px'} bgcolor={'purple'}></Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Events;
