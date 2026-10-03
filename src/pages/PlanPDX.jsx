// Material UI Imports
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const PlanPDX = () => {
  return (
    <Container maxWidth="xl" sx={{ minHeight: '50vh' }}>
      <Typography variant="h3" component="h1" textAlign="center" sx={{ px: '2rem', my: '40px' }}>
        PlanPDX
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ px: '2rem' }}>
        Smart city planning and community engagement projects from CODE PDX. More coming soon.
      </Typography>
    </Container>
  );
};

export default PlanPDX;
