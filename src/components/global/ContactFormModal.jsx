// React Imports
import { useRef } from 'react';
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
import emailjs from '@emailjs/browser';
import { PropTypes } from 'prop-types';

const ContactFormModal = ({ showContactFormModal, setShowContactFormModal }) => {
  const form = useRef();

  const handleClose = () => {
    setShowContactFormModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_co2agxf', 'template_20pnwni', form.current, 'AkBl59Ya3226OfPyQ')
      .then((result) => {
        console.log(result.text);
      }, console.error());
    e.target.reset();
    setTimeout(() => {
      setShowContactFormModal(false);
    }, 500);
  };

  return (
    <Dialog
      open={showContactFormModal}
      onClose={handleClose}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <Box
        component="form"
        ref={form}
        onSubmit={handleSubmit}
        sx={{
          p: { xs: 0, md: 4 }
        }}
      >
        <DialogTitle>Contact Us</DialogTitle>
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
            name="name"
            fullWidth
            variant="standard"
            autoComplete="true"
            required
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            name="email"
            fullWidth
            variant="standard"
            autoComplete="true"
            required
          />
          <TextField
            margin="dense"
            id="subject"
            label="Subject"
            type="text"
            name="subject"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            margin="dense"
            id="message"
            label="Message"
            type="text"
            name="message"
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
    </Dialog>
  );
};

ContactFormModal.propTypes = {
  showContactFormModal: PropTypes.bool,
  setShowContactFormModal: PropTypes.func
};

export default ContactFormModal;
