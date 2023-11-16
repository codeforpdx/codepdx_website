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

const ContactFormModal = ({ showContactFormModal, setShowContactFormModal }) => {
  const [email, setEmail] = useState('');

  const handleClose = () => {
    setShowContactFormModal(false);
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(`Email is: ${e.target.value}`);
    setEmail('');
  };

  return (
    <Dialog
      open={showContactFormModal}
      onClose={() => setShowContactFormModal(false)}
      sx={
        {
          // backgroundColor: 'red'
          // display: 'flex',
          // flexDirection: 'column',
          // alignText: 'center'
          // p: '50px'
        }
      }
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column'
            // alignContent: 'center',
            // justifyContent: 'center'
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
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
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
                  // onClick={handleSubmit}
                  // onChange={}
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

export default ContactFormModal;
