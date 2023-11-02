import PropTypes from 'prop-types';
// import Typography from '@mui/material/Typography';

const Step = ({ children }) => (
  <>
    {/* <Typography>{title}</Typography> */}
    {/* <p>{title}</p> */}
    {children}
  </>
);

Step.propTypes = {
  children: PropTypes.node.isRequired
};

export default Step;
