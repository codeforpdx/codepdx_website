// React Imports
import { useRef, useState } from 'react';
// Material UI Imports
import Alert from '@mui/material/Alert';
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
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageFailure, setMessageFailure] = useState(false);
  const form = useRef();

  const handleClose = () => {
    setMessageSuccess(false);
    setMessageFailure(false);
    setShowContactFormModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_co2agxf', 'template_20pnwni', form.current, 'AkBl59Ya3226OfPyQ').then(
      () => {
        setMessageSuccess(true);
        e.target.reset();
        setTimeout(() => {
          setMessageSuccess(false);
          setShowContactFormModal(false);
        }, 5000);
      },
      () => {
        setMessageFailure(true);
      }
    );
  };

  return (
    <Dialog
      open={showContactFormModal}
      onClose={handleClose}
      sx={{
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
            inputProps={{ maxLength: 40 }}
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
            inputProps={{ maxLength: 40 }}
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
            inputProps={{ maxLength: 40 }}
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
            rows={4}
            required
            inputProps={{ maxLength: 500 }}
          />
        </DialogContent>
        <DialogActions>
          <Grid container spacing={1} px={2}>
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
      {messageSuccess && <Alert severity="success">Your message was successfully sent!</Alert>}
      {messageFailure && <Alert severity="error">There was an error. Please try again.</Alert>}
    </Dialog>
  );
};

ContactFormModal.propTypes = {
  showContactFormModal: PropTypes.bool,
  setShowContactFormModal: PropTypes.func
};

export default ContactFormModal;
