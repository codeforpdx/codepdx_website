import PropTypes from 'prop-types';
// Material UI Imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Step = ({ step, title, mb = 0, children }) => (
  <Box mb={mb}>
    {step ? (
      <Typography variant="h5" gutterBottom color="#499195" sx={{ fontWeight: '600' }}>
        <span style={{ color: '#304C46' }}>Step {step}:</span> {title}
      </Typography>
    ) : (
      <Typography variant="h5" gutterBottom color="#499195" sx={{ fontWeight: '600' }}>
        {title}
      </Typography>
    )}
    {children}
  </Box>
);

Step.propTypes = {
  step: PropTypes.number,
  title: PropTypes.string.isRequired,
  mb: PropTypes.number,
  children: PropTypes.node.isRequired
};

export default Step;
