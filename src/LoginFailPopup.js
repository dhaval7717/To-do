import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function LoginFailPopup({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <p>Login failed. Please check your email and password.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginFailPopup;
