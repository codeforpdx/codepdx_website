import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const CallToAction = () => {
  return (
    <Container maxWidth="lg" style={{ padding: '6rem 1rem' }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} md={8}>
          <Typography component="h4" variant="h4" pb={'2rem'}>
            Empower Change: Become a partner in our civic tech movement.
          </Typography>
          <Typography component="h4" variant="h4">
            Have an idea for a civic project in Portland or want to partner with us?
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} style={{ textAlign: 'center', alignItems: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="mailto:hugh@codeforpdx.org"
            target="_blank"
            rel="noopener"
          >
            Contact us
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CallToAction;
