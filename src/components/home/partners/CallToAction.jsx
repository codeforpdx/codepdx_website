// Material UI Imports
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Other Library Imports
import { PropTypes } from 'prop-types';

const CallToAction = ({ handleContactForm }) => {
  return (
    <Container maxWidth="xl" sx={{ pt: '50px', pb: '100px' }}>
      <Grid
        container
        spacing={1}
        alignItems="center"
        style={{ textAlign: 'center', alignItems: 'center' }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" pb={'2rem'}>
            Empower Change: Become a partner in our civic tech movement.
          </Typography>
          <Typography variant="h4" pb={'2rem'}>
            Have an idea for a civic project in Portland or want to partner with us?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" size="large" onClick={handleContactForm}>
            Contact us
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

CallToAction.propTypes = {
  handleContactForm: PropTypes.func
};

export default CallToAction;
