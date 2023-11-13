// React Imports
import { useState } from 'react';
// Material UI Imports
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const ContactFormModal = ({ showContactFormModal, setShowContactFormModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => {
    setShowContactFormModal(false);
  };

  const handleSubmit = () => {
    console.log('Submitted!');
  };

  return (
    <Dialog
      open={showContactFormModal}
      onClose={() => setShowContactFormModal(false)}
    >
      <DialogTitle
      >
        Contact Us
      </DialogTitle>
      <DialogContent>
        <DialogContentText
        >
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
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactFormModal;
