import PropTypes from 'prop-types';
// Material UI Imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Step = ({ title, children }) => (
  <Box mb={8}>
    <Typography variant="h5" gutterBottom color="primary">
      {title}
    </Typography>
    {children}
  </Box>
);

Step.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Step;
