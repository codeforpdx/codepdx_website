// React Imports
import { useState } from 'react';
// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// Other Library Imports
import { PropTypes } from 'prop-types';

const ContactFormModal = ({ showContactFormModal, setShowContactFormModal }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => {
    setShowContactFormModal(false);
    setName('');
    setMessage('');
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].form[0].value);
    setMessage(e.target[1].form[1].value);
    setEmail(e.target[2].form[2].value);
    console.log(e.target[0].form[0].value);
    console.log(e.target[1].form[1].value);
    console.log(e.target[2].form[2].value);
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <Dialog open={showContactFormModal} onClose={() => handleClose}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box
          sx={{
            p: { xs: 0, md: 4 }
          }}
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>Contact Us</DialogTitle>
          <DialogContent>
            <DialogContentText>
              For any questions or to just reach out, contact us today!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Message"
              type="text"
              fullWidth
              variant="standard"
              multiline
              rows={5}
              required
            />
          </DialogContent>
          <DialogActions>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={handleClose}
                  fullWidth
                  sx={{ borderRadius: 5 }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  color="success"
                  variant="contained"
                  fullWidth
                  sx={{ borderRadius: 5 }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Box>
      </form>
    </Dialog>
  );
};

ContactFormModal.propTypes = {
  showContactFormModal: PropTypes.bool,
  setShowContactFormModal: PropTypes.bool
};

export default ContactFormModal;
