import { useEffect, useState } from 'react';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ButtonLarge from './Buttons/ButtonLarge';

import { createTheme } from '@mui/system';

const theme = createTheme();


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  // top: 0,
  // left: 0,
  transform: 'translate(-50%, -50%)',
  // width: 400,
  width: theme.breakpoints.down('sm') ? '300' : '500',
  height: theme.breakpoints.down('sm') ? '400' : '700',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalContact = (props) => {
  const [open, setOpen] = useState(true);

  // the modal is open after contact message sent, so submit button in form should activate open state
  // the modal should show only after a successful sent message, so async await used for email send


  const handleOpen = () => { 
    setOpen(true);
  }
  const handleClose = () => {
    props.closeModal();
    console.log('Modal closing');
    setOpen(false);
  };

  // show the modal whenever props.isOpen changes
  useEffect(() => {
    if (props.isOpen) {
      setOpen(true);
    }
  }, [props.isOpen]);

  return (
  //   <div>
  //   <Button onClick={handleOpen}>Open modal</Button>
  //   <Modal
  //     open={open}
  //     onClose={handleClose}
  //     aria-labelledby="modal-modal-title"
  //     aria-describedby="modal-modal-description"
  //   >
  //     <Box sx={style}>
  //       <Typography id="modal-modal-title" variant="h6" component="h2">
  //         Text in a modal
  //       </Typography>
  //       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  //         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //       </Typography>
  //     </Box>
  //   </Modal>
  // </div>
    <div>
        
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h1"
            color='secondary'
            fontSize='5rem'
            sx={{
              fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
            }}
          >
            Thank you for your message!
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="body1"
            color='secondary'
            fontSize='2rem'
            sx={{
              fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
            }}
          >
            Check your email inbox for an email confirming we received your
            message. Someone from our team will contact you as soon as possible.
            We look forward to connecting with you soon!
          </Typography>
        </Box>
    
      </Modal>

    </div>
  );
};

export default ModalContact;
